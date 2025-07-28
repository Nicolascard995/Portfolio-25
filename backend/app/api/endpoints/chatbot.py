from fastapi import APIRouter, File, UploadFile, Form, HTTPException, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
import pandas as pd
import json
import io
import time
import uuid
from typing import Optional, List
import httpx

from app.api.schemas import (
    ChatRequest, 
    ChatResponse, 
    FileAnalysisRequest,
    LLMModel,
    MessageResponse,
    ErrorResponse
)
from app.core.config import settings
from app.db.base import get_db
from app.db.models import ChatLog
from fastapi import Query

router = APIRouter()


class LLMService:
    """
    Servicio para integración con LLMs (solo ChatGPT)
    """
    
    @staticmethod
    async def call_openai(prompt: str, context: Optional[str] = None) -> dict:
        """
        Llama a la API de OpenAI (gpt-3.5-turbo) para conversación general y análisis de archivos
        """
        import os
        import openai
        openai.api_key = settings.OPENAI_API_KEY
        try:
            response = await openai.ChatCompletion.acreate(
                model="gpt-3.5-turbo",
                messages=[{"role": "system", "content": "Eres un asistente profesional de datos. Responde de forma precisa, sin inventar información. Si no sabes algo, indícalo claramente."},
                          {"role": "user", "content": prompt}],
                temperature=0,
                max_tokens=1024
            )
            chat_response = response.choices[0].message.content
            tokens = response.usage.total_tokens if hasattr(response, 'usage') else None
        except Exception as e:
            chat_response = f"[Error al consultar OpenAI: {str(e)}]"
            tokens = None
        return {
            "response": chat_response,
            "tokens": tokens,
            "model": "gpt-3.5-turbo"
        }


async def process_file(file: UploadFile) -> dict:
    """
    Procesa archivo subido y extrae información básica
    """
    content = await file.read()
    file_info = {
        "nombre": file.filename,
        "tamaño": len(content),
        "tipo": file.content_type
    }
    
    try:
        if file.filename.endswith('.csv'):
            df = pd.read_csv(io.BytesIO(content))
            file_info.update({
                "filas": len(df),
                "columnas": len(df.columns),
                "columnas_nombres": list(df.columns),
                "muestra": df.head(3).to_dict('records') if len(df) > 0 else []
            })
        elif file.filename.endswith(('.xlsx', '.xls')):
            df = pd.read_excel(io.BytesIO(content))
            file_info.update({
                "filas": len(df),
                "columnas": len(df.columns),
                "columnas_nombres": list(df.columns),
                "muestra": df.head(3).to_dict('records') if len(df) > 0 else []
            })
        elif file.filename.endswith('.json'):
            data = json.loads(content.decode('utf-8'))
            file_info.update({
                "estructura": type(data).__name__,
                "keys": list(data.keys()) if isinstance(data, dict) else None,
                "muestra": str(data)[:500] + "..." if len(str(data)) > 500 else str(data)
            })
    except Exception as e:
        file_info["error_procesamiento"] = str(e)
    
    return file_info


@router.post("/chat", response_model=ChatResponse)
async def chat_with_assistant(
    request: ChatRequest,
    db: Session = Depends(get_db)
):
    """
    Chat general con el asistente de Dozo.Tech (solo ChatGPT)
    """
    start_time = time.time()
    session_id = request.session_id or str(uuid.uuid4())
    try:
        llm_response = await LLMService.call_openai(request.mensaje)
        response_time = time.time() - start_time
        chat_log = ChatLog(
            session_id=session_id,
            tipo_interaccion="chat",
            mensaje_usuario=request.mensaje,
            respuesta_llm=llm_response["response"],
            modelo_usado=llm_response["model"],
            tokens_utilizados=llm_response["tokens"],
            tiempo_respuesta=int(response_time * 1000)
        )
        db.add(chat_log)
        db.commit()
        return ChatResponse(
            respuesta=llm_response["response"],
            modelo_usado=LLMModel.OPENAI,
            tokens_utilizados=llm_response["tokens"],
            tiempo_respuesta=response_time,
            session_id=session_id
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en chat: {str(e)}")


@router.post("/analyze", response_model=ChatResponse)
async def analyze_file(
    file: UploadFile = File(...),
    prompt: str = Form(...),
    session_id: Optional[str] = Form(None),
    db: Session = Depends(get_db)
):
    """
    Analiza archivo subido con IA (solo ChatGPT)
    """
    start_time = time.time()
    session_id = session_id or str(uuid.uuid4())
    if file.size > settings.MAX_FILE_SIZE:
        raise HTTPException(status_code=413, detail="Archivo muy grande")
    file_extension = "." + file.filename.split(".")[-1].lower()
    if file_extension not in settings.ALLOWED_FILE_TYPES:
        raise HTTPException(
            status_code=400, 
            detail=f"Tipo de archivo no permitido. Permitidos: {settings.ALLOWED_FILE_TYPES}"
        )
    try:
        file_info = await process_file(file)
        # Siempre usar ChatGPT para el análisis
        llm_response = await LLMService.call_openai(f"{prompt}\n\nContexto del archivo: {str(file_info)}")
        response_time = time.time() - start_time
        datos_grafico = None
        if "```json" in llm_response["response"]:
            try:
                json_start = llm_response["response"].find("```json") + 7
                json_end = llm_response["response"].find("```", json_start)
                json_data = llm_response["response"][json_start:json_end].strip()
                datos_grafico = json.loads(json_data)
            except:
                pass
        chat_log = ChatLog(
            session_id=session_id,
            tipo_interaccion="analyze",
            mensaje_usuario=prompt,
            archivo_nombre=file.filename,
            archivo_tipo=file_extension,
            respuesta_llm=llm_response["response"],
            modelo_usado=llm_response["model"],
            tokens_utilizados=llm_response["tokens"],
            tiempo_respuesta=int(response_time * 1000)
        )
        db.add(chat_log)
        db.commit()
        return ChatResponse(
            respuesta=llm_response["response"],
            modelo_usado=LLMModel.OPENAI,
            tokens_utilizados=llm_response["tokens"],
            tiempo_respuesta=response_time,
            session_id=session_id,
            datos_grafico=datos_grafico
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error procesando archivo: {str(e)}")


@router.get("/logs", response_model=List[dict])
async def get_chat_logs(
    limit: int = Query(100, ge=1, le=500),
    db: Session = Depends(get_db)
):
    """
    Devuelve los últimos logs de interacciones del chatbot (máx 500).
    NOTA: Agregar autenticación para uso en producción.
    """
    logs = db.query(ChatLog).order_by(ChatLog.fecha_creacion.desc()).limit(limit).all()
    # Serializar los logs manualmente para evitar problemas con objetos no serializables
    return [
        {
            "id": log.id,
            "session_id": log.session_id,
            "tipo_interaccion": log.tipo_interaccion,
            "mensaje_usuario": log.mensaje_usuario,
            "archivo_nombre": log.archivo_nombre,
            "archivo_tipo": log.archivo_tipo,
            "respuesta_llm": log.respuesta_llm,
            "modelo_usado": log.modelo_usado,
            "tokens_utilizados": log.tokens_utilizados,
            "fecha_creacion": log.fecha_creacion.isoformat() if log.fecha_creacion else None,
            "tiempo_respuesta": log.tiempo_respuesta,
            "ip_address": log.ip_address,
        }
        for log in logs
    ] 
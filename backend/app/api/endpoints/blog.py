from fastapi import APIRouter, HTTPException, Depends, Query
from sqlalchemy.orm import Session
from typing import List, Optional
import json
from datetime import datetime

from app.api.schemas import (
    BlogPostCreate, 
    BlogPostResponse, 
    BlogPostSummary,
    MessageResponse
)
from app.core.config import settings
from app.db.base import get_db
from app.db.models import BlogPost

router = APIRouter()


@router.get("/posts", response_model=List[BlogPostSummary])
async def get_blog_posts(
    limit: int = Query(10, ge=1, le=50),
    offset: int = Query(0, ge=0),
    categoria: Optional[str] = None,
    publicado: bool = True,
    db: Session = Depends(get_db)
):
    """
    Obtener lista de artículos del blog
    """
    try:
        query = db.query(BlogPost).filter(BlogPost.publicado == publicado)
        
        if categoria:
            query = query.filter(BlogPost.categoria == categoria)
        
        posts = query.order_by(BlogPost.fecha_publicacion.desc())\
                    .offset(offset)\
                    .limit(limit)\
                    .all()
        
        return posts
        
    except Exception as e:
        # Retornar datos demo si hay error con la DB
        return get_demo_blog_posts()


@router.get("/posts/{post_id}", response_model=BlogPostResponse)
async def get_blog_post(post_id: int, db: Session = Depends(get_db)):
    """
    Obtener un artículo específico del blog
    """
    try:
        post = db.query(BlogPost).filter(BlogPost.id == post_id).first()
        
        if not post:
            raise HTTPException(status_code=404, detail="Artículo no encontrado")
        
        # Incrementar contador de vistas
        post.vistas += 1
        db.commit()
        
        return post
        
    except HTTPException:
        raise
    except Exception as e:
        # Retornar artículo demo si hay error
        return get_demo_article(post_id)


@router.get("/posts/slug/{slug}", response_model=BlogPostResponse)
async def get_blog_post_by_slug(slug: str, db: Session = Depends(get_db)):
    """
    Obtener artículo por slug (URL amigable)
    """
    try:
        post = db.query(BlogPost).filter(BlogPost.slug == slug).first()
        
        if not post:
            raise HTTPException(status_code=404, detail="Artículo no encontrado")
        
        # Incrementar contador de vistas
        post.vistas += 1
        db.commit()
        
        return post
        
    except HTTPException:
        raise
    except Exception as e:
        return get_demo_article_by_slug(slug)


@router.post("/posts", response_model=BlogPostResponse)
async def create_blog_post(
    post_data: BlogPostCreate,
    db: Session = Depends(get_db)
):
    """
    Crear nuevo artículo (solo admin)
    TODO: Implementar autenticación
    """
    try:
        # Convertir tags a JSON string
        tags_json = json.dumps(post_data.tags) if post_data.tags else None
        
        new_post = BlogPost(
            titulo=post_data.titulo,
            slug=post_data.slug,
            resumen=post_data.resumen,
            contenido=post_data.contenido,
            categoria=post_data.categoria,
            tags=tags_json,
            imagen_url=post_data.imagen_url,
            publicado=post_data.publicado,
            meta_description=post_data.meta_description,
            meta_keywords=post_data.meta_keywords,
            fecha_publicacion=datetime.now() if post_data.publicado else None
        )
        
        db.add(new_post)
        db.commit()
        db.refresh(new_post)
        
        return new_post
        
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Error al crear artículo: {str(e)}"
        )


@router.get("/demo-posts")
async def get_demo_blog_posts():
    """
    Artículos demo para mostrar el blog sin DB
    """
    demo_posts = [
        {
            "id": 1,
            "titulo": "5 Procesos que Puedes Automatizar HOY en tu Restaurante",
            "slug": "automatizar-procesos-restaurante",
            "resumen": "De chef a desarrollador de IA: te muestro exactamente qué automatizar primero para ver resultados inmediatos en tu negocio gastronómico.",
            "categoria": "Gastronomía",
            "imagen_url": "/blog/restaurante-automatizacion.jpg",
            "fecha_publicacion": "2024-01-25T10:00:00",
            "vistas": 1247
        },
        {
            "id": 2,
            "titulo": "ChatGPT vs Claude vs Gemini: ¿Cuál Elegir para tu PYME?",
            "slug": "comparacion-llms-pymes",
            "resumen": "Análisis práctico de las 3 IA más populares desde la perspectiva de un emprendedor. Con casos de uso reales y recomendaciones específicas.",
            "categoria": "Inteligencia Artificial",
            "imagen_url": "/blog/ia-comparison.jpg",
            "fecha_publicacion": "2024-01-22T14:30:00",
            "vistas": 892
        },
        {
            "id": 3,
            "titulo": "De Spreadsheets a Insights: Mi Framework de Análisis de Datos",
            "slug": "framework-analisis-datos-pymes",
            "resumen": "El método que uso para transformar datos desordenados en decisiones estratégicas. Incluye plantillas descargables y casos prácticos.",
            "categoria": "Data Science",
            "imagen_url": "/blog/data-analysis.jpg",
            "fecha_publicacion": "2024-01-18T09:15:00",
            "vistas": 634
        },
        {
            "id": 4,
            "titulo": "N8N + IA: Cómo Crear tu Primer Agente Automatizado",
            "slug": "n8n-agente-automatizado",
            "resumen": "Tutorial paso a paso para crear un agente que maneja tus leads automáticamente. Sin código, con resultados profesionales.",
            "categoria": "Automatización",
            "imagen_url": "/blog/n8n-automation.jpg",
            "fecha_publicacion": "2024-01-15T16:45:00",
            "vistas": 1089
        },
        {
            "id": 5,
            "titulo": "ROI Real: Mis 3 Proyectos de IA que más Dinero Ahorraron",
            "slug": "roi-proyectos-ia-casos-exito",
            "resumen": "Números reales, inversión exacta y retorno medible. Te muestro los proyectos que más impacto tuvieron en la rentabilidad.",
            "categoria": "Casos de Éxito",
            "imagen_url": "/blog/roi-casos-exito.jpg",
            "fecha_publicacion": "2024-01-12T11:20:00",
            "vistas": 1456
        }
    ]
    
    return {
        "mensaje": "Artículos del Blog Dozo.Tech",
        "total": len(demo_posts),
        "posts": demo_posts,
        "nota": "Contenido enfocado en IA práctica para emprendedores y PYMES"
    }


@router.get("/categories")
async def get_categories():
    """
    Obtener categorías disponibles
    """
    return {
        "categorias": [
            {"nombre": "Gastronomía", "descripcion": "IA y automatización para restaurantes", "posts": 8},
            {"nombre": "Inteligencia Artificial", "descripcion": "Guías prácticas de IA para negocios", "posts": 12},
            {"nombre": "Data Science", "descripcion": "Análisis de datos para PYMES", "posts": 6},
            {"nombre": "Automatización", "descripcion": "Workflows y procesos automatizados", "posts": 10},
            {"nombre": "Casos de Éxito", "descripcion": "Proyectos reales con ROI medible", "posts": 5}
        ],
        "mensaje": "Categorías del Blog Dozo.Tech - Inteligencia en Acción"
    }


def get_demo_article(article_id: int):
    """
    Retorna artículo demo específico
    """
    articles = {
        1: {
            "id": 1,
            "titulo": "5 Procesos que Puedes Automatizar HOY en tu Restaurante",
            "slug": "automatizar-procesos-restaurante",
            "resumen": "De chef a desarrollador de IA: te muestro exactamente qué automatizar primero para ver resultados inmediatos en tu negocio gastronómico.",
            "contenido": """
# 5 Procesos que Puedes Automatizar HOY en tu Restaurante

Como chef que migró al mundo de la tecnología, entiendo perfectamente los dolores de cabeza operativos de un restaurante. Aquí te comparto los 5 procesos que debes automatizar **primero** para ver resultados inmediatos.

## 1. Gestión de Inventario con IA Predictiva

**El problema**: Stock insuficiente o excedentes que se vencen.
**La solución**: Sistema que predice demanda basado en:
- Histórico de ventas
- Días de la semana
- Eventos locales
- Clima

**ROI esperado**: 15-25% reducción en desperdicios

## 2. Automatización de Pedidos Online

**El problema**: Errores manuales en transcripción de pedidos.
**La solución**: Integración directa delivery → cocina con:
- Tickets automáticos
- Actualización de stock en tiempo real
- Notificaciones push al cliente

**ROI esperado**: 40% reducción en errores

## 3. Análisis de Rentabilidad por Plato

**El problema**: No sabes qué platos realmente generan ganancia.
**La solución**: Dashboard que muestra:
- Costo real vs precio venta
- Tiempo de preparación
- Popularidad vs margen

**ROI esperado**: 20-30% mejora en márgenes

## 4. Gestión Automática de Personal

**El problema**: Sobrecontratación o falta de personal.
**La solución**: Sistema que calcula:
- Proyección de demanda
- Horas óptimas por rol
- Costos de mano de obra

**ROI esperado**: 18% reducción en costos laborales

## 5. Feedback y Reseñas Automatizadas

**El problema**: Reseñas negativas que no se detectan a tiempo.
**La solución**: Monitoreo automático que:
- Detecta menciones en redes
- Analiza sentiment de reseñas
- Genera respuestas automáticas

**ROI esperado**: 35% mejora en rating promedio

## Mi Experiencia: Del Caos a la Eficiencia

Cuando manejaba mi propio negocio, estos mismos problemas me tenían despierto por las noches. La diferencia entre un restaurante que apenas sobrevive y uno que escala está en la **sistematización**.

## ¿Quieres Implementar Esto?

He desarrollado soluciones específicas para cada uno de estos procesos. Si te interesa una consultoría personalizada:

📧 nicolas@dozo.tech
🚀 [Agendar demo gratuita](https://dozo.tech/demo)

*Próximo artículo: "Cómo implementé ChatGPT para automatizar respuestas de atención al cliente"*
            """,
            "categoria": "Gastronomía",
            "tags": ["automatización", "restaurantes", "IA", "eficiencia"],
            "imagen_url": "/blog/restaurante-automatizacion.jpg",
            "publicado": True,
            "fecha_creacion": "2024-01-25T10:00:00",
            "fecha_publicacion": "2024-01-25T10:00:00",
            "vistas": 1247
        }
    }
    
    return articles.get(article_id, articles[1])  # Default al primer artículo


def get_demo_article_by_slug(slug: str):
    """
    Retorna artículo demo por slug
    """
    if slug == "automatizar-procesos-restaurante":
        return get_demo_article(1)
    else:
        return get_demo_article(1)  # Default 
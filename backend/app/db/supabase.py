from supabase import create_client, Client
from app.core.config import settings
from typing import Optional, Dict, Any, List
import json
from datetime import datetime


class SupabaseService:
    """
    Servicio para manejar operaciones con Supabase
    """
    
    def __init__(self):
        # Hacer la inicialización de Supabase opcional para desarrollo/pruebas
        if not settings.SUPABASE_URL or not settings.SUPABASE_KEY:
            print("⚠️  ADVERTENCIA: SUPABASE_URL y SUPABASE_KEY no están configurados")
            print("   La aplicación funcionará sin base de datos")
            self.supabase = None
        else:
            self.supabase: Client = create_client(
                settings.SUPABASE_URL,
                settings.SUPABASE_KEY
            )
    
    # ===== OPERACIONES DE LEADS =====
    
    async def create_lead(self, lead_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Crear un nuevo lead en Supabase
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - simulando creación de lead")
            return {"id": 1, "mensaje": "Lead simulado (Supabase no configurado)", **lead_data}
        
        try:
            response = self.supabase.table("leads").insert(lead_data).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            raise Exception(f"Error al crear lead: {str(e)}")
    
    async def get_leads_stats(self) -> Dict[str, Any]:
        """
        Obtener estadísticas de leads
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - devolviendo estadísticas simuladas")
            return {
                "total_leads": 0,
                "leads_hoy": 0,
                "distribucion_sectores": {},
                "mensaje": "Estadísticas simuladas (Supabase no configurado)"
            }
        
        try:
            # Total de leads
            total_response = self.supabase.table("leads").select("id", count="exact").execute()
            total_leads = total_response.count if hasattr(total_response, 'count') else 0
            
            # Leads de hoy
            today = datetime.now().date().isoformat()
            today_response = self.supabase.table("leads").select("id", count="exact").gte("fecha_creacion", today).execute()
            leads_today = today_response.count if hasattr(today_response, 'count') else 0
            
            # Distribución por sector
            sector_response = self.supabase.table("leads").select("sector").not_.is_("sector", "null").execute()
            sector_count = {}
            for lead in sector_response.data:
                sector = lead.get("sector")
                if sector:
                    sector_count[sector] = sector_count.get(sector, 0) + 1
            
            return {
                "total_leads": total_leads,
                "leads_hoy": leads_today,
                "distribucion_sectores": sector_count
            }
        except Exception as e:
            raise Exception(f"Error al obtener estadísticas: {str(e)}")
    
    # ===== OPERACIONES DE BLOG =====
    
    async def get_blog_posts(self, limit: int = 10, offset: int = 0, categoria: Optional[str] = None, publicado: bool = True) -> List[Dict[str, Any]]:
        """
        Obtener lista de artículos del blog
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - devolviendo posts simulados")
            return [
                {
                    "id": 1,
                    "titulo": "Post de ejemplo",
                    "contenido": "Este es un post de ejemplo porque Supabase no está configurado",
                    "slug": "post-ejemplo",
                    "categoria": "tecnologia",
                    "publicado": True,
                    "fecha_publicacion": "2024-01-01",
                    "vistas": 0
                }
            ]
        
        try:
            query = self.supabase.table("blog_posts").select("*").eq("publicado", publicado)
            
            if categoria:
                query = query.eq("categoria", categoria)
            
            response = query.order("fecha_publicacion", desc=True).range(offset, offset + limit - 1).execute()
            return response.data
        except Exception as e:
            raise Exception(f"Error al obtener posts del blog: {str(e)}")
    
    async def get_blog_post(self, post_id: int) -> Optional[Dict[str, Any]]:
        """
        Obtener un artículo específico del blog
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - devolviendo post simulado")
            return {
                "id": post_id,
                "titulo": f"Post de ejemplo {post_id}",
                "contenido": "Este es un post de ejemplo porque Supabase no está configurado",
                "slug": f"post-ejemplo-{post_id}",
                "categoria": "tecnologia",
                "publicado": True,
                "fecha_publicacion": "2024-01-01",
                "vistas": 0
            }
        
        try:
            response = self.supabase.table("blog_posts").select("*").eq("id", post_id).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            raise Exception(f"Error al obtener post del blog: {str(e)}")
    
    async def get_blog_post_by_slug(self, slug: str) -> Optional[Dict[str, Any]]:
        """
        Obtener artículo por slug
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - devolviendo post simulado por slug")
            return {
                "id": 1,
                "titulo": f"Post de ejemplo: {slug}",
                "contenido": "Este es un post de ejemplo porque Supabase no está configurado",
                "slug": slug,
                "categoria": "tecnologia",
                "publicado": True,
                "fecha_publicacion": "2024-01-01",
                "vistas": 0
            }
        
        try:
            response = self.supabase.table("blog_posts").select("*").eq("slug", slug).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            raise Exception(f"Error al obtener post por slug: {str(e)}")
    
    async def create_blog_post(self, post_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Crear nuevo artículo del blog
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - simulando creación de post")
            return {"id": 1, "mensaje": "Post simulado (Supabase no configurado)", **post_data}
        
        try:
            response = self.supabase.table("blog_posts").insert(post_data).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            raise Exception(f"Error al crear post del blog: {str(e)}")
    
    async def increment_blog_views(self, post_id: int) -> bool:
        """
        Incrementar contador de vistas de un artículo
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - simulando incremento de vistas")
            return True
        
        try:
            # Primero obtener el post actual
            post = await self.get_blog_post(post_id)
            if not post:
                return False
            
            # Incrementar vistas
            new_views = post.get("vistas", 0) + 1
            response = self.supabase.table("blog_posts").update({"vistas": new_views}).eq("id", post_id).execute()
            return True
        except Exception as e:
            raise Exception(f"Error al incrementar vistas: {str(e)}")
    
    # ===== OPERACIONES DE CHATBOT =====
    
    async def create_chat_log(self, log_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Crear nuevo log de chat
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - simulando creación de log de chat")
            return {"id": 1, "mensaje": "Log simulado (Supabase no configurado)", **log_data}
        
        try:
            response = self.supabase.table("chat_logs").insert(log_data).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            raise Exception(f"Error al crear log de chat: {str(e)}")
    
    async def get_chat_logs(self, limit: int = 100) -> List[Dict[str, Any]]:
        """
        Obtener logs de chat
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - devolviendo logs simulados")
            return [
                {
                    "id": 1,
                    "mensaje": "Log simulado (Supabase no configurado)",
                    "fecha_creacion": "2024-01-01T00:00:00"
                }
            ]
        
        try:
            response = self.supabase.table("chat_logs").select("*").order("fecha_creacion", desc=True).limit(limit).execute()
            return response.data
        except Exception as e:
            raise Exception(f"Error al obtener logs de chat: {str(e)}")
    
    async def get_session_control(self, session_id: str) -> Optional[Dict[str, Any]]:
        """
        Obtener control de sesión
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - devolviendo control de sesión simulado")
            return {
                "session_id": session_id,
                "mensaje": "Control simulado (Supabase no configurado)"
            }
        
        try:
            response = self.supabase.table("session_control").select("*").eq("session_id", session_id).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            raise Exception(f"Error al obtener control de sesión: {str(e)}")
    
    async def create_session_control(self, session_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Crear nuevo control de sesión
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - simulando creación de control de sesión")
            return {"id": 1, "mensaje": "Control simulado (Supabase no configurado)", **session_data}
        
        try:
            response = self.supabase.table("session_control").insert(session_data).execute()
            return response.data[0] if response.data else None
        except Exception as e:
            raise Exception(f"Error al crear control de sesión: {str(e)}")
    
    async def update_session_control(self, session_id: str, update_data: Dict[str, Any]) -> bool:
        """
        Actualizar control de sesión
        """
        if not self.supabase:
            print("⚠️  Supabase no configurado - simulando actualización de control de sesión")
            return True
        
        try:
            response = self.supabase.table("session_control").update(update_data).eq("session_id", session_id).execute()
            return True
        except Exception as e:
            raise Exception(f"Error al actualizar control de sesión: {str(e)}")


# Instancia global del servicio Supabase
supabase_service = SupabaseService() 
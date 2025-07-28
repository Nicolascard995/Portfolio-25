import datetime
from googleapiclient.discovery import build
from google.oauth2 import service_account
from app.core.config import settings

SCOPES = ['https://www.googleapis.com/auth/calendar']


def create_calendar_event(summary: str, description: str, start_time: str, end_time: str, attendees: list):
    """
    Crea un evento en Google Calendar.
    - summary: Título del evento
    - description: Descripción (puedes incluir preguntas previas del lead)
    - start_time, end_time: formato 'YYYY-MM-DDTHH:MM:SS' (ej: '2024-06-10T10:00:00')
    - attendees: lista de dicts [{'email': ...}, ...]
    """
    credentials = service_account.Credentials.from_service_account_file(
        settings.GOOGLE_CALENDAR_CREDENTIALS, scopes=SCOPES)
    service = build('calendar', 'v3', credentials=credentials)
    event = {
        'summary': summary,
        'description': description,
        'start': {'dateTime': start_time, 'timeZone': 'America/Argentina/Buenos_Aires'},
        'end': {'dateTime': end_time, 'timeZone': 'America/Argentina/Buenos_Aires'},
        'attendees': attendees,
    }
    event = service.events().insert(calendarId=settings.GOOGLE_CALENDAR_ID, body=event).execute()
    return event 
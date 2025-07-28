import { NextRequest, NextResponse } from 'next/server';

// Configuración de idiomas soportados
const locales = ['es', 'en', 'de'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  // Obtener el pathname de la URL
  const pathname = request.nextUrl.pathname;
  
  // Verificar si ya tiene un locale en la URL
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Detectar el idioma preferido del navegador
  const acceptLanguage = request.headers.get('accept-language');
  let preferredLocale = defaultLocale;
  
  if (acceptLanguage) {
    const browserLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase();
    
    if (locales.includes(browserLocale)) {
      preferredLocale = browserLocale;
    }
  }

  // Redirigir a la URL con el locale
  const newUrl = new URL(`/${preferredLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Excluir archivos estáticos y API routes
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}; 
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['es', 'en', 'de'],

  // Used when no locale matches
  defaultLocale: 'es',
  
  // Always use the default locale for the root path
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en|de)/:path*']
}; 
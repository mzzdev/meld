import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  localePrefix: 'never',
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|es|en)/:path*']
};
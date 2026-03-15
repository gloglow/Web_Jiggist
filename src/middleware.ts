import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ko', 'en', 'ja'],
  defaultLocale: 'en',
  localePrefix: "always"
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
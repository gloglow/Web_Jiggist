import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ko', 'en', 'ja'],
  defaultLocale: 'ko'
});

export const config = {
  matcher: ['/', '/(ko|en|ja)/:path*']
};
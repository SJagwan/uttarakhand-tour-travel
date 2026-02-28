import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

/**
 * PRODUCTION MIDDLEWARE: Handles URL prefixing (/en, /hi)
 * and automatic language detection based on Accept-Language headers.
 */
export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(hi|en)/:path*']
};

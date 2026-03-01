import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleRequest = createMiddleware(routing);

export function proxy(request: any) {
  return handleRequest(request);
}

export default proxy;

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - Static files (e.g. /favicon.ico, /destinations/...)
  // - Vercel analytics/internals
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

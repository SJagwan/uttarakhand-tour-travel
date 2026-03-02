import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'hi'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // SEO: Ensure the locale is always present in the URL
  localePrefix: 'always' 
});

// Typed navigation helpers for use in components
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

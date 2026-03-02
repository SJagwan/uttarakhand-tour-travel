import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  let currentLocale = locale;
  if (!currentLocale || !routing.locales.includes(currentLocale as any)) {
    currentLocale = routing.defaultLocale;
  }

  return {
    locale: currentLocale,
    messages: (await import(`@/messages/${currentLocale}.json`)).default
  };
});

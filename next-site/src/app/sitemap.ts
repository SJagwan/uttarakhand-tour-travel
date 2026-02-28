import { MetadataRoute } from 'next';

/**
 * PRODUCTION SEO: Dynamic Sitemap Generator
 * This automatically lists every English and Hindi tour.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uttarakhandtourandtravels.co.in';

  // In a real project, fetch all slugs from the backend
  // const tours = await getTourSlugs(); 
  const tourSlugs = ['kedarnath-yatra', 'badrinath-tour', 'mussoorie-nainital'];

  const locales = ['en', 'hi'];

  const tourUrls = locales.flatMap((locale) =>
    tourSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/tours/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  const staticUrls = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }
  ]);

  return [...staticUrls, ...tourUrls];
}

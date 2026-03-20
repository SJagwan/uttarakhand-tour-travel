import { MetadataRoute } from 'next';
import { getAllTourSlugs, getAllDestSlugs } from '@/lib/api/tours';

/**
 * PRODUCTION SEO: Dynamic Sitemap Generator
 * Automatically generates URLs for all static pages, dynamic tours, and destinations in both locales.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jagwantourandtravels.com';

  const [tourSlugs, destSlugs] = await Promise.all([
    getAllTourSlugs(),
    getAllDestSlugs()
  ]);

  const locales = ['en', 'hi'];

  const tourUrls = locales.flatMap((locale) =>
    tourSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/tours/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  const destUrls = locales.flatMap((locale) =>
    destSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/destinations/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/tours', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/destinations', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/experience', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const staticUrls = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  );

  return [...staticUrls, ...tourUrls, ...destUrls];
}


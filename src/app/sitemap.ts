import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return [
    {
      url: `${baseUrl}/homepage`,
      lastModified: new Date('2025-04-27'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/industries-we-serve`,
      lastModified: new Date('2025-04-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-clients`,
      lastModified: new Date('2025-04-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
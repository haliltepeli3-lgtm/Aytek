import { MetadataRoute } from 'next';
import { productSlugs } from '@/lib/products';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aytekchiller.up.railway.app';
const locales = ['tr', 'en', 'de', 'fr'];
const staticPages = [
  '',
  '/kurumsal',
  '/urunler',
  '/tasarim-merkezi',
  '/referanslar',
  '/ihracat',
  '/iletisim',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  // Product detail pages
  for (const locale of locales) {
    for (const slug of productSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}/urunler/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}

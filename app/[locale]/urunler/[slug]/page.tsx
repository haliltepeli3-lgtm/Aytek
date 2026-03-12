import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { products, getProductBySlug, productSlugs } from '@/lib/products';

type Locale = 'tr' | 'en' | 'de' | 'fr';

export async function generateStaticParams() {
  const locales: Locale[] = ['tr', 'en', 'de', 'fr'];
  return locales.flatMap((locale) =>
    productSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return {
    title: `${product.name} | Aytek Chiller`,
    description: product.shortDesc[loc],
    openGraph: {
      title: `${product.name} | Aytek Chiller`,
      description: product.shortDesc[loc],
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = locale as Locale;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: 'products' });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aytekchiller.up.railway.app';

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description[loc],
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'Aytek Chiller',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Aytek Soğutma Sistemleri',
      url: siteUrl,
    },
    ...(product.capacity && { size: product.capacity }),
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/urunler" className="hover:text-primary transition-colors">{t('pageTitle')}</Link>
          <span>/</span>
          <span className="text-dark font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {product.category === 'chiller' ? 'Chiller' : product.category === 'temperature-control' ? 'Sıcaklık Kontrol' : 'HVAC'}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-dark mb-4">{product.name}</h1>

              {product.capacity && (
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {t('capacity')}: {product.capacity}
                </div>
              )}

              <p className="text-gray-600 leading-relaxed mb-8">{product.description[loc]}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-bold text-dark mb-4 text-sm uppercase tracking-wide">{t('features')}</h3>
                <ul className="space-y-2">
                  {product.features[loc].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/iletisim"
                className="btn-accent w-full justify-center text-base py-4"
              >
                {t('requestQuote')}
              </Link>
            </div>
          </div>

          {/* Applications */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-dark mb-8">{t('applications')}</h2>
            <div className="flex flex-wrap gap-3">
              {product.applications[loc].map((app) => (
                <span
                  key={app}
                  className="bg-gray-100 border border-gray-200 rounded-lg px-5 py-2.5 text-sm text-gray-700 font-medium"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-dark mb-8">{t('relatedProducts')}</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/urunler/${rel.slug}`}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-dark mb-1">{rel.name}</h3>
                    <p className="text-gray-500 text-xs line-clamp-2">{rel.shortDesc[loc]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {t('backToProducts')}
          </Link>
        </div>
      </div>
    </>
  );
}

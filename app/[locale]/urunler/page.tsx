import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { products, type ProductCategory } from '@/lib/products';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('productsTitle'),
    description: t('productsDescription'),
  };
}

type Locale = 'tr' | 'en' | 'de' | 'fr';

const categories: { key: ProductCategory; labelKey: 'cat1' | 'cat2' | 'cat3' }[] = [
  { key: 'chiller', labelKey: 'cat1' },
  { key: 'temperature-control', labelKey: 'cat2' },
  { key: 'hvac', labelKey: 'cat3' },
];

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'products' });

  const chillers = products.filter((p) => p.category === 'chiller');
  const tempControls = products.filter((p) => p.category === 'temperature-control');

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pageTitle')}</h1>
          <p className="text-xl text-gray-300">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Category Nav */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-5xl mx-auto flex gap-4 overflow-x-auto">
          {categories.map(({ key, labelKey }) => (
            <a
              key={key}
              href={`#${key}`}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              {t(labelKey)}
            </a>
          ))}
        </div>
      </section>

      {/* Chiller Products */}
      <section id="chiller" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Chiller</p>
            <h2 className="text-2xl font-bold text-dark">{t('cat1')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chillers.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/20 select-none">{product.name}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-dark text-lg">{product.name}</h3>
                    {product.capacity && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {product.capacity}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {product.shortDesc[loc]}
                  </p>
                  <Link
                    href={`/urunler/${product.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
                  >
                    {t('details')}
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temperature Control Products */}
      <section id="temperature-control" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Sıcaklık Kontrol</p>
            <h2 className="text-2xl font-bold text-dark">{t('cat2')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tempControls.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/20 select-none">{product.name}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-dark text-lg">{product.name}</h3>
                    {product.capacity && (
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                        {product.capacity}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {product.shortDesc[loc]}
                  </p>
                  <Link
                    href={`/urunler/${product.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
                  >
                    {t('details')}
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC Placeholder */}
      <section id="hvac" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">HVAC</p>
            <h2 className="text-2xl font-bold text-dark">{t('cat3')}</h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="font-bold text-dark text-xl mb-3">HVAC Çözümleri</h3>
            <p className="text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
              Ticari tesis ve endüstriyel projeler için özel HVAC sistemleri. Detaylı bilgi için bizimle iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="btn-primary"
            >
              {t('requestQuote')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

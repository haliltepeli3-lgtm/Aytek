import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { products } from '@/lib/products';

type Locale = 'tr' | 'en' | 'de' | 'fr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('designCenterTitle'),
    description: t('designCenterDescription'),
  };
}

const patentProducts = products.filter((p) =>
  ['co2tech', 'chilltech', 'pulsetech', 'labtech', 'multitech', 'thermotech-180'].includes(p.slug)
);

const patentIcons: Record<string, string> = {
  co2tech: '🌿',
  chilltech: '🔥',
  pulsetech: '⚡',
  labtech: '🔬',
  multitech: '♾️',
  'thermotech-180': '🌡️',
};

export default async function DesignCenterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'designCenter' });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/30 to-transparent" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 text-sm text-accent mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            T.C. Sanayi ve Teknoloji Bakanlığı
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pageTitle')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">AR-GE</p>
              <h2 className="text-3xl font-bold text-dark mb-6">
                Türkiye&apos;nin <span className="text-accent">13.</span> Tasarım Merkezi
              </h2>
              <div className="w-12 h-1 bg-accent rounded mb-6" />
              <p className="text-gray-600 leading-relaxed">{t('intro')}</p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '6', label: 'Patent Ürün / Patent Products' },
                { value: '13.', label: 'Türkiye Tasarım Merkezi' },
                { value: '35+', label: 'Yıl AR-GE / Years R&D' },
                { value: '100+', label: 'Mühendis / Engineers' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover:border-accent/40 transition-colors"
                >
                  <div className="text-2xl font-bold text-accent mb-1">{item.value}</div>
                  <div className="text-gray-500 text-xs font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patent Products */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{t('patentsLabel')}</p>
            <h2 className="text-3xl font-bold text-dark">{t('patentsTitle')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {patentProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-accent/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-4xl mb-4">{patentIcons[product.slug] || '⚙️'}</div>
                <h3 className="font-bold text-dark text-xl mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {product.shortDesc[loc]}
                </p>
                <div className="flex items-center gap-2 text-xs text-accent font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Patent Ürün
                </div>
                <Link
                  href={`/urunler/${product.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Detaylar
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-gray-300 text-lg mb-10">{t('ctaSubtitle')}</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
          >
            {t('ctaBtn')}
            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

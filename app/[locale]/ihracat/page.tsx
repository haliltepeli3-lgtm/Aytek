import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('exportTitle'),
    description: t('exportDescription'),
  };
}

export default async function ExportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'export' });
  const tc = await getTranslations({ locale, namespace: 'corporate' });

  
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

      {/* Stats */}
      <section className="py-12 px-4 bg-accent">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-white/20">
            <div className="text-center text-white px-4">
              <div className="text-3xl font-bold mb-1">{t('countriesValue')}</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">{t('countriesLabel')}</div>
            </div>
            <div className="text-center text-white px-4">
              <div className="text-3xl font-bold mb-1">{t('partnersValue')}</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">{t('partnersLabel')}</div>
            </div>
            <div className="text-center text-white px-4">
              <div className="text-3xl font-bold mb-1">1983</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">İlk İhracat / First Export</div>
            </div>
            <div className="text-center text-white px-4">
              <div className="text-3xl font-bold mb-1">2</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Uluslararası Ofis / Int. Offices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">{t('intro')}</p>
        </div>
      </section>

      {/* Regions */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌎', name: t('region1'), count: null, desc: t('region1Desc') },
              { icon: '🌍', name: t('region2'), count: t('region2Count'), desc: t('region2Desc') },
              { icon: '🌍', name: t('region3'), count: t('region3Count'), desc: t('region3Desc') },
              { icon: '🌏', name: t('region4'), count: t('region4Count'), desc: t('region4Desc') },
            ].map((region) => (
              <div
                key={region.name}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="text-5xl mb-4">{region.icon}</div>
                <h3 className="font-bold text-dark text-lg mb-1">{region.name}</h3>
                {region.count && (
                  <div className="text-accent font-semibold text-sm mb-2">{region.count}</div>
                )}
                <p className="text-gray-500 text-sm leading-relaxed">{region.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Offices */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">{t('officesTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🇩🇪</div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{tc('office1Name')}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{tc('office1Company')}</p>
                  <div className="space-y-1 text-gray-500 text-sm">
                    <p>{tc('office1Address')}</p>
                    <a href="tel:+49605196650" className="hover:text-primary transition-colors">{tc('office1Phone')}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🇬🇧</div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{tc('office2Name')}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{tc('office2Company')}</p>
                  <div className="space-y-1 text-gray-500 text-sm">
                    <p>{tc('office2Address')}</p>
                    <a href="tel:+447468895511" className="hover:text-primary transition-colors">{tc('office2Phone')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Küresel Ağımıza Katılın</h2>
          <p className="text-white/90 text-lg mb-10">Distribütörlük ve iş ortaklığı fırsatları için bizimle iletişime geçin.</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  );
}

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
    title: t('corporateTitle'),
    description: t('corporateDescription'),
  };
}

export default async function CorporatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'corporate' });
  const tnav = await getTranslations({ locale, namespace: 'nav' });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">1983</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pageTitle')}</h1>
          <p className="text-xl text-gray-300">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('storyLabel')}</p>
              <h2 className="text-3xl font-bold text-dark mb-6">{t('storyTitle')}</h2>
              <div className="w-12 h-1 bg-accent rounded mb-8" />
              <div className="space-y-5">
                <p className="text-gray-600 leading-relaxed">{t('story1')}</p>
                <p className="text-gray-600 leading-relaxed">{t('story2')}</p>
                <p className="text-gray-600 leading-relaxed">{t('story3')}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1983', label: 'Kuruluş / Founded' },
                { value: '7.000+', label: 'Kurulum / Installations' },
                { value: '140', label: 'Personel / Staff' },
                { value: '6.000 m²', label: 'Fabrika / Factory' },
                { value: '75+', label: 'Ülke / Countries' },
                { value: '42', label: 'Ortak / Partners' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-primary/30 transition-colors text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-gray-500 text-xs font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{t('certLabel')}</p>
            <h2 className="text-3xl font-bold text-dark">ISO 9001 · Tasarım Merkezi</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* ISO */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{t('certLabel')}</p>
                  <h3 className="font-bold text-dark text-lg">{t('isoTitle')}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('isoDesc')}</p>
            </div>

            {/* Design Center */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{t('designLabel')}</p>
                  <h3 className="font-bold text-dark text-lg">{t('designTitle')}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('designDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* International Offices */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{t('officesLabel')}</p>
            <h2 className="text-3xl font-bold text-dark">🇩🇪 · 🇬🇧</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* DE */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🇩🇪</div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{t('office1Name')}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{t('office1Company')}</p>
                  <div className="space-y-1 text-gray-500 text-sm">
                    <p>{t('office1Address')}</p>
                    <a href={`tel:${t('office1Phone').replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{t('office1Phone')}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* UK */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🇬🇧</div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{t('office2Name')}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{t('office2Company')}</p>
                  <div className="space-y-1 text-gray-500 text-sm">
                    <p>{t('office2Address')}</p>
                    <a href={`tel:${t('office2Phone').replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{t('office2Phone')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">{t('qualityLabel')}</p>
          <h2 className="text-3xl font-bold mb-6">{t('qualityTitle')}</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-10">{t('qualityDesc')}</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
          >
            {tnav('contact')}
          </Link>
        </div>
      </section>
    </>
  );
}

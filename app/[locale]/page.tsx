import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aytekchiller.up.railway.app';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': siteUrl,
  name: 'Aytek Soğutma Sistemleri',
  alternateName: 'Aytek Chiller',
  url: siteUrl,
  foundingDate: '1983',
  description: 'Industrial chiller and temperature control systems manufacturer based in Istanbul, Turkey. Exporting to 75+ countries since 1983.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hadımköy Mah. Atatürk San. Niyaz Sk. No:12',
    addressLocality: 'Arnavutköy',
    addressRegion: 'Istanbul',
    postalCode: '34555',
    addressCountry: 'TR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+90-212-549-11-99',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['Turkish', 'English', 'German', 'French'],
    },
  ],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 140 },
  areaServed: 'Worldwide',
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'TÜV ISO 9001:2015' },
    { '@type': 'EducationalOccupationalCredential', name: "Türkiye'nin 13. Tasarım Merkezi" },
  ],
};

const whyIcons = [
  <svg key="w1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="w2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key="w3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="w4" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const th = await getTranslations({ locale, namespace: 'home' });
  const tnav = await getTranslations({ locale, namespace: 'nav' });

  const sectors = th('sectors').split('|');

  const cats = [
    { href: '/urunler', icon: '❄️', title: th('cat1Title'), desc: th('cat1Desc'), cta: th('cat1Cta') },
    { href: '/urunler', icon: '🌡️', title: th('cat2Title'), desc: th('cat2Desc'), cta: th('cat2Cta') },
    { href: '/iletisim', icon: '🏭', title: th('cat3Title'), desc: th('cat3Desc'), cta: th('cat3Cta') },
  ];

  const whys = [
    { icon: whyIcons[0], title: th('why1Title'), desc: th('why1Desc') },
    { icon: whyIcons[1], title: th('why2Title'), desc: th('why2Desc') },
    { icon: whyIcons[2], title: th('why3Title'), desc: th('why3Desc') },
    { icon: whyIcons[3], title: th('why4Title'), desc: th('why4Desc') },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Hero />
      <StatsBar />

      {/* ─── Ürün Kategorileri ─── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              {th('categoriesLabel')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">{th('categoriesTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cats.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-200 group text-center"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-bold text-dark text-lg mb-3">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{cat.desc}</p>
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 group-hover:text-accent"
                >
                  {cat.cta}
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Kullanım Alanları ─── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              {th('sectorsLabel')}
            </p>
            <h2 className="text-3xl font-bold text-dark">{th('sectorsTitle')}</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="border border-gray-200 rounded-lg px-5 py-2.5 text-sm text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-150 cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Neden Aytek ─── */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              {th('whyLabel')}
            </p>
            <h2 className="text-3xl font-bold text-white">{th('whyTitle')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whys.map((why) => (
              <div
                key={why.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/30 hover:bg-white/10 transition-all duration-200 group text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                  {why.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{why.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── İhracat Highlight ─── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left numbers */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '75+', label: 'Ülke / Countries' },
                { value: '42', label: 'İş Ortağı / Partners' },
                { value: '7.000+', label: 'Kurulum / Installations' },
                { value: '40+', label: 'Yıl Deneyim / Years' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-primary/40 transition-colors"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-gray-500 text-xs font-medium">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Right text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                {th('refsLabel')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{th('refsTitle')}</h2>
              <div className="w-12 h-1 bg-accent rounded mb-6" />
              <p className="text-gray-500 leading-relaxed mb-8">
                Amerika kıtasından Avrupa&apos;ya, Afrika&apos;dan Asya&apos;ya uzanan ihracat ağımızla Türk mühendislik ürünlerini dünyaya taşıyoruz. Almanya ve İngiltere&apos;deki ofislerimiz aracılığıyla yerel destek sunuyoruz.
              </p>
              <Link
                href="/ihracat"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                {th('viewAll')} — {tnav('export')}
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{th('ctaTitle')}</h2>
          <p className="text-white/90 text-lg mb-10">{th('ctaSubtitle')}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors shadow-lg"
            >
              {th('ctaPrimary')}
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              {th('ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

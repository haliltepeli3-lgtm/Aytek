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
    title: t('referencesTitle'),
    description: t('referencesDescription'),
  };
}

const references = [
  { name: 'Ağrı Devlet Hastanesi', sector: 'Sağlık / Healthcare', product: 'MASTERtech', capacity: '2x 200 kW' },
  { name: 'Göknur Gıda', sector: 'Gıda / Food', product: 'MASTERtech', capacity: '350 kW' },
  { name: 'Tofaş / Fiat', sector: 'Otomotiv / Automotive', product: 'NOVAtech', capacity: '1200 kW' },
  { name: 'Plastika San.', sector: 'Plastik / Plastics', product: 'CHILLTECH', capacity: '3x 24 kW' },
  { name: 'Eczacıbaşı İlaç', sector: 'İlaç / Pharma', product: 'LABTECH', capacity: '2x 30 kW' },
  { name: 'Arçelik A.Ş.', sector: 'Elektronik / Electronics', product: 'MASTERtech', capacity: '800 kW' },
  { name: 'Petkim Petrokimya', sector: 'Kimya / Chemical', product: 'FREEtech', capacity: '2500 kW' },
  { name: 'Migros Ticaret', sector: 'Soğuk Zincir / Cold Chain', product: 'CO2TECH', capacity: '400 kW' },
  { name: 'Kordsa Global', sector: 'Tekstil / Textile', product: 'NOVAtech', capacity: '600 kW' },
  { name: 'Bosch Termoteknik', sector: 'Makina / Machinery', product: 'MULTITECH', capacity: '5x 50 kW' },
  { name: 'Türkiye Şeker Fabrikaları', sector: 'Gıda / Food', product: 'MASTERtech', capacity: '1500 kW' },
  { name: 'Ford Otosan', sector: 'Otomotiv / Automotive', product: 'PULSETECH', capacity: '32 kanal / channels' },
  { name: 'Hacettepe Üniversitesi Hastanesi', sector: 'Sağlık / Healthcare', product: 'LABTECH', capacity: '3x 15 kW' },
  { name: 'Oyak Çimento', sector: 'Çimento / Cement', product: 'MASTERtech', capacity: '2000 kW' },
  { name: 'Cam Fabrikası (Şişecam)', sector: 'Cam / Glass', product: 'FREEtech', capacity: '3000 kW' },
  { name: 'Savunma Sanayi Kuruluşu', sector: 'Savunma / Defense', product: 'LABTECH', capacity: 'Özel / Custom' },
  { name: 'Vestel Elektronik', sector: 'Elektronik / Electronics', product: 'NOVAtech', capacity: '900 kW' },
  { name: 'Hayat Kimya', sector: 'Kimya / Chemical', product: 'BLOWtech', capacity: 'Film Soğutma' },
];

export default async function ReferencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'references' });

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
      <section className="py-12 px-4 bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-white/20">
            {[
              { value: '7.000+', label: 'Kurulum / Installations' },
              { value: '10.000+', label: 'Proje / Projects' },
              { value: '75+', label: 'Ülke / Countries' },
              { value: '40+', label: 'Yıl / Years' },
            ].map((s, i) => (
              <div key={i} className="text-center text-white px-4">
                <div className="text-3xl font-bold mb-1">{s.value}</div>
                <div className="text-white/80 text-sm uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">{t('intro')}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {references.map((ref, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="font-bold text-dark mb-2">{ref.name}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-gray-400 text-xs">{t('sector')}:</span>
                    <span>{ref.sector}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-gray-400 text-xs">{t('product')}:</span>
                    <span className="font-semibold text-primary">{ref.product}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-gray-400 text-xs">{t('capacity')}:</span>
                    <span>{ref.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">Siz de Referanslarımız Arasında Yerinizi Alın</h2>
          <p className="text-gray-500 mb-8">35 yıllık deneyim ve 7.000+ başarılı kurulum ile projenizde yanınızdayız.</p>
          <Link href="/iletisim" className="btn-primary">
            Teklif İste
          </Link>
        </div>
      </section>
    </>
  );
}

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('contactTitle'),
    description: t('contactDescription'),
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aytekchiller.up.railway.app';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/iletisim`,
  name: 'Aytek Soğutma Sistemleri',
  alternateName: 'Aytek Chiller',
  image: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: '+90-212-549-11-99',
  faxNumber: '+90-212-549-41-30',
  email: 'info@aytekchillers.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hadımköy Mah. Atatürk San. Niyaz Sk. No:12',
    addressLocality: 'Arnavutköy',
    addressRegion: 'Istanbul',
    postalCode: '34555',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0536,
    longitude: 28.7319,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:30',
    closes: '17:30',
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-dark text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pageTitle')}</h1>
          <p className="text-xl text-gray-300">{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              {/* TR Office */}
              <div>
                <h2 className="font-bold text-dark text-lg mb-4 flex items-center gap-2">
                  🇹🇷 {t('trOffice')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dark text-sm">{t('addressLabel')}</div>
                      <address className="not-italic text-gray-500 text-sm mt-0.5">{t('trAddress')}</address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dark text-sm">{t('phoneLabel')}</div>
                      <a href="tel:+902125491199" className="text-gray-600 hover:text-primary transition-colors text-sm">+90 212 549 11 99</a>
                      <div className="text-gray-500 text-sm">+90 212 549 39 87 / +90 212 771 19 42</div>
                      <div className="text-gray-400 text-xs mt-0.5">{t('faxLabel')}: {t('trFax')}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dark text-sm">{t('emailLabel')}</div>
                      <a href={`mailto:${t('emailValue')}`} className="text-primary hover:underline text-sm">
                        {t('emailValue')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* International */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl mb-2">🇩🇪</div>
                  <div className="font-semibold text-dark text-sm mb-1">{t('deOffice')}</div>
                  <div className="text-gray-500 text-xs">Kelviplast-Itech GmbH</div>
                  <div className="text-gray-500 text-xs">+49 6051 9665-0</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl mb-2">🇬🇧</div>
                  <div className="font-semibold text-dark text-sm mb-1">{t('ukOffice')}</div>
                  <div className="text-gray-500 text-xs">ITECH, London</div>
                  <div className="text-gray-500 text-xs">+44 7468 895511</div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.3!2d28.73!3d41.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55c4b8b4b4b4b%3A0x0!2sArnavutk%C3%B6y%2C%20Istanbul!5e0!3m2!1sen!2str!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aytek Chiller Location"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-bold text-dark text-lg mb-6">{t('formTitle')}</h2>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

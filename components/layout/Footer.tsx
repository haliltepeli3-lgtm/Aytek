import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/kurumsal', key: 'corporate' },
  { href: '/urunler', key: 'products' },
  { href: '/tasarim-merkezi', key: 'designCenter' },
  { href: '/referanslar', key: 'references' },
  { href: '/ihracat', key: 'export' },
  { href: '/iletisim', key: 'contact' },
] as const;

export default function Footer() {
  const t = useTranslations('nav');
  const tf = useTranslations('footer');
  const tc = useTranslations('contact');

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="Aytek Chiller" width={140} height={48} className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{tf('tagline')}</p>
            <div className="flex gap-1">
              {['tr', 'en', 'de', 'fr'].map((loc) => (
                <Link
                  key={loc}
                  href="/"
                  locale={loc as 'tr' | 'en' | 'de' | 'fr'}
                  className="text-xs text-gray-500 hover:text-accent px-2 py-1 transition-colors uppercase"
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{tf('quickLinks')}</h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">{tf('contact')}</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Arnavutköy / İstanbul, 34555</span>
              </div>
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+902125491199" className="hover:text-accent transition-colors">{tc('trPhone')}</a>
              </div>
              <div className="flex items-center gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${tc('emailValue')}`} className="hover:text-accent transition-colors">
                  {tc('emailValue')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aytek Soğutma Sistemleri. {tf('rights')}.
          </p>
          <p className="text-gray-600 text-xs">
            Aytek Chiller | aytekchillers.com
          </p>
        </div>
      </div>
    </footer>
  );
}

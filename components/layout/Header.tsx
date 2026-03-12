'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/kurumsal', key: 'corporate' },
  { href: '/urunler', key: 'products' },
  { href: '/tasarim-merkezi', key: 'designCenter' },
  { href: '/referanslar', key: 'references' },
  { href: '/ihracat', key: 'export' },
] as const;

const locales = ['tr', 'en', 'de', 'fr'] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-bold text-dark text-lg tracking-tight">
                Aytek <span className="text-primary">Chiller</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map(({ href, key }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={key}
                  href={href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-500 hover:text-dark'
                  }`}
                >
                  {t(key)}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: locale + contact CTA */}
          <div className="flex items-center gap-3">
            {/* Locale switcher */}
            <div className="hidden sm:flex items-center gap-0.5">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  aria-label={`Switch to ${loc.toUpperCase()}`}
                  aria-pressed={locale === loc}
                  className={`px-2 py-1 text-xs font-semibold uppercase tracking-wide rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${
                    locale === loc
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* Contact CTA — desktop */}
            <Link
              href="/iletisim"
              className="hidden lg:inline-flex items-center gap-1.5 bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors duration-150"
            >
              {t('contact')}
            </Link>

            {/* Mobile menu button */}
            <button
              className="xl:hidden p-2 rounded-md text-gray-500 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="xl:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-dark'
                }`}
              >
                {t(key)}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setMobileOpen(false)}
              className="flex items-center px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-accent mt-2 hover:bg-accent-dark transition-colors"
            >
              {t('contact')}
            </Link>
            {/* Mobile locale */}
            <div className="flex gap-2 px-3 pt-3 pb-1 border-t border-gray-100 mt-2">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => { handleLocaleChange(loc); setMobileOpen(false); }}
                  className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                    locale === loc ? 'bg-primary text-white' : 'text-gray-400 hover:text-dark'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

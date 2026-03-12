import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        {/* Industrial grid texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(11, 61, 110, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(11, 61, 110, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-dark/70 to-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Decorative elements */}
      <div aria-hidden="true" className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[700px] h-[700px] rounded-full border border-primary/15" />
      <div aria-hidden="true" className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full border border-accent/10" />
      <div aria-hidden="true" className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/5 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-sm text-white/80 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {t('badge')}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          {t('title')}
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/urunler"
            className="btn-primary text-base px-8 py-4 shadow-lg shadow-primary/25"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-white font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-200 text-base"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <div className="w-px h-8 bg-white/20" />
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

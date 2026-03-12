'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const slides = [
  { src: 'https://www.aytekchillers.com/img/about.jpg', alt: 'Aytek Fabrika' },
  { src: 'https://www.aytekchillers.com/img/features/chiller.jpg', alt: 'Chiller Sistemleri' },
  { src: 'https://www.aytekchillers.com/img/features/kalip.jpg', alt: 'Kalıp Soğutma' },
  { src: '/images/ref1.jpg', alt: 'Chiller Kurulum' },
  { src: '/images/ref2.jpg', alt: 'MASTERtech Saha' },
  { src: '/images/ref3.jpg', alt: 'NOVAtech Kurulum' },
];

export default function Hero() {
  const t = useTranslations('hero');
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Sliding background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />

      {/* Dot navigation */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slayt ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

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
      <div aria-hidden="true" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-20">
        <div className="w-px h-6 bg-white/20" />
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

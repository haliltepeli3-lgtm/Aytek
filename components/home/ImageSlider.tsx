'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: 'https://www.aytekchillers.com/img/about.jpg',
    alt: 'Aytek Fabrika',
  },
  {
    src: 'https://www.aytekchillers.com/img/features/chiller.jpg',
    alt: 'Chiller Sistemleri',
  },
  {
    src: 'https://www.aytekchillers.com/img/features/kalip.jpg',
    alt: 'Kalıp Soğutma',
  },
  {
    src: 'https://www.aytekchillers.com/img/features/hvac.jpg',
    alt: 'HVAC Çözümleri',
  },
  {
    src: 'https://www.aytekchillers.com/img/makineler/mcc/1.jpg',
    alt: 'MASTERtech',
  },
  {
    src: 'https://www.aytekchillers.com/img/tasarim/tasarim.jpg',
    alt: 'Tasarım Merkezi',
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((index + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      go((current + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current, go]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Galeri</p>
          <h2 className="text-2xl font-bold text-dark">Tesislerimiz & Ürünlerimiz</h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-dark group">
          {/* Slides */}
          <div className="relative h-80 sm:h-96 md:h-[480px]">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            onClick={() => go(current - 1)}
            aria-label="Önceki"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => go(current + 1)}
            aria-label="Sonraki"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Slayt ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

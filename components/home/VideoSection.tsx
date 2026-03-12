'use client';

import { useState } from 'react';
import Image from 'next/image';

const VIDEO_ID = '5QW_-TjQsCA';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-16 px-4 bg-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Tanıtım Filmi</p>
          <h2 className="text-2xl font-bold text-white">Aytek&apos;i Yakından Tanıyın</h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
          {!playing ? (
            <>
              <Image
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Aytek Chiller Tanıtım Videosu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Play button */}
              <button
                onClick={() => setPlaying(true)}
                aria-label="Videoyu oynat"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/40 group-hover:scale-110 group-hover:bg-accent-dark transition-all duration-200">
                  <svg className="w-8 h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Aytek Chiller Tanıtım Videosu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}

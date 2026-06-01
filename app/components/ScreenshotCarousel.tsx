'use client';

import { useRef } from 'react';

const SCREENSHOTS = [
  { label: 'Welcome', src: '/screenshots/welcome.webp' },
  { label: 'Dashboard', src: '/screenshots/dashboard.webp' },
  { label: 'Statistics', src: '/screenshots/stats.webp' },
  { label: 'Weapon Analytics', src: '/screenshots/weapons.webp' },
  { label: 'Legend Analytics', src: '/screenshots/legends.webp' },
  { label: 'Map Rotations', src: '/screenshots/maps.webp' },
];

export default function ScreenshotCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  }

  return (
    <div className="relative group">
      {/* Left arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Scroll container */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
        {SCREENSHOTS.map((item) => (
          <div key={item.label} className="snap-center shrink-0 w-80 sm:w-[480px] glass-card p-2 overflow-hidden">
            <img src={item.src} alt={item.label} className="w-full rounded-md" loading="lazy" />
            <p className="text-center text-white/30 text-xs mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function TheHamholdEdit() {
  const { navigateToCatalogue } = useShop();
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const lookbookImages = [
    {
      id: '01',
      title: '01 — THE SIGNATURE EDIT',
      subtitle: 'Sculpted in 18K solid gold, Polki diamonds & royal emeralds',
      tag: 'Grand Atelier',
      src: '/images/brand/ambassador/ambassador-5.webp',
      aspect: 'aspect-[16/11]',
      focal: 'object-[center_30%]',
      alt: 'HAMHOLD Fine Jewellery Editorial Campaign'
    },
    {
      id: '02',
      title: '02 — ATELIER PORTRAIT',
      subtitle: 'Intricate bridal craftsmanship and certified solitaires',
      tag: 'Couture Joaillerie',
      src: '/images/brand/ambassador/ambassador-portrait.webp',
      aspect: 'aspect-[4/3] lg:aspect-[16/10]',
      focal: 'object-[center_20%]',
      alt: 'HAMHOLD Ambassador Portrait'
    },
    {
      id: '03',
      title: '03 — TIMELESS ADORNMENT',
      subtitle: 'Heirloom silhouettes designed to transcend generations',
      tag: 'Heritage Collection',
      src: '/images/brand/ambassador/ambassador-2.webp',
      aspect: 'aspect-[16/10]',
      focal: 'object-[center_35%]',
      alt: 'HAMHOLD Heritage Jewellery Editorial'
    }
  ];

  // Lightbox keyboard controls
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % lookbookImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + lookbookImages.length) % lookbookImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <section className="py-24 md:py-36 bg-obsidian border-t border-champagne/15 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-espresso/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-champagne/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-light/60 border border-champagne/25 text-champagne text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span>Editorial Lookbook</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-ivory tracking-[0.03em] font-normal leading-[1.08] mb-4">
            THE HAMHOLD EDIT
          </h2>
          <p className="text-ivory-soft/85 text-xs sm:text-sm md:text-base font-sans font-light tracking-wide leading-relaxed">
            A study in light, craftsmanship, and timeless adornment.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (7 Cols): Primary Large Editorial Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              onClick={() => setActiveLightboxIndex(0)}
              data-cursor="view"
              className="group relative flex-1 min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] rounded-2xl overflow-hidden bg-obsidian-card border border-champagne/20 hover:border-champagne/50 transition-all duration-700 cursor-pointer shadow-luxury hover:shadow-luxury-hover"
            >
              <img
                src={lookbookImages[0].src}
                alt={lookbookImages[0].alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover ${lookbookImages[0].focal} transition-transform duration-1000 ease-out group-hover:scale-[1.03]`}
              />

              {/* Gradient Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.25em] font-medium bg-obsidian/80 text-champagne border border-champagne/30 backdrop-blur-md">
                  {lookbookImages[0].tag}
                </span>
              </div>

              {/* Quick View Hover Indicator */}
              <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-obsidian/75 border border-champagne/30 flex items-center justify-center text-champagne opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md transform translate-y-2 group-hover:translate-y-0">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="font-serif-luxury text-lg sm:text-2xl text-ivory block font-normal group-hover:text-champagne transition-colors duration-300">
                  {lookbookImages[0].title}
                </span>
                <p className="text-xs sm:text-sm text-ivory-soft/80 font-sans font-light mt-1">
                  {lookbookImages[0].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): Stacked Complementary Editorial Frames */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            {/* Top Frame: Vertical Portrait */}
            <div
              onClick={() => setActiveLightboxIndex(1)}
              data-cursor="view"
              className="group relative h-[280px] sm:h-[320px] lg:h-[280px] rounded-2xl overflow-hidden bg-obsidian-card border border-champagne/20 hover:border-champagne/50 transition-all duration-700 cursor-pointer shadow-luxury hover:shadow-luxury-hover"
            >
              <img
                src={lookbookImages[1].src}
                alt={lookbookImages[1].alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover ${lookbookImages[1].focal} transition-transform duration-1000 ease-out group-hover:scale-[1.03]`}
              />

              {/* Gradient Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-0.5 rounded-full text-[8px] uppercase tracking-[0.22em] font-medium bg-obsidian/80 text-champagne border border-champagne/30 backdrop-blur-md">
                  {lookbookImages[1].tag}
                </span>
              </div>

              {/* Quick View Hover Indicator */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-obsidian/75 border border-champagne/30 flex items-center justify-center text-champagne opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md">
                <Eye className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="font-serif-luxury text-base sm:text-lg text-ivory block font-normal group-hover:text-champagne transition-colors duration-300">
                  {lookbookImages[1].title}
                </span>
                <p className="text-[11px] sm:text-xs text-ivory-soft/80 font-sans font-light mt-0.5 line-clamp-1">
                  {lookbookImages[1].subtitle}
                </p>
              </div>
            </div>

            {/* Bottom Frame: Complementary Widescreen Editorial Frame */}
            <div
              onClick={() => setActiveLightboxIndex(2)}
              data-cursor="view"
              className="group relative h-[280px] sm:h-[320px] lg:h-[280px] rounded-2xl overflow-hidden bg-obsidian-card border border-champagne/20 hover:border-champagne/50 transition-all duration-700 cursor-pointer shadow-luxury hover:shadow-luxury-hover"
            >
              <img
                src={lookbookImages[2].src}
                alt={lookbookImages[2].alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover ${lookbookImages[2].focal} transition-transform duration-1000 ease-out group-hover:scale-[1.03]`}
              />

              {/* Gradient Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-0.5 rounded-full text-[8px] uppercase tracking-[0.22em] font-medium bg-obsidian/80 text-champagne border border-champagne/30 backdrop-blur-md">
                  {lookbookImages[2].tag}
                </span>
              </div>

              {/* Quick View Hover Indicator */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-obsidian/75 border border-champagne/30 flex items-center justify-center text-champagne opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md">
                <Eye className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="font-serif-luxury text-base sm:text-lg text-ivory block font-normal group-hover:text-champagne transition-colors duration-300">
                  {lookbookImages[2].title}
                </span>
                <p className="text-[11px] sm:text-xs text-ivory-soft/80 font-sans font-light mt-0.5 line-clamp-1">
                  {lookbookImages[2].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Action */}
        <div className="mt-14 text-center">
          <button
            onClick={() => navigateToCatalogue({ gender: 'women' })}
            data-cursor="explore"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-obsidian-surface hover:bg-champagne hover:text-obsidian border border-champagne/35 text-ivory text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-luxury group backdrop-blur-md"
          >
            <span>DISCOVER THE HIGH JEWELLERY EDIT</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Lightbox Viewer Modal */}
      {activeLightboxIndex !== null && (
        <div
          onClick={() => setActiveLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-obsidian/80 hover:bg-obsidian border border-champagne/30 text-ivory hover:text-champagne flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) => (prev - 1 + lookbookImages.length) % lookbookImages.length);
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-obsidian/70 hover:bg-obsidian border border-champagne/25 text-ivory hover:text-champagne flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) => (prev + 1) % lookbookImages.length);
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-obsidian/70 hover:bg-obsidian border border-champagne/25 text-ivory hover:text-champagne flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
          >
            <img
              src={lookbookImages[activeLightboxIndex].src}
              alt={lookbookImages[activeLightboxIndex].alt}
              className="max-h-[75vh] w-auto object-contain rounded-xl border border-champagne/25 shadow-2xl"
            />
            {/* Lightbox Caption */}
            <div className="mt-4 text-center">
              <span className="font-serif-luxury text-lg text-champagne block font-medium">
                {lookbookImages[activeLightboxIndex].title}
              </span>
              <span className="text-xs text-ivory-muted/80 font-sans mt-0.5 block">
                {lookbookImages[activeLightboxIndex].subtitle} • {activeLightboxIndex + 1} / {lookbookImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

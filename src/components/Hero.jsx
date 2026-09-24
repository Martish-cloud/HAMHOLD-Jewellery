import React from 'react';
import { ArrowRight, Sparkles, Shield, Award } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Hero() {
  const { navigateToCatalogue, setIsAboutOpen } = useShop();

  return (
    <section className="relative min-h-[90vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-obsidian py-16 md:py-24">
      {/* 1. Cinematic Background Vignette & Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-espresso-light/40 via-obsidian to-obsidian pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/10 rounded-full blur-[140px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-bronze/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(214,194,154,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,194,154,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 text-center lg:text-left pt-6 lg:pt-0">
          {/* Eyebrow / Tagline pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-espresso-light/70 border border-champagne/25 text-champagne text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-champagne animate-pulse" />
            <span>MIDNIGHT ATELIER 2026</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-[0.04em] font-normal leading-[1.08] text-ivory mb-6">
            JEWELLERY <br />
            THAT HOLDS <br />
            <span className="italic font-light text-gold-gradient">A MOMENT.</span>
          </h1>

          {/* Subtext */}
          <p className="text-ivory-soft/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-8 md:mb-10 font-sans">
            Contemporary fine jewellery, crafted for the moments you never want to forget. Sculpted in 18K solid gold, certified natural diamonds, and heirloom gemstones.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
            <button
              onClick={() => navigateToCatalogue()}
              data-cursor="explore"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-champagne hover:bg-champagne-light text-obsidian text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-glow flex items-center justify-center gap-3 group"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setIsAboutOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-obsidian-surface hover:bg-obsidian-light border border-champagne/30 text-ivory hover:text-champagne text-xs tracking-[0.22em] uppercase font-medium transition-all duration-300 backdrop-blur-md"
            >
              DISCOVER HAMHOLD
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 pt-8 border-t border-champagne/15 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <span className="block font-serif-luxury text-xl md:text-2xl text-champagne font-medium">100%</span>
              <span className="text-[10px] md:text-xs text-ivory-muted/80 uppercase tracking-wider">BIS Hallmarked</span>
            </div>
            <div>
              <span className="block font-serif-luxury text-xl md:text-2xl text-champagne font-medium">37+</span>
              <span className="text-[10px] md:text-xs text-ivory-muted/80 uppercase tracking-wider">Bespoke Pieces</span>
            </div>
            <div>
              <span className="block font-serif-luxury text-xl md:text-2xl text-champagne font-medium">Insured</span>
              <span className="text-[10px] md:text-xs text-ivory-muted/80 uppercase tracking-wider">Pan-India Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Column: HAMHOLD Brand Ambassador Editorial Campaign Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end w-full">
          {/* Ambient Warm Atmosphere & Backlight behind the subject */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] lg:w-[440px] h-[360px] sm:h-[460px] lg:h-[540px] bg-champagne/12 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-6 right-1/4 w-[240px] h-[240px] bg-bronze/15 rounded-full blur-[90px] pointer-events-none" />

          {/* Seamless Editorial Ambassador Frame without hard border or card */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] flex items-center justify-center">
            {/* Visual Container with gentle radial edge fade - 100% natural, seamless blend into dark background */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 58%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0) 100%)',
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 58%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0) 100%)'
              }}
            >
              <img
                src="/images/brand/ambassador/ambassador-portrait.webp"
                alt="HAMHOLD Brand Ambassador"
                fetchpriority="high"
                decoding="async"
                className="w-full h-auto max-h-[460px] sm:max-h-[540px] lg:max-h-[620px] object-cover object-top select-none pointer-events-none transition-transform duration-1000 ease-out hover:scale-[1.02]"
              />

              {/* Edge Gradient Fades: seamlessly dissolve edges into the midnight atelier canvas */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-90 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-transparent opacity-80 pointer-events-none hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

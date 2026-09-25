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

        {/* Right Column: Hero Floating Jewellery Masterpiece integrated with Circular Rings */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Circular Architectural Halo & Frame System */}
          <div className="relative w-[300px] sm:w-[400px] lg:w-[450px] aspect-square rounded-full border border-champagne/20 flex items-center justify-center p-6 sm:p-8 bg-gradient-radial from-espresso/40 via-obsidian-card/60 to-transparent shadow-2xl">
            {/* Concentric subtle decorative rings surrounding the circular frame */}
            <div className="absolute inset-2 sm:inset-3 rounded-full border border-champagne/15 border-dashed animate-[spin_80s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-6 sm:inset-8 rounded-full border border-champagne/20 pointer-events-none" />

            {/* Ambient Radial Glow behind circular image */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-champagne/15 blur-3xl pointer-events-none" />

            {/* Circular Hero Image Frame Integrated with Concentric Rings */}
            <div
              onClick={() => navigateToCatalogue()}
              data-cursor="view"
              className="group relative z-10 w-[220px] sm:w-[280px] lg:w-[320px] aspect-square rounded-full overflow-hidden border-2 border-champagne/40 hover:border-champagne transition-all duration-700 shadow-luxury cursor-pointer bg-obsidian"
            >
              <img
                src="/images/jewellery/women/aurelia-solitaire-ring.webp"
                onError={(e) => {
                  e.currentTarget.src = "/images/products/aurelia-solitaire-ring.svg";
                }}
                alt="HAMHOLD Aurelia Solitaire Diamond Ring"
                loading="eager"
                decoding="async"
                width="600"
                height="600"
                className="w-full h-full object-cover object-[center_35%] transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Inner Luxury Vignette Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-obsidian/60 via-transparent to-obsidian/20 pointer-events-none" />
            </div>

            {/* Floating Editorial Badge (Bottom right) */}
            <div className="absolute -bottom-3 sm:bottom-0 right-0 sm:right-4 z-20 px-4 py-3 rounded-xl bg-obsidian-surface/95 border border-champagne/30 backdrop-blur-xl shadow-2xl max-w-[210px] text-left">
              <span className="text-[9px] uppercase tracking-widest text-champagne font-semibold block mb-0.5">
                Signature Piece
              </span>
              <h4 className="font-serif-luxury text-sm text-ivory font-medium line-clamp-1">
                Aurelia Solitaire Ring
              </h4>
              <p className="text-[10px] text-ivory-muted/70 font-sans mt-0.5">
                18K Gold • 0.75ct VVS1
              </p>
              <div className="text-xs font-semibold text-champagne mt-1">
                ₹68,500
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

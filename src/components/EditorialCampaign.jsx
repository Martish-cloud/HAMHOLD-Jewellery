import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function EditorialCampaign() {
  const { navigateToCatalogue } = useShop();

  return (
    <section className="relative py-28 md:py-40 bg-obsidian overflow-hidden border-t border-champagne/15">
      {/* Background Cinematic Atmosphere featuring HAMHOLD Brand Ambassador */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/brand/ambassador/ambassador-hero-mobile.webp" />
          <img
            src="/images/brand/ambassador/ambassador-hero.webp"
            alt="HAMHOLD Brand Ambassador"
            className="w-full h-full object-cover object-[center_25%] md:object-[68%_25%] filter brightness-90 contrast-105 scale-105"
            loading="lazy"
            decoding="async"
          />
        </picture>
        {/* Directional Gradient: Darker on the left for text readability, clear & transparent on center-right to showcase the ambassador */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,12,0.92)_0%,rgba(11,11,12,0.72)_45%,rgba(11,11,12,0.2)_100%)] md:bg-[linear-gradient(to_right,rgba(11,11,12,0.96)_0%,rgba(11,11,12,0.85)_32%,rgba(11,11,12,0.38)_58%,rgba(11,11,12,0.05)_78%,transparent_100%)] pointer-events-none" />
        {/* Subtle top & bottom edge transition */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,12,0.65)_0%,transparent_18%,transparent_82%,rgba(11,11,12,0.75)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
          <div className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-champagne font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campaign Édition 2026</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-ivory tracking-[0.03em] font-normal leading-[1.08] mb-6">
            THE ART OF <br />
            <span className="italic font-light text-gold-gradient">BECOMING.</span>
          </h2>
          <p className="text-ivory-soft/90 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 sm:mb-10 font-sans max-w-lg">
            Jewellery designed for the version of you that keeps evolving. Not merely adornment, but personal talismans of resilience, beauty, and grace.
          </p>

          <button
            onClick={() => navigateToCatalogue()}
            data-cursor="explore"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-champagne hover:bg-champagne-light text-obsidian text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-glow group"
          >
            <span>EXPLORE THE EDIT</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

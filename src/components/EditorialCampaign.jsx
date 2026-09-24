import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function EditorialCampaign() {
  const { navigateToCatalogue } = useShop();

  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] md:min-h-[680px] lg:min-h-[760px] flex items-center bg-obsidian overflow-hidden border-t border-champagne/15">
      {/* Background Cinematic Atmosphere featuring HAMHOLD Brand Ambassador */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/brand/ambassador/ambassador-hero-mobile.webp" />
          <img
            src="/images/brand/ambassador/ambassador-hero.webp"
            alt="HAMHOLD Brand Ambassador"
            className="w-full h-full object-cover object-[center_35%] md:object-[50%_35%] filter brightness-100 contrast-105"
            loading="lazy"
            decoding="async"
          />
        </picture>
        {/* Subtle, minimal 6-8% luxury tint ensuring 90% to 94% text visibility for HM logo and Get Ready */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,12,0.08)_0%,rgba(11,11,12,0.04)_40%,transparent_75%)] pointer-events-none" />
        {/* Soft edge seam transition for top & bottom borders */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,12,0.45)_0%,transparent_14%,transparent_86%,rgba(11,11,12,0.5)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-start py-12 md:py-20">
        <div className="pt-44 sm:pt-52 md:pt-60 lg:pt-68">
          <button
            onClick={() => navigateToCatalogue()}
            data-cursor="explore"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-champagne hover:bg-champagne-light text-obsidian text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-glow group backdrop-blur-md border border-champagne/30"
          >
            <span>EXPLORE THE EDIT</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

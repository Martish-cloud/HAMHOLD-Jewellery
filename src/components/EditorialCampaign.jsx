import React from 'react';
import { ArrowRight } from 'lucide-react';
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
        {/* Directional Gradient: Pristine obsidian on the left, clear & transparent on center-right to showcase the ambassador */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,12,0.95)_0%,rgba(11,11,12,0.6)_45%,rgba(11,11,12,0.15)_100%)] md:bg-[linear-gradient(to_right,rgba(11,11,12,1)_0%,rgba(11,11,12,0.95)_30%,rgba(11,11,12,0.4)_58%,transparent_80%)] pointer-events-none" />
        {/* Subtle top & bottom edge transition */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,12,0.7)_0%,transparent_18%,transparent_82%,rgba(11,11,12,0.75)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start min-h-[180px] md:min-h-[240px]">
        <button
          onClick={() => navigateToCatalogue()}
          data-cursor="explore"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-champagne hover:bg-champagne-light text-obsidian text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-glow group backdrop-blur-sm"
        >
          <span>EXPLORE THE EDIT</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function EditorialCampaign() {
  const { navigateToCatalogue } = useShop();

  return (
    <section className="relative w-full h-[calc(100svh-88px)] md:h-[calc(100svh-108px)] min-h-[520px] max-h-[760px] lg:max-h-[820px] flex items-center bg-obsidian overflow-hidden">
      {/* Background Cinematic Atmosphere featuring HAMHOLD Brand Ambassador */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/brand/ambassador/ambassador-hero-mobile.webp" />
          <img
            src="/images/brand/ambassador/ambassador-hero.webp"
            alt="HAMHOLD Brand Ambassador"
            className="w-full h-full object-cover object-[52%_26%] md:object-[50%_25%] filter brightness-100 contrast-105"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="1672"
            height="941"
          />
        </picture>
        {/* Subtle, minimal 6-8% luxury tint ensuring 90% to 94% text visibility for HM logo and Get Ready */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,12,0.12)_0%,rgba(11,11,12,0.05)_40%,transparent_75%)] pointer-events-none" />
        {/* Soft edge seam transition for top & bottom borders */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,12,0.45)_0%,transparent_12%,transparent_88%,rgba(11,11,12,0.5)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-14 lg:pb-16 pointer-events-none">
        <div className="max-w-md pointer-events-auto">
          <button
            onClick={() => navigateToCatalogue()}
            data-cursor="explore"
            className="inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-champagne hover:bg-champagne-light text-obsidian text-xs tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-glow group backdrop-blur-md border border-champagne/30"
          >
            <span>EXPLORE THE EDIT</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function EditorialCampaign() {
  const { navigateToCatalogue } = useShop();

  return (
    <section className="relative py-28 md:py-40 bg-obsidian overflow-hidden border-t border-champagne/15">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=85"
          alt="HAMHOLD Campaign Editorial"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-champagne font-medium block mb-4">
            Campaign Édition 2026
          </span>
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

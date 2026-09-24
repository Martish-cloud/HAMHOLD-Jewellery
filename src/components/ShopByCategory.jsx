import React from 'react';
import { CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

export default function ShopByCategory() {
  const { navigateToCatalogue } = useShop();

  return (
    <section className="py-20 md:py-28 bg-obsidian border-t border-champagne/10 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-espresso-light/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-champagne font-medium block mb-2">
              Curated Architecture
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-ivory tracking-[0.03em] font-normal">
              DISCOVER YOUR SIGNATURE
            </h2>
          </div>
          <button
            onClick={() => navigateToCatalogue()}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne hover:text-champagne-light transition-colors group"
          >
            <span>VIEW ALL CATEGORIES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Categories Grid (Desktop) & Swipe Carousel (Mobile) */}
        <div className="flex overflow-x-auto no-scrollbar md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {CATEGORIES.slice(0, 10).map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateToCatalogue({ category: cat.id })}
              data-cursor="explore"
              className="flex-shrink-0 w-44 sm:w-52 md:w-auto group relative flex flex-col items-center justify-between p-6 rounded-xl bg-obsidian-card/60 hover:bg-obsidian-light/80 border border-champagne/15 hover:border-champagne/40 transition-all duration-500 cursor-pointer shadow-luxury hover:shadow-luxury-hover"
            >
              {/* Subtle halo glow */}
              <div className="absolute inset-0 bg-radial-gradient from-champagne/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              {/* Floating Transparent Jewellery Silhouette */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
                {/* Soft ground blur */}
                <div className="absolute bottom-2 w-20 h-4 rounded-full bg-black/40 blur-sm group-hover:scale-110 transition-transform duration-500" />
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500"
                />
              </div>

              {/* Category Name & Discover action */}
              <div className="text-center relative z-10 w-full">
                <h3 className="font-serif-luxury text-base sm:text-lg text-ivory group-hover:text-champagne transition-colors duration-300">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-ivory-muted/70 uppercase tracking-widest font-sans mt-1 block group-hover:text-champagne/90 transition-colors">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

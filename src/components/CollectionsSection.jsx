import React, { useState } from 'react';
import { COLLECTIONS, PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GhostInterleapText } from './TextAnimations';

export default function CollectionsSection() {
  const { navigateToCatalogue, setSelectedProduct } = useShop();
  const [activeCollectionId, setActiveCollectionId] = useState('SIGNATURE');

  const currentCollection =
    COLLECTIONS.find((c) => c.id === activeCollectionId) || COLLECTIONS[0];

  // Get sample products from this collection
  const collectionProducts = PRODUCTS.filter(
    (p) => p.collection === activeCollectionId
  ).slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-espresso/30 border-t border-champagne/10 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-champagne font-medium block mb-2">
            Midnight Atelier Series
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-ivory tracking-[0.03em] font-normal mb-4">
            <GhostInterleapText text="THE HAMHOLD COLLECTIONS" />
          </h2>
          <p className="text-ivory-muted/80 text-xs sm:text-sm font-sans font-light leading-relaxed">
            Each collection represents a distinct exploration of light, geometry, and eternal emotion.
          </p>
        </div>

        {/* Collection Selector Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-4 mb-12 pb-2">
          {COLLECTIONS.map((col) => {
            const isActive = col.id === activeCollectionId;
            return (
              <button
                key={col.id}
                onClick={() => setActiveCollectionId(col.id)}
                className={`px-5 sm:px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-champagne text-obsidian shadow-glow'
                    : 'bg-obsidian-surface/60 text-ivory-soft hover:text-champagne hover:bg-obsidian-light border border-champagne/15'
                }`}
              >
                {col.name}
              </button>
            );
          })}
        </div>

        {/* Active Collection Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-obsidian-card/70 border border-champagne/20 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md">
          {/* Left: Collection Story & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-champagne mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Collection Spotlight</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-ivory mb-3 font-normal">
                <GhostInterleapText>{currentCollection.name} Collection</GhostInterleapText>
              </h3>
              <p className="text-champagne text-sm sm:text-base font-serif italic mb-5">
                "{currentCollection.tagline}"
              </p>
              <p className="text-ivory-muted text-xs sm:text-sm font-sans font-light leading-relaxed mb-8">
                {currentCollection.description}
              </p>
            </div>

            <button
              onClick={() => navigateToCatalogue({ collection: currentCollection.id })}
              data-cursor="explore"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-champagne/15 hover:bg-champagne text-champagne hover:text-obsidian border border-champagne/30 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 w-fit group"
            >
              <span>EXPLORE {currentCollection.name.toUpperCase()}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right: Featured Pieces from this Collection */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6 lg:mt-0">
            {collectionProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="group p-4 rounded-xl bg-obsidian-surface/60 border border-champagne/15 hover:border-champagne/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative w-full aspect-square flex items-center justify-center p-3 mb-3">
                  <div className="absolute bottom-2 w-3/4 h-3 bg-black/40 blur-sm rounded-full" />
                  <img
                    src={prod.primaryImage}
                    alt={prod.name}
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-sm text-ivory line-clamp-1 group-hover:text-champagne transition-colors">
                    {prod.name}
                  </h4>
                  <div className="text-xs font-semibold text-champagne mt-1">
                    ₹{prod.price.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

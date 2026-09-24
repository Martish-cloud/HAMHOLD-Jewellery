import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { useShop } from '../context/ShopContext';
import { ArrowRight, Shield } from 'lucide-react';

export default function ForHimSection() {
  const { navigateToCatalogue } = useShop();

  // Men's jewellery products (6 products)
  const mensProducts = PRODUCTS.filter((p) => p.gender === 'men' || p.category === 'mens').slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-obsidian-light/40 border-t border-champagne/10 relative overflow-hidden">
      {/* Deep moody architectural lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-espresso/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-champagne font-medium mb-2">
              <Shield className="w-3.5 h-3.5 text-champagne" />
              <span>Architectural Masculinity</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-ivory tracking-[0.03em] font-normal">
              FOR HIM
            </h2>
            <p className="text-ivory-muted text-xs sm:text-sm font-sans font-light mt-2 max-w-lg">
              Substantial solid 18K gold kadas, platinum cuffs, diamond-cut Cuban chains, and sovereign onyx signets designed for commanding presence.
            </p>
          </div>
          <button
            onClick={() => navigateToCatalogue({ gender: 'men' })}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne hover:text-champagne-light transition-colors group"
          >
            <span>EXPLORE MEN'S ATELIER</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Men's Jewellery Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {mensProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

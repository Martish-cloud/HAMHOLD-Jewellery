import React, { useState } from 'react';
import { Heart, Plus, Eye, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { formatINR } from '../data/products';

export default function ProductCard({ product, priority = false }) {
  const { isInWishlist, toggleWishlist, addToCart, setSelectedProduct } = useShop();
  const [isAdded, setIsAdded] = useState(false);
  const wishlisted = isInWishlist(product.id);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleCardClick = () => {
    setSelectedProduct(product);
  };

  return (
    <div
      onClick={handleCardClick}
      data-cursor="view"
      className="group relative flex flex-col bg-obsidian-card/60 rounded-xl border border-champagne/10 hover:border-champagne/35 transition-all duration-500 overflow-hidden cursor-pointer shadow-luxury hover:shadow-luxury-hover"
    >
      {/* Badges */}
      <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.isNew && (
          <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold bg-champagne text-obsidian rounded-full shadow-sm">
            New
          </span>
        )}
        {product.isBestseller && !product.isNew && (
          <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-medium bg-espresso-light/90 text-champagne border border-champagne/30 rounded-full backdrop-blur-sm">
            Bestseller
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
        aria-label="Add to wishlist"
        className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-obsidian/70 hover:bg-obsidian border border-champagne/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 text-ivory backdrop-blur-md"
      >
        <Heart
          className={`w-4 h-4 transition-colors duration-300 ${
            wishlisted ? 'fill-champagne text-champagne' : 'text-ivory/70 hover:text-champagne'
          }`}
        />
      </button>

      {/* Transparent Jewellery Image Container */}
      <div className="relative w-full aspect-square p-6 flex items-center justify-center overflow-hidden bg-gradient-radial from-espresso/40 via-obsidian-card/80 to-obsidian">
        {/* Soft atmospheric ambient glow */}
        <div className="absolute inset-0 bg-radial-gradient from-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Floating Pedestal Shadow */}
        <div className="absolute bottom-6 w-3/4 h-5 rounded-full bg-black/50 blur-md pointer-events-none transform transition-transform duration-700 group-hover:scale-90 group-hover:opacity-40" />

        {/* Primary Isolated Jewellery (Transparent Background) */}
        <img
          src={product.primaryImage}
          alt={product.name}
          loading={priority ? 'eager' : 'lazy'}
          className="product-card-image relative z-[1] w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
        />

        {/* Quick View Button (Desktop overlay) */}
        <div className="absolute inset-x-4 bottom-4 z-10 hidden md:flex opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="w-full py-2.5 px-4 rounded-lg bg-obsidian-surface/90 hover:bg-champagne hover:text-obsidian border border-champagne/30 text-ivory text-[11px] uppercase tracking-widest font-semibold backdrop-blur-md flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 md:p-5 flex flex-col flex-grow justify-between border-t border-champagne/10 bg-obsidian-light/30">
        <div>
          {/* Category & Collection */}
          <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-taupe-light mb-1.5 font-medium">
            <span>{product.collection}</span>
            <span>{product.metal.split(' ')[0]}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif-luxury text-base md:text-lg text-ivory line-clamp-1 group-hover:text-champagne transition-colors duration-300">
            {product.name}
          </h3>

          {/* Stone detail */}
          <p className="text-[11px] text-ivory-muted/70 line-clamp-1 mt-0.5 font-sans">
            {product.stone.split('(')[0]}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-champagne/10 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-semibold text-champagne tracking-tight">
              {formatINR(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-ivory-muted/50 line-through">
                {formatINR(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            aria-label="Add to Bag"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              isAdded
                ? 'bg-champagne text-obsidian scale-105'
                : 'bg-champagne/10 hover:bg-champagne text-champagne hover:text-obsidian border border-champagne/30'
            }`}
          >
            {isAdded ? <Check className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

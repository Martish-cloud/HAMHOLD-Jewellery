import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, formatINR } from '../data/products';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, navigateToCatalogue, setSelectedProduct } = useShop();
  const [searchTerm, setSearchTerm] = useState('');

  const suggestedSearches = [
    'Diamond Solitaire',
    'Gold Earrings',
    "Men's Kada",
    'Tennis Bracelet',
    'Emerald Pendant',
    'Nose Rings',
    'Under ₹25,000',
    'Platinum Band'
  ];

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const q = searchTerm.toLowerCase();

    // Check price filter terms
    if (q.includes('25000') || q.includes('25k')) {
      return PRODUCTS.filter((p) => p.price <= 25000);
    }
    if (q.includes('50000') || q.includes('50k')) {
      return PRODUCTS.filter((p) => p.price <= 50000);
    }

    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.stone.toLowerCase().includes(q) ||
        p.metal.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.gender.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  if (!isSearchOpen) return null;

  const handleSelectProduct = (prod) => {
    setSelectedProduct(prod);
    setIsSearchOpen(false);
  };

  const handleApplyKeyword = (kw) => {
    setSearchTerm(kw);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex justify-center animate-fade-in">
      <div className="w-full max-w-4xl bg-obsidian-surface border border-champagne/25 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col max-h-[85vh] my-auto">
        {/* Top Search Input Bar */}
        <div className="flex items-center gap-4 pb-6 border-b border-champagne/20">
          <Search className="w-6 h-6 text-champagne shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search fine rings, diamonds, emeralds, men's kada, or budget..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-lg sm:text-xl text-ivory placeholder:text-ivory-muted/50 focus:outline-none font-serif-luxury"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-ivory-muted hover:text-champagne"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 text-ivory-muted hover:text-champagne border-l border-champagne/20 pl-4"
          >
            ESC
          </button>
        </div>

        {/* Suggested Searches Chips */}
        <div className="py-4 flex flex-wrap items-center gap-2 border-b border-champagne/10">
          <span className="text-[10px] uppercase tracking-widest text-champagne/70 font-semibold flex items-center gap-1.5 mr-2">
            <Sparkles className="w-3 h-3 text-champagne" />
            Suggested:
          </span>
          {suggestedSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => handleApplyKeyword(tag)}
              className="px-3 py-1 rounded-full text-xs bg-obsidian-card hover:bg-champagne/20 text-ivory-soft hover:text-champagne border border-champagne/15 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto py-6">
          {searchTerm.trim() ? (
            searchResults.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-ivory-muted pb-2">
                  <span>Found {searchResults.length} matching piece{searchResults.length > 1 ? 's' : ''}</span>
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToCatalogue({ searchQuery: searchTerm });
                    }}
                    className="text-champagne hover:underline flex items-center gap-1 uppercase tracking-wider text-[11px]"
                  >
                    <span>View all in catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {searchResults.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => handleSelectProduct(prod)}
                      className="flex items-center gap-3.5 p-3 rounded-xl bg-obsidian-card/60 hover:bg-obsidian-light border border-champagne/15 hover:border-champagne/35 transition-all cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-lg bg-obsidian p-1.5 flex items-center justify-center shrink-0 border border-champagne/10">
                        <img
                          src={prod.primaryImage}
                          alt={prod.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="font-serif-luxury text-sm text-ivory line-clamp-1">
                          {prod.name}
                        </h4>
                        <div className="text-[11px] text-ivory-muted/70">
                          {prod.collection} • {prod.metal.split(' ')[0]}
                        </div>
                        <div className="text-xs font-semibold text-champagne mt-0.5">
                          {formatINR(prod.price)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-ivory text-base font-serif-luxury mb-1">
                  No matching jewellery found for "{searchTerm}"
                </p>
                <p className="text-ivory-muted text-xs">
                  Try searching for solitaire, emerald, gold hoop, or kada.
                </p>
              </div>
            )
          ) : (
            <div className="text-center py-12 text-ivory-muted">
              <p className="text-xs uppercase tracking-widest text-champagne/80 font-medium mb-1">
                Atelier Search
              </p>
              <p className="text-xs">
                Type keywords above or click on suggested tags to discover the catalogue.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

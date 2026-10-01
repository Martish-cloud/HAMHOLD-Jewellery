import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Sparkles, ArrowRight, Layers, Tag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, COLLECTIONS, CATEGORIES, formatINR } from '../data/products';

export default function FloatingJewellerySearch() {
  const { setSelectedProduct, navigateToCatalogue, isSearchOpen, setIsSearchOpen } = useShop();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Quick suggestions when empty
  const suggestions = [
    'Solitaire Ring',
    'Diamond Choker',
    'Polki Nath',
    'Sapphire Collar',
    "Men's Kada",
    'Tennis Bracelet'
  ];

  // Live filter products, collections, categories
  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.categoryName?.toLowerCase().includes(q) ||
        p.stone.toLowerCase().includes(q) ||
        p.metal.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  const matchedCollections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return COLLECTIONS.filter(
      (c) => c.name.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q)
    );
  }, [query]);

  const matchedCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return CATEGORIES.filter(
      (cat) => cat.name.toLowerCase().includes(q) || cat.id.toLowerCase().includes(q)
    );
  }, [query]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sync with global search trigger if opened via navbar
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
      setIsOpen(true);
      setIsSearchOpen(false);
    }
  }, [isSearchOpen, setIsSearchOpen]);

  // Keyboard shortcut (Cmd/Ctrl + K or /) to focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProduct = (prod) => {
    setSelectedProduct(prod);
    setIsOpen(false);
  };

  const handleSelectCollection = (colId) => {
    navigateToCatalogue({ collection: colId });
    setIsOpen(false);
  };

  const handleSelectCategory = (catId) => {
    navigateToCatalogue({ category: catId });
    setIsOpen(false);
  };

  const handleViewAllResults = () => {
    navigateToCatalogue({ search: query });
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-[86px] sm:top-[92px] left-1/2 -translate-x-1/2 z-35 w-[92vw] sm:w-[480px] md:w-[560px] pointer-events-auto select-none transition-all duration-300"
    >
      {/* Search Input Bar with Continuous Travelling Shimmer Stroke */}
      <div className="relative group/search p-[1.5px] rounded-full overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Animated continuous travelling gold light streak along perimeter */}
        <div
          className="absolute -inset-[150%] pointer-events-none opacity-50 group-focus-within/search:opacity-100 transition-opacity duration-500 animate-[spin_5s_linear_infinite]"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, rgba(214, 194, 154, 0.35) 305deg, rgba(214, 194, 154, 0.95) 335deg, rgba(255, 250, 240, 1) 350deg, transparent 360deg)'
          }}
        />

        {/* Inner Search Pill Container */}
        <div className="relative flex items-center bg-obsidian/95 rounded-full px-3.5 sm:px-4 py-2 border border-champagne/20 group-focus-within/search:border-champagne/60 transition-colors">
          <Search className="w-4 h-4 text-champagne shrink-0 mr-2.5 sm:mr-3" />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => {
              setIsFocused(true);
              setIsOpen(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            placeholder={isFocused ? '' : 'Search jewellery, collections, or styles...'}
            className="w-full bg-transparent text-xs sm:text-sm text-ivory placeholder:text-ivory-muted/65 focus:outline-none font-sans"
          />

          {/* Clear or Keyboard hint */}
          {query ? (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1 text-ivory-muted hover:text-champagne transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <span className="hidden sm:inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-champagne/60 font-mono border border-champagne/20 rounded px-1.5 py-0.5">
              ⌘K
            </span>
          )}
        </div>
      </div>

      {/* Live Search Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full mt-2.5 left-0 right-0 max-h-[75vh] overflow-y-auto rounded-2xl bg-obsidian-surface/98 border border-champagne/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-4 sm:p-5 text-ivory z-50 animate-fade-in no-scrollbar">
          {query.trim() === '' ? (
            /* Quick Suggestion Tags */
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-champagne/80 font-semibold mb-3">
                <Sparkles className="w-3 h-3 text-champagne" />
                <span>Popular Atelier Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setQuery(item);
                      inputRef.current?.focus();
                    }}
                    className="px-3 py-1 rounded-full text-xs bg-obsidian-card hover:bg-champagne/20 text-ivory-soft hover:text-champagne border border-champagne/20 transition-all"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {/* Matched Collections / Categories Chips */}
              {(matchedCollections.length > 0 || matchedCategories.length > 0) && (
                <div className="pb-3 mb-3 border-b border-champagne/15 space-y-2">
                  {matchedCollections.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] uppercase tracking-widest text-champagne/60 flex items-center gap-1">
                        <Layers className="w-3 h-3" /> Collection:
                      </span>
                      {matchedCollections.map((col) => (
                        <button
                          key={col.id}
                          onClick={() => handleSelectCollection(col.id)}
                          className="px-2.5 py-0.5 rounded-full text-xs bg-champagne/15 text-champagne hover:bg-champagne hover:text-obsidian border border-champagne/30 transition-colors"
                        >
                          {col.name} Collection
                        </button>
                      ))}
                    </div>
                  )}

                  {matchedCategories.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] uppercase tracking-widest text-champagne/60 flex items-center gap-1">
                        <Tag className="w-3 h-3" /> Category:
                      </span>
                      {matchedCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handleSelectCategory(cat.id)}
                          className="px-2.5 py-0.5 rounded-full text-xs bg-obsidian-card text-ivory-soft hover:bg-champagne/20 hover:text-champagne border border-champagne/20 transition-colors"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Products List */}
              {filteredProducts.length > 0 ? (
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-champagne/70 font-semibold mb-2.5 flex items-center justify-between">
                    <span>Matching Pieces ({filteredProducts.length})</span>
                    <button
                      onClick={handleViewAllResults}
                      className="text-champagne hover:underline inline-flex items-center gap-1 normal-case font-sans"
                    >
                      <span>Explore all</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="divide-y divide-champagne/10">
                    {filteredProducts.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => handleSelectProduct(prod)}
                        className="group flex items-center gap-3.5 py-2.5 px-2 rounded-xl hover:bg-champagne/10 transition-colors cursor-pointer"
                      >
                        {/* Thumbnail */}
                        <div className="w-12 h-12 rounded-lg bg-obsidian/60 border border-champagne/20 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                          <img
                            src={prod.thumbImage || prod.primaryImage}
                            alt={prod.name}
                            loading="lazy"
                            className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif-luxury text-xs sm:text-sm text-ivory group-hover:text-champagne transition-colors truncate">
                              {prod.name}
                            </h4>
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-espresso-light/60 text-champagne/80 border border-champagne/20 font-mono shrink-0">
                              {prod.collection}
                            </span>
                          </div>
                          <p className="text-[11px] text-ivory-muted/70 truncate font-sans">
                            {prod.stone} • {prod.metal}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="text-right shrink-0">
                          <span className="font-semibold text-xs sm:text-sm text-champagne">
                            {formatINR(prod.price)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View all button */}
                  <div className="mt-3 pt-3 border-t border-champagne/15 text-center">
                    <button
                      onClick={handleViewAllResults}
                      className="text-xs uppercase tracking-widest text-champagne hover:text-champagne-light inline-flex items-center gap-2 font-medium"
                    >
                      <span>View All Results for "{query}"</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-ivory-muted">
                  <p className="text-sm">No creations found matching "{query}"</p>
                  <p className="text-xs text-ivory-muted/60 mt-1">
                    Try searching for "solitaire", "pearl", "kada", "emerald", or "gold"
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

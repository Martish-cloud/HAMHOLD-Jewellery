import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User, ChevronDown } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { COLLECTIONS, CATEGORIES } from '../data/products';
import { BlurWipeText } from './TextAnimations';

export default function Navbar() {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsAboutOpen,
    navigateToCatalogue,
    setActiveView
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. Announcement Bar */}
      <div className="bg-espresso-dark border-b border-champagne/15 px-4 py-2 text-center text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-champagne/90 flex items-center justify-center gap-3">
        <span>COMPLIMENTARY INSURED SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹25,000</span>
        <span className="hidden md:inline text-champagne/40">•</span>
        <span className="hidden md:inline text-ivory-muted/80">100% BIS HALLMARKED &amp; CERTIFIED</span>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-obsidian/95 backdrop-blur-xl border-champagne/20 py-3.5 shadow-2xl'
            : 'bg-obsidian/85 backdrop-blur-md border-champagne/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo / Wordmark */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setActiveView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group text-left"
            >
              <span className="font-serif-luxury text-2xl md:text-3xl tracking-[0.22em] font-medium text-ivory group-hover:text-champagne transition-colors duration-300">
                <BlurWipeText text="HAMHOLD" />
              </span>
              <span className="block text-[8px] md:text-[9px] tracking-[0.35em] text-champagne/80 font-sans uppercase -mt-0.5">
                CRAFTED TO HOLD FOREVER
              </span>
            </button>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-[11px] uppercase tracking-[0.2em] font-medium text-ivory-soft">
            <button
              onClick={() => navigateToCatalogue({ isNew: true })}
              className="hover:text-champagne transition-colors duration-200 py-2 relative group"
            >
              New Arrivals
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Jewellery Dropdown trigger */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveMegaMenu('jewellery')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => navigateToCatalogue()}
                className="hover:text-champagne transition-colors duration-200 flex items-center gap-1.5"
              >
                Jewellery
                <ChevronDown className="w-3 h-3 text-champagne/70 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Mega Dropdown */}
              {activeMegaMenu === 'jewellery' && (
                <div className="absolute top-full -left-12 w-64 p-4 rounded-xl bg-obsidian-surface/98 border border-champagne/25 shadow-2xl backdrop-blur-2xl animate-fade-in">
                  <div className="text-[9px] uppercase tracking-widest text-champagne mb-3 font-semibold pb-1.5 border-b border-champagne/15">
                    Fine Jewellery Categories
                  </div>
                  <div className="space-y-2">
                    {CATEGORIES.slice(0, 8).map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          navigateToCatalogue({ category: cat.id });
                          setActiveMegaMenu(null);
                        }}
                        className="w-full text-left py-1.5 px-2.5 rounded text-xs text-ivory-soft hover:text-champagne hover:bg-champagne/10 transition-colors flex items-center justify-between"
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-champagne/60">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Collections Dropdown trigger */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setActiveMegaMenu('collections')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => navigateToCatalogue()}
                className="hover:text-champagne transition-colors duration-200 flex items-center gap-1.5"
              >
                Collections
                <ChevronDown className="w-3 h-3 text-champagne/70 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Collections Mega Dropdown */}
              {activeMegaMenu === 'collections' && (
                <div className="absolute top-full -left-16 w-80 p-5 rounded-xl bg-obsidian-surface/98 border border-champagne/25 shadow-2xl backdrop-blur-2xl animate-fade-in">
                  <div className="text-[9px] uppercase tracking-widest text-champagne mb-3 font-semibold pb-1.5 border-b border-champagne/15">
                    The HAMHOLD Collections
                  </div>
                  <div className="space-y-3">
                    {COLLECTIONS.map((col) => (
                      <button
                        key={col.id}
                        onClick={() => {
                          navigateToCatalogue({ collection: col.id });
                          setActiveMegaMenu(null);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-champagne/10 transition-all group/item"
                      >
                        <div className="text-xs font-semibold text-ivory group-hover/item:text-champagne flex items-center justify-between">
                          <span>{col.name}</span>
                          <span className="text-[10px] text-champagne/50">Explore</span>
                        </div>
                        <p className="text-[11px] text-ivory-muted/70 font-normal line-clamp-1 mt-0.5 normal-case font-sans">
                          {col.tagline}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateToCatalogue({ gender: 'women' })}
              className="hover:text-champagne transition-colors duration-200 py-2 relative group"
            >
              Women
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              onClick={() => navigateToCatalogue({ gender: 'men' })}
              className="hover:text-champagne transition-colors duration-200 py-2 relative group"
            >
              Men
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('gift-finder');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigateToCatalogue({ category: 'gifts' });
              }}
              className="hover:text-champagne transition-colors duration-200 py-2 relative group"
            >
              Gifts
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-full" />
            </button>

            <button
              onClick={() => setIsAboutOpen(true)}
              className="hover:text-champagne transition-colors duration-200 py-2 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-champagne transition-all duration-300 group-hover:w-full" />
            </button>
          </div>

          {/* Right: Utility Actions (Search, Wishlist, Bag) */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search catalogue"
              className="p-2 text-ivory hover:text-champagne transition-colors duration-200 hover:scale-110 active:scale-95"
            >
              <Search className="w-5 h-5 stroke-[1.75]" />
            </button>

            <button
              onClick={() => setIsAboutOpen(true)}
              aria-label="Account atelier"
              className="hidden sm:inline-flex p-2 text-ivory hover:text-champagne transition-colors duration-200 hover:scale-110 active:scale-95"
            >
              <User className="w-5 h-5 stroke-[1.75]" />
            </button>

            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              className="p-2 text-ivory hover:text-champagne transition-colors duration-200 relative hover:scale-110 active:scale-95"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-champagne text-obsidian text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              className="p-2 text-ivory hover:text-champagne transition-colors duration-200 relative hover:scale-110 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-champagne text-obsidian text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-ivory hover:text-champagne transition-colors duration-200 lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.75]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.75]" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

import React from 'react';
import { Home, Grid, Search, Heart, ShoppingBag, X, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, COLLECTIONS } from '../data/products';
import { BlurWipeText } from './TextAnimations';

export default function MobileNav() {
  const {
    cartCount,
    wishlist,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsAboutOpen,
    setIsContactOpen,
    navigateToCatalogue,
    setActiveView,
    activeView
  } = useShop();

  const handleNavClick = (callback) => {
    setIsMobileMenuOpen(false);
    if (callback) callback();
  };

  return (
    <>
      {/* 1. Mobile Menu Drawer (Side Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-obsidian-surface border-l border-champagne/20 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between animate-fade-in">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-champagne/15">
                <div>
                  <span className="font-serif-luxury text-xl tracking-[0.2em] font-medium text-ivory">
                    <BlurWipeText text="HAMHOLD" />
                  </span>
                  <span className="block text-[8px] tracking-[0.3em] text-champagne/80 font-sans uppercase">
                    CRAFTED TO HOLD FOREVER
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-ivory hover:text-champagne transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Links */}
              <div className="py-6 space-y-4 text-xs uppercase tracking-[0.2em] font-medium">
                <button
                  onClick={() =>
                    handleNavClick(() => {
                      setActiveView('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    })
                  }
                  className="w-full text-left py-2 text-ivory hover:text-champagne flex items-center justify-between"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-champagne/50" />
                </button>

                <button
                  onClick={() => handleNavClick(() => navigateToCatalogue({ isNew: true }))}
                  className="w-full text-left py-2 text-champagne hover:text-champagne-light flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    New Arrivals
                  </span>
                  <ChevronRight className="w-4 h-4 text-champagne/50" />
                </button>

                <button
                  onClick={() => handleNavClick(() => navigateToCatalogue())}
                  className="w-full text-left py-2 text-ivory hover:text-champagne flex items-center justify-between"
                >
                  <span>All Jewellery (37)</span>
                  <ChevronRight className="w-4 h-4 text-champagne/50" />
                </button>

                <button
                  onClick={() => handleNavClick(() => navigateToCatalogue({ gender: 'women' }))}
                  className="w-full text-left py-2 text-ivory hover:text-champagne flex items-center justify-between"
                >
                  <span>For Her (Women)</span>
                  <ChevronRight className="w-4 h-4 text-champagne/50" />
                </button>

                <button
                  onClick={() => handleNavClick(() => navigateToCatalogue({ gender: 'men' }))}
                  className="w-full text-left py-2 text-ivory hover:text-champagne flex items-center justify-between"
                >
                  <span>For Him (Men)</span>
                  <ChevronRight className="w-4 h-4 text-champagne/50" />
                </button>
              </div>

              {/* Categories Section */}
              <div className="py-4 border-t border-champagne/15">
                <span className="text-[10px] uppercase tracking-widest text-champagne font-semibold block mb-3">
                  Shop By Category
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs normal-case font-normal text-ivory-soft">
                  {CATEGORIES.slice(0, 8).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() =>
                        handleNavClick(() => navigateToCatalogue({ category: cat.id }))
                      }
                      className="text-left py-1.5 px-2 rounded hover:bg-champagne/10 hover:text-champagne transition-colors"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Collections Section */}
              <div className="py-4 border-t border-champagne/15">
                <span className="text-[10px] uppercase tracking-widest text-champagne font-semibold block mb-3">
                  Featured Collections
                </span>
                <div className="space-y-1.5 text-xs">
                  {COLLECTIONS.map((col) => (
                    <button
                      key={col.id}
                      onClick={() =>
                        handleNavClick(() => navigateToCatalogue({ collection: col.id }))
                      }
                      className="w-full text-left py-1 text-ivory-soft hover:text-champagne transition-colors flex items-center justify-between"
                    >
                      <span>{col.name}</span>
                      <span className="text-[10px] text-taupe font-mono">Collection</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Atelier & Contact */}
              <div className="py-4 border-t border-champagne/15 space-y-2">
                <button
                  onClick={() => handleNavClick(() => setIsAboutOpen(true))}
                  className="w-full text-left py-1.5 text-xs text-ivory hover:text-champagne"
                >
                  About HAMHOLD
                </button>
                <button
                  onClick={() => handleNavClick(() => setIsContactOpen(true))}
                  className="w-full text-left py-1.5 text-xs text-ivory hover:text-champagne"
                >
                  Client Concierge &amp; Atelier
                </button>
              </div>
            </div>

            {/* Bottom Trust Badge */}
            <div className="pt-6 border-t border-champagne/15 text-center">
              <div className="flex items-center justify-center gap-2 text-champagne text-[10px] tracking-wider uppercase mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Certified Fine Jewellery
              </div>
              <p className="text-[10px] text-ivory-muted/60">
                Complimentary insured shipping across India
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. Mobile Sticky Bottom Navigation Bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-obsidian-card/95 backdrop-blur-xl border-t border-champagne/20 px-3 py-2 flex items-center justify-around text-ivory shadow-[0_-8px_20px_rgba(0,0,0,0.6)]">
        <button
          onClick={() => {
            setActiveView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 p-1 transition-colors ${
            activeView === 'home' ? 'text-champagne' : 'text-ivory-muted hover:text-ivory'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[9px] uppercase tracking-wider font-medium">Home</span>
        </button>

        <button
          onClick={() => navigateToCatalogue()}
          className={`flex flex-col items-center gap-1 p-1 transition-colors ${
            activeView === 'catalogue' ? 'text-champagne' : 'text-ivory-muted hover:text-ivory'
          }`}
        >
          <Grid className="w-5 h-5" />
          <span className="text-[9px] uppercase tracking-wider font-medium">Shop</span>
        </button>

        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center gap-1 p-1 text-ivory-muted hover:text-champagne transition-colors"
        >
          <Search className="w-5 h-5" />
          <span className="text-[9px] uppercase tracking-wider font-medium">Search</span>
        </button>

        <button
          onClick={() => setIsWishlistOpen(true)}
          className="flex flex-col items-center gap-1 p-1 text-ivory-muted hover:text-champagne transition-colors relative"
        >
          <Heart className="w-5 h-5" />
          {wishlist.length > 0 && (
            <span className="absolute top-0 right-2 w-3.5 h-3.5 bg-champagne text-obsidian text-[8px] font-bold rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
          <span className="text-[9px] uppercase tracking-wider font-medium">Wishlist</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 p-1 text-ivory-muted hover:text-champagne transition-colors relative"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-2 w-3.5 h-3.5 bg-champagne text-obsidian text-[8px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <span className="text-[9px] uppercase tracking-wider font-medium">Bag</span>
        </button>
      </div>
    </>
  );
}

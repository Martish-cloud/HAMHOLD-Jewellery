import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  // Cart State (persisted in localStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('hamhold_cart');
      return saved ? JSON.parse(saved) : [
        // Default demo item in bag for immediate client presentation
        {
          product: PRODUCTS[0], // Aurelia Solitaire Diamond Ring
          quantity: 1,
          selectedSize: '14'
        }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist State (persisted in localStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('hamhold_wishlist');
      return saved ? JSON.parse(saved) : [
        PRODUCTS[0].id, // Aurelia Solitaire
        PRODUCTS[17].id, // Nocturne Tennis Bracelet
        PRODUCTS[31].id  // Monarch Men's Kada
      ];
    } catch {
      return [];
    }
  });

  // UI Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // For Product Detail Modal
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeView, setActiveView] = useState('home'); // 'home' | 'catalogue'

  // Catalogue Filters
  const [catalogueFilter, setCatalogueFilter] = useState({
    category: 'all',
    gender: 'all',
    collection: 'all',
    metal: 'all',
    priceRange: 'all',
    sort: 'featured',
    searchQuery: ''
  });

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hamhold_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('hamhold_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Show toast utility
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart operations
  const addToCart = (product, selectedSize = null, qty = 1) => {
    const size = selectedSize || (product.sizes ? product.sizes[0] : 'Standard');
    setCart(prev => {
      const existingIdx = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += qty;
        return next;
      }
      return [...prev, { product, quantity: qty, selectedSize: size }];
    });
    showToast(`Added ${product.name} to Bag`);
  };

  const removeFromCart = (productId, selectedSize) => {
    setCart(prev => prev.filter(
      item => !(item.product.id === productId && item.selectedSize === selectedSize)
    ));
    showToast('Item removed from Bag');
  };

  const updateCartQty = (productId, selectedSize, delta) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedSize === selectedSize) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from Wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to Wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Cart Totals
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Navigation Helper
  const navigateToCatalogue = (filterOverrides = {}) => {
    setCatalogueFilter(prev => ({
      ...prev,
      category: 'all',
      gender: 'all',
      collection: 'all',
      metal: 'all',
      priceRange: 'all',
      searchQuery: '',
      ...filterOverrides
    }));
    setActiveView('catalogue');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        selectedProduct,
        setSelectedProduct,
        isAboutOpen,
        setIsAboutOpen,
        isContactOpen,
        setIsContactOpen,
        activeView,
        setActiveView,
        catalogueFilter,
        setCatalogueFilter,
        navigateToCatalogue,
        showToast,
        toastMessage
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}

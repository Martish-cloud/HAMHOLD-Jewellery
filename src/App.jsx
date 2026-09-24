import React from 'react';
import { useShop } from './context/ShopContext';
import CustomCursor from './components/CustomCursor';
import Toast from './components/Toast';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import ShopByCategory from './components/ShopByCategory';
import CollectionsSection from './components/CollectionsSection';
import NewArrivals from './components/NewArrivals';
import ForHimSection from './components/ForHimSection';
import ForHerSection from './components/ForHerSection';
import GiftFinder from './components/GiftFinder';
import EditorialCampaign from './components/EditorialCampaign';
import Bestsellers from './components/Bestsellers';
import Craftsmanship from './components/Craftsmanship';
import BrandStory from './components/BrandStory';
import TrustSection from './components/TrustSection';
import ProductListingPage from './components/ProductListingPage';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import AboutModal from './components/AboutModal';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const { activeView } = useShop();

  return (
    <div className="relative min-h-screen bg-obsidian text-ivory font-sans selection:bg-champagne selection:text-obsidian overflow-x-hidden">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Interactive Notification Toast */}
      <Toast />

      {/* Header & Sticky Announcement */}
      <Navbar />

      {/* Main View Router */}
      <main>
        {activeView === 'catalogue' ? (
          <ProductListingPage />
        ) : (
          <>
            {/* 1. Immersive Hero */}
            <Hero />

            {/* 2. Shop By Category */}
            <ShopByCategory />

            {/* 3. The HAMHOLD Collections */}
            <CollectionsSection />

            {/* 4. New Arrivals */}
            <NewArrivals />

            {/* 5. For Him (Men's Jewellery) */}
            <ForHimSection />

            {/* 6. For Her (Women's Jewellery) */}
            <ForHerSection />

            {/* 7. Interactive Gift Finder */}
            <GiftFinder />

            {/* 8. Editorial Campaign (The Art of Becoming) */}
            <EditorialCampaign />

            {/* 9. Most Wanted (Bestsellers) */}
            <Bestsellers />

            {/* 10. Craftsmanship (Crafted with Intention) */}
            <Craftsmanship />

            {/* 11. Brand Story (Why HAMHOLD?) */}
            <BrandStory />

            {/* 12. Trust & Service Pillars */}
            <TrustSection />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Dedicated Mobile Navigation & Bottom Bar */}
      <MobileNav />

      {/* Modals & Slide-out Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <AboutModal />
      <ContactModal />
    </div>
  );
}

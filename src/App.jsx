import React from 'react';
import { useShop } from './context/ShopContext';
import CustomCursor from './components/CustomCursor';
import Toast from './components/Toast';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import ShopByCategory from './components/ShopByCategory';
import CollectionsSection from './components/CollectionsSection';
import TheHamholdEdit from './components/TheHamholdEdit';
import NewArrivals from './components/NewArrivals';
import ForHimSection from './components/ForHimSection';
import ForHerSection from './components/ForHerSection';
import PrivateOffers from './components/PrivateOffers';
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
            {/* 1. Primary Hero: Women's Brand Ambassador Campaign */}
            <EditorialCampaign />

            {/* 2. Second Hero: Jewellery That Holds A Moment (Brand Philosophy & Masterpiece) */}
            <Hero />

            {/* 3. Signature Brand Story & Atelier Introduction */}
            <BrandStory />

            {/* 4. Fine Jewellery Categories */}
            <ShopByCategory />

            {/* 5. The HAMHOLD Collections */}
            <CollectionsSection />

            {/* 6. Editorial Lookbook Experience: The HAMHOLD Edit */}
            <TheHamholdEdit />

            {/* 7. New Arrivals */}
            <NewArrivals />

            {/* 7. Most Wanted (Bestsellers) */}
            <Bestsellers />

            {/* 8. For Her (Women's Fine Jewellery) */}
            <ForHerSection />

            {/* 9. For Him + Men's Brand Ambassador (Ayush) */}
            <ForHimSection />

            {/* 10. Private Jewellery Offers: Women's & Men's Curated Edits */}
            <PrivateOffers />

            {/* 11. Master Craftsmanship */}
            <Craftsmanship />

            {/* 11. Interactive Gift & Milestone Finder */}
            <GiftFinder />

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

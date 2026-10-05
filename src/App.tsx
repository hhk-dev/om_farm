import React from 'react';
import { StoreProvider } from './context/StoreContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsStrip } from './components/BenefitsStrip';
import { ArtisanCatalog } from './components/ArtisanCatalog';
import { BundleBuilder } from './components/BundleBuilder';
import { TransparencyStory } from './components/TransparencyStory';
import { CommunityUgc } from './components/CommunityUgc';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RitualQuizModal } from './components/RitualQuizModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { StoryAndRitualsModals } from './components/StoryAndRitualsModals';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-[#fcf9f4] text-[#1c1c19] flex flex-col font-sans selection:bg-[#ffdbc9] selection:text-[#321200]">
        <Header />

        <main className="w-full pt-28 flex-1">
          <Hero />
          <BenefitsStrip />
          <ArtisanCatalog />
          <BundleBuilder />
          <TransparencyStory />
          <CommunityUgc />
        </main>

        <Footer />

        {/* Global Modals & Drawers */}
        <CartDrawer />
        <ProductDetailModal />
        <RitualQuizModal />
        <WishlistDrawer />
        <CheckoutModal />
        <StoryAndRitualsModals />
        <Toast />
      </div>
    </StoreProvider>
  );
}

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

export const Header: React.FC = () => {
  const {
    cartCount,
    cartTotal,
    wishlist,
    setActiveModal,
    searchQuery,
    setSearchQuery,
    setSelectedCategory
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, category?: string) => {
    setMobileMenuOpen(false);
    if (category) {
      setSelectedCategory(category);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcf9f4]/95 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(46,35,25,0.06)] border-b border-[#0c2d17]/5">
      {/* Top Banner Ticker */}
      <div className="bg-[#0c2d17] text-[#ffffff] py-2 px-4 sm:px-8 lg:px-12">
        <div className="w-full flex items-center justify-between text-[11px] font-bold tracking-widest uppercase">
          <div className="hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffdbc9]"></span>
            <span>Vedic Craft &amp; Provenance</span>
          </div>
          <div className="flex-1 text-center text-xs normal-case tracking-normal px-2 font-medium">
            🌿 Free shipping on curated soap bundles over ₹499{' '}
            <span className="hidden sm:inline mx-2 text-[#abd0af]">|</span>{' '}
            <span className="hidden sm:inline">Handcrafted in Small Batches</span>{' '}
            <span className="hidden sm:inline mx-2 text-[#abd0af]">|</span>{' '}
            <span className="hidden md:inline">100% Chemical &amp; Paraben Free</span>
          </div>
          <div className="flex items-center gap-2 font-bold tracking-wider">
            <span className="cursor-pointer text-[#c6ecca] hover:text-white transition-colors">
              INR ₹
            </span>
            <span className="text-[#abd0af]">/</span>
            <span className="cursor-pointer text-[#abd0af] hover:text-white transition-colors">
              ENG
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4 max-w-[1440px] mx-auto">
        {/* Brand Wordmark & Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            alt="Om Farm Botanicals Logo"
            className="h-9 w-auto object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            src="https://lh3.googleusercontent.com/aida/AEtjO1XUaPvGcTFH_qfKygR52lY7dgn9vYZjsoq2kU_W5giyOFHMVJbTWIt8wZ5N7apLG_3o5e-QnBMC7NIfuB_po107T9Wy3bOwMI3MbPKeFRIl1P0a8sbZi7BFhMaNrY7GiLdQ2Jajotm1hLHCJ558XEJHIAsLXpYtILAT6j8qIsQTvSp5R07axVDKHsH_ueB9Znd4B9gGqOQ-Q3ELeYUU_wid5v7EO-sYO8NI1wXVkqG7yVGCTNf4ZOVm"
          />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col text-left group"
          >
            <span className="font-serif text-[22px] tracking-tight text-[#0c2d17] leading-none font-semibold group-hover:text-[#23432b] transition-colors">
              Om Farm
            </span>
            <span className="text-[11px] font-bold tracking-widest text-[#994703] uppercase mt-0.5">
              Botanicals
            </span>
          </button>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7 text-[15px] font-medium text-[#424842]">
          <button
            onClick={() => handleNavClick('artisan-catalog', 'all')}
            className="text-[#0c2d17] font-semibold hover:text-[#994703] transition-colors py-1 cursor-pointer"
          >
            Shop All Soaps
          </button>
          <button
            onClick={() => setActiveModal('rituals')}
            className="hover:text-[#0c2d17] transition-colors py-1 cursor-pointer"
          >
            Ayurvedic Rituals
          </button>
          <button
            onClick={() => handleNavClick('artisan-catalog', 'glow')}
            className="hover:text-[#0c2d17] transition-colors py-1 cursor-pointer"
          >
            Glow &amp; Radiance
          </button>
          <button
            onClick={() => handleNavClick('bundle-builder')}
            className="hover:text-[#0c2d17] transition-colors py-1 cursor-pointer"
          >
            Bundle &amp; Save
          </button>
          <button
            onClick={() => setActiveModal('story')}
            className="hover:text-[#0c2d17] transition-colors py-1 cursor-pointer"
          >
            Our Farm Story
          </button>
          <button
            onClick={() => setActiveModal('quiz')}
            className="hover:text-[#0c2d17] transition-colors py-1 cursor-pointer"
          >
            Soap Quiz
          </button>
        </nav>

        {/* Actions Zone: Search, Quiz Pill, Wishlist, Bag, Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Search Box */}
          <div className="hidden lg:flex items-center bg-[#f6f3ee] px-3 py-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] border border-[#0c2d17]/10 focus-within:border-[#0c2d17]/40 transition-colors">
            <span className="material-symbols-outlined text-[18px] text-[#424842] mr-1">
              search
            </span>
            <input
              className="bg-transparent text-[13px] text-[#1c1c19] placeholder:text-[#727971] focus:outline-none w-36 xl:w-44"
              placeholder="Search cold-pressed bars..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-stone-500 hover:text-stone-900"
              >
                ✕
              </button>
            )}
          </div>

          {/* Ritual Quiz Button */}
          <button
            onClick={() => setActiveModal('quiz')}
            className="hidden sm:inline-flex items-center bg-[#ffdbc9] text-[#321200] px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-[0_1px_6px_rgba(153,71,3,0.12)] hover:bg-[#ffb68c] transition-all cursor-pointer hover:scale-102"
          >
            <span className="material-symbols-outlined text-[16px] mr-1.5 text-[#994703]">
              spa
            </span>
            Ritual Quiz
          </button>

          {/* Wishlist Icon with Counter */}
          <button
            onClick={() => setActiveModal('wishlist')}
            aria-label="View Wishlist"
            className="relative p-2 rounded-full text-[#424842] hover:text-[#0c2d17] hover:bg-[#f0ede9] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">favorite</span>
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#421a12] text-[#ffffff] rounded-full text-[9px] font-bold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Bag Button (with live count and total) */}
          <button
            onClick={() => setActiveModal('cart')}
            aria-label="View Shopping Bag"
            className="flex items-center gap-2 bg-[#0c2d17] text-[#ffffff] px-4 py-2 rounded-full hover:bg-[#23432b] hover:text-[#c6ecca] transition-all shadow-[0_2px_12px_-2px_rgba(12,45,23,0.25)] cursor-pointer hover:scale-102"
          >
            <span className="material-symbols-outlined text-[19px]">shopping_bag</span>
            <span className="text-[14px] font-semibold hidden md:inline">
              {cartCount} {cartCount === 1 ? 'item' : 'items'} • ₹{cartTotal}
            </span>
            <span className="text-[12px] font-semibold md:hidden">
              {cartCount}
            </span>
          </button>

          {/* Account / Provenance Button */}
          <button
            onClick={() => setActiveModal('story')}
            aria-label="Our Farm Provenance"
            className="w-9 h-9 rounded-full bg-[#0c2d17] flex items-center justify-center text-white hover:bg-[#23432b] transition-colors shadow-sm cursor-pointer"
            title="Om Farm Provenance & Sanctuary"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#0c2d17] rounded-lg hover:bg-[#f0ede9]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fcf9f4] border-t border-[#0c2d17]/10 px-6 py-5 flex flex-col gap-3 shadow-lg">
          <div className="flex items-center bg-[#f6f3ee] px-3 py-2 rounded-full border border-[#0c2d17]/10 mb-2">
            <span className="material-symbols-outlined text-[18px] text-[#424842] mr-2">
              search
            </span>
            <input
              className="bg-transparent text-[14px] text-[#1c1c19] focus:outline-none w-full"
              placeholder="Search cold-pressed bars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => handleNavClick('artisan-catalog', 'all')}
            className="text-left font-medium text-[16px] text-[#0c2d17] py-2 border-b border-[#f0ede9]"
          >
            Shop All Soaps
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveModal('rituals');
            }}
            className="text-left font-medium text-[16px] text-[#424842] py-2 border-b border-[#f0ede9]"
          >
            Ayurvedic Rituals
          </button>
          <button
            onClick={() => handleNavClick('artisan-catalog', 'glow')}
            className="text-left font-medium text-[16px] text-[#424842] py-2 border-b border-[#f0ede9]"
          >
            Glow &amp; Radiance Collection
          </button>
          <button
            onClick={() => handleNavClick('bundle-builder')}
            className="text-left font-medium text-[16px] text-[#424842] py-2 border-b border-[#f0ede9]"
          >
            Custom 6-Bar Bundle (Save 25%)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveModal('story');
            }}
            className="text-left font-medium text-[16px] text-[#424842] py-2 border-b border-[#f0ede9]"
          >
            Our Ahmedabad Farm Story
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveModal('quiz');
            }}
            className="text-left font-semibold text-[15px] text-[#994703] py-2 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">spa</span>
            Take the Dosha &amp; Soap Quiz
          </button>
        </div>
      )}
    </header>
  );
};

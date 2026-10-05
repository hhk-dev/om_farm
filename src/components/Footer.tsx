import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { setActiveModal, setSelectedCategory, showToast } = useStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setSubscribed(true);
    showToast('🌿 Welcome to the Clean Bath Club! Use code CLEAN15 for 15% off.');
  };

  const handleNavClick = (sectionId: string, category?: string) => {
    if (category) setSelectedCategory(category);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f0ede9] text-[#1c1c19] pt-16 pb-12 border-t border-[#0c2d17]/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Newsletter Subscription Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 mb-14 shadow-[0_4px_20px_-2px_rgba(46,35,25,0.05)] border border-[#0c2d17]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold text-[#994703] uppercase tracking-widest block mb-1">
                Botanical Sanctuary Newsletter
              </span>
              <h3 className="font-serif text-[26px] sm:text-[32px] text-[#0c2d17] font-semibold">
                Join the Clean Bath Club
              </h3>
              <p className="text-[15px] text-[#424842] mt-2 max-w-xl leading-relaxed">
                Receive 15% off your first cold-pressed bar, private harvest access, and weekly
                Ayurvedic bathing rituals directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-[#c6ecca]/40 border border-[#2d4e35]/20 p-4 rounded-2xl flex items-center gap-3 text-[#01210c]">
                  <span className="material-symbols-outlined text-[24px] text-[#0c2d17]">
                    task_alt
                  </span>
                  <div>
                    <span className="text-sm font-semibold block">You're on the harvest list!</span>
                    <span className="text-xs">Your 15% promo code is <strong>CLEAN15</strong></span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    className="flex-1 bg-[#f6f3ee] px-5 py-3 rounded-full text-[14px] text-[#1c1c19] placeholder:text-[#727971] focus:outline-none border border-[#0c2d17]/10 focus:border-[#0c2d17]/50"
                    placeholder="Enter your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    className="bg-[#0c2d17] text-white hover:bg-[#23432b] px-7 py-3 rounded-full text-[14px] font-semibold transition-all whitespace-nowrap cursor-pointer shadow-md hover:scale-102"
                    type="submit"
                  >
                    Claim 15% Off
                  </button>
                </form>
              )}
              <p className="text-[11.5px] text-[#727971] mt-2 font-medium">
                Zero spam. Only fresh botanical drops and ritual wisdom.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 mb-14 border-y border-[#0c2d17]/10">
          <div className="flex items-center gap-3 p-3 bg-[#f6f3ee] rounded-xl">
            <div className="w-10 h-10 rounded-full bg-[#c6ecca] flex items-center justify-center text-[#01210c] shrink-0">
              <span className="material-symbols-outlined text-[20px]">cruelty_free</span>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-[#0c2d17]">Cruelty Free</h4>
              <p className="text-[11px] text-[#424842]">PETA Approved</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#f6f3ee] rounded-xl">
            <div className="w-10 h-10 rounded-full bg-[#c6ecca] flex items-center justify-center text-[#01210c] shrink-0">
              <span className="material-symbols-outlined text-[20px]">eco</span>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-[#0c2d17]">100% Vegan</h4>
              <p className="text-[11px] text-[#424842]">Plant Actives Only</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#f6f3ee] rounded-xl">
            <div className="w-10 h-10 rounded-full bg-[#c6ecca] flex items-center justify-center text-[#01210c] shrink-0">
              <span className="material-symbols-outlined text-[20px]">recycling</span>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-[#0c2d17]">Plastic Neutral</h4>
              <p className="text-[11px] text-[#424842]">Compostable Packs</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#f6f3ee] rounded-xl">
            <div className="w-10 h-10 rounded-full bg-[#c6ecca] flex items-center justify-center text-[#01210c] shrink-0">
              <span className="material-symbols-outlined text-[20px]">home_pin</span>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-[#0c2d17]">Handcrafted</h4>
              <p className="text-[11px] text-[#424842]">Ahmedabad, India</p>
            </div>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Info (2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-serif text-[22px] text-[#0c2d17] font-semibold">
              Om Farm Botanicals
            </span>
            <p className="text-[14px] text-[#424842] max-w-sm leading-relaxed">
              Handcrafted cold-process bathing bars slow-cured for four weeks with unrefined
              cold-pressed oils, wild-harvested herbs, and therapeutic botanical scents.
            </p>
            <div className="mt-2">
              <a
                className="inline-flex items-center gap-2 bg-[#23432b] text-[#c6ecca] px-4 py-2 rounded-full text-[12px] font-semibold hover:bg-[#0c2d17] hover:text-white transition-colors"
                href="https://wa.me/919974173126"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                WhatsApp Bath Concierge
              </a>
            </div>
            <p className="text-[12px] text-[#727971] mt-1">
              Direct Helpline: +91 9974173126 (Mon-Sat, 9AM-7PM IST)
            </p>
          </div>

          {/* Apothecary */}
          <div>
            <h5 className="text-[11px] font-bold text-[#0c2d17] uppercase tracking-widest mb-4">
              Apothecary
            </h5>
            <ul className="flex flex-col gap-2.5 text-[13.5px] text-[#424842]">
              <li>
                <button
                  onClick={() => handleNavClick('artisan-catalog', 'all')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  All Cold-Pressed Bars
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('artisan-catalog', 'glow')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Ubtan Glow Bars
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('artisan-catalog', 'cooling')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Keshuda Therapy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('artisan-catalog', 'cooling')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Wild Damask Rose
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('bundle-builder')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Curated Discovery Trios
                </button>
              </li>
            </ul>
          </div>

          {/* Our Philosophy */}
          <div>
            <h5 className="text-[11px] font-bold text-[#0c2d17] uppercase tracking-widest mb-4">
              Our Philosophy
            </h5>
            <ul className="flex flex-col gap-2.5 text-[13.5px] text-[#424842]">
              <li>
                <button
                  onClick={() => setActiveModal('story')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Our Ahmedabad Farm
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('rituals')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Vedic Curing Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('quiz')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left text-[#994703] font-semibold"
                >
                  Find Your Dosha Match
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('story')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Clean Ingredient Glossary
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('story')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Sustainability Pledge
                </button>
              </li>
            </ul>
          </div>

          {/* Help & Sanctuary */}
          <div>
            <h5 className="text-[11px] font-bold text-[#0c2d17] uppercase tracking-widest mb-4">
              Help &amp; Sanctuary
            </h5>
            <ul className="flex flex-col gap-2.5 text-[13.5px] text-[#424842]">
              <li>
                <button
                  onClick={() => showToast('Tracking status: All farm batches shipped within 48h.')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Track Bath Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('Free express shipping on all orders over ₹499!')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Shipping &amp; Eco Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('Wholesale & Wedding hampers: Contact 99741 73126')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Wholesale &amp; Gifting
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('Corporate mindfulness hampers available for booking')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Corporate Wellness
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('story')}
                  className="hover:text-[#0c2d17] transition-colors cursor-pointer text-left"
                >
                  Privacy &amp; Botanical Terms
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Social Bar */}
        <div className="pt-6 border-t border-[#0c2d17]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[#424842] text-[12px]">
          <p>© 2025 Om Farm Botanicals LLP. Handcrafted with reverence in India.</p>
          <div className="flex items-center gap-6">
            <span
              onClick={() => showToast('Follow @OmFarmBotanicals on Instagram')}
              className="hover:text-[#0c2d17] cursor-pointer transition-colors"
            >
              Instagram
            </span>
            <span
              onClick={() => showToast('Explore aesthetic moodboards on Pinterest')}
              className="hover:text-[#0c2d17] cursor-pointer transition-colors"
            >
              Pinterest
            </span>
            <span
              onClick={() => showToast('Watch our curing process on YouTube')}
              className="hover:text-[#0c2d17] cursor-pointer transition-colors"
            >
              YouTube
            </span>
            <span
              onClick={() => showToast('Listening to: Om Farm Morning Bath Ragas 🎶')}
              className="hover:text-[#0c2d17] cursor-pointer transition-colors"
            >
              Spotify Ritual Playlists
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { useStore } from '../context/StoreContext';
import { SOAPS_DATA } from '../data/soaps';

export const Hero: React.FC = () => {
  const { addToCart, openPdp } = useStore();
  const ubtanSoap = SOAPS_DATA[0];
  const saffronSoap = SOAPS_DATA[1];

  const scrollToCatalog = () => {
    const el = document.getElementById('artisan-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBundle = () => {
    const el = document.getElementById('bundle-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-12 pt-8 pb-14 lg:pb-20 max-w-[1440px] mx-auto">
      {/* Ambient Botanical Glow Orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#ffdbc9]/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#c6ecca]/30 blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Copy & Value Proposition */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          {/* Floating Rating Pill */}
          <div className="inline-flex items-center gap-2 self-start bg-[#f6f3ee] px-4 py-1.5 rounded-full shadow-xs border border-[#0c2d17]/5">
            <span className="flex text-[#994703] text-[14px] tracking-tight font-semibold">
              ★★★★★
            </span>
            <span className="text-[11px] font-bold text-[#424842] uppercase tracking-wider">
              4.9/5 from 4,200+ mindful bathers • 100% Palm-Free
            </span>
          </div>

          {/* Headline with High-Contrast Typography */}
          <h1 className="font-serif text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.15] text-[#0c2d17] font-semibold tracking-tight text-balance">
            Clean Skincare That's Actually Made From Nature.{' '}
            <span className="italic font-normal text-[#994703]">No Chemicals,</span>{' '}
            Just Pure Glow.
          </h1>

          <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#424842] max-w-xl">
            Handcrafted cold-process Ayurvedic bars slow-cured for four weeks with wild turmeric,
            keshuda blossoms, Kashmiri saffron, and cold-pressed botanical oils grown on our
            Ahmedabad farms.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={scrollToCatalog}
              className="inline-flex items-center justify-center gap-2 bg-[#0c2d17] text-[#ffffff] hover:bg-[#23432b] hover:text-[#c6ecca] px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all shadow-md cursor-pointer hover:scale-102"
            >
              <span>Shop All Bars (From ₹210)</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </button>

            <button
              onClick={scrollToBundle}
              className="inline-flex items-center justify-center gap-2 bg-[#e5e2dd] text-[#1c1c19] hover:bg-[#ffdbc9] hover:text-[#321200] px-6 py-3.5 rounded-full text-[14px] font-semibold transition-all cursor-pointer hover:scale-102"
            >
              <span className="material-symbols-outlined text-[18px] text-[#994703]">
                auto_awesome
              </span>
              <span>Build Your 6-Bar Box</span>
              <span className="text-[11px] font-bold bg-[#994703] text-white px-2 py-0.5 rounded-full uppercase tracking-wider ml-1">
                Save 25%
              </span>
            </button>
          </div>

          {/* Micro Social Proof Badges */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#0c2d17]/10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#994703] text-[20px]">
                verified
              </span>
              <span className="text-[12px] font-medium text-[#424842]">Lab Tested Clean</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0c2d17] text-[20px]">
                hourglass_empty
              </span>
              <span className="text-[12px] font-medium text-[#424842]">4-Week Cured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#421a12] text-[20px]">spa</span>
              <span className="text-[12px] font-medium text-[#424842]">Vedic Recipes</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase Stage */}
        <div className="lg:col-span-6 relative flex items-center justify-center mt-4 lg:mt-0">
          {/* Main Stage Frame */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-[#f6f3ee] rounded-2xl p-4 flex items-center justify-center shadow-lg border border-[#0c2d17]/5">
            {/* Hero Main Bar (Ubtan) */}
            <div
              className="w-full h-full relative cursor-pointer group overflow-hidden rounded-xl"
              onClick={() => openPdp(ubtanSoap)}
              title="Click to view details of Traditional Ubtan Soap"
            >
              <img
                alt="Om Farm Traditional Ubtan Soap"
                className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-700 group-hover:scale-103"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjIbhIs8LQ2xDake7MZCMZgG0EFofqwv7PoUq_oOlvlsdAh8FGac66Kdl-K5-H7WQeSOZkM5aslDFTifeMQjRi3VT4xgyEvZyF60yLXANpirRsNQB1tP8A8eUk2JAGCuT2RiMP1KXsGzTkm5VmkgRedbCShbDnyNrAezENbxYtGUjZH6dlJN_-wlclPEIiJ771euoC3bF0ZqRJr0m8wd-77u0YxRoFZq5cYTBg4alC9xExaqvMOnaisQvwmmrEykHV"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">visibility</span> View Vedic
                  Formula
                </span>
              </div>
            </div>

            {/* Overlapping Saffron Card (Bottom Left) */}
            <div
              onClick={() => openPdp(saffronSoap)}
              className="absolute -bottom-6 -left-4 sm:-left-8 w-44 sm:w-56 bg-white p-2 rounded-xl shadow-xl border border-[#0c2d17]/10 cursor-pointer hover:-translate-y-1 transition-transform group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#f6f3ee]">
                <img
                  alt="Om Farm Kashmiri Saffron Bar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXOJkJMLWckqhVZ1QVHjIlMb8BMAaXpFLb7qrRjJZbyQtzvqGsFCvD8ejfiD43YwpP85Pttjk0X0wK6yXuosY_mFAvuWnJlrQtgaTdvAaWAJGg3q91-F1Ti2_58saa5jdwCtYPwi0JzSzbLHih8oOVNQLE1DPfK2oPGB9i6ekl10-9901HYu8Cfjm7QaXyy10JhFLYeH-vALN6pDa90UO-2KZMhfkgJVUhDBj0SvITJksTdJTNq7nihWDTBzB5ys7v"
                />
              </div>
              <div className="p-2 flex flex-col">
                <span className="text-[11px] font-bold text-[#994703] uppercase tracking-wider">
                  Kashmiri Kesar
                </span>
                <span className="text-[14px] font-semibold text-[#0c2d17]">
                  ₹260 • Deep Glow
                </span>
              </div>
            </div>

            {/* Floating Top Right Artisan Tag */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-[#0c2d17]/5">
              <span className="w-2 h-2 rounded-full bg-[#fc934f] animate-ping" />
              <span className="text-[11px] font-bold text-[#0c2d17] uppercase tracking-wider">
                Handcrafted in Ahmedabad
              </span>
            </div>

            {/* Floating Bottom Right Price & Quick Add Button */}
            <button
              onClick={() => addToCart(ubtanSoap)}
              className="absolute bottom-6 right-6 bg-[#0c2d17] text-[#ffffff] px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 cursor-pointer hover:bg-[#23432b] hover:text-[#c6ecca] transition-all hover:scale-102"
              title="Add Traditional Ubtan Soap directly to Bag"
            >
              <span className="text-[14px] font-semibold">Ubtan Bar • ₹220</span>
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

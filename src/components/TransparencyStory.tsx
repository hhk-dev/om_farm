import React from 'react';
import { useStore } from '../context/StoreContext';

export const TransparencyStory: React.FC = () => {
  const { setActiveModal } = useStore();

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
      <div className="bg-[#23432b] text-[#ffffff] rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden relative shadow-xl">
        {/* Ambient Glow */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-[#0c2d17]/40 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 self-start bg-[#0c2d17] text-[#c6ecca] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-[#c6ecca]/20">
              Radical Botanical Transparency
            </div>

            <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-white font-semibold tracking-tight">
              No Hidden Fillers. No Animal Tallow. Just Slow Earth Alchemy.
            </h2>

            <p className="text-[16px] leading-relaxed text-[#c6ecca] opacity-90 max-w-xl">
              Commercial cleansers strip your skin’s natural lipid defense with industrial sulfates.
              At Om Farm, we employ cold-process saponification that takes four weeks to cure. This
              preserves active plant polyphenols and native moisturizing glycerin.
            </p>

            {/* Artisanal Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#0c2d17]/50 p-4 rounded-xl backdrop-blur-xs border border-white/10">
                <span className="font-serif text-[28px] text-[#c6ecca] block font-bold leading-none">
                  100%
                </span>
                <span className="text-[12px] text-white/80 mt-1 block font-medium">
                  Cold-Pressed Oils
                </span>
              </div>
              <div className="bg-[#0c2d17]/50 p-4 rounded-xl backdrop-blur-xs border border-white/10">
                <span className="font-serif text-[28px] text-[#c6ecca] block font-bold leading-none">
                  28 Days
                </span>
                <span className="text-[12px] text-white/80 mt-1 block font-medium">
                  Linen-Air Cured
                </span>
              </div>
              <div className="bg-[#0c2d17]/50 p-4 rounded-xl backdrop-blur-xs border border-white/10">
                <span className="font-serif text-[28px] text-[#c6ecca] block font-bold leading-none">
                  Zero
                </span>
                <span className="text-[12px] text-white/80 mt-1 block font-medium">
                  Petrochemicals
                </span>
              </div>
            </div>

            {/* Direct Order Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://wa.me/919974173126?text=Hello%20Om%20Farm%20Botanicals%2C%20I%20would%20like%20to%20place%20an%20order%20for%20cold-pressed%20soaps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0c2d17] hover:bg-[#ffdbc9] px-6 py-3 rounded-full text-[14px] font-semibold transition-colors shadow-md cursor-pointer hover:scale-102"
              >
                <span className="material-symbols-outlined text-[19px] text-[#0c2d17]">
                  chat
                </span>
                <span>Direct WhatsApp Order: 99741 73126</span>
              </a>

              <button
                onClick={() => setActiveModal('story')}
                className="text-[13px] text-[#c6ecca] hover:text-white underline font-medium cursor-pointer"
              >
                Read Farm Story →
              </button>
            </div>
            <span className="text-[12px] text-white/70">
              Ahmedabad, Gujarat • Shipped Nationwide within 48 Hours
            </span>
          </div>

          {/* Right Column: Physical Provenance Seal */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-square bg-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between border border-white/15 shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#c6ecca] uppercase tracking-wider">
                  Provenance Guarantee
                </span>
                <span className="material-symbols-outlined text-[#c6ecca] text-[24px]">
                  verified
                </span>
              </div>

              <div className="text-center py-4 my-auto">
                <span className="font-serif text-[32px] text-white block font-bold tracking-wide">
                  ઓમ ફાર્મ
                </span>
                <span className="text-[12px] font-bold text-[#ffdbc9] uppercase tracking-widest block mt-1.5">
                  શુદ્ધ અને પ્રાકૃતિક
                </span>
                <p className="text-[13px] text-white/80 mt-3 max-w-xs mx-auto leading-relaxed">
                  Hand-cut, hand-stamped, and wrapped in recycled unbleached kraft paper.
                </p>
              </div>

              <div className="flex items-center justify-between text-white/70 text-[12px] pt-2 border-t border-white/10">
                <span>Lot: BATCH-2025-09</span>
                <span className="text-[#c6ecca] font-medium">100% Biodegradable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

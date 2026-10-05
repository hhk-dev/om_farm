import React from 'react';
import { useStore } from '../context/StoreContext';
import { BUNDLE_CHOICES, BundleOption } from '../data/soaps';

export const BundleBuilder: React.FC = () => {
  const {
    bundleSlots,
    setBundleSlot,
    clearBundleSlot,
    addCurrentBundleToCart,
    resetBundle
  } = useStore();

  const filledCount = bundleSlots.filter(Boolean).length;
  const isFull = filledCount === 6;

  const handleThumbnailClick = (choice: BundleOption) => {
    // Fill first empty slot or alert
    setBundleSlot(-1, choice);
  };

  return (
    <section id="bundle-builder" className="w-full bg-[#f0ede9] py-16 px-4 sm:px-8 lg:px-12 border-y border-[#0c2d17]/5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Bundle Info & Economics */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 self-start bg-[#ffdbc9] text-[#321200] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
            Curated Discovery Box
          </div>

          <h2 className="font-serif text-[32px] sm:text-[40px] leading-tight text-[#0c2d17] font-semibold tracking-tight">
            Build Your Own Custom 6-Bar Sanctuary Box
          </h2>

          <p className="text-[15px] leading-relaxed text-[#424842]">
            Select any 6 cold-pressed soaps tailored to your morning energy and evening
            restoration. Every box arrives wrapped in seeded craft paper with a complimentary
            Teakwood draining dish.
          </p>

          {/* Value Perks */}
          <div className="flex flex-col gap-2.5 pt-1">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#994703] text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <span className="text-[13.5px] text-[#1c1c19]">
                <strong>25% Instant Bundle Savings</strong> (Flat ₹1,080 instead of ₹1,440)
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#994703] text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <span className="text-[13.5px] text-[#1c1c19]">
                <strong>Free Handcrafted Teakwood Dish</strong> (Worth ₹250)
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#994703] text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <span className="text-[13.5px] text-[#1c1c19]">
                <strong>Free expedited express shipping</strong> across all pin codes in India
              </span>
            </div>
          </div>

          {/* Sticky Total & CTA Module */}
          <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#0c2d17]/5 flex items-center justify-between mt-2">
            <div>
              <span className="text-[11px] font-bold text-[#994703] uppercase tracking-wider block">
                Your Bundle Total
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="font-serif text-[24px] text-[#0c2d17] font-bold">
                  ₹1,080
                </span>
                <span className="text-[14px] text-[#727971] line-through">
                  ₹1,440
                </span>
              </div>
            </div>

            <button
              onClick={addCurrentBundleToCart}
              className={`px-6 py-3.5 rounded-full text-[14px] font-semibold transition-all shadow-md cursor-pointer ${
                isFull
                  ? 'bg-[#0c2d17] text-white hover:bg-[#23432b] hover:text-[#c6ecca] hover:scale-102'
                  : 'bg-[#0c2d17]/60 text-white cursor-pointer hover:bg-[#0c2d17]'
              }`}
            >
              {isFull ? 'Add 6-Bar Box to Bag' : `Pick ${6 - filledCount} More`}
            </button>
          </div>
        </div>

        {/* Right Column: 6-Slot Visual Tray & Quick Selectors */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-[#0c2d17]/5">
            {/* Tray Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[15px] font-semibold text-[#0c2d17] block">
                  Your 6 Selection Slots
                </span>
                <span className="text-xs text-[#727971]">
                  Click the ✕ on any bar to change your selection
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetBundle}
                  className="text-xs text-[#727971] hover:text-[#0c2d17] underline cursor-pointer"
                >
                  Reset
                </button>
                <span
                  className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    isFull
                      ? 'bg-[#0c2d17] text-white'
                      : 'bg-[#ffdbc9] text-[#321200]'
                  }`}
                >
                  {filledCount} / 6 Selected
                </span>
              </div>
            </div>

            {/* The 6 Slots */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
              {bundleSlots.map((slot, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square bg-[#f6f3ee] rounded-xl p-1.5 flex flex-col items-center justify-center text-center shadow-inner overflow-hidden border border-[#0c2d17]/10 group"
                >
                  {slot ? (
                    <>
                      <img
                        alt={slot.name}
                        className="w-full h-full object-cover rounded-lg"
                        src={slot.image}
                      />
                      <button
                        onClick={() => clearBundleSlot(idx)}
                        aria-label={`Remove ${slot.name} from slot ${idx + 1}`}
                        className="absolute top-1 right-1 w-6 h-6 rounded-full bg-[#31302d]/80 text-[#f3f0eb] flex items-center justify-center shadow-sm hover:bg-[#ba1a1a] transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">close</span>
                      </button>
                      <div className="absolute bottom-1 inset-x-1 bg-black/60 backdrop-blur-xs rounded text-[10px] text-white py-0.5 truncate px-1">
                        {slot.shortName}
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#727971] p-2">
                      <span className="material-symbols-outlined text-[20px] text-[#994703]/60 mb-0.5">
                        add
                      </span>
                      <span className="text-[10px] font-bold text-[#727971] uppercase">
                        Slot {idx + 1}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tap to Add Quick Pick Bar */}
            <span className="text-[11px] font-bold text-[#424842] uppercase tracking-wider block mt-6 mb-2.5">
              TAP A BAR BELOW TO ADD INTO YOUR BOX:
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {BUNDLE_CHOICES.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => handleThumbnailClick(choice)}
                  className="flex flex-col items-center p-2 rounded-xl bg-[#f6f3ee] hover:bg-[#ffdbc9] transition-all cursor-pointer border border-transparent hover:border-[#994703]/20 group active:scale-95"
                >
                  <img
                    alt={choice.shortName}
                    className="w-11 h-11 object-cover rounded-lg shadow-2xs group-hover:scale-105 transition-transform"
                    src={choice.thumbImage}
                  />
                  <span className="text-[12px] text-[#0c2d17] mt-1.5 font-medium group-hover:font-semibold">
                    {choice.shortName}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

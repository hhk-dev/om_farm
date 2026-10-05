import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { BUNDLE_CHOICES } from '../data/soaps';

export const ProductDetailModal: React.FC = () => {
  const {
    activeModal,
    setActiveModal,
    selectedSoap,
    addToCart,
    setBundleSlot,
    wishlist,
    toggleWishlist
  } = useStore();

  const [activeTab, setActiveTab] = useState<'ritual' | 'herbs' | 'dosha' | 'inci'>('ritual');
  const [quantity, setQuantity] = useState(1);

  if (activeModal !== 'pdp' || !selectedSoap) return null;

  const isWishlisted = wishlist.includes(selectedSoap.id);

  const handleAddToBundle = () => {
    // Find matching bundle choice
    const match = BUNDLE_CHOICES.find(
      (b) =>
        selectedSoap.name.toLowerCase().includes(b.shortName.toLowerCase()) ||
        b.shortName.toLowerCase().includes(selectedSoap.name.toLowerCase())
    ) || {
      id: selectedSoap.id,
      name: selectedSoap.name,
      shortName: selectedSoap.name.split(' ')[0],
      image: selectedSoap.image,
      thumbImage: selectedSoap.thumbImage
    };

    setBundleSlot(-1, match);
    const el = document.getElementById('bundle-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveModal('none');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setActiveModal('none')}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-4xl transform overflow-hidden rounded-3xl bg-[#fcf9f4] text-left align-middle shadow-2xl transition-all border border-[#0c2d17]/10 my-8">
          {/* Close Button */}
          <button
            onClick={() => setActiveModal('none')}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#424842] hover:text-[#0c2d17] hover:bg-white flex items-center justify-center shadow-md cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left Image Showcase */}
            <div className="md:col-span-5 bg-[#f6f3ee] p-6 sm:p-8 flex flex-col justify-between relative">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-md">
                <img
                  alt={selectedSoap.name}
                  className="w-full h-full object-cover"
                  src={selectedSoap.image}
                />
                <span className="absolute top-3 left-3 bg-[#0c2d17] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  {selectedSoap.badge}
                </span>
                <button
                  onClick={() => toggleWishlist(selectedSoap.id)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#994703] flex items-center justify-center shadow-xs cursor-pointer"
                >
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{
                      fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0"
                    }}
                  >
                    favorite
                  </span>
                </button>
              </div>

              {/* Provenance Micro-Tag */}
              <div className="mt-4 pt-3 border-t border-[#0c2d17]/10 flex items-center justify-between text-xs text-[#424842]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#0c2d17]">
                    eco
                  </span>
                  {selectedSoap.curingDays}-Day Cured
                </span>
                <span className="text-[#994703] font-semibold">{selectedSoap.weight}</span>
              </div>
            </div>

            {/* Right Product Details */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#727971] mb-1">
                  <span className="font-semibold text-[#994703] text-sm">
                    {selectedSoap.gujaratiName}
                  </span>
                  <span className="flex items-center text-[#994703] font-semibold text-xs">
                    ★ {selectedSoap.rating} ({selectedSoap.reviewsCount} verified bath reviews)
                  </span>
                </div>

                <h2 className="font-serif text-[26px] sm:text-[30px] text-[#0c2d17] font-semibold leading-tight">
                  {selectedSoap.name}
                </h2>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mt-2 mb-4">
                  <span className="font-serif text-[26px] text-[#0c2d17] font-bold">
                    ₹{selectedSoap.price}
                  </span>
                  <span className="text-[15px] text-[#727971] line-through">
                    ₹{selectedSoap.originalPrice}
                  </span>
                  <span className="text-[11px] font-bold bg-[#c6ecca] text-[#01210c] px-2 py-0.5 rounded-full uppercase tracking-wider ml-1">
                    Save {Math.round(((selectedSoap.originalPrice - selectedSoap.price) / selectedSoap.originalPrice) * 100)}%
                  </span>
                </div>

                <p className="text-[14px] leading-relaxed text-[#424842] mb-5">
                  {selectedSoap.description}
                </p>

                {/* Scent & Dosha Snapshot */}
                <div className="bg-[#f6f3ee] p-3.5 rounded-xl text-xs space-y-1.5 mb-5 border border-[#0c2d17]/5">
                  <div>
                    <strong className="text-[#0c2d17]">Scent Profile: </strong>
                    <span className="text-[#424842]">{selectedSoap.scentNotes}</span>
                  </div>
                  <div>
                    <strong className="text-[#0c2d17]">Dosha Compatibility: </strong>
                    <span className="text-[#994703] font-medium">{selectedSoap.dosha}</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-[#0c2d17]/10 flex gap-4 text-xs font-semibold uppercase tracking-wider mb-4">
                  <button
                    onClick={() => setActiveTab('ritual')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'ritual'
                        ? 'border-b-2 border-[#0c2d17] text-[#0c2d17]'
                        : 'text-[#727971] hover:text-[#0c2d17]'
                    }`}
                  >
                    Bathing Ritual
                  </button>
                  <button
                    onClick={() => setActiveTab('herbs')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'herbs'
                        ? 'border-b-2 border-[#0c2d17] text-[#0c2d17]'
                        : 'text-[#727971] hover:text-[#0c2d17]'
                    }`}
                  >
                    Key Botanicals
                  </button>
                  <button
                    onClick={() => setActiveTab('dosha')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'dosha'
                        ? 'border-b-2 border-[#0c2d17] text-[#0c2d17]'
                        : 'text-[#727971] hover:text-[#0c2d17]'
                    }`}
                  >
                    Dosha Balance
                  </button>
                  <button
                    onClick={() => setActiveTab('inci')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'inci'
                        ? 'border-b-2 border-[#0c2d17] text-[#0c2d17]'
                        : 'text-[#727971] hover:text-[#0c2d17]'
                    }`}
                  >
                    Full INCI
                  </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[100px] text-xs leading-relaxed text-[#424842] mb-6">
                  {activeTab === 'ritual' && (
                    <div className="space-y-2">
                      <p>{selectedSoap.ritualGuide}</p>
                      <p className="text-[11px] text-[#727971] italic">
                        Tip: Place on a slotted wooden dish between uses to allow complete air-drying.
                      </p>
                    </div>
                  )}
                  {activeTab === 'herbs' && (
                    <div>
                      <span className="font-semibold text-[#0c2d17] block mb-2">
                        Farm-Harvested Actives:
                      </span>
                      <ul className="grid grid-cols-2 gap-2 text-xs">
                        {selectedSoap.heroHerbs.map((herb, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[#1c1c19]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#994703]" />
                            {herb}
                          </li>
                        ))}
                      </ul>
                      <span className="block mt-3 text-[11px] text-[#727971]">
                        Provenance: {selectedSoap.origin}
                      </span>
                    </div>
                  )}
                  {activeTab === 'dosha' && (
                    <div className="space-y-2">
                      <p className="font-medium text-[#0c2d17]">{selectedSoap.dosha}</p>
                      <p>
                        Ayurvedic texts state that warm water baths with unrefined cold-pressed oils
                        balance bodily Vata, soothe irritated Pitta flare-ups, and clarify sluggish
                        Kapha skin pores without stripping moisture.
                      </p>
                    </div>
                  )}
                  {activeTab === 'inci' && (
                    <div className="space-y-2">
                      <p className="font-mono text-[11px] text-[#1c1c19] bg-[#f0ede9] p-3 rounded-lg leading-relaxed">
                        {selectedSoap.inci}
                      </p>
                      <span className="text-[10px] text-[#727971]">
                        100% Biodegradable • Palm Oil-Free • Cruelty-Free • Zero Synthetics
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#0c2d17]/10 flex flex-col sm:flex-row gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center justify-between sm:justify-start border border-[#0c2d17]/20 rounded-full px-3 py-1.5 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center font-bold text-stone-600 hover:text-black cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-bold text-sm text-[#0c2d17]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center font-bold text-stone-600 hover:text-black cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(selectedSoap, quantity);
                    setActiveModal('cart');
                  }}
                  className="flex-1 bg-[#0c2d17] text-white hover:bg-[#23432b] py-3 px-6 rounded-full text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                >
                  <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  <span>Add to Bag • ₹{selectedSoap.price * quantity}</span>
                </button>

                <button
                  onClick={handleAddToBundle}
                  className="bg-[#ffdbc9] text-[#321200] hover:bg-[#ffb68c] py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
                  title="Add to your custom 6-bar sanctuary box"
                >
                  Add to 6-Bar Box
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

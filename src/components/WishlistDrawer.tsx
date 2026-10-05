import React from 'react';
import { useStore } from '../context/StoreContext';
import { SOAPS_DATA } from '../data/soaps';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart, activeModal, setActiveModal, openPdp } = useStore();

  if (activeModal !== 'wishlist') return null;

  const wishlistedSoaps = SOAPS_DATA.filter((s) => wishlist.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setActiveModal('none')}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fcf9f4] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#0c2d17]/10 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#994703] text-[22px]">
                favorite
              </span>
              <h2 className="font-serif text-[20px] text-[#0c2d17] font-semibold">
                Botanical Wishlist
              </h2>
              <span className="bg-[#f0ede9] text-[#0c2d17] text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                {wishlistedSoaps.length}
              </span>
            </div>
            <button
              onClick={() => setActiveModal('none')}
              className="p-1 rounded-full text-[#424842] hover:text-[#0c2d17] hover:bg-[#f0ede9] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistedSoaps.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#727971] mb-3">
                  <span className="material-symbols-outlined text-[32px]">favorite_border</span>
                </div>
                <p className="font-serif text-[18px] text-[#0c2d17] font-semibold">
                  No saved bars yet
                </p>
                <p className="text-xs text-[#727971] mt-1 max-w-xs">
                  Tap the heart on any cold-pressed soap to save it to your sacred bath wishlist.
                </p>
                <button
                  onClick={() => setActiveModal('none')}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#0c2d17] text-white text-xs font-semibold hover:bg-[#23432b] cursor-pointer"
                >
                  Browse Artisan Soaps
                </button>
              </div>
            ) : (
              wishlistedSoaps.map((soap) => (
                <div
                  key={soap.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#0c2d17]/5 shadow-2xs items-center"
                >
                  <img
                    alt={soap.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 object-cover rounded-xl bg-[#f6f3ee] shrink-0 cursor-pointer"
                    onClick={() => openPdp(soap)}
                    src={soap.image}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-1">
                      <h4
                        onClick={() => openPdp(soap)}
                        className="font-serif text-[14.5px] font-semibold text-[#0c2d17] truncate cursor-pointer hover:text-[#994703]"
                      >
                        {soap.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(soap.id)}
                        className="text-[#994703] hover:text-[#ba1a1a] p-1 cursor-pointer"
                        title="Remove from wishlist"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>

                    <p className="text-[11.5px] text-[#727971] line-clamp-1 mt-0.5">
                      {soap.gujaratiName} • {soap.weight}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[14px] font-bold text-[#0c2d17]">
                        ₹{soap.price}
                      </span>

                      <button
                        onClick={() => {
                          addToCart(soap);
                          toggleWishlist(soap.id);
                        }}
                        className="bg-[#0c2d17] text-white hover:bg-[#23432b] px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[15px]">add</span>
                        Move to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistedSoaps.length > 0 && (
            <div className="p-6 bg-white border-t border-[#0c2d17]/10">
              <button
                onClick={() => {
                  wishlistedSoaps.forEach((soap) => addToCart(soap));
                  setActiveModal('cart');
                }}
                className="w-full bg-[#0c2d17] text-white hover:bg-[#23432b] py-3.5 rounded-full text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Move All to Bag</span>
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useStore } from '../context/StoreContext';
import { SOAPS_DATA } from '../data/soaps';

export const ArtisanCatalog: React.FC = () => {
  const {
    addToCart,
    openPdp,
    wishlist,
    toggleWishlist,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery
  } = useStore();

  const categories = [
    { id: 'all', label: `All Soaps (${SOAPS_DATA.length})` },
    { id: 'glow', label: 'Glow & Radiance' },
    { id: 'acne', label: 'Purifying & Detox' },
    { id: 'cooling', label: 'Cooling & Fresh' }
  ];

  const filteredSoaps = SOAPS_DATA.filter((soap) => {
    const matchesCategory =
      selectedCategory === 'all' || soap.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      soap.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      soap.gujaratiName.includes(searchQuery) ||
      soap.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      soap.heroHerbs.some((herb) => herb.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="artisan-catalog" className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-[#0c2d17]/5 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#994703]"></span>
              <span className="text-[11px] font-bold text-[#994703] uppercase tracking-widest">
                Handmade Small Batches
              </span>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[38px] text-[#0c2d17] font-semibold tracking-tight">
              The Artisan Soap Cellar
            </h2>
            <p className="text-[15px] text-[#424842] max-w-xl mt-1.5">
              Pure plant-based bars formulated to solve modern skin concerns through age-old botanical
              wisdom.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0c2d17] text-white shadow-sm font-semibold'
                      : 'bg-[#f6f3ee] text-[#424842] hover:text-[#0c2d17] hover:bg-[#ebe8e3]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Search Notification */}
        {searchQuery && (
          <div className="flex items-center justify-between bg-[#ffdbc9]/50 border border-[#994703]/20 px-4 py-2.5 rounded-xl text-xs text-[#321200]">
            <span>
              Showing results for: <strong>"{searchQuery}"</strong> ({filteredSoaps.length} found)
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#994703] font-semibold underline hover:text-[#753400] cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredSoaps.length === 0 ? (
          <div className="text-center py-16 bg-[#f6f3ee] rounded-2xl p-8">
            <span className="material-symbols-outlined text-[48px] text-[#727971] mb-2">
              spa
            </span>
            <h3 className="font-serif text-[22px] text-[#0c2d17]">No botanical soaps found</h3>
            <p className="text-sm text-[#424842] mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords or browsing all categories to discover our small-batch
              cured bars.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#0c2d17] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSoaps.map((soap) => {
              const isWishlisted = wishlist.includes(soap.id);

              return (
                <div
                  key={soap.id}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#0c2d17]/5"
                >
                  {/* Image Card Container */}
                  <div className="relative w-full aspect-[3/4] bg-[#f6f3ee] overflow-hidden">
                    <img
                      alt={soap.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      onClick={() => openPdp(soap)}
                      src={soap.image}
                    />

                    {/* Badge */}
                    <span
                      className={`absolute top-3 left-3 font-bold text-[10.5px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${
                        soap.badgeType === 'bestseller' || soap.badgeType === 'limited' || soap.badgeType === 'summer'
                          ? 'bg-[#ffdbc9] text-[#321200]'
                          : soap.badgeType === 'detox'
                          ? 'bg-[#31302d] text-[#f3f0eb]'
                          : soap.badgeType === 'glow'
                          ? 'bg-[#994703] text-white'
                          : 'bg-[#c6ecca] text-[#01210c]'
                      }`}
                    >
                      {soap.badge}
                    </span>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(soap.id);
                      }}
                      aria-label="Add to wishlist"
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer ${
                        isWishlisted
                          ? 'bg-white text-[#994703] shadow-md'
                          : 'bg-white/85 text-[#424842] hover:text-[#994703] shadow-xs'
                      }`}
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

                    {/* Quick View Pill on Hover */}
                    <button
                      onClick={() => openPdp(soap)}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 text-[#0c2d17] text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hover:bg-[#0c2d17] hover:text-white"
                    >
                      Quick View
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <div className="flex items-center justify-between text-[#424842] text-[12px] mb-1">
                        <span className="font-medium text-[#727971]">{soap.gujaratiName}</span>
                        <span className="flex items-center text-[#994703] font-semibold text-[11.5px]">
                          ★ {soap.rating} ({soap.reviewsCount})
                        </span>
                      </div>

                      <h3
                        onClick={() => openPdp(soap)}
                        className="font-serif text-[18px] sm:text-[19px] text-[#0c2d17] font-semibold leading-snug cursor-pointer hover:text-[#994703] transition-colors"
                      >
                        {soap.name}
                      </h3>

                      <p className="text-[12.5px] leading-relaxed text-[#424842] mt-1.5 line-clamp-2">
                        {soap.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-serif text-[20px] text-[#0c2d17] font-bold">
                          ₹{soap.price}
                        </span>
                        <span className="text-[13px] text-[#727971] line-through">
                          ₹{soap.originalPrice}
                        </span>
                        <span className="text-[11px] font-bold text-[#994703] ml-auto uppercase tracking-wider">
                          {soap.weight}
                        </span>
                      </div>

                      <button
                        onClick={() => addToCart(soap)}
                        className="w-full bg-[#f0ede9] text-[#0c2d17] hover:bg-[#0c2d17] hover:text-white py-2.5 rounded-full text-[13.5px] font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:scale-101 active:scale-98"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                        <span>Add to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

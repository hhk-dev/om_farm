import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartCount,
    cartTotal,
    freeShippingThreshold,
    updateQuantity,
    removeFromCart,
    activeModal,
    setActiveModal,
    showToast
  } = useStore();

  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState<number>(0);
  const [promoApplied, setPromoApplied] = useState(false);

  if (activeModal !== 'cart') return null;

  const isFreeShipping = cartTotal >= freeShippingThreshold;
  const progressPercent = Math.min(100, Math.round((cartTotal / freeShippingThreshold) * 100));

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'CLEAN15') {
      const discount = Math.round(cartTotal * 0.15);
      setPromoDiscount(discount);
      setPromoApplied(true);
      showToast('🌿 Promo CLEAN15 applied: 15% discount!');
    } else {
      showToast('Invalid promo code. Try CLEAN15');
    }
  };

  const finalTotal = Math.max(0, cartTotal - promoDiscount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setActiveModal('none')}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fcf9f4] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#0c2d17]/10 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0c2d17] text-[22px]">
                shopping_bag
              </span>
              <h2 className="font-serif text-[20px] text-[#0c2d17] font-semibold">
                Your Botanical Bag
              </h2>
              <span className="bg-[#f0ede9] text-[#0c2d17] text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                {cartCount}
              </span>
            </div>
            <button
              onClick={() => setActiveModal('none')}
              className="p-1 rounded-full text-[#424842] hover:text-[#0c2d17] hover:bg-[#f0ede9] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#f6f3ee] px-6 py-3.5 border-b border-[#0c2d17]/5">
            <div className="flex justify-between items-center text-xs text-[#1c1c19] font-medium mb-1.5">
              <span>
                {isFreeShipping ? (
                  <strong className="text-[#0c2d17] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#0c2d17]">
                      check_circle
                    </span>
                    You've unlocked Free Express Shipping!
                  </strong>
                ) : (
                  <span>
                    Add <strong>₹{freeShippingThreshold - cartTotal}</strong> more for Free Shipping
                  </span>
                )}
              </span>
              <span className="font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-[#e5e2dd] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0c2d17] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#727971] mb-3">
                  <span className="material-symbols-outlined text-[32px]">spa</span>
                </div>
                <p className="font-serif text-[20px] text-[#0c2d17] font-semibold">
                  Your bag is empty
                </p>
                <p className="text-xs text-[#727971] mt-1 max-w-xs">
                  Discover our small-batch cold-pressed Vedic bars slow-cured for four weeks.
                </p>
                <button
                  onClick={() => setActiveModal('none')}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#0c2d17] text-white text-xs font-semibold hover:bg-[#23432b] cursor-pointer"
                >
                  Explore The Artisan Cellar
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#0c2d17]/5 shadow-2xs items-center"
                >
                  <img
                    alt={item.title}
                    className="w-18 h-18 sm:w-20 sm:h-20 object-cover rounded-xl bg-[#f6f3ee] shrink-0"
                    src={item.image}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="font-serif text-[14.5px] font-semibold text-[#0c2d17] truncate">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#727971] hover:text-[#ba1a1a] p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>

                    <p className="text-[11.5px] text-[#727971] line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[14px] font-bold text-[#0c2d17]">
                          ₹{item.price * item.quantity}
                        </span>
                        {item.originalPrice > item.price && (
                          <span className="text-[11px] text-[#727971] line-through">
                            ₹{item.originalPrice * item.quantity}
                          </span>
                        )}
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#0c2d17]/15 rounded-full px-2 py-0.5 bg-[#fcf9f4]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-xs text-[#424842] hover:text-black px-1.5 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-semibold px-2 text-[#0c2d17]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-xs text-[#424842] hover:text-black px-1.5 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Module */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#0c2d17]/10 space-y-4">
              {/* Promo Code Input */}
              {!promoApplied ? (
                <form onSubmit={applyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (e.g. CLEAN15)"
                    className="flex-1 bg-[#f6f3ee] px-3.5 py-2 text-xs rounded-lg border border-[#0c2d17]/10 focus:outline-none uppercase"
                  />
                  <button
                    type="submit"
                    className="bg-[#f0ede9] text-[#0c2d17] hover:bg-[#0c2d17] hover:text-white px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex justify-between items-center bg-[#c6ecca]/30 px-3 py-2 rounded-lg text-xs text-[#01210c]">
                  <span>🌿 Promo CLEAN15 (-₹{promoDiscount})</span>
                  <button
                    onClick={() => {
                      setPromoApplied(false);
                      setPromoDiscount(0);
                    }}
                    className="text-[#ba1a1a] font-semibold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-[#424842]">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-[#1c1c19]">₹{cartTotal}</span>
                </div>
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-[#994703]">
                    <span>Clean Bath Discount</span>
                    <span>-₹{promoDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Expedited Express Shipping</span>
                  <span className="font-semibold text-[#0c2d17]">
                    {isFreeShipping ? 'FREE' : '₹60'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#0c2d17] pt-2 border-t border-[#0c2d17]/10">
                  <span>Total Amount</span>
                  <span>₹{finalTotal + (isFreeShipping ? 0 : 60)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => setActiveModal('checkout')}
                  className="w-full bg-[#0c2d17] text-white hover:bg-[#23432b] py-3.5 rounded-full text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-101"
                >
                  <span>Proceed to Vedic Checkout</span>
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                </button>

                <button
                  onClick={() => setActiveModal('none')}
                  className="w-full text-center text-xs text-[#727971] hover:text-[#0c2d17] py-1 cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

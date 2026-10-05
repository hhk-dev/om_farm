import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

export const CheckoutModal: React.FC = () => {
  const {
    activeModal,
    setActiveModal,
    cart,
    cartTotal,
    freeShippingThreshold,
    placeOrder,
    lastOrder,
    showToast
  } = useStore();

  const [formData, setFormData] = useState({
    name: 'Aarav Patel',
    phone: '9876543210',
    address: '42, Shanti Niketan, Bodakdev',
    city: 'Ahmedabad',
    pincode: '380054',
    paymentMethod: 'cod' as 'cod' | 'upi'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (activeModal !== 'checkout' && activeModal !== 'order-success') return null;

  const isFreeShipping = cartTotal >= freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : 60;
  const finalTotal = cartTotal + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      showToast('Please fill in all delivery details');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(formData);
      setIsSubmitting(false);
    }, 700);
  };

  // Success view
  if (activeModal === 'order-success' && lastOrder) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={() => setActiveModal('none')}
        />
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-[#fcf9f4] p-6 sm:p-8 text-left shadow-2xl transition-all border border-[#0c2d17]/10 my-8">
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#c6ecca] text-[#01210c] flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <span className="text-xs font-bold text-[#994703] uppercase tracking-widest block mb-1">
                Order Confirmed
              </span>
              <h2 className="font-serif text-[28px] text-[#0c2d17] font-semibold">
                Your Sanctuary Bars Are Being Cured &amp; Packed
              </h2>
              <p className="text-xs text-[#727971] mt-1">Order #{lastOrder.orderId}</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#0c2d17]/10 space-y-3 my-4 text-xs">
              <div className="flex justify-between pb-2 border-b border-[#0c2d17]/10">
                <span className="text-[#727971]">Delivery To</span>
                <span className="font-semibold text-[#0c2d17] text-right">
                  {lastOrder.name}
                  <br />
                  {lastOrder.address}, {lastOrder.city} - {lastOrder.pincode}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#0c2d17]/10">
                <span className="text-[#727971]">Contact Mobile</span>
                <span className="font-semibold text-[#0c2d17]">+91 {lastOrder.phone}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#0c2d17]/10">
                <span className="text-[#727971]">Payment Mode</span>
                <span className="font-semibold uppercase text-[#0c2d17]">
                  {lastOrder.paymentMethod === 'cod' ? 'Cash on Delivery (₹' + lastOrder.total + ')' : 'Instant UPI'}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-[#0c2d17]/10">
                <span className="text-[#727971]">Items Packed</span>
                <span className="font-semibold text-[#0c2d17]">{lastOrder.items.length} items</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm text-[#0c2d17]">
                <span>Total Paid / Due</span>
                <span>₹{lastOrder.total}</span>
              </div>
            </div>

            <div className="bg-[#ffdbc9]/40 p-4 rounded-xl text-xs text-[#321200] space-y-1">
              <strong className="block font-semibold">Farm Batch #2025-09 Notice:</strong>
              <p>
                Each bar is hand-cut and individually stamped in our Ahmedabad curing room. Tracking
                SMS will arrive via WhatsApp within 24 hours.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`https://wa.me/919974173126?text=Hi%20Om%20Farm%2C%20checking%20status%20for%20order%20${lastOrder.orderId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0c2d17] text-white hover:bg-[#23432b] py-3 rounded-full text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                Track via WhatsApp Concierge
              </a>
              <button
                onClick={() => setActiveModal('none')}
                className="w-full py-2.5 text-xs text-[#727971] hover:text-[#0c2d17] font-medium cursor-pointer"
              >
                Back to Om Farm Storefront
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setActiveModal('none')}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-xl transform overflow-hidden rounded-3xl bg-[#fcf9f4] p-6 sm:p-8 text-left shadow-2xl transition-all border border-[#0c2d17]/10 my-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#0c2d17]/10 mb-5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0c2d17] text-[22px]">lock</span>
              <h2 className="font-serif text-[22px] text-[#0c2d17] font-semibold">
                Vedic Checkout &amp; Shipping
              </h2>
            </div>
            <button
              onClick={() => setActiveModal('cart')}
              className="p-1 rounded-full text-[#424842] hover:text-[#0c2d17] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Delivery Details */}
            <div>
              <h3 className="text-xs font-bold text-[#0c2d17] uppercase tracking-wider mb-2">
                1. Delivery Sanctuary Address
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[#424842] font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-[#0c2d17]/15 focus:outline-none focus:border-[#0c2d17]"
                  />
                </div>
                <div>
                  <label className="block text-[#424842] font-medium mb-1">
                    Mobile Number (SMS / WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-[#0c2d17]/15 focus:outline-none focus:border-[#0c2d17]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[#424842] font-medium mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-[#0c2d17]/15 focus:outline-none focus:border-[#0c2d17]"
                  />
                </div>
                <div>
                  <label className="block text-[#424842] font-medium mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-[#0c2d17]/15 focus:outline-none focus:border-[#0c2d17]"
                  />
                </div>
                <div>
                  <label className="block text-[#424842] font-medium mb-1">Pin Code</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-[#0c2d17]/15 focus:outline-none focus:border-[#0c2d17]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-[#0c2d17] uppercase tracking-wider mb-2">
                2. Payment Method
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className={`p-3.5 rounded-xl text-left border flex items-center gap-2.5 cursor-pointer ${
                    formData.paymentMethod === 'cod'
                      ? 'border-[#0c2d17] bg-[#c6ecca]/30 text-[#0c2d17]'
                      : 'border-[#0c2d17]/15 bg-white text-[#424842]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                  <div>
                    <span className="font-semibold block">Cash on Delivery</span>
                    <span className="text-[11px] text-[#727971]">Pay upon doorstep receipt</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                  className={`p-3.5 rounded-xl text-left border flex items-center gap-2.5 cursor-pointer ${
                    formData.paymentMethod === 'upi'
                      ? 'border-[#0c2d17] bg-[#c6ecca]/30 text-[#0c2d17]'
                      : 'border-[#0c2d17]/15 bg-white text-[#424842]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                  <div>
                    <span className="font-semibold block">Instant UPI / QR</span>
                    <span className="text-[11px] text-[#727971]">GPay, PhonePe, Paytm</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Order Summary Strip */}
            <div className="bg-[#f0ede9] p-4 rounded-xl text-xs space-y-1.5 mt-3">
              <div className="flex justify-between text-[#424842]">
                <span>Items ({cart.length})</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-[#424842]">
                <span>Express Shipping</span>
                <span className="text-[#0c2d17] font-medium">
                  {isFreeShipping ? 'FREE' : '₹60'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#0c2d17]/10 font-bold text-sm text-[#0c2d17]">
                <span>Final Payable</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0c2d17] text-white hover:bg-[#23432b] py-3.5 rounded-full text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-101 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Confirm Sacred Bath Order • ₹{finalTotal}</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SoapProduct, SOAPS_DATA, BUNDLE_CHOICES, BundleOption } from '../data/soaps';

export interface CartItem {
  id: string;
  type: 'single' | 'bundle';
  product?: SoapProduct;
  bundleSlots?: (BundleOption | null)[];
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
}

interface ToastState {
  message: string;
  visible: boolean;
}

interface OrderDetails {
  orderId: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: 'cod' | 'upi';
  total: number;
  items: CartItem[];
  createdAt: string;
}

interface StoreContextType {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  freeShippingThreshold: number;
  addToCart: (product: SoapProduct, quantity?: number) => void;
  addBundleToCart: (slots: (BundleOption | null)[]) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;

  wishlist: string[];
  toggleWishlist: (soapId: string) => void;
  isInWishlist: (soapId: string) => boolean;

  bundleSlots: (BundleOption | null)[];
  setBundleSlot: (index: number, option: BundleOption) => void;
  clearBundleSlot: (index: number) => void;
  resetBundle: () => void;
  addCurrentBundleToCart: () => void;

  activeModal: 'none' | 'cart' | 'quiz' | 'wishlist' | 'story' | 'rituals' | 'pdp' | 'checkout' | 'order-success';
  setActiveModal: (modal: 'none' | 'cart' | 'quiz' | 'wishlist' | 'story' | 'rituals' | 'pdp' | 'checkout' | 'order-success') => void;
  selectedSoap: SoapProduct | null;
  openPdp: (soap: SoapProduct) => void;

  toast: ToastState;
  showToast: (message: string) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;

  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;

  lastOrder: OrderDetails | null;
  placeOrder: (details: Omit<OrderDetails, 'orderId' | 'items' | 'total' | 'createdAt'>) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Initial preloaded cart matching 2 items totalling ₹640 (e.g. 1 Kashmiri Saffron @ ₹260 + 1 Traditional Ubtan + Ayurvedic Wooden Dish set @ ₹380, or 2 items)
const initialCart: CartItem[] = [
  {
    id: 'cart-1',
    type: 'single',
    product: SOAPS_DATA[0], // Traditional Ubtan
    title: 'Traditional Ubtan Glow Soap',
    subtitle: '125g Bar • Ayurvedic Cold-Process',
    price: 220,
    originalPrice: 280,
    quantity: 1,
    image: SOAPS_DATA[0].image
  },
  {
    id: 'cart-2',
    type: 'single',
    product: SOAPS_DATA[1], // Kashmiri Saffron
    title: 'Kashmiri Saffron (Kesar) Bar + Teak Dish',
    subtitle: '125g Bar + Reclaimed Wood Rest',
    price: 420,
    originalPrice: 480,
    quantity: 1,
    image: SOAPS_DATA[1].image
  }
];

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [wishlist, setWishlist] = useState<string[]>([
    'traditional-ubtan',
    'kashmiri-saffron',
    'keshuda-floral'
  ]);

  // Initial 6 slots preloaded matching the screenshot!
  const [bundleSlots, setBundleSlots] = useState<(BundleOption | null)[]>([
    BUNDLE_CHOICES[0], // Ubtan
    BUNDLE_CHOICES[1], // Saffron
    BUNDLE_CHOICES[2], // Charcoal
    BUNDLE_CHOICES[3], // Neem
    BUNDLE_CHOICES[4], // Rose
    BUNDLE_CHOICES[5]  // Keshuda
  ]);

  const [activeModal, setActiveModal] = useState<'none' | 'cart' | 'quiz' | 'wishlist' | 'story' | 'rituals' | 'pdp' | 'checkout' | 'order-success'>('none');
  const [selectedSoap, setSelectedSoap] = useState<SoapProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [toast, setToast] = useState<ToastState>({ message: '', visible: false });
  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(null);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 499;

  const addToCart = (product: SoapProduct, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product?.id === product.id && item.type === 'single');
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-item-${Date.now()}`,
          type: 'single',
          product,
          title: product.name,
          subtitle: `${product.weight} • ${product.gujaratiName}`,
          price: product.price,
          originalPrice: product.originalPrice,
          quantity,
          image: product.image
        }
      ];
    });
    showToast(`🌿 Added ${product.name} (₹${product.price}) to Bag`);
  };

  const addBundleToCart = (slots: (BundleOption | null)[]) => {
    const filledSlots = slots.filter((s): s is BundleOption => s !== null);
    if (filledSlots.length === 0) return;

    const names = filledSlots.map((s) => s.shortName).join(' + ');

    setCart((prev) => [
      ...prev,
      {
        id: `bundle-${Date.now()}`,
        type: 'bundle',
        bundleSlots: filledSlots,
        title: 'Custom 6-Bar Sanctuary Box',
        subtitle: `Includes: ${names} • + Free Teakwood Dish`,
        price: 1080,
        originalPrice: 1440,
        quantity: 1,
        image: filledSlots[0]?.image || SOAPS_DATA[0].image
      }
    ]);
    showToast('🎁 Custom 6-Bar Box + Free Teakwood Dish Added to Bag!');
  };

  const addCurrentBundleToCart = () => {
    const filledCount = bundleSlots.filter(Boolean).length;
    if (filledCount < 6) {
      showToast(`Please select ${6 - filledCount} more bar(s) to complete your box!`);
      return;
    }
    addBundleToCart(bundleSlots);
  };

  const setBundleSlot = (index: number, option: BundleOption) => {
    setBundleSlots((prev) => {
      const updated = [...prev];
      if (index >= 0 && index < 6) {
        updated[index] = option;
      } else {
        const firstEmpty = updated.indexOf(null);
        if (firstEmpty !== -1) {
          updated[firstEmpty] = option;
        } else {
          showToast('All 6 slots are full! Tap any slot cross to replace it.');
          return prev;
        }
      }
      showToast(`Added ${option.name} into Sanctuary Box ✨`);
      return updated;
    });
  };

  const clearBundleSlot = (index: number) => {
    setBundleSlots((prev) => {
      const updated = [...prev];
      updated[index] = null;
      return updated;
    });
  };

  const resetBundle = () => {
    setBundleSlots([
      BUNDLE_CHOICES[0],
      BUNDLE_CHOICES[1],
      BUNDLE_CHOICES[2],
      BUNDLE_CHOICES[3],
      BUNDLE_CHOICES[4],
      BUNDLE_CHOICES[5]
    ]);
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Item removed from your bag');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (soapId: string) => {
    setWishlist((prev) => {
      if (prev.includes(soapId)) {
        showToast('Removed from Botanical Wishlist');
        return prev.filter((id) => id !== soapId);
      } else {
        showToast('Added to Botanical Wishlist 🤍');
        return [...prev, soapId];
      }
    });
  };

  const isInWishlist = (soapId: string) => wishlist.includes(soapId);

  const openPdp = (soap: SoapProduct) => {
    setSelectedSoap(soap);
    setActiveModal('pdp');
  };

  const placeOrder = (details: Omit<OrderDetails, 'orderId' | 'items' | 'total' | 'createdAt'>) => {
    const orderId = `OM-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: OrderDetails = {
      ...details,
      orderId,
      items: [...cart],
      total: cartTotal,
      createdAt: new Date().toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setLastOrder(newOrder);
    setCart([]);
    setActiveModal('order-success');
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        freeShippingThreshold,
        addToCart,
        addBundleToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        wishlist,
        toggleWishlist,
        isInWishlist,
        bundleSlots,
        setBundleSlot,
        clearBundleSlot,
        resetBundle,
        addCurrentBundleToCart,
        activeModal,
        setActiveModal,
        selectedSoap,
        openPdp,
        toast,
        showToast,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        lastOrder,
        placeOrder
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

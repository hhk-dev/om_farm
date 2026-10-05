import React from 'react';
import { useStore } from '../context/StoreContext';

export const Toast: React.FC = () => {
  const { toast } = useStore();

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 transform translate-y-0 opacity-100 flex items-center gap-3 bg-[#0c2d17] text-white px-5 py-3.5 rounded-full shadow-2xl border border-white/10 animate-bounce-subtle pointer-events-none">
      <span className="material-symbols-outlined text-[20px] text-[#c6ecca]">
        check_circle
      </span>
      <span className="text-xs sm:text-sm font-semibold tracking-wide">
        {toast.message}
      </span>
    </div>
  );
};

import React from 'react';
import { useStore } from '../context/StoreContext';

export const StoryAndRitualsModals: React.FC = () => {
  const { activeModal, setActiveModal, addToCart } = useStore();

  if (activeModal !== 'story' && activeModal !== 'rituals') return null;

  if (activeModal === 'story') {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={() => setActiveModal('none')}
        />
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#fcf9f4] p-6 sm:p-10 text-left shadow-2xl transition-all border border-[#0c2d17]/10 my-8">
            <button
              onClick={() => setActiveModal('none')}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#424842] hover:text-[#0c2d17] hover:bg-[#f0ede9] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            <span className="text-[11px] font-bold text-[#994703] uppercase tracking-widest block mb-1">
              Farm Provenance &amp; Heritage
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#0c2d17] font-semibold mb-4 leading-tight">
              Grown in Ahmedabad. Cured for 28 Days Under Linen.
            </h2>

            <div className="space-y-4 text-[14.5px] leading-relaxed text-[#424842]">
              <p>
                Om Farm Botanicals began on our family’s organic agricultural groves on the outskirts
                of Ahmedabad, Gujarat. Frustrated by commercial "herbal" soaps packed with chemical
                foaming surfactants and artificial fragrance oils, we returned to classical Vedic
                cold-process saponification.
              </p>

              <div className="bg-[#f0ede9] p-4 rounded-2xl border border-[#0c2d17]/5 space-y-2">
                <h4 className="font-serif text-[16px] text-[#0c2d17] font-semibold">
                  The Four Pillars of Om Farm:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#1c1c19]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#994703] font-bold">1.</span>
                    <span>
                      <strong>Native Cold-Pressed Oils:</strong> First-expeller pressed coconut,
                      sesame, and neem extracted without heat degradation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#994703] font-bold">2.</span>
                    <span>
                      <strong>4-Week Linen Curing:</strong> Bars rest on breathable teakwood racks
                      for four weeks, curing excess moisture out to yield a rock-solid, long-lasting bar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#994703] font-bold">3.</span>
                    <span>
                      <strong>Raw Botanical Extracts:</strong> Gujarat Keshuda blossoms, Pampore
                      valley saffron, and pure edible Bhimseni camphor.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#994703] font-bold">4.</span>
                    <span>
                      <strong>Compostable Kraft Wrapping:</strong> Zero single-use plastic bottles,
                      zero micro-plastics entering municipal water systems.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-[#727971]">
                Every batch is hand-poured, hand-cut with piano wire, and stamped with the sacred Om
                Farm seal before traveling directly from our farm curing room to your bathroom
                sanctuary.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0c2d17]/10 flex justify-between items-center">
              <span className="text-xs text-[#0c2d17] font-semibold">
                Direct Helpline: +91 99741 73126
              </span>
              <button
                onClick={() => setActiveModal('none')}
                className="bg-[#0c2d17] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#23432b] cursor-pointer"
              >
                Explore Soap Cellar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    /* Rituals Modal */
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setActiveModal('none')}
      />
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#fcf9f4] p-6 sm:p-10 text-left shadow-2xl transition-all border border-[#0c2d17]/10 my-8">
          <button
            onClick={() => setActiveModal('none')}
            className="absolute top-4 right-4 p-1.5 rounded-full text-[#424842] hover:text-[#0c2d17] hover:bg-[#f0ede9] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>

          <span className="text-[11px] font-bold text-[#994703] uppercase tracking-widest block mb-1">
            Vedic Dinacharya
          </span>
          <h2 className="font-serif text-[28px] sm:text-[34px] text-[#0c2d17] font-semibold mb-4 leading-tight">
            The Ayurvedic Sacred Bathing Ritual
          </h2>

          <div className="space-y-4 text-[14px] leading-relaxed text-[#424842]">
            <p>
              In Ayurveda, <em>Snana</em> (bathing) is not merely a hygienic chore—it is an energetic
              purification ritual that enhances bodily vitality (Ojas), clears sluggish lethargy, and
              soothes the nervous system.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#0c2d17]/10 shadow-xs space-y-2">
                <span className="text-xs font-bold text-[#994703] uppercase tracking-wider block">
                  Morning Awakening (Prabhat)
                </span>
                <h4 className="font-serif text-[17px] font-semibold text-[#0c2d17]">
                  Ubtan &amp; Camphor Lather
                </h4>
                <p className="text-xs text-[#424842]">
                  Lather with <strong>Traditional Ubtan</strong> or <strong>Cooling Pure Camphor</strong>.
                  Massage in brisk upward motions towards the heart to stimulate lymph circulation,
                  exfoliate dead keratin, and ignite morning mental clarity.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#0c2d17]/10 shadow-xs space-y-2">
                <span className="text-xs font-bold text-[#994703] uppercase tracking-wider block">
                  Evening Restoration (Sandhya)
                </span>
                <h4 className="font-serif text-[17px] font-semibold text-[#0c2d17]">
                  Mogra &amp; Keshuda Unwind
                </h4>
                <p className="text-xs text-[#424842]">
                  Use warm water with <strong>Velvet Mogra</strong> or <strong>Keshuda Blossom</strong>.
                  Let the natural floral steam rest over your neck and temples for two minutes to
                  discharge daily screen fatigue and induce restful sleep.
                </p>
              </div>
            </div>

            <div className="bg-[#ffdbc9]/40 p-4 rounded-xl text-xs text-[#321200]">
              <strong className="block font-semibold mb-1">Preserving Your Cured Bar:</strong>
              Because our soaps contain no hardening petrochemical waxes, store your bar on a slotted
              wooden soap dish away from direct shower spray between rituals.
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#0c2d17]/10 flex justify-end">
            <button
              onClick={() => setActiveModal('none')}
              className="bg-[#0c2d17] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#23432b] cursor-pointer"
            >
              Return to Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

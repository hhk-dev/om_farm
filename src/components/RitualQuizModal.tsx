import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { SOAPS_DATA } from '../data/soaps';

export const RitualQuizModal: React.FC = () => {
  const { activeModal, setActiveModal, addToCart } = useStore();

  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<'glow' | 'acne' | 'cooling' | 'calm'>('glow');
  const [skinType, setSkinType] = useState<'dry' | 'oily' | 'sensitive'>('dry');
  const [scent, setScent] = useState<'earthy' | 'saffron' | 'fresh' | 'floral'>('earthy');

  if (activeModal !== 'quiz') return null;

  const handleFinish = () => {
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setGoal('glow');
    setSkinType('dry');
    setScent('earthy');
  };

  // Determine recommendation
  let primarySoap = SOAPS_DATA[0]; // Ubtan
  if (goal === 'glow' && scent === 'saffron') primarySoap = SOAPS_DATA[1]; // Saffron
  else if (goal === 'acne' && skinType === 'oily') primarySoap = SOAPS_DATA[3]; // Charcoal
  else if (goal === 'acne') primarySoap = SOAPS_DATA[4]; // Neem & Tulsi
  else if (goal === 'cooling') primarySoap = SOAPS_DATA[2]; // Keshuda
  else if (goal === 'calm' || scent === 'floral') primarySoap = SOAPS_DATA[7]; // Velvet Mogra
  else if (scent === 'fresh') primarySoap = SOAPS_DATA[5]; // Camphor

  const secondarySoap = primarySoap.id === SOAPS_DATA[0].id ? SOAPS_DATA[1] : SOAPS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setActiveModal('none')}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-xl transform overflow-hidden rounded-3xl bg-[#fcf9f4] p-6 sm:p-8 text-left shadow-2xl transition-all border border-[#0c2d17]/10 my-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#0c2d17]/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#994703] text-[22px]">spa</span>
              <h2 className="font-serif text-[20px] sm:text-[22px] text-[#0c2d17] font-semibold">
                Ayurvedic Soap &amp; Dosha Match
              </h2>
            </div>
            <button
              onClick={() => setActiveModal('none')}
              className="p-1 rounded-full text-[#424842] hover:text-[#0c2d17]"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {step < 4 ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-[#727971] mb-2 font-medium">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? 'Skin Focus' : step === 2 ? 'Post-Bath Feel' : 'Aroma Preference'}</span>
              </div>
              <div className="w-full h-1.5 bg-[#e5e2dd] rounded-full mb-6">
                <div
                  className="h-full bg-[#0c2d17] rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-[#0c2d17] font-semibold">
                    What is your primary bath &amp; skin priority?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setGoal('glow');
                        setStep(2);
                      }}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        goal === 'glow'
                          ? 'border-[#0c2d17] bg-[#ffdbc9]/40'
                          : 'border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40'
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        ✨ Tan Removal &amp; Radiance
                      </span>
                      <span className="text-xs text-[#727971] mt-1 block">
                        Gentle herbal exfoliation with wild turmeric and sandalwood.
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        setGoal('acne');
                        setStep(2);
                      }}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        goal === 'acne'
                          ? 'border-[#0c2d17] bg-[#ffdbc9]/40'
                          : 'border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40'
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        🌿 Clear Pores &amp; Body Acne
                      </span>
                      <span className="text-xs text-[#727971] mt-1 block">
                        Deep detox with charcoal, pure neem and tulsi leaves.
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        setGoal('cooling');
                        setStep(2);
                      }}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        goal === 'cooling'
                          ? 'border-[#0c2d17] bg-[#ffdbc9]/40'
                          : 'border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40'
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        ❄️ Heat Rash &amp; Sunburn Relief
                      </span>
                      <span className="text-xs text-[#727971] mt-1 block">
                        Soothing keshuda blossoms and icy edible camphor.
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        setGoal('calm');
                        setStep(2);
                      }}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        goal === 'calm'
                          ? 'border-[#0c2d17] bg-[#ffdbc9]/40'
                          : 'border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40'
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        🌙 Evening Stress Relief &amp; Sleep
                      </span>
                      <span className="text-xs text-[#727971] mt-1 block">
                        Intoxicating fresh Arabian jasmine and rich shea butter.
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-[#0c2d17] font-semibold">
                    How does your skin feel 15 minutes after a bath?
                  </h3>
                  <div className="space-y-2.5">
                    <button
                      onClick={() => {
                        setSkinType('dry');
                        setStep(3);
                      }}
                      className="w-full p-4 rounded-xl text-left border border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        Dry, Stretched or Flaky (Vata Energy)
                      </span>
                      <span className="text-xs text-[#727971]">
                        Needs high native glycerin, sweet almond oil, and raw goat milk.
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        setSkinType('sensitive');
                        setStep(3);
                      }}
                      className="w-full p-4 rounded-xl text-left border border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        Warm, Red or Prone to Heat Sensitivities (Pitta Energy)
                      </span>
                      <span className="text-xs text-[#727971]">
                        Needs cooling flame-of-the-forest, pure sandalwood, and vetiver.
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        setSkinType('oily');
                        setStep(3);
                      }}
                      className="w-full p-4 rounded-xl text-left border border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        Congested or Heavy Sebum in Humid Weather (Kapha Energy)
                      </span>
                      <span className="text-xs text-[#727971]">
                        Needs clarifying coconut shell charcoal, neem, and camphor vapor.
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-[#0c2d17] font-semibold">
                    Which aroma profile brings you instant peace?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setScent('earthy');
                        handleFinish();
                      }}
                      className="p-4 rounded-xl text-left border border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        🌾 Warm Roasted Gram &amp; Sandalwood
                      </span>
                      <span className="text-xs text-[#727971] mt-0.5 block">Traditional temple grounding</span>
                    </button>

                    <button
                      onClick={() => {
                        setScent('saffron');
                        handleFinish();
                      }}
                      className="p-4 rounded-xl text-left border border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        🍯 Honeyed Kashmiri Saffron Milk
                      </span>
                      <span className="text-xs text-[#727971] mt-0.5 block">Royal dewy luxury</span>
                    </button>

                    <button
                      onClick={() => {
                        setScent('fresh');
                        handleFinish();
                      }}
                      className="p-4 rounded-xl text-left border border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        🌲 Pure Camphor &amp; Sacred Tulsi
                      </span>
                      <span className="text-xs text-[#727971] mt-0.5 block">Crisp morning alertness</span>
                    </button>

                    <button
                      onClick={() => {
                        setScent('floral');
                        handleFinish();
                      }}
                      className="p-4 rounded-xl text-left border border-[#0c2d17]/10 bg-white hover:border-[#0c2d17]/40 transition-all cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-[#0c2d17] block">
                        🌸 Velvety Arabian Mogra Jasmine
                      </span>
                      <span className="text-xs text-[#727971] mt-0.5 block">Nervous system unwind</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Back / Next Nav */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#0c2d17]/10">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-xs text-[#727971] hover:text-[#0c2d17] cursor-pointer"
                  >
                    ← Back
                  </button>
                ) : (
                  <span />
                )}
                <span className="text-[11px] text-[#727971]">100% Ayurvedic Herb Formulations</span>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="bg-[#c6ecca]/30 p-4 rounded-2xl border border-[#2d4e35]/15 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#0c2d17] text-[28px]">
                  verified
                </span>
                <div>
                  <span className="text-xs font-bold text-[#0c2d17] uppercase tracking-wider block">
                    Your Vedic Bath Prescription
                  </span>
                  <p className="text-xs text-[#424842]">
                    Formulated for {primarySoap.dosha} with zero synthetics.
                  </p>
                </div>
              </div>

              {/* Recommended Bar Showcase */}
              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-[#0c2d17]/10 shadow-xs items-center">
                <img
                  alt={primarySoap.name}
                  className="w-20 h-20 object-cover rounded-xl bg-[#f6f3ee] shrink-0"
                  src={primarySoap.image}
                />
                <div className="flex-1">
                  <span className="text-[11px] font-semibold text-[#994703]">
                    {primarySoap.gujaratiName}
                  </span>
                  <h4 className="font-serif text-[17px] font-semibold text-[#0c2d17] leading-tight">
                    {primarySoap.name}
                  </h4>
                  <p className="text-xs text-[#424842] mt-1 line-clamp-2">
                    {primarySoap.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-[#0c2d17] text-sm">₹{primarySoap.price}</span>
                    <button
                      onClick={() => {
                        addToCart(primarySoap);
                        setActiveModal('cart');
                      }}
                      className="bg-[#0c2d17] text-white hover:bg-[#23432b] px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>

              {/* Ritual Pairing Recommendation */}
              <div className="p-4 bg-[#f6f3ee] rounded-2xl border border-[#0c2d17]/5 text-xs text-[#424842] space-y-1.5">
                <strong className="text-[#0c2d17] block">Vedic Daily Routine:</strong>
                <p>
                  Use <strong>{primarySoap.name}</strong> for your morning restorative shower, and pair
                  with <strong>{secondarySoap.name}</strong> before sleep to balance skin temperature and
                  restore natural dermal ceramides.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    addToCart(primarySoap);
                    addToCart(secondarySoap);
                    setActiveModal('cart');
                  }}
                  className="flex-1 bg-[#0c2d17] text-white hover:bg-[#23432b] py-3 rounded-full text-xs font-semibold transition-all shadow-md cursor-pointer text-center"
                >
                  Add Prescribed Duo to Bag (₹{primarySoap.price + secondarySoap.price})
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-4 py-3 rounded-full text-xs text-[#727971] hover:text-[#0c2d17] cursor-pointer"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

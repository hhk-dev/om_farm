import React from 'react';

export const BenefitsStrip: React.FC = () => {
  const benefits = [
    {
      icon: 'routine',
      title: 'Cured for 4 Weeks',
      desc: 'Slow cold-process retain natural skin-friendly glycerin.',
      bgColor: 'bg-[#ffdbc9]',
      textColor: 'text-[#321200]'
    },
    {
      icon: 'science_off',
      title: '0% Synthetic Additives',
      desc: 'No SLS, parabens, phthalates, artificial perfumes or dyes.',
      bgColor: 'bg-[#c6ecca]',
      textColor: 'text-[#01210c]'
    },
    {
      icon: 'local_florist',
      title: 'Vedic Potency',
      desc: 'Fresh farm extracts of Keshuda, Chandan, Neem, & Kapur.',
      bgColor: 'bg-[#ffdbc9]',
      textColor: 'text-[#321200]'
    },
    {
      icon: 'compost',
      title: 'Farm-Direct & Plastic Free',
      desc: 'Compostable paper bands with zero single-use plastics.',
      bgColor: 'bg-[#c6ecca]',
      textColor: 'text-[#01210c]'
    }
  ];

  return (
    <section className="w-full bg-[#f6f3ee] py-8 px-4 sm:px-8 lg:px-12 border-y border-[#0c2d17]/5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl shadow-xs border border-[#0c2d17]/5 hover:shadow-sm transition-shadow"
          >
            <div
              className={`w-11 h-11 rounded-full ${b.bgColor} flex items-center justify-center ${b.textColor} shrink-0`}
            >
              <span className="material-symbols-outlined text-[22px]">{b.icon}</span>
            </div>
            <div>
              <h2 className="text-[14px] font-semibold text-[#0c2d17] leading-tight">
                {b.title}
              </h2>
              <p className="text-[12.5px] text-[#424842] mt-1 leading-snug">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

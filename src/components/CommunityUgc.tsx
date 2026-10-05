import React from 'react';

export const CommunityUgc: React.FC = () => {
  const shelfies = [
    {
      handle: '@aanya_cleanbeauty',
      quote: '"The Ubtan bar erased my beach tan in 2 weeks!"',
      tag: 'Traditional Ubtan Bar',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDfsQLdqn22AKGL3mIy-7Vl8cylBKU-Ixy8D4PWGc8vg2MsIYtoCmkk54e7dOY6MNm4oSAJAN0O0j29QYqRfYn5yvI8arDxk9e4EJ_hmRBbrKM0cGYL2nTo6MfXTJDCTaZw4AZweSaKDLKzA_JKIp3EXpdStZcLMp0KnRA_PcfjBU0lNTo_LqVUfyefN8QLpGhrIti1JQHBHW28YfLoeyZMMpMKhtTUfxbgI4oCj5Wa_v7BkCoK7QawyyPx_3hgHRrE'
    },
    {
      handle: '@rohit.vedic',
      quote: '"Smells like real Kashmir saffron and pure golden sunshine."',
      tag: 'Kashmiri Kesar Bar',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDX975QMB_lomX7Qc7b61-inJfSKiBFJP1xNafnXR0ZVXDnaF5iEBMMClw2raJya3_NO4Vs29zw5l6lzatneNpZg_ZOeK4tPtjsItT0t3HD-3qsNEf1MJlpVKNB8D8Q9yot6ZS35WslZGw3GE3CU8V5-oMEjz4Q9sl8WIOctfdR0Ot8YJYQQ02NNqK46qjDsCuUtRFIfVdVijkDOW9FJo_l3cS8axi1EidEyJ-Mffv1Ep5zIEI2PwBXUGUSsSCePhIj'
    },
    {
      handle: '@meera_wellness',
      quote: '"Pores feel squeaky clean yet deeply moisturized."',
      tag: 'Activated Charcoal Detox',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWBD--gz7ePMF1ogGULonWTTPTowIgiK1S6w6AXNx4MEcKsYFemA7bF1c7u7a21DVyuC5eImbBathnDF019XIXvu7OY5E8C7UBTFIALKk_N2Ot8z0kmB5HEoZShfUwP0zgtDrv6e84kdx_kGoUbojSMNZU9XuDpTQQ8BWADOJmV-sR31OIXcTc38pN-MCp7YBfK_xnrPozqmMctp8lPFVDwIoWEcSiPJecEuL6QT1vOr495h_ZI8Fkan-lW2FTUkP'
    },
    {
      handle: '@tanvi_botanics',
      quote: '"Neem & Tulsi cleared my chest breakouts like magic."',
      tag: 'Neem & Tulsi Bar',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAhomn1ZU4ac7JxAaBgS2PNqfqXy_PitpMof2uAxstrYrKgBYOpzSXoHYWyBWMBnhyqoQ4kuHnBMUbJFfVikjl2a-NRdmPDr3XvFuiFttPPZYiVH7TyACVLPcA_fMivFwkHsAbN4qUrQ7gGPiUgJgUW-fK_zA7SX11_BBYaQe6zXd1d0ThdkBA73_n4MewehTp26rgBXtZZxdllnFIUt6kTNMEYXKaPcACQaoG4vr1N5Yml-u3GUn67Tx-XhS6Vpuw'
    }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#994703] uppercase tracking-widest block mb-1">
              Community Shelfies
            </span>
            <h2 className="font-serif text-[32px] sm:text-[38px] text-[#0c2d17] font-semibold tracking-tight">
              #OmFarmShowerRituals
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#0c2d17] hover:text-[#994703] text-[14px] font-semibold transition-colors"
          >
            <span>Follow our journey @OmFarmBotanicals</span>
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>
        </div>

        {/* UGC Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {shelfies.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square bg-[#f6f3ee] rounded-2xl overflow-hidden shadow-xs border border-[#0c2d17]/5"
            >
              <img
                alt={item.handle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={item.image}
              />
              {/* Overlay with Quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2d17]/85 via-[#0c2d17]/40 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-bold text-[#ffdbc9] uppercase tracking-wider mb-1">
                  {item.tag}
                </span>
                <p className="text-[12.5px] leading-snug font-medium italic text-white/95 line-clamp-2">
                  {item.quote}
                </p>
                <span className="text-[11px] font-semibold text-white/80 mt-1 block">
                  {item.handle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

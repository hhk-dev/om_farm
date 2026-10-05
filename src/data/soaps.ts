export interface SoapProduct {
  id: string;
  name: string;
  gujaratiName: string;
  badge: string;
  badgeType: 'bestseller' | 'limited' | 'sacred' | 'detox' | 'acne' | 'summer' | 'glow' | 'calm';
  category: 'glow' | 'acne' | 'cooling';
  price: number;
  originalPrice: number;
  weight: string;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  thumbImage: string;
  dosha: string;
  heroHerbs: string[];
  inci: string;
  curingDays: number;
  scentNotes: string;
  ritualGuide: string;
  origin: string;
}

export const SOAPS_DATA: SoapProduct[] = [
  {
    id: 'traditional-ubtan',
    name: 'Traditional Ubtan Glow Soap',
    gujaratiName: 'ઉબટન નેચરલ સાબુ',
    badge: 'Bestseller ✨',
    badgeType: 'bestseller',
    category: 'glow',
    price: 220,
    originalPrice: 280,
    weight: '125g Bar',
    rating: 4.9,
    reviewsCount: 248,
    description: 'Gram flour, pure wild turmeric, and rich sandalwood for gentle exfoliation and luminous skin tan removal.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTHrHMJ7F1pg6kk8mGE1A9OJo3IYWqFgBw3mEz0MFP3F0aXk2bs81xWDoa2ps30agj1YHEVpT09imvcsloRmDnGUR9nOEUtBg3kTf73NhsNvE6bFXpdcxfB_CUHR9PDpaB6EDnnOUPg40zkCLDOwep-6wU9s9ACRT-hChTRHcE9SWNeAFaWiwd9X1PihOd78hY6jYho4prIJ1RFcVyvm-07GVIOaKMmn95AXE8VHHoOBLlTdhTI6YVYfpf6JW4dN5v',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZwLO6t_xa575at2byGxE2SRLV0wt_KtGx5g75kQl9k_XP-zVYG4wKX_iJZ5HrSimKTow4-LV8VxwuWwqnbUvj-BWhvF5v5q-hsOIjAtIsiDd4NcUF2fGzqaPHl5j1SEDzBTdpZ3cVZJctcemM4P5wcTaJcHALCdQpvnnI-IkFIpYtWdRVq8LcKMXZblCjwX_C2KHAuIE846BmhJ5Mdrdtoz6l8KFukFIP8MsCWmyAdQhZtELwHlo4NwOko-ZhtAqI',
    dosha: 'Tridoshic (Balances Pitta & Kapha)',
    heroHerbs: ['Wild Kasturi Manjal', 'Chana Besan (Gram Flour)', 'Mysore Sandalwood', 'Cold-Pressed Sesame Oil'],
    inci: 'Saponified Cocos Nucifera (Coconut) Oil, Sesamum Indicum (Sesame) Seed Oil, Cicer Arietinum (Chickpea) Flour, Curcuma Aromatica (Wild Turmeric) Root, Santalum Album (Sandalwood) Powder, Aqua, Plant Glycerin.',
    curingDays: 28,
    scentNotes: 'Warm roasted grain, earthy raw sandalwood, and fresh morning sun curcuma.',
    ritualGuide: 'Work into a dense, creamy micro-foam between palms. Massage across body in circular motions for 60 seconds to release micronized besan grain exfoliants before rinsing with lukewarm water.',
    origin: 'Ahmedabad Farm Cultivation, Gujarat'
  },
  {
    id: 'kashmiri-saffron',
    name: 'Kashmiri Saffron (Kesar) Bar',
    gujaratiName: 'કાશ્મીરી કેસર સાબુ',
    badge: 'Limited Harvest 🌾',
    badgeType: 'limited',
    category: 'glow',
    price: 260,
    originalPrice: 320,
    weight: '125g Bar',
    rating: 4.9,
    reviewsCount: 186,
    description: 'Authentic Pampore saffron strands slow-infused in virgin coconut oil to fade dark patches and even out complexion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDApU3wlSrFiXkV6145baM3Au4o4UAzaotFUzKQSd2WMHTJRD_GA_zf06ShPJ0zF4UzdlWEiVgMn2JkW4wnHm6h-I0NduZVJJH11VX202Y50qh4vL007F3_4gYycr5nY7_fzrohVaNDkLEIsg9MuwxaoIi3ak0C9Jylh8-iYRRqC8vdEnrsltaD8oblkMjHL8bzaJ-qhF8j3sPsQnGqtW4FGC1v36dJZGH74Ylld3i61imeBYHZq4BgbD7I360RxQpc',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjUvShdf9Iac30AHNb5AsIolJjLg7iV4cuXPUnOF-8EljeaT2-USzOlVSbw0dxJ1JjpxuuB2DdgPGRZSesnA1ho-A8-Lk8WMffK3AVmGpvIAyL4xoKeKSxfLUuLTNxOIebDx-a593SJsauSt8EYgWIxok5GnPuIP0QcoVtmk5vvexjnUzd9dRoezudtJNAeTeCP9KKwkNNA6wVLbU3-e2WnvRKD6i6PpOCrNg3RT_pZWAXjK0qIFI_aSZ3JtUZr8La',
    dosha: 'Pitta & Vata Soothing',
    heroHerbs: ['Grade-A Pampore Saffron Stigmas', 'Raw Goat Milk', 'Sweet Almond Kernel Oil', 'Indian Madder (Manjistha)'],
    inci: 'Saponified Cocos Nucifera (Coconut) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Caprae Lac (Fresh Goat Milk), Crocus Sativus (Saffron) Stigmas, Rubia Cordifolia (Manjistha) Root, Aqua, Plant Glycerin.',
    curingDays: 30,
    scentNotes: 'Deep golden honeyed saffron, sweet cream, and subtle floral amber.',
    ritualGuide: 'Glide bar directly over damp collarbones, arms, and legs. Allow saffron-rich golden milk lather to rest on skin for 2 minutes before rinsing for a glass-skin dewy finish.',
    origin: 'Pampore Valley Saffron & Ahmedabad Vedic Dairy'
  },
  {
    id: 'keshuda-floral',
    name: 'Keshuda (Palash) Floral Bar',
    gujaratiName: 'કેસૂડા હર્બલ સાબુ',
    badge: 'Sacred Blossom 🌺',
    badgeType: 'sacred',
    category: 'cooling',
    price: 250,
    originalPrice: 290,
    weight: '125g Bar',
    rating: 4.8,
    reviewsCount: 94,
    description: 'Gujarat flame-of-the-forest flowers infused for ancient heat-rash protection and therapeutic skin soothing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJyuHwuUpCUmp1AyO4ALcWKh4T-gL15EJqqpld-P_VON8xvEE0C8HAwWVo5sOUXHZyxJsZMfUxqxGGCTtlSJ3JblS5YbDnMIjGk3fZHkIH98iVp2fTUX6lEbtJV3WJAclG0PlLlyGChrD8FLJ3GJWmtw57XeEuPMwyiybos4hRTnP6E-E37WxnWW062rTwA-ckSPP5G5Za2nhiLziBL0PW6h-Gy9UrkuZxyfst9dd6VKx7bcEOgtDI6XyA4Ua-7fJc',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuS01B9LBgWCKY1Fg14V-5SeJclsz6C7fYaTAlVn4bzRvHWRHuAsrparSCB6amhN0zfRTuj0yxjNbvDo_-zeHUxMHmWRDYsCIzR3u8QJUQKoptOpK3t31tLfJXv_M9vZtRbZgHv0n9N7z1gzBkPp_-V3NeXABtC7oUBW2oAgOPwCUnBZcbAvAhzqySsp3cOuLEHKOjFjOS-5n2UDMx40Ve_FVBBkYUmkyYDdZdnm0wlrnMdiVORIA-d_b3EzOuTGXe',
    dosha: 'Pitta Pacifying (Anti-Heat & Calming)',
    heroHerbs: ['Wild Palash (Flame of Forest) Petals', 'Khus (Vetiver) Roots', 'Moringa Oleifera Seed Oil'],
    inci: 'Saponified Cocos Nucifera (Coconut) Oil, Moringa Oleifera Seed Oil, Butea Monosperma (Palash) Flower Extract, Vetiveria Zizanoides (Khus) Extract, Aqua, Native Glycerin.',
    curingDays: 28,
    scentNotes: 'Wild meadow blossoms, damp river vetiver, and sweet herbal nectar.',
    ritualGuide: 'Perfect for mid-day cooling showers during summer or post-sun exposure. Cools internal skin temperature and alleviates red patches.',
    origin: 'Gir Forest Periphery & Farm Herbarium, Gujarat'
  },
  {
    id: 'activated-charcoal',
    name: 'Activated Charcoal Detox Soap',
    gujaratiName: 'ચારકોલ ડિટોક્સ સાબુ',
    badge: 'Pore Detox 🖤',
    badgeType: 'detox',
    category: 'acne',
    price: 230,
    originalPrice: 275,
    weight: '125g Bar',
    rating: 4.9,
    reviewsCount: 312,
    description: 'Coconut shell charcoal acts like an oil magnet to purge pollutants, unclog acne pores, and calm body breakouts.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEVwYTa4-3QY9OSd1Brg3VFT_4K_SMAznH1xhIdOfGu74_RO60vE-gTNLv2enhgXfMEPobdzUez0Jy8wlQSWACaXuYplR36CeUCLyzcvVp8whrolTu98VNDeM_-_gOrjAlcV1bWJh6AQuHKshdslzU6TXeOGNi7WrbZrUvNM4nzPXkaD9rMfZpR45XBamMXWfQ7s2pfJ8RiLXsOABhkMbPN9dibtjhfKdQWYcAns5rDcssM70-Gy1IqdwyRnVqOFhL',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkkd5MxMmA-HhIoUWWE2etpzhW4dRikbrJJawOIHYQHE6snHEHXQ844dG_5qX5aZf-xYslBAjrZg4-8pDdnCK7YBg0X63LnXhvtVcylhJWkdET6Tyrb_xSffqA_kvsUOKzuiIRw9-jQzVVJignhw_4rdT_MhEDAFoFd7-sLzP8ZjzRgyRA_J660qk0vXmR_ejwsPunfsI0hXRIoN9SB1gGQCbVXk2WzFDYg0zwnWYHLrUPV9v5QkTtAyTKTLV9dDyj',
    dosha: 'Kapha Pacifying (Clarifying & Decongesting)',
    heroHerbs: ['Steam-Activated Coconut Shell Carbon', 'Tea Tree Leaf Oil', 'Castor Bean Oil'],
    inci: 'Saponified Cocos Nucifera (Coconut) Oil, Ricinus Communis (Castor) Seed Oil, Activated Carbon (Coconut Charcoal), Melaleuca Alternifolia (Tea Tree) Oil, Aqua, Native Glycerin.',
    curingDays: 28,
    scentNotes: 'Crisp medicinal camphoraceous tea tree, slate smoke, and clean rain.',
    ritualGuide: 'Focus on chest, upper back, and shoulders. Leaves zero black residue; purifies surface sebum while preserving the essential dermal moisture barrier.',
    origin: 'Coastal Coconut Shell Steam Kilns & Ahmedabad Herbalist'
  },
  {
    id: 'neem-tulsi',
    name: 'Neem & Tulsi Purifying Bar',
    gujaratiName: 'લીમડો અને તુલસી સાબુ',
    badge: 'Acne Defense 🌿',
    badgeType: 'acne',
    category: 'acne',
    price: 210,
    originalPrice: 250,
    weight: '125g Bar',
    rating: 4.9,
    reviewsCount: 420,
    description: 'Cold-pressed organic neem oil paired with holy basil leaves for clarifying barrier defense and irritation relief.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWhD5i87WMqmgvOcBM0dpjs_EtXU0dFKJVLp2owacMXDh0hI4a0gpveWHV37L9_D_hYcapVR8Uj5cUIr4QSTS6SMyhXT1PwbOnae4lYqD95WJTcPcysUo8fCDmVc-Kz8pNU8NYzjUs1b1zsDdnFfyWyjHf5fexzJGy6WKJ7wCeT6A4jO5TfIA3PaCleyRXZJXN-K0EGBZXKLvk--jlhUBdAWLBuDST7_GyB2oajmPOSEJEKCvqvlo4YBqWHzs5rYAr',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJkRkberwTeB2EAOlSeclUz84tuLnxfUCc7oG1wSOCBQu2lu6j9_Hv04hPPh5W2Tdtl2-F3eGEE1z5pJn_BPm1R7j-uPdXPZnhTtgJYXMNWXkSRS41uogR9eS3hK26D5tsbloMMHww6CfdXIL4ewWTXRZ1c6wP6iG5U4xsZ8Y1mfQ1mk0EChC5V7-FfsN3o5DiIHO6a9NsHHFNPqvTwT9ZGoSoDoy0kFuPmSSmnUoe_GB2XLfR_qHo2z62u3xWsMLt',
    dosha: 'Kapha & Pitta Balancing',
    heroHerbs: ['First-Press Azadirachta Indica (Neem) Oil', 'Ocimum Sanctum (Krishna Tulsi)', 'Cold-Pressed Sesame Oil'],
    inci: 'Saponified Cocos Nucifera (Coconut) Oil, Azadirachta Indica (Neem) Seed Oil, Sesamum Indicum Seed Oil, Ocimum Sanctum (Tulsi) Leaf Powder, Aqua, Native Glycerin.',
    curingDays: 32,
    scentNotes: 'Freshly torn sacred basil, green bitter leaf, and grounding botanical herbal warmth.',
    ritualGuide: 'Ideal daily antibacterial morning bath bar. Soothes micro-inflammations, cuts down sweat odor naturally, and keeps pores clean all day.',
    origin: 'Estate Grown Heritage Neem Groves, Ahmedabad'
  },
  {
    id: 'pure-camphor',
    name: 'Cooling Pure Camphor (Kapur)',
    gujaratiName: 'કપૂર નેચરલ સાબુ',
    badge: 'Summer Chill ❄️',
    badgeType: 'summer',
    category: 'cooling',
    price: 210,
    originalPrice: 260,
    weight: '125g Bar',
    rating: 4.8,
    reviewsCount: 112,
    description: 'Bhimseni edible camphor steam-infused for an invigorating, icy cleanse after hot summer afternoons or workouts.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV62mNVm_cmF4fMW82VKcbxoewM33nJvV3bzvFoUsTjJqYkg8eS5qDi5d5I3viT_J0Z5lMZqrtgFRlnroEmKPApeY3Voj9rRybBBaXolvddqIIvtqc4jpxmYi8-UJmCfSzDygGeNS4pzMh57c09Eh6dZwMnJmxZ32lDWiaYg8BQwaxJvP1PRhE9IcEavVPjvGij2i3_dSHsBCPj8NgUvxD3Izu_wXqnUbcrIUoyzObzBIz5LMlPSejO0FL71pkQTe5',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwH-Moa66OdKSvdjcxlxHWdz1xyn-hhcE36_f3VxkN6Lwm3cEP75PaPDOVkUqbrujYNVdGlSMO4r4UgCqE5vyXR_Af2nwWCxCWXeR8mY5nQO84xdo4oOV0G1d_xytyJ8R0tm0z9U_GgAqCbJ8fKZvgSQ0cJvFDV3qzNm6ArFuvbEdf8_IVTkvU2SRQdF9VEtW3-Rv4CZ0lni-fznXoQtP4l1pJDbxHBUyLeLo0JtOrgpsLF3w7iVMijPcYTQuMwLgR',
    dosha: 'Vata & Kapha Invigorating',
    heroHerbs: ['Pure Bhimseni Kapur (Pine Camphor)', 'Eucalyptus Globulus Leaf Oil', 'Coconut Oil'],
    inci: 'Saponified Cocos Nucifera (Coconut) Oil, Cinnamomum Camphora (Bhimseni Camphor) Flakes, Eucalyptus Globulus Leaf Oil, Mentha Piperita Oil, Aqua, Native Glycerin.',
    curingDays: 28,
    scentNotes: 'Crystalline temple camphor, cool menthol breeze, and crisp evergreen pine needles.',
    ritualGuide: 'Step into a warm shower and lather vigorously. The natural camphor vapor clears nasal congestion while leaving skin with a tingling, refreshing cool sensation for hours.',
    origin: 'Distilled Bhimseni Forest Crystals, Western Ghats'
  },
  {
    id: 'vitamin-c-citrus',
    name: 'Zesty Vitamin C Citrus Bar',
    gujaratiName: 'વિટામિન સી સંતરા સાબુ',
    badge: 'Sun Glow 🍊',
    badgeType: 'glow',
    category: 'glow',
    price: 230,
    originalPrice: 270,
    weight: '125g Bar',
    rating: 4.7,
    reviewsCount: 89,
    description: 'Real orange peel zest combined with amla extract to energize fatigued skin and revive natural luminosity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClhuJ9TirARTfNP-G_49mgq_K9uIHg0d4Nz31rOzT3jVVrKMvIpiWtytT4HXcdv4q9J7RpBByabrfVYoOc5rx8bWXLGQhYAU0O4oMFMLlwbG7ovYCGkRIFxA5nfsBJWRvhG4vGQCirwGV4-zp-TqvZ40eEoQDKlMl6y1APSJW5N9K3_frP2GS1wQ0aUrGppQRGNOsQLuZzVrgadtIrrli34DKehB8k3hexXmb5GTRsfvKGf8Mwy3fFrjiuWKUDTqsY',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGLS8uH-S0IpRyRqk_5iFtcJ_iXcwwJsxZjcdxBIF4Mqy-7gZSj9GKMZT0hfiYBurONH6daFJKcM3BtdHcWVx9lBauULJSJIGxlvUypwBjmLDmD6naJfVdEuCTlFlP1tq9iRGzLcvj8EG2S8oSiZ9JSKdz5oEahwTOUpekjkxxyTqUIqOpQdj8sRVXiljdXOEVSFKnL6EaYK32XeiMHh5RHsYrqxE_G5yFpWTVBnJdSqIGmbIItWZFh8kYtBcJHevt',
    dosha: 'Tridoshic (Awakens Agni & Skin Vitality)',
    heroHerbs: ['Nagpur Sun-Dried Orange Peel', 'Phyllanthus Emblica (Amla) Fruit Extract', 'Cold-Pressed Sweet Almond Oil'],
    inci: 'Saponified Cocos Nucifera (Coconut) Oil, Citrus Aurantium Dulcis (Orange) Peel Powder, Emblica Officinalis (Amla) Fruit Extract, Citrus Sinensis Peel Oil, Aqua, Native Glycerin.',
    curingDays: 28,
    scentNotes: 'Sparkling freshly cracked sweet orange zest, sour tang of wild amla, and botanical sunlight.',
    ritualGuide: 'Morning wake-up shower favorite. Rich in natural bio-flavonoids that protect dermal cells from environmental oxidative damage.',
    origin: 'Nagpur Organic Citrus Orchards & Farm Herbarium'
  },
  {
    id: 'velvet-mogra',
    name: 'Velvet Mogra (Jasmine) Bar',
    gujaratiName: 'મોગરા સુગંધિત સાબુ',
    badge: 'Evening Calm 🌙',
    badgeType: 'calm',
    category: 'cooling',
    price: 240,
    originalPrice: 290,
    weight: '125g Bar',
    rating: 4.9,
    reviewsCount: 165,
    description: 'Distilled fresh Arabian jasmine blossoms provide an intoxicating natural aroma that destresses body and mind.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKkp526QoCg8xWxvSIvv-yKB-erv1-29mc7pDdPnN27rBghBNSJYLSyPHNrRBtAtAU-go7uGEZBK_9vUztSrU55kVB3SJvi4-uABM3fLzTt9na1mRAIdiEfhnO9LybaFChk__Kx_cKh7dSKjaAbHM9iOLsGgSjl_7ZDwPbra0C6gVWqWnH2khBmJANC-Xb5kcDunByd7pWJR9qbV8TRRaBg4EkHpU70IgrO9M9AkPGyKbbH9T8ccJtRA6JRa8SJxGf',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU0H1UVb59B9_Vb0xywjATYWGQz_91EHZZcwUlM8ff5ofhfEl_zBlKkh4p7xDZcJUyARt-DboL40HeazfySimrktNqARH3EGt1wC0_ZoE-p4uCnSZ6054yXnCqfk8J_CkssCIwcW6Wag41KY_oJ-W0zqc7jcEJcDmccK0OhdiNZ9sC2MClGeoStOWkfwT61SiVZQyb7QpztNSzrAuLAn_zSi5lfZzIw-Z_5Ezzl4IiWpx12lVHjAacmT3PpWxCXQv8',
    dosha: 'Vata & Pitta Soothing (Anti-Stress & Sleep)',
    heroHerbs: ['Handpicked Arabian Mogra Petals', 'Virgin Olive Oil', 'Shea Nut Butter'],
    inci: 'Saponified Cocos Nucifera (Coconut) Oil, Olea Europaea (Olive) Fruit Oil, Butyrospermum Parkii (Shea) Butter, Jasminum Sambac (Mogra) Flower Extract, Aqua, Native Glycerin.',
    curingDays: 30,
    scentNotes: 'Lush velvety midnight jasmine, warm green stems, and creamy comforting sandalwood base.',
    ritualGuide: 'Use during twilight or evening baths before bedtime. The natural floral aromatherapeutic terpenes signal the nervous system to ease tension and prepare for restorative sleep.',
    origin: 'Madurai Bloom Market & Ahmedabad Botanical Cold Press'
  }
];

export interface BundleOption {
  id: string;
  name: string;
  shortName: string;
  image: string;
  thumbImage: string;
}

export const BUNDLE_CHOICES: BundleOption[] = [
  {
    id: 'ubtan',
    name: 'Traditional Ubtan',
    shortName: 'Ubtan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOgvVHPpDEeMsBPAH7L3qW4l882Rca-WLtdCsdKCPDAFavkQGTGbusEoS_kkhov8Y5pm4myFLVDIJvUd9vPnCtwt3vwKKdiCVlwmULt211MGQzRledh1UrOddl0TnN9Vx1N1zc5a2uQPRVxdn63kjECNFMuG2WV9pDDl_gB2tL8pcUxkSr7YCe6AgqkP2eCaJHqGpz1nsylUNEbhRrL1YEtk6i-1oMBXiT_apSpOLXDgBEB6rCUNtOvvER99DwFT0Q',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZwLO6t_xa575at2byGxE2SRLV0wt_KtGx5g75kQl9k_XP-zVYG4wKX_iJZ5HrSimKTow4-LV8VxwuWwqnbUvj-BWhvF5v5q-hsOIjAtIsiDd4NcUF2fGzqaPHl5j1SEDzBTdpZ3cVZJctcemM4P5wcTaJcHALCdQpvnnI-IkFIpYtWdRVq8LcKMXZblCjwX_C2KHAuIE846BmhJ5Mdrdtoz6l8KFukFIP8MsCWmyAdQhZtELwHlo4NwOko-ZhtAqI'
  },
  {
    id: 'saffron',
    name: 'Kashmiri Saffron',
    shortName: 'Saffron',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3FpkJqGx04V8ljdkBadpTi_dNiX8wPBaXpcL6U4WCjvyt3nS4UJ-B7-1R8Z0GL4d22tjbLyiq6mL3tcjO3mfMFRE5X4YiMqPSBfHozT-QdSn-4B-S6dNfeYlL4zeNePvR8Yqz9lmf-sB-mmmFukTAU3E5bqiLQYPmB1ZDy7BwNkmdcjBkwliYf4QHGW_YB4YtYgim-Dlve0flvUl7TY2dT1IAU-HY9pK1joJGafnkLKX3BBsp7kzVmCVfRYeWcj3k',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjUvShdf9Iac30AHNb5AsIolJjLg7iV4cuXPUnOF-8EljeaT2-USzOlVSbw0dxJ1JjpxuuB2DdgPGRZSesnA1ho-A8-Lk8WMffK3AVmGpvIAyL4xoKeKSxfLUuLTNxOIebDx-a593SJsauSt8EYgWIxok5GnPuIP0QcoVtmk5vvexjnUzd9dRoezudtJNAeTeCP9KKwkNNA6wVLbU3-e2WnvRKD6i6PpOCrNg3RT_pZWAXjK0qIFI_aSZ3JtUZr8La'
  },
  {
    id: 'charcoal',
    name: 'Activated Charcoal',
    shortName: 'Charcoal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtRB0pEPsS8fKMm6SILYDCXrwLGImT17_fu0qJ10N1QSaDn6l9k1m6BDqx5ZexnFtGmWf-a5v-QizCc73DC_Kdf27pm04Ge6lRK9-6zRxD121bbYajHALyDWHbKxtg8wPGnadjTPKmseOy25fupxEe_vsZ_WUQ04iS5vHRI6ydYC1hlLJv2jS3PtYSRmnhWPw0Micqh27zCfoxXOI-N9h3slfva4ZoOSYOp2szAUIDBOaWIkh8Sic4GfL8vb7ahmBr',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkkd5MxMmA-HhIoUWWE2etpzhW4dRikbrJJawOIHYQHE6snHEHXQ844dG_5qX5aZf-xYslBAjrZg4-8pDdnCK7YBg0X63LnXhvtVcylhJWkdET6Tyrb_xSffqA_kvsUOKzuiIRw9-jQzVVJignhw_4rdT_MhEDAFoFd7-sLzP8ZjzRgyRA_J660qk0vXmR_ejwsPunfsI0hXRIoN9SB1gGQCbVXk2WzFDYg0zwnWYHLrUPV9v5QkTtAyTKTLV9dDyj'
  },
  {
    id: 'neem',
    name: 'Neem & Tulsi',
    shortName: 'Neem',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn3ZVUTYZsT-9bUtUElbY83RALHfIDZQ1hZfW6zt_1HXRr7myBpul-G0yQj-_qkPL9bn8ijhpAGUZO4xNzRiMJdeB4Eu0Jp5f6pNx2zLGr810Fxj0lc7LopNso2a96Br23uOmMILtmnZQcpjv1hfrrGMX0GKfhkJLF0qSgpSGFJ8Qybptrb8Y8DxxbH4jYH_lIKmduhHT6DM_zA5cssdf3m6bNE5-mLr1In72gBDVQ3gQxX0AxIk2Cp3IH7WjEMymg',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJkRkberwTeB2EAOlSeclUz84tuLnxfUCc7oG1wSOCBQu2lu6j9_Hv04hPPh5W2Tdtl2-F3eGEE1z5pJn_BPm1R7j-uPdXPZnhTtgJYXMNWXkSRS41uogR9eS3hK26D5tsbloMMHww6CfdXIL4ewWTXRZ1c6wP6iG5U4xsZ8Y1mfQ1mk0EChC5V7-FfsN3o5DiIHO6a9NsHHFNPqvTwT9ZGoSoDoy0kFuPmSSmnUoe_GB2XLfR_qHo2z62u3xWsMLt'
  },
  {
    id: 'rose',
    name: 'Natural Gulab Rose',
    shortName: 'Rose',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtL90nL0joH0iYbVcl7yaTL1ybIUM3y3HjMJrl5aqtrBvvkXlCfnO0TgDdGNJWnmwscRWBZnNPGlcfkZ_9dLW4t-oqMPxdW1iWF_QpgT_Z2rRPu8kYtFo6PWG-kQ8eJHxj5loa0vugQxKqS99PJvtsMaZITkqjs55JjE5N6dgW9l0Offhr6AS2sH8gyNSiB5k_pNul0X6cY41QzW67ZjoJxuE5UdfXw75kVwLWrXh124_8xPq-fMi7hJoO0CjTQxMl',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU0H1UVb59B9_Vb0xywjATYWGQz_91EHZZcwUlM8ff5ofhfEl_zBlKkh4p7xDZcJUyARt-DboL40HeazfySimrktNqARH3EGt1wC0_ZoE-p4uCnSZ6054yXnCqfk8J_CkssCIwcW6Wag41KY_oJ-W0zqc7jcEJcDmccK0OhdiNZ9sC2MClGeoStOWkfwT61SiVZQyb7QpztNSzrAuLAn_zSi5lfZzIw-Z_5Ezzl4IiWpx12lVHjAacmT3PpWxCXQv8'
  },
  {
    id: 'keshuda',
    name: 'Keshuda Floral',
    shortName: 'Keshuda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnJqE3WKpV36gvK6pk_OZTZqsk07i7Dt1NGV9Vh-zA6tBMZyorxDxc9uHuPVMebNnQD0Rg4GBarHR94Bp_5U7z4WCftsd454svWdLdbNdajuKoFQ13Y3ctklUnQGt8U5MbjFPy2oF72DMwLBsn4ebNxdnYj9z801Cex9TGgqWdwc4CdqCMRgz5zm0aa3aJuDcfiE1QnjucP764f8ADEBOw9uonYEQYgIPpn2SFXcMmH5Q-BUkacKrwmgU67NKt7u3m',
    thumbImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuS01B9LBgWCKY1Fg14V-5SeJclsz6C7fYaTAlVn4bzRvHWRHuAsrparSCB6amhN0zfRTuj0yxjNbvDo_-zeHUxMHmWRDYsCIzR3u8QJUQKoptOpK3t31tLfJXv_M9vZtRbZgHv0n9N7z1gzBkPp_-V3NeXABtC7oUBW2oAgOPwCUnBZcbAvAhzqySsp3cOuLEHKOjFjOS-5n2UDMx40Ve_FVBBkYUmkyYDdZdnm0wlrnMdiVORIA-d_b3EzOuTGXe'
  }
];

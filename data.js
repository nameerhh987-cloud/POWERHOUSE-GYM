/**
 * ABF Boxing & Fitness - Gulshan-e-Iqbal
 * Clean & User-Friendly Athletic Data
 * STRICT RULE: Absolutely Zero Emojis
 */

const abfData = {
  gymInfo: {
    name: "ABF Boxing & Fitness",
    tagline: "CRUSH YOUR LIMITS IN GULSHAN-E-IQBAL",
    location: "Gulshan-e-Iqbal, Karachi",
    address: "01 23 m, Qadri Center, St-12 Row# 03, Block 6 Gulshan-e-Iqbal, Karachi, 75300, Pakistan",
    phone: "03132338812",
    phoneFormatted: "+92 313 2338812",
    whatsappUrl: "https://wa.me/923132338812",
    operatingHours: [
      { days: "Monday - Saturday", hours: "06:00 AM - 11:00 PM" },
      { days: "Sunday", hours: "08:00 AM - 08:00 PM" }
    ]
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Why ABF", href: "#why-abf" },
    { label: "Programs", href: "#programs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Calculator", href: "#calculator" },
    { label: "Contact", href: "#contact" }
  ],

  stats: [
    { number: "20x20", label: "Competition Ring" },
    { number: "16+", label: "Heavy Bag Stations" },
    { number: "100%", label: "Certified Coaches" },
    { number: "VIP", label: "Recovery Suite" }
  ],

  whyABF: [
    {
      id: "ring-bags",
      tag: "Boxing Facility",
      number: "01",
      title: "Olympic Boxing Ring & Heavy Bags",
      description: "Train in an elevated 20x20 ft Olympic-standard competition boxing ring surrounded by 16 heavy bag stations for power, speed, and combo drills.",
      spec: "20x20 Competition Ring",
      metric: "16 Heavy Bags"
    },
    {
      id: "coaches",
      tag: "Coaching Staff",
      number: "02",
      title: "Certified Combat Coaches",
      description: "Learn authentic sweet science boxing techniques, footwork, slipping, and power punching from national champions and certified trainers.",
      spec: "National Champions",
      metric: "1-on-1 Focus"
    },
    {
      id: "recovery",
      tag: "Health & Wellness",
      number: "03",
      title: "VIP Recovery Suite",
      description: "Recover faster and eliminate muscle fatigue with sub-zero ice bath hydro-tubs, authentic cedar dry saunas, and percussion therapy.",
      spec: "Ice Baths & Sauna",
      metric: "Full Recovery"
    },
    {
      id: "strength",
      tag: "Conditioning Turf",
      number: "04",
      title: "Strength & Conditioning Turf",
      description: "Equipped with competition barbells, bumper plates, weighted sled tracks, air-bikes, and kettlebells designed for athletic knockout power.",
      spec: "Olympic Barbells & Sleds",
      metric: "Performance Turf"
    }
  ],

  programs: [
    {
      id: "boxing",
      badge: "Most Popular",
      title: "Boxing Mastery",
      level: "All Skill Levels",
      duration: "60 - 75 Mins",
      description: "Master stance, jab-cross combos, defense, and ring footwork through high-energy mitt work, bag circuits, and controlled sparring.",
      features: [
        "Proper stance and punch mechanics",
        "High-energy mitt & bag rounds",
        "Supervised ring sparring"
      ]
    },
    {
      id: "conditioning",
      badge: "High Energy",
      title: "Combat Conditioning",
      level: "All Levels Welcome",
      duration: "50 Mins",
      description: "A fast-paced metabolic circuit combining assault air-bikes, sled pushes, battle ropes, and core work to incinerate fat and boost endurance.",
      features: [
        "Cardio endurance & VO2 max",
        "Core torque and stamina",
        "High calorie-burning workout"
      ]
    },
    {
      id: "private",
      badge: "Exclusive",
      title: "1-on-1 Personal Training",
      level: "Personalized",
      duration: "60 Mins",
      description: "Get dedicated individual attention from head coaches tailored specifically to your fitness goals, weight cut, or competition readiness.",
      features: [
        "Private 1-on-1 mitt training",
        "Customized workout schedule",
        "Nutrition & progress tracking"
      ]
    }
  ],

  pricing: [
    {
      tier: "Fighter Access",
      price: "15,000",
      currency: "PKR",
      period: "/ Month",
      description: "Ideal for enthusiasts seeking self-paced boxing training and strength equipment access.",
      features: [
        "Full access to Heavy Bag Zone & Boxing Ring",
        "Access to Olympic free weights & turf",
        "Locker & clean shower amenities",
        "Open sparring access (coach supervised)"
      ],
      highlighted: false,
      ctaText: "Join Fighter Access"
    },
    {
      tier: "Black Card Elite",
      price: "28,000",
      currency: "PKR",
      period: "/ Month",
      badge: "Recommended",
      description: "All-inclusive membership featuring daily coached boxing classes, recovery suite, and private mitt work.",
      features: [
        "Unlimited Daily Boxing & Conditioning Classes",
        "Full VIP Recovery Suite (Ice Baths & Sauna)",
        "Custom Nutrition & Calorie Blueprint",
        "2 Monthly 1-on-1 Private Mittwork Sessions",
        "Official ABF Handwraps & Gear Bag"
      ],
      highlighted: true,
      ctaText: "Claim Black Card"
    },
    {
      tier: "Private Championship",
      price: "50,000",
      currency: "PKR",
      period: "/ Month",
      description: "Top-tier one-on-one coaching for executives and competitive fighters.",
      features: [
        "12 Private One-on-One Master Coach Sessions",
        "Full 24/7 Access to All Gym Floors",
        "Dedicated VIP Locker & Laundry Service",
        "Weekly Body Composition & Metric Scans",
        "Direct Coach WhatsApp Access"
      ],
      highlighted: false,
      ctaText: "Reserve Private Tier"
    }
  ],

  gallery: [
    {
      id: 1,
      tag: "Boxing Ring",
      title: "Olympic Competition Ring",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      tag: "Heavy Bag Zone",
      title: "16-Station Heavy Bag Bay",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      tag: "Conditioning Turf",
      title: "Strength & Sled Floor",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      tag: "Boxing Ring",
      title: "Precision Mittwork Corner",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      tag: "Heavy Bag Zone",
      title: "Hydro Water Bag Array",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      tag: "Recovery Suite",
      title: "Ice Baths & Cedar Sauna",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};

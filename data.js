/**
 * POWERHOUSE GYM - DOWNTOWN MIAMI, FL
 * Clean, Strong & Modern Athletic Data Engine
 * STRICT RULE: Absolutely Zero Emojis
 */

const abfData = {
  gymInfo: {
    name: "Powerhouse Gym",
    brandTitle: "POWERHOUSE GYM",
    subBrandTag: "DOWNTOWN • MIAMI, FL",
    locationBadge: "DOWNTOWN MIAMI • FL",
    location: "Downtown Miami, FL",
    address: "201 S Biscayne Blvd, Downtown Miami, FL 33131",
    phone: "(305) 555-0199",
    phoneFormatted: "+1 (305) 555-0199",
    whatsappUrl: "https://wa.me/13055550199",
    operatingHours: [
      { days: "Monday - Friday", hours: "Open 24 Hours" },
      { days: "Saturday - Sunday", hours: "Open 24 Hours / 24/7 Access" }
    ]
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Why Us", href: "#why-abf" },
    { label: "Programs", href: "#programs" },
    { label: "Pricing", href: "#pricing" },
    { label: "Calculator", href: "#calculator" },
    { label: "Contact", href: "#contact" }
  ],

  // 4 Exact Stats Cards Requested
  stats: [
    { number: "24/7", label: "FACILITY ACCESS" },
    { number: "100+", label: "PRO EQUIPMENT" },
    { number: "4.3★", label: "1000+ GOOGLE REVIEWS" },
    { number: "FREE", label: "3-DAY TRIAL PASS" }
  ],

  whyABF: [
    {
      id: "pro-equipment",
      tag: "World-Class Iron",
      number: "01",
      title: "100+ Pro Heavy-Duty Machines",
      description: "Train with authentic Arsenal Strength, Prime Fitness, and Hammer Strength machinery engineered for raw biomechanics and peak muscular hypertrophy.",
      spec: "Hammer Strength & Arsenal",
      metric: "100+ Pro Stations"
    },
    {
      id: "coaches",
      tag: "Elite Staff",
      number: "02",
      title: "Championship Coaches & Trainers",
      description: "Work directly with top-tier IFBB pros, athletic performance directors, and elite boxing trainers dedicated to pushing you beyond your perceived limits.",
      spec: "Certified Pro Coaches",
      metric: "1-on-1 Focus"
    },
    {
      id: "recovery",
      tag: "Luxury Recovery",
      number: "03",
      title: "Cryo, Ice Baths & Dry Saunas",
      description: "Fast-track recovery and reduce CNS fatigue with cold plunge tubs, authentic cedar wood dry saunas, and targeted percussion therapy zones.",
      spec: "Cold Plunge & Saunas",
      metric: "Full Recovery"
    },
    {
      id: "strength",
      tag: "Turf & Performance",
      number: "04",
      title: "Olympic Turf & Sled Track",
      description: "Featuring high-density synthetic turf, sprint sled tracks, competition power racks, bumper plates, and dumbbell bays going up to 150 lbs.",
      spec: "Olympic Racks & Sleds",
      metric: "Performance Turf"
    }
  ],

  programs: [
    {
      id: "strength",
      badge: "Most Popular",
      title: "Pro Strength & Hypertrophy",
      level: "All Skill Levels",
      duration: "60 - 75 Mins",
      description: "Master barbell mechanics, periodized progressive overload, and structural muscle building guided by seasoned competitive lifters.",
      features: [
        "Periodized progressive overload",
        "Biomechanics & posture refinement",
        "Form correction & barbell velocity"
      ]
    },
    {
      id: "conditioning",
      badge: "High Energy",
      title: "Metabolic Conditioning & Turf",
      level: "All Levels Welcome",
      duration: "50 Mins",
      description: "High-intensity athletic circuit combining weighted sled pushes, kettlebells, rowing sprints, and core work to torch body fat.",
      features: [
        "High-output VO2 max conditioning",
        "Explosive power & agility drills",
        "Accelerated calorie combustion"
      ]
    },
    {
      id: "private",
      badge: "Exclusive",
      title: "1-on-1 Elite Coaching",
      level: "Personalized",
      duration: "60 Mins",
      description: "One-on-one master training with custom periodization, nutrition tracking, and full biometric progress analysis tailored to your specific physique goals.",
      features: [
        "Dedicated private training slots",
        "Custom nutrition & macro blueprint",
        "Continuous body composition scans"
      ]
    }
  ],

  pricing: [
    {
      tier: "3-Day Trial Pass",
      price: "FREE",
      currency: "$",
      period: "No Obligation",
      description: "Experience the Miami powerhouse floor with full access to pro machines and amenities.",
      features: [
        "Full access to 100+ pro machines",
        "Olympic weightlifting platforms & turf",
        "Locker room & luxury shower access",
        "Complimentary trainer fitness consult"
      ],
      highlighted: false,
      ctaText: "Claim 3-Day Pass"
    },
    {
      tier: "Black Label VIP",
      price: "129",
      currency: "$",
      period: "/ Month",
      badge: "Most Popular",
      description: "All-inclusive premium access with 24/7 entry, recovery suite access, and guest privileges.",
      features: [
        "24/7 Keycard Facility Access",
        "Full Cold Plunge & Cedar Sauna Suite",
        "Unlimited Functional Turf Classes",
        "2 Guest Passes Every Month",
        "Free Powerhouse Gym Miami Shaker & Tee"
      ],
      highlighted: true,
      ctaText: "Join Black Label"
    },
    {
      tier: "Executive Champion",
      price: "249",
      currency: "$",
      period: "/ Month",
      description: "Exclusive concierge tier including weekly private coaching and recovery reserved slots.",
      features: [
        "Everything in Black Label VIP",
        "4 Private 1-on-1 Coaching Sessions / Mo",
        "Dedicated Executive Locker & Laundry",
        "Monthly InBody Biometric Scans",
        "Direct Head Coach Hotline"
      ],
      highlighted: false,
      ctaText: "Reserve Executive"
    }
  ],

  gallery: [
    {
      id: 1,
      tag: "Pro Iron Floor",
      title: "Olympic Power Racks & Dumbbells",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      tag: "Machine Zone",
      title: "100+ Heavy-Duty Stations",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      tag: "Turf Bay",
      title: "Sled Tracks & Performance Turf",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      tag: "Strength Zone",
      title: "Heavy Barbell Platforms",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      tag: "Functional Bay",
      title: "Kettlebell & Conditioning Area",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      tag: "Recovery Suite",
      title: "Cold Plunges & Infrared Sauna",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};

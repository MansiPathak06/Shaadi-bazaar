"use client";
import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Mail, Heart, CheckCircle, Calendar, Users, Award, Sparkles, Droplet, Wind, Flower2, Leaf } from 'lucide-react';

const SpaServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedSpa, setSelectedSpa] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const spaServices = [
    {
      id: 1,
      name: 'Body Massage',
      title: 'BODY MASSAGE',
      description: 'Deep tissue and relaxation massage to relieve stress and tension before your special day',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600',
      icon: Droplet,
      duration: '60-90 min',
      price: 'From ₹2,500',
      treatments: ['Swedish Massage', 'Deep Tissue', 'Aromatherapy', 'Hot Stone'],
      benefits: ['Stress Relief', 'Muscle Relaxation', 'Better Sleep', 'Glowing Skin']
    },
    {
      id: 2,
      name: 'Facial Treatment',
      title: 'FACIAL TREATMENT',
      description: 'Professional facial treatments with premium products for radiant bridal glow',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
      icon: Sparkles,
      duration: '45-60 min',
      price: 'From ₹1,800',
      treatments: ['Gold Facial', 'Diamond Facial', 'Anti-Aging', 'Bridal Glow'],
      benefits: ['Radiant Skin', 'Even Tone', 'Hydration', 'Youthful Glow']
    },
    {
      id: 3,
      name: 'Body Polishing',
      title: 'BODY POLISHING',
      description: 'Complete body exfoliation and polishing for smooth, glowing skin all over',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600',
      icon: Wind,
      duration: '90 min',
      price: 'From ₹3,500',
      treatments: ['Body Scrub', 'Tan Removal', 'Skin Whitening', 'Exfoliation'],
      benefits: ['Smooth Skin', 'Even Complexion', 'Tan Removal', 'Deep Cleansing']
    },
    {
      id: 4,
      name: 'Manicure & Pedicure',
      title: 'MANICURE & PEDICURE',
      description: 'Luxury hand and feet care with premium products and nail art',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600',
      icon: Flower2,
      duration: '60 min',
      price: 'From ₹1,200',
      treatments: ['Classic Mani-Pedi', 'Gel Polish', 'Spa Treatment', 'French Tips'],
      benefits: ['Beautiful Nails', 'Soft Hands & Feet', 'Relaxation', 'Long-Lasting Polish']
    },
    {
      id: 5,
      name: 'Hair Treatment',
      title: 'HAIR TREATMENT',
      description: 'Deep conditioning and nourishing treatments for healthy, shiny hair',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      icon: Leaf,
      duration: '45-60 min',
      price: 'From ₹2,000',
      treatments: ['Keratin Treatment', 'Hair Spa', 'Smoothening', 'Conditioning'],
      benefits: ['Shiny Hair', 'Damage Repair', 'Frizz Control', 'Strengthening']
    },
    {
      id: 6,
      name: 'Waxing Services',
      title: 'WAXING SERVICES',
      description: 'Professional waxing services for smooth, hair-free skin',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600',
      icon: Sparkles,
      duration: '30-90 min',
      price: 'From ₹800',
      treatments: ['Full Body Wax', 'Brazilian Wax', 'Arms & Legs', 'Face Threading'],
      benefits: ['Smooth Skin', 'Long-Lasting', 'Professional Care', 'Clean Results']
    }
  ];

  const spaPackages = [
    {
      id: 1,
      name: 'Bridal Complete Package',
      type: 'Premium',
      badge: 'Most Popular',
      price: 35000,
      originalPrice: 50000,
      description: 'Complete pre-wedding spa journey for the perfect bridal glow',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600',
      features: [
        '6 pre-bridal spa sessions',
        'Full body massage (3 sessions)',
        'Premium facial treatments (4 sessions)',
        'Body polishing & scrub (2 sessions)',
        'Luxury manicure & pedicure (2 sessions)',
        'Hair spa & treatment (3 sessions)',
        'Full body waxing (2 sessions)',
        'Bridal glow facial (1 day before)',
        'Complimentary spa kit',
        'Personal spa consultant'
      ],
      duration: '3 months plan',
      sessions: '20+ sessions',
      popular: true
    },
    {
      id: 2,
      name: 'Express Bridal Package',
      type: 'Standard',
      price: 18000,
      originalPrice: 25000,
      description: 'Quick pre-wedding spa essentials for busy brides',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600',
      features: [
        '2 pre-bridal sessions',
        'Body massage (2 sessions)',
        'Facial treatment (2 sessions)',
        'Body polishing (1 session)',
        'Mani-pedi (1 session)',
        'Hair treatment (1 session)',
        'Waxing services (1 session)',
        'Bridal day spa kit'
      ],
      duration: '1 month plan',
      sessions: '10 sessions',
      popular: false
    },
    {
      id: 3,
      name: 'Groom Special Package',
      type: 'Standard',
      price: 12000,
      originalPrice: 18000,
      description: 'Grooming package designed for grooms',
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600',
      features: [
        'Body massage (3 sessions)',
        'Men\'s facial (2 sessions)',
        'Hair treatment (2 sessions)',
        'Manicure & pedicure (1 session)',
        'Body scrub (1 session)',
        'Grooming consultation',
        'Spa essentials kit'
      ],
      duration: '1 month plan',
      sessions: '9 sessions',
      popular: false
    },
    {
      id: 4,
      name: 'Couple Spa Package',
      type: 'Premium',
      price: 25000,
      originalPrice: 35000,
      description: 'Relaxing spa experience for couples before the big day',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600',
      features: [
        'Couple massage (2 sessions)',
        'Couple facial treatment',
        'Body polishing for both',
        'Aromatherapy session',
        'Champagne & refreshments',
        'Private spa suite',
        'Romantic ambiance',
        'Spa gift set for two'
      ],
      duration: 'Flexible timing',
      sessions: '6 sessions',
      popular: false
    }
  ];

  const spaVendors = [
    {
      id: 1,
      name: 'Serenity Bridal Spa',
      title: 'Premium Bridal Wellness Center',
      experience: '12 years',
      rating: 5.0,
      reviews: 542,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
      specialization: ['Bridal Spa', 'Body Treatments', 'Facial Care'],
      location: 'South Delhi',
      phone: '+91 98765 43230',
      email: 'info@serenityspa.com',
      clients: 1200,
      availability: 'Available',
      services: 25,
      featured: true,
      startingPrice: 2500
    },
    {
      id: 2,
      name: 'Bliss Wellness Studio',
      title: 'Luxury Spa & Beauty Center',
      experience: '10 years',
      rating: 4.9,
      reviews: 486,
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400',
      specialization: ['Aromatherapy', 'Massage Therapy', 'Skin Care'],
      location: 'Bandra, Mumbai',
      phone: '+91 98765 43231',
      email: 'contact@blisswellness.com',
      clients: 980,
      availability: 'Available',
      services: 22,
      featured: true,
      startingPrice: 2000
    },
    {
      id: 3,
      name: 'Radiance Spa Lounge',
      title: 'Holistic Beauty & Wellness',
      experience: '8 years',
      rating: 4.8,
      reviews: 412,
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400',
      specialization: ['Bridal Packages', 'Body Polishing', 'Ayurvedic Treatments'],
      location: 'Koramangala, Bangalore',
      phone: '+91 98765 43232',
      email: 'hello@radiancespa.com',
      clients: 850,
      availability: 'Limited',
      services: 20,
      featured: true,
      startingPrice: 1800
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Shruti Malhotra',
      role: 'Bride',
      rating: 5,
      comment: 'The bridal complete package was absolutely amazing! My skin has never looked better. The team was professional and the treatments were so relaxing.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      date: 'September 2025',
      spa: 'Serenity Bridal Spa'
    },
    {
      id: 2,
      name: 'Ananya Reddy',
      role: 'Bride',
      rating: 5,
      comment: 'I did the express bridal package and it was perfect for my timeline. The facial treatments gave me such a beautiful glow on my wedding day!',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      date: 'October 2025',
      spa: 'Bliss Wellness Studio'
    },
    {
      id: 3,
      name: 'Priya & Rahul',
      role: 'Couple',
      rating: 5,
      comment: 'The couple spa package was so romantic and relaxing. It was the perfect way to de-stress before our wedding. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100',
      date: 'August 2025',
      spa: 'Radiance Spa Lounge'
    }
  ];

  const handleAddToWishlist = (itemId) => {
    if (wishlist.includes(itemId)) {
      setWishlist(wishlist.filter(id => id !== itemId));
    } else {
      setWishlist([...wishlist, itemId]);
    }
  };

  return (
    <div className="min-h-screen px-30 bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-gray-100 to-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920"
            alt="Luxury Spa Services"
            className="w-full h-full object-cover opacity-40 animate-[zoom_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="max-w-3xl animate-[slideUp_1s_ease-out]">
            <div className="flex items-center mb-6">
              <Sparkles className="w-10 h-10 text-rose-400 mr-3 animate-pulse" />
              <span className="text-rose-400 font-semibold tracking-[0.3em] text-sm">LUXURY SPA SERVICES</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-gray-800">
              RELAX &<br />
              <em className="font-light text-rose-400">REJUVENATE</em>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl leading-relaxed">
              Indulge in premium spa treatments designed to prepare you for your special day. From bridal packages to couple spa experiences, we offer complete wellness solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                EXPLORE SERVICES
              </button>
              <button className="bg-white hover:bg-gray-50 text-rose-400 px-8 py-4 rounded-md font-semibold transition-all duration-300 border-2 border-rose-400">
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-[0.2em] text-sm mb-4 block">OUR SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              MASSAGE & TREATMENTS
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Experience premium spa treatments tailored for brides and grooms. Our expert therapists use only the finest products to ensure you look and feel your best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 cursor-pointer animate-[slideUp_0.6s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-rose-400" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-rose-400" />
                        {service.duration}
                      </div>
                      <div className="text-rose-400 font-bold text-lg">
                        {service.price}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-700 mb-2">POPULAR TREATMENTS:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.treatments.slice(0, 3).map((treatment, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded-full"
                          >
                            {treatment}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-[0.2em] text-sm mb-4 block">SPECIAL PACKAGES</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              BRIDAL SPA PACKAGES
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive spa packages designed for brides, grooms, and couples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spaPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col animate-[slideUp_0.6s_ease-out] hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {pkg.badge && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-rose-400 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold shadow-lg animate-pulse">
                      {pkg.badge}
                    </div>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      pkg.type === 'Premium' ? 'bg-rose-100 text-rose-600' :
                      'bg-pink-100 text-pink-600'
                    }`}>
                      {pkg.type}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>

                  <div className="mb-4">
                    <div className="flex items-baseline mb-1">
                      <span className="text-3xl font-bold text-rose-400">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 flex items-center mb-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {pkg.duration}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {pkg.sessions}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {pkg.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 5 && (
                      <p className="text-xs text-rose-400 font-semibold ml-6">
                        +{pkg.features.length - 5} more benefits
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Couple Spa Banner */}
      <div className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920"
            alt="Couple Spa"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-[0.2em] text-sm mb-4 block">SPECIAL OFFER</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white leading-tight">
              30% OFF ON FIRST<br />COUPLE SPA
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Unwind and reconnect before your big day with our exclusive couple spa experience. Book now and save 30% on your first session.
            </p>
            <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Spa Vendors */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-[0.2em] text-sm mb-4 block">PREMIUM PARTNERS</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              FEATURED SPA CENTERS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Book appointments at our verified luxury spa partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spaVendors.map((spa, index) => (
              <div
                key={spa.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-72 bg-gradient-to-br from-rose-100 to-rose-50 overflow-hidden group">
                  <img
                    src={spa.image}
                    alt={spa.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <button
                    onClick={() => handleAddToWishlist(spa.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-rose-50 transition-all duration-300 transform hover:scale-110 z-10"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        wishlist.includes(spa.id)
                          ? 'text-rose-400 fill-current scale-110'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{spa.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                    Featured
                  </div>
                  <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                    spa.availability === 'Available' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {spa.availability}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{spa.name}</h3>
                  <p className="text-rose-400 font-semibold text-sm mb-2">{spa.title}</p>
                  <p className="text-xs text-gray-600 mb-4">{spa.experience} experience</p>
                  
                  <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="w-3 h-3 mr-2 text-rose-400 flex-shrink-0" />
                      <span className="truncate">{spa.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Users className="w-3 h-3 mr-2 text-rose-400 flex-shrink-0" />
                      {spa.clients}+ Happy Clients
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Award className="w-3 h-3 mr-2 text-rose-400 flex-shrink-0" />
                      {spa.reviews} Reviews
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Sparkles className="w-3 h-3 mr-2 text-rose-400 flex-shrink-0" />
                      {spa.services}+ Services
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {spa.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      Starting from <span className="text-xl font-bold text-rose-400">₹{spa.startingPrice.toLocaleString()}</span>
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedSpa(spa)}
                    className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-[0.2em] text-sm mb-4 block">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Real experiences from brides and couples who trusted us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-rose-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-rose-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                  <p className="text-xs text-rose-400 font-semibold">{testimonial.spa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-800">{selectedService.title}</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {selectedService.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-2 text-rose-400" />
                        <span className="font-semibold">{selectedService.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-rose-400">
                        {selectedService.price}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Available Treatments:</h4>
                    <div className="space-y-2">
                      {selectedService.treatments.map((treatment, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-rose-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{treatment}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full font-semibold text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-rose-400 text-white py-4 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                Book This Treatment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Package Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {selectedPackage.name}
                  </h3>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                    selectedPackage.type === 'Premium' ? 'bg-rose-100 text-rose-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    {selectedPackage.type}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              <p className="text-gray-600 mb-6 text-lg">{selectedPackage.description}</p>

              <div className="mb-6 pb-6 border-b">
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-rose-400">
                    ₹{selectedPackage.price.toLocaleString()}
                  </span>
                  <span className="ml-3 text-xl text-gray-400 line-through">
                    ₹{selectedPackage.originalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex gap-4 mt-3">
                  <p className="text-gray-600 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-rose-400" />
                    {selectedPackage.duration}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-rose-400" />
                    {selectedPackage.sessions}
                  </p>
                </div>
                <div className="mt-3 bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block font-semibold">
                  Save ₹{(selectedPackage.originalPrice - selectedPackage.price).toLocaleString()}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-800 mb-4 text-xl">Package Includes:</h4>
                <div className="space-y-3">
                  {selectedPackage.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start animate-[slideRight_0.5s_ease-out]"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <CheckCircle className="w-6 h-6 mr-3 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-rose-400 text-white py-4 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                Book This Package
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spa Vendor Modal */}
      {selectedSpa && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-800">Spa Details</h3>
                <button
                  onClick={() => setSelectedSpa(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <img
                  src={selectedSpa.image}
                  alt={selectedSpa.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedSpa.name}
                  </h4>
                  <p className="text-rose-400 font-semibold text-lg mb-4">
                    {selectedSpa.title}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                    <span className="font-semibold text-xl">{selectedSpa.rating}</span>
                    <span className="text-gray-500 ml-2">({selectedSpa.reviews} reviews)</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-gray-700">
                      <strong>Experience:</strong> {selectedSpa.experience}
                    </p>
                    <p className="text-gray-700">
                      <strong>Happy Clients:</strong> {selectedSpa.clients}+
                    </p>
                    <p className="text-gray-700">
                      <strong>Services Offered:</strong> {selectedSpa.services}+
                    </p>
                    <p className="text-gray-700">
                      <strong>Location:</strong> {selectedSpa.location}
                    </p>
                    <p className="text-gray-700">
                      <strong>Starting Price:</strong> <span className="text-2xl font-bold text-rose-400">₹{selectedSpa.startingPrice.toLocaleString()}</span>
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 mb-3">Specializations:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedSpa.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full font-semibold"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <a
                  href={`tel:${selectedSpa.phone}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-all duration-300 text-lg transform hover:translate-x-2"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {selectedSpa.phone}
                </a>
                <a
                  href={`mailto:${selectedSpa.email}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-all duration-300 text-lg transform hover:translate-x-2"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {selectedSpa.email}
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                  Book Appointment
                </button>
                <button className="flex-1 bg-white border-2 border-rose-400 text-rose-400 py-3 rounded-lg hover:bg-rose-50 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-rose-400 to-rose-500 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-[slideUp_1s_ease-out]">
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-rose-100">Happy Clients</div>
            </div>
            <div className="animate-[slideUp_1s_ease-out]">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-rose-100">Partner Spas</div>
            </div>
            <div className="animate-[slideUp_1s_ease-out]">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-rose-100">Treatments</div>
            </div>
            <div className="animate-[slideUp_1s_ease-out]">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-rose-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default SpaServices;

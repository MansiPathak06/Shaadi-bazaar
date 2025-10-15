"use client";
import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Mail, Heart, CheckCircle, Calendar, Users, Award, Sparkles, Palette, Scissors, Instagram, ChevronRight, ArrowRight } from 'lucide-react';

const NailArt = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const nailServices = [
    {
      id: 1,
      name: 'Pedicure',
      description: 'Luxurious foot care with premium products and massage',
      image: 'https://i.pinimg.com/736x/5d/ff/b1/5dffb1dab5704bcf259546a451edd9f6.jpg',
      icon: Sparkles,
      price: 800,
      duration: '45 min',
      popular: true
    },
    {
      id: 2,
      name: 'Nail Art',
      description: 'Creative designs and artistic nail decoration',
      image: 'https://i.pinimg.com/736x/14/d2/9f/14d29f761e6b7c7d64920f8ddb9ad06a.jpg',
      icon: Palette,
      price: 1200,
      duration: '60 min',
      popular: true
    },
    {
      id: 3,
      name: 'Manicure',
      description: 'Complete hand care with nail shaping and polish',
      image: 'https://i.pinimg.com/736x/ef/91/df/ef91df707657e401882114884d927201.jpg',
      icon: Scissors,
      price: 600,
      duration: '40 min',
      popular: true
    }
  ];

  const chooseUs = [
    {
      id: 1,
      title: 'Years of Experience',
      description: 'Our nail artists bring over a decade of expertise in creating stunning nail designs for brides and special occasions.',
      icon: Award
    },
    {
      id: 2,
      title: 'Let\'s Rock Now!',
      description: 'Experience the latest trends in nail art with our creative team. From classic French to intricate designs.',
      icon: Sparkles
    },
    {
      id: 3,
      title: 'Best Services',
      description: 'Premium products and exceptional service ensure your nails look flawless for your special day.',
      icon: Star
    },
    {
      id: 4,
      title: 'Best Rates',
      description: 'Competitive pricing without compromising on quality. Special packages for brides and wedding parties.',
      icon: CheckCircle
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Nail Art Haven',
      category: 'Bridal Design',
      image: 'https://i.pinimg.com/736x/ff/c4/64/ffc464cb4c46026c155bd1bc0bc66ede.jpg',
      likes: 245
    },
    {
      id: 2,
      title: 'Elegant French',
      category: 'Classic Style',
      image: 'https://i.pinimg.com/1200x/04/55/0a/04550a5d9cbac384ef5e75b71c92834f.jpg',
      likes: 189
    },
    {
      id: 3,
      title: 'Floral Fantasy',
      category: 'Artistic Design',
      image: 'https://i.pinimg.com/736x/b8/4d/29/b84d294846ff652749377c7b2b2b2c7e.jpg',
      likes: 312
    },
    {
      id: 4,
      title: 'Glam & Glitter',
      category: 'Party Nails',
      image: 'https://i.pinimg.com/736x/7b/62/06/7b62064cd158b36d6cc67b6c06f626fc.jpg',
      likes: 276
    },
    {
      id: 5,
      title: 'Crystal Elegance',
      category: 'Luxury Design',
      image: 'https://i.pinimg.com/736x/f6/d8/48/f6d84867181c9bd38ab06b368c317a8e.jpg',
      likes: 198
    },
    {
      id: 6,
      title: 'Ombre Dream',
      category: 'Modern Style',
      image: 'https://i.pinimg.com/1200x/57/b4/c4/57b4c43cd26d2bff069970911bfa29b3.jpg',
      likes: 234
    },
    {
      id: 7,
      title: 'Minimalist Chic',
      category: 'Simple Design',
      image: 'https://i.pinimg.com/736x/77/b0/b1/77b0b1f6b4a3c3ff104b78f5b3ecc9c2.jpg',
      likes: 167
    },
    {
      id: 8,
      title: 'Geometric Art',
      category: 'Creative Design',
      image: 'https://i.pinimg.com/736x/e6/fd/76/e6fd764291080a4300b0888a8ea2db75.jpg',
      likes: 289
    }
  ];

  const pricingManicure = [
    { name: 'Basic Manicure', price: 600 },
    { name: 'French Manicure', price: 800 },
    { name: 'Gel Manicure', price: 1200 },
    { name: 'Bridal Manicure', price: 1500 }
  ];

  const pricingPedicure = [
    { name: 'Regular Pedicure', price: 800 },
    { name: 'Spa Pedicure', price: 1200 },
    { name: 'Gel Pedicure', price: 1500 },
    { name: 'Bridal Pedicure', price: 1800 }
  ];

  const packages = [
    {
      id: 1,
      name: 'Bridal Nail Package',
      type: 'Premium',
      badge: 'Most Popular',
      price: 8000,
      originalPrice: 12000,
      description: 'Complete nail care for the perfect bridal look',
      image: 'https://i.pinimg.com/736x/bb/7e/a3/bb7ea36c2dc316ba102b595741cd1889.jpg',
      features: [
        '3 pre-bridal nail sessions',
        'Luxury manicure & pedicure',
        'Custom bridal nail art',
        'Gel polish application',
        'Hand & foot spa treatment',
        'Nail strengthening treatment',
        'French tips or custom design',
        'Wedding day touch-up',
        'Complimentary nail kit',
        'Free consultation'
      ],
      duration: '1 month plan',
      sessions: '5+ sessions',
      popular: true
    },
    {
      id: 2,
      name: 'Bridesmaid Package',
      type: 'Standard',
      price: 3500,
      originalPrice: 5000,
      description: 'Beautiful nails for bridesmaids and family',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600',
      features: [
        'Manicure & pedicure',
        'Gel polish',
        'Simple nail art',
        'Hand massage',
        'Nail shaping',
        'Cuticle care'
      ],
      duration: 'Single day',
      sessions: '2 services',
      popular: false
    },
    {
      id: 3,
      name: 'Monthly Maintenance',
      type: 'Basic',
      price: 2500,
      originalPrice: 3500,
      description: 'Regular nail care maintenance',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600',
      features: [
        'Manicure (2 sessions)',
        'Pedicure (2 sessions)',
        'Regular polish',
        'Nail filing & shaping',
        'Basic cuticle care'
      ],
      duration: '1 month',
      sessions: '4 sessions',
      popular: false
    }
  ];

  const masters = [
    {
      id: 1,
      name: 'Samantha Roberts',
      title: 'Master Nail Artist',
      experience: '12 years',
      rating: 5.0,
      reviews: 428,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      specialization: ['Bridal Nails', '3D Art', 'Gel Extensions']
    },
    {
      id: 2,
      name: 'Emily Johnson',
      title: 'Celebrity Nail Designer',
      experience: '10 years',
      rating: 4.9,
      reviews: 356,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      specialization: ['Artistic Designs', 'Ombre', 'French Tips']
    },
    {
      id: 3,
      name: 'Jessica Martinez',
      title: 'Nail Art Specialist',
      experience: '8 years',
      rating: 4.8,
      reviews: 289,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      specialization: ['Nail Extensions', 'Acrylics', 'Gems & Crystals']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah K',
      role: 'Bride',
      rating: 5,
      comment: 'Absolutely stunning nail art for my wedding! The bridal package was worth every penny. My nails looked perfect throughout the entire ceremony.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Bride',
      rating: 5,
      comment: 'The team was amazing! They created the exact design I envisioned. Professional service and beautiful results.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
    },
    {
      id: 3,
      name: 'Michelle W',
      role: 'Bridesmaid',
      rating: 5,
      comment: 'Beautiful gel manicure that lasted for weeks! The nail art was creative and elegant. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Best Bridal Nail Art Trends and Color Guide for 2025',
      excerpt: 'Discover the hottest nail trends for your wedding day...',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600',
      date: 'Oct 5, 2025',
      category: 'Trends'
    },
    {
      id: 2,
      title: 'Top 10 Must-Have Nail Products: Keep Manicure Last Longer',
      excerpt: 'Essential products to maintain your perfect manicure...',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600',
      date: 'Oct 1, 2025',
      category: 'Tips'
    }
  ];

  const instagramPosts = [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300',
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300',
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=300',
    'https://images.unsplash.com/photo-1615993518077-539a7b10f7c7?w=300',
    'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300'
  ];

  const handleAddToWishlist = (itemId) => {
    if (wishlist.includes(itemId)) {
      setWishlist(wishlist.filter(id => id !== itemId));
    } else {
      setWishlist([...wishlist, itemId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-rose-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-30 pt-20 pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-[slideRight_1s_ease-out]">
              <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-gray-800">
                Make Your Nails<br />
                Look <span className="text-rose-400 italic">Gorgeous</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Transform your nails into works of art with our expert nail artists. Perfect for brides, special occasions, or everyday elegance.
              </p>
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center group">
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="relative animate-[slideLeft_1s_ease-out]">
              <div className="relative">
                <img
                  src="https://i.pinimg.com/736x/04/ce/d5/04ced5fd3a66445bca92021763a5c202.jpg"
                  alt="Nail Art"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl animate-[float_3s_ease-in-out_infinite]">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-rose-400" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Premium Quality</p>
                      <p className="text-sm text-gray-600">Expert Artists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unleashing Creativity Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-30">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-wider text-sm mb-4 block">CREATIVE EXCELLENCE</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
              Unleashing Creativity:<br />A Nail Art Haven
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Welcome to our nail art sanctuary where creativity meets precision. Our expert artists specialize in bridal nail designs, custom artwork, and the latest trends in nail fashion. Whether you're preparing for your wedding day or simply want to treat yourself, we create stunning nail designs that reflect your unique style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {nailServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-[slideUp_0.6s_ease-out]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-10 h-10 text-rose-400" />
                      {service.popular && (
                        <span className="bg-rose-400 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-200 mb-4 text-sm">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="text-2xl font-bold text-rose-400">
                        ₹{service.price}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-30">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="text-center group animate-[slideUp_0.6s_ease-out]"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="mb-6 inline-block">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-2xl">
                      <IconComponent className="w-10 h-10 text-rose-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-30">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-wider text-sm mb-4 block">OUR WORK</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              Portfolio of Stunning Designs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our gallery of beautiful nail art creations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPortfolio(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-rose-400 text-xs font-semibold mb-1 block">{item.category}</span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Heart className="w-4 h-4 mr-1 fill-current" />
                      <span>{item.likes}</span>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-30">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-wider text-sm mb-4 block">PRICING</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              Pricing For Manicure & Pedicure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Manicure Pricing */}
            <div className="animate-[slideRight_0.8s_ease-out]">
              <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600"
                    alt="Manicure"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Pricing For Manicure</h3>
                <div className="space-y-4">
                  {pricingManicure.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 border-b border-gray-200 hover:bg-rose-50 px-4 rounded-lg transition-colors duration-300"
                    >
                      <span className="font-semibold text-gray-800">{item.name}</span>
                      <span className="text-2xl font-bold text-rose-400">₹{item.price}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 bg-rose-400 hover:bg-rose-500 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Book Manicure
                </button>
              </div>
            </div>

            {/* Pedicure Pricing */}
            <div className="animate-[slideLeft_0.8s_ease-out]">
              <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600"
                    alt="Pedicure"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Pricing For Pedicure</h3>
                <div className="space-y-4">
                  {pricingPedicure.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 border-b border-gray-200 hover:bg-rose-50 px-4 rounded-lg transition-colors duration-300"
                    >
                      <span className="font-semibold text-gray-800">{item.name}</span>
                      <span className="text-2xl font-bold text-rose-400">₹{item.price}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 bg-rose-400 hover:bg-rose-500 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Book Pedicure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-30">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-wider text-sm mb-4 block">SPECIAL OFFERS</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              Bridal Nail Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Complete nail care solutions for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col animate-[slideUp_0.6s_ease-out] hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {pkg.badge && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-rose-400 text-white px-4 py-2 rounded-bl-3xl text-sm font-semibold shadow-lg animate-pulse">
                      {pkg.badge}
                    </div>
                  </div>
                )}

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8 flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      pkg.type === 'Premium' ? 'bg-rose-100 text-rose-600' :
                      pkg.type === 'Standard' ? 'bg-pink-100 text-pink-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {pkg.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-rose-400">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="ml-2 text-lg text-gray-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration} • {pkg.sessions}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 6 && (
                      <p className="text-sm text-rose-400 font-semibold ml-7">
                        +{pkg.features.length - 6} more benefits
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full bg-rose-400 text-white py-4 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Masters Section */}
      <div className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-30">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-wider text-sm mb-4 block">EXPERT TEAM</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              Our Masters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet our talented nail artists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <div
                key={master.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{master.rating}</span>
                    <span className="text-sm text-gray-300 ml-2">({master.reviews} reviews)</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{master.name}</h3>
                  <p className="text-rose-400 font-semibold mb-2">{master.title}</p>
                  <p className="text-sm text-gray-300 mb-4">{master.experience} experience</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {master.specialization.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-30">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-wider text-sm mb-4 block">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              Our Valuable Customer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              What our happy clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-rose-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-rose-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-30">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <span className="text-rose-400 font-semibold tracking-wider text-sm mb-4 block">LATEST UPDATES</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              News and Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Stay updated with the latest trends and tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-rose-400 font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-rose-400 font-semibold inline-flex items-center group">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

    

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-800">{selectedService.name}</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />

              <p className="text-gray-600 mb-6 text-lg">{selectedService.description}</p>

              <div className="flex items-center justify-between mb-8 p-6 bg-rose-50 rounded-2xl">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-6 h-6 mr-2 text-rose-400" />
                  <span className="font-semibold text-lg">{selectedService.duration}</span>
                </div>
                <div className="text-4xl font-bold text-rose-400">
                  ₹{selectedService.price}
                </div>
              </div>

              <button className="w-full bg-rose-400 text-white py-4 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Package Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedPackage.name}</h3>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                    selectedPackage.type === 'Premium' ? 'bg-rose-100 text-rose-600' :
                    selectedPackage.type === 'Standard' ? 'bg-pink-100 text-pink-600' :
                    'bg-gray-100 text-gray-600'
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

              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="w-full h-72 object-cover rounded-2xl mb-6"
              />

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
                <p className="text-gray-600 flex items-center mt-3">
                  <Clock className="w-5 h-5 mr-2 text-rose-400" />
                  {selectedPackage.duration} • {selectedPackage.sessions}
                </p>
                <div className="mt-3 bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block font-semibold">
                  Save ₹{(selectedPackage.originalPrice - selectedPackage.price).toLocaleString()}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-800 mb-4 text-xl">Package Includes:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedPackage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-rose-400 flex-shrink-0 mt-0.5" />
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

      {/* Portfolio Modal */}
      {selectedPortfolio && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]" onClick={() => setSelectedPortfolio(null)}>
          <div className="max-w-4xl w-full animate-[scaleUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedPortfolio(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-rose-400 transition-colors"
              >
                ×
              </button>
              <img
                src={selectedPortfolio.image}
                alt={selectedPortfolio.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="bg-white p-6 rounded-b-2xl">
                <span className="text-rose-400 text-sm font-semibold mb-2 block">{selectedPortfolio.category}</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{selectedPortfolio.title}</h3>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-rose-400 fill-current" />
                  <span className="text-gray-600">{selectedPortfolio.likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default NailArt;

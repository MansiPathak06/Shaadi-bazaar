'use client';
import React, { useState } from 'react';
import { Waves, Home, Sun, Sparkles, MapPin, Users, Calendar, ChevronRight, Play, Heart, Shield, Leaf, Activity, Wind, Palmtree, Coffee, Droplet } from 'lucide-react';

export default function BeachProperties() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredProperty, setHoveredProperty] = useState(null);

  const testimonials = [
    {
      text: "Owning a beach villa here changed our lifestyle — the views, the comfort, the peace — unmatched.",
      author: "Rohan & Priya",
      location: "Goa"
    },
    {
      text: "A perfect blend of luxury and nature. It's a dream come true!",
      author: "Sofia",
      location: "Dubai"
    },
    {
      text: "Our family weekends never felt so magical — every detail thoughtfully designed.",
      author: "Amit Mehra",
      location: "Mumbai"
    }
  ];

  const properties = [
    { title: 'Beachfront Villas', desc: 'Luxurious private homes with direct beach access', color: 'from-blue-400 to-cyan-500', icon: Home },
    { title: 'Seaside Apartments', desc: 'Modern, comfortable, and scenic living spaces', color: 'from-teal-400 to-emerald-500', icon: Sparkles },
    { title: 'Vacation Cottages', desc: 'Cozy homes for short-term stays and getaways', color: 'from-amber-400 to-orange-500', icon: Sun },
    { title: 'Luxury Penthouses', desc: 'Stunning rooftop views of the ocean and horizon', color: 'from-purple-400 to-pink-500', icon: Heart }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Full Screen with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
          </div>
          {/* Animated Waves */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 Q300,40 600,0 T1200,0 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)">
                <animate attributeName="d" dur="5s" repeatCount="indefinite"
                  values="M0,0 Q300,40 600,0 T1200,0 L1200,120 L0,120 Z;
                          M0,0 Q300,-20 600,0 T1200,0 L1200,120 L0,120 Z;
                          M0,0 Q300,40 600,0 T1200,0 L1200,120 L0,120 Z"/>
              </path>
              <path d="M0,20 Q300,60 600,20 T1200,20 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)">
                <animate attributeName="d" dur="7s" repeatCount="indefinite"
                  values="M0,20 Q300,60 600,20 T1200,20 L1200,120 L0,120 Z;
                          M0,20 Q300,0 600,20 T1200,20 L1200,120 L0,120 Z;
                          M0,20 Q300,60 600,20 T1200,20 L1200,120 L0,120 Z"/>
              </path>
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white border border-white/30">
            <Waves className="w-5 h-5" />
            <span className="text-sm font-medium">Premium Beach Properties</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none">
            Your Slice of<br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Paradise Awaits</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Where sun, sand, and serenity meet luxury and comfort
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-blue-600 px-10 py-5 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
              Explore Properties
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent text-white px-10 py-5 rounded-full font-bold border-2 border-white/50 backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Schedule a Visit
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center text-white/70 animate-bounce">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronRight className="w-6 h-6 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - Takes 3 columns */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">About Our Properties</span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Luxury Living by the <span className="text-blue-600">Shoreline</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Nestled along pristine beaches, our properties offer unmatched access to the sea and the soothing rhythm of waves. Each home is thoughtfully designed to harmonize with its surroundings — bringing elegance, comfort, and panoramic views into every corner.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Whether it's a permanent residence, a vacation retreat, or an investment opportunity, these properties combine architectural excellence with the tranquility of coastal life.
              </p>
              
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-3xl shadow-xl">
                <Waves className="w-10 h-10 mb-4" />
                <p className="text-2xl font-medium italic leading-relaxed">
                  "Wake up to waves, unwind with sunsets, and live where the ocean inspires every day."
                </p>
              </div>
            </div>

            {/* Right Image Grid - Takes 2 columns */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-300 to-cyan-400 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <Home className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gradient-to-br from-amber-300 to-orange-400 rounded-3xl overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <Sun className="w-12 h-12 text-gray-400" />
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-purple-300 to-pink-400 rounded-3xl overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <Palmtree className="w-12 h-12 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types - Cards with Hover Effects */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Homes That Reflect Your <span className="text-blue-600">Coastal Dreams</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every property, a perfect blend of comfort, style, and seaside charm
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property, idx) => {
              const Icon = property.icon;
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredProperty(idx)}
                  onMouseLeave={() => setHoveredProperty(null)}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer"
                >
                  <div className={`aspect-[16/10] bg-gradient-to-br ${property.color} relative transition-transform duration-700 ${hoveredProperty === idx ? 'scale-110' : 'scale-100'}`}>
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                      <Icon className="w-20 h-20 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                      <div className={`transform transition-all duration-500 ${hoveredProperty === idx ? 'translate-y-0' : 'translate-y-4'}`}>
                        <Icon className="w-12 h-12 mb-4" />
                        <h3 className="text-3xl font-bold mb-3">{property.title}</h3>
                        <p className="text-white/90 text-lg">{property.desc}</p>
                        <button className={`mt-6 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-500 ${hoveredProperty === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                          View Details <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lifestyle & Amenities - Split Screen */}
      <section className="py-0 bg-gray-900">
        <div className="grid lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative min-h-[600px] bg-gradient-to-br from-cyan-500 to-blue-600">
            <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
              <Sparkles className="w-24 h-24 text-gray-300" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="p-12 lg:p-20 flex flex-col justify-center bg-gray-900 text-white">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Lifestyle & Amenities</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              A Life of Leisure and <span className="text-cyan-400">Elegance</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Our beach properties aren't just homes — they're gateways to a lifestyle. Enjoy private beach access, infinity pools, modern kitchens, and spaces designed for gatherings, relaxation, and wellness.
            </p>

            <div className="space-y-4">
              {[
                { icon: Sun, text: 'Private balconies and terraces with ocean views' },
                { icon: Droplet, text: 'Infinity pools and outdoor lounges' },
                { icon: Leaf, text: 'Landscaped gardens and walking trails' },
                { icon: Users, text: 'Clubhouse or community recreation spaces' },
                { icon: Shield, text: '24/7 security and concierge services' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all">
                    <div className="bg-cyan-500 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg text-gray-200">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-2xl text-cyan-400 font-medium italic mt-10">
              "Where every day feels like a vacation."
            </p>
          </div>
        </div>
      </section>

      {/* Culinary & Entertainment - Bento Grid Style */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Dining & Leisure With the <span className="text-orange-600">Perfect View</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether entertaining guests or enjoying quiet meals, every property features spaces designed to soak in sunsets
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Large Card */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-2xl group relative">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <Coffee className="w-20 h-20 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">Gourmet Kitchens</h3>
                  <p className="text-white/90 text-lg">Modern appliances with stunning views</p>
                </div>
              </div>
            </div>

            {/* Smaller Cards */}
            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-xl group relative">
              <div className="aspect-[2/1] bg-gradient-to-br from-amber-400 to-yellow-500">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <Sun className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Al Fresco Dining</h3>
                  <p className="text-white/90">Outdoor terraces for perfect evenings</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl group relative">
              <div className="aspect-square bg-gradient-to-br from-pink-400 to-rose-500">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Entertainment Areas</h3>
                  <p className="text-white/90 text-sm">For gatherings</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl group relative">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-indigo-500">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <Waves className="w-12 h-12 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Sunset Lounges</h3>
                  <p className="text-white/90 text-sm">Beachfront decks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-orange-600 font-medium italic">
              "Every meal, every moment — enriched by the sea."
            </p>
          </div>
        </div>
      </section>

      {/* Activities - Horizontal Scroll Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Ocean is Your <span className="text-blue-600">Playground</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Living by the beach is about more than just the view. Our properties offer access to adventures and experiences that bring life and joy to every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: '🏊', title: 'Swimming & Surfing', color: 'from-blue-400 to-cyan-500' },
              { icon: '🏐', title: 'Beach Sports', color: 'from-orange-400 to-red-500' },
              { icon: '🧘', title: 'Yoga Sessions', color: 'from-purple-400 to-pink-500' },
              { icon: '🚴', title: 'Cycling Paths', color: 'from-green-400 to-emerald-500' },
              { icon: '⛵', title: 'Water Excursions', color: 'from-teal-400 to-blue-500' }
            ].map((activity, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`aspect-[3/4] bg-gradient-to-br ${activity.color} rounded-3xl p-8 flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl`}>
                  <div className="text-7xl mb-4">{activity.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl text-blue-600 font-medium italic">
              "Where every wave inspires a new adventure."
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability - Side by Side */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-700 font-semibold text-sm mb-6">
                <Leaf className="w-4 h-4" />
                Eco-Conscious Living
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Luxury That <span className="text-green-600">Respects Nature</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our properties are built with eco-conscious designs that honor the coastal environment. Sustainable architecture, energy-efficient systems, and local sourcing ensure your dream home preserves the beauty around it.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Droplet, title: 'Rainwater Harvesting', desc: 'Solar power integration' },
                  { icon: Leaf, title: 'Eco Materials', desc: 'Sustainable building' },
                  { icon: Palmtree, title: 'Native Plants', desc: 'Local landscaping' },
                  { icon: Shield, title: 'Beach Care', desc: 'Preservation initiatives' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                      <Icon className="w-10 h-10 text-green-600 mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <p className="text-2xl text-green-600 font-medium italic mt-10">
                "Luxury with a conscience — protecting the shoreline for generations."
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <Leaf className="w-24 h-24 text-gray-400" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-green-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Masonry Style */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Experience the Beauty <span className="text-cyan-400">Before You Arrive</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore visual stories of ocean views, sunset terraces, and modern interiors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="md:row-span-2 rounded-3xl overflow-hidden group relative cursor-pointer">
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-500 to-cyan-600">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <Home className="w-16 h-16 text-gray-300" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Beachfront Villas</h3>
                  <p className="text-white/80">Luxury homes</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden group relative cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-600">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-gray-300" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Interior Designs</h3>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden group relative cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-600">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <Sun className="w-12 h-12 text-gray-300" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">Lifestyle Spaces</h3>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 rounded-3xl overflow-hidden group relative cursor-pointer">
              <div className="aspect-[21/9] bg-gradient-to-br from-teal-500 to-green-600">
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  <Waves className="w-16 h-16 text-gray-300" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-3xl font-bold">Community Amenities</h3>
                  <p className="text-white/80 text-lg">Shared spaces for everyone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stories That <span className="text-blue-600">Inspire Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our property owners who found their perfect coastal sanctuary
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className={`relative p-8 rounded-3xl shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  activeTestimonial === idx 
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white scale-105' 
                    : 'bg-white text-gray-900 hover:shadow-3xl'
                }`}
                onClick={() => setActiveTestimonial(idx)}
              >
                <div className="mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-5 h-5 ${
                          activeTestimonial === idx ? 'text-yellow-300' : 'text-yellow-500'
                        }`}
                      >
                        ⭐
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className={`text-xl leading-relaxed mb-8 italic ${
                  activeTestimonial === idx ? 'text-blue-100' : 'text-gray-700'
                }`}>
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    activeTestimonial === idx 
                      ? 'bg-white/20 text-white' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className={`font-bold ${
                      activeTestimonial === idx ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.author}
                    </div>
                    <div className={`text-sm ${
                      activeTestimonial === idx ? 'text-blue-200' : 'text-gray-600'
                    }`}>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                
                {activeTestimonial === idx && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl text-blue-600 font-medium italic">
              "Every sunrise, every sunset — captured in the heart of those who call the beach home."
            </p>
          </div>
        </div>
      </section>

      {/* Investment & Future - Call to Action */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-cyan-300 border border-white/20">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Your Coastal Investment Awaits</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Your Paradise is Just One 
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Decision Away
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether it's your forever home, vacation escape, or investment opportunity — 
            the ocean is calling, and your dream property is waiting.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-5 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
              Schedule Property Visit
              <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="bg-transparent text-white px-12 py-5 rounded-full font-bold border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              View All Properties
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-white/80">Premium Properties</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-white/80">Owner Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-white/80">Property Support</div>
            </div>
          </div>
        </div>
      </section>


        
    </div>
  );
}

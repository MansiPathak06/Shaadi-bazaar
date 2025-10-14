'use client';

import React, { useState } from 'react';
import { Camera, MapPin, Users, Utensils, Sparkles, Calendar, Award, ChevronRight } from 'lucide-react';

export default function FarmhouseLanding() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "The perfect blend of nature and luxury — our wedding felt like a dream!",
      author: "Aarav & Nisha",
      location: "Lucknow"
    },
    {
      text: "From décor to dining, everything was beautifully organized. Highly recommended.",
      author: "Priya Mehta",
      location: "Delhi"
    },
    {
      text: "Loved the spacious lawns and professional team — they made our event seamless.",
      author: "Rahul Kapoor",
      location: "Noida"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-emerald-600 text-sm font-medium tracking-wider uppercase bg-emerald-50 px-4 py-2 rounded-full">Premium Farmhouse Venues</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Celebrate Amidst<br />
            <span className="text-emerald-600">Nature's Embrace</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-light">
            Where open skies, lush greens, and timeless elegance meet
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to our Farmhouse Banquet Halls — the perfect fusion of nature's beauty and modern celebration spaces. Whether you're planning a grand wedding, an intimate gathering, or a corporate retreat, our farm venues offer the serenity of the countryside with the sophistication of a luxury banquet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Our Venues
            </button>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-all transform hover:scale-105">
              Plan Your Event
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-emerald-600 text-sm font-medium tracking-wider uppercase">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Where Nature Meets Celebration
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nestled away from the city's chaos, our farmhouse banquet halls offer a sanctuary of peace and elegance. Surrounded by sprawling lawns, scenic landscapes, and elegant architecture, it's a destination designed for celebrations that breathe and bloom with beauty.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From dawn ceremonies under open skies to evening receptions beneath twinkling lights, every moment here feels magical — a perfect blend of comfort, charm, and countryside grace.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <p className="text-emerald-900 font-medium italic text-lg">
                  "More than a venue — it's a feeling of freedom and festivity."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-emerald-200 to-amber-200 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Events Hosted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section - Gallery Style */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Spaces That Celebrate Every Dream
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each area within our farmhouse is thoughtfully designed to suit diverse celebrations — from intimate gatherings to grand festivities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Large Card */}
            <div className="md:row-span-2 group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-gradient-to-br from-emerald-400 to-emerald-600 relative">
                <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 inline-block mb-3">
                    <span className="text-sm font-medium">Featured Venue</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">The Grand Lawn</h3>
                  <p className="text-white/90 mb-4">Perfect for open-air weddings and receptions under the stars</p>
                  <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                    Explore <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Smaller Cards */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[16/9] bg-gradient-to-br from-amber-400 to-orange-500 relative">
                <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-gray-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">The Heritage Hall</h3>
                  <p className="text-white/90 text-sm">Elegant indoor banquet with countryside charm</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[16/9] bg-gradient-to-br from-blue-400 to-cyan-500 relative">
                <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-gray-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">The Poolside Pavilion</h3>
                  <p className="text-white/90 text-sm">Ideal for mehendi, cocktails, and pre-wedding events</p>
                </div>
              </div>
            </div>

            {/* Full Width Card */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[21/9] bg-gradient-to-br from-purple-400 to-pink-500 relative">
                <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-gray-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">The Garden Courtyard</h3>
                  <p className="text-white/90 text-lg">A cozy outdoor setting for birthdays and family get-togethers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-emerald-600 font-medium italic">
              "Every space, a canvas for your imagination."
            </p>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-300 rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <Utensils className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-300 rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <Utensils className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <Utensils className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-300 rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <Utensils className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Flavors That Bloom with the Celebration
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expert culinary team curates a feast that reflects your taste and occasion — from traditional favorites to international delicacies. Each dish is crafted with passion, freshness, and flair.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Farm-to-table dining experience</h4>
                    <p className="text-sm text-gray-600">Fresh, locally sourced ingredients</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <Utensils className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Customizable multi-cuisine menus</h4>
                    <p className="text-sm text-gray-600">Tailored to your preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Live food counters & themed buffets</h4>
                    <p className="text-sm text-gray-600">Interactive dining experience</p>
                  </div>
                </div>
              </div>
              
              <p className="text-emerald-600 font-medium italic mt-8 text-lg">
                "Savor every moment — and every bite."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decor Section */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Turning Nature into a Backdrop of Beauty
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our décor artists blend natural elegance with creative sophistication — using flowers, fabrics, and lighting to design spaces that truly reflect your theme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-300 to-pink-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Floral & Rustic Themes</h3>
                <p className="text-gray-600">Elegant setups that bring nature indoors</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-300 to-indigo-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wedding Stages & Mandap</h3>
                <p className="text-gray-600">Custom designs for your special moments</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-300 to-yellow-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lighting & Ambiance</h3>
                <p className="text-gray-600">Creating magical atmospheres</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-amber-600 font-medium italic">
              "Let your celebration bloom in every detail."
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Perfect Venue for Every Occasion
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether it's a grand celebration or an intimate affair, our farmhouse banquet halls are equipped to make every occasion seamless, elegant, and memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Weddings & Engagements', icon: '💍', color: 'from-pink-500 to-rose-500' },
              { title: 'Haldi, Mehendi & Sangeet', icon: '🎨', color: 'from-yellow-500 to-orange-500' },
              { title: 'Anniversaries & Birthdays', icon: '🎂', color: 'from-purple-500 to-indigo-500' },
              { title: 'Corporate Retreats', icon: '💼', color: 'from-blue-500 to-cyan-500' },
              { title: 'Team Gatherings', icon: '👥', color: 'from-emerald-500 to-green-500' },
              { title: 'Cultural & Private Events', icon: '🎭', color: 'from-red-500 to-pink-500' }
            ].map((event, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm">Crafted with care and attention to detail</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-emerald-600 font-medium italic">
              "From vows to victories — every event finds its home here."
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Designed for Comfort, Crafted for Perfection
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We handle every detail — so you can enjoy every moment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Spacious Parking', desc: 'Valet service available', icon: '🚗' },
              { title: 'Indoor & Outdoor Seating', desc: 'Flexible arrangements', icon: '🪑' },
              { title: 'Stage & Sound Setup', desc: 'Professional equipment', icon: '🎤' },
              { title: 'Event Coordinators', desc: 'Dedicated support team', icon: '👔' },
              { title: 'Bridal & Guest Suites', desc: 'Comfortable accommodations', icon: '🛏️' },
              { title: 'Security & Power Backup', desc: '24/7 support', icon: '🔒' }
            ].map((facility, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-gray-300">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Where Every Frame Tells a Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step into our gallery of joyful memories — open-air vows, laughter under the stars, and elegant moments captured forever.
            </p>
          </div>

          {/* Gallery Grid - Film Selection Style */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Weddings & Receptions', subtitle: 'Love Stories', color: 'from-rose-400 to-pink-600' },
              { title: 'Décor & Lighting', subtitle: 'Design Excellence', color: 'from-purple-400 to-indigo-600' },
              { title: 'Culinary Delights', subtitle: 'Gastronomic Journey', color: 'from-orange-400 to-red-600' },
              { title: 'Guest Experiences', subtitle: 'Joyful Moments', color: 'from-emerald-400 to-green-600' },
              { title: 'Ceremonies', subtitle: 'Sacred Traditions', color: 'from-blue-400 to-cyan-600' },
              { title: 'Celebrations', subtitle: 'Festive Vibes', color: 'from-amber-400 to-yellow-600' }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className={`aspect-[4/5] bg-gradient-to-br ${item.color} relative`}>
                  <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm uppercase tracking-wider">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Voices of Joy and Gratitude
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="text-6xl text-emerald-600 mb-6">"</div>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="border-t pt-6">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-gray-600 flex items-center justify-center gap-2 mt-2">
                  <MapPin className="w-4 h-4" />
                  {testimonials[activeTestimonial].location}
                </p>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === idx 
                      ? 'bg-emerald-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Dream Celebration Awaits in the Heart of Nature
          </h2>
          <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a wedding, a family celebration, or a corporate event, our farmhouse banquet halls offer everything you need — elegant spaces, expert planning, and an atmosphere of pure bliss.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Your Farmhouse Hall
            </button>
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-emerald-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Schedule a Visit
            </button>
          </div>
          
          <div className="mt-16 pt-16 border-t border-emerald-400/30">
            <p className="text-2xl md:text-3xl font-light italic text-emerald-50">
              "Celebrate naturally, elegantly, beautifully — only at our Farmhouse Banquet Halls."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-emerald-600 p-3 rounded-full mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400">Farmhouse Banquet Halls<br />Countryside Location</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-emerald-600 p-3 rounded-full mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Book an Appointment</h3>
              <p className="text-gray-400">Available 7 Days a Week<br />9 AM - 8 PM</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-emerald-600 p-3 rounded-full mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <p className="text-gray-400">Expert event coordinators<br />ready to assist you</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
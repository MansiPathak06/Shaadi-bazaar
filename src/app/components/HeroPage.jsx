"use client";
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroPage = () => {
 

    
  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Your Dream Event Awaits
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Planning Your
                <span className="block text-rose-500">Perfect Experience</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Transform your vision into reality with our comprehensive planning services. 
                We handle every detail so you can focus on creating unforgettable memories.
              </p>

              

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-rose-200 to-rose-300 rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-lg mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
                  alt="Event Planning"
                  className="w-full h-full object-cover mix-blend-overlay"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/30 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Star className="text-rose-500" size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-sm font-medium text-gray-600">Rated</p>
                <div className="flex gap-1 my-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-rose-500" size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-gray-500">5.0 from 200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      
    </div>
  );
};

export default HeroPage;

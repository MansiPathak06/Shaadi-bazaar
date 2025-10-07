"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Hero slider images
  const heroImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1676984030045-1b32ef6baf5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event Planning 1"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1489268328895-4beb5edefab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZCUyMGltYWdlcyUyMGZvciUyMHdlYiUyMHBhZ2UlMjBmbG93ZXIlMjBkYXJrfGVufDB8fDB8fHww",
      alt: "Event Planning 2"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1594135156051-f4dfc71c3d30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tncm91bmQlMjBpbWFnZXMlMjBmb3IlMjB3ZWIlMjBwYWdlJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Event Planning 3"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1693233766191-e4b006231560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFja2dyb3VuZCUyMGltYWdlcyUyMGZvciUyMHdlYiUyMHBhZ2UlMjBtYXJyaWFnZSUyMGRhcmt8ZW58MHx8MHx8fDA%3D",
      alt: "Event Planning 4"
    }
  ];

  // Auto-play functionality
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, heroImages.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, heroImages.length]);

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      {/* Full-Width Hero Slider Section */}
      <section className="relative w-full h-screen">
        {/* Slider Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Slides */}
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>
          ))}

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                {/* Badge */}
                <div className="inline-block mb-6">
                  <span className="bg-rose-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                    ✨ Your Dream Event Awaits
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  Planning Your
                  <span className="block text-rose-400">Perfect Experience</span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
                  Transform your vision into reality with our comprehensive planning services. 
                  We handle every detail so you can focus on creating unforgettable memories.
                </p>

             

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Started
                    <ArrowRight size={20} />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-rose-500'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;

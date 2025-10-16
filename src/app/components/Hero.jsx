"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";

const HeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Hero slider images
  const heroVideos = [
    {
      id: 1,
      url: "https://cdn.pixabay.com/video/2023/04/05/157657-815175893_large.mp4",
      alt: "Event Planning 1",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/id/1466423824/video/dinner-setting-up-festive-table-decorations-wedding-party-night-reception-parallax-shot.mp4?s=mp4-640x640-is&k=20&c=VUVBnG5ecT4tolwCxSUF8Nb6PQIQVJxnT1p_Ls1NBTc=",
      alt: "Event Planning 2",
    },
    {
      id: 3,
      url: "https://cdn.pixabay.com/video/2022/10/23/136139-764371523_large.mp4",
      alt: "Event Planning 3",
    },
    {
      id: 4,
      url: "https://media.istockphoto.com/id/1056687048/video/luxury-catering-food.mp4?s=mp4-640x640-is&k=20&c=7kF2pVkM0_kOWgw7yeAFwD6YJLolt9tI-Ajzd4zW2hg=",
      alt: "Event Planning 4",
    },
  ];

  // Auto-play functionality
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroVideos.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, heroVideos.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(
        (prev) => (prev - 1 + heroVideos.length) % heroVideos.length
      );
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, heroVideos.length]);

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
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-160">
        {/* Slider Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Slides */}
          {heroVideos.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <video
                src={image.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              ></video>

              {/* Overlay Gradient - Stronger on mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 md:from-black/60 md:via-black/40 md:to-transparent"></div>
            </div>
          ))}

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                {/* Badge */}
                <div className="inline-block mb-4 sm:mb-6">
                  <span className="bg-rose-500/90 backdrop-blur-sm text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    ✨ Everything You Need for the Perfect Celebration
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                  Crafting
                  <span className="block text-rose-400">
                    Memories That Last Forever
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-200 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  From stunning venues and bespoke décor to flawless planning
                  and styling — we bring every element of your dream event
                  together, effortlessly.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Started
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile, visible on lg+ */}
          {/* <button
            onClick={prevSlide}
            className="hidden lg:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button> */}

          {/* <button
            onClick={nextSlide}
            className="hidden lg:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button> */}

          {/* Slide Indicators - Responsive sizing */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
            {heroVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === currentSlide
                    ? "w-8 h-2 sm:w-12 sm:h-3 bg-rose-500"
                    : "w-2 h-2 sm:w-3 sm:h-3 bg-white/50 hover:bg-white/70"
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

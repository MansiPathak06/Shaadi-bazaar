"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";

const BridalWear = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Women");

  // Hero Banners
  const heroBanners = [
    {
      id: 1,
      image: "/images/festive-vibes.jpg",
      title: "Festive Vibes",
      subtitle: "Nipala Wedding",
    },
    {
      id: 2,
      image: "/images/happiness.jpg",
      title: "Happiness",
      subtitle: "Wearing is caring",
    },
  ];

  // All Products with categories
  const allProducts = [
    // Women Products
    {
      id: 1,
      category: "Women",
      image: "/images/saree-1.jpg",
      name: "By Deepika Designer Saree 2024",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 2,
      category: "Women",
      image: "/images/saree-2.jpg",
      name: "By Deepika Red Saree",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 3,
      category: "Women",
      image: "/images/saree-3.jpg",
      name: "By Deepika Gold Tone Saree",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 4,
      category: "Women",
      image: "/images/saree-4.jpg",
      name: "By Deepika Royal Blue Saree",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    // Baby's Products
    {
      id: 5,
      category: "Baby's",
      image: "/images/baby-1.jpg",
      name: "Cute Baby Ethnic Wear",
      price: 999.0,
      originalPrice: 1500.0,
      discount: 15,
    },
    {
      id: 6,
      category: "Baby's",
      image: "/images/baby-2.jpg",
      name: "Designer Baby Dress",
      price: 1299.0,
      originalPrice: 2000.0,
      discount: 20,
    },
    {
      id: 7,
      category: "Baby's",
      image: "/images/baby-3.jpg",
      name: "Baby Traditional Outfit",
      price: 899.0,
      originalPrice: 1200.0,
      discount: 10,
    },
    {
      id: 8,
      category: "Baby's",
      image: "/images/baby-4.jpg",
      name: "Baby Festive Wear",
      price: 1099.0,
      originalPrice: 1800.0,
      discount: 15,
    },
    // Men's Products
    {
      id: 9,
      category: "Men's",
      image: "/images/men-1.jpg",
      name: "Men's Ethnic Kurta",
      price: 1999.0,
      originalPrice: 3500.0,
      discount: 12,
    },
    {
      id: 10,
      category: "Men's",
      image: "/images/men-2.jpg",
      name: "Designer Sherwani",
      price: 4999.0,
      originalPrice: 8000.0,
      discount: 18,
    },
    {
      id: 11,
      category: "Men's",
      image: "/images/men-3.jpg",
      name: "Traditional Dhoti Kurta",
      price: 1799.0,
      originalPrice: 2800.0,
      discount: 15,
    },
    {
      id: 12,
      category: "Men's",
      image: "/images/men-4.jpg",
      name: "Men's Wedding Collection",
      price: 3499.0,
      originalPrice: 5500.0,
      discount: 20,
    },
  ];

  // Filter products based on selected category
  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );

  // Sarees Collection
  const sarees = [
    { id: 1, image: "/sarees/cotton-1.jpg", name: "Cotton Saree" },
    { id: 2, image: "/sarees/silk-1.jpg", name: "Cotton Silk Saree" },
    { id: 3, image: "/sarees/chiffon-1.jpg", name: "Chiffon & Sequins" },
    { id: 4, image: "/sarees/cotton-2.jpg", name: "Cotton Saree" },
  ];

  // New Arrivals with grid items
  const newArrivals = [
    { id: 1, image: "/new/arrival-1.jpg", name: "Latest Collection" },
    { id: 2, image: "/new/arrival-2.jpg", name: "Festive Special" },
    { id: 3, image: "/new/arrival-3.jpg", name: "Wedding Special" },
    { id: 4, image: "/new/arrival-4.jpg", name: "Designer Wear" },
    { id: 5, image: "/new/arrival-5.jpg", name: "Party Wear" },
    { id: 6, image: "/new/arrival-6.jpg", name: "Casual Wear" },
    { id: 7, image: "/new/arrival-7.jpg", name: "Traditional" },
    { id: 8, image: "/new/arrival-8.jpg", name: "Contemporary" },
  ];

  const categories = ["Women", "Baby's", "Men's"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroBanners.length) % heroBanners.length
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroBanners.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-2xl">{banner.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroBanners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === idx ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Shop Best Seller Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Shop Best Seller
          </h2>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? "bg-rose-500 text-white shadow-lg scale-105"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-80 bg-gray-100 overflow-hidden">
                {product.discount > 0 && (
                  <span className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    {product.discount}%
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-white p-2 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-5 h-5 text-rose-500" />
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="w-5 h-5 text-rose-500" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-rose-500">
                    Rs {product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    Rs {product.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sarees Collection Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Sarees
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sarees.map((saree) => (
            <div
              key={saree.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 md:h-80 bg-gray-100">
                <Image
                  src={saree.image}
                  alt={saree.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">
                      {saree.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Side Banner Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/banners/happiness-wearing.jpg"
            alt="Happiness Wearing is Caring"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-2">
                HAPPINESS
              </h2>
              <p className="text-xl md:text-2xl">Wearing is caring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Sections */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Discover Our Silk
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Image
                src={`/gallery/silk-${item}.jpg`}
                alt={`Silk Collection ${item}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Glamour Collection
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Image
                src={`/gallery/glamour-${item}.jpg`}
                alt={`Glamour Collection ${item}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">New Arrivals</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Image
                src={`/gallery/arrival-${item}.jpg`}
                alt={`New Arrival ${item}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Shop By Evening
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {newArrivals.map((item) => (
            <div
              key={item.id}
              className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BridalWear;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Eye, Truck, Star, ShoppingCart } from "lucide-react";

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
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/e0/ac/c5/e0acc58c383e8c7c49abd43cde97d5c8.jpg",
      name: "Cotton Saree",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/30/fd/1b/30fd1bd449408806c692bfcba7e2ea22.jpg",
      name: "Cotton Silk Saree",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/a2/91/e3/a291e36248433df2bae27a4b7ddd7897.jpg",
      name: "Chiffon & Sequins",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/15/ca/b2/15cab2b5bc953d56e48c021cf2681363.jpg",
      name: "Cotton Saree",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
  ];

  const silkClothes = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/e3/7f/c0/e37fc0f6aa952494ea4226981987eb3b.jpg",
      name: "Premium Kanjivaram Silk Saree with Gold Zari",
      description: "Exquisite handwoven Kanjivaram silk saree featuring traditional temple border and intricate peacock motifs with pure gold zari work.",
      category: "Kanjivaram Silk",
      price: 2499,
      originalPrice: 5500,
      discount: 55,
      rating: 4.8,
      reviews: 127,
      inStock: true,
      stock: 8,
      isNew: true,
      colors: ['#8B0000', '#FFD700', '#4B0082'],
      sizes: ['Free Size'],
      material: "Pure Mulberry Silk",
      occasion: "Wedding, Festival"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/9a/47/66/9a476606535fb07913af5fe81905facd.jpg",
      name: "Elegant Banarasi Silk Saree with Silver Thread",
      description: "Luxurious Banarasi silk saree with intricate silver threadwork and traditional Mughal-inspired floral patterns.",
      category: "Banarasi Silk",
      price: 2499,
      originalPrice: 5500,
      discount: 55,
      rating: 4.6,
      reviews: 89,
      inStock: true,
      stock: 12,
      isNew: false,
      colors: ['#800080', '#C0C0C0', '#FF69B4'],
      sizes: ['Free Size'],
      material: "Pure Silk with Silver Zari",
      occasion: "Party, Reception"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/7e/f9/cd/7ef9cd4e4c4ff3914a63504778809cf8.jpg",
      name: "Royal Tussar Silk Saree with Block Print",
      description: "Handcrafted Tussar silk saree featuring traditional block print designs with natural texture and organic appeal.",
      category: "Tussar Silk",
      price: 2499,
      originalPrice: 5500,
      discount: 55,
      rating: 4.7,
      reviews: 156,
      inStock: true,
      stock: 6,
      isNew: false,
      colors: ['#DEB887', '#8FBC8F', '#CD853F'],
      sizes: ['Free Size'],
      material: "Wild Tussar Silk",
      occasion: "Casual, Office Wear"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/b6/a2/45/b6a2456b271e456753f5cf67a4cbe093.jpg",
      name: "Designer Soft Silk Saree with Contemporary Border",
      description: "Modern soft silk saree with contemporary geometric border patterns, perfect blend of tradition and style.",
      category: "Soft Silk",
      price: 2499,
      originalPrice: 5500,
      discount: 55,
      rating: 4.5,
      reviews: 203,
      inStock: true,
      stock: 15,
      isNew: true,
      colors: ['#FF1493', '#00CED1', '#32CD32'],
      sizes: ['Free Size'],
      material: "Premium Soft Silk",
      occasion: "Festival, Party"
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/12/34/56/123456789abcdef.jpg", // Add more products
      name: "Heritage Mysore Silk Saree with Gold Border",
      description: "Classic Mysore silk saree with minimalistic elegance and rich golden border, lightweight yet luxurious.",
      category: "Mysore Silk",
      price: 1899,
      originalPrice: 4200,
      discount: 55,
      rating: 4.4,
      reviews: 78,
      inStock: true,
      stock: 9,
      isNew: false,
      colors: ['#800000', '#FFD700', '#000080'],
      sizes: ['Free Size'],
      material: "Pure Mysore Silk",
      occasion: "Traditional, Religious"
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/78/90/12/789012345efghij.jpg", // Add more products
      name: "Handloom Muga Silk Saree with Natural Sheen",
      description: "Authentic Assamese Muga silk saree with natural golden color and distinctive sheen, a true treasure from Northeast India.",
      category: "Muga Silk",
      price: 3299,
      originalPrice: 7000,
      discount: 53,
      rating: 4.9,
      reviews: 45,
      inStock: false,
      stock: 0,
      isNew: true,
      colors: ['#DAA520', '#B8860B', '#CD853F'],
      sizes: ['Free Size'],
      material: "Wild Muga Silk",
      occasion: "Wedding, Special Events"
    }
  ];



  const glamourClothes = [
    {
      id: 1,
      name: " Glaomur Clothes",
      link: "https://i.pinimg.com/736x/b2/7d/8f/b27d8ff45007e4872249330d4ffc4ff9.jpg",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 2,
      name: " Glaomur Clothes",
      link: "https://i.pinimg.com/736x/da/b0/02/dab002f867d8da1f3ec486b55cbf21bd.jpg",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 3,
      name: " Glaomur Clothes",
      link: "https://i.pinimg.com/1200x/f6/95/8a/f6958acaf1e47434fd7fc8bf2923c45b.jpg",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 4,
      name: " Glaomur Clothes",
      link: "https://i.pinimg.com/736x/d4/1b/7a/d41b7a693d34b97a8e76136f86e7c479.jpg",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
  ]



  // New Arrivals with grid items
  const newArrivals = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/09/4a/0d/094a0d44d0c65bccaaa9ca975e45af28.jpg",
      name: "Latest Collection",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,

    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/20/29/76/202976425c40200edcc7570ac87d628b.jpg",
      name: "Festive Special",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/37/19/db/3719db6136f3e38a1ec583293f3b266c.jpg",
      name: "Wedding Special",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/c6/ec/f8/c6ecf865b6cf44a21c26ba57bde0d035.jpg",
      name: "Designer Wear",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/e1/30/d6/e130d6f09b38f148971d0e9c746fd990.jpg",
      name: "Party Wear",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 6,
      image: "https://i.pinimg.com/1200x/b1/48/98/b148980255f6fad58049e64f28f5e8aa.jpg",
      name: "Casual Wear",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/b4/8e/9e/b48e9e44ea2042aa234c83076f4ff993.jpg",
      name: "Traditional",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
    {
      id: 8,
      image: "https://i.pinimg.com/1200x/06/a1/b9/06a1b92329ebf0508c20dcc03bf26351.jpg",
      name: "Contemporary",
      price: 2499.0,
      originalPrice: 5500.0,
      discount: 10,
    },
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
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? "bg-white w-8" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Shop Best Seller Section */}

      <section className="container mx-auto px-4 pt-12">
        <div className="text-center mb-8">
          <div className="text-center mb-12 mt-4">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Celebrate Love in Style.
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Elegance That Lasts Forever</p>
          </div>


          <div className="flex justify-center gap-4  flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${selectedCategory === category
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
                  className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-300"
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


        <div className='flex justify-center py-12'>
          <button
            className="group relative px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:scale-105"
          >
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

      </section>

      {/* Sarees Collection Section */}
      <section className="container mx-auto px-4 pt-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Bridal Drapes of Elegance
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Grace That Walks Down the Aisle</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sarees.map((product) => (
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
                  className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-300"
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




        <div className='flex justify-center py-12'>
          <button
            className="group relative px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:scale-105"
          >
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section>

      {/* Side Banner Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://i.pinimg.com/736x/84/68/cd/8468cdd48ba8b0e90e12051bb2a97891.jpg"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Unveil the Beauty of Silk
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Silk That Defines Your Moment</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {silkClothes.map((product) => (
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
                  className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-300"
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
                    Rs {product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    Rs {product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>




        <div className='flex justify-center py-12'>
          <button
            className="group relative px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:scale-105"
          >
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

        </div>

      </section>

      {/* Glamour Collection */}

      <section className="container mx-auto px-4 py-12">


        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Glamour Collection
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Designed to Dazzle, Crafted to Impress</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {silkClothes.map((product) => (
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
                  className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-300"
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
                    Rs {product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    Rs {product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className='flex justify-center py-12'>
          <button
            className="group relative px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:scale-105"
          >
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

        </div>

      </section>

      {/* New Arrival */}

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            new Arrival
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Fresh Designs. Timeless Impressions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {silkClothes.map((product) => (
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
                  className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-300"
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
                    Rs {product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    Rs {product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center py-12'>
          <button
            className="group relative px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:scale-105"
          >
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

        </div>
      </section>

      {/* Shop By evening */}

      <section className="container mx-auto px-4 py-12">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Shop By Evening
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Designs That Glow as the Night Unfolds</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {silkClothes.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold z-20 shadow-lg animate-pulse">
                    -{product.discount}% OFF
                  </span>
                )}

                {/* New/Featured Badge */}
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-bold z-20 shadow-lg">
                    NEW
                  </span>
                )}

                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button
                    className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-xl hover:bg-rose-50 hover:scale-110 transition-all duration-200 border border-white/20"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-4 h-4 text-rose-500 hover:fill-current transition-colors" />
                  </button>
                  <button
                    className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-xl hover:bg-rose-50 hover:scale-110 transition-all duration-200 border border-white/20"
                    aria-label="Quick view"
                  >
                    <Eye className="w-4 h-4 text-gray-700" />
                  </button>
                  <button
                    className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-xl hover:bg-rose-50 hover:scale-110 transition-all duration-200 border border-white/20"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="w-4 h-4 text-rose-500" />
                  </button>
                </div>

                {/* Quick Add to Cart - Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white/95 backdrop-blur-sm text-gray-800 py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-white transition-all duration-200 shadow-lg border border-white/30">
                    Quick Add to Cart
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3">
                {/* Product Category */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                    {product.category || 'Silk Collection'}
                  </span>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 4.5)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                          }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.reviews || '24'})
                    </span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2 h-14 group-hover:text-rose-600 transition-colors duration-200">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {product.description || 'Premium quality silk fabric with elegant design and comfortable fit.'}
                </p>

                {/* Size/Color Options */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-500">Sizes:</span>
                    <div className="flex gap-1">
                      {['S', 'M', 'L'].map((size) => (
                        <span
                          key={size}
                          className="w-6 h-6 text-xs flex items-center justify-center border border-gray-200 rounded hover:border-rose-300 hover:bg-rose-50 transition-colors cursor-pointer"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {product.colors?.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    )) || (
                        <>
                          <div className="w-4 h-4 rounded-full bg-rose-400 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                          <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                          <div className="w-4 h-4 rounded-full bg-emerald-400 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                        </>
                      )}
                  </div>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Truck className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">Free Shipping</span>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 pt-1">
                  <div className={`w-2 h-2 rounded-full ${product.inStock !== false ? 'bg-green-400' : 'bg-red-400'}`} />
                  <span className={`text-xs font-medium ${product.inStock !== false ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock !== false ? 'In Stock' : 'Out of Stock'}
                  </span>
                  {product.inStock !== false && (
                    <span className="text-xs text-gray-500">• Only {product.stock || 12} left</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className='flex justify-center py-12'>
          <button
            className="group relative px-8 py-3 bg-neutral-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:scale-105"
          >
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

        </div>
      </section>

    </div>
  );
};

export default BridalWear;

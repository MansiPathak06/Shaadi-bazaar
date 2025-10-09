"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Truck, Award, RefreshCcw, Package, Shield, Clock, Sparkles } from "lucide-react";

const TraditionalWear = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  // Feature Cards
  const features = [
    {
      id: 1,
      icon: <Truck className="w-8 h-8 text-rose-500" />,
      title: "Free Home Delivery",
      description: "Providing free delivery for all products over ₹499",
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8 text-rose-500" />,
      title: "Quality Products",
      description: "We ensure our product quality all of time",
    },
    {
      id: 3,
      icon: <RefreshCcw className="w-8 h-8 text-rose-500" />,
      title: "3 Days Return",
      description: "Our return policy is very easy in only 3 days",
    },
  ];

  // Promotional Banner Cards
  const bannerCards = [
    {
      id: 1,
      title: "Bridal Lehengas",
      discount: "Save 40%",
      image: "https://i.pinimg.com/736x/b4/dd/43/b4dd43ef8b46f92a8be3e1131c898072.jpg",
      bgColor: "bg-rose-100",
      buttonText: "Shop Now!",
    },
    {
      id: 2,
      title: "Designer Sarees",
      subtitle: "Don't Miss Out Now!",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80&fit=crop",
      bgColor: "bg-amber-100",
      buttonText: "Shop Now!",
    },
    {
      id: 3,
      title: "Bridal Jewelry",
      discount: "Save 30%",
      subtitle: "Collection 2025",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80&fit=crop",
      bgColor: "bg-purple-100",
      buttonText: "Shop Now!",
    },
  ];

  // Product Filters
  const productFilters = ["ALL", "NEW", "HOT", "BEST DEALS"];

  // Featured Products - EXPANDED WITH MORE BRIDAL WEAR
  const allProducts = [
    {
      id: 1,
      name: "Red Bridal Lehenga Choli",
      price: 295.5,
      originalPrice: 450.0,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/f8/e7/9c/f8e79cbcec491dc800de0d183e16fba4.jpg",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 2,
      name: "Maroon Designer Bridal Lehenga",
      price: 325.5,
      originalPrice: 495.0,
      rating: 4.8,
      image: "https://i.pinimg.com/1200x/94/87/4a/94874ab7fcef4545d3f3e0a619a4cc17.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 3,
      name: "Silk Embroidered Wedding Saree",
      price: 185.5,
      originalPrice: 280.0,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80&fit=crop",
      badge: "BEST DEALS",
      discount: 34,
    },
    {
      id: 4,
      name: "Pink Bridal Lehenga Set",
      price: 275.5,
      originalPrice: 420.0,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80&fit=crop",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 5,
      name: "Golden Zari Work Bridal Lehenga",
      price: 345.5,
      originalPrice: 520.0,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/10/17/27/1017277c26b957c3517b0b364dfe0d68.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 6,
      name: "Traditional Banarasi Silk Saree",
      price: 165.5,
      originalPrice: 245.0,
      rating: 4.6,
      image: "https://i.pinimg.com/736x/fa/68/ad/fa68ad432bb66a7dcf5e993942765a13.jpg",
      discount: 32,
    },
    {
      id: 7,
      name: "Royal Blue Bridal Lehenga",
      price: 305.5,
      originalPrice: 465.0,
      rating: 4.7,
      image: "https://i.pinimg.com/1200x/4e/2b/1d/4e2b1dc1bef7e40a9775c5f483c6be36.jpg",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 8,
      name: "Embroidered Red Wedding Lehenga",
      price: 285.5,
      originalPrice: 425.0,
      rating: 4.8,
      image: "https://i.pinimg.com/736x/11/3d/31/113d3141f6f8e80f60990d9c5ac1b51d.jpg",
      badge: "BEST DEALS",
      discount: 33,
    },
    {
      id: 9,
      name: "Designer Pink Bridal Lehenga",
      price: 315.5,
      originalPrice: 475.0,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/49/c8/dc/49c8dc13b09d3dd9eecf99a2f5f7594e.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 10,
      name: "Peach Silk Bridal Lehenga",
      price: 295.5,
      originalPrice: 440.0,
      rating: 4.7,
      image: "https://i.pinimg.com/736x/7f/82/8c/7f828c9515e9bac81e8f37bbe9be2ba3.jpg",
      badge: "HOT",
      discount: 33,
    },
    {
      id: 11,
      name: "Heavy Zardozi Bridal Lehenga",
      price: 365.5,
      originalPrice: 550.0,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/e5/93/21/e5932199d148c5f04dfe9a6c1a6be8db.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 12,
      name: "Mint Green Bridal Lehenga",
      price: 255.5,
      originalPrice: 385.0,
      rating: 4.6,
      image: "https://i.pinimg.com/736x/f7/fc/75/f7fc7544b96bee913d7468b7199b3758.jpg",
      badge: "BEST DEALS",
      discount: 34,
    },
  ];

  const filteredProducts =
    selectedFilter === "ALL"
      ? allProducts
      : allProducts.filter((product) => product.badge === selectedFilter);

  // Additional Features
  const additionalFeatures = [
    {
      icon: Package,
      title: "Authentic Products",
      description: "100% genuine traditional wear"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Safe and encrypted payments"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here to help you"
    }
  ];

  // Collections Banner - EXPANDED
  const collections = [
    {
      id: 1,
      title: "Bridal Collection",
      description: "Exquisite Wedding Lehengas",
      image: "https://i.pinimg.com/736x/90/db/b7/90dbb77ac77514e0bec4f447a469bfd1.jpg",
      discount: "Up to 40% OFF"
    },
    {
      id: 2,
      title: "Designer Sarees",
      description: "Traditional Elegance",
      image: "https://i.pinimg.com/736x/6c/41/e3/6c41e3c553ae66725f70e2e7873b4af2.jpg",
      discount: "Starting at $99"
    }
  ];

  // NEW: Bridal Showcase Section
  const bridalShowcase = [
    {
      id: 1,
      title: "Red & Gold Bridal Collection",
      subtitle: "Traditional Masterpieces",
      image: "https://i.pinimg.com/1200x/a4/e2/ec/a4e2ec565da69d576bac1b186605e856.jpg",
    },
    {
      id: 2,
      title: "Designer Lehenga Range",
      subtitle: "Contemporary Bridal Wear",
      image: "https://i.pinimg.com/736x/ec/76/e1/ec76e19249e2d8474153e4c5ddd5bf8a.jpg",
    },
    {
      id: 3,
      title: "Silk Saree Collection",
      subtitle: "Timeless Elegance",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80&fit=crop",
    },
  ];

  // NEW: Bridal Categories
  const bridalCategories = [
    {
      id: 1,
      name: "Bridal Lehengas",
      count: "250+ Designs",
      image: "https://i.pinimg.com/736x/02/4e/2a/024e2ab2384ac4ab88e97534e9a71f1e.jpg",
    },
    {
      id: 2,
      name: "Wedding Sarees",
      count: "180+ Designs",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80&fit=crop",
    },
    {
      id: 3,
      name: "Bridal Jewelry",
      count: "300+ Pieces",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80&fit=crop",
    },
    {
      id: 4,
      name: "Designer Dupattas",
      count: "120+ Styles",
      image: "https://i.pinimg.com/736x/b0/31/2e/b0312eecbe9961ac26b9f62b97bdf0cc.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50 overflow-hidden mb-12 md:mb-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Content */}
            <div className="z-10 space-y-8 py-10">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-800 italic leading-tight">
                  Stylish & Dashing
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                  Discover our curated collection featuring timeless classics at
                  great prices. From traditional elegance to contemporary
                  fashion, find everything you need for every occasion at very
                  affordable prices.
                </p>
              </div>
              <button className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-4 font-semibold transition-all duration-300 flex items-center gap-3 rounded-lg shadow-md hover:shadow-xl">
                <span>Shop Now!</span>
                <span>→</span>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-full flex items-center justify-center lg:justify-end py-8">
              <div className="relative w-full h-[400px] md:h-[550px] lg:h-[600px]">
                <Image
                  src="https://i.pinimg.com/736x/f4/4f/f9/f44ff944160926a8b56f5ba7b8e3d16a.jpg"
                  alt="Stylish & Dashing Traditional Bridal Wear"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circle Elements */}
        <div className="absolute top-12 left-12 w-20 h-20 border-2 border-rose-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-24 left-24 w-16 h-16 bg-rose-200 rounded-full opacity-30"></div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-5 p-8 bg-white rounded-2xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Bridal Showcase Gallery */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-rose-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Bridal Showcase
            </h2>
            <Sparkles className="w-8 h-8 text-rose-500" />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our exclusive bridal collection featuring exquisite lehengas, sarees, and accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bridalShowcase.map((item) => (
            <div key={item.id} className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-200 text-lg mb-5">{item.subtitle}</p>
                  <button className="bg-rose-500 hover:bg-rose-600 px-8 py-3 rounded-full font-semibold transition-all">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner Cards Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bannerCards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group h-72`}
            >
              <div className="absolute inset-0 flex items-center justify-between p-8">
                {/* Left Content */}
                <div className="z-10 space-y-4">
                  {card.discount && (
                    <span className="inline-block bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase shadow-lg">
                      {card.discount}
                    </span>
                  )}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-gray-700">{card.subtitle}</p>
                  )}
                  <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-md">
                    {card.buttonText}
                  </button>
                </div>

                {/* Right Image */}
                <div className="relative w-44 h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    sizes="176px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Bridal Categories Grid */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Shop By Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bridalCategories.map((category) => (
            <div key={category.id} className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-200 text-sm">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collections Banner */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {collections.map((collection) => (
            <div key={collection.id} className="relative h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <span className="bg-rose-500 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                    {collection.discount}
                  </span>
                  <h3 className="text-4xl font-bold mb-3">{collection.title}</h3>
                  <p className="text-gray-200 mb-6 text-xl">{collection.description}</p>
                  <button className="text-white font-semibold hover:text-rose-400 transition-colors flex items-center gap-3 text-lg">
                    Explore Now <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured Bridal Products
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Explore our handpicked collection of bridal lehengas and traditional wear crafted with love and attention to detail
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            {productFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-8 py-4 rounded-full font-medium uppercase text-sm transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-rose-500 text-white shadow-xl scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-[450px] bg-gray-50 overflow-hidden">
                {product.badge && (
                  <span className="absolute top-5 left-5 bg-rose-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase z-10 shadow-lg">
                    {product.badge}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="absolute top-5 right-5 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold z-10 shadow-lg">
                    -{product.discount}%
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button
                      className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-6 h-6" />
                    </button>
                    <button
                      className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[56px]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${
                        idx < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-rose-500">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-base text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20 bg-gradient-to-r from-rose-50 to-orange-50 rounded-3xl my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="bg-white p-8 rounded-full mb-5 shadow-xl group-hover:shadow-2xl transition-shadow">
                <feature.icon className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-20 md:py-24">
        <div className="relative bg-gradient-to-r from-rose-100 via-orange-100 to-yellow-100 rounded-3xl p-16 md:p-20 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover More Bridal Collections
            </h2>
            <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Explore our extensive range of bridal lehengas, wedding sarees, and traditional wear
              for every occasion. Make your special day unforgettable!
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-14 py-5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg">
              Shop Bridal Collection
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-300 rounded-full opacity-20 -mr-36 -mt-36"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-300 rounded-full opacity-20 -ml-28 -mb-28"></div>
        </div>
      </section>
    </div>
  );
};

export default TraditionalWear;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Truck, Shield, Headphones, RefreshCw, Award, Package, Sparkles } from "lucide-react";

const KidsOutfits = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Category Cards
  const categories = [
    {
      id: 1,
      name: "Girls",
      description: "Spring Collection",
      image: "https://i.pinimg.com/736x/77/2a/8e/772a8e3e01c5511a29196169d3f26ddf.jpg",
      bgColor: "bg-pink-200",
    },
    {
      id: 2,
      name: "Boys",
      description: "Summer Collection",
      image: "https://i.pinimg.com/736x/c2/78/dd/c278dd132d210c10307edf37261901da.jpg",
      bgColor: "bg-blue-200",
    },
    {
      id: 3,
      name: "Babies",
      description: "Cute & Cozy",
      image: "https://i.pinimg.com/736x/0f/8f/44/0f8f44a28e11eff490878da51e9b3131.jpg",
      bgColor: "bg-yellow-400",
    },
  ];

  // Products with categories - MASSIVELY EXPANDED
  const allProducts = [
    // Accessories
    {
      id: 1,
      name: "Kids Jewelry Set - Colorful Accessories",
      category: "Accessories",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      image: "https://i.pinimg.com/736x/8e/3d/0a/8e3d0a9c3b8f3e0f5c2e7a8d6b4c9e1a.jpg",
      colors: ["#FFB6C1", "#87CEEB", "#FFF"],
      thumbnail: "https://i.pinimg.com/236x/8e/3d/0a/8e3d0a9c3b8f3e0f5c2e7a8d6b4c9e1a.jpg",
    },
    {
      id: 9,
      name: "Colorful Hair Clips Set",
      category: "Accessories",
      price: 14.99,
      originalPrice: 19.99,
      rating: 4.7,
      image: "https://i.pinimg.com/736x/a2/f3/7b/a2f37b8c4d6e9f1a3b5c7e2d8f4a6b9c.jpg",
    },
    {
      id: 10,
      name: "Kids Sunglasses Collection",
      category: "Accessories",
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.6,
      image: "https://i.pinimg.com/736x/5c/8a/2e/5c8a2e7d9f3b4a6c1e5d7a9b3c8e2f4a.jpg",
    },
    {
      id: 15,
      name: "Cartoon Character Backpack",
      category: "Accessories",
      price: 32.99,
      originalPrice: 42.99,
      rating: 4.8,
      image: "https://i.pinimg.com/736x/d4/9e/6b/d49e6b3a7c8f2e5d1b4a9c6e7f3d8a2b.jpg",
    },
    {
      id: 16,
      name: "Cute Kids Watch",
      category: "Accessories",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.5,
      image: "https://i.pinimg.com/736x/6f/2c/9d/6f2c9d4a8e7b3f5c1d9a6e8b4f2c7d3a.jpg",
    },
    // Clothes
    {
      id: 2,
      name: "Boy's Casual T-Shirt",
      category: "Clothes",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      image: "https://i.pinimg.com/736x/9c/7a/4e/9c7a4e2d6f8b3a5c9e1d7f4b6a8c2e5d.jpg",
    },
    {
      id: 3,
      name: "Colorful Kids T-Shirt",
      category: "Clothes",
      price: 12.99,
      originalPrice: 19.99,
      rating: 4.3,
      image: "https://i.pinimg.com/736x/1e/5b/8d/1e5b8d9a4c7f2e6b3d8a5c9f7e4b2a6d.jpg",
    },
    {
      id: 4,
      name: "Boy's Stylish Top",
      category: "Clothes",
      price: 18.99,
      originalPrice: 25.99,
      rating: 4.6,
      image: "https://i.pinimg.com/736x/4d/8f/3a/4d8f3a7c9e2b6d5f1a8c4e7b9d2f6a3c.jpg",
    },
    {
      id: 5,
      name: "Boy's Denim Jeans",
      category: "Clothes",
      price: 15.99,
      originalPrice: 22.99,
      rating: 4.4,
      image: "https://i.pinimg.com/736x/7e/2a/9f/7e2a9f5c8d4b6a3e9f1c7d5a8b4e2f6c.jpg",
    },
    {
      id: 6,
      name: "Girl's Summer Dress",
      category: "Clothes",
      price: 21.99,
      originalPrice: 29.99,
      rating: 4.7,
      image: "https://i.pinimg.com/736x/3a/9d/6f/3a9d6f8e4c2b7d5a9f3e1c8b6d4a7f2e.jpg",
    },
    {
      id: 7,
      name: "Kids Sneakers Collection",
      category: "Clothes",
      price: 16.99,
      originalPrice: 23.99,
      rating: 4.5,
      image: "https://i.pinimg.com/736x/8b/5d/2f/8b5d2f9a6c4e7b3d8f1a5c9e7b2d6f4a.jpg",
    },
    {
      id: 11,
      name: "Girl's Party Dress",
      category: "Clothes",
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.8,
      image: "https://i.pinimg.com/736x/2f/7c/9e/2f7c9e4a8d6b3f5c1e9a7d4b8f6c2a3e.jpg",
    },
    {
      id: 12,
      name: "Boy's Hoodie",
      category: "Clothes",
      price: 27.99,
      originalPrice: 37.99,
      rating: 4.6,
      image: "https://i.pinimg.com/736x/5e/9a/3d/5e9a3d7f2c8b4e6a9d1f7c5e3a8b6d2f.jpg",
    },
    {
      id: 17,
      name: "Girl's Floral Dress",
      category: "Clothes",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.7,
      image: "https://i.pinimg.com/736x/9d/4f/7a/9d4f7a3e6c8b2d5f9a1e7c4b6d8f3a2c.jpg",
    },
    {
      id: 18,
      name: "Boy's Sports Outfit",
      category: "Clothes",
      price: 33.99,
      originalPrice: 43.99,
      rating: 4.6,
      image: "https://i.pinimg.com/736x/6c/8e/2a/6c8e2a9f4d7b5c3e8a1d6f9c4b7e2a5d.jpg",
    },
    // New Collection
    {
      id: 8,
      name: "New Summer Outfit",
      category: "New Collection",
      price: 28.99,
      originalPrice: 38.99,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/4a/7d/9f/4a7d9f2e8c5b3d6a9f1e7c4b8d2a6f3c.jpg",
    },
    {
      id: 13,
      name: "Trendy Kids Jacket",
      category: "New Collection",
      price: 39.99,
      originalPrice: 54.99,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/3c/6f/8d/3c6f8d9a2e5b7c4f1d8a6e9c3b7f5a2d.jpg",
    },
    {
      id: 14,
      name: "Designer Kids Set",
      category: "New Collection",
      price: 45.99,
      originalPrice: 59.99,
      rating: 5.0,
      image: "https://i.pinimg.com/736x/7f/3a/6e/7f3a6e9c4d8b2f5a7e1c9d4b6f8a3c2e.jpg",
    },
    {
      id: 19,
      name: "Premium Kids Collection",
      category: "New Collection",
      price: 52.99,
      originalPrice: 69.99,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/1d/8c/5f/1d8c5f7a9e3b6d4c8f2a7e9b5d3c6f1a.jpg",
    },
  ];

  const categories_filter = ["All", "Accessories", "Clothes", "New Collection"];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  // Features - ENHANCED
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% protected payments"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support team"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ];

  // Featured Collections - EXPANDED
  const featuredCollections = [
    {
      id: 1,
      title: "Summer Essentials",
      description: "Light & Breezy",
      image: "https://i.pinimg.com/736x/8a/4d/7f/8a4d7f2e9c6b3a5d8f1e7c9a4b6d2f3e.jpg",
      discount: "40% OFF"
    },
    {
      id: 2,
      title: "Back to School",
      description: "Smart & Stylish",
      image: "https://i.pinimg.com/736x/2e/9f/5c/2e9f5c7a4d8b6f3a9e1c7d5b8f4a2c6d.jpg",
      discount: "30% OFF"
    }
  ];

  // NEW: Trending Kids Fashion
  const trendingFashion = [
    {
      id: 1,
      title: "Casual Wear",
      image: "https://i.pinimg.com/736x/5b/8e/3a/5b8e3a7d9f2c4b6e8a1d7f5c9b3e6a2d.jpg",
    },
    {
      id: 2,
      title: "Party Dresses",
      image: "https://i.pinimg.com/736x/9e/2c/7f/9e2c7f4a6d8b3e5c9f1a7d4e6b8c2f5a.jpg",
    },
    {
      id: 3,
      title: "Sports Wear",
      image: "https://i.pinimg.com/736x/4f/6a/9d/4f6a9d8c3e7b2a5f9d1c6e8a4b7f2d3c.jpg",
    },
    {
      id: 4,
      title: "Winter Collection",
      image: "https://i.pinimg.com/736x/7c/3e/8f/7c3e8f9a5d2b6c4e8f1a9d7c3b5e8a2f.jpg",
    },
  ];

  // NEW: Additional Features
  const additionalFeatures = [
    { icon: Award, title: "Quality Materials", description: "Soft & comfortable fabrics" },
    { icon: Package, title: "Gift Packaging", description: "Free gift wrapping available" },
    { icon: Sparkles, title: "Trendy Designs", description: "Latest fashion updates" },
  ];

  // NEW: Age Groups
  const ageGroups = [
    {
      id: 1,
      title: "Newborn (0-12 months)",
      image: "https://i.pinimg.com/736x/48/94/2c/48942c2cb30d87868042c53a49b53924.jpg",
      count: "150+ Items"
    },
    {
      id: 2,
      title: "Toddler (1-3 years)",
      image: "https://i.pinimg.com/736x/8e/80/35/8e8035cd711c6487a4f6455930d93ec5.jpg",
      count: "200+ Items"
    },
    {
      id: 3,
      title: "Kids (4-8 years)",
      image: "https://i.pinimg.com/1200x/ec/af/ef/ecafef7cdde66cf56e132967ba67bd1d.jpg",
      count: "300+ Items"
    },
    {
      id: 4,
      title: "Teens (9-14 years)",
      image: "https://i.pinimg.com/736x/e8/7b/85/e87b85cb47398ae2b175d5eb50b3ff5a.jpg",
      count: "250+ Items"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] bg-gradient-to-r from-rose-50 to-orange-50 overflow-hidden mb-12 md:mb-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Content */}
            <div className="z-10 space-y-8 py-10">
              <div className="inline-block">
                <span className="bg-rose-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                  70% SALE OFF
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight">
                Summer vibes
                <br />
                <span className="text-rose-500">holiday mode on</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                Explore the perfect outfit for every occasion with style and
                comfort in mind. Shop now and save big!
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl">
                Shop Now
              </button>
            </div>

            <div className="relative flex justify-center py-8">
  <div className="relative w-[400px] h-[500px]">
    <Image
      src="https://i.pinimg.com/1200x/4e/77/3a/4e773a89e0d112e1d891ae56174fc1b2.jpg"
      alt="Summer vibes kids fashion"
      fill
      className="object-cover object-center rounded-3xl shadow-2xl"
      priority
    />
    {/* Decorative Elements */}
    <div className="absolute -top-6 -left-6 w-16 h-16 bg-rose-200 rounded-full opacity-50 animate-bounce"></div>
    <div className="absolute bottom-6 -right-6 w-14 h-14 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="bg-rose-100 p-6 rounded-full mb-5 group-hover:bg-rose-200 transition-colors">
                  <feature.icon className="w-10 h-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Shop By Age Group */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Shop By Age
              </h2>
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find the perfect fit for your little ones at every stage
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ageGroups.map((group) => (
              <div key={group.id} className="group relative h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-8 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{group.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{group.count}</p>
                    <button className="bg-rose-500 hover:bg-rose-600 px-6 py-2 rounded-full font-semibold transition-all text-sm">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Shop By Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${category.bgColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative h-80`}
              >
                <div className="absolute inset-0 flex items-center justify-between p-8">
                  <div className="z-10 space-y-4">
                    <h3 className="text-4xl font-bold text-gray-800 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-700 text-xl mb-5">
                      {category.description}
                    </p>
                    <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md">
                      See More
                    </button>
                  </div>
                  <div className="relative w-44 h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      sizes="176px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Trending Kids Fashion Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Trending Kids Fashion
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingFashion.map((item) => (
              <div key={item.id} className="group relative h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections Banner */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredCollections.map((collection) => (
              <div key={collection.id} className="relative h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white z-10">
                  <span className="bg-rose-500 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                    {collection.discount}
                  </span>
                  <h3 className="text-4xl font-bold mb-3">{collection.title}</h3>
                  <p className="text-xl mb-6">{collection.description}</p>
                  <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Collections Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              New Collections
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
              Discover our handpicked selection of the latest kids fashion trends
            </p>
            <div className="flex justify-center gap-5 flex-wrap">
              {categories_filter.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-rose-500 text-white shadow-xl scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                  }`}
                >
                  {category}
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
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Wishlist & Cart Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-6 h-6 text-rose-500" />
                    </button>
                    <button
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-6 h-6 text-rose-500" />
                    </button>
                  </div>

                  {/* Thumbnail Preview (for first product) */}
                  {product.thumbnail && (
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {[1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className="w-14 h-14 bg-white rounded-lg border-2 border-gray-300 overflow-hidden cursor-pointer hover:border-rose-500 transition-colors"
                        >
                          <Image
                            src={product.thumbnail}
                            alt={`Thumbnail ${idx}`}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
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
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-rose-500">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-base text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Color Options */}
                  {product.colors && (
                    <div className="flex gap-2">
                      {product.colors.map((color, idx) => (
                        <button
                          key={idx}
                          className="w-7 h-7 rounded-full border-2 border-gray-300 hover:border-rose-500 transition-colors"
                          style={{ backgroundColor: color }}
                          aria-label={`Select color ${color}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-rose-50 to-orange-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
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
        </div>
      </section>


      {/* Instagram Feed Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 text-center">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-600 text-center mb-12 text-xl">@kidsoutfits</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "https://i.pinimg.com/736x/a1/5e/8c/a15e8c9d4f7b2a6e8c1d9f5a7b3e6d2c.jpg",
              "https://i.pinimg.com/736x/6d/9a/3f/6d9a3f7c8e2b5d4a9f1c6e8b7d3a5f2c.jpg",
              "https://i.pinimg.com/736x/9f/3c/7e/9f3c7e5a8d2b6c4f9e1a7d5c8b4f2a6d.jpg",
              "https://i.pinimg.com/736x/4e/7a/2d/4e7a2d9c6f8b3a5e9d1f7c4b6a8e2d5c.jpg",
              "https://i.pinimg.com/736x/8c/2f/9a/8c2f9a5e7d4b3c6f8a1e9d7c5b2f6a4d.jpg",
              "https://i.pinimg.com/736x/3a/8d/5f/3a8d5f9c7e2b4a6d8f1c9e5a7b4d2f6c.jpg"
            ].map((imgSrc, item) => (
              <div key={item} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                <Image
                  src={imgSrc}
                  alt={`Instagram post ${item + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="relative bg-gradient-to-r from-rose-100 via-orange-100 to-yellow-100 rounded-3xl p-16 md:p-20 text-center overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Explore More Collections
              </h2>
              <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Discover our extensive range of kids fashion for every age and occasion
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-14 py-5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg">
                Shop All Products
              </button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-rose-300 rounded-full opacity-20 -mr-36 -mt-36"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-300 rounded-full opacity-20 -ml-28 -mb-28"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsOutfits;
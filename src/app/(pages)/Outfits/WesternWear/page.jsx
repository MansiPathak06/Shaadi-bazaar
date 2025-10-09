"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Truck, RefreshCw, CreditCard, Headphones, TrendingUp, Award, Package } from "lucide-react";

const WesternWear = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  // Circular Category Cards - EXPANDED
  const categories = [
    { id: 1, name: "Coats", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80&fit=crop" },
    { id: 2, name: "Jacket", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80&fit=crop" },
    { id: 3, name: "Sweater", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80&fit=crop" },
    { id: 4, name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80&fit=crop" },
    { id: 5, name: "Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80&fit=crop" },
    { id: 6, name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80&fit=crop" },
  ];

  // Promotional Banners - UPDATED WITH HD IMAGES
  const promotionalBanners = [
    {
      id: 1,
      title: "Denim Jackets",
      discount: "55% Discount",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop",
      bgColor: "bg-blue-100",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Women's Sweaters & Shirts",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80&fit=crop",
      bgColor: "bg-rose-100",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Trendy Casual Wear",
      discount: "55% Discount",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80&fit=crop",
      bgColor: "bg-cyan-100",
      buttonText: "Learn More",
    },
  ];

  // Product Categories
  const productCategories = ["Popular", "Best Rated", "Featured", "New Arrivals"];

  // All Products - MASSIVELY EXPANDED WITH HD IMAGES
  const allProducts = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      category: "Popular",
      price: 79.0,
      originalPrice: 120.0,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&fit=crop",
    },
    {
      id: 2,
      name: "Women's White Blazer",
      category: "Popular",
      price: 95.0,
      originalPrice: 145.0,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&q=80&fit=crop",
    },
    {
      id: 3,
      name: "Black Leather Jacket",
      category: "Featured",
      price: 135.0,
      originalPrice: 200.0,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&q=80&fit=crop",
    },
    {
      id: 4,
      name: "Casual Blue Jeans",
      category: "Popular",
      price: 62.0,
      originalPrice: 95.0,
      rating: 4.6,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80&fit=crop",
    },
    {
      id: 5,
      name: "Premium Wool Coat",
      category: "Best Rated",
      price: 185.0,
      originalPrice: 275.0,
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80&fit=crop",
    },
    {
      id: 6,
      name: "Striped Cotton Shirt",
      category: "New Arrivals",
      price: 45.0,
      originalPrice: 68.0,
      rating: 4.5,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80&fit=crop",
    },
    {
      id: 7,
      name: "Designer Sneakers",
      category: "Featured",
      price: 110.0,
      originalPrice: 165.0,
      rating: 4.8,
      reviews: 187,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80&fit=crop",
    },
    {
      id: 8,
      name: "Knit Sweater",
      category: "Popular",
      price: 58.0,
      originalPrice: 85.0,
      rating: 4.7,
      reviews: 143,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80&fit=crop",
    },
    {
      id: 9,
      name: "Plaid Flannel Shirt",
      category: "New Arrivals",
      price: 52.0,
      originalPrice: 78.0,
      rating: 4.6,
      reviews: 91,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80&fit=crop",
    },
    {
      id: 10,
      name: "Slim Fit Chinos",
      category: "Best Rated",
      price: 68.0,
      originalPrice: 100.0,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80&fit=crop",
    },
    {
      id: 11,
      name: "Bomber Jacket",
      category: "Featured",
      price: 125.0,
      originalPrice: 185.0,
      rating: 4.7,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&fit=crop",
    },
    {
      id: 12,
      name: "Canvas Sneakers",
      category: "Popular",
      price: 72.0,
      originalPrice: 105.0,
      rating: 4.5,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80&fit=crop",
    },
  ];

  // Feature Icons - EXPANDED
  const features = [
    {
      id: 1,
      icon: <Truck className="w-8 h-8 text-gray-700" />,
      title: "Worldwide Delivery",
      description: "For Order Over $100",
    },
    {
      id: 2,
      icon: <RefreshCw className="w-8 h-8 text-gray-700" />,
      title: "Next Day Delivery",
      description: "UK Orders Only",
    },
    {
      id: 3,
      icon: <CreditCard className="w-8 h-8 text-gray-700" />,
      title: "Best Online Support",
      description: "Hours: 8AM - 11PM",
    },
    {
      id: 4,
      icon: <Headphones className="w-8 h-8 text-gray-700" />,
      title: "Return Policy",
      description: "Easy & Free Return",
    },
  ];

  // NEW: Trending Collections
  const trendingCollections = [
    {
      id: 1,
      title: "Winter Collection",
      subtitle: "Stay Warm & Stylish",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80&fit=crop",
      discount: "Up to 50% OFF",
    },
    {
      id: 2,
      title: "Denim Essentials",
      subtitle: "Classic Never Dies",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80&fit=crop",
      discount: "Starting at $59",
    },
  ];

  // NEW: Fashion Lookbook
  const lookbook = [
    {
      id: 1,
      title: "Street Style",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80&fit=crop",
    },
    {
      id: 2,
      title: "Casual Chic",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&fit=crop",
    },
    {
      id: 3,
      title: "Office Ready",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&q=80&fit=crop",
    },
    {
      id: 4,
      title: "Weekend Vibes",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&fit=crop",
    },
  ];

  // NEW: Deal Of The Week - UPDATED WITH REAL IMAGES
  const weeklyDeals = [
    { id: 1, image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&q=80&fit=crop", discount: "40% OFF" },
    { id: 2, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80&fit=crop", discount: "35% OFF" },
    { id: 3, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80&fit=crop", discount: "45% OFF" },
    { id: 4, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80&fit=crop", discount: "30% OFF" },
  ];

  // NEW: Additional Features
  const additionalFeatures = [
    { icon: TrendingUp, title: "Trending Styles", description: "Latest fashion updates" },
    { icon: Award, title: "Premium Quality", description: "Certified materials" },
    { icon: Package, title: "Gift Wrapping", description: "Free on request" },
  ];

  const filteredProducts =
    selectedCategory === "Popular"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] bg-gradient-to-br from-rose-50 to-orange-50 overflow-hidden mb-12 md:mb-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Content */}
            <div className="z-10 space-y-8 py-10">
              <div className="inline-block">
                <span className="bg-white px-6 py-3 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                  🏷️ Best Deals Available
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                Limited Edition For Queen
                <br />
                <span className="text-rose-500">Styles Fashion</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                Discover our exclusive collection of premium western wear with
                unbeatable prices and quality
              </p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl">
                Explore Collection
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-full flex items-end justify-center lg:justify-end py-8">
              <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&fit=crop"
                  alt="Limited Edition Fashion"
                  fill
                  className="object-cover object-center rounded-3xl shadow-2xl"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-12 right-12 w-24 h-24 border-4 border-rose-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-24 left-12 w-20 h-20 bg-rose-200 rounded-full opacity-30"></div>
      </section>

      {/* Best For Your Categories */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Best For Your Categories
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="144px"
                />
              </div>
              <p className="text-center mt-4 text-base md:text-lg font-semibold text-gray-800">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Trending Collections Banner */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Trending Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {trendingCollections.map((collection) => (
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
                  <p className="text-gray-200 mb-6 text-xl">{collection.subtitle}</p>
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banners Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotionalBanners.map((banner) => (
            <div
              key={banner.id}
              className={`${banner.bgColor} relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
            >
              <div className="p-8 flex flex-col justify-between h-72">
                {/* Content */}
                <div className="space-y-4 z-10">
                  {banner.discount && (
                    <span className="inline-block bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {banner.discount}
                    </span>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight max-w-[200px]">
                    {banner.title}
                  </h3>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-md">
                    {banner.buttonText}
                  </button>
                </div>

                {/* Image */}
                <div className="absolute right-0 bottom-0 w-44 h-52">
                  <Image
                    src={banner.image}
                    alt={banner.title}
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

      {/* NEW: Fashion Lookbook Gallery */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Fashion Lookbook
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lookbook.map((item) => (
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
      </section>

      {/* Popular Products Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular Products
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Discover our handpicked selection of trending western wear pieces
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 ${
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
              <div className="relative h-80 bg-gray-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
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
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deal Of The Week Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Deal Of The Week
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {weeklyDeals.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group h-96"
              >
                <Image
                  src={item.image}
                  alt={`Deal ${item.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-5 right-5 bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {item.discount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
     

      {/* CTA Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-20 md:py-24">
        <div className="relative bg-gradient-to-r from-rose-100 via-orange-100 to-yellow-100 rounded-3xl p-16 md:p-20 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Explore More Collections
            </h2>
            <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover our extensive range of western wear for every style and occasion
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-14 py-5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg">
              Shop All Products
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

export default WesternWear;

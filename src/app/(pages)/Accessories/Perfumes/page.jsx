'use client'

import React, { useState , useEffect } from 'react';
import { ChevronDown, ShoppingBag, Heart, Star, ArrowRight, Play, Sparkles } from 'lucide-react';




function Perfumes() {
    return (
        <div className="min-h-screen ">
            <HeroSection />
            <Category />
            <FeaturedProducts />
            <ProductShowcase />
            <OnSaleProducts />
            <Newsletter />
        </div>
    );
}

export default Perfumes;

const Category = () => {
  const categories = [
    {
      title: "Acqua di Gio Profondo",
      subtitle: "Eau de parfum",
      price: "$7 Only",
      bgImage: "url('/perfume1.jpg')", // Replace with actual image path
      textColor: "text-gray-800"
    },
    {
      title: "Aventus",
      subtitle: "Eau de parfum", 
      price: "$9 Only",
      bgImage: "url('/perfume2.jpg')", // Replace with actual image path
      textColor: "text-gray-800"
    },
    {
      title: "Bleu de Chanel",
      subtitle: "Eau de parfum",
      price: "$7 Only", 
      bgImage: "url('/perfume3.jpg')", // Replace with actual image path
      textColor: "text-gray-800"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.textColor} rounded-lg p-6 min-h-[400px] flex flex-col justify-end relative overflow-hidden group cursor-pointer transform hover:scale-105 transition duration-300 shadow-md bg-gray-100`}
              style={{
                backgroundImage: category.bgImage,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top'
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
              
              {/* Product Details */}
              <div className="text-center z-10 relative">
                <h3 className="text-lg font-bold mb-1 leading-tight">{category.title}</h3>
                <p className="text-sm opacity-70 mb-3">{category.subtitle}</p>
                <div className="text-lg font-bold text-red-600 mb-4">{category.price}</div>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};




function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-neutral-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          
          {/* Left Content Section */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-light text-neutral-800 leading-tight">
                Essence
              </h1>
              <h2 className="text-6xl lg:text-7xl font-light text-neutral-800 leading-tight">
                of <span className="italic font-serif">Elegance</span>
              </h2>
            </div>
            
            <p className="text-neutral-600 text-lg max-w-md leading-relaxed">
              Discover our signature collection of luxury fragrances, crafted with the finest ingredients to awaken your senses and express your unique essence.
            </p>
            
            <button className="bg-neutral-800 text-white px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-neutral-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Fragrances
            </button>
            
            {/* Subtle accent line */}
            <div className="w-24 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background decorative circle */}
            <div className="absolute -top-8 -right-8 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-stone-200/30 rounded-full blur-3xl"></div>
            
            {/* Perfume bottle with enhanced drop shadow */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0800ba87e15?w=600&h=800&fit=crop&auto=format"
                alt="Luxury Perfume Bottle"
                className="w-80 h-auto object-cover relative z-10 transform hover:scale-105 transition-transform duration-700"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25)) drop-shadow(0 10px 25px rgba(139, 92, 246, 0.1))',
                }}
              />
              
              {/* Additional layered shadows for depth */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-900/5 rounded-lg"
                style={{
                  filter: 'blur(20px)',
                  transform: 'translateY(30px) scale(0.9)',
                }}
              ></div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-stone-400 rounded-full opacity-40"></div>
          </div>
        </div>
        
        {/* Bottom section with brand highlights */}
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400 text-xs uppercase tracking-wider">
            <span>Premium Quality</span>
            <div className="w-px h-4 bg-neutral-300"></div>
            <span>Handcrafted</span>
            <div className="w-px h-4 bg-neutral-300"></div>
            <span>Luxury Collection</span>
            <div className="w-px h-4 bg-neutral-300"></div>
            <span>Since 1952</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const CategoryCards = () => {
  const categories = [
    {
      title: "Tinted Care",
      subtitle: "New Product Chanel",
      bgColor: "bg-yellow-400"
    },
    {
      title: "Modern Muse",
      subtitle: "Estée Lauder Parfum",
      bgColor: "bg-gray-800",
      textColor: "text-white"
    },
    {
      title: "Chque Perfume",
      subtitle: "by Isable",
      bgColor: "bg-teal-400"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} ${category.textColor || 'text-black'} rounded-lg p-8 min-h-[300px] flex items-center justify-between relative overflow-hidden group cursor-pointer transform hover:scale-105 transition duration-300`}
            >
              <div className="z-10">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-80 mb-4">{category.subtitle}</p>
                <button className="text-sm font-medium hover:underline">
                  Shop Now →
                </button>
              </div>
              
              <div className="absolute right-4 top-4 bottom-4 w-32 bg-white bg-opacity-20 rounded-lg"></div>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-white bg-opacity-5 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Versatile product",
      price: "$70.00",
      originalPrice: "$85.00",
      rating: 4.5,
      badge: "Sale",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      name: "Sellout product",
      price: "$65.00",
      originalPrice: "$80.00", 
      rating: 4.8,
      badge: "Best Seller",
      badgeColor: "bg-green-500"
    },
    {
      id: 3,
      name: "Simple product",
      price: "$45.00",
      rating: 4.2
    },
    {
      id: 4,
      name: "Product with video",
      price: "$85.00",
      rating: 4.6,
      badge: "New",
      badgeColor: "bg-blue-500"
    }
  ];

  const tabs = ['New Arrivals', 'Featured', 'Top Rated'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-8 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`pb-2 font-medium ${
                  index === 0 
                    ? 'text-purple-700 border-b-2 border-purple-700' 
                    : 'text-gray-600 hover:text-purple-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="relative bg-gray-100 h-64 overflow-hidden">
                {product.badge && (
                  <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs px-2 py-1 rounded-full z-10`}>
                    {product.badge}
                  </span>
                )}
                
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="w-32 h-40 bg-gradient-to-b from-purple-300 to-purple-500 rounded-lg"></div>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="space-x-3">
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">👁️</button>
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">❤️</button>
                    <button className="bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800">🛒</button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-purple-700 transition duration-300">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-bold text-purple-700">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-pink-200 to-pink-300 rounded-lg p-8 flex items-center justify-between min-h-[300px]">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Perfume Women</h3>
              <p className="text-gray-700 mb-4">Sale off 50% all products</p>
              <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800">
                Shop Now
              </button>
            </div>
            <div className="w-32 h-40 bg-white bg-opacity-50 rounded-lg"></div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8 flex items-center justify-between min-h-[300px]">
            <div>
              <h3 className="text-2xl font-bold mb-2">Luxury Perfume Men</h3>
              <p className="text-gray-300 mb-4">Sale off 60% all of Product</p>
              <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800">
                Shop Now
              </button>
            </div>
            <div className="w-32 h-40 bg-white bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OnSaleProducts = () => {
  const saleProducts = [
    { id: 1, name: "Perfume Man", price: "$30.00", originalPrice: "$45.00", badge: "Sale" },
    { id: 2, name: "Perfume Girl", price: "$25.00", originalPrice: "$40.00", badge: "Sale" },
    { id: 3, name: "Perfume VIB Man", price: "$35.00", originalPrice: "$50.00", badge: "Sale" },
    { id: 4, name: "Product with Mix", price: "$40.00", originalPrice: "$60.00", badge: "Sale" },
    { id: 5, name: "Product with Shine", price: "$50.00", originalPrice: "$75.00", badge: "Sale" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">On Sale Products</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border hover:bg-gray-100">←</button>
            <button className="p-2 rounded-full border hover:bg-gray-100">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {saleProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300">
              <div className="relative">
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {product.badge}
                </span>
                <div className="h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <div className="w-20 h-32 bg-gradient-to-b from-purple-300 to-purple-500 rounded"></div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-purple-700">{product.price}</span>
                  <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="bg-purple-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe for Newsletter</h2>
        <p className="text-gray-600 mb-8">Get Discount Coupon</p>
        
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
  

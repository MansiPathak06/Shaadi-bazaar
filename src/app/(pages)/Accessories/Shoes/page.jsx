"use client"

import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Star, Sparkles } from 'lucide-react';

export default function FootwearShop() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const products = [
    { id: 1, name: 'Yellow Man Shoes', price: 49.00, oldPrice: 59.00, rating: 4, sale: true, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop' },
    { id: 2, name: 'Light Brown Shoes', price: 49.00, oldPrice: 59.00, rating: 5, sale: true, image: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400&h=400&fit=crop' },
    { id: 3, name: 'Brown Shoes', price: 59.00, rating: 4, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
    {
      id: 4,
      name: 'Nike Air Max 270',
      price: 159.00,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Adidas Ultraboost',
      price: 179.00,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Nike Air Force 1',
      price: 139.00,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center'
    },
    {
      id: 7,
      name: 'Jordan Retro High',
      price: 199.00,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop&crop=center'
    },
    {
      id: 8,
      name: 'Converse Chuck Taylor',
      price: 89.00,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center'
    }
  ];

  const bestSellers = [
    { id: 1, name: 'Yellow Man Shoes', price: 49.00, rating: 4, sale: true, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop' },

    { id: 2, name: 'Classic White Sneakers', price: 65.00, oldPrice: 79.00, rating: 4.5, sale: true, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },

    { id: 3, name: 'Black Running Shoes', price: 89.00, oldPrice: 110.00, rating: 4.8, sale: true, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop' },

    { id: 4, name: 'Canvas High-Top Sneakers', price: 45.00, oldPrice: 55.00, rating: 4.2, sale: true, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop' },

    { id: 5, name: 'Nike Air Jordan Retro', price: 150.00, oldPrice: 180.00, rating: 5.0, sale: true, image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop' },

    { id: 6, name: 'Leather Casual Loafers', price: 75.00, oldPrice: 95.00, rating: 4.6, sale: true, image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop' }
    
  ];

  const ProductCard = ({ product, showOldPrice = true }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        {product.sale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded z-10">
            SALE
          </span>
        )}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
        >
          <Heart
            size={18}
            className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          Heaven Men's Shoes
        </p>
        <h3 className="text-gray-800 font-medium mb-2">{product.name}</h3>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {showOldPrice && product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="text-lg font-semibold text-gray-800">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className=" bg-gray-50">
        <HeroSection />
      </div>


      {/* Features */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: '🚚', title: 'FREE SHIPPING & RETURN', desc: 'Free shipping on all orders over $99' },
          { icon: '💰', title: 'MONEY BACK GUARANTEE', desc: '100% money back guarantee' },
          { icon: '💬', title: 'ONLINE SUPPORT 24/7', desc: 'Lorem ipsum dolor sit amet' },
          { icon: '🔒', title: 'SECURE PAYMENT', desc: 'Lorem ipsum dolor sit amet' },
        ].map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="text-3xl">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Featured<span className="font-light">Products</span>
          </h2>
          <p className="text-gray-600">Amazing products selected carefully in our catalog</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Summer Collection */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Summer<span className="font-light">Collection</span>
          </h2>
          <p className="text-gray-600">Amazing products selected carefully in our catalog</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop"
              alt="Sport Shoes"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <h3 className="text-white text-3xl font-serif p-6">Sport Shoes</h3>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg h-36 flex items-center justify-center hover:bg-amber-800 transition-colors duration-300 cursor-pointer">
              <h3 className="text-white text-3xl font-serif">For Her</h3>
            </div>
            <div className="bg-gray-900 rounded-lg h-36 flex items-center justify-center hover:bg-amber-800 transition-colors duration-300 cursor-pointer">
              <h3 className="text-white text-3xl font-serif">For Him</h3>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=200&fit=crop"
                alt="Women Shoes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400&h=200&fit=crop"
                alt="Men Shoes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Best Seller<span className="font-light">Products</span>
          </h2>
          <p className="text-gray-600">Only the best sellers products in our catalog</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Brand Partners */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center gap-8 opacity-60">
            {['DAVID SMITH', 'NON JONES', 'GOLDEN GRID', 'STORM FASHION', 'GOLDEN MOTION', 'CABLE MOUNTAIN'].map((brand, i) => (
              <div key={i} className="text-gray-800 font-bold text-lg tracking-wider">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen p-6 md:p-12">
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              NIKE AIR<br />
              ZOOM SUPER<br />
              REP CORAL
            </h1>
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              SHOP NOW →
            </button>
          </div>

          {/* Right Content - Product Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Large "AIR" background text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-9xl md:text-[12rem] lg:text-[15rem] font-black text-pink-300">
                  AIR
                </span>
              </div>

              {/* Main Product Image */}
              <div className="relative z-10 flex justify-center">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center"
                    alt="Nike Air Zoom Super Rep Coral"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Bar */}
        <div className="flex flex-wrap justify-between items-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-12">
          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <span className="block text-gray-500 uppercase tracking-wide">BRAND</span>
              <span className="font-semibold">Nike Running</span>
            </div>
            <div>
              <span className="block text-gray-500 uppercase tracking-wide">BRAND</span>
              <span className="font-semibold">AIR</span>
            </div>
            <div>
              <span className="block text-gray-500 uppercase tracking-wide">COLORS</span>
              <span className="font-semibold">Super Rep Coral</span>
            </div>
            <div>
              <span className="block text-gray-500 uppercase tracking-wide">PRICE</span>
              <span className="font-semibold">$399.00</span>
            </div>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-400 transition-colors mt-4 md:mt-0">
            SHOP NOW →
          </button>
        </div>

        {/* Three Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* New Collections */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 text-center relative overflow-hidden group">
            <div className="relative z-10">
              {/* Product Image */}
              <div className="w-48 h-32 mx-auto mb-6 bg-white rounded-2xl shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=200&fit=crop&crop=center"
                  alt="New Nike Collection"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">New Collections</h3>

              <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:border-gray-500 hover:bg-white transition-all">
                SHOP NOW →
              </button>
            </div>
          </div>

          {/* For Women */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-200 rounded-3xl p-8 text-center relative overflow-hidden group">
            <div className="relative z-10">
              {/* Product Image */}
              <div className="w-48 h-32 mx-auto mb-6 bg-white rounded-2xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=200&fit=crop&crop=center"
                  alt="Nike Shoes for Women"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">For Women</h3>

              <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:border-gray-500 hover:bg-white transition-all">
                SHOP NOW →
              </button>
            </div>
          </div>

          {/* For Men */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 text-center relative overflow-hidden group">
            <div className="relative z-10">
              {/* Product Image */}
              <div className="w-48 h-32 mx-auto mb-6 bg-white rounded-2xl shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop&crop=center"
                  alt="Nike Shoes for Men"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">For Men</h3>

              <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:border-gray-500 hover:bg-white transition-all">
                SHOP NOW →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

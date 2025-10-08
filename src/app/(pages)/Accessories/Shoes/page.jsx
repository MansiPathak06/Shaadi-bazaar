"use client"

import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';

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
      
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Top Content with Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="inline-block bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
              NEW ARRIVAL 2025
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none">
              STEP INTO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                STYLE
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-md">
              Discover the perfect blend of comfort and fashion with our exclusive collection designed for modern lifestyles.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg">
                Explore Collection
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-400 transition-all hover:scale-105">
                View Lookbook
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500">Styles Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-500">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Product Display */}
          <div className="relative">
            {/* Decorative Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full blur-3xl opacity-50"></div>
            
            {/* Main Product Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="absolute top-6 right-6 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -30%
              </div>
              
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop&crop=center"
                alt="Featured Shoe"
                className="w-full h-80 object-contain mb-6"
              />
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Premium Runner X</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">$279</span>
                  <span className="text-lg text-gray-400 line-through">$399</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-pink-300 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Free Shipping</div>
                  <div className="text-xs text-gray-500">On orders over $100</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Categories Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Shop by Category</h2>
            <p className="text-gray-600">Find the perfect pair for every occasion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Running Shoes */}
            <div className="group bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
                    alt="Running Shoes"
                    className="w-full h-48 object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Running Shoes</h3>
                <p className="text-gray-600 mb-4">Performance meets comfort</p>
                
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all group-hover:scale-105">
                  Shop Now →
                </button>
              </div>
            </div>

            {/* Casual Sneakers */}
            <div className="group bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&crop=center"
                    alt="Casual Sneakers"
                    className="w-full h-48 object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Casual Sneakers</h3>
                <p className="text-gray-600 mb-4">Everyday style essentials</p>
                
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all group-hover:scale-105">
                  Shop Now →
                </button>
              </div>
            </div>

            {/* Sports Collection */}
            <div className="group bg-gradient-to-br from-gray-100 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop&crop=center"
                    alt="Sports Collection"
                    className="w-full h-48 object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sports Collection</h3>
                <p className="text-gray-600 mb-4">Engineered for athletes</p>
                
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all group-hover:scale-105">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        
      </div>
    </div>




  );
};

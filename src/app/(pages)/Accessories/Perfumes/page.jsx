'use client'

import React, { useState, useEffect, Fragment } from 'react';
import { ChevronDown, ShoppingBag, ShoppingCart, Heart, Star, ArrowRight, Play, Sparkles, Eye } from 'lucide-react';






const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-yellow-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">

          {/* Product Info - Left Side */}
          <div className="space-y-8 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              EXCLUSIVE ONLINE DEAL
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-yellow-600 bg-clip-text text-transparent">
                  Up To 75%
                </span>
                <br />
                <span className="text-slate-800 font-light">
                  Off Premium
                </span>
                <br />
                <span className="text-slate-600 font-light text-4xl md:text-5xl">
                  Fragrances
                </span>
              </h1>
            </div>

            {/* Offer Details */}
            <div className="space-y-4">
              <div className="text-xl md:text-2xl text-slate-600">
                Free shipping on orders over{' '}
                <span className="font-bold text-yellow-600 text-2xl md:text-3xl">
                  $99
                </span>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  30-day returns
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Authentic products
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Expert curation
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">SHOP NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">
                View Catalog
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-white"></div>
                </div>
                <span>2.4k+ happy customers</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Product Image - Right Side */}
          <div className="relative lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Floating Elements - Static */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20"></div>

              {/* Main Product Container */}
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Luxury Purple Perfume Bottle"
                  className="w-80 h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badge - Static */}
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  75% OFF
                </div>

                {/* Product Quick Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-sm font-semibold text-slate-800">Premium Collection</div>
                  <div className="text-xs text-slate-600">Limited Edition Fragrance</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-purple-600">$29.99</span>
                    <span className="text-sm text-slate-500 line-through">$119.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Static */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = () => {
  const products = [
    {
      id: 1,
      name: "Floral Essence Premium",
      price: 89,
      originalPrice: 120,
      rating: 5,
      reviews: 24,
      description: "A delicate blend of jasmine and rose petals",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Floral"
    },
    {
      id: 2,
      name: "Golden Luxury Scent",
      price: 95,
      rating: 4,
      reviews: 18,
      description: "Rich amber and vanilla notes with gold essence",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6183d4d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Luxury"
    },
    {
      id: 3,
      name: "Ruby Red Elegance",
      price: 75,
      rating: 5,
      reviews: 32,
      description: "Bold and passionate with red berry undertones",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Bold"
    },
    {
      id: 4,
      name: "Amber Sunset",
      price: 110,
      rating: 4,
      reviews: 15,
      description: "Warm amber with hints of citrus and musk",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Warm"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-16">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            Popular
          </button>
          <button className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-3 rounded-full border border-white/50 font-medium hover:bg-white transition-all duration-300">
            New Arrivals
          </button>
          <button className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-3 rounded-full border border-white/50 font-medium hover:bg-white transition-all duration-300">
            Best Seller
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex h-64 md:h-80">
                {/* Image Section - Left Side */}
                <div className="relative w-1/2 overflow-hidden">
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
                      {product.discount}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                    {product.category}
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="w-1/2 p-8 flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Rating */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-slate-500 font-medium">({product.reviews} reviews)</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-4">
                    {/* Price */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-slate-800">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-slate-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 transform hover:scale-[1.02] transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white/80 backdrop-blur-sm border border-white/50 text-slate-700 px-12 py-4 rounded-2xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

const PromoBanner = () => {
  const perfumeImages = [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    "https://images.unsplash.com/photo-1594736797933-d0d6183d4d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    "https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80",
    "https://images.unsplash.com/photo-1610461888750-10beb8d0f7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80"
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-white lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium shadow-xl">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
              <span className="uppercase tracking-wider font-bold">Celebrate Your Scent</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-white">Save</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent font-black text-6xl md:text-8xl">
                  25%
                </span>
                <br />
                <span className="text-white/90 font-light text-3xl md:text-4xl">
                  On All Premium
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text text-transparent font-light text-3xl md:text-4xl">
                  Collections
                </span>
              </h2>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-400/30">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Free worldwide shipping</span>
              </div>
              
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Limited time offer</span>
              </div>
              
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Authentic products</span>
              </div>
              
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-400/30">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">30-day returns</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  SHOP NOW
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
                View Collection
              </button>
            </div>

            {/* Timer/Urgency Element */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
              <div className="text-white/70 text-sm mb-2">🔥 Limited Time Offer Ends In:</div>
              <div className="flex gap-4 text-white font-bold">
                <div className="text-center">
                  <div className="text-2xl">02</div>
                  <div className="text-xs text-white/60">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">14</div>
                  <div className="text-xs text-white/60">HOURS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">35</div>
                  <div className="text-xs text-white/60">MINS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">42</div>
                  <div className="text-xs text-white/60">SECS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Showcase - Right Side */}
          <div className="relative lg:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full filter blur-2xl"></div>
              
              {/* Product Grid */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-3 gap-6">
                  {perfumeImages.map((image, i) => (
                    <div
                      key={i}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={image}
                          alt={`Premium Perfume ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        
                        {/* Quick Action Button */}
                        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <button className="w-full bg-white/90 backdrop-blur-sm text-slate-800 py-2 px-3 rounded-xl text-xs font-semibold hover:bg-white transition-all duration-200">
                            Quick View
                          </button>
                        </div>
                        
                        {/* Discount Badge */}
                        {i < 3 && (
                          <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                            25% OFF
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Collection Info */}
                <div className="mt-6 text-center">
                  <div className="text-white/90 font-semibold text-lg mb-2">Premium Collection 2025</div>
                  <div className="text-white/70 text-sm">Featuring 50+ exclusive fragrances</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-white/70 text-sm">Premium Brands</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-white/70 text-sm">Happy Customers</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-white/70 text-sm">Customer Support</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-2">99%</div>
            <div className="text-white/70 text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};


const SpecialOffers = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Rose Garden Elegance",
      originalPrice: 149,
      price: 99,
      discount: "33% OFF",
      image: "https://images.unsplash.com/photo-1610461888750-10beb8d0f7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      badge: "Bestseller",
      rating: 5,
      reviews: 127
    },
    {
      id: 2,
      name: "Pink Blossom Sunset",
      originalPrice: 99,
      price: 75,
      discount: "24% OFF",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      badge: "Limited Edition",
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: "Midnight Rose Passion",
      originalPrice: 169,
      price: 120,
      discount: "29% OFF",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
      badge: "New Arrival",
      rating: 5,
      reviews: 203
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 overflow-hidden">
      {/* Background Elements */}
   
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-rose-200/50 rounded-full px-6 py-2 text-sm font-medium text-rose-700 mb-6">
            <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            SPECIAL COLLECTION
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">
              Rose & Pink
            </span>
            <br />
            <span className="text-slate-700 font-light text-3xl md:text-4xl">
              Featured Fragrances
            </span>
          </h2>
          
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Indulge in our enchanting collection of rose-inspired perfumes, where romance meets elegance
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="relative">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {product.discount}
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                        <svg className="w-5 h-5 text-slate-700 group-hover/btn:text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                        <svg className="w-5 h-5 text-slate-700 group-hover/btn:text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-slate-500">({product.reviews})</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                        ${product.price}
                      </span>
                      <span className="text-lg text-slate-400 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-[1.02]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deal Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Big Deal Card */}
          <div className="relative bg-gradient-to-br from-rose-600 via-rose-700 to-pink-700 text-white p-10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
       
            
            {/* Floating Rose Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                LIMITED TIME OFFER
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Rose Collection
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  50% OFF
                </span>
              </h3>
              
              <p className="text-white/90 text-lg leading-relaxed">
                Save up to 50% on all rose-inspired fragrances. Limited stock available.
              </p>
              
              <button className="group bg-white text-rose-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  SHOP ROSES
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Best Collection Card */}
          <div className="relative bg-gradient-to-br from-pink-600 via-pink-700 to-rose-700 text-white p-10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
 
            {/* Floating Sparkle Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold">
                <span className="w-2 h-2 bg-pink-300 rounded-full animate-pulse"></span>
                PREMIUM COLLECTION
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Pink Paradise
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Buy 2 Get 1 Free
                </span>
              </h3>
              
              <p className="text-white/90 text-lg leading-relaxed">
                Get 2 premium pink fragrances and receive the 3rd one absolutely free this month.
              </p>
              
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  SHOP PINK
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Can't decide? Try our Rose & Pink Discovery Set
            </h3>
            <p className="text-slate-600 mb-6">
              Get 5 miniature rose and pink fragrances to find your perfect scent
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Shop Discovery Set - $39
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Floral Essence Premium",
      price: 89,
      originalPrice: 120,
      rating: 5,
      reviews: 24,
      description: "Delicate jasmine petals with morning dew essence",
      category: "Bestseller",
      badge: "Limited Edition",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      name: "Golden Luxury Scent",
      price: 95,
      rating: 4,
      reviews: 18,
      description: "Rich amber notes with 24k gold infusion",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6183d4d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Ruby Red Elegance",
      price: 75,
      rating: 5,
      reviews: 32,
      description: "Bold red berry fusion with velvet undertones",
      category: "Popular",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Amber Sunset",
      price: 110,
      rating: 4,
      reviews: 15,
      description: "Warm sunset amber with citrus highlights",
      category: "Premium",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 5,
      name: "Midnight Mystery",
      price: 85,
      rating: 5,
      reviews: 28,
      description: "Deep night blooms with mysterious allure",
      category: "New",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Vanilla Dreams",
      price: 90,
      rating: 4,
      reviews: 22,
      description: "Creamy vanilla bean with soft musk base",
      category: "Classic",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
  ];
  return (
    <>
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-yellow-50/30 relative overflow-hidden">
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f1f5f9" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div> */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full px-6 py-2 text-sm font-medium text-purple-700 mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            CURATED COLLECTION
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-purple-800 to-slate-800 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="text-slate-600 font-light text-4xl md:text-5xl">
              Fragrances
            </span>
          </h2>

          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our most coveted scents, carefully selected for their exceptional quality and timeless appeal
          </p>
        </div>

        {/* Modern Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 border border-white/50 shadow-xl">
            <div className="flex gap-1">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
                Popular
              </button>
              <button className="px-8 py-3 text-slate-600 hover:text-slate-800 hover:bg-white/50 rounded-xl font-medium transition-all duration-300">
                New Arrivals
              </button>
              <button className="px-8 py-3 text-slate-600 hover:text-slate-800 hover:bg-white/50 rounded-xl font-medium transition-all duration-300">
                Best Sellers
              </button>
              <button className="px-8 py-3 text-slate-600 hover:text-slate-800 hover:bg-white/50 rounded-xl font-medium transition-all duration-300">
                Limited Edition
              </button>
            </div>
          </div>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
          {products.map((product, index) => {
            // Create varied card sizes for bento grid effect
            const isLarge = product.featured;
            const cardClass = isLarge ? "lg:col-span-2 lg:row-span-2" : "";

            return (
              <div
                key={product.id}
                className={`group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] ${cardClass}`}
              >
                <div className="relative h-full flex flex-col">
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${isLarge ? 'h-96' : 'h-64'}`}>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
                      {product.category}
                    </div>

                    {/* Special Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg animate-pulse">
                        {product.badge}
                      </div>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-4">
                        <button className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                          <svg className="w-6 h-6 text-slate-700 group-hover/btn:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                        <button className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                          <svg className="w-6 h-6 text-slate-700 group-hover/btn:text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                          <svg className="w-6 h-6 text-slate-700 group-hover/btn:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6 5a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-6 flex-1 flex flex-col justify-between ${isLarge ? 'p-8' : ''}`}>
                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-slate-500 font-medium">({product.reviews} reviews)</span>
                    </div>

                    {/* Product Name */}
                    <h3 className={`font-bold text-slate-800 mb-3 leading-tight ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className={`text-slate-600 mb-6 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
                      {product.description}
                    </p>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-slate-800 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className={`text-slate-400 line-through ${isLarge ? 'text-lg' : 'text-sm'}`}>
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <button className={`bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 ${isLarge ? 'px-8 py-4 text-lg' : 'px-6 py-3'}`}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-white/70 backdrop-blur-sm border border-white/50 text-slate-700 px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Collections
          </button>
        </div>
      </div>
    </section>
    </>
  );
}


function Perfumes() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductCard />
      <FeaturedProducts />
      <PromoBanner />
      <SpecialOffers />
    </div>
  );
}

export default Perfumes;
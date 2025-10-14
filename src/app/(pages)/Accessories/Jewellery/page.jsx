"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Star } from "lucide-react";


const Jewellery = () => {
  const [favorites, setFavorites] = useState([]);

  // Hero Section Data
  const heroData = {
    title: "Exquisite Jewellery",
    subtitle: "GIFALA DESIGNER",
    description: "Discover timeless elegance with our curated collection of fine jewellery",
    buttonText: "Shop Best Seller",
    image: "/images/jewelry-hero.jpg",
  };

  // Featured Products - Best Sellers
  const bestSellers = [
    {
      id: 1,
      name: "Diamond Necklace Set",
      price: "₹2,49,999",
      originalPrice: "₹2,99,999",
      discount: "-17%",
      image: "https://i.pinimg.com/1200x/ad/ce/22/adce22f76f2cca8fc5105c3335679688.jpg",
      badge: "HOT",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Gold Earrings",
      price: "₹45,999",
      originalPrice: "₹55,999",
      discount: "-18%",
      image: "https://i.pinimg.com/1200x/af/ee/42/afee42159dc6e52eba8b3f2a5feb8f3a.jpg",
      badge: "HOT",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Pearl Bracelet",
      price: "₹32,999",
      originalPrice: "₹39,999",
      discount: "-17%",
      image: "https://i.pinimg.com/736x/86/ef/2d/86ef2dd5bf0de49641cef64eace765bf.jpg",
      badge: "HOT",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Ruby Ring",
      price: "₹78,999",
      originalPrice: "₹95,999",
      discount: "-18%",
      image: "https://i.pinimg.com/736x/52/89/f2/5289f21a1c55ee6b0275a8931d6fd609.jpg",
      badge: "HOT",
      rating: 4.9,
    },
  ];

  // Jewellery Collections
  const collections = [
    {
      id: 1,
      name: "Bridal Collection",
      image: "https://i.pinimg.com/1200x/13/83/59/138359354b82ff653e2581f766e4b17f.jpg",
      link: "/collections/bridal",
    },
    {
      id: 2,
      name: "Diamond Classics",
      image: "/images/diamond-collection.jpg",
      link: "/collections/diamond",
    },
    {
      id: 3,
      name: "Gold Elegance",
      image: "/images/gold-collection.jpg",
      link: "/collections/gold",
    },
    {
      id: 4,
      name: "Pearl Treasures",
      image: "/images/pearl-collection.jpg",
      link: "/collections/pearl",
    },
    {
      id: 5,
      name: "Gemstone Beauty",
      image: "https://i.pinimg.com/736x/ec/33/78/ec337802c82b112d175e256336361b08.jpg",
      link: "/collections/gemstone",
    },
    {
      id: 6,
      name: "Contemporary",
      image: "https://i.pinimg.com/1200x/57/2c/bd/572cbd1c8284d284c2bba424565f2067.jpg",
      link: "/collections/contemporary",
    },
    {
      id: 7,
      name: "Vintage Style",
      image: "https://i.pinimg.com/1200x/4e/93/c7/4e93c7e4bab23bc573fd690bbac7fcd7.jpg",
      link: "/collections/vintage",
    },
    {
      id: 8,
      name: "Temple Jewellery",
      image: "https://i.pinimg.com/1200x/ec/86/4c/ec864cc4bc06c910585ea31e9d558995.jpg",
      link: "/collections/temple",
    },
  ];

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroData.image}
            alt="Jewellery Collection"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <p className="text-rose-400 text-sm md:text-base font-medium tracking-widest mb-2 uppercase">
                {heroData.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
                {heroData.title}
              </h1>
              <div className="w-20 h-0.5 bg-rose-400 mb-6"></div>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-md">
                {heroData.description}
              </p>
              <button className="bg-rose-400 text-white px-8 py-3 rounded-sm font-medium text-sm tracking-wider hover:bg-rose-500 transition-all duration-300 shadow-lg">
                {heroData.buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Best Seller Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 mt-6">



            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                shop by seller
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Your Favorite Sellers, all in one place</p>
            </div>



            <div className="flex justify-center gap-4 md:gap-8 mb-8">
              <button className="text-sm md:text-base font-medium text-gray-800 border-b-2 border-rose-400 pb-2 px-2">
                Women
              </button>
              <button className="text-sm md:text-base font-medium text-gray-500 hover:text-gray-800 pb-2 px-2">
                Bridal
              </button>
              <button className="text-sm md:text-base font-medium text-gray-500 hover:text-gray-800 pb-2 px-2">
                Luxury
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image Container */}
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10 hover:bg-rose-50 transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      size={18}
                      className={
                        favorites.includes(product.id)
                          ? "text-rose-500 fill-rose-500"
                          : "text-gray-600"
                      }
                    />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400";
                    }}
                  />


                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-800">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                    <span className="text-sm text-red-500 font-medium">
                      {product.discount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* Collections Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              collection
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Where elegance meets sparkle</p>
          </div>


          {/* Collections Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={collection.link}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Collection Image */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500";
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Collection Name */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-base md:text-lg font-medium text-center">
                    {collection.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

    </div>
  );
};

export default Jewellery;

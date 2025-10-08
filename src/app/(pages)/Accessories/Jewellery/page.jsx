"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Star, ArrowRight, Instagram } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


const Jewellery = () => {
  const [favorites, setFavorites] = useState([]);

  // Hero Section Data
  const heroData = {
    title: "Let's Shop",
    subtitle: "Discover exquisite masterpieces designed for every occasion, where elegance meets timeless beauty.",
    buttonText: "SHOP COLLECTION",
    image: "/images/jewelry-hero.jpg",
  };

  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      name: "Rose Gold Necklace",
      image: "/images/jewelry-product-1.jpg",
      label: "SAMPLE PRODUCT",
    },
    {
      id: 2,
      name: "Diamond Earrings",
      image: "/images/jewelry-product-2.jpg",
      label: "SAMPLE PRODUCT 2",
    },
    {
      id: 3,
      name: "Pearl Bracelet",
      image: "/images/jewelry-product-3.jpg",
      label: "SAMPLE PRODUCT 3",
    },
    {
      id: 4,
      name: "Silver Ring Set",
      image: "/images/jewelry-product-4.jpg",
      label: "SAMPLE PRODUCT 4",
    },
  ];

  // Instagram Gallery
  const instagramPosts = [
    { id: 1, image: "/images/insta-1.jpg" },
    { id: 2, image: "/images/insta-2.jpg" },
    { id: 3, image: "/images/insta-3.jpg" },
    { id: 4, image: "/images/insta-4.jpg" },
    { id: 5, image: "/images/insta-5.jpg" },
    { id: 6, image: "/images/insta-6.jpg" },
  ];

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <>
      <Navbar/>
      <div className="w-full bg-gradient-to-b from-white to-rose-50">
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroData.image}
              alt="Jewelry Collection"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80";
              }}
            />
            <div className="absolute inset-0 bg-white/60"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-gray-800 mb-4 tracking-wide">
              {heroData.title}
            </h1>
            <div className="w-24 h-0.5 bg-rose-400 mx-auto mb-2"></div>
            <p className="text-base md:text-lg lg:text-xl font-bold text-gray-600
             max-w-2xl mx-auto mb-8 leading-relaxed px-4">
              {heroData.subtitle}
            </p>
            <button className="bg-rose-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-sm font-medium text-sm md:text-base tracking-widest hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {heroData.buttonText}
            </button>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-700 mb-2 tracking-wide">
                Featured Products
              </h2>
              <div className="w-20 h-0.5 bg-rose-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400";
                      }}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-rose-50"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        size={16}
                        className={
                          favorites.includes(product.id)
                            ? "text-rose-500 fill-rose-500"
                            : "text-gray-600"
                        }
                      />
                    </button>
                  </div>

                  {/* Product Label */}
                  <div className="p-4 text-center">
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-light">
                      {product.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jewelry Collections Showcase */}
<section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-700 mb-4">
        Explore our collections!
      </h2>
      <div className="w-20 h-0.5 bg-rose-400 mx-auto mb-4"></div>
      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        From timeless classics to contemporary designs, discover jewelry that tells your unique story
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Bridal Collection",
          description: "Exquisite pieces for your special day",
          image: "/images/bridal-collection.jpg",
          link: "/collections/bridal",
          tag: "BEST SELLERS",
        },
        {
          title: "Diamond Classics",
          description: "Timeless elegance in every design",
          image: "/images/diamond-collection.jpg",
          link: "/collections/diamonds",
          tag: "PREMIUM",
        },
        {
          title: "Gold Elegance",
          description: "Crafted with pure 22K gold",
          image: "/images/gold-collection.jpg",
          link: "/collections/gold",
          tag: "LUXURIOUS",
        },
        {
          title: "Contemporary",
          description: "Modern designs for the bold",
          image: "/images/modern-collection.jpg",
          link: "/collections/contemporary",
          tag: "TRENDING",
        },
      ].map((collection, index) => (
        <Link
          key={index}
          href={collection.link}
          className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Tag Badge */}
            <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {collection.tag}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-2">
                {collection.title}
              </h3>
              <p className="text-sm md:text-base text-rose-100 mb-4">
                {collection.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span>Explore Collection</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* Blog & Styling Tips Section */}
<section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-700 mb-4">
        Jewellry Journal
      </h2>
      <div className="w-20 h-0.5 bg-rose-400 mx-auto mb-4"></div>
      <p className="text-base md:text-lg text-gray-600">
        Expert advice, trends, and inspiration from our curators
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          image: "/images/blog-1.jpg",
          category: "Styling Tips",
          title: "How to Layer Necklaces Like a Pro",
          excerpt: "Master the art of layering delicate chains for an effortlessly chic look that works from day to night.",
          date: "Oct 5, 2025",
          readTime: "5 min read",
        },
        {
          image: "/images/blog-2.jpg",
          category: "Bridal Guide",
          title: "Choosing Your Perfect Wedding Ring",
          excerpt: "A comprehensive guide to finding the ring that will symbolize your love story for a lifetime.",
          date: "Oct 3, 2025",
          readTime: "8 min read",
        },
        {
          image: "/images/blog-3.jpg",
          category: "Trends 2025",
          title: "This Season's Must-Have Jewelry",
          excerpt: "Discover the hottest jewelry trends that are dominating runways and red carpets this fall.",
          date: "Oct 1, 2025",
          readTime: "6 min read",
        },
      ].map((post, index) => (
        <Link
          key={index}
          href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
          className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          {/* Blog Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600";
              }}
            />
            <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
              {post.category}
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-6">
            <h3 className="text-xl font-serif font-light text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 font-medium transition-colors group"
      >
        <span>View All Articles</span>
        <ArrowRight
          size={18}
          className="group-hover:translate-x-2 transition-transform"
        />
      </Link>
    </div>
  </div>
</section>
{/* Bento Grid Showcase Section */}
<section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-gray-700 mb-4">
        Signature Collections
      </h2>
      <div className="w-20 h-0.5 bg-rose-400 mx-auto mb-4"></div>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        Discover our most coveted pieces, each telling its own unique story
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[160px]">
      
      {/* Large Feature 1 - Spans 2x2 */}
      <Link
        href="/collections/diamond-classics"
        className="group relative col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <img
          src="/images/bento-diamond.jpg"
          alt="Diamond Classics"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl md:text-2xl font-serif font-light mb-1">
              Diamond Classics
            </h3>
            <p className="text-xs md:text-sm text-rose-200">Timeless Elegance</p>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          BEST SELLER
        </div>
      </Link>

      {/* Small Box 1 */}
      <Link
        href="/images/gold-earrings"
        className="group relative col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/bento-earrings.jpg"
          alt="Gold Earrings"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <p className="text-xs font-medium">Earrings</p>
          </div>
        </div>
      </Link>

      {/* Small Box 2 */}
      <Link
        href="/images/statement-rings"
        className="group relative col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/bento-rings.jpg"
          alt="Statement Rings"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <p className="text-xs font-medium">Rings</p>
          </div>
        </div>
      </Link>

      {/* Vertical Box */}
      <Link
        href="/images/pearl-collection"
        className="group relative col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/bento-pearls.jpg"
          alt="Pearl Collection"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=300";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
          <div className="absolute bottom-4 left-3 right-3 text-white">
            <h4 className="text-sm md:text-base font-serif font-light mb-1">
              Pearl Treasures
            </h4>
            <p className="text-xs text-rose-200">Lustrous Beauty</p>
          </div>
        </div>
      </Link>

      {/* Vertical Box 2 */}
      <Link
        href="/images/bento-bridal.jpg"
        className="group relative col-span-1 row-span-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/bento-bridal.jpg"
          alt="Bridal Collection"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=300";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent">
          <div className="absolute bottom-4 left-3 right-3 text-white">
            <h4 className="text-sm md:text-base font-serif font-light mb-1">
              Bridal
            </h4>
            <p className="text-xs text-rose-200">Forever Love</p>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-white text-rose-600 p-1.5 rounded-full">
          <Heart size={14} fill="currentColor" />
        </div>
      </Link>

      {/* Wide Box */}
      <Link
        href="/images/bento-necklaces.jpg"
        className="group relative col-span-2 row-span-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/bento-necklaces.jpg"
          alt="Necklaces"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent">
          <div className="absolute bottom-3 left-4 text-white">
            <h4 className="text-base md:text-lg font-serif font-light">
              Necklace Collection
            </h4>
          </div>
        </div>
      </Link>

      {/* Large Feature 2 - Spans 2x2 */}
      <Link
        href="images/bento-gemstone.jpg"
        className="group relative col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        <img
          src="/images/bento-gemstone.jpg"
          alt="Gemstone Collection"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1611622537796-0b607f200733?w=600";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl md:text-2xl font-serif font-light mb-1">
              Colored Gemstones
            </h3>
            <p className="text-xs md:text-sm text-rose-200">Vibrant Hues</p>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          NEW
        </div>
      </Link>

      {/* Small Box 3 */}
      <Link
        href="/collections/bracelets"
        className="group relative col-span-1 row-span-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/bento-bracelets.jpg"
          alt="Bracelets"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <p className="text-xs font-medium">Bracelets</p>
          </div>
        </div>
      </Link>

      {/* Small Box 4 */}
      <Link
        href="/collections/custom"
        className="group relative col-span-1 row-span-1 rounded-lg overflow-hidden bg-gradient-to-br from-rose-400 to-rose-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <div className="text-center text-white p-3">
          <Star size={24} className="mx-auto mb-2" fill="white" />
          <p className="text-xs font-semibold">Custom Design</p>
        </div>
      </Link>

      {/* Wide Box 2 */}
      <Link
        href="/collections/watches"
        className="group relative col-span-2 row-span-1 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/bento-watches.jpg"
          alt="Luxury Watches"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent">
          <div className="absolute bottom-3 left-4 text-white">
            <h4 className="text-base md:text-lg font-serif font-light">
              Luxury Timepieces
            </h4>
          </div>
        </div>
      </Link>
    </div>

    {/* CTA */}
    <div className="text-center mt-12">
      <button className="bg-rose-500 text-white px-8 py-4 rounded-sm font-medium hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Explore All Collections
      </button>
    </div>
  </div>
</section>

       
      </div>
     <Footer/>
    </>
  );
};

export default Jewellery;

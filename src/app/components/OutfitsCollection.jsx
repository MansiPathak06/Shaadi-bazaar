"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const OutfitsCollection = () => {
  const categories = [
    {
      title: "CASUAL WEAR",
      subtitle: "SHOP",
      image: "/images/casual-wear.jpg",
      link: "/outfits/casual-wear",
    },
    {
      title: "ELEGANT DRESSES",
      subtitle: "SHOP",
      image: "/images/elegant-dresses.jpg",
      link: "/outfits/elegant-dresses",
    },
    {
      title: "SEASONAL TRENDS",
      subtitle: "SHOP",
      image: "/images/wedding-dress.jpg",
      link: "/outfits/seasonal-trends",
    },
  ];

  const mensCollection = {
    title: "Men's Collection",
    mainImage: "/images/main-men-image.jpg",
    description: "Discover sophisticated styles for the modern gentleman",
    link: "/outfits/mens-collection",
    featured: [
      {
        title: "Groomwear Essentials",
        subtitle: "Sherwani, Suits & Indo-Western",
        image: "/images/men.jpg",
        link: "/outfits/mens-groomwear",
      },
      {
        title: "Casual Elegance",
        subtitle: "Kurtas, Shirts & Casual Outfits",
        image: "/images/mens-casual.jpg",
        link: "/outfits/mens-casual",
      },
      {
        title: "Formal Wear",
        subtitle: "Blazers, Tuxedos & Suits",
        image: "/images/mens-formal.jpg",
        link: "/outfits/mens-formal",
      },
      {
        title: "Traditional Attire",
        subtitle: "Kurta Sets & Ethnic Wear",
        image: "/images/mens-traditional.jpg",
        link: "/outfits/mens-traditional",
      },
    ],
  };

  const womensCollection = {
    title: "Women's Collection",
    mainImage: "/images/womens-main.jpg",
    description: "Elegant designs for every celebration",
    link: "/outfits/womens-collection",
    featured: [
      {
        title: "Bridal Couture",
        subtitle: "Lehengas, Sarees & Anarkalis",
        image: "/images/womens-bridal.jpg",
        link: "/outfits/womens-bridal",
      },
      {
        title: "Contemporary Fashion",
        subtitle: "Gowns, Dresses & Western Wear",
        image: "/images/womens-contemporary.jpg",
        link: "/outfits/womens-contemporary",
      },
      {
        title: "Traditional Elegance",
        subtitle: "Salwar Suits & Ethnic Wear",
        image: "/images/womens-traditional.jpg",
        link: "/outfits/womens-traditional",
      },
      {
        title: "Party & Evening Wear",
        subtitle: "Designer Outfits & Cocktail Dresses",
        image: "/images/womens-party.jpg",
        link: "/outfits/womens-party",
      },
    ],
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-rose-50 px-4 sm:px-6 pt-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Categories Section */}
        <h1 className="uppercase font-medium text-5xl md:text-5xl lg:text-6xl text-center mb-3 font-serif">
          outfit <span className="text-rose-500">Collection</span>
        </h1>
        <p className="text-gray-600 text-center text-base md:text-lg lg:text-xl mb-12 px-4">
          Designed for those who seek style beyond trends, embracing elegance in every detail
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[5/5] bg-rose-100 relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/women-lehnga.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-6 md:bottom-7 left-1/2 transform -translate-x-1/2 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 bg-white/90 rounded-full flex items-center justify-center">
                  <span className="text-rose-500 text-lg md:text-xl">✦</span>
                </div>
                <h3 className="text-white font-medium text-xl md:text-2xl tracking-wide">
                  {category.title}
                </h3>
                <p className="text-sm text-white/90 mt-1">{category.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Men's Collection Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-gray-900 mb-2 capitalize">
              men's <span className="text-rose-500">collection</span>
            </h2>
            <p className="text-gray-600 text-sm">{mensCollection.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {/* Left: Main Image */}
            <Link
              href={mensCollection.link}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-[350px] lg:h-[555px] bg-rose-100 relative overflow-hidden">
                <img
                  src={mensCollection.mainImage}
                  alt={mensCollection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/images/main-men-groomwear.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5 text-white">
                <h3 className="text-lg md:text-xl font-serif mb-1">
                  Shop Your Elegant
                  <br />
                  <span className="italic">Men&apos;s Attire</span>
                </h3>
                <p className="text-xs text-white/90 mb-2">
                  Discover contemporary styles crafted for the modern gentleman
                </p>
                <button className="bg-white text-rose-500 px-4 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-rose-50 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  SHOP NOW
                  <ArrowRight size={14} />
                </button>
              </div>
            </Link>

            {/* Right: Featured Items Grid */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {mensCollection.featured.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-[200px] lg:h-[270px] bg-gradient-to-br from-rose-200 to-rose-100 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>

                  <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                    <h4 className="text-xs md:text-sm font-bold mb-0.5">{item.title}</h4>
                    <p className="text-xs text-white/80">{item.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Women's Collection Section */}
        <section className="pb-0 mb-0">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-gray-900 mb-2 capitalize">
              Women's <span className="text-rose-500">collection</span>
            </h2>
            <p className="text-gray-600">{mensCollection.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {/* Left: Featured Items Grid */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 lg:order-1">
              {womensCollection.featured.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-[200px] lg:h-[270px] bg-gradient-to-br from-rose-200 to-pink-100 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent"></div>
                  </div>

                  <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                    <h4 className="text-xs md:text-sm font-bold mb-0.5">{item.title}</h4>
                    <p className="text-xs text-white/80">{item.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right: Main Image */}
            <Link
              href={womensCollection.link}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 lg:order-2"
            >
              <div className="h-[350px] lg:h-[555px] bg-rose-100 relative overflow-hidden">
                <img
                  src={womensCollection.mainImage}
                  alt={womensCollection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 right-3 md:right-5 text-white">
                <h3 className="text-lg md:text-xl font-serif mb-1">
                  Shop Your Elegant
                  <br />
                  <span className="italic">Women&apos;s Attire</span>
                </h3>
                <p className="text-xs text-white/90 mb-2">
                  Exquisite designs for every celebration and occasion
                </p>
                <button className="bg-white text-rose-500 px-4 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-rose-50 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
                  SHOP NOW
                  <ArrowRight size={14} />
                </button>
              </div>
            </Link>
          </div>
        </section>

      
      </div>
    </div>
  );
};

export default OutfitsCollection;

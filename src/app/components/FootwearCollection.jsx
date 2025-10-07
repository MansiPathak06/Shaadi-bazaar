"use client";

import React from "react";
import Link from "next/link";

const FootwearCollection = () => {
  const footwearItems = [
    {
      title: "Steve Madden",
      description: "A trendy global footwear brand known for its bold, fashion-forward designs that blend street style with chic sophistication.",
      image: "https://i.pinimg.com/736x/50/08/bd/5008bd630bddce99fd84cffadfc88b84.jpg",
      link: "/footwear/block-heels",
      alignment: "right",
    },
    {
      title: "Aldo",
      description: "This classic shape and pretty color make for a chic, yet sophisticated look.",
      image: "https://i.pinimg.com/736x/bc/1b/9e/bc1b9eb0a748ec71453263fec5150750.jpg",
      link: "/footwear/dorsay",
      alignment: "left",
    },
    {
      title: "Bata",
      description: "A trusted global footwear brand offering affordable, durable, and comfortable shoes for everyday wear.",
      image: "https://i.pinimg.com/1200x/6f/d8/47/6fd84769968ae5a835efaff6a1ed1bae.jpg",
      link: "/footwear/slippers",
      alignment: "right",
    },
  ];

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mt-12 mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-2 capitalize">
            Footwear <span className="text-rose-500">Collection</span>
          </h2>
          <p className="text-gray-600 text-center text-xl mb-12">
            Step into elegance with our curated collection of premium footwear
          </p>
        </div>

        {/* Footwear Grid */}
        <div>
          {footwearItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 0 ? "" : "lg:grid-flow-dense"
                }`}
            >
              {/* Image Section */}
              <Link
                href={item.link}
                className={`group relative overflow-hidden ${index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
                  }`}
              >
                <div className="aspect-[4/3] relative bg-rose-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Link>

              {/* Text Section */}
              <div
                className={`flex items-center justify-center font-serif bg-gradient-to-br from-rose-50 to-rose-50 p-2 sm:p-12 ${index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
                  }`}
              >
                <div className="max-w-lg">
                  <h3 className="text-5xl sm:text-5xl  text-gray-900 mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-xl mb-6">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-block bg-gray-800 hover:bg-rose-500 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    SHOP
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Additional Categories Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", link: "/footwear/heels" },
            { name: "Flats", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400", link: "/footwear/flats" },
            { name: "Sandals", image: "https://images.unsplash.com/photo-1603808033587-38d1f5d4caa1?w=400", link: "/footwear/sandals" },
            { name: "Boots", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400", link: "/footwear/boots" },
          ].map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-lg font-bold">{category.name}</h4>
                  <div className="w-12 h-0.5 bg-rose-500 mt-2 group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </div>
  );
};

export default FootwearCollection;

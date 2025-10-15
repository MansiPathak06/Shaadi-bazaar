// 'use client';

// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles, ShoppingBag, Watch, Footprints, Scissors, Droplet } from 'lucide-react';

// const CollectionHeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const collections = [
//     {
//       id: 1,
//       title: 'JEWELLERY',
//       description: 'Discover our exquisite collection of handcrafted jewellery pieces that add elegance to every moment',
//       image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop',
//       icon: Sparkles,
//       color: 'from-purple-600/80 to-pink-600/80'
//     },
//     {
//       id: 2,
//       title: 'BAGS & PURSES',
//       description: 'Premium leather bags and purses designed for the modern lifestyle with timeless sophistication',
//       image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200&h=800&fit=crop',
//       icon: ShoppingBag,
//       color: 'from-amber-600/80 to-orange-600/80'
//     },
//     {
//       id: 3,
//       title: 'WATCHES',
//       description: 'Luxury timepieces that blend precision engineering with stunning design aesthetics',
//       image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&h=800&fit=crop',
//       icon: Watch,
//       color: 'from-blue-600/80 to-cyan-600/80'
//     },
//     {
//       id: 4,
//       title: 'SHOES',
//       description: 'Step into style with our premium footwear collection crafted for comfort and elegance',
//       image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=800&fit=crop',
//       icon: Footprints,
//       color: 'from-red-600/80 to-rose-600/80'
//     },
//     {
//       id: 5,
//       title: 'HAIR ACCESSORIES',
//       description: 'Elevate your hairstyle with our stunning collection of accessories and ornaments',
//       image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=800&fit=crop',
//       icon: Scissors,
//       color: 'from-emerald-600/80 to-teal-600/80'
//     },
//     {
//       id: 6,
//       title: 'PERFUMES',
//       description: 'Immerse yourself in our signature fragrances that capture essence and sophistication',
//       image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=800&fit=crop',
//       icon: Droplet,
//       color: 'from-violet-600/80 to-purple-600/80'
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % collections.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % collections.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 md:p-8">
//       <div className="w-full max-w-7xl">
//         {/* Main Slider */}
//         <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
//           {collections.map((collection, index) => {
//             const Icon = collection.icon;
//             return (
//               <div
//                 key={collection.id}
//                 className={`absolute inset-0 transition-opacity duration-1000 ${
//                   index === currentSlide ? 'opacity-100' : 'opacity-0'
//                 }`}
//               >
//                 <img
//                   src={collection.image}
//                   alt={collection.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-r ${collection.color}`}>
//                   <div className="h-full flex items-center px-8 md:px-16 lg:px-24">
//                     <div className="max-w-2xl">
//                       <div className="flex items-center gap-3 mb-4">
//                         <Icon className="w-10 h-10 text-white" />
//                         <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider drop-shadow-lg">
//                           {collection.title}
//                         </h1>
//                       </div>
//                       <p className="text-white/95 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
//                         {collection.description}
//                       </p>
//                       <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl">
//                         Explore Collection
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Collection Preview Cards */}
//           <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
//             {[currentSlide, (currentSlide + 1) % collections.length, (currentSlide + 2) % collections.length].map((idx) => {
//               const collection = collections[idx];
//               const Icon = collection.icon;
//               return (
//                 <div
//                   key={idx}
//                   onClick={() => goToSlide(idx)}
//                   className="w-48 h-64 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl bg-white"
//                 >
//                   <div className="relative h-full">
//                     <img
//                       src={collection.image}
//                       alt={collection.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-80 hover:opacity-70 transition-opacity`}>
//                       <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                         <Icon className="w-6 h-6 mb-2" />
//                         <h3 className="font-bold text-sm">{collection.title}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-3 mt-8">
//           {collections.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentSlide
//                   ? 'bg-gray-800 w-12 h-3'
//                   : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Quick Access Categories */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
//           {collections.map((collection, index) => {
//             const Icon = collection.icon;
//             return (
//               <div
//                 key={collection.id}
//                 onClick={() => goToSlide(index)}
//                 className="bg-white rounded-2xl p-6 text-center cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//               >
//                 <div className="flex justify-center mb-3">
//                   <div className={`bg-gradient-to-br ${collection.color} p-3 rounded-xl`}>
//                     <Icon className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//                 <h4 className="font-semibold text-gray-800 text-sm">{collection.title}</h4>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollectionHeroSlider;

"use client"

import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Watch, Footprints, Scissors, Droplet } from 'lucide-react';

const CollectionShowcase = () => {
    const [activeCard, setActiveCard] = useState(0);

    const collections = [
        {
            id: 1,
            title: 'Jewellery',
            description: 'Exquisite handcrafted pieces',
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
            icon: Sparkles,
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            id: 2,
            title: 'Bags & Purses',
            description: 'Premium leather collection',
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=600&fit=crop',
            icon: ShoppingBag,
            gradient: 'from-amber-500 to-orange-500'
        },
        {
            id: 3,
            title: 'Watches',
            description: 'Luxury timepieces',
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=600&fit=crop',
            icon: Watch,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            id: 4,
            title: 'Shoes',
            description: 'Premium footwear',
            image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
            icon: Footprints,
            gradient: 'from-red-500 to-rose-500'
        },
        {
            id: 5,
            title: 'Hair Accessories',
            description: 'Stunning accessories',
            image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop',
            icon: Scissors,
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            id: 6,
            title: 'Perfumes',
            description: 'Signature fragrances',
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=600&fit=crop',
            icon: Droplet,
            gradient: 'from-violet-500 to-purple-500'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % collections.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Our Collections
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover luxury across every category
                    </p>
                </div>

                {/* Main Feature Card */}
                <div className="relative mb-16">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-96 md:h-auto overflow-hidden">
                                {collections.map((collection, index) => {
                                    const Icon = collection.icon;
                                    return (
                                        <div
                                            key={collection.id}
                                            className={`absolute inset-0 transition-all duration-700 ${index === activeCard ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                                                }`}
                                        >
                                            <img
                                                src={collection.image}
                                                alt={collection.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-40`}></div>
                                            <div className="absolute top-6 left-6">
                                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                                                    <Icon className="w-8 h-8 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Content Side */}
                            <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                                <div className="relative h-64">
                                    {collections.map((collection, index) => (
                                        <div
                                            key={collection.id}
                                            className={`absolute inset-0 transition-all duration-700 ${index === activeCard ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                                                }`}
                                        >
                                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                                {collection.title}
                                            </h2>
                                            <p className="text-xl text-gray-600 mb-8">
                                                {collection.description}
                                            </p>
                                            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                                Explore Collection
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Progress Indicators */}
                                <div className="flex gap-2 mt-8">
                                    {collections.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveCard(index)}
                                            className="relative h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden"
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gray-900 transition-all duration-300 ${index === activeCard ? 'w-full' : 'w-0'
                                                    }`}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Collections Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {collections.map((collection, index) => {
                        const Icon = collection.icon;
                        return (
                            <div
                                key={collection.id}
                                onClick={() => setActiveCard(index)}
                                className={`group cursor-pointer transition-all duration-500 ${index === activeCard ? 'scale-105' : 'scale-100 hover:scale-105'
                                    }`}
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={collection.image}
                                            alt={collection.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                                        <div className="absolute top-3 right-3">
                                            <div className={`bg-gradient-to-br ${collection.gradient} p-2.5 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                                            {collection.title}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {collection.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CollectionShowcase;

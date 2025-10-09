'use client'

import React, { useState } from 'react';
import { Heart, Sparkles, Camera, Phone, Mail, MapPin, Menu, X, ChefHat, Crown, Gem, Users, Calendar, Award, CheckCircle, Star, Utensils, FlowerIcon as Flower, Clock } from 'lucide-react';

import LowerHeading from '@/app/components/ui/LowerHeading';

export default function WeddingCateringWebsite() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const testimonials = [
        {
            text: "They made our wedding feel like a dream — everything was perfect from décor to food!",
            author: "Riya & Aarav, 2024",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        },
        {
            text: "The team blended tradition with modern elegance so beautifully. Every guest was amazed.",
            author: "Saanvi & Krish",
            image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2447&q=80"
        },
        {
            text: "Their attention to detail is unmatched. Every flavor, every flower felt personalized.",
            author: "Isha & Rajan",
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        }
    ];

    const packages = [
        {
            name: "Classic Charm",
            icon: <Gem className="w-12 h-12 text-amber-600" />,
            features: ["Elegant décor", "Standard catering", "Floral setup"],
            description: "Perfect for intimate celebrations"
        },
        {
            name: "Premium Delight",
            icon: <Crown className="w-12 h-12 text-amber-600" />,
            features: ["Custom themes", "Curated gourmet menu", "Entertainment coordination"],
            description: "Perfect blend of luxury and warmth"
        },
        {
            name: "Royal Affair",
            icon: <Award className="w-12 h-12 text-amber-600" />,
            features: ["Designer décor", "Luxury dining experience", "Full event management"],
            description: "Your grand wedding deserves nothing less"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">


            {/* Hero Section */}
            <section className="relative h-screen max-h-[700px] mx-6 mt-6 rounded-3xl overflow-hidden"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 to-stone-900/70"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

                <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                        Crafting Unforgettable<br />
                        <span className="font-semibold">Moments with Taste</span><br />
                        and Elegance
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
                        From the fragrance of fresh flowers to the flavor of fine cuisine,<br />
                        we design weddings that linger in hearts forever.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-stone-800 px-8 py-4 rounded-lg hover:bg-stone-100 transition flex items-center justify-center gap-2 text-sm font-medium">
                            <Heart size={18} /> Plan Your Dream Wedding
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition flex items-center justify-center gap-2 text-sm font-medium">
                            <Camera size={18} /> Explore Our Work
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gradient-to-br from-amber-100 to-stone-200 rounded-3xl p-12 h-96 flex flex-col justify-center items-center text-center relative overflow-hidden"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2447&q=80')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundBlendMode: 'overlay'
                            }}>
                            <div className="absolute inset-0 bg-amber-100/90"></div>
                            <div className="relative z-10">
                                <div className="text-7xl font-bold text-stone-700 mb-4">150+</div>
                                <div className="text-xl text-stone-600">Beautiful Weddings</div>
                                <div className="text-sm text-stone-500 mt-2">Years of Excellence</div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
                                Turning Love Stories into<br />
                                <span className="font-semibold">Timeless Celebrations</span>
                            </h2>
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                At Eternal Elegance, we believe every couple deserves a wedding that mirrors their unique story. With years of experience in luxury décor and gourmet catering, our team combines art, taste, and passion to create breathtaking experiences.
                            </p>
                            <p className="text-stone-600 mb-8 leading-relaxed">
                                From royal palaces to garden weddings, our signature lies in elegant detailing, flavorful perfection, and seamless execution. Let us handle every detail — so you can simply live the moment.
                            </p>
                            <div className="bg-amber-50 border-l-4 border-amber-700 p-6 rounded-r-lg">
                                <p className="text-stone-700 italic">
                                    "We don't just organize weddings — we craft emotions, plated and decorated to perfection."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Catering Section */}
            <section className="pt-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <LowerHeading title='A Symphony Of Flavors' tagline='Designed For Your Celebration' />

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 relative overflow-hidden"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundBlendMode: 'overlay'
                            }}>
                            <div className="absolute inset-0 bg-stone-50/90"></div>
                            <div className="relative z-10">
                                <ChefHat className="w-12 h-12 text-amber-600 mb-4" />
                                <h3 className="text-2xl font-medium text-stone-800 mb-4">Customized Menus</h3>
                                <p className="text-stone-600 mb-4">Our culinary team curates unforgettable menus — where every dish tells a story of craftsmanship and love.</p>
                                <p className="text-stone-500 text-sm italic mt-6">Our chefs craft menus that leave lasting impressions.</p>

                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 relative overflow-hidden"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundBlendMode: 'overlay'
                            }}>
                            <div className="absolute inset-0 bg-amber-50/90"></div>
                            <div className="relative z-10">
                                <Utensils className="w-12 h-12 text-amber-600 mb-4" />
                                <h3 className="text-2xl font-medium text-stone-800 mb-4">Live Food Counters</h3>
                                <p className="text-stone-600 mb-4">From tandoor flames to dessert artistry, experience culinary theater at your celebration.</p>
                                <p className="text-stone-500 text-sm italic mt-6">Premium ingredients, handpicked produce, and gourmet selections crafted with passion.</p>
                            </div>
                        </div>
                    </div>

                    {/* New Gallery Section with Food Images */}
                    <div className="mb-12">
                        <LowerHeading title='Flavors to Remember' tagline='Flavors crafted with love' />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="group relative overflow-hidden rounded-xl aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Indian Wedding Buffet"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-medium">Traditional Buffet</p>
                                        <p className="text-sm opacity-90">Authentic Indian Cuisine</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Live Cooking Station"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-medium">Live Stations</p>
                                        <p className="text-sm opacity-90">Fresh & Interactive</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1606787620161-f768c825844e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Elegant Food Presentation"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-medium">Gourmet Plating</p>
                                        <p className="text-sm opacity-90">Artful Presentation</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Dessert Station"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-medium">Sweet Delights</p>
                                        <p className="text-sm opacity-90">Dessert Paradise</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Live Counter Highlights */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-100">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                        alt="Chaat Counter"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-stone-800 mb-2">Chaat Counter</h4>
                                <p className="text-stone-600 text-sm">Interactive pani puri, bhel puri, and regional street food specialties</p>
                            </div>

                            <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-100">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                        alt="Tandoor Station"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-stone-800 mb-2">Tandoor Station</h4>
                                <p className="text-stone-600 text-sm">Fresh naans, kebabs, and tandoori specialties prepared live</p>
                            </div>

                            <div className="bg-stone-50 rounded-xl p-6 text-center border border-stone-100">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1563379091138-acf87743cea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                        alt="Dessert Station"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-stone-800 mb-2">Dessert Theater</h4>
                                <p className="text-stone-600 text-sm">Live jalebi making, kulfi counter, and artisanal sweet creations</p>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Quote Section with Food Background */}
                    <div className="relative bg-amber-700 text-white rounded-2xl p-12 text-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <img
                                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                                alt="Elegant Food Display"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ChefHat className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-2xl font-light italic mb-4">
                                "Cooking is love made visible — and your wedding deserves nothing less."
                            </p>
                            <div className="flex justify-center items-center space-x-2 mt-6">
                                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                                <div className="w-8 h-0.5 bg-white/60"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-8 h-0.5 bg-white/60"></div>
                                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Wedding Food Stalls Gallery Section */}
            <section className="pb-12 pt-22 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
                <div className="max-w-7xl mx-auto">

                    <LowerHeading title='Food Stalls & Live Counters' tagline='Interactive culinary experiences that bring flavor to life' />

                    {/* Hero Food Stall Image */}
                    <div className="mb-16 relative h-96 rounded-3xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Wedding Food Stalls Setup"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-center">
                            <h3 className="text-4xl font-light text-white mb-4">
                                Live Culinary <span className="font-semibold">Theater</span>
                            </h3>
                            <p className="text-white/90 text-lg max-w-2xl mx-auto">
                                Watch master chefs craft delicious experiences right before your eyes
                            </p>
                        </div>
                    </div>

                    {/* Main Food Stalls Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                        {/* Street Food Corner */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Indian Street Food Stall"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <ChefHat className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-semibold text-stone-800">Street Food Corner</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Authentic pani puri, bhel puri, and regional chaat specialties served fresh</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs">Pani Puri</span>
                                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs">Bhel Puri</span>
                                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs">Sev Puri</span>
                                </div>
                            </div>
                        </div>

                        {/* Tandoor Station */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Tandoor Cooking Station"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Live Fire
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Utensils className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-semibold text-stone-800">Tandoor Station</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Fresh naans, succulent kebabs, and tandoori specialties cooked in traditional clay ovens</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs">Butter Naan</span>
                                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs">Seekh Kebab</span>
                                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs">Paneer Tikka</span>
                                </div>
                            </div>
                        </div>

                        {/* Dessert Theater */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1563379091138-acf87743cea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Live Jalebi Making"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Sweet Magic
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Sparkles className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-semibold text-stone-800">Dessert Theater</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Live jalebi making, kulfi station, and artisanal sweet creations prepared fresh</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">Fresh Jalebi</span>
                                    <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">Kulfi Bar</span>
                                    <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">Rabri</span>
                                </div>
                            </div>
                        </div>

                        {/* International Fusion */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="International Food Station"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Global Fusion
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Crown className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-semibold text-stone-800">International Fusion</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Continental delicacies, pasta stations, and global cuisine with an Indian twist</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">Live Pasta</span>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">Wood Pizza</span>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">Sliders</span>
                                </div>
                            </div>
                        </div>

                        {/* Beverage Bar */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Beverage Station"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Fresh & Cool
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Gem className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-semibold text-stone-800">Beverage Bar</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Fresh lassi, thandai, mocktails, and traditional beverages served chilled</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">Mango Lassi</span>
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">Thandai</span>
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">Mocktails</span>
                                </div>
                            </div>
                        </div>

                        {/* Regional Specialties */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Regional Indian Food"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Traditional
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Award className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-semibold text-stone-800">Regional Specialties</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Authentic regional cuisines from across India, prepared by specialty chefs</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">South Indian</span>
                                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">Rajasthani</span>
                                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">Bengali</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Featured Stall Highlight */}
                    <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-stone-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20"></div>

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-light mb-4">
                                Interactive <span className="font-semibold">Culinary Journey</span>
                            </h3>
                            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                                Experience the art of cooking as master chefs prepare your favorite dishes right before your eyes. Every stall tells a story, every bite creates a memory.
                            </p>
                            <div className="flex justify-center items-center space-x-4">
                                <div className="w-16 h-0.5 bg-white/60"></div>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="w-16 h-0.5 bg-white/60"></div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>





            {/* Décor Section */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">

                    <LowerHeading title='Designs That Speak Love' tagline='Décor is the heart of every celebration.' />

                    {/* Modern Grid Layout with Varied Card Sizes */}
                    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">

                        {/* Large Featured Card - Royal Grandeur */}
                        <div className="md:col-span-3 lg:col-span-4 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-80 lg:h-96 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-500"
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <Crown className="w-12 h-12 text-white drop-shadow-lg" />
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Royal Grandeur</h3>
                                    <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                                        Rich hues, crystal chandeliers, and regal backdrops that transform venues into palatial celebrations
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Medium Card - Bohemian Bliss */}
                        <div className="md:col-span-3 lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-64">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-yellow-500/20 group-hover:from-green-500/30 group-hover:to-yellow-500/30 transition-all duration-300"
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <Flower className="w-8 h-8 text-white drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-stone-800 mb-2">Bohemian Bliss</h3>
                                <p className="text-stone-600 text-sm">Earthy textures, dreamcatchers, and whimsical natural setups</p>
                            </div>
                        </div>

                        {/* Tall Card - Modern Minimal */}
                        <div className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-gray-500/20 group-hover:from-blue-500/30 group-hover:to-gray-500/30 transition-all duration-300"
                                    style={{
                                        backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-stone-800 mb-2">Modern Minimal</h3>
                                <p className="text-stone-600 text-sm">Chic pastels, clean geometric lines, and floral symmetry</p>
                                <div className="mt-4 flex items-center text-xs text-stone-500">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                                    Contemporary Design
                                </div>
                            </div>
                        </div>

                        {/* Wide Card - Traditional Splendor */}
                        <div className="md:col-span-4 lg:col-span-6 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="flex flex-col md:flex-row h-64">
                                <div className="flex-1 relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all duration-300"
                                        style={{
                                            backgroundImage: "url('https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <Gem className="w-10 h-10 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                                <div className="flex-1 p-6 flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold text-stone-800 mb-3">Traditional Splendor</h3>
                                    <p className="text-stone-600 mb-4">Culture-inspired mandaps, vibrant patterns, and heritage elements that honor traditions</p>
                                    <div className="flex space-x-2">
                                        <span className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full">Heritage</span>
                                        <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full">Cultural</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Accent Card - Additional Style */}
                        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-amber-100">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                                    <Sparkles className="w-8 h-8 text-amber-600" />
                                </div>
                                <h4 className="text-lg font-semibold text-stone-800 mb-2">Custom Themes</h4>
                                <p className="text-stone-600 text-sm">Personalized décor concepts tailored to your unique love story</p>
                            </div>
                        </div>
                    </div>



                    {/* Modern Quote Section with Geometric Elements */}
                    <div className="relative bg-gradient-to-r from-stone-800 via-stone-700 to-amber-800 rounded-3xl p-12 text-center overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20"></div>
                        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-400 rounded-full"></div>
                        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-white text-xl lg:text-2xl font-light italic leading-relaxed max-w-4xl mx-auto">
                                We don't decorate spaces — we stage emotions where every detail whispers romance and every corner tells your unique love story.
                            </p>
                            <div className="mt-8 flex justify-center items-center space-x-4">
                                <div className="w-12 h-0.5 bg-amber-400"></div>
                                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                <div className="w-12 h-0.5 bg-amber-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Signature Experience */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">

                    <LowerHeading title='Luxury You’ll Remember' tagline='Every moment deserves perfection' />

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-stone-800 to-stone-600 text-white rounded-2xl p-8 flex flex-col justify-between min-h-64">
                            <div>
                                <Calendar className="w-12 h-12 text-white mb-4" />
                                <h3 className="text-2xl font-medium mb-3">Concept Planning</h3>
                                <p className="text-white/80">We shape your vision into a blueprint that captures every dream and detail.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white rounded-2xl p-8 flex flex-col justify-between min-h-64">
                            <div>
                                <Users className="w-12 h-12 text-white mb-4" />
                                <h3 className="text-2xl font-medium mb-3">Event Coordination</h3>
                                <p className="text-white/80">From entry to exit, every second is managed with precision and care.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 flex flex-col justify-between min-h-64">
                            <div>
                                <Flower className="w-12 h-12 text-pink-600 mb-4" />
                                <h3 className="text-2xl font-medium mb-3 text-stone-800">Floral & Lighting Design</h3>
                                <p className="text-stone-600">Creating mood and magic with color, texture, and glowing ambiance.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 flex flex-col justify-between min-h-64">
                            <div>
                                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                                <h3 className="text-2xl font-medium mb-3 text-stone-800">On-Site Management</h3>
                                <p className="text-stone-600">Stress-free execution from setup to goodbye. We handle everything.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <LowerHeading title='Every Frame A Fairytale' tagline='Feel the magic in every detail' />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="rounded-2xl h-64 hover:scale-105 transition cursor-pointer overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                alt="Wedding Ceremony"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl h-64 hover:scale-105 transition cursor-pointer overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                alt="Wedding Catering"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl h-64 hover:scale-105 transition cursor-pointer overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                alt="Wedding Couple"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-2xl h-64 hover:scale-105 transition cursor-pointer overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                alt="Wedding Venue"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <p className="text-center text-stone-600 italic">
                        Each photograph tells a story of love, laughter, and celebration — beautifully captured in the golden glow of our work.
                    </p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">

                    <LowerHeading title='Love & Happy Endings' tagline='Moments cherished forever' />

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-stone-50 rounded-2xl p-8 hover:shadow-lg transition relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-32 bg-cover bg-center opacity-20"
                                    style={{ backgroundImage: `url(${testimonial.image})` }}></div>
                                <div className="relative z-10">
                                    <Star className="w-8 h-8 text-amber-500 mb-6" />
                                    <p className="text-stone-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                                    <p className="text-stone-500 text-sm">— {testimonial.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section id="packages" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <LowerHeading title='Elegance for Every Couple' tagline='Packages crafted to match your dream day' />

                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-2 border-stone-100 hover:border-amber-200">
                                <div className="flex justify-center mb-6">
                                    {pkg.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-stone-800 mb-4 text-center">{pkg.name}</h3>
                                <ul className="space-y-3 mb-6">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-stone-600">
                                            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-stone-500 text-sm text-center italic">{pkg.description}</p>
                                <button className="w-full mt-6 bg-stone-800 text-white py-3 rounded-lg hover:bg-stone-900 transition">
                                    Choose Package
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="py-20 px-6 bg-gradient-to-br from-stone-800 to-amber-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
                    }}></div>
                <div className="max-w-4xl mx-auto relative z-10">


                    <LowerHeading title='Your Dream Wedding Starts Here' tagline='Together, we create your perfect day' className='text-white' />

                    <form className="space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                            />
                            <input
                                type="tel"
                                placeholder="Contact Number"
                                className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="date"
                                placeholder="Event Date"
                                className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                            />
                            <input
                                type="text"
                                placeholder="Venue Location"
                                className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                            />
                        </div>
                        <textarea
                            placeholder="Tell us about your dream wedding..."
                            rows="5"
                            className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                        ></textarea>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button type="submit" className="flex-1 bg-white text-stone-800 px-8 py-4 rounded-lg hover:bg-stone-100 transition font-medium flex items-center justify-center gap-2">
                                <Heart size={18} /> Book a Consultation
                            </button>
                            <button type="button" className="flex-1 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition font-medium flex items-center justify-center gap-2">
                                <Phone size={18} /> Call Us Now
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">

                    <LowerHeading title='Every Celebration Deserves Beauty' tagline='We craft every detail — décor, cuisine, and lighting — to make your day truly unique' />
                    <div className="flex justify-center gap-6">
                        <Heart className="w-12 h-12 text-pink-500" />
                        <Flower className="w-12 h-12 text-green-500" />
                        <Sparkles className="w-12 h-12 text-amber-500" />
                        <ChefHat className="w-12 h-12 text-stone-600" />
                        <Camera className="w-12 h-12 text-blue-500" />
                    </div>
                </div>
            </section>


        </div>
    );
}

'use client';

import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import {
    Star, Headphones,
    Sparkles,
    Target,
    Lightbulb,
    Umbrella,
    Eye
} from 'lucide-react';
import {
    Flower2,
    Castle,
    Waves,
    Home,
    TreePine,
    Grape,
    MapPin,
    Users,
    DollarSign,
    Check,
    Calendar,
    MessageCircle, ClipboardList, ChefHat, Palette, Camera, Music, Car, ArrowRight, Play, ChevronLeft, ChevronRight, Heart, Quote, Send, Mail, Phone, CheckCircle, Award,Clock
} from 'lucide-react';

function Hero() {
    const HERO = {
        title: "Celebrate Love Amidst Nature's Beauty",
        tagline:
            "From serene gardens to majestic open lawns — discover the perfect outdoor space to host your unforgettable moments.",
        ctas: [{ label: "Explore Venues", to: "#venues" }, { label: "Book a Tour", to: "#booking" }],
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-rose-50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-leaf to-emerald-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-rose-200 to-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-200 to-yellow-300 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main hero image with modern overlay */}
            <div className="relative h-screen">
                <img
                    src={HERO.image}
                    alt="Outdoor wedding hero"
                    className="h-full w-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                {/* Floating decorative elements */}
                <div className="absolute top-1/4 right-1/4 animate-float">
                    <div className="w-4 h-4 bg-white/30 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute top-1/3 right-1/3 animate-float delay-300">
                    <div className="w-3 h-3 bg-leaf/40 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute bottom-1/4 right-1/5 animate-float delay-700">
                    <div className="w-5 h-5 bg-rose-300/40 rounded-full shadow-lg"></div>
                </div>
            </div>

            {/* Content with modern animations */}
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-8 animate-fade-in-up">
                            {/* Modern badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium">Award-Winning Venues</span>
                            </div>

                            {/* Enhanced typography */}
                            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                <span className="block">{HERO.title.split(' ').slice(0, 2).join(' ')}</span>
                                <span className="block bg-gradient-to-r from-white via-emerald-100 to-rose-100 bg-clip-text text-transparent">
                                    {HERO.title.split(' ').slice(2).join(' ')}
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
                                {HERO.tagline}
                            </p>

                            {/* Modern feature tags with icons */}
                            <div className="flex flex-wrap gap-3">
                                <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <span className="text-yellow-300 group-hover:scale-110 transition-transform">✨</span>
                                    <span className="text-sm">Award-Winning</span>
                                </div>
                                <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <span className="text-green-300 group-hover:scale-110 transition-transform">🌿</span>
                                    <span className="text-sm">Eco-Friendly</span>
                                </div>
                                <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <span className="text-pink-300 group-hover:scale-110 transition-transform">📸</span>
                                    <span className="text-sm">Picture Perfect</span>
                                </div>
                            </div>

                            {/* Enhanced CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={HERO.ctas[0].to}
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-leaf to-emerald-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10">{HERO.ctas[0].label}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-leaf opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                                <a
                                    href={HERO.ctas[1].to}
                                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-ivy hover:scale-105 transition-all duration-300"
                                >
                                    {HERO.ctas[1].label}
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }
                .animate-fade-in-right {
                    animation: fade-in-right 1s ease-out 0.3s both;
                }
            `}</style>
        </section>
    );
}

function Stats() {
    const STATS = [
        { number: 500, suffix: "+", label: "Celebrations Hosted", icon: Sparkles, color: "from-pink-500 to-rose-500" },
        { number: 50, suffix: "+", label: "Unique Venues", icon: MapPin, color: "from-emerald-500 to-green-500" },
        { number: 98, suffix: "%", label: "Client Satisfaction", icon: Star, color: "from-amber-500 to-yellow-500" },
        { number: 24, suffix: "/7", label: "Support Available", icon: Headphones, color: "from-blue-500 to-indigo-500" }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 mb-6">
                        <Sparkles className="w-4 h-4 text-pink-500" />
                        <span className="text-sm font-medium text-gray-700">Trusted by Couples Worldwide</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Numbers That Tell Our
                        <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            Success Story
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Every celebration we've hosted has strengthened our commitment to creating magical moments
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>

                {/* Bottom decoration */}
                <div className="flex justify-center mt-16">
                    <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                        <Star className="w-4 h-4 fill-current" />
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat, index }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            let startTime = null;
            const duration = 2000; // 2 seconds
            const startValue = 0;
            const endValue = stat.number;

            const animate = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);

                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            const timeoutId = setTimeout(() => {
                requestAnimationFrame(animate);
            }, index * 200); // Stagger animation

            return () => clearTimeout(timeoutId);
        }
    }, [isVisible, stat.number, index]);

    const IconComponent = stat.icon;

    return (
        <div
            ref={cardRef}
            className="group relative"
            style={{
                animation: isVisible ? `fadeInUp 0.8s ease-out ${index * 0.1}s both` : 'none'
            }}
        >
            {/* Card */}
            <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/80">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>

                {/* Icon with floating animation */}
                <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Floating particles */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </div>

                {/* Counter */}
                <div className="text-center">
                    <div className="flex items-baseline justify-center mb-2">
                        <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {count}
                        </span>
                        <span className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent ml-1`}>
                            {stat.suffix}
                        </span>
                    </div>

                    <h3 className="text-gray-700 font-semibold text-lg mb-2 group-hover:text-gray-900 transition-colors">
                        {stat.label}
                    </h3>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-100 rounded-full h-1 mt-4">
                        <div
                            className={`h-1 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                                width: isVisible ? '100%' : '0%',
                                transitionDelay: `${index * 200 + 500}ms`
                            }}
                        ></div>
                    </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
        </div>
    );
}

// Add these styles to your CSS or Tailwind config
const styles = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}`;


function Highlights() {
    const HIGHLIGHTS = [
        {
            title: "Scenic and spacious venues",
            desc: "Open lawns, garden aisles, and elegant outdoor stages for every scale.",
            icon: Flower2,
            gradient: "from-pink-500 via-rose-500 to-red-500",
            bgGradient: "from-pink-50 to-rose-50"
        },
        {
            title: "Elegant décor customization",
            desc: "Floral arches, fairy lights, and thematic setups tailored to your vision.",
            icon: Sparkles,
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            bgGradient: "from-purple-50 to-violet-50"
        },
        {
            title: "Seamless event coordination",
            desc: "Vendor management, timelines, and guest flow handled end‑to‑end.",
            icon: Target,
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            title: "Picture‑perfect lighting",
            desc: "Golden‑hour planning and professional lighting rigs for stunning visuals.",
            icon: Lightbulb,
            gradient: "from-amber-500 via-yellow-500 to-orange-500",
            bgGradient: "from-amber-50 to-yellow-50"
        },
        {
            title: "Weddings to soirées",
            desc: "Designed for weddings, engagements, receptions, parties, and more.",
            icon: Eye,
            gradient: "from-emerald-500 via-green-500 to-lime-500",
            bgGradient: "from-emerald-50 to-green-50"
        },
        {
            title: "Weather contingency plans",
            desc: "Elegant tent options and covered areas to ensure your event goes perfectly.",
            icon: Umbrella,
            gradient: "from-slate-500 via-gray-500 to-zinc-500",
            bgGradient: "from-slate-50 to-gray-50"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                {/* Enhanced Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <Sparkles className="w-5 h-5 text-violet-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Premium Outdoor Experiences</span>
                    </div>

                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Why Choose Our
                        <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Outdoor Venues
                        </span>
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-4">
                        <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                            At Your Brand Name, every celebration deserves a breathtaking setting combining natural elegance with modern luxury for weddings, receptions, photoshoots, and grand celebrations.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Surrounded by nature's finest backdrops, each venue is handpicked for charm, serenity, and aesthetic appeal—from romantic garden ceremonies to lavish outdoor soirées.
                        </p>
                    </div>

                    {/* Decorative line */}
                    <div className="flex items-center justify-center mt-12">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-32"></div>
                        <div className="mx-4 w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-32"></div>
                    </div>
                </div>

                {/* Enhanced Cards Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {HIGHLIGHTS.map((highlight, index) => (
                        <HighlightCard
                            key={highlight.title}
                            highlight={highlight}
                            index={index}
                        />
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center gap-4">
                        <a
                            href="#venues"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10">Explore Our Venues</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white/70 backdrop-blur-md border border-white/30 text-gray-700 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HighlightCard({ highlight, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const IconComponent = highlight.icon;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className="group relative"
            style={{
                animation: isVisible ? `slideInUp 0.8s ease-out ${index * 0.1}s both` : 'none'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glassmorphism Card */}
            <div className="relative h-full bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/70 overflow-hidden">

                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl`}></div>

                {/* Animated border glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`}></div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                </div>

                {/* Icon with enhanced styling */}
                <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.gradient} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                        {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {highlight.desc}
                    </p>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                    <div
                        className={`h-full bg-gradient-to-r ${highlight.gradient} transition-all duration-1000 ease-out`}
                        style={{
                            width: isVisible ? '100%' : '0%',
                            transitionDelay: `${index * 100 + 300}ms`
                        }}
                    ></div>
                </div>

                {/* Hover ripple effect */}
                {isHovered && (
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full animate-ping"
                            style={{ animation: 'ripple 0.6s ease-out' }}></div>
                    </div>
                )}
            </div>
        </div>
    );
}

function Categories() {
    const CATEGORIES = [
        {
            icon: Flower2,
            name: "Garden Venues",
            desc: "A touch of romance and freshness — perfect for floral elegance and open greenery.",
            ideal: "Daytime weddings, bridal shoots, intimate gatherings.",
            capacity: "50-200 guests",
            features: ["Natural flower backdrops", "Tree-lined pathways", "Gazebo ceremonies"],
            priceRange: "$$",
            priceLevel: 2,
            gradient: "from-pink-500 via-rose-500 to-red-500",
            bgGradient: "from-pink-50 to-rose-50",
            image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16e?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Castle,
            name: "Palace Lawns",
            desc: "Grand, regal, and majestic — the perfect canvas for royal‑themed celebrations.",
            ideal: "Large gatherings, themed weddings, gala nights.",
            capacity: "200-500 guests",
            features: ["Historic architecture", "Manicured gardens", "Royal ambiance"],
            priceRange: "$$$",
            priceLevel: 3,
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            bgGradient: "from-purple-50 to-violet-50",
            image: "https://images.unsplash.com/photo-1574800457230-80c1ec54b0fb?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Waves,
            name: "Beachfront Venues",
            desc: "Let the waves whisper your vows — serene, cinematic, and unforgettable.",
            ideal: "Destination weddings, pre‑wedding shoots, sundown ceremonies.",
            capacity: "30-300 guests",
            features: ["Ocean views", "Sunset ceremonies", "Beach activities"],
            priceRange: "$$$",
            priceLevel: 3,
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            bgGradient: "from-blue-50 to-cyan-50",
            image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Home,
            name: "Farmhouse Gardens",
            desc: "Rustic charm blended with comfort — cozy layouts for heartfelt celebrations.",
            ideal: "Family functions, cocktails, outdoor dinners.",
            capacity: "75-250 guests",
            features: ["Rustic décor", "Farm-to-table dining", "Cozy fire pits"],
            priceRange: "$$",
            priceLevel: 2,
            gradient: "from-amber-500 via-yellow-500 to-orange-500",
            bgGradient: "from-amber-50 to-yellow-50",
            image: "https://images.unsplash.com/photo-1560184897-43d0b1a3a3c7?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: TreePine,
            name: "Resort Venues",
            desc: "Luxury meets nature — stay, dine, and celebrate across breathtaking spaces.",
            ideal: "Multi‑day weddings, retreats, destination events.",
            capacity: "100-400 guests",
            features: ["Luxury amenities", "Multiple event spaces", "Guest accommodations"],
            priceRange: "$$$$",
            priceLevel: 4,
            gradient: "from-emerald-500 via-green-500 to-lime-500",
            bgGradient: "from-emerald-50 to-green-50",
            image: "https://images.unsplash.com/photo-1501117716987-c8e2aee3f227?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Grape,
            name: "Vineyard Venues",
            desc: "Romantic vineyard settings with rolling hills and wine country charm.",
            ideal: "Wine-themed weddings, harvest celebrations, intimate events.",
            capacity: "80-300 guests",
            features: ["Wine tastings", "Vineyard tours", "Scenic hill views"],
            priceRange: "$$$",
            priceLevel: 3,
            gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
            bgGradient: "from-violet-50 to-purple-50",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    return (
        <section id="venues" className="relative bg-gradient-to-br from-gray-50 via-white to-indigo-50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                {/* Enhanced Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <MapPin className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Curated Venue Collection</span>
                    </div>

                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Categories of
                        <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Outdoor Venues
                        </span>
                    </h2>

                    <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Discover the perfect setting for your special day from our curated collection of stunning outdoor venues.
                    </p>

                    {/* Decorative separator */}
                    <div className="flex items-center justify-center mt-12">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-32"></div>
                        <div className="mx-4 w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-32"></div>
                    </div>
                </div>

                {/* Enhanced Cards Grid */}
                <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
                    {CATEGORIES.map((category, index) => (
                        <CategoryCard
                            key={category.name}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="#booking"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                            <Calendar className="w-5 h-5 mr-2" />
                            <span className="relative z-10">Book Your Venue</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white/70 backdrop-blur-md border border-white/30 text-gray-700 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Get Expert Advice
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CategoryCard({ category, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const IconComponent = category.icon;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getPriceDisplay = (level) => {
        return '💰'.repeat(level) + '⚪'.repeat(4 - level);
    };

    return (
        <article
            ref={cardRef}
            className="group relative"
            style={{
                animation: isVisible ? `slideInUp 0.8s ease-out ${index * 0.1}s both` : 'none'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Modern glassmorphism card */}
            <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">

                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                {/* Animated border glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`}></div>

                <div className="grid lg:grid-cols-2">
                    {/* Enhanced Image Section */}
                    <div className="relative overflow-hidden lg:h-full">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="h-64 lg:h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />

                        {/* Image overlay with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Floating price badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-2 shadow-lg">
                            <span className="text-sm font-medium">{getPriceDisplay(category.priceLevel)}</span>
                        </div>

                        {/* Category badge */}
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.gradient} rounded-full px-4 py-2`}>
                                <IconComponent className="w-4 h-4 text-white" />
                                <span className="text-white font-medium text-sm">{category.name}</span>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="p-8 relative z-10">
                        {/* Header with icon */}
                        <div className="flex items-center mb-6">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${category.gradient} shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                <IconComponent className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                {category.name}
                            </h3>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors">
                            {category.desc}
                        </p>

                        {/* Enhanced Info Grid */}
                        <div className="grid grid-cols-1 gap-4 mb-6">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm border border-white/30">
                                <Users className="w-5 h-5 text-indigo-500" />
                                <div>
                                    <span className="text-sm font-medium text-gray-600">Capacity</span>
                                    <p className="font-semibold text-gray-900">{category.capacity}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm border border-white/30">
                                <DollarSign className="w-5 h-5 text-green-500" />
                                <div>
                                    <span className="text-sm font-medium text-gray-600">Price Range</span>
                                    <p className="font-semibold text-gray-900">{category.priceRange}</p>
                                </div>
                            </div>
                        </div>

                        {/* Ideal for section */}
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-600 mb-2">Perfect for:</p>
                            <p className="text-gray-800 font-medium">{category.ideal}</p>
                        </div>

                        {/* Enhanced Features */}
                        <div className="mb-8">
                            <p className="text-sm font-medium text-gray-600 mb-3">Features:</p>
                            <div className="space-y-2">
                                {category.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group/item">
                                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center flex-shrink-0`}>
                                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="#booking"
                                className={`flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r ${category.gradient} text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                            >
                                <Calendar className="w-4 h-4 mr-2" />
                                Check Availability
                            </a>
                            <a
                                href="#contact"
                                className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/50 text-gray-700 font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Get Quote
                            </a>
                        </div>
                    </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </article>
    );
}





function Services() {
    const SERVICES = [
        {
            title: "Event Planning & Coordination",
            desc: "Complete event management from concept to execution with dedicated coordinators.",
            features: ["Timeline creation", "Vendor coordination", "Day-of management", "Setup & breakdown"],
            icon: ClipboardList,
            gradient: "from-indigo-500 via-purple-500 to-pink-500",
            bgGradient: "from-indigo-50 to-purple-50"
        },
        {
            title: "Catering & Bar Services",
            desc: "Gourmet cuisine and premium beverages with customizable menu options.",
            features: ["Custom menus", "Dietary accommodations", "Professional service", "Bar packages"],
            icon: ChefHat,
            gradient: "from-orange-500 via-red-500 to-pink-500",
            bgGradient: "from-orange-50 to-red-50"
        },
        {
            title: "Décor & Styling",
            desc: "Transform your venue with elegant décor that matches your vision perfectly.",
            features: ["Floral arrangements", "Lighting design", "Furniture rental", "Theme styling"],
            icon: Palette,
            gradient: "from-green-500 via-emerald-500 to-teal-500",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            title: "Photography & Videography",
            desc: "Capture every precious moment with our network of professional photographers.",
            features: ["Wedding photography", "Drone footage", "Same-day highlights", "Photo booths"],
            icon: Camera,
            gradient: "from-blue-500 via-indigo-500 to-purple-500",
            bgGradient: "from-blue-50 to-indigo-50"
        },
        {
            title: "Entertainment & Music",
            desc: "Create the perfect atmosphere with live music, DJs, and entertainment options.",
            features: ["Live bands", "DJ services", "Sound systems", "Special performances"],
            icon: Music,
            gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
            bgGradient: "from-violet-50 to-purple-50"
        },
        {
            title: "Transportation & Logistics",
            desc: "Seamless guest transportation and parking solutions for stress-free events.",
            features: ["Guest shuttles", "Valet parking", "Vendor access", "Logistics planning"],
            icon: Car,
            gradient: "from-amber-500 via-yellow-500 to-orange-500",
            bgGradient: "from-amber-50 to-yellow-50"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                {/* Enhanced Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <Star className="w-5 h-5 text-purple-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Premium Services</span>
                    </div>

                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Complete Wedding
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>

                    <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        From planning to execution, we provide everything you need for your perfect outdoor celebration.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-20">
                    <a
                        href="#booking"
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Start Planning Your Event
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
    const IconComponent = service.icon;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className="group relative"
            style={{
                animation: isVisible ? `slideInUp 0.8s ease-out ${index * 0.1}s both` : 'none'
            }}
        >
            <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">

                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl`}></div>

                {/* Icon */}
                <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                        {service.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
        </div>
    );
}




function Gallery() {
    const [index, setIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const GALLERY = [
        { alt: "Walk down floral aisles", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop", category: "Ceremony" },
        { alt: "Exchange vows at sunset", src: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1600&auto=format&fit=crop", category: "Ceremony" },
        { alt: "Dine under the stars", src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", category: "Reception" },
        { alt: "Garden mandap décor", src: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?q=80&w=1600&auto=format&fit=crop", category: "Décor" },
        { alt: "Open‑air stage", src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop", category: "Reception" },
        { alt: "Romantic garden setup", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?q=80&w=1600&auto=format&fit=crop", category: "Ceremony" },
        { alt: "Elegant table settings", src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=1600&auto=format&fit=crop", category: "Reception" },
        { alt: "Fairy light ambiance", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop", category: "Décor" }
    ];

    const next = () => setIndex((i) => (i + 1) % GALLERY.length);
    const prev = () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(next, 4000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying]);

    const getCategoryColor = (category) => {
        const colors = {
            'Ceremony': 'from-pink-500 to-rose-500',
            'Reception': 'from-blue-500 to-indigo-500',
            'Décor': 'from-purple-500 to-violet-500'
        };
        return colors[category] || 'from-gray-500 to-slate-500';
    };

    return (
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-indigo-50 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
                    <div className="mb-8 lg:mb-0">
                        <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-6 shadow-lg">
                            <Eye className="w-5 h-5 text-indigo-500" />
                            <span className="text-sm font-semibold text-gray-700 tracking-wide">Visual Stories</span>
                        </div>

                        <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Gallery of Outdoor
                            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Moments
                            </span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl">
                            Explore real celebrations and get inspired by the beauty of outdoor events.
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-gray-700 hover:bg-white transition-all duration-300 shadow-lg"
                        >
                            <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse text-green-500' : ''}`} />
                            {isAutoPlaying ? 'Auto' : 'Manual'}
                        </button>
                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Gallery Layout */}
                <div className="grid gap-8 lg:grid-cols-3 mb-12">
                    {/* Main Image */}
                    <div className="lg:col-span-2 relative group">
                        <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg">
                            <img
                                src={GALLERY[index].src}
                                alt={GALLERY[index].alt}
                                className="h-96 lg:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image Info Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${getCategoryColor(GALLERY[index].category)} rounded-full px-3 py-1 mb-2`}>
                                                <span className="text-white text-sm font-medium">{GALLERY[index].category}</span>
                                            </div>
                                            <p className="text-gray-900 font-semibold">{GALLERY[index].alt}</p>
                                        </div>
                                        <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
                                            <Heart className="w-5 h-5 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="space-y-6">
                        {Array.from({ length: 2 }).map((_, i) => {
                            const idx = (index + 1 + i) % GALLERY.length;
                            return (
                                <div key={idx} className="group cursor-pointer" onClick={() => setIndex(idx)}>
                                    <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img
                                            src={GALLERY[idx].src}
                                            alt={GALLERY[idx].alt}
                                            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${getCategoryColor(GALLERY[idx].category)} rounded-full px-2 py-1 mb-1`}>
                                                <span className="text-white text-xs font-medium">{GALLERY[idx].category}</span>
                                            </div>
                                            <p className="text-white text-sm font-medium">{GALLERY[idx].alt}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mb-12">
                    {GALLERY.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Experience Highlights */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: "✨", text: "Walk down floral aisles", gradient: "from-pink-500 to-rose-500" },
                        { icon: "🌅", text: "Exchange vows under golden sunsets", gradient: "from-amber-500 to-orange-500" },
                        { icon: "🌸", text: "Dine beneath a canopy of stars", gradient: "from-purple-500 to-violet-500" },
                        { icon: "💫", text: "Create magical memories", gradient: "from-blue-500 to-indigo-500" }
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-2xl">{item.icon}</span>
                            </div>
                            <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const TESTIMONIALS = [
        {
            quote: "Our garden wedding was nothing short of magical! The décor, ambiance, and coordination were flawless. Every detail was perfect.",
            name: "Ananya & Rohan",
            event: "Garden Wedding",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
            gradient: "from-pink-500 to-rose-500",
            location: "Mumbai"
        },
        {
            quote: "The open‑air palace venue gave us the royal wedding we always dreamed of! The team exceeded our expectations.",
            name: "Neha & Vikram",
            event: "Palace Wedding",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop",
            gradient: "from-purple-500 to-violet-500",
            location: "Jaipur"
        },
        {
            quote: "Our beachfront ceremony was absolutely stunning. The sunset views and professional service made it unforgettable.",
            name: "Priya & Karthik",
            event: "Beach Wedding",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
            gradient: "from-blue-500 to-cyan-500",
            location: "Goa"
        },
        {
            quote: "The farmhouse venue provided the perfect rustic charm for our intimate celebration. Highly recommended!",
            name: "Meera & Arjun",
            event: "Farmhouse Wedding",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616c6671d50?q=80&w=400&auto=format&fit=crop",
            gradient: "from-amber-500 to-orange-500",
            location: "Delhi"
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-rose-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-300 to-violet-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <Heart className="w-5 h-5 text-rose-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Happy Couples</span>
                    </div>

                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        What Our Couples
                        <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Say
                        </span>
                    </h2>

                    <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Read testimonials from happy couples who celebrated their special day at our venues.
                    </p>
                </div>

                {/* Featured Testimonial */}
                <div className="mb-16">
                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-2xl">
                            <div className={`absolute -top-6 left-12 w-12 h-12 bg-gradient-to-r ${TESTIMONIALS[currentTestimonial].gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                <Quote className="w-6 h-6 text-white" />
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <blockquote className="text-2xl lg:text-3xl text-gray-800 font-medium mb-8 leading-relaxed">
                                    "{TESTIMONIALS[currentTestimonial].quote}"
                                </blockquote>

                                <div className="flex items-center justify-center gap-4">
                                    <img
                                        src={TESTIMONIALS[currentTestimonial].avatar}
                                        alt={TESTIMONIALS[currentTestimonial].name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                    <div className="text-left">
                                        <p className="text-xl font-bold text-gray-900">{TESTIMONIALS[currentTestimonial].name}</p>
                                        <p className="text-gray-600">{TESTIMONIALS[currentTestimonial].event}</p>
                                        <p className="text-sm text-gray-500">{TESTIMONIALS[currentTestimonial].location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
                    {TESTIMONIALS.filter((_, i) => i !== currentTestimonial).slice(0, 2).map((testimonial, index) => (
                        <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
                    ))}
                </div>

                {/* Testimonial Navigation */}
                <div className="flex justify-center gap-3">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentTestimonial(i)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${i === currentTestimonial
                                ? `bg-gradient-to-r ${TESTIMONIALS[i].gradient} scale-125`
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                    {[
                        { number: "500+", label: "Happy Couples", icon: Heart },
                        { number: "4.9/5", label: "Average Rating", icon: Star },
                        { number: "98%", label: "Satisfaction Rate", icon: Users },
                        { number: "50+", label: "Venues", icon: Quote }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className="group"
            style={{
                animation: isVisible ? `slideInUp 0.8s ease-out ${index * 0.2}s both` : 'none'
            }}
        >
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className={`absolute -top-4 right-8 w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <Quote className="w-4 h-4 text-white" />
                </div>

                <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                </div>

                <blockquote className="text-gray-800 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                    <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.event}</p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        venueType: '',
        guestCount: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventDate: '',
                venueType: '',
                guestCount: '',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="booking" className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <Calendar className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Start Your Journey</span>
                    </div>

                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Book Your Dream
                        <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Venue
                        </span>
                    </h2>

                    <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Ready to start planning? Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Form */}
                    <div className="relative">
                        <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 lg:p-12 shadow-2xl">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
                                    <Send className="w-5 h-5 text-white" />
                                </div>
                                Get Started Today
                            </h3>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h4>
                                    <p className="text-gray-600">We've received your request and will contact you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Users className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Mail className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Phone className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Calendar className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="date"
                                                name="eventDate"
                                                value={formData.eventDate}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <MapPin className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <select
                                                name="venueType"
                                                value={formData.venueType}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 appearance-none"
                                                required
                                            >
                                                <option value="">Select Venue Type</option>
                                                <option value="garden">Garden Venues</option>
                                                <option value="palace">Palace Lawns</option>
                                                <option value="beach">Beachfront Venues</option>
                                                <option value="farmhouse">Farmhouse Gardens</option>
                                                <option value="resort">Resort Venues</option>
                                                <option value="vineyard">Vineyard Venues</option>
                                            </select>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                                <Users className="w-5 h-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="number"
                                                name="guestCount"
                                                placeholder="Expected Guests"
                                                value={formData.guestCount}
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute left-4 top-6">
                                            <MessageCircle className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your dream event..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Request Information
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Info Panels */}
                    <div className="space-y-8">
                        {/* Process Steps */}
                        <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg">
                            <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                What Happens Next?
                            </h4>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: MessageCircle,
                                        title: "Consultation Call",
                                        desc: "We'll discuss your vision and requirements",
                                        gradient: "from-blue-500 to-indigo-500"
                                    },
                                    {
                                        icon: MapPin,
                                        title: "Venue Tour",
                                        desc: "Visit our recommended venues",
                                        gradient: "from-purple-500 to-violet-500"
                                    },
                                    {
                                        icon: Award,
                                        title: "Custom Proposal",
                                        desc: "Receive a detailed quote and timeline",
                                        gradient: "from-pink-500 to-rose-500"
                                    }
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <span className="text-white font-bold text-lg">{i + 1}</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                                                <step.icon className="w-4 h-4" />
                                                {step.title}
                                            </p>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg">
                            <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                Contact Information
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { icon: Phone, text: "+1 (555) 123-4567", gradient: "from-green-500 to-emerald-500" },
                                    { icon: Mail, text: "hello@outdoorvenues.com", gradient: "from-blue-500 to-indigo-500" },
                                    { icon: MapPin, text: "123 Garden Lane, Nature Valley", gradient: "from-purple-500 to-violet-500" },
                                    { icon: Clock, text: "Mon-Sun: 9AM-7PM", gradient: "from-amber-500 to-orange-500" }
                                ].map((contact, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl backdrop-blur-sm group hover:bg-white/70 transition-all duration-300">
                                        <div className={`w-10 h-10 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <contact.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-gray-800 font-medium">{contact.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function OutdoorVenuesPage() {
    return (
        <main className="bg-sand text-gray-900">
            <Hero />
            <Stats />
            <Highlights />
            <Categories />
            <Services />
            <Gallery />
            <Testimonials />
            <BookingForm />
        </main>
    );
}

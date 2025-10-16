
'use client';
import { useState, useEffect, useRef } from 'react';
import { 
    // Hero Icons
    Sparkles, Calendar, MessageCircle,
    // Stats Icons
    Users, Star, Headphones, Trophy,
    // Highlights Icons
    Building, Palette, Snowflake, Shield, Utensils, Wifi,
    // Categories Icons
    Hotel, Building2, Warehouse, Crown, Church, Wine,
    // Services Icons
    ClipboardList, ChefHat, Camera, Music, Car, Lightbulb,
    // Gallery Icons
    ChevronLeft, ChevronRight, Play, Eye, Heart,
    // Testimonials Icons
    Quote,
    // Booking Icons
    Mail, Phone, MapPin, Send, Clock, CheckCircle, Award, ArrowRight, Check
} from 'lucide-react';

// Hero Section for Indoor Venues
function Hero() {
    const HERO = {
        title: "Celebrate in Elegant Indoor Luxury",
        tagline: "From grand ballrooms to intimate lounges — discover sophisticated indoor spaces where comfort meets elegance for your perfect celebration.",
        ctas: [
            { label: "Explore Venues", to: "#venues" },
            { label: "Book a Tour", to: "#booking" }
        ],
        image: "https://images.unsplash.com/photo-1519167758481-83f29c8171c5?q=80&w=1600&auto=format&fit=crop"
    };

    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 overflow-hidden min-h-screen">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-gold-300 to-amber-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Main hero image */}
            <div className="absolute inset-0">
                <img
                    src={HERO.image}
                    alt="Elegant indoor venue"
                    className="h-full w-full object-cover opacity-60"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center min-h-screen">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-8">
                            {/* Modern badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                                <Building className="w-5 h-5 text-amber-400" />
                                <span className="text-sm font-medium">Premium Indoor Venues</span>
                            </div>

                            {/* Enhanced typography */}
                            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                <span className="block">{HERO.title.split(' ').slice(0, 2).join(' ')}</span>
                                <span className="block bg-gradient-to-r from-amber-200 via-gold-200 to-yellow-200 bg-clip-text text-transparent">
                                    {HERO.title.split(' ').slice(2).join(' ')}
                                </span>
                            </h1>
                            
                            <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
                                {HERO.tagline}
                            </p>

                            {/* Modern feature tags */}
                            <div className="flex flex-wrap gap-3">
                                <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <Snowflake className="w-4 h-4 text-blue-300 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">Climate Controlled</span>
                                </div>
                                <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <Trophy className="w-4 h-4 text-gold-300 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">Luxury Amenities</span>
                                </div>
                                <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <Shield className="w-4 h-4 text-green-300 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm">Weather Protected</span>
                                </div>
                            </div>

                            {/* Enhanced CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={HERO.ctas[0].to}
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-amber-600 to-gold-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <span className="relative z-10">{HERO.ctas[0].label}</span>
                                </a>
                                <a
                                    href={HERO.ctas[1].to}
                                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
                                >
                                    {HERO.ctas[1].label}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Stats card */}
                        <div className="hidden lg:block">
                            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                                <div className="grid grid-cols-2 gap-6 text-center text-white">
                                    <div>
                                        <div className="text-3xl font-bold">300+</div>
                                        <div className="text-sm opacity-80">Indoor Venues</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">50k+</div>
                                        <div className="text-sm opacity-80">Events Hosted</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">4.9★</div>
                                        <div className="text-sm opacity-80">Client Rating</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">24/7</div>
                                        <div className="text-sm opacity-80">Concierge</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Stats Section - Indoor focused
function Stats() {
    const STATS = [
        { 
            number: 300, 
            suffix: "+", 
            label: "Premium Indoor Venues", 
            icon: Building, 
            color: "from-amber-500 to-gold-500" 
        },
        { 
            number: 50, 
            suffix: "k+", 
            label: "Events Celebrated", 
            icon: Sparkles, 
            color: "from-purple-500 to-indigo-500" 
        },
        { 
            number: 99, 
            suffix: "%", 
            label: "Weather Reliability", 
            icon: Shield, 
            color: "from-green-500 to-emerald-500" 
        },
        { 
            number: 24, 
            suffix: "/7", 
            label: "Venue Support", 
            icon: Headphones, 
            color: "from-blue-500 to-cyan-500" 
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-amber-200 to-gold-200 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 mb-6">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-medium text-gray-700">Industry Leading</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Excellence in Indoor
                        <span className="block bg-gradient-to-r from-amber-500 via-gold-500 to-yellow-500 bg-clip-text text-transparent">
                            Event Hosting
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Highlights Section - Indoor advantages
function Highlights() {
    const HIGHLIGHTS = [
        {
            title: "Climate-controlled comfort",
            desc: "Perfect temperature and weather protection ensure your celebration is comfortable year-round.",
            icon: Snowflake,
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            title: "Sophisticated lighting design",
            desc: "Professional lighting systems and chandeliers create the perfect ambiance for any occasion.",
            icon: Lightbulb,
            gradient: "from-amber-500 via-yellow-500 to-gold-500",
            bgGradient: "from-amber-50 to-yellow-50"
        },
        {
            title: "Built-in amenities",
            desc: "Full kitchens, restrooms, AV systems, and parking—everything you need is already there.",
            icon: Building,
            gradient: "from-gray-500 via-slate-500 to-zinc-500",
            bgGradient: "from-gray-50 to-slate-50"
        },
        {
            title: "Elegant architectural details",
            desc: "Grand ballrooms, ornate ceilings, and classic columns provide timeless sophistication.",
            icon: Crown,
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            bgGradient: "from-purple-50 to-violet-50"
        },
        {
            title: "Flexible space configurations",
            desc: "Modular layouts and moveable walls adapt to intimate gatherings or grand celebrations.",
            icon: Palette,
            gradient: "from-pink-500 via-rose-500 to-red-500",
            bgGradient: "from-pink-50 to-rose-50"
        },
        {
            title: "Premium catering facilities",
            desc: "Professional kitchens and service areas ensure flawless food presentation and service.",
            icon: Utensils,
            gradient: "from-green-500 via-emerald-500 to-teal-500",
            bgGradient: "from-green-50 to-emerald-50"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-purple-50 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-300 to-gold-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <Building className="w-5 h-5 text-purple-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Indoor Advantages</span>
                    </div>
                    
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Why Choose Indoor
                        <span className="block bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                            Venues
                        </span>
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {HIGHLIGHTS.map((highlight, index) => (
                        <HighlightCard key={highlight.title} highlight={highlight} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Categories Section - Indoor venue types
function Categories() {
    const CATEGORIES = [
        {
            icon: Hotel,
            name: "Luxury Hotels & Resorts",
            desc: "Five-star elegance with world-class service, premium amenities, and sophisticated ballrooms.",
            ideal: "Grand weddings, corporate galas, luxury receptions.",
            capacity: "100-800 guests",
            features: ["Luxury accommodations", "Full-service spa", "Multiple event spaces", "Concierge services"],
            priceRange: "$$$$",
            priceLevel: 4,
            gradient: "from-gold-500 via-amber-500 to-yellow-500",
            bgGradient: "from-gold-50 to-amber-50",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Building2,
            name: "Grand Ballrooms",
            desc: "Spectacular spaces with soaring ceilings, crystal chandeliers, and opulent architectural details.",
            ideal: "Wedding receptions, gala dinners, award ceremonies.",
            capacity: "200-1000 guests",
            features: ["Crystal chandeliers", "Dance floors", "Stage areas", "VIP suites"],
            priceRange: "$$$",
            priceLevel: 3,
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            bgGradient: "from-purple-50 to-violet-50",
            image: "https://images.unsplash.com/photo-1519167758481-83f29c8171c5?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Warehouse,
            name: "Industrial Chic Spaces",
            desc: "Converted warehouses and lofts with exposed brick, high ceilings, and modern urban aesthetics.",
            ideal: "Modern weddings, art exhibitions, corporate events.",
            capacity: "150-600 guests",
            features: ["Exposed brick walls", "Industrial lighting", "Open floor plans", "Urban skyline views"],
            priceRange: "$$",
            priceLevel: 2,
            gradient: "from-gray-500 via-slate-500 to-zinc-500",
            bgGradient: "from-gray-50 to-slate-50",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Crown,
            name: "Historic Mansions",
            desc: "Elegant estates and manor houses with period architecture, manicured grounds, and timeless charm.",
            ideal: "Intimate weddings, vintage celebrations, exclusive gatherings.",
            capacity: "50-300 guests",
            features: ["Period architecture", "Formal gardens", "Historic charm", "Intimate settings"],
            priceRange: "$$$",
            priceLevel: 3,
            gradient: "from-rose-500 via-pink-500 to-red-500",
            bgGradient: "from-rose-50 to-pink-50",
            image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Church,
            name: "Cultural & Arts Centers",
            desc: "Museums, galleries, and cultural institutions offering unique artistic backdrops and sophisticated ambiance.",
            ideal: "Cultural celebrations, artistic receptions, educational events.",
            capacity: "75-400 guests",
            features: ["Art collections", "Cultural exhibits", "Unique architecture", "Educational tours"],
            priceRange: "$$",
            priceLevel: 2,
            gradient: "from-teal-500 via-cyan-500 to-blue-500",
            bgGradient: "from-teal-50 to-cyan-50",
            image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=1200&auto=format&fit=crop"
        },
        {
            icon: Wine,
            name: "Private Clubs & Lounges",
            desc: "Exclusive member clubs and upscale lounges with intimate settings and personalized service.",
            ideal: "Private parties, business dinners, exclusive celebrations.",
            capacity: "25-200 guests",
            features: ["Exclusive access", "Premium bars", "Intimate ambiance", "Personalized service"],
            priceRange: "$$$",
            priceLevel: 3,
            gradient: "from-emerald-500 via-green-500 to-lime-500",
            bgGradient: "from-emerald-50 to-green-50",
            image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    return (
        <section id="venues" className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-amber-300 to-gold-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <Building className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Premium Collections</span>
                    </div>
                    
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Indoor Venue
                        <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Categories
                        </span>
                    </h2>
                </div>

                <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
                    {CATEGORIES.map((category, index) => (
                        <CategoryCard key={category.name} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Services Section - Indoor specific services
function Services() {
    const SERVICES = [
        {
            title: "Venue Design & Setup",
            desc: "Complete venue transformation with lighting design, décor coordination, and layout optimization.",
            features: ["Lighting design", "Furniture arrangement", "Décor installation", "Theme coordination"],
            icon: Palette,
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            bgGradient: "from-purple-50 to-violet-50"
        },
        {
            title: "Premium Catering Services",
            desc: "Gourmet cuisine with full kitchen facilities, professional service staff, and customizable menus.",
            features: ["Gourmet menus", "Professional chefs", "Service staff", "Dietary options"],
            icon: ChefHat,
            gradient: "from-orange-500 via-red-500 to-pink-500",
            bgGradient: "from-orange-50 to-red-50"
        },
        {
            title: "Audio Visual Technology",
            desc: "State-of-the-art sound systems, lighting controls, and presentation equipment for seamless events.",
            features: ["Sound systems", "Projection equipment", "Wireless microphones", "Lighting controls"],
            icon: Lightbulb,
            gradient: "from-amber-500 via-yellow-500 to-gold-500",
            bgGradient: "from-amber-50 to-yellow-50"
        },
        {
            title: "Photography & Videography",
            desc: "Professional indoor photography with expertise in low-light and architectural venue features.",
            features: ["Indoor specialists", "Low-light expertise", "Architectural shots", "Live streaming"],
            icon: Camera,
            gradient: "from-blue-500 via-indigo-500 to-purple-500",
            bgGradient: "from-blue-50 to-indigo-50"
        },
        {
            title: "Entertainment Coordination",
            desc: "Live bands, DJs, and performers with full consideration for indoor acoustics and space.",
            features: ["Indoor acoustics", "Stage management", "Live entertainment", "DJ services"],
            icon: Music,
            gradient: "from-pink-500 via-rose-500 to-red-500",
            bgGradient: "from-pink-50 to-rose-50"
        },
        {
            title: "Guest Services & Logistics",
            desc: "Valet parking, coat check, guest registration, and full concierge services for premium experiences.",
            features: ["Valet parking", "Coat check", "Guest registration", "Concierge services"],
            icon: Car,
            gradient: "from-green-500 via-emerald-500 to-teal-500",
            bgGradient: "from-green-50 to-emerald-50"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <Star className="w-5 h-5 text-purple-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Full-Service Excellence</span>
                    </div>
                    
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Complete Indoor
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                            Event Services
                        </span>
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Gallery Section - Indoor venue photos
function Gallery() {
    const [index, setIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const GALLERY = [
        { alt: "Grand ballroom reception", src: "https://images.unsplash.com/photo-1519167758481-83f29c8171c5?q=80&w=1600&auto=format&fit=crop", category: "Ballroom" },
        { alt: "Elegant hotel ceremony", src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop", category: "Hotel" },
        { alt: "Industrial chic reception", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop", category: "Industrial" },
        { alt: "Historic mansion dining", src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=1600&auto=format&fit=crop", category: "Historic" },
        { alt: "Modern lounge setup", src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1600&auto=format&fit=crop", category: "Lounge" },
        { alt: "Art gallery event", src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=1600&auto=format&fit=crop", category: "Gallery" },
        { alt: "Luxury dining hall", src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1600&auto=format&fit=crop", category: "Dining" },
        { alt: "Chandelier ambiance", src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16e?q=80&w=1600&auto=format&fit=crop", category: "Lighting" }
    ];

    const next = () => setIndex((i) => (i + 1) % GALLERY.length);
    const prev = () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(next, 4000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying]);

    return (
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-indigo-50 overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8 shadow-lg">
                        <Eye className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-semibold text-gray-700 tracking-wide">Visual Inspiration</span>
                    </div>
                    
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Indoor Venue
                        <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Showcase
                        </span>
                    </h2>
                </div>

                {/* Gallery content similar to outdoor version but with indoor-specific images and categories */}
                {/* ... Gallery implementation ... */}
            </div>
        </section>
    );
}

// Testimonials Section - Indoor venue testimonials
function Testimonials() {
    const TESTIMONIALS = [
        {
            quote: "The grand ballroom was absolutely stunning! The crystal chandeliers and elegant décor created the perfect fairytale atmosphere for our wedding.",
            name: "Sophia & James",
            event: "Luxury Hotel Wedding",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
            gradient: "from-gold-500 to-amber-500",
            location: "Mumbai"
        },
        {
            quote: "The industrial chic venue gave our celebration such a unique and modern vibe. The exposed brick and city views were incredible!",
            name: "Arjun & Kavya",
            event: "Industrial Loft Wedding",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop",
            gradient: "from-gray-500 to-slate-500",
            location: "Bangalore"
        }
        // ... more testimonials
    ];

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-rose-50 overflow-hidden">
            {/* Testimonials implementation similar to outdoor version */}
        </section>
    );
}

// Booking Form Section - Indoor venue booking
function BookingForm() {
    // Similar implementation to outdoor version but with indoor-specific venue types
    const venueOptions = [
        { value: "hotel", label: "Luxury Hotels & Resorts" },
        { value: "ballroom", label: "Grand Ballrooms" },
        { value: "industrial", label: "Industrial Chic Spaces" },
        { value: "historic", label: "Historic Mansions" },
        { value: "cultural", label: "Cultural & Arts Centers" },
        { value: "private", label: "Private Clubs & Lounges" }
    ];

    return (
        <section id="booking" className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
            {/* Booking form implementation */}
        </section>
    );
}

// Helper components (StatCard, HighlightCard, CategoryCard, ServiceCard, etc.)
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
            const duration = 2000;
            const startValue = 0;
            const endValue = stat.number;

            const animate = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
                
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            const timeoutId = setTimeout(() => {
                requestAnimationFrame(animate);
            }, index * 200);

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
            <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/80">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                
                <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                </div>

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
                </div>
            </div>
        </div>
    );
}

function HighlightCard({ highlight, index }) {
    const [isVisible, setIsVisible] = useState(false);
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
        >
            <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl`}></div>
                
                <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                </div>

                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                        {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {highlight.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

function CategoryCard({ category, index }) {
    const [isVisible, setIsVisible] = useState(false);
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
        >
            <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                <div className="grid lg:grid-cols-2">
                    <div className="relative overflow-hidden lg:h-full">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="h-64 lg:h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-2 shadow-lg">
                            <span className="text-sm font-medium">{getPriceDisplay(category.priceLevel)}</span>
                        </div>

                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.gradient} rounded-full px-4 py-2`}>
                                <IconComponent className="w-4 h-4 text-white" />
                                <span className="text-white font-medium text-sm">{category.name}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 relative z-10">
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

                        <div className="grid grid-cols-1 gap-4 mb-6">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm border border-white/30">
                                <Users className="w-5 h-5 text-indigo-500" />
                                <div>
                                    <span className="text-sm font-medium text-gray-600">Capacity</span>
                                    <p className="font-semibold text-gray-900">{category.capacity}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-600 mb-2">Perfect for:</p>
                            <p className="text-gray-800 font-medium">{category.ideal}</p>
                        </div>

                        <div className="mb-8">
                            <p className="text-sm font-medium text-gray-600 mb-3">Features:</p>
                            <div className="space-y-2">
                                {category.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center flex-shrink-0`}>
                                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

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
            </div>
        </article>
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
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl`}></div>
                
                <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                </div>

                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                        {service.desc}
                    </p>

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
            </div>
        </div>
    );
}

// Main Indoor Venues Page Component
export default function IndoorVenuesPage() {
    return (
        <main className="bg-white text-gray-900">
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

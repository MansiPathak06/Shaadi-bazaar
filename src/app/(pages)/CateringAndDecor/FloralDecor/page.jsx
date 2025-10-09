'use client'

import React, { useState } from 'react';
import { Heart, Sparkles, Camera, Phone, Mail, MapPin, Menu, X, ChefHat, Crown, Gem, Users, Calendar, Award, CheckCircle, Star, Utensils, FlowerIcon as Flower, Clock, Send } from 'lucide-react';

export default function FloralDecorWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const floralServices = [
    {
      title: "Stage & Mandap Decoration",
      subtitle: "Center Stage for Your Love",
      tagline: "A stage that tells your love story.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: <Crown className="w-8 h-8 text-pink-600" />,
      highlights: [
        "Flower walls & backdrops",
        "Hanging installations & chandeliers", 
        "Personalized floral initials",
        "Coordinated color palettes"
      ]
    },
    {
      title: "Banquet & Venue Decoration", 
      subtitle: "Elegance in Every Corner",
      tagline: "Where every detail blooms with elegance.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: <Gem className="w-8 h-8 text-pink-600" />,
      highlights: [
        "Table centerpieces & runners",
        "Chair decorations with flowers",
        "Entry arches & floral pathways", 
        "Hanging installations above tables"
      ]
    },
    {
      title: "Bouquets & Corsages",
      subtitle: "Blooms to Carry Your Love", 
      tagline: "Flowers as unique as your love.",
      image: "https://images.unsplash.com/photo-1594736797933-d0f06ba17d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: <Flower className="w-8 h-8 text-pink-600" />,
      highlights: [
        "Bridal bouquets: Classic & modern",
        "Bridesmaids' bouquets & corsages",
        "Boutonnieres for groomsmen",
        "Fresh seasonal arrangements"
      ]
    },
    {
      title: "Table & Centerpiece Decoration",
      subtitle: "Dining in Bloom", 
      tagline: "Centerpieces that captivate hearts.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      highlights: [
        "Tall glass vases with cascading flowers",
        "Low arrangements for intimate tables", 
        "Candle and flower combinations",
        "Seasonal floral themes"
      ]
    }
  ];

  const galleryImages = [
    {
      category: "Stage & Mandap",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "Bridal Bouquets",
      image: "https://images.unsplash.com/photo-1594736797933-d0f06ba17d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "Centerpieces",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "Venue Decoration",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "Floral Installations",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "Wedding Arches",
      image: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Flower className="w-8 h-8 text-pink-600 mr-3" />
              <div className="text-2xl font-light text-gray-800">
                Essence<span className="font-semibold text-pink-600">Flowers</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-pink-600 text-sm transition">HOME</a>
              <a href="#arrangements" className="text-gray-600 hover:text-pink-600 text-sm transition">FLOWER ARRANGEMENTS</a>
              <a href="#events" className="text-gray-600 hover:text-pink-600 text-sm transition">EVENTS PLANNING</a>
              <a href="#testimonials" className="text-gray-600 hover:text-pink-600 text-sm transition">TESTIMONIALS</a>
              <a href="#contact" className="bg-pink-600 text-white px-6 py-2.5 rounded-lg hover:bg-pink-700 transition text-sm">
                CONTACT US
              </a>
            </nav>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-4 ml-6">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#home" className="text-gray-600 hover:text-pink-600 text-sm transition">HOME</a>
              <a href="#arrangements" className="text-gray-600 hover:text-pink-600 text-sm transition">FLOWER ARRANGEMENTS</a>
              <a href="#events" className="text-gray-600 hover:text-pink-600 text-sm transition">EVENTS PLANNING</a>
              <a href="#testimonials" className="text-gray-600 hover:text-pink-600 text-sm transition">TESTIMONIALS</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Wedding Flowers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/60 via-pink-800/40 to-pink-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Where Every Flower<br />
              <span className="font-serif italic">Tells a Story</span>
            </h1>
            <div className="w-32 h-1 bg-pink-400 mx-auto mb-6"></div>
          </div>
          
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Transforming spaces with blooms, colors, and fragrance to create unforgettable celebrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-pink-50 transition flex items-center justify-center gap-2 text-sm font-medium">
              <Camera size={18} /> Explore Our Floral Creations
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition flex items-center justify-center gap-2 text-sm font-medium">
              <Phone size={18} /> Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Floral Elegance for <span className="font-semibold text-pink-600">Every Celebration</span>
            </h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Every wedding deserves to feel magical. Our floral designs elevate your celebration through color, texture, and artistry. From romantic bouquets to grand installations, each detail is crafted with care to reflect your love story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Handpicked Seasonal Flowers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every bloom is handpicked and designed to create unforgettable memories with the freshest seasonal selections.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Arrangements</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Personalized floral designs tailored to match your unique theme, style, and wedding vision perfectly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">On-Site Setup & Styling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Professional setup and styling services with attention to detail from concept to flawless execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="arrangements" className="py-20 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Our Floral <span className="font-semibold text-pink-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
          </div>

          <div className="space-y-16">
            {floralServices.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="relative h-96 rounded-2xl overflow-hidden group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center mb-3">
                        {service.icon}
                        <h3 className="text-2xl font-semibold text-white ml-3">{service.title}</h3>
                      </div>
                      <p className="text-pink-200 text-sm italic">"{service.tagline}"</p>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-light text-gray-800 mb-4">
                    {service.subtitle} <span className="text-pink-600">💐</span>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.title === "Stage & Mandap Decoration" && "The wedding stage or mandap is the heart of your celebration. We design floral arrangements that create wow moments — cascading flowers, elegant drapes, and creative lighting to make your vows unforgettable."}
                    {service.title === "Banquet & Venue Decoration" && "From entrance arches to dining areas, our floral décor transforms every space into a breathtaking experience. Guests will feel the beauty and harmony in every corner of your venue."}
                    {service.title === "Bouquets & Corsages" && "Your bouquet is a reflection of your personality and wedding style. Our floral experts design bridal bouquets, bridesmaids' flowers, and corsages that match your theme and enhance your look."}
                    {service.title === "Table & Centerpiece Decoration" && "We design table arrangements and centerpieces that elevate your dining experience. Every floral piece is crafted to complement the ambiance, cuisine, and theme of your wedding."}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Installations Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Create Moments That <span className="font-semibold text-pink-600">Wow</span> ✨
            </h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From floral arches to hanging installations and photo zones, we craft unique experiences for your guests. Every arrangement is designed to leave a lasting impression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Crown className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Flower Tunnels</h3>
              <p className="text-gray-600 text-sm">Enchanting pathways lined with blooms</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Hanging Chandeliers</h3>
              <p className="text-gray-600 text-sm">Suspended floral masterpieces</p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-rose-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Camera className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Photo Zones</h3>
              <p className="text-gray-600 text-sm">Instagram-worthy floral backdrops</p>
            </div>

            <div className="bg-gradient-to-br from-rose-100 to-pink-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Gem className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ceiling Drapes</h3>
              <p className="text-gray-600 text-sm">Ethereal overhead arrangements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              A Symphony of <span className="font-semibold text-pink-600">Blooms</span> 🌸
            </h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg">
              Step into a world where flowers, colors, and textures create breathtaking experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((item, index) => (
              <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                <img 
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-white font-semibold text-lg">{item.category}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 italic text-lg">
              "Floral artistry for unforgettable moments."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-pink-600 via-pink-700 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Bring Your Floral Vision to <span className="font-serif italic">Life</span> 🌹
            </h2>
            <div className="w-24 h-1 bg-white/40 mx-auto mb-8"></div>
            <p className="text-white/90 text-lg">
              Share your ideas with us, and we'll craft floral designs that transform your celebration into a dream come true.
            </p>
          </div>

          <form className="space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
              />
              <input 
                type="text" 
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
              placeholder="Tell us about your floral vision and requirements..." 
              rows="5"
              className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
            ></textarea>
            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="flex-1 bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-pink-50 transition font-medium flex items-center justify-center gap-2">
                <Send size={18} /> Book a Consultation
              </button>
              <button type="button" className="flex-1 bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition font-medium flex items-center justify-center gap-2">
                <Camera size={18} /> View Portfolio
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Flower className="w-8 h-8 text-pink-300 mr-3" />
                <div className="text-xl font-light">
                  Essence<span className="font-semibold">Flowers</span>
                </div>
              </div>
              <p className="text-pink-200 text-sm mb-4">
                Delightfully serving beautiful wedding flower arrangements across the region.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-pink-700 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-pink-700 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-pink-700 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-pink-200 text-sm">
                <li><a href="#" className="hover:text-white transition">Stage & Mandap Decoration</a></li>
                <li><a href="#" className="hover:text-white transition">Venue Decoration</a></li>
                <li><a href="#" className="hover:text-white transition">Bridal Bouquets</a></li>
                <li><a href="#" className="hover:text-white transition">Centerpieces</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-pink-200 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-pink-200 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>757-513-2164</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>orders@essenceflowers.net</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Serving Virginia Beach Areas</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-pink-700 pt-8 text-center">
            <p className="text-pink-200 text-sm">© 2025 Essence Wedding Flowers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

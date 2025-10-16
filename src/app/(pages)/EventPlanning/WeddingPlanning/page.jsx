'use client';

import { useState } from 'react';
import { Heart, Calendar, Users, Camera, Music, Utensils, Gift, Sparkles, Phone, Mail, MapPin, CheckCircle, Star } from 'lucide-react';

export default function WeddingPlanning() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Calendar,
      title: "Complete Wedding Planning",
      description: "From engagement to reception, we handle every detail of your special day with care and precision.",
      features: ["Timeline Management", "Vendor Coordination", "Budget Planning"]
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture every precious moment with our professional photography and cinematic videography services.",
      features: ["Pre-wedding Shoots", "Candid Photography", "Drone Coverage"]
    },
    {
      icon: Music,
      title: "Entertainment & Music",
      description: "Create the perfect ambiance with DJs, live bands, and traditional performers for your celebration.",
      features: ["Live Bands", "DJ Services", "Traditional Performers"]
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Delight your guests with exquisite cuisines from traditional to contemporary menus.",
      features: ["Multi-cuisine Options", "Live Counters", "Custom Menus"]
    },
    {
      icon: Users,
      title: "Venue Selection",
      description: "Find the perfect venue that matches your vision and accommodates all your guests comfortably.",
      features: ["Indoor & Outdoor", "Destination Weddings", "Palace & Heritage"]
    },
    {
      icon: Gift,
      title: "Decoration & Themes",
      description: "Transform your venue into a dream setting with stunning decor and personalized themes.",
      features: ["Floral Arrangements", "Lighting Design", "Stage Setup"]
    }
  ];

  const testimonials = [
    {
      name: "Priya & Rahul",
      text: "ShaadiBazaar made our dream wedding come true! Every detail was perfect.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop"
    },
    {
      name: "Sneha & Arjun",
      text: "Professional, creative, and absolutely wonderful to work with. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop"
    },
    {
      name: "Anjali & Vikram",
      text: "They handled everything seamlessly. Our guests are still raving about the wedding!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=400&fit=crop"
    }
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
    "https://i.pinimg.com/736x/aa/82/25/aa8225f3b316f9dde4fbbb9059289bb2.jpg",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://cdn.pixabay.com/video/2023/11/20/189858-886618183_large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <Heart className="w-20 h-20 text-rose-400 mb-6 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Shaadi<span className="text-rose-400">Bazaar</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 max-w-3xl">
            Creating Magical Moments, One Wedding at a Time
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl">
            Your dream wedding deserves the perfect planning. Let us turn your vision into an unforgettable celebration.
          </p>
          <button className="bg-rose-400 hover:bg-rose-500 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl">
            Start Planning Your Dream Wedding
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-rose-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Why Choose ShaadiBazaar?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring years of expertise and passion to make your special day absolutely perfect
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Expert Planners", desc: "Experienced team with 500+ successful weddings" },
              { icon: CheckCircle, title: "Stress-Free Planning", desc: "We handle everything so you can enjoy your journey" },
              { icon: Heart, title: "Personalized Touch", desc: "Every wedding is unique and crafted with love" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <item.icon className="w-16 h-16 text-rose-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete wedding solutions tailored to your dreams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                onClick={() => setActiveService(i)}
                className={`p-8 rounded-2xl cursor-pointer transition-all transform hover:-translate-y-2 ${
                  activeService === i
                    ? 'bg-rose-400 text-white shadow-2xl scale-105'
                    : 'bg-rose-50 hover:bg-rose-100'
                }`}
              >
                <service.icon className={`w-12 h-12 mb-4 ${activeService === i ? 'text-white' : 'text-rose-400'}`} />
                <h3 className={`text-2xl font-bold mb-3 ${activeService === i ? 'text-white' : 'text-gray-800'}`}>
                  {service.title}
                </h3>
                <p className={`mb-4 ${activeService === i ? 'text-rose-50' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-2 ${activeService === i ? 'text-white' : 'text-rose-400'}`} />
                      <span className={activeService === i ? 'text-rose-50' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Beautiful Weddings</h2>
            <p className="text-xl text-gray-600">A glimpse of the magic we create</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-video"
              >
                <img
                  src={img}
                  alt={`Wedding ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold text-lg">View Gallery</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Happy Couples</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-rose-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-rose-400"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-rose-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-rose-100">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-rose-400 mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Let's Create Your Perfect Day</h2>
          <p className="text-xl text-gray-700 mb-12">
            Ready to start planning? Get in touch with us today for a free consultation!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <Phone className="w-10 h-10 text-rose-400 mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <Mail className="w-10 h-10 text-rose-400 mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@shaadibazaar.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <MapPin className="w-10 h-10 text-rose-400 mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">Mumbai, India</p>
            </div>
          </div>
          <button className="bg-rose-400 hover:bg-rose-500 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 shadow-xl">
            Book Free Consultation
          </button>
        </div>
      </section>

        
    </div>
  );
}
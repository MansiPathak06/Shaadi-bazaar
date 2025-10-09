import React from 'react';

import Image from 'next/image';

export default function Lightning() {
  return (
    <div className="min-h-screen bg-black text-white">
    
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/1200x/80/35/26/803526856d08f217fe02800a01d68b72.jpg"
            alt="Wedding Lighting Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-rose-400">
            LIGHTING & SOUND
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your celebrations with premium lighting decorations and quality DJ systems
          </p>
          <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Book Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-rose-400/10 p-8 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800"
              alt="Wedding Venue Setup"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ABOUT <span className="text-rose-400">US</span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We specialize in creating magical atmospheres for weddings and parties with our state-of-the-art lighting and sound systems. Our professional team ensures every moment of your celebration is perfectly illuminated and filled with crystal-clear sound.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From elegant lighting decorations to powerful DJ systems, we bring your vision to life with cutting-edge technology and creative expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            OUR <span className="text-rose-400">SERVICES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional lighting and sound solutions tailored for your special events
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-rose-400/50 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600"
              alt="Wedding Lighting"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-rose-400 mb-2">WEDDING LIGHTING</h3>
                <p className="text-sm text-gray-300">Elegant lighting setups for your dream wedding</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-rose-400/50 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600"
              alt="DJ Setup"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-rose-400 mb-2">DJ SYSTEMS</h3>
                <p className="text-sm text-gray-300">High-quality sound with professional DJ equipment</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-rose-400/50 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600"
              alt="Party Decorations"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-rose-400 mb-2">PARTY LIGHTING</h3>
                <p className="text-sm text-gray-300">Dynamic lighting effects for unforgettable parties</p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-rose-400/50 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600"
              alt="Decorative Lighting"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-rose-400 mb-2">DECORATIONS</h3>
                <p className="text-sm text-gray-300">Creative lighting decorations for all occasions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            OUR <span className="text-rose-400">WORK</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 md:col-span-1 md:row-span-2">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
                alt="Wedding Setup"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600"
                alt="Stage Lighting"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600"
                alt="DJ Performance"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600"
                alt="Fairy Lights"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600"
                alt="Outdoor Lighting"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              QUALITY <span className="text-rose-400">SOUND</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We deliver the best quality sound and attention-grabbing speaker systems to make your event memorable. Our professional DJ equipment ensures crystal-clear audio that fills every corner of your venue.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">Premium Sound Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">Professional DJ Equipment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">Wireless Microphones</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">Custom Audio Solutions</span>
              </div>
            </div>
            <button className="mt-8 border-2 border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Book Service Now
            </button>
          </div>
          <div className="bg-rose-400/10 p-8 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800"
              alt="DJ Equipment"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 text-rose-400">100+</div>
              <div className="text-gray-300 font-semibold">Events Completed</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 text-rose-400">50+</div>
              <div className="text-gray-300 font-semibold">Lighting Setups</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 text-rose-400">24/7</div>
              <div className="text-gray-300 font-semibold">Support Available</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4 text-rose-400">5★</div>
              <div className="text-gray-300 font-semibold">Client Ratings</div>
            </div>
          </div>
        </div>
      </section>

     

      
    </div>
  );
}

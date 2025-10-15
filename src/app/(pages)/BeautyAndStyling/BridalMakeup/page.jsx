import React from 'react';

export default function BridalMakeup() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <img
          src="https://i.pinimg.com/1200x/4f/89/ed/4f89edbb64befd5f56578b4ac7130939.jpg"
          alt="Bridal Makeup Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bridal Makeup Studio</h1>
          <p className="md:text-xl text-lg font-medium">
            Let's Make You Beautiful!
          </p>
        </div>
      </section>



      {/* Services Offered */}
      <section className="max-w-7xl mx-auto mt-20 px-6 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-light text-neutral-800 tracking-tight uppercase mb-4 relative z-10">
              Our Expertise
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full"></div>
          </div>
          <p className="text-neutral-600 text-xl tracking-widest uppercase mt-6 font-medium">We Make It Happen</p>
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-neutral-500 text-lg leading-relaxed">
              Discover our comprehensive range of professional makeup services, crafted to make your special moments unforgettable.
            </p>
          </div>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="space-y-12">
          {/* First Row - Premium Services */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {/* Bridal Air Brush */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/c0/ee/b0/c0eeb0904e3ad2a60f51a4a0ca8390e9.jpg"
                  alt="Bridal Air Brush"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Premium
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Bridal Air Brush
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ultra-smooth finish with flawless coverage that's perfect for all-day wear and photography.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Long-lasting
                  </span>
                </div>
              </div>
            </div>

            {/* Bridal HD Makeup */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/c6/02/f0/c602f03aafdd09f5be374a6d92509ddd.jpg"
                  alt="Bridal HD Makeup"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  HD Quality
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Bridal HD Makeup
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  High-definition, camera-ready makeup for glamorous bridal looks that shine in every photo.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    Photo-ready
                  </span>
                </div>
              </div>
            </div>

            {/* Traditional Makeup */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg"
                  alt="Traditional Bridal"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Classic
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Traditional Bridal
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Classic, timeless elegance following traditional techniques for the perfect Indian bride.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Timeless
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Special Occasion Services */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {/* Engagement */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/86/04/1c/86041c42eb4d0e7d52ae8c00e068c9ef.jpg"
                  alt="Engagement Makeup"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Elegant
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Engagement Makeup
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Subtle yet stunning looks that capture the joy and romance of your special engagement moments.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Radiant
                  </span>
                </div>
              </div>
            </div>

            {/* Sagan HD */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/74/c4/53/74c45399426cd154f424d87db30114a1.jpg"
                  alt="Sagan HD"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Ceremonial
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Sagan HD Makeup
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  High-definition perfection for your engagement and sagan ceremonies with flawless finish.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Flawless
                  </span>
                </div>
              </div>
            </div>

            {/* Pre Wedding */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/92/15/12/921512d02c68fa642584e1888e7da9e9.jpg"
                  alt="Pre-wedding Shoot"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Creative
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Pre-wedding Shoot
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Picture-perfect, camera-ready makeup designed specifically for your romantic pre-wedding photoshoot.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0012.586 3H7.414a1 1 0 00-.707.293L5.293 4.707A1 1 0 014.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Photo-ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>



      {/* Featured Bridal Looks - Large Image Grid */}
      <section className="max-w-6xl mx-auto mt-16 px-4">


        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Featured Bridal Looks
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Chic. Timeless. Unforgettable</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Featured Look 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/3c/bb/43/3cbb43a149577e938fb6dec0d84bdcc4.jpg"
              alt="Red Bridal Look"
              className="w-full h-96 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Classic Red Bridal</h3>
                <p className="text-sm">Traditional elegance with modern flair</p>
              </div>
            </div>
          </div>

          {/* Large Featured Look 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/10/17/27/1017277c26b957c3517b0b364dfe0d68.jpg"
              alt="Golden Bridal Look"
              className="w-full h-96 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Royal Golden Bridal</h3>
                <p className="text-sm">Luxurious and radiant perfection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeup Styles Showcase */}
      <section className="max-w-6xl mx-auto mt-16 px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Our Signature Styles
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Your style, our signature touch</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Enhanced Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Smokey Eyes */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/54/d3/f9/54d3f92e315ba141ef4e25382ad590bb.jpg"
                  alt="Smokey Eyes Makeup"
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Enhanced Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="bg-rose-500/95 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">Smokey Eyes</h3>
                    <p className="text-rose-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Dramatic & sultry
                    </p>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dewy Finish */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/f0/4f/c4/f04fc4b96e5e7619f8dae3c39f3e17eb.jpg"
                  alt="Dewy Finish Makeup"
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="bg-rose-500/95 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">Dewy Finish</h3>
                    <p className="text-rose-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Natural glow
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Matte Perfection */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/fe/8c/03/fe8c034e7aa744661ccf5efe08a1d09c.jpg"
                  alt="Matte Look Makeup"
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="bg-rose-500/95 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">Matte Perfection</h3>
                    <p className="text-rose-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Flawless finish
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Glam Goddess */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/18/db/1e/18db1e99c7323614dedab364d325acee.jpg"
                  alt="Glam Look Makeup"
                  className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="bg-rose-500/95 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">Glam Goddess</h3>
                    <p className="text-rose-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Bold & glamorous
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Before & After Style Section */}
      <section className="max-w-8xl mx-auto mt-16 px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            bridal Transformation
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Simple. Stunning. Unforgettable</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/736x/09/14/c4/0914c4ee311ea3669d11458f3fe64909.jpg"
              alt="Bridal Makeup 1"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="font-bold text-rose-500 text-lg">Natural Glam</h4>
              <p className="text-gray-600 text-sm">Soft, radiant & timeless</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/736x/6c/8c/6b/6c8c6baafafbf09c1dca0f7b420110ee.jpg"
              alt="Bridal Makeup 2"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="font-bold text-rose-500 text-lg">Bold & Beautiful</h4>
              <p className="text-gray-600 text-sm">Statement eyes & lips</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/736x/e8/52/c2/e852c2e6ae6bca22e36e984c72551a1e.jpg"
              alt="Bridal Makeup 3"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="font-bold text-rose-500 text-lg">Regal Elegance</h4>
              <p className="text-gray-600 text-sm">Traditional with a twist</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.pinimg.com/736x/e8/52/c2/e852c2e6ae6bca22e36e984c72551a1e.jpg"
              alt="Bridal Makeup 3"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="font-bold text-rose-500 text-lg">Regal Elegance</h4>
              <p className="text-gray-600 text-sm">Traditional with a twist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Full Width Masonry Style */}
      <section className="max-w-6xl mx-auto mt-16 px-4 pb-20">


        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Our Bridal Gallery
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Bridal beauty, reimagined</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="row-span-2">
            <img
              src="https://i.pinimg.com/736x/48/35/53/483553a23e7eb2d58f802ca15ee3b08c.jpg"
              alt="Gallery 1"
              className="object-cover h-full w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            />
          </div>
          <img
            src="https://i.pinimg.com/736x/32/9a/6b/329a6b6dc2568f2b064ef0590c926fcc.jpg"
            alt="Gallery 2"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <img
            src="https://i.pinimg.com/736x/a1/43/53/a14353704aa11c5a7aa29496317041e9.jpg"
            alt="Gallery 3"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <div className="row-span-2">
            <img
              src="https://i.pinimg.com/736x/ae/83/4a/ae834af24fcddbef0533c3831e714fa5.jpg"
              alt="Gallery 4"
              className="object-cover h-full w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            />
          </div>
          <img
            src="https://i.pinimg.com/1200x/3f/12/f5/3f12f585444d763cc58802e5f7a07fc1.jpg"
            alt="Gallery 5"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <img
            src="https://i.pinimg.com/1200x/bf/f9/be/bff9bea01c35711b3ce8707acab2089c.jpg"
            alt="Gallery 6"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <img
            src="https://i.pinimg.com/736x/de/30/e2/de30e2dcee6d10b4ec016acd5cf3e2f0.jpg"
            alt="Gallery 7"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <img
            src="https://i.pinimg.com/1200x/df/87/c1/df87c166645dd4d888c451998859388a.jpg"
            alt="Gallery 8"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
        </div>
      </section>

      {/* Welcome & Appointment */}
      <section className="flex flex-col md:flex-row max-w-5xl mx-auto px-4 md:px-0 mt-10 gap-8">
        <div className="flex-1 bg-white/80 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-rose-500 mb-2">Welcome to Bridal Makeup Studio 24x7</h2>
          <p className="text-gray-700">
            Book your dream bridal makeup, mehendi & hair styling with our professional team. We ensure that you look stunning on your special day!
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-rose-500 text-xl hover:scale-110 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-rose-500 text-xl hover:scale-110 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-rose-500 text-xl hover:scale-110 transition">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="flex-1 bg-rose-200/70 rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-lg mb-2 text-center">Quick Appointment</h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="rounded px-3 py-2 border border-gray-200 focus:outline-rose-400"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              className="rounded px-3 py-2 border border-gray-200 focus:outline-rose-400"
              required
            />
            <textarea
              placeholder="Message"
              rows={2}
              className="rounded px-3 py-2 border border-gray-200 focus:outline-rose-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-2 rounded font-semibold hover:bg-rose-600 transition"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

import React from 'react';

export default function BridalMakeup() {
  return (
    <div className="bg-gradient-to-b from-rose-200 to-white min-h-screen flex flex-col">
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
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center text-rose-500 mb-10">Services Offered</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
          {/* Bridal Air Brush */}
          <div className=" rounded-xl shadow-lg p-2 flex flex-col items-center">
            <img src="https://i.pinimg.com/736x/c0/ee/b0/c0eeb0904e3ad2a60f51a4a0ca8390e9.jpg" alt="Bridal Air Brush" className="rounded-lg h-56 w-full object-cover mb-3" />
            <h3 className="text-xl font-bold text-center text-rose-500">Bridal Air Brush</h3>
            <p className="text-gray-700 text-center">Ultra-smooth finish and perfect for all day wear.</p>
          </div>
          {/* Bridal HD Makeup */}
          <div className="rounded-xl shadow-lg p-2 flex flex-col items-center">
            <img src="https://i.pinimg.com/736x/c6/02/f0/c602f03aafdd09f5be374a6d92509ddd.jpg" alt="Bridal HD Makeup" className="rounded-lg h-56 w-full object-cover mb-3" />
            <h3 className="text-xl font-bold text-center text-rose-500">Bridal HD Makeup</h3>
            <p className="text-gray-700 text-center">High-definition, long-lasting for glamorous bridal looks.</p>
          </div>
          {/* Traditional Makeup */}
          <div className=" rounded-xl shadow-lg p-2 flex flex-col items-center">
            <img src="https://i.pinimg.com/1200x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg" alt="Bridal Traditional" className="rounded-lg h-56 w-full object-cover mb-3" />
            <h3 className="text-xl font-bold text-center text-rose-500">Traditional Bridal</h3>
            <p className="text-gray-700 text-center">Classic, elegant traditions for the perfect Indian bride.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-7">
          {/* Engagement */}
          <div className="rounded-xl shadow-lg p-2 flex flex-col items-center">
            <img src="https://i.pinimg.com/736x/86/04/1c/86041c42eb4d0e7d52ae8c00e068c9ef.jpg" alt="Engagement Makeup" className="rounded-lg h-56 w-full object-cover mb-3" />
            <h3 className="text-xl font-bold text-center text-rose-500">Engagement Makeup</h3>
            <p className="text-gray-700 text-center">Subtle & stunning for your special moments.</p>
          </div>
          {/* Sagan HD */}
          <div className=" rounded-xl shadow-lg p-2 flex flex-col items-center">
            <img src="https://i.pinimg.com/736x/74/c4/53/74c45399426cd154f424d87db30114a1.jpg" alt="Sagan HD" className="rounded-lg h-56 w-full object-cover mb-3" />
            <h3 className="text-xl font-bold text-center text-rose-500">Sagan HD Makeup</h3>
            <p className="text-gray-700 text-center">HD perfection for your engagement/sagan events.</p>
          </div>
          {/* Pre Wedding */}
          <div className=" rounded-xl shadow-lg p-2 flex flex-col items-center">
            <img src="https://i.pinimg.com/1200x/92/15/12/921512d02c68fa642584e1888e7da9e9.jpg" alt="Pre-wedding Shoot" className="rounded-lg h-56 w-full object-cover mb-3" />
            <h3 className="text-xl font-bold text-center text-rose-500">Pre-wedding Shoot</h3>
            <p className="text-gray-700 text-center">Flawless, photo-ready makeup for your shoots.</p>
          </div>
        </div>
      </section>

      {/* Featured Bridal Looks - Large Image Grid */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center text-rose-500 mb-10">Featured Bridal Looks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Featured Look 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://i.pinimg.com/736x/3c/bb/43/3cbb43a149577e938fb6dec0d84bdcc4.jpg" 
              alt="Red Bridal Look" 
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
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
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
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
        <h2 className="text-3xl font-bold text-center text-rose-500 mb-10">Our Signature Styles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://i.pinimg.com/736x/54/d3/f9/54d3f92e315ba141ef4e25382ad590bb.jpg" 
              alt="Smokey Eyes" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-rose-500/90 p-3 text-white text-center font-semibold">
              Smokey Eyes
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://i.pinimg.com/1200x/f0/4f/c4/f04fc4b96e5e7619f8dae3c39f3e17eb.jpg" 
              alt="Dewy Finish" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-rose-500/90 p-3 text-white text-center font-semibold">
              Dewy Finish
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://i.pinimg.com/736x/fe/8c/03/fe8c034e7aa744661ccf5efe08a1d09c.jpg" 
              alt="Matte Look" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-rose-500/90 p-3 text-white text-center font-semibold">
              Matte Perfection
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="https://i.pinimg.com/736x/18/db/1e/18db1e99c7323614dedab364d325acee.jpg" 
              alt="Glam Look" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-rose-500/90 p-3 text-white text-center font-semibold">
              Glam Goddess
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Style Section */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold text-center text-rose-500 mb-10">Bridal Transformation</h2>
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
        </div>
      </section>

      {/* Gallery - Full Width Masonry Style */}
      <section className="max-w-6xl mx-auto mt-16 px-4 pb-20">
        <h2 className="text-3xl font-bold text-center text-rose-500 mb-10">Our Bridal Gallery</h2>
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

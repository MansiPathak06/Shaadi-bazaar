import React from "react";

const blogPosts = [
  {
    image: "https://i.pinimg.com/1200x/5a/f5/32/5af53242c2bec5d326ed06f8c61d5db2.jpg",
    title: "The Ultimate Bridal Lehenga Guide 2025: Colors, Fabrics & Designer Picks",
    category: "Bridal Wear",
    date: "October 6, 2025",
  },
  {
    image: "https://i.pinimg.com/1200x/1d/d7/6a/1dd76a5e77e77c29d6fe07a3af19a01d.jpg",
    title: "Top 10 Groom Outfit Trends: From Classic Sherwanis to Modern Indo-Western",
    category: "Groom Wear",
    date: "September 22, 2025",
  },
  {
    image: "https://i.pinimg.com/1200x/93/19/63/931963ed099258ef8250b3fa509ff6fe.jpg",
    title: "Bridal Jewellery Essentials: Necklaces, Maang Tikka & Jhumkas That Steal the Show",
    category: "Jewellery",
    date: "September 15, 2025",
  },
  {
    image: "https://i.pinimg.com/1200x/45/05/54/450554e455e81c56ee8b9b73eacb5811.jpg",
    title: "Wedding Planning Checklist: Your Complete Month-by-Month Guide",
    category: "Wedding Planning",
    date: "September 3, 2025",
  },
  {
    image: "https://i.pinimg.com/736x/42/fc/4b/42fc4b8ffb47d732b44f6126e5ee05a1.jpg",
    title: "Mehendi Ceremony Outfits: Trendy Colors & Styles for the Bride & Groom",
    category: "Ceremony Outfits",
    date: "August 18, 2025",
  },
  {
    image: "https://i.pinimg.com/736x/88/50/ea/8850ea685cf18e8ad48758a6164269a1.jpg",
    title: "How to Choose the Perfect Wedding Caterer: Questions to Ask & Budget Tips",
    category: "Catering",
    date: "July 29, 2025",
  },
  {
    image: "https://i.pinimg.com/736x/49/cd/d7/49cdd7c307f8c890be822f5f99371a7c.jpg",
    title: "Destination Wedding Décor Ideas: Transform Any Venue into a Fairytale",
    category: "Décor",
    date: "July 12, 2025",
  },
  {
    image: "https://i.pinimg.com/736x/51/d8/de/51d8de9f32d9a169e83961c172209e4d.jpg",
    title: "Gold vs. Diamond: Choosing the Right Jewellery for Your Wedding Day",
    category: "Jewellery",
    date: "June 28, 2025",
  },
  {
    image: "https://i.pinimg.com/736x/47/02/60/470260922cb6bc81a759b15fc00cd675.jpg",
    title: "Wedding Photography Packages: What to Expect & How to Choose the Best",
    category: "Photography",
    date: "June 10, 2025",
  },
];

function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-rose-50 to-white min-h-screen flex flex-col">
      <header className="w-full py-12 px-6 bg-rose-400 text-white text-center shadow-lg">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3 font-serif">
          Our Blogs
        </h1>
        <p className="text-base md:text-xl font-medium max-w-3xl mx-auto">
          Your ultimate guide to wedding outfits, jewellery, planning tips & everything you need for your perfect celebration
        </p>
      </header>
<main className="container mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 py-16 md:py-20 flex-1">
  <div className="mb-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif animate-fade-in">
      Latest Articles & Guides
    </h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Discover expert advice on bridal wear, groom outfits, jewellery, décor, and all wedding services in one place
    </p>
  </div>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {blogPosts.map((post, index) => (
      <div
        key={post.title}
        className="rounded-2xl bg-white border border-rose-100 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-700 flex flex-col overflow-hidden group relative"
        style={{ 
          animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`
        }}
      >
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-3">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 text-xs font-bold rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
              {post.category}
            </span>
          </div>
          <h2 className="text-lg font-bold font-serif text-gray-800 mb-3 leading-snug group-hover:text-rose-600 transition-colors duration-300">
            {post.title}
          </h2>
          <div className="text-sm text-gray-500 mb-5 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
          </div>
          <button
            className="mt-auto px-6 py-3 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 text-white font-bold rounded-xl hover:from-rose-500 hover:via-pink-500 hover:to-rose-600 transition-all duration-300 outline-none focus:ring-4 focus:ring-rose-300 shadow-md hover:shadow-xl transform hover:scale-105"
            type="button"
          >
            READ MORE
          </button>
        </div>
      </div>
    ))}
  </div>
</main>

<style>{`
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
`}</style>


    
    </div>
  );
}

export default BlogPage;
"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Camera,
  Video,
  Music,
  Utensils,
  Car,
  Gift,
  Flower,
  Clipboard,
  Mail,
  Plane,
  MapPin,
  Sparkles,
  Calendar,
} from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    {
      name: "Accessories",
      icon: Gift,
      heading: "Start hiring your accessories vendors",
      hasMegaMenu: true,
      dropdowns: [
        { name: "Jewelry", icon: Gift },
        { name: "Bags & Purses", icon: Gift },
        { name: "Hair Accessories", icon: Sparkles },
        { name: "Shoes", icon: Gift },
        { name: "Watches", icon: Gift },
        { name: "Belts", icon: Gift },
      ],
    },
    {
      name: "Outfits",
      icon: Sparkles,
      heading: "Start hiring your outfit vendors",
      hasMegaMenu: true,
      dropdowns: [
        { name: "Bridal Wear", icon: Sparkles },
        { name: "Groom Wear", icon: Gift },
        { name: "Party Wear", icon: Sparkles },
        { name: "Traditional Wear", icon: Gift },
        { name: "Western Wear", icon: Sparkles },
        { name: "Kids Outfits", icon: Gift },
      ],
    },
    {
      name: "Catering & Decor",
      icon: Utensils,
      heading: "Start hiring your catering & decor vendors",
      hasMegaMenu: true,
      dropdowns: [
        { name: "Wedding Catering", icon: Utensils },
        { name: "Floral Decor", icon: Flower },
        { name: "Stage Decoration", icon: Flower },
        { name: "Lighting", icon: Sparkles },
        { name: "Furniture Rental", icon: Gift },
        { name: "Theme Decor", icon: Flower },
      ],
    },
    {
      name: "Accommodation",
      icon: Plane,
      heading: "Start hiring your accommodation vendors",
      hasMegaMenu: true,
      dropdowns: [
        { name: "Hotels", icon: Plane },
        { name: "Resorts", icon: Plane },
        { name: "Guest Houses", icon: Plane },
        { name: "Banquet Halls", icon: MapPin },
        { name: "Farmhouses", icon: MapPin },
        { name: "Beach Properties", icon: Plane },
      ],
    },
    {
      name: "Venue & Location",
      icon: MapPin,
      heading: "Start hiring your venue & location vendors",
      hasMegaMenu: true,
      showDestinationCard: true,
      dropdowns: [
        { name: "Outdoor Venues", icon: MapPin },
        { name: "Indoor Venues", icon: MapPin },
        { name: "Destination Wedding", icon: Plane },
        { name: "Banquet Halls", icon: MapPin },
        { name: "Gardens", icon: Flower },
        { name: "Beach Venues", icon: Plane },
      ],
    },
    {
      name: "Beauty & Styling",
      icon: Sparkles,
      heading: "Start hiring your beauty & styling vendors",
      hasMegaMenu: true,
      dropdowns: [
        { name: "Bridal Makeup", icon: Sparkles },
        { name: "Hair Styling", icon: Sparkles },
        { name: "Mehendi Artists", icon: Sparkles },
        { name: "Spa Services", icon: Sparkles },
        { name: "Grooming", icon: Sparkles },
        { name: "Nail Art", icon: Sparkles },
      ],
    },
    {
      name: "Event Planning",
      icon: Calendar,
      heading: "Start hiring your event planning vendors",
      hasMegaMenu: true,
      dropdowns: [
        { name: "Wedding Planning", icon: Calendar },
        { name: "Destination Wedding", icon: Plane },
        { name: "Engagement Planning", icon: Calendar },
        { name: "Cocktail Planning", icon: Calendar },
      ],
    },
    {
      name: "Blogs",
      icon: Clipboard,
      hasMegaMenu: false,
      link: "/blogs",
    },
    {
      name: "Contact Us",
      icon: Mail,
      hasMegaMenu: false,
      link: "/contact",
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-rose-500">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-20 w-40"
                />
              </h1>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Canvas Prints"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-rose-500">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-rose-500">
                <User size={20} />
                <span className="text-sm font-medium">Sign in</span>
              </button>

              <button className="flex items-center space-x-1 text-gray-700 hover:text-rose-500">
                <ShoppingCart size={20} />
                <span className="text-sm font-medium">Cart</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-rose-500"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="bg-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center h-12 space-x-1">
            {navigationLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setOpenDropdown(index)}
                onMouseLeave={() => link.hasMegaMenu && setOpenDropdown(null)}
              >
                {link.hasMegaMenu ? (
                  <button className="px-3 py-3 text-md font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors duration-200 cursor-pointer">
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.link}
                    className="px-3 py-3 text-lg font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* Mobile Links */}
              {navigationLinks.map((link, index) => (
                <div key={index} className="mb-2">
                  {link.hasMegaMenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 font-medium rounded transition-colors duration-200"
                      >
                        {link.name}
                      </button>

                      {openDropdown === index && (
                        <div className="pl-4 mt-1 space-y-1">
                          {link.dropdowns.map((item, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded transition-colors duration-150"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 font-medium rounded transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Full Width Mega Dropdown */}
        {openDropdown !== null && navigationLinks[openDropdown].hasMegaMenu && (
          <div
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50"
            onMouseEnter={() => setOpenDropdown(openDropdown)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Heading */}
              <h3 className="text-xl font-medium text-gray-900 mb-6 uppercase">
                {navigationLinks[openDropdown].heading}
              </h3>

              {/* Grid of Links with Icons */}
              <div className="grid grid-cols-3 gap-6">
                {navigationLinks[openDropdown].dropdowns.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-rose-50 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-rose-100 transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-rose-500" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-rose-500">
                        {item.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Destination Weddings Card (for Venue & Location) */}
              {navigationLinks[openDropdown].showDestinationCard && (
                <div className="mt-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Destination weddings
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Easily plan your international wedding.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Plane className="w-12 h-12 text-rose-500" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

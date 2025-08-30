"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for shadow and background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex justify-center fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="flex w-[90%] max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="website-name flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
            B
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            Blog<span className="text-green-600">Sphere</span>
          </h1>
        </div>

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition duration-300 relative group"
          >
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition duration-300 relative group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 transition duration-300 relative group"
          >
            Images
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Button (desktop) */}
        <div className="hidden md:flex">
          <button className="px-6 py-2 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-16 w-[90%] max-w-7xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center gap-6 py-6 md:hidden animate-fade-in-down">
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-600 font-medium transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Images
          </a>
          <button className="px-6 py-2 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition duration-300">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex w-[90%] items-center justify-between max-w-7xl px-6 py-4 rounded-2xl bg-amber-300">
        
        {/* Website name */}
        <div className="website-name">
          <h1 className="font-bold text-lg">Blogs Site</h1>
        </div>

        {/* Nav links (hidden on mobile) */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gray-700">Blogs</a>
          <a href="#" className="hover:text-gray-700">Contact Us</a>
          <a href="#" className="hover:text-gray-700">Images</a>
        </nav>

        {/* Button (hidden on mobile) */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100">
            Button
          </button>
        </div>

        {/* Mobile menu button (hamburger) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] max-w-7xl bg-amber-300 rounded-2xl flex flex-col items-center gap-4 py-6 md:hidden">
          <a href="#" className="hover:text-gray-700" onClick={() => setIsOpen(false)}>Blogs</a>
          <a href="#" className="hover:text-gray-700" onClick={() => setIsOpen(false)}>Contact Us</a>
          <a href="#" className="hover:text-gray-700" onClick={() => setIsOpen(false)}>Images</a>
          <button className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100">
            Button
          </button>
        </div>
      )}
    </div>
  );
}

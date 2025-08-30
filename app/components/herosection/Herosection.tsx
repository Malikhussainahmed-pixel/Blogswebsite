"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex justify-center mt-12 sm:mt-24 px-4 pt-16 sm:pt-8">
      <div className="relative w-full max-w-7xl h-[500px] sm:h-[550px] rounded-xl overflow-hidden shadow-xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/heroimage.jpg"
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center sm:items-start justify-center h-full px-6 sm:px-12 md:px-16 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md"
          >
            Welcome to <span className="text-green-400">BlogSphere</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-lg drop-shadow-md"
          >
            Explore inspiring stories, trends, and insights tailored for curious
            minds. Your journey to fresh perspectives starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition duration-300 w-full sm:w-auto">
              Explore Blogs
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow hover:shadow-md hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

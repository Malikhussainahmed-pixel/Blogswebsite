"use client";
import { motion } from "framer-motion";

export default function BogFeatured() {
  return (
    <section className="py-12 flex justify-center">
      <div className="flex flex-col sm:flex-row w-[90%] max-w-7xl ">
        
        {/* Image - slides from left */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            duration: 0.6,
          }}
          className="w-full sm:w-1/2 h-60 sm:h-auto"
        >
          <img
            src="/images/heroimage.jpg"
            alt="Featured Blog"
            className="w-full h-full object-cover rounded-t-3xl sm:rounded-none sm:rounded-l-3xl"
          />
        </motion.div>

        {/* Text - slides from right */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            duration: 0.6,
          }}
          className="w-full sm:w-1/2 flex flex-col justify-center p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Featured Blog Title
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-700">
            Discover our latest blog post that shares{" "}
            <span className="font-semibold">insights, tips, and valuable information</span> 
            for your next big project or adventure.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-green-500 px-6 py-3 rounded-xl text-white text-base font-semibold shadow-md hover:bg-green-600 transition-all"
          >
            View Blog
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

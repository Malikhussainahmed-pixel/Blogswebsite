"use client";
import { motion, Variants } from "framer-motion";
// @ts-ignore
import cardsData from "../jsondata/cardsdata.json";

export default function Cards() {
 const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (index: number = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.08, // Faster stagger
        type: "spring",
        stiffness: 120, // More bounce
        damping: 14, // Smooth landing
        mass: 0.8,
      },
    }),
  };

  return (
    <section className="flex justify-center mt-16 mb-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="relative  rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            variants={cardVariants}
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src="/images/heroimage.jpg"
                alt={card.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-2xl font-extrabold text-black tracking-wide mb-2 line-clamp-1">
                {card.title}
              </h2>
              <p className="text-base text-black/80 font-medium flex-1 mb-4 leading-relaxed line-clamp-3">
                {card.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Save Changes
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

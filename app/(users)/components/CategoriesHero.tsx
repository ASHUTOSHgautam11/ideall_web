"use client";

import { motion } from "framer-motion";

export default function CategoriesHero() {
  return (
    <section className="relative w-full mb-20 bg-white">
      {/* Content */}
      <div className="relative z-10 flex justify-center h-full   px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-primary bg-clip-text text-transparent">
              Product Categories
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of premium interior solutions sourced from trusted global manufacturers.
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-white opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/(users)/components/ui/button";

interface HeroSectionProps { }

const images = [
  "/assets/images/global-trade-1.jpg",
  "/assets/images/global-trade-2.jpg",
  "/assets/images/global-trade-3.jpg",
  "/assets/images/global-trade-4.jpg",
];

const StoryHeroSection: React.FC<HeroSectionProps> = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="pt-14 sm:pt-24 lg:pt-10 pb-16 px-4 sm:px-6 lg:px-20 bg-[#c0b2a4] flex items-center justify-center">
    <section className="pt-14 sm:pt-24 lg:pt-10 pb-16 px-4 sm:px-6 lg:px-20 bg-[#d1bba4] flex items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left mt-20">
            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#926f4e] mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Global Vision,
              <span className="text-primary block mt-3 sm:mt-4">
                Grounded in Trust
              </span>
            </h1>

            <p className="text-base sm:text-sm lg:text-lg text-gray-900 mb-5 sm:mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Founded in Singapore in 2002 as part of the IDeall Group of
              Companies, Ideall Solutionz began with a clear mission: to simplify
              and optimize global trade in the lifestyle goods industry. Today, we
              are a leading sourcing and trading partner, empowering clients with
              seamless access to high-quality products from around the world.
            </p>

            {/* <div className="inline-flex items-center px-3 py-1.5 bg-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Crafting Excellence Since 1995
            </div> */}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/40 w-full sm:w-auto text-white text-md"
              >
                Our Story
              </Button>
              {/* <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Our Journey
              </Button> */}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Image Box */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full 
      h-72 sm:h-75 md:h-80 lg:h-[500px] mt-20">

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage]}
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            

            
          </div>


        </div>
      </div>
    </section>

  );
};

export default StoryHeroSection;

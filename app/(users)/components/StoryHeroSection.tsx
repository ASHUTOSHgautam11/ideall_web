'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/(users)/components/ui/button";

interface HeroSectionProps { }

const images = [
  "/assets/global-trade-network2.jpg",
  "/assets/global-trade-network1.jpg",
  "/assets/global-trade-network3.jpg",
  "/assets/global-trade-network2.jpg",
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
    <section className="pt-20 sm:pt-28 lg:pt-6 pb-10 sm:pb-10 lg:pb-0 px-4 sm:px-6 lg:px-20 bg-[#c0b2a4] min-h-[60vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center text-center">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-6 sm:mt-5">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1
              className="text-4xl sm:text-4xl lg:text-6xl font-bold text-[#926f4e] mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Global Vision,
              <span className="text-primary block mt-4 sm:mt-5">Grounded in Trust</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-900 mb-4 sm:mb-6 leading-normal max-w-xl mx-auto lg:mx-0">
              Founded in Singapore in 2002 as part of the IDeall Group of Companies, Ideall Solutionz began with a clear mission: to simplify and optimize global trade in the lifestyle goods industry. Today, we are a leading sourcing and trading partner, empowering clients to achieve their business goals through seamless access to high-quality products from around the world.
            </p>

            <div className="inline-flex items-center px-3 py-1.5 bg-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Crafting Excellence Since 1995
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/40 w-full sm:w-auto text-white"
              >
                Our Story
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Our Journey
              </Button>
            </div>
          </div>

          {/* Right Content - Dynamic Hero Image with Stats */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-72 sm:h-80 md:h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
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

            {/* Floating Stats */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-6 shadow-lg border border-gray-200">
              <div className="text-xl sm:text-2xl font-bold text-primary text-center sm:text-left">
                28+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                Years of Excellence
              </div>
            </div>

            <div className="absolute -top-4 sm:-top-6 right-1/2 sm:right-6 transform translate-x-1/2 sm:translate-x-0 bg-white/90 backdrop-blur-md rounded-xl p-3 sm:p-6 shadow-lg border border-gray-200">
              <div className="text-xl sm:text-2xl font-bold text-primary text-center sm:text-left">
                5000+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                Projects Completed
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoryHeroSection;

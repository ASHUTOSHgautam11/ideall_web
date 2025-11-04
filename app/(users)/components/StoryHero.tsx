'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for slides
type TextSlide = {
  type: 'text';
  title: string;
  content: string[];
  bg: string;
};

type IconSlide = {
  type: 'icon';
  iconBg: string;
  innerBg: string;
  label: string;
  bg: string;
};

type Slide = TextSlide | IconSlide;

// Slides array
const slides: Slide[] = [
  {
    type: 'text',
    title: 'Founded on Trade Expertise',
    content: [
      `Ideal Solutions Singapore PTE LTD was established as an international trade organization with a mission to bridge the gap between global manufacturers and discerning clients seeking premium interior solutions.`,
      `Our founders recognized the complexity of international procurement and the need for specialized expertise in navigating global supply chains.`,
      `From our base in Singapore—a strategic hub for Asian and global trade—we leverage our position to access the finest manufacturers across key production markets while providing comprehensive trade facilitation services to our partners worldwide.`,
    ],
    bg: '/assets/story-bg1.jpg',
  },
  {
    type: 'icon',
    iconBg: 'bg-[#272557]',
    innerBg: 'bg-white',
    label: 'Global Trade Network',
    bg: '/assets/global-trade-network1.jpg',
  },
  {
    type: 'icon',
    iconBg: 'bg-orange-100',
    innerBg: 'bg-orange-500',
    label: 'Quality Assurance Systems',
    bg: '/assets/global-trade-network2.jpg',
  },
  {
    type: 'text',
    title: 'Expanding Our Capabilities',
    content: [
      `As our reputation for reliability and quality grew, we expanded our focus across four key categories: Flooring, Furniture, Fabrics, and Fashion Walls. This diversification allowed us to serve as a comprehensive procurement partner for interior design projects of any scale.`,
      `We developed sophisticated quality assurance protocols, established partnerships with leading manufacturers worldwide, and built a team of trade specialists with deep expertise in international commerce, logistics, and quality control.`,
      `Operating from Singapore, we maintain strategic relationships with manufacturers across Asia.`,
    ],
    bg: '/assets/expanding-capabilities.jpg',
  },
  {
    type: 'text',
    title: 'Leading International Trade Solutions',
    content: [
      `Today, Ideal Solutions stands as a trusted partner in international trade, known for our unwavering commitment to quality, transparency, and reliability.`,
      `Our comprehensive approach combines market intelligence, rigorous quality control, and expert trade facilitation.`,
      `Operating from Singapore, we maintain strategic relationships with manufacturers across Asia.`,
      `Our “Our Sourcing, Your Strength” philosophy reflects our commitment to being the procurement backbone for our partners’ success.`,
    ],
    bg: '/assets/international-trade.jpg',
  },
  {
    type: 'icon',
    iconBg: 'bg-blue-100',
    innerBg: 'bg-blue-500',
    label: 'Global Partnership Network',
    bg: '/assets/global-trade-network3.jpg',
  },
];

export default function StoryHero(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = (): void => setCurrent((prev) => (prev + 2) % slides.length);
  const prevSlide = (): void => setCurrent((prev) => (prev - 2 + slides.length) % slides.length);

  // Auto-slide logic
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 2) % slides.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  // Render card
  const renderCard = (item: Slide, index: number): JSX.Element => {
    if (item.type === 'text') {
      return (
        <div
          key={index}
          className="relative flex flex-col justify-between bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${item.bg})` }}
          ></div>

          {/* Content layer */}
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#272557] mb-4 sm:mb-6">
              {item.title}
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-900 leading-relaxed">
              {item.content.map((p, i) => (
                <p key={i} className="text-sm sm:text-base md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Icon slide
    return (
      <div
        key={index}
        className="relative flex flex-col items-center justify-center bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.bg})` }}
        ></div>

        <div className="relative z-10 flex flex-col items-center">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${item.iconBg} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.innerBg} rounded-full`}></div>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-900 text-center mt-3 sm:mt-4">
            {item.label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary mb-4">
            Our Story
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 max-w-4xl mx-auto leading-relaxed">
            We don’t just find suppliers — we verify and trust them. We don’t just ship products —
            we personally manage quality and logistics at every step. We bring the world to your
            doorstep, so you can focus on what matters most: growing your business.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative min-h-[420px] md:min-h-[480px] lg:min-h-[520px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch"
            >
              <div className="h-full">{renderCard(slides[current], current)}</div>
              <div className="h-full">{renderCard(slides[(current + 1) % slides.length], current + 1)}</div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:-left-6 md:-left-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#272557]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:-right-6 md:-right-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#272557]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 space-x-3 pb-6">
          {Array.from({ length: slides.length / 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i * 2)}
              className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 ${current / 2 === i ? 'bg-[#272557] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

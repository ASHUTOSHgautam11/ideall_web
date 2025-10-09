'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/app/(users)/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Slide Data
const slides = [
  {
    img: 'assets/slider/slider3.png',
    alt: 'Premium Flooring Solutions',
    title: 'Premium Flooring Solutions',
    description: 'Global sourcing of luxury flooring materials with quality assurance',
    cta: 'Explore Flooring',
    href: '/product-categories/flooring'
  },
  {
    img: 'assets/slider/slider6.png',
    alt: 'Luxury Furniture Sourcing',
    title: 'Luxury Furniture Sourcing',
    description: 'International procurement of high-end furniture pieces',
    cta: 'View Collections',
    href: '/product-categories/furniture'
  },
  {
    img: 'assets/slider/slider5.jpg',
    alt: 'Designer Fabrics & Textiles',
    title: 'Designer Fabrics & Textiles',
    description: 'Premium textiles from global manufacturers',
    cta: 'Discover Fabrics',
    href: '/product-categories/fabrics'
  },
  {
    img: 'assets/slider/slider2.jpg',
    alt: 'Fashion Walls & Interior Accents',
    title: 'Fashion Walls & Interior Accents',
    description: 'Statement walls and decorative elements for distinctive interiors',
    cta: 'See Wall Solutions',
    href: '/product-categories/walls'
  },
] as const;

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateSlides('prev');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateSlides('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateSlides = (direction: 'next' | 'prev') => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (direction === 'next') {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }

    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === current) return;

    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const currentSlide = slides[current];

  return (
    <section
      className="relative h-[82vh] flex items-center justify-center overflow-hidden focus:outline-none"
      tabIndex={0}
      aria-label="Hero image carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.img}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
            quality={85}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => navigateSlides('prev')}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => navigateSlides('next')}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-gray-900/60 backdrop-blur-none border border-gray-700 p-6 sm:p-8 md:p-10 shadow-2xl animate-in slide-in-from-bottom duration-1000">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {currentSlide.title}
          </h1>

          <p
            className="text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {currentSlide.description}
          </p>

          {/* Badges */}
          {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {['🌍 Global Sourcing', '✅ Quality Assurance', '📦 Trade Facilitation'].map((item, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium shadow-md hover:bg-white/20 transition-colors"
              >
                {item}
              </span>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg transition-all duration-300"
              asChild
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300"
              asChild
            >
              <Link href={currentSlide.href}>{currentSlide.cta}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 sm:bottom-8 flex space-x-2 sm:space-x-3 z-20 animate-in fade-in duration-1000">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-500 ${idx === current
              ? 'bg-white scale-110 sm:scale-125 ring-1 sm:ring-2 ring-white/70'
              : 'bg-white/50 hover:bg-white/75'
              }`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/80 text-xs sm:text-sm font-medium z-20 bg-black/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
        {current + 1} / {slides.length}
      </div>
    </section>
  );
}

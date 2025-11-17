// Updated responsive Slider component
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/app/(users)/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface Slide {
  img?: string;
  alt: string;
  title: string;
  description?: string;
  cta?: string;
  href?: string;
  type?: 'hero' | 'default';
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const slides: Slide[] = [
  {
    type: 'hero',
    alt: 'Your Partner for Life Style Goods & Finishing Solutionz',
    title: 'Your Partner for Life Style Goods & Finishing Solutionz',
    subtitle: 'Our Sourcing, Your Strength',
    description:
      'Headquartered in Singapore and active across Asia, the Middle East, and Africa, Ideall Solutionz operates in over 40+ countries. Our long-standing supplier partnerships and regional expertise culminated over the past two decades, allow us to empower global businesses by connecting them to high-quality lifestyle goods at the right place, price and time.',
    primaryCta: 'Discover Your Advantage',
    secondaryCta: 'Contact Our Sourcing Experts',
    href: '/contact',
  },
  {
    img: '/assets/slider/slider3.png',
    alt: 'Premium Flooring Solutions',
    title: 'Premium Flooring Solutions',
    description: 'Global sourcing of luxury flooring materials with quality assurance',
    cta: 'Explore Flooring',
    href: '/product-categories/floorings',
  },
  {
    img: '/assets/slider/slider6.png',
    alt: 'Luxury Furniture Sourcing',
    title: 'Luxury Furniture Sourcing',
    description: 'International procurement of high-end furniture pieces',
    cta: 'View Collections',
    href: '/product-categories/furniture',
  },
  {
    img: '/assets/slider/slider5.jpg',
    alt: 'Designer Fabrics & Textiles',
    title: 'Designer Fabrics & Textiles',
    description: 'Premium textiles from global manufacturers',
    cta: 'Discover Fabrics',
    href: '/product-categories/fabrics',
  },
  {
    img: '/assets/slider/slider2.jpg',
    alt: 'Fashion Walls & Interior Accents',
    title: 'Fashion Walls & Interior Accents',
    description: 'Statement walls and decorative elements for distinctive interiors',
    cta: 'See Wall Solutions',
    href: '/product-categories/walls',
  },
];

export default function Slider(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 900);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowLeft') navigateSlides('prev');
      if (e.key === 'ArrowRight') navigateSlides('next');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navigateSlides = (direction: 'next' | 'prev'): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) =>
      direction === 'next' ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
    );
    setTimeout(() => setIsTransitioning(false), 900);
  };

  const goToSlide = (idx: number): void => {
    if (isTransitioning || idx === current) return;
    setIsTransitioning(true);
    setCurrent(idx);
    setTimeout(() => setIsTransitioning(false), 900);
  };

  const currentSlide = slides[current];

  return (
    <section
      className="relative h-[80vh] md:h-[82vh] lg:h-[85vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
    >
      {currentSlide?.type === 'hero' ? (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/assets/HomeHero1.mp4"
              poster="/assets/HomeHero.png"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031024]/90 via-[#031024]/70 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] flex flex-col lg:flex-row items-center h-full px-4 sm:px-8 md:px-12">
            <div
              className="
                w-full lg:w-1/2 text-left text-white
                pt-28 pb-8
                sm:pt-32 sm:pb-12
                md:pt-40
                lg:pt-28 lg:pb-16
                laptopFix:pt-40   /* 🔥 FIX FOR 1286px LAPTOPS ONLY */
                flex flex-col justify-center
              "
            >
              <h1
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-snug"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {currentSlide.title}
              </h1>

              {currentSlide.subtitle && (
                <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-semibold mb-3 sm:mb-4">
                  {currentSlide.subtitle}
                </p>
              )}

              {currentSlide.description && (
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xl mb-6 lg:mb-8 leading-relaxed">
                  {currentSlide.description}
                </p>
              )}

              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4">
                {currentSlide.primaryCta && currentSlide.href && (
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white px-5 sm:px-7 md:px-8 py-3.5 sm:py-4 text-sm md:text-lg font-semibold shadow-lg"
                    asChild
                  >
                    <Link href={currentSlide.href}>{currentSlide.primaryCta}</Link>
                  </Button>
                )}

                {currentSlide.secondaryCta && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-5 sm:px-7 md:px-8 py-3.5 sm:py-4 text-sm md:text-lg font-semibold"
                    asChild
                  >
                    <Link href="/contact">{currentSlide.secondaryCta}</Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="hidden lg:block w-1/2 h-full" />
          </div>
        </>
      ) : (
        <>
          {slides.map((slide, idx) =>
            slide.img ? (
              <div
                key={`${slide.img}-${idx}`}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
                  }`}
                aria-hidden={idx !== current}
              >
                <Image src={slide.img} alt={slide.alt} fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
              </div>
            ) : null
          )}

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="bg-gray-900/60 border border-gray-700 p-4 sm:p-6 md:p-10 shadow-2xl animate-in slide-in-from-bottom duration-1000">
              <h1
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-5 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {currentSlide.title}
              </h1>

              {currentSlide.description && (
                <p className="text-xs sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {currentSlide.description}
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-5 text-sm sm:text-lg font-semibold"
                  asChild
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                {currentSlide.href && currentSlide.cta && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-5 text-sm sm:text-lg font-semibold"
                    asChild
                  >
                    <Link href={currentSlide.href}>{currentSlide.cta}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${idx === current ? 'bg-white scale-125 ring-2 ring-white/80' : 'bg-white/50 hover:bg-white/80'
              }`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current}
          />
        ))}
      </div>

      {/* Nav Arrows */}
      <button
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
        onClick={() => navigateSlides('prev')}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full"
        onClick={() => navigateSlides('next')}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Counter */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/80 text-xs sm:text-sm font-medium z-20 bg-black/30 px-2 sm:px-3 py-1 rounded-full">
        {current + 1} / {slides.length}
      </div>
    </section>
  );
}

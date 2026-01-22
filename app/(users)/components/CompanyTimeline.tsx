'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2002',
    title: 'Founded in Singapore',
    description:
      'IDeall Solutionz Singapore Pte Ltd, the flagship company of the IDeall Solutionz Group (Group revenues above US$30 million), was established with a commitment to fairness, integrity, and accountability.',
  },
  {
    year: '2006',
    title: 'Market recognition for growth',
    description:
      'Recognised among Singapore’s Top 50 Fastest Growing SMEs, reflecting strong early momentum and disciplined execution.',
  },
  {
    year: '2008',
    title: 'Resilience under pressure',
    description:
      'Amid global uncertainty in trade and confidence, we sustained performance—recording continued growth and reaching approximately SGD 20 million turnover.',
  },
  {
    year: '2014',
    title: 'Export achievement',
    description:
      'Recognised as a Top 50 Exporter in the SME 100 listing, reinforcing our increasing international reach.',
  },
  {
    year: '2017',
    title: 'Featured in DECOR Magazine',
    description:
      'Published in DECOR Magazine, IDeallss was recognised for being at the forefront of addressing supply chain complexities and building clear value propositions for customers.',
  },
  {
    year: '2020',
    title: 'Presented at DOMOTEX',
    description:
      'Presented at DOMOTEX, engaging international buyers and design professionals, and reinforcing IDeallss’ position as a solutions-led lifestyle partner.',
  },
];

export default function CompanyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: 'left' | 'right' = 'right') => {
    if (!timelineRef.current) return;

    timelineRef.current.scrollBy({
      left: direction === 'left' ? -350 : 350,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timelineRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        // Reset to start when near end
        timelineRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollTimeline('right');
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-primary"
        >
          Our Milestones
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base text-center sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4 mb-12"
        >
          From our foundation to becoming a global leader, each milestone marks our
          commitment to innovation and excellence.
        </motion.p>

        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={() => scrollTimeline('left')}
            aria-label="Scroll left"
            className="bg-gradient-to-r from-primary to-primary-600 text-white p-3 rounded-full shadow-xl hover:from-secondary hover:to-purple-600 transition-all duration-300 mr-4 z-20 group"
          >
            <span className="text-xl font-bold">‹</span>
          </button>

          {/* Timeline scroll area */}
          <div
            ref={timelineRef}
            className="relative flex overflow-x-hidden space-x-6 sm:space-x-8 py-8 w-full max-w-6xl"
          >
            <div className="relative flex space-x-6 sm:space-x-8 min-w-max">
              {/* Glowing timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-pink-500 -translate-y-1/2 z-0 rounded-full shadow-[0_0_15px_rgba(107,33,161,0.4)]" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 z-10"
                >
                  {/* Card with lift & glow on hover */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {event.description}
                    </p>
                  </div>

                  {/* Dot with pulse animation */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-3 w-6 h-6 bg-white border-4 border-white rounded-full shadow-lg z-20">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-ping opacity-75"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollTimeline('right')}
            aria-label="Scroll right"
            className="bg-gradient-to-r from-primary to-primary-600 text-white p-3 rounded-full shadow-xl hover:from-secondary hover:to-purple-600 transition-all duration-300 ml-4 z-20 group"
          >
            <span className="text-xl font-bold">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
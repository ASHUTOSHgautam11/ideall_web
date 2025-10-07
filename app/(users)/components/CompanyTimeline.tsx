'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  { year: '2015', title: 'Company Foundation', description: 'Ideall Solutions was established in Singapore with a focus on premium interior procurement.' },
  { year: '2017', title: 'Global Expansion', description: 'Extended our sourcing network to key Asian and European markets.' },
  { year: '2019', title: 'Quality Certification', description: 'Achieved international quality certifications and established our quality assurance protocols.' },
  { year: '2021', title: 'Digital Innovation', description: 'Launched our digital platform for streamlined procurement processes.' },
  { year: '2024', title: 'Industry Leadership', description: 'Recognized as a leading procurement partner with 50+ global partnerships.' },
  { year: '2025', title: 'Sustainable Innovation', description: 'Launched eco-friendly initiatives and adopted cutting-edge sustainable practices.' }
];

export default function CompanyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction = 'right') => {
    if (timelineRef.current) {
      const scrollAmount = 300;
      timelineRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timelineRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          timelineRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollTimeline('right');
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary text-center mb-5">
          Our Milestones
        </h2>
        <p className="text-base text-center sm:text-lg md:text-xl text-gray-900 max-w-full mx-auto leading-relaxed mb-10">
          From our foundation to becoming a global leader, each milestone marks our commitment to innovation and excellence. Explore how we’ve grown, evolved, and shaped the future of premium interior procurement.
        </p>

        <div className="relative flex items-center">
          {/* Left arrow */}
          <button
            onClick={() => scrollTimeline('left')}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition mr-2 flex-shrink-0"
            aria-label="Scroll left"
          >
            &lt;
          </button>

          {/* Timeline scroll area */}
          <div
            ref={timelineRef}
            className="relative flex overflow-x-hidden space-x-6 sm:space-x-8 py-10 lg:py-16 w-full"
          >
            {/* Timeline line only inside scrollable area */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 z-0"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 z-10"
              >
                {/* Event card */}
                <div className="bg-gradient-to-br from-white via-gray-50 to-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-xl font-bold text-secondary mb-1">{event.year}</div>
                  <h3 className="text-lg sm:text-lg lg:text-xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                {/* Connecting dot */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-5 h-5 bg-primary border-4 border-white rounded-full shadow-lg"></div>
              </motion.div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollTimeline('right')}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition ml-2 flex-shrink-0"
            aria-label="Scroll right"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

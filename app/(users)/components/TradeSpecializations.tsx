'use client';

import { motion } from 'framer-motion';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Link from 'next/link';

const specializations = [
  {
    title: 'Floorings',
    description: 'Premium flooring solutions from hardwood to luxury stone',
    features: [
      'Carpet & Carpet Tils',
      'Luxury Vinyl Tiles',
      'Engineered & Hardwood',
      'Premium Carpets',
      'Natural Stone Solutions',
      'Eco-friendly Options'
    ],
    image: '/assets/portfolio/vartical1.jpg',
    link: '/product-categories/floorings',   // 👈 Add unique link
  },
  {
    title: 'Furniture',
    description: 'Curated collections from worldwide high-quality manufacturers',
    features: [
      'Custom Manufacturing',
      'Luxury Collections',
      'Commercial Solutions',
      'Designer Partnerships',
      'Quality Assurance'
    ],
    image: '/assets/portfolio/vartical2.jpg',
    link: '/product-categories/furniture',
  },
  {
    title: 'Fabrics',
    description: 'Luxury textiles and specialty materials for interior design',
    features: [
      'Designer Fabrics',
      'Commercial Textiles',
      'Specialty Materials',
      'Custom Weaving',
      'Sustainable Options'
    ],
    image: '/assets/portfolio/vartical3.jpg',
    link: '/product-categories/fabrics',
  },
  {
    title: 'Fashion Walls',
    description: 'Innovative wall solutions and decorative finishes',
    features: [
      '3D Wall Panels',
      'Designer Wallpapers',
      'Architectural Finishes',
      'Custom Solutions',
      'Installation Support'
    ],
    image: '/assets/portfolio/vartical4.jpg',
    link: '/product-categories/walls',
  }
];

export default function PortfolioSection() {
  return (
    <>
      <Heading>Portfolio</Heading>
      <SubHeading
        title="Explore Our Specializations"
        description="Explore our expertise across four core domains, each thoughtfully crafted to deliver exceptional results. From visionary design to premium, high-performance solutions, we unite creativity, innovation, and quality. Our tailored offerings are built to meet the unique demands of every client with precision and care. Partner with us and experience a new standard of excellence across every specialization."
      />

      <section className="w-full py-10 bg-white mb-8">
        {/* Desktop / Tablet Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-0">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group h-[70vh] w-full"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${spec.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <Link href={spec.link}>
                  <h3 className="text-4xl font-bold mb-2 hover:underline cursor-pointer">
                    {spec.title}
                  </h3>
                </Link>
                <p className="text-sm mb-4 opacity-90">{spec.description}</p>
                <ul className="space-y-1 text-sm">
                  {spec.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory space-x-4 px-4">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group h-[70vh] min-w-[85%] flex-shrink-0 snap-center overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${spec.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <Link href={spec.link}>
                  <h3 className="text-3xl font-bold mb-2 hover:underline cursor-pointer">
                    {spec.title}
                  </h3>
                </Link>
                <p className="text-sm mb-4 opacity-90">{spec.description}</p>
                <ul className="space-y-1 text-sm">
                  {spec.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const OnlineBrochure = () => {
  return (
    <section className="bg-gray-50 py-16  ">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left side image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/assets/OnlineBrochure.png" // replace with your brochure image path
            alt="Brochure Preview"
            width={800}
            height={600}
  
          />
        </motion.div>

        {/* Right side content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-2">Online Brochure</h2>
          <h3 className="text-2xl text-gray-700 mb-4 font-medium">
            Download Our
          </h3>
          <p className="text-gray-600 mb-6">
            Please enter your name and email to access our company eBrochure.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Discover premium quality flooring, furniture, and fabrics. Explore
            customizable wall treatments & finishes. Get expert design ideas for
            residential and commercial spaces.
          </p>

          <Link
            href="/brochure.pdf" // link to your brochure file
            target="_blank"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            View Brochure
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OnlineBrochure;

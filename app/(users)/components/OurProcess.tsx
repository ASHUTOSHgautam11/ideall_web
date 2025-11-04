"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
}

const OurProcess: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Consultation",
      description: "Understand your specific requirements and goals",
    },
    {
      id: 2,
      title: "Sourcing",
      description: "Identify and vet the best suppliers for your needs",
    },
    {
      id: 3,
      title: "Quality Control",
      description: "Ensure products meet your standards before shipping",
    },
    {
      id: 4,
      title: "Delivery",
      description: "Handle logistics and deliver to your destination",
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
            A streamlined approach to connecting you with the right products and
            ensuring your success.
          </p>
        </motion.div>

        {/* Animated Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 relative"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                variants={stepVariants}
                className="flex flex-col items-center text-center flex-1 max-w-[230px] mx-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold mb-4 shadow-lg"
                >
                  {step.id}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-900 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrows between steps */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop horizontal arrow */}
                  <motion.div
                    variants={stepVariants}
                    className="hidden md:flex items-center justify-center"
                  >
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M5 12H19M19 12L12 19M19 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Mobile vertical arrow */}
                  <motion.div
                    variants={stepVariants}
                    className="flex md:hidden justify-center my-4"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary rotate-90"
                    >
                      <path
                        d="M5 12H19M19 12L12 19M19 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Decorative background line */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default OurProcess;

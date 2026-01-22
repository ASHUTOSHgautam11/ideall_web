"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "Understand your specific requirements and goals",
    image: "/assets/images/process-1-1.png",
  },
  {
    id: 2,
    title: "Sourcing",
    description: "Identify and vet the best suppliers for your needs",
    image: "/assets/images/process-2-2.png",
  },
  {
    id: 3,
    title: "Quality Control",
    description: "Ensure products meet your standards before shipping",
    image: "/assets/images/process-3-1.png",
  },
  {
    id: 4,
    title: "Delivery",
    description: "Handle logistics and deliver to your destination",
    image: "/assets/images/process-4-1.avif",
  },
];

export default function VerticalProcess() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-semibold text-[#c9a36a] mb-4">
            Our Process
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-xl">
            A streamlined approach to connecting you with the right products and
            ensuring your success.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[240px] rounded-xl overflow-hidden ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1c1235] text-white flex items-center justify-center font-semibold">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Dot on center line */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#1c1235]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

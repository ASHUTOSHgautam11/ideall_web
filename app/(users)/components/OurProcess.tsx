// app/components/OurProcess.tsx
"use client";

import React from "react";

const OurProcess = () => {
  const steps = [
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

  return (
    <section className="py-12 md:py-10 bg-primary   sm:10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-secondary  mb-4 text-center">
          Our Process
        </h2>
        <p className="text-lg text-white  mb-10 md:mb-10 lg:mb-0 mt-6 text-center max-w-full mx-auto leading-relaxed">
          A streamlined approach to connecting you with the right products and ensuring your success.
        </p>
        <p className="text-lg text-white  mb-10 md:mb-10 lg:mb-20 mt-6 text-center max-w-full mx-auto leading-relaxed">
          Our process begins with a clear understanding of your needs, enabling us to identify and align with the most reliable suppliers. We then connect you directly with trusted partners, fostering strong and transparent collaborations. Finally, we ensure seamless delivery by overseeing quality, logistics, and timelines, driving every project toward lasting success.
        </p>


        {/* Process Steps */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative pb-10">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <div className="flex flex-col items-center text-center flex-1 max-w-[200px] mx-auto md:mx-0">
                <div className="w-14 h-14 rounded-full bg-[#412b74] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal arrow for desktop */}
                  <div className="hidden md:flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-secondary"
                    >
                      <path
                        d="M5 12H19M19 12L12 19M19 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Vertical arrow centered for mobile/tablet */}
                  <div className="flex md:hidden justify-center my-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#412b74] rotate-90"
                    >
                      <path
                        d="M5 12H19M19 12L12 19M19 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

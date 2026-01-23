'use client';

import React from 'react';
import { Button } from "@/app/(users)/components/ui/button";
import { ArrowRight } from "lucide-react";
import Heading from './Heading';
import SubHeading from './SubHeading';
import Link from "next/link";


interface AboutUsProps {
    className?: string;
}

const AboutHome: React.FC<AboutUsProps> = ({ className = '' }) => {
    return (
        <section className={`w-full ${className}`}>
            {/* Section Heading */}
            <Heading>About Us</Heading>

            <div className="w-full">
                {/* <SubHeading
                    title="WHAT IDEALL DOES"
                    description="Founded in 2002, Ideall Solutionz is a trusted partner and product design specialist in flooring and lifestyle interior solutions. We consult and collaborate with design houses, architectural practices, distributors, and multinational corporations across more than 40 countries in Asia, Asia-Pacific, and the Middle East."
                /> */}
                <p
                    className="
    text-sm 
    sm:text-base 
    md:text-lg 
    lg:text-xl 
    text-gray-700 
    leading-loose
    text-left 
    max-w-full 
    mx-4 sm:mx-8 md:mx-12 lg:mx-20 
    px-2 sm:px-4 md:px-6 lg:px-0 
    mb-6 sm:mb-8 md:mb-12
  "
                >
                    Founded in 2002, Ideall Solutionz is a trusted partner and product design specialist in flooring and lifestyle interior solutions. We consult and collaborate with design houses, architectural practices, distributors, and multinational corporations across more than 40 countries in Asia, Asia-Pacific, and the Middle East.
                    Ideall Solutionz curates four categories of lifestyle goods—Flooring, Fabrics, Furniture, and Feature Walls—supported by a long-established network of import partners built over two decades. With supplier-client relationships spanning 18+ countries, we source and tailor solutions to your project needs, delivering high-quality products with dependable standards from specification through fulfilment.
                </p>




            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 px-4 sm:px-8 md:px-12 lg:px-6">
                {/* Left Section — Light */}
                <div className="flex flex-col justify-center items-center text-center bg-[#ccbba7ff] rounded-lg  ">

                    <div className="max-w-4xl mx-auto">

                        {/* Heading */}
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-5xl mb-4 sm:mb-6 leading-relaxed pt-20  ">
                            Your Sourcing Partner for a{" "}
                            <span className="font-semibold">Connected World.</span>
                        </h2>
                        {/* Paragraph */}

                        <p className="text-sm sm:text-base md:text-lg mb-10 sm:mb-8 leading-relaxed text-gray-900 m-4">
                            Our Sourcing, Your Strength. We empower global businesses by
                            connecting them to high-quality lifestyle goods through an extensive, reliable, and efficient  .
                        </p>
                        {/* About Image */}
                        <div className="mb-5 max-w-sm mx-auto p-5 ">
                            <img
                                src="/assets/hero/shape2.png"
                                alt="Team collaboration at Ideall Solutionz"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        {/* Paragraph */}
                        {/* <p className="text-sm sm:text-base md:text-lg mb-10 sm:mb-8 leading-relaxed text-gray-900 m-4">
                            Your OEM Partner for completing your product Portfolio.<br />
                            Our Sourcing, Your Strength. Empowering global businesses with seamless access to premium lifestyle products through a trusted, efficient, and expansive supply network.
                        </p> */}
                        <p className="text-sm sm:text-base md:text-lg mb-10 sm:mb-8 leading-relaxed text-gray-900 m-4">
                            Your OEM Partner for completing your product Portfolio.<br />
                            We are a virtual factory to fulfill your requirements with right Engineering and Marketing specialists with decades of experience in executing flawlessly.
                        </p>



                        {/* Logo / Brand */}
                        {/* <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">I</span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold">IDEALL Solutionz</div>
                                <div className="text-xs text-gray-900">OUR SOURCING, YOUR STRENGTH</div>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Right Section — Navy */}
                <div className="bg-[#272557] flex flex-col justify-center py-12">
                    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 space-y-12 text-white">
                        {/* Section 1 */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                                Global Network
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
                                Strategic offices in India, China, and Singapore.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                                Quality Assured
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
                                Rigorous vetting and quality control processes.
                            </p>
                        </div>
                        {/* Section 3 */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                                Expert Team
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
                                Deep expertise in lifestyle goods and logistics.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
                                Proven Results
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 mb-10">
                                Track record of successful partnerships since 2002.
                            </p>

                            {/* Section 5 */}
                            <Link href="/our-story">
                                <Button
                                    size="lg"
                                    className="
            relative
            overflow-hidden
            text-white
            border border-white/40
            bg-gradient-to-r from-[#272557] to-[#3a3f87]
            hover:from-[#3a3f87] hover:to-[#272557]
            shadow-md
            hover:shadow-xl
            hover:-translate-y-[2px]
            transition-all
            duration-300
            group
        "
                                >
                                    <span className="relative z-10 flex items-center">
                                        Know More
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>

                                    {/* Glow overlay */}
                                    <span
                                        className="
                absolute
                inset-0
                bg-white/10
                opacity-0
                group-hover:opacity-100
                transition
            "
                                    />
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;

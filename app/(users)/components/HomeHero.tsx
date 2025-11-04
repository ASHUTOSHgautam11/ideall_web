'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeHero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-[#0A0F2C] text-white">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/HomeHero4.mp4" type="video/mp4" />
                    {/* Fallback for unsupported browsers */}
                    Your browser does not support the video tag.
                </video>

                {/* Optional overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        Your Sourcing Partner <br className="hidden sm:block" /> for a Connected World
                    </h1>

                    <h3 className="text-lg md:text-xl font-medium text-blue-200 mb-4">
                        Our Sourcing, Your Strength
                    </h3>

                    <p className="text-base md:text-lg text-gray-200 max-w-lg mb-8">
                        Headquartered in Singapore and active across Asia, the Middle East, and Africa, Ideall Solutionz operates in over 40+ countries. Our long-standing supplier partnerships and regional expertise culminated over the past two decades, allow us to empower global businesses by connecting them to high-quality lifestyle goods
                        at the right place, price and time.
                    </p>

                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#1E1A6E] hover:bg-[#2D29A6] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all"
                        >
                            Discover Your Advantage. Contact Our Sourcing Experts
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

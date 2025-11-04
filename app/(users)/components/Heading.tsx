'use client';

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Heading({ children }: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState(0);
    const [maxMove, setMaxMove] = useState(200); // Default for desktop

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setMaxMove(80); // Mobile
            } else if (window.innerWidth < 1024) {
                setMaxMove(150); // Tablet
            } else {
                setMaxMove(200); // Desktop
            }
        };

        handleResize();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const xSpring = useSpring(Math.min(scrollY * 0.1, maxMove), {
        stiffness: 80,
        damping: 20,
    });

    return (
        <motion.h2
            style={{
                x: xSpring,
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
            }}
            className="
                relative
                inline-block
                text-[#2d1d58]
                font-bold
                text-center sm:text-left
                mt-10 mb-10 ml-12 sm:ml-8 lg:ml-20
                cursor-pointer
                group
                [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]
                transition-transform
                duration-300
            "
        >
            {children}
            <span
                className="
                    absolute left-0 bottom-0 h-1 w-0 
                    bg-[#2d1d58]
                    rounded-full
                    transition-all duration-500 ease-in-out
                    group-hover:w-full
                "
            ></span>
        </motion.h2>
    );
}

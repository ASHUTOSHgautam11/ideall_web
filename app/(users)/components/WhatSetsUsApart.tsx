'use client';

import Image from "next/image";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { Globe, Layers, Users, Zap } from "lucide-react";

export default function WhatSetsUsApart() {
    return (
        <>
            {/* <Heading>Welcome to IDEALL</Heading> */}

            {/* <SubHeading
                title="Your Trusted Partner"
                description="IDeall Solutionz combines global reach, diverse expertise, and specialist talent to deliver cost-effective, future-ready solutions."
            /> */}

            <Heading>What Sets Us Apart</Heading>
            <p
                className="
            text-sm 
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            text-gray-700 
            leading-relaxed 
             
            text-left 
        max-w-full 
        mx-4 sm:mx-8 md:mx-12 lg:mx-20 
        px-2 sm:px-4 md:px-6 lg:px-0 
        mb-6 sm:mb-8 md:mb-12
          "
            >
                Our strength lies in global reach, group depth, specialist talent, and execution excellence.
            </p>

            <section className="relative mt-10 bg-gradient-to-br from-[#bfa88f] to-[#cdb9a5] text-white py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                    {/* Section Header */}
                    {/* <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            What Sets Us Apart
                        </h1>
                        <p className="mt-3 max-w-2xl mx-auto text-white/90 text-xl">
                            Our strength lies in global reach, group depth, specialist talent, and execution excellence.
                        </p>
                    </div> */}

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT: Feature Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            <FeatureCard
                                icon={<Globe className="w-8 h-8" />}
                                title="Global Footprint"
                                text="Headquartered in Singapore, Ideall Solutionz operates across Singapore, India, China, Indonesia, and the Philippines—supporting cross-border partnerships and reliable trade execution since 2002."
                            />

                            <FeatureCard
                                icon={<Layers className="w-8 h-8" />}
                                title="Group Depth"
                                text="As part of the Ideall Group, we draw on multi-industry capability spanning Lifestyle Goods, Chemicals, Metals & Alloys, and Information Technology—enabling broader perspective and stronger problem-solving."
                            />

                            <FeatureCard
                                icon={<Users className="w-8 h-8" />}
                                title="Specialist Talent"
                                text="Our consultant network covers IT, Finance & Accounting, and Engineering—bringing the right blend of technical rigor and commercial insight to strengthen teams and improve outcomes."
                            />

                            <FeatureCard
                                icon={<Zap className="w-8 h-8" />}
                                title="Execution at Scale"
                                text="With 90+ specialists and development centers in India, China, and Vietnam, we deliver agile, cost-effective solutions without compromising quality."
                            />
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative hidden lg:flex justify-end">
                            <div
                                className="
                                    relative
                                    w-[360px] md:w-[420px] lg:w-[450px] xl:w-[450px]
                                    h-[460px] md:h-[520px] lg:h-[560px] xl:h-[550px]
                                    overflow-hidden
                                "
                            >
                                <Image
                                    src="/assets/portfolio/vartical1.jpg"
                                    alt="Decor"
                                    fill
                                    className="object-cover rounded-t-[45%]"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

/* Reusable Card */
function FeatureCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div
            className="
                bg-white/60
                backdrop-blur-md
                border border-white/40
                rounded-xl
                p-5
                shadow-sm
                hover:bg-white/70
                transition
            "
        >
            <div className="mb-3 text-[#6b4f3a]">
                {icon}
            </div>

            <h3 className="text-lg font-semibold mb-2 text-[#3b2b1f]">
                {title}
            </h3>

            <p className="text-sm leading-relaxed text-[#4a3a2e]">
                {text}
            </p>
        </div>
    );
}

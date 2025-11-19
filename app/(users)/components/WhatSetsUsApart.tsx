'use client';

import Image from "next/image";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

export default function WhatSetsUsApart() {
    return (
        <>
            <Heading>Welcome to IDEALL</Heading>

            <SubHeading
                title="Your Trusted Partner"
                description="IDeall Solutionz combines global reach, diverse expertise, and top-tier talent to deliver high-quality, cost-effective solutions across industries. With strategic delivery and continuous growth, we empower clients worldwide while fostering expertise within our teams. Our commitment to innovation and integrity ensures sustainable partnerships that drive lasting success. By aligning with global best practices and local market insights, we deliver solutions that are both practical and future-ready. Together, we aim to redefine industry standards and create enduring value for our partners."
            />

            <section className="relative mt-10 bg-[#c7b29fff] text-white py-20 overflow-hidden">
                <div
                    className="
                        max-w-7xl mx-auto 
                        px-6 md:px-10 lg:px-12 xl:px-16 
                        grid 
                        lg:grid-cols-[55%_45%]  
                        gap-8 lg:gap-12 
                        items-center 
                        relative z-10
                    "
                >
                    {/* LEFT CONTENT */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            What Sets Us Apart
                        </h2>

                        <div className="space-y-4 text-base md:text-lg lg:text-xl leading-relaxed">
                            <p>
                                <strong>Global Presence:</strong> Headquartered in Singapore, IDeall Solutionz has built a strong global footprint with offices across Singapore, India, China, Indonesia, and the Philippines. Since 2002, we’ve been proudly connecting businesses worldwide through trusted partnerships and seamless trade solutions.
                            </p>

                            <p>
                                <strong>Diverse Expertise:</strong> As part of the IDeall Group, we bring together deep expertise across multiple industries—from Lifestyle Goods and Chemicals to Metals & Alloys and Information Technology. Our multidisciplinary strength allows us to deliver integrated, value-driven solutions that meet the needs of a dynamic global market.
                            </p>

                            <p>
                                <strong>Comprehensive Staffing:</strong> Our network of top-tier consultants spans IT, Finance & Accounting, and Engineering. With a balance of technical excellence and business insight, we help organizations strengthen their teams, optimize performance, and drive sustainable growth.
                            </p>

                            <p>
                                <strong>Strategic Delivery:</strong> With over 90 specialized consultants and advanced development centers in India, China, and Vietnam, we deliver agile, cost-effective, and high-quality solutions designed to solve complex business challenges and accelerate success.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative hidden lg:flex justify-end">
                        <div
                            className="
                                relative 
                                w-[360px] md:w-[420px] lg:w-[450px] xl:w-[480px] 
                                h-[460px] md:h-[520px] lg:h-[560px] xl:h-[600px] 
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
            </section>
        </>
    );
}

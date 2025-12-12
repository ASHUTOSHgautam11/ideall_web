"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductClient({ product }: any) {
    const [activeTab, setActiveTab] = useState<"room" | "colors">("room");

    // Lightbox states
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImg, setLightboxImg] = useState("");

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

            {/* Back Navigation */}
            <div className="max-w-7xl mx-auto mb-12">
                <nav className="text-lg text-primary flex items-center space-x-2">
                    <Link
                        href="/product-categories/floorings/carpet-&-carpet-tiles/nylon"
                        className="hover:text-secondary transition"
                    >
                        ← Back to Nylon Carpet Tiles Collection
                    </Link>
                </nav>
            </div>

            {/* Product Overview */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">

                {/* Left Side */}
                <div>
                    <p className="text-sm text-gray-500 mb-1">{product.title}</p>

                    <h1 className="text-4xl font-bold text-gray-900">
                        {product.title}
                    </h1>

                    <p className="mt-3 text-gray-600 leading-relaxed max-w-prose">
                        {product.description}
                    </p>

                    <div className="mt-4 inline-block px-3 py-1 rounded-md border text-sm text-gray-700 shadow-sm bg-white">
                        {product.code}
                    </div>

                    <div className="mt-8">
                        <h3 className="font-semibold text-xl text-gray-900">Key Features</h3>
                        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
                            {product.features.map((f: string, i: number) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="font-semibold text-xl text-gray-900">Applications</h3>
                        <p className="text-gray-700 mt-2">{product.applications}</p>
                    </div>

                    {/* Buttons under overview */}
                    <div className="flex gap-4 mt-8">
                        <button className="px-5 py-2 bg-primary text-white rounded-lg">
                            Request Samples
                        </button>
                        <Link
                            href={product.specPdf}
                            download
                            className="px-5 py-2 border border-gray-500 rounded-lg inline-block"
                        >
                            Download Specs
                        </Link>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <Image
                        src={product.img}
                        alt={product.title}
                        width={1000}
                        height={700}
                        className="object-cover w-full h-[420px] md:h-[520px] transition-transform duration-500 hover:scale-[1.03]"
                    />
                </div>
            </div>

            {/* Gallery */}
            <section className="mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    <u>Room Shoots</u>
                </h2>

                {/* Room Shoots Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {product.installationGallery.map((img: string, i: number) => (
                        <div
                            key={i}
                            className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
                        >
                            <Image
                                src={img}
                                alt={`${product.title} room shot ${i + 1}`}
                                width={400}
                                height={260}
                                className="object-cover h-40 w-full transition-transform duration-500 hover:scale-105 cursor-pointer"
                                onClick={() => {
                                    setLightboxImg(img);
                                    setLightboxOpen(true);
                                }}
                            />
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    <u>Available Colors</u>
                </h2>

                {/* Colors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {product.availableColors.map((c: any) => (
                        <div
                            key={c.code}
                            className="rounded-xl p-4 text-center bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                        >
                            <div className="w-full h-28 rounded-md overflow-hidden mb-3">
                                <Image
                                    src={c.img}
                                    alt={c.name}
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-full cursor-pointer"
                                    onClick={() => {
                                        setLightboxImg(c.img);
                                        setLightboxOpen(true);
                                    }}
                                />
                            </div>

                            <div className="text-sm font-medium">{c.name}</div>
                            <div className="text-xs text-gray-500">{c.code}</div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                    onClick={() => setLightboxOpen(false)}
                >
                    <div className="relative max-w-4xl w-full px-4">
                        <Image
                            src={lightboxImg}
                            alt="Full screen"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg"
                        />

                         <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-4 right-4 text-white text-3xl font-bold"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <section className="mt-20">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Technical Specifications */}
                    <div className="p-8 rounded-2xl border border-[#E2E8F0] 
        bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FC]
        shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-2 h-5 bg-secondary rounded-sm"></span>
                            <span className="text-secondary">Technical Specifications</span>
                        </h2>

                        <div className="divide-y divide-gray-200">
                            {product.technicalSpecs.map((item: any, i: number) => (
                                <div key={i} className="py-3 flex justify-between text-sm">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-semibold text-gray-900">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Ratings */}
                    <div className="p-8 rounded-2xl border border-[#E2E8F0] 
        bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FC]
        shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-2 h-5 bg-secondary rounded-sm"></span>
                            <span className="text-secondary">Performance Ratings</span>
                        </h2>

                        <div className="divide-y divide-gray-200">
                            {product.performanceRatings.map((item: any, i: number) => (
                                <div key={i} className="py-3 flex justify-between text-sm">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-semibold text-gray-900">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ideal Applications */}
                    <div className="p-8 rounded-2xl border border-[#E2E8F0] 
        bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FC]
        shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-2 h-5 bg-secondary rounded-sm"></span>
                            <span className="text-secondary">Ideal Applications</span>
                        </h2>

                        <ul className="space-y-4">
                            {product.idealApplications.map((app: string, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-secondary text-white 
                flex items-center justify-center text-xs shadow">
                                        ✔
                                    </div>
                                    <span className="text-gray-700 text-sm">{app}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>


            {/* Sustainability & Certifications */}
            <section className="mt-20">
                <h2 className="text-2xl font-semibold mb-6">Sustainability & Certifications</h2>

                <div className="bg-[#faf7f0] p-10 rounded-xl">
                    {/* Grid: 4 items in first row, 3 in second */}
                    <div className="grid grid-cols-4 gap-6">
                        {/* Row 1: 4 items */}
                        {product.certifications.slice(0, 4).map((img: string, i: number) => (
                            <div
                                key={`top-${i}`}
                                className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition flex items-center justify-center"
                            >
                                <Image
                                    src={img}
                                    alt={`certification-${i + 1}`}
                                    width={80}
                                    height={80}
                                    className="object-contain w-20 h-20"
                                />
                            </div>
                        ))}

                        {/* Row 2: 3 items (span across 3 columns) */}
                        {product.certifications.slice(4, 7).map((img: string, i: number) => (
                            <div
                                key={`bottom-${i}`}
                                className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition flex items-center justify-center"
                            >
                                <Image
                                    src={img}
                                    alt={`certification-${i + 5}`}
                                    width={80}
                                    height={80}
                                    className="object-contain w-20 h-20"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation & Maintenance */}
            <section className="mt-20 bg-[#b58e6d] p-8 md:p-10 rounded-2xl">
                <h2 className="text-xl font-semibold text-white mb-3">Installation & Maintenance</h2>
                <p className="text-sm text-gray-200 mb-8">
                    Professional installation guidance and maintenance protocols to ensure optimal performance and longevity.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {product.installationSteps.map((step: any, index: number) => (
                        <div
                            key={step.id}
                            className="bg-white p-6 rounded-xl shadow-md text-center"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#f7f2ec] flex items-center justify-center text-lg font-bold text-[#b58e6d] mb-4 mx-auto">
                                {index + 1}
                            </div>

                            <h3 className="font-semibold text-gray-800 mb-2">
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="mt-10 bg-[#faf7f0] p-6 md:p-8 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Ready to Specify This Product?</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Contact our specialists for samples, detailed specifications, and project consultation.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="px-5 py-2 bg-[#b58e6d] text-white text-sm rounded-lg hover:bg-[#a67c52] transition">
                            Request Samples
                        </button>
                        <button className="px-5 py-2 border border-gray-400 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition">
                            Technical Support
                        </button>
                        <button className="px-5 py-2 border border-gray-400 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition">
                            Download Data Sheet
                        </button>
                    </div>
                </div>
            </section>


            <div className="h-24"></div>
        </div>
    );
}

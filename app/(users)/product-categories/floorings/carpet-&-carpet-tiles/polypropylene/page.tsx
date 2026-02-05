"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroVideoSection from "@/app/(users)/components/HeroVideoSection";
import { products } from "./productData";

export default function ProductListing() {
    return (
        <>
            <HeroVideoSection
                heading="Polypropylene Carpet Tiles Collection"
                description="Cost-effective and durable carpet tiles engineered for functional commercial spaces."
                videoSrc="/assets/video/video4.mp4"
            />

            <div className="w-full py-8">

                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                    <nav className="text-lg text-gray-600 flex items-center space-x-2 mt-12">
                        <Link href="/" className="hover:text-secondary transition">Home</Link>
                        <span>›</span>

                        <Link href="/product-categories/floorings" className="hover:text-secondary transition">
                            Flooring
                        </Link>
                        <span>›</span>

                        <Link
                            href="/product-categories/floorings/carpet-&-carpet-tiles"
                            className="hover:text-secondary transition"
                        >
                            Carpet & Carpet Tiles
                        </Link>
                        <span>›</span>

                        <span className="font-semibold text-secondary">Polypropylene Carpet Tiles Collection</span>
                    </nav>
                </div>

                {/* Title Section */}
                <div className="text-center max-w-3xl mx-auto mb-12 mt-14">
                    <h2 className="text-3xl font-bold">
                        High-performance polypropylene carpet tiles for practical and versatile flooring solutions
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Our polypropylene tile collection offers durability, easy maintenance, and cost-effective
                        solutions for commercial and residential interiors.
                    </p>
                </div>

                {/* Product Cards */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
                    {products.map((item, index) => (
                        <Link
                            key={index}
                            href={`/product-categories/floorings/carpet-&-carpet-tiles/polypropylene/${item.slug}`}
                            className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all bg-white block"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="rounded-t-xl object-cover h-56 w-full"
                            />

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <ArrowRight className="w-5 h-5 text-gray-600" />
                                </div>

                                <p className="text-sm text-gray-500 mb-2">
                                    {item.code} • {item.colors}
                                </p>

                                <p className="text-gray-700 text-sm mb-4">{item.description}</p>

                                <h4 className="text-sm font-semibold text-gray-700">Key Features</h4>
                                <ul className="text-sm text-gray-600 list-disc ml-5 mt-1">
                                    {item.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>

                                <h4 className="text-sm font-semibold text-gray-700 mt-4">Applications</h4>
                                <p className="text-sm text-gray-600">{item.applications}</p>

                                <div className="mt-4">
                                    <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                                        {item.sustainability}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </>
    );
}

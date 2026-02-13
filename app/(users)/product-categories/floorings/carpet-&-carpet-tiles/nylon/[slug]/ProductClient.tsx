"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductClient({ product }: any) {
    const [activeTab, setActiveTab] = useState<"room" | "colors">("room");

    // Carousel states for main image
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

    // Lightbox states - separate for room shots and colors
    const [roomLightboxOpen, setRoomLightboxOpen] = useState(false);
    const [roomLightboxIndex, setRoomLightboxIndex] = useState(0);

    const [colorLightboxOpen, setColorLightboxOpen] = useState(false);
    const [colorLightboxIndex, setColorLightboxIndex] = useState(0);

    // Safety check for product data
    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-12 text-center">
                <p className="text-gray-500">Loading product details...</p>
            </div>
        );
    }

    // Auto-rotate room shots
    useEffect(() => {
        if (!product?.installationGallery?.length) return;

        const interval = setInterval(() => {
            setCurrentRoomIndex(prev =>
                (prev + 1) % product.installationGallery.length
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [product?.installationGallery?.length]);

    // Room Lightbox Navigation
    const openRoomLightbox = (index: number) => {
        setRoomLightboxIndex(index);
        setRoomLightboxOpen(true);
    };

    const nextRoomImage = () => {
        if (!product?.installationGallery?.length) return;
        const nextIdx = (roomLightboxIndex + 1) % product.installationGallery.length;
        setRoomLightboxIndex(nextIdx);
    };

    const prevRoomImage = () => {
        if (!product?.installationGallery?.length) return;
        const prevIdx = (roomLightboxIndex - 1 + product.installationGallery.length) % product.installationGallery.length;
        setRoomLightboxIndex(prevIdx);
    };

    // Color Lightbox Navigation
    const openColorLightbox = (index: number) => {
        setColorLightboxIndex(index);
        setColorLightboxOpen(true);
    };

    const nextColorImage = () => {
        if (!product?.availableColors?.length) return;
        const nextIdx = (colorLightboxIndex + 1) % product.availableColors.length;
        setColorLightboxIndex(nextIdx);
    };

    const prevColorImage = () => {
        if (!product?.availableColors?.length) return;
        const prevIdx = (colorLightboxIndex - 1 + product.availableColors.length) % product.availableColors.length;
        setColorLightboxIndex(prevIdx);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (roomLightboxOpen) {
                if (e.key === 'ArrowRight') nextRoomImage();
                if (e.key === 'ArrowLeft') prevRoomImage();
                if (e.key === 'Escape') setRoomLightboxOpen(false);
            }
            if (colorLightboxOpen) {
                if (e.key === 'ArrowRight') nextColorImage();
                if (e.key === 'ArrowLeft') prevColorImage();
                if (e.key === 'Escape') setColorLightboxOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [
        roomLightboxOpen,
        roomLightboxIndex,
        colorLightboxOpen,
        colorLightboxIndex,
        product?.installationGallery?.length,
        product?.availableColors?.length
    ]);

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

            {/* Back Navigation */}
            <div className="max-w-7xl mx-auto mb-12">
                <Link
                    href="/product-categories/floorings/carpet-&-carpet-tiles/nylon"
                    className="inline-flex items-center text-secondary hover:text-primary transition-colors group"
                >
                    <svg
                        className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-base font-medium">Back to Nylon Carpet Tiles Collection</span>
                </Link>
            </div>

            {/* Product Overview */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">

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

                    {/* Key Features */}
                    <div className="mt-8">
                        <h3 className="font-semibold text-xl text-gray-900">
                            Key Features
                        </h3>
                        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
                            {product.features?.map((f: string, i: number) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Applications */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-xl text-gray-900">
                            Applications
                        </h3>
                        <p className="text-gray-700 mt-2">
                            {product.applications}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link href="/contact">
                            <button className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:opacity-90 transition">
                                Request Samples
                            </button>
                        </Link>

                        <Link
                            href={product.specPdf}
                            download
                            className="px-6 py-3 border border-gray-400 rounded-lg inline-block hover:bg-gray-50 transition"
                        >
                            Download Specs
                        </Link>
                    </div>
                </div>

                {/* Right Side - Product Gallery */}
                <div className="w-full">

                    {/* Main Image with Cursor Zoom */}
                    <div
                        className="relative rounded-xl overflow-hidden bg-gray-100 shadow-md cursor-zoom-in"
                        onMouseMove={(e) => {
                            const container = e.currentTarget;
                            const img = container.querySelector("img") as HTMLImageElement;
                            if (!img) return;

                            const { left, top, width, height } = container.getBoundingClientRect();
                            const x = ((e.clientX - left) / width) * 100;
                            const y = ((e.clientY - top) / height) * 100;

                            img.style.transformOrigin = `${x}% ${y}%`;
                            img.style.transform = "scale(1.5)";
                        }}
                        onMouseLeave={(e) => {
                            const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                            if (!img) return;

                            img.style.transformOrigin = "center";
                            img.style.transform = "scale(1)";
                        }}
                    >
                        <Image
                            src={product.installationGallery?.[currentRoomIndex] || product.img}
                            alt={`${product.title} preview`}
                            width={1000}
                            height={700}
                            className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-300 ease-out"
                            priority
                        />
                    </div>

                    {/* Thumbnails + Arrows */}
                    <div className="mt-5 relative">

                        {/* Thumbnails Container */}
                        <div
                            id="thumbnail-container"
                            className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide px-2 py-2"
                        >
                            {product.installationGallery?.map((img: string, idx: number) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentRoomIndex(idx)}
                                    className={`cursor-pointer overflow-hidden border transition-all duration-200 flex-shrink-0
                        ${idx === currentRoomIndex
                                            ? 'border-primary ring-2 ring-primary'
                                            : 'border-gray-200 opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        width={100}
                                        height={70}
                                        className="w-[45px] h-[60px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Left Arrow - hidden on mobile */}
                        <button
                            onClick={() => {
                                const container = document.getElementById('thumbnail-container');
                                container?.scrollBy({ left: -200, behavior: 'smooth' });
                            }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10 hidden md:block"
                            aria-label="Scroll left"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        {/* Right Arrow - hidden on mobile */}
                        <button
                            onClick={() => {
                                const container = document.getElementById('thumbnail-container');
                                container?.scrollBy({ left: 200, behavior: 'smooth' });
                            }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10 hidden md:block"
                            aria-label="Scroll right"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                    </div>
                </div>

            </div>



            {/* Gallery */}
            <section className="mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    <u>Room Shoots</u>
                </h2>

                {/* Room Shoots Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {product.installationGallery?.map((img: string, i: number) => (
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
                                onClick={() => openRoomLightbox(i)}
                            />
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    <u>Available Colors</u>
                </h2>

                {/* Colors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {product.availableColors?.map((c: any, idx: number) => (
                        <div
                            key={c.code || idx}
                            className="rounded-xl p-4 text-center bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                            onClick={() => openColorLightbox(idx)}
                        >
                            <div className="w-full h-28 rounded-md overflow-hidden mb-3">
                                <Image
                                    src={c.img}
                                    alt={c.name}
                                    width={300}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="text-sm font-medium">{c.name}</div>
                            <div className="text-xs text-gray-500">{c.code}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Room Shots Lightbox */}
            {roomLightboxOpen && product.installationGallery?.length > 0 && (
                <div
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-6"
                    onClick={(e) =>
                        e.target === e.currentTarget && setRoomLightboxOpen(false)
                    }
                >
                    <div className="bg-white rounded-lg w-full max-w-6xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">

                        {/* Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
                            <div className="flex items-center gap-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {product.title}
                                </h2>

                                <div className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                    {product.installationGallery.length} Images
                                </div>
                            </div>

                            <button
                                onClick={() => setRoomLightboxOpen(false)}
                                className="text-gray-600 text-2xl hover:text-black transition"
                                aria-label="Close lightbox"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="relative flex items-center justify-center bg-gray-100 flex-1">

                            {/* Left Arrow */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevRoomImage();
                                }}
                                className="absolute left-4 md:left-6 bg-black/70 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md hover:bg-black transition z-10 text-xl md:text-2xl"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>

                            {/* Image Container with Zoom */}
                            <div
                                className="relative overflow-hidden max-w-full max-h-full"
                                onMouseMove={(e) => {
                                    const container = e.currentTarget;
                                    const img = container.querySelector('img') as HTMLImageElement;
                                    if (!img) return;

                                    const { left, top, width, height } = container.getBoundingClientRect();
                                    const x = ((e.clientX - left) / width) * 100;
                                    const y = ((e.clientY - top) / height) * 100;

                                    img.style.transformOrigin = `${x}% ${y}%`;
                                    img.style.transform = 'scale(2)';
                                }}
                                onMouseLeave={(e) => {
                                    const container = e.currentTarget;
                                    const img = container.querySelector('img') as HTMLImageElement;
                                    if (!img) return;

                                    img.style.transformOrigin = 'center';
                                    img.style.transform = 'scale(1)';
                                }}
                            >
                                <Image
                                    src={product.installationGallery[roomLightboxIndex]}
                                    alt={`Room shot ${roomLightboxIndex + 1}`}
                                    width={1400}
                                    height={900}
                                    className="max-h-[70vh] max-w-full object-contain transition-transform duration-300 ease-out"
                                />

                                {/* Bottom Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                                {/* Bottom Left - Title */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow">
                                    <div className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                                        {product.title}
                                    </div>
                                </div>

                                {/* Bottom Right - Code */}
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow">
                                    <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                        {product.availableColors?.[roomLightboxIndex]?.code || product.code || "BL01"}
                                    </div>
                                </div>
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextRoomImage();
                                }}
                                className="absolute right-4 md:right-6 bg-black/70 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md hover:bg-black transition z-10 text-xl md:text-2xl"
                                aria-label="Next image"
                            >
                                ›
                            </button>

                            {/* Counter */}
                            <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded">
                                {roomLightboxIndex + 1} / {product.installationGallery.length}
                            </div>
                        </div>

                        {/* Bottom Section - Thumbnails Only */}
                        <div className="bg-white border-t px-4 py-3 md:px-6 md:py-4">

                            <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
                                {product.installationGallery?.map(
                                    (img: string, idx: number) => (
                                        <div
                                            key={idx}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setRoomLightboxIndex(idx);
                                            }}
                                            className={`cursor-pointer border-2 rounded-md flex-shrink-0 ${idx === roomLightboxIndex
                                                ? "border-blue-600"
                                                : "border-transparent opacity-60 hover:opacity-100"
                                                }`}
                                            title={`Image ${idx + 1}`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                width={70}
                                                height={60}
                                                className="object-cover rounded w-[70px] h-[60px]"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Color Tiles Lightbox */}
            {colorLightboxOpen && product.availableColors?.length > 0 && (
                <div
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-6"
                    onClick={(e) =>
                        e.target === e.currentTarget && setColorLightboxOpen(false)
                    }
                >
                    <div className="bg-white rounded-lg w-full max-w-6xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">

                        {/* Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
                            <div className="flex items-center gap-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {product.title} Colors
                                </h2>

                                <div className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                    {product.availableColors.length} Colors
                                </div>
                            </div>

                            <button
                                onClick={() => setColorLightboxOpen(false)}
                                className="text-gray-600 text-2xl hover:text-black transition"
                                aria-label="Close lightbox"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="relative flex items-center justify-center bg-gray-100 flex-1">

                            {/* Left Arrow */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevColorImage();
                                }}
                                className="absolute left-4 md:left-6 bg-black/70 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md hover:bg-black transition z-10 text-xl md:text-2xl"
                                aria-label="Previous color"
                            >
                                ‹
                            </button>

                            {/* Image Container with Zoom */}
                            <div
                                className="relative overflow-hidden max-w-full max-h-full"
                                onMouseMove={(e) => {
                                    const container = e.currentTarget;
                                    const img = container.querySelector('img') as HTMLImageElement;
                                    if (!img) return;

                                    const { left, top, width, height } = container.getBoundingClientRect();
                                    const x = ((e.clientX - left) / width) * 100;
                                    const y = ((e.clientY - top) / height) * 100;

                                    img.style.transformOrigin = `${x}% ${y}%`;
                                    img.style.transform = 'scale(2)';
                                }}
                                onMouseLeave={(e) => {
                                    const container = e.currentTarget;
                                    const img = container.querySelector('img') as HTMLImageElement;
                                    if (!img) return;

                                    img.style.transformOrigin = 'center';
                                    img.style.transform = 'scale(1)';
                                }}
                            >
                                <Image
                                    src={product.availableColors[colorLightboxIndex].img}
                                    alt={`Color ${colorLightboxIndex + 1}`}
                                    width={1400}
                                    height={900}
                                    className="max-h-[70vh] max-w-full object-contain transition-transform duration-300 ease-out"
                                />

                                {/* Bottom Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                                {/* Bottom Left - Title */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow">
                                    <div className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                                        {product.availableColors[colorLightboxIndex].name}
                                    </div>
                                </div>

                                {/* Bottom Right - Code */}
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow">
                                    <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                        {product.availableColors[colorLightboxIndex].code}
                                    </div>
                                </div>
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextColorImage();
                                }}
                                className="absolute right-4 md:right-6 bg-black/70 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md hover:bg-black transition z-10 text-xl md:text-2xl"
                                aria-label="Next color"
                            >
                                ›
                            </button>

                            {/* Counter */}
                            <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded">
                                {colorLightboxIndex + 1} / {product.availableColors.length}
                            </div>
                        </div>

                        {/* Bottom Section (Thumbnails Only) */}
                        <div className="bg-white border-t px-4 py-3 md:px-6 md:py-4">

                            <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
                                {product.availableColors?.map(
                                    (c: { img: string; name: string; code: string }, idx: number) => {
                                        if (!c?.img) return null;

                                        return (
                                            <div
                                                key={c.code || idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setColorLightboxIndex(idx);
                                                }}
                                                className={`cursor-pointer border-2 rounded-md flex-shrink-0 ${idx === colorLightboxIndex
                                                    ? "border-blue-600"
                                                    : "border-transparent opacity-60 hover:opacity-100"
                                                    }`}
                                                title={c.name}
                                            >
                                                <Image
                                                    src={c.img}
                                                    alt={c.name || `Color ${idx + 1}`}
                                                    width={90}
                                                    height={70}
                                                    className="object-cover rounded w-[80px] h-[70px]"
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            )}


            {/* Technical Specifications Section */}
            <section className="mt-20">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Technical Specifications */}
                    <div
                        className="p-8 rounded-2xl border border-[#E2E8F0]
                        bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FC]
                        shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-2 h-5 bg-secondary rounded-sm"></span>
                            <span className="text-secondary">Technical Specifications</span>
                        </h2>

                        <div className="divide-y divide-gray-200">
                            {product.technicalSpecs?.map((item: any, i: number) => (
                                <div
                                    key={i}
                                    className="py-3 grid grid-cols-2 gap-6 text-sm"
                                >
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-semibold text-gray-900 text-right">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Performance Ratings */}
                    <div
                        className="p-8 rounded-2xl border border-[#E2E8F0]
                        bg-gradient-to-br from-[#FFFFFF] to-[#F7F9FC]
                        shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-2 h-5 bg-secondary rounded-sm"></span>
                            <span className="text-secondary">Performance Ratings</span>
                        </h2>

                        <div className="divide-y divide-gray-200">
                            {product.performanceRatings?.map((item: any, i: number) => (
                                <div
                                    key={i}
                                    className="py-3 grid grid-cols-2 gap-6 text-sm"
                                >
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-semibold text-gray-900 text-right">
                                        {item.value}
                                    </span>
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
                            {product.idealApplications?.map((app: string, i: number) => (
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {product.certifications?.map((img: string, i: number) => (
                            <div
                                key={i}
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
                    {product.installationSteps?.map((step: any, index: number) => (
                        <div
                            key={step.id || index}
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
                        <Link
                            href="/contact"
                            className="px-5 py-2 bg-[#b58e6d] text-white text-sm rounded-lg hover:bg-[#a67c52] transition inline-block text-center min-w-[140px]"
                        >
                            Request Samples
                        </Link>
                        <Link
                            href="/contact"
                            className="px-5 py-2 border border-gray-400 text-gray-700 text-sm hover:text-white rounded-lg hover:bg-primary transition inline-block text-center min-w-[140px]"
                        >
                            Technical Support
                        </Link>
                        <Link
                            href={product.specPdf}
                            download
                            className="px-5 py-2 border border-gray-400 text-gray-700 text-sm hover:text-white rounded-lg hover:bg-primary transition inline-block text-center min-w-[140px]"
                        >
                            Download Data Sheet
                        </Link>
                    </div>
                </div>
            </section>
            <div className="h-24"></div>
        </div>
    );
}
"use client"; // only if you're in App Router and using hooks

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // get current route
import { ShieldCheck, Star, Award } from 'lucide-react';

interface ProductCategoryItem {
  name: string;
  imageUrl: string;
  description?: string;
}

interface SubcategoryProps {
  title: string;
  description: string;
  productCategories: ProductCategoryItem[];
  qualityAssurance: string[];
  imageUrl: string;
  overlaySubtitle?: string;
}

const Subcategory: React.FC<SubcategoryProps> = ({
  title,
  description,
  productCategories,
  qualityAssurance,
  imageUrl,
  overlaySubtitle = 'Global Sourcing Network',
}) => {
  const pathname = usePathname(); // get current running route

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h1>
        <p className="  mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Main Showcase Section */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="lg:w-1/2 relative group">
          <img
            src={imageUrl}
            alt={`${title} showcase`}
            className="w-full h-auto rounded-2xl shadow-xl object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="font-bold text-2xl text-gray-900 mb-3">{title}</h2>
            <p className="text-lg text-gray-500 mb-4 ">{overlaySubtitle}</p>
            <p className="text-gray-600 leading-relaxed ">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => {
            // build relative route from current pathname
            const route = `${pathname}/${category.name
              .toLowerCase()
              .replace(/\s+/g, '-')}`;

            return (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all bg-white"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 flex flex-col h-full">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                  )}

                  <Link href={route} passHref>
                    <button className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg shadow hover:bg-primary-500  transition">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quality Assurance */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Quality Assurance
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {qualityAssurance.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition"
            >
              {index % 3 === 0 && <ShieldCheck size={18} className="text-green-600" />}
              {index % 3 === 1 && <Star size={18} className="text-yellow-500" />}
              {index % 3 === 2 && <Award size={18} className="text-blue-600" />}
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcategory;

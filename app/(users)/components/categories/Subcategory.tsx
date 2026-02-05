"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

interface ProductCategoryItem {
  name: string;
  imageUrl: string;
  description?: string;
}

interface SubcategoryProps {
  title: string;
  description: string;
  productCategories: ProductCategoryItem[];
}

const Subcategory: React.FC<SubcategoryProps> = ({
  title,
  description,
  productCategories,
}) => {
  const pathname = usePathname();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      {/* Breadcrumb */}
      <nav className="text-lg text-gray-500 mb-6 flex items-center space-x-2">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight size={14} />
        <span className="text-secondary font-medium">Flooring</span>
      </nav>


      {/* Page Title */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">{title}</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          {description}
        </p>
      </header>

      {/* Grid of Product Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.map((category, index) => {
          const route = `${pathname}/${category.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`;

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                )}

                {/* Explore Button */}
                <div className="mt-auto">
                  <Link href={route} passHref>
                    <button className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg shadow hover:bg-primary/90 transition w-fit">
                      Explore <ChevronRight size={16} className="ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Subcategory;

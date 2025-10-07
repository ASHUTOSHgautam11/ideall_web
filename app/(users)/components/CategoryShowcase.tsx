'use client';

import Link from 'next/link';
import { Card } from '@/app/(users)/components/ui/card';
import { Button } from '@/app/(users)/components/ui/button';
import { Layers, Sofa, Scissors, Palette } from 'lucide-react';

const categories = [
  {
    slug: 'floorings',
    title: 'Premium Floorings',
    subtitle:
      'Elevate your interiors with our luxurious and durable flooring solutions — from hardwood to eco-friendly options.',
    products: [
      { slug: 'engineered-hardwood', name: 'Engineered Hardwood' },
      { slug: 'luxury-vinyl-tiles', name: 'Luxury Vinyl Tiles' },
      { slug: 'natural-stone', name: 'Natural Stone' },
      { slug: 'designer-carpets', name: 'Designer Carpets' },
      { slug: 'eco-friendly-options', name: 'Eco-friendly Options' },
    ],
    image:
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Layers,
  },
  {
    slug: 'furniture',
    title: 'Designer Furniture',
    subtitle:
      'Transform your space with stylish and functional collections. From living room sets to office solutions, we have it all.',
    products: [
      { slug: 'custom-manufacturing', name: 'Custom Manufacturing' },
      { slug: 'luxury-collections', name: 'Luxury Collections' },
      { slug: 'office-solutions', name: 'Office Solutions' },
      { slug: 'outdoor-furniture', name: 'Outdoor Furniture' },
      { slug: 'smart-furniture', name: 'Smart Furniture' },
    ],
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sofa,
  },
  {
    slug: 'fabrics',
    title: 'Premium Fabrics',
    subtitle:
      'Discover high-quality fabrics for every application. Textures, sustainable materials, and performance fabrics await.',
    products: [
      { slug: 'designer-textiles', name: 'Designer Textiles' },
      { slug: 'technical-fabrics', name: 'Technical Fabrics' },
      { slug: 'sustainable-materials', name: 'Sustainable Materials' },
      { slug: 'custom-weaving', name: 'Custom Weaving' },
      { slug: 'performance-fabrics', name: 'Performance Fabrics' },
    ],
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Scissors,
  },
  {
    slug: 'walls',
    title: 'Fashion Walls',
    subtitle:
      'Innovative and artistic wall solutions — from 3D panels to acoustic systems for modern interiors.',
    products: [
      { slug: '3d-wall-panels', name: '3D Wall Panels' },
      { slug: 'acoustic-solutions', name: 'Acoustic Solutions' },
      { slug: 'smart-surfaces', name: 'Smart Surfaces' },
      { slug: 'artistic-finishes', name: 'Artistic Finishes' },
      { slug: 'modular-systems', name: 'Modular Systems' },
    ],
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Palette,
  },
];

export default function CategoriesPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Discover Our Categories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore a curated selection of world-class products designed to
          elevate your interiors with elegance, style, and durability.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
        {categories.map((category) => (
          <Card
            key={category.slug}
            className="flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white"
          >
            {/* Image */}
            <div className="h-40 w-full">
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{category.subtitle}</p>

              {/* Subcategories (not links) */}
              <div className="flex flex-wrap gap-2 mb-4">
                {category.products.map((product) => (
                  <span
                    key={product.slug}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {product.name}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Link href={`/product-categories/${category.slug}`}>
                <Button className="w-full mt-auto bg-primary text-white hover:bg-primary/90">
                  Explore {category.title.split(' ')[1] || category.title}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

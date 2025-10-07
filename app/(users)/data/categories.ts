// data/categories.ts
export interface SubCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  banner: string;
  products: SubCategory[];
}

export const categories: Category[] = [
  {
    slug: 'floorings',
    title: 'Premium Floorings',
    subtitle:
      'Elevate your interiors with luxurious and durable flooring solutions — from hardwood to eco-friendly options.',
    banner:
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    products: [
      {
        slug: 'engineered-hardwood',
        name: 'Engineered Hardwood',
        description:
          'Strong, stylish, and versatile flooring made with advanced technology for modern spaces.',
        image:
          'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        slug: 'luxury-vinyl-tiles',
        name: 'Luxury Vinyl Tiles',
        description:
          'High-quality vinyl flooring with natural textures that combine elegance and durability.',
        image:
          'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        slug: 'natural-stone',
        name: 'Natural Stone',
        description:
          'Bring timeless sophistication with marble, granite, and other natural stones.',
        image:
          'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  {
    slug: 'furniture',
    title: 'Designer Furniture',
    subtitle:
      'Transform your space with stylish and functional collections for every need.',
    banner:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    products: [
      {
        slug: 'luxury-collections',
        name: 'Luxury Collections',
        description:
          'Exclusive furniture collections crafted with world-class design.',
        image:
          'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        slug: 'office-solutions',
        name: 'Office Solutions',
        description:
          'Modern ergonomic office furniture that enhances productivity.',
        image:
          'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  // Add fabrics, walls etc...
];

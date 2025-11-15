// app/(users)/fabrics/page.tsx
import Subcategory from '../../components/categories/Subcategory';
import HeroVideoSection from '../../components/HeroVideoSection';

export default function Fabrics() {
  const data = {
    title: 'Fabrics',
    description:
      'High-quality fabrics designed for upholstery, window treatments, and performance-driven applications with a focus on durability and sustainability.',
    productCategories: [
      {
        name: 'Upholstery Materials',
        imageUrl:
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
        description: 'Durable and stylish fabrics for sofas, chairs, and soft furnishings.',
      },
      {
        name: 'Window Treatments',
        imageUrl:
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
        description: 'Elegant drapery and curtain fabrics for residential and commercial spaces.',
      },
      {
        name: 'Technical Fabrics',
        imageUrl:
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
        description: 'Specialized textiles engineered for functionality and performance.',
      },
      {
        name: 'Performance Textiles',
        imageUrl:
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
        description: 'High-performance fabrics resistant to wear, stains, and fading.',
      },
      {
        name: 'Sustainable Fiber Options',
        imageUrl:
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
        description: 'Eco-friendly fabrics made from recycled and renewable fibers.',
      },
    ],
    qualityAssurance: [
      'Colorfastness and fade resistance',
      'Abrasion and durability testing',
      'Non-toxic and safe materials',
      'Certified eco-friendly fiber sourcing',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
    overlaySubtitle:
      'Our Global Sourcing Network connects businesses with premium fabric suppliers worldwide. From upholstery to sustainable textiles, we ensure quality, durability, and design versatility. Every material is tested for performance, comfort, and compliance with international standards.',
  };

  return (
    <main>
      <HeroVideoSection
        heading="Fabrics"
        description="High-quality fabrics designed for upholstery, window treatments, and performance-driven applications."
        videoSrc="/assets/video/video4.mp4"
      />
      <Subcategory {...data} />
    </main>
  );
}

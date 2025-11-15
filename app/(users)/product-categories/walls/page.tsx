// app/(users)/fashion-walls/page.tsx
import Subcategory from '../../components/categories/Subcategory';
import HeroVideoSection from '../../components/HeroVideoSection';

export default function FashionWalls() {
  const data = {
    title: 'Fashion Walls',
    description:
      'Stylish wall solutions that blend design, functionality, and modern finishes for interiors and architectural spaces.',
    productCategories: [
      {
        name: '3D Wall Panels',
        imageUrl:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
        description: 'Dynamic textures and patterns to add depth and character to walls.',
      },
      {
        name: 'Decorative Cladding',
        imageUrl:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
        description: 'Stylish finishes that elevate spaces with elegance and charm.',
      },
      {
        name: 'Architectural Elements',
        imageUrl:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
        description: 'Functional design features that integrate seamlessly into interiors.',
      },
      {
        name: 'Modular Wall Systems',
        imageUrl:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
        description: 'Flexible, easy-to-install wall systems for modern projects.',
      },
      {
        name: 'Artistic Surface Treatments',
        imageUrl:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
        description: 'Creative finishes that bring unique visual appeal to any wall.',
      },
    ],
    qualityAssurance: [
      'Durable and long-lasting finishes',
      'Precision design and installation',
      'Eco-friendly materials and coatings',
      'Rigorous surface quality testing',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop',
    overlaySubtitle:
      'Our Fashion Walls collection introduces innovative wall solutions with premium textures, modular systems, and artistic finishes. Designed to enhance interiors, these products combine aesthetics with durability, ensuring versatile applications across residential, commercial, and hospitality spaces.',
  };

  return (
    <main>
      <HeroVideoSection
        heading="Fashion Walls"
        description="Stylish wall solutions that blend design, functionality, and modern finishes."
        videoSrc="/assets/video/video4.mp4"
      />
      <Subcategory {...data} />
    </main>
  );
}

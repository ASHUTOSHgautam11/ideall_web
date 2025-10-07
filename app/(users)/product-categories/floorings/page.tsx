// app/(users)/floorings/page.tsx
import Subcategory from '../../components/categories/Subcategory';
import HeroVideoSection from '../../components/HeroVideoSection';

export default function Floorings() {
  const data = {
    title: 'Floorings',
    description: 'Premium flooring solutions sourced from global manufacturers with stringent quality standards.',
    productCategories: [
      {
        name: 'Carpet & Carpet Tiles',
        imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
        description: 'Luxurious and durable carpets for every space.',
      },
      {
        name: 'Artificial and Sports Grass',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
        description: 'Realistic, low-maintenance synthetic turf.',
      },
      {
        name: 'Vinyl Floorings & Laminates',
        imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
        description: 'Waterproof, stylish, and easy to install.',
      },
      {
        name: 'Engineered & Solid Wood',
        imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
        description: 'Timeless natural wood with modern resilience.',
      },
    ],
    qualityAssurance: [
      'Factory inspection protocols',
      'Material durability testing',
      'Installation compatibility verification',
      'Environmental compliance certification',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop',
    overlaySubtitle: 'Our Global Sourcing Network connects businesses to premium suppliers worldwide. We specialize in sourcing high-quality products across diverse industries. Through trusted partnerships we ensure reliability and consistency in supply. Our team rigorously evaluates vendors to maintain strict quality standards. We streamline logistics to provide timely delivery and reduce costs. Advanced technology helps us track products from production to delivery.',
  };

  return (
    <main>
        <HeroVideoSection heading='Floorings' description='Premium flooring solutions sourced from global manufacturers with stringent quality standards.' videoSrc='/assets/video/video4.mp4'/>
      <Subcategory {...data} />
    </main>
  );
}
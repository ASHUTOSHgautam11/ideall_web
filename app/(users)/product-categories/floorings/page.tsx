// app/(users)/floorings/page.tsx
import Subcategory from '../../components/categories/Subcategory';
import HeroVideoSection from '../../components/HeroVideoSection';

export default function Floorings() {
  const data = {
    title: 'Floorings',
    description: 'Explore our premium range of carpet tiles designed for durability, comfort, and modern aesthetics. Perfect for commercial and residential spaces, offering versatile styles to suit every interior.',
    productCategories: [
      {
        name: 'Carpet & Carpet Tiles',
        imageUrl: '/assets/products/floorings/Carpet&CarpetTiles/Carpet & Carpet Tiles.jpg',
        description: 'Luxurious and durable carpets for every space.',
      },
      {
        name: 'Artificial and Sports Grass',
        imageUrl: '/assets/products/floorings/ArtificialandSportsGrass/Artificial and Sports Grass.jpeg',
        description: 'Realistic, low-maintenance synthetic turf.',
      },
      {
        name: 'Vinyl Floorings & Laminates',
        imageUrl: '/assets/products/floorings/VinylFloorings&Laminates/Vinyl Floorings & Laminates.avif',
        description: 'Waterproof, stylish, and easy to install.',
      },
      {
        name: 'Engineered & Solid Wood',
        imageUrl: '/assets/products/floorings/Engineered&SolidWood/Engineered & Solid Wood.jpg',
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
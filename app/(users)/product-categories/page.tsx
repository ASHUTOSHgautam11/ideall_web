import CategoriesHero from '@/app/(users)/components/CategoriesHero';
import CategoryShowcase from '@/app/(users)/components/CategoryShowcase';
import InvestmentOpportunity from '@/app/(users)/components/InvestmentOpportunity';
import HeroVideoSection from '@/app/(users)/components/HeroVideoSection';

export default function ProductCategories() {
  return (
    <main>
      <HeroVideoSection
        heading="Product Categories"
        description="Explore our comprehensive range of premium interior solutions sourced from trusted global manufacturers."
        videoSrc="/assets/video/video4.mp4"
      />

      {/* <CategoriesHero /> */}
      <CategoryShowcase />
      <InvestmentOpportunity />
    </main>
  );
}


// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { categories } from '@/app/data/categories';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// export default function CategoriesPage() {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center mb-16">
//         <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
//           Discover Our Categories
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Explore a curated selection of world-class products designed to
//           elevate your interiors with elegance, style, and durability.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
//         {categories.map((category) => (
//           <Card
//             key={category.slug}
//             className="flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white"
//           >
//             <div className="relative h-40 w-full">
//               <Image
//                 src={category.banner}
//                 alt={category.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex flex-col flex-1 p-6 text-left">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {category.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">{category.subtitle}</p>
//               <Link href={`/product-categories/${category.slug}`}>
//                 <Button className="w-full mt-auto bg-primary text-white hover:bg-primary/90">
//                   Explore {category.title.split(' ')[1] || category.title}
//                 </Button>
//               </Link>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }



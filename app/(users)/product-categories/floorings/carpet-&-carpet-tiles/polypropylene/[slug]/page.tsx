import { notFound } from "next/navigation";
import { products } from "../productData";
import ProductClient from "./ProductClient";
import HeroVideoSectionHalf from "@/app/(users)/components/HeroVideoSectionHalf";


// Pre-generate static paths
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();


  return (
    <>
      <HeroVideoSectionHalf
        heading=" "
        description=" "
        videoSrc="/assets/video/video4.mp4"
      />

      {/* Pass product to Client Component */}
      <ProductClient product={product} />
    </>
  );
}

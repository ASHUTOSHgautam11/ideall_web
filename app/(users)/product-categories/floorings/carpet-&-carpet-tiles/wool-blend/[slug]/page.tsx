import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../productData";
import HeroVideoSectionHalf from "@/app/(users)/components/HeroVideoSectionHalf";
import Link from "next/link";
import ProductClient from "./ProductClient"; // ✅ NEW

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetails({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <>
      <HeroVideoSectionHalf
        heading="Wool Blend Tiles Collection"
        description="Natural elegance meets lasting durability for high-traffic spaces."
        videoSrc="/assets/video/video4.mp4"
      />

      {/* Pass product to Client Component */}
      <ProductClient product={product} />
    </>
  );
}

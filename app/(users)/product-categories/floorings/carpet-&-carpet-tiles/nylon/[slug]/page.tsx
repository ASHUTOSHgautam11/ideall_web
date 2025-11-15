// page.tsx (or ProductDetails.tsx)
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../productData";
import { Fragment } from "react";
import HeroVideoSectionHalf from "@/app/(users)/components/HeroVideoSectionHalf";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetails({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <>
    <HeroVideoSectionHalf
                    heading=" "
                    description=" "
                    videoSrc="/assets/video/video4.mp4"
                />
    
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      {/* Top hero: image + details */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left: details */}
        <div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Urban Concrete Series</p>
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <div className="mt-2 text-gray-600 max-w-prose">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="px-3 py-1 rounded-md border text-sm text-gray-700">{product.code}</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 text-gray-700">
            <p><strong>Available Colors:</strong> {product.colors}</p>
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg">Applications</h3>
              <p className="mt-2">{product.applications}</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg">Sustainability</h3>
              <p className="mt-2">{product.sustainability}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={product.ctaLinks?.requestSamples || "#"}
                className="inline-flex items-center px-4 py-2 rounded-md bg-secondary text-white text-sm shadow"
              >
                Request Samples
              </a>
              <a
                href={product.ctaLinks?.technicalSupport || "#"}
                className="inline-flex items-center px-4 py-2 rounded-md border text-sm"
              >
                Technical Support
              </a>
              <a
                href={product.ctaLinks?.downloadSheet || "#"}
                className="inline-flex items-center px-4 py-2 rounded-md text-sm bg-white border"
              >
                Download Data Sheet
              </a>
            </div>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src={product.img}
            alt={product.title}
            width={1000}
            height={700}
            className="object-cover w-full h-[420px] md:h-[520px]"
          />
        </div>
      </div>

      {/* Installation gallery */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Installation Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.installationGallery.map((g, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-sm">
              <Image src={g} alt={`${product.title} gallery ${i + 1}`} width={400} height={300} className="object-cover h-40 w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Three cards: Technical Specs, Performance Ratings, Ideal Applications */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h3 className="font-semibold mb-3">Technical Specifications</h3>
          <div className="text-sm text-gray-700 space-y-2">
            {product.technicalSpecs.map((t, i) => (
              <div key={i} className="flex justify-between border-b py-2 last:border-b-0">
                <span className="text-gray-600">{t.label}</span>
                <span className="font-medium">{t.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h3 className="font-semibold mb-3">Performance Ratings</h3>
          <div className="text-sm text-gray-700 space-y-2">
            {product.performanceRatings.map((p, i) => (
              <div key={i} className="flex justify-between border-b py-2 last:border-b-0">
                <span className="text-gray-600">{p.label}</span>
                <span className="font-medium">{p.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-6 bg-white shadow-sm">
          <h3 className="font-semibold mb-3">Ideal Applications</h3>
          <ul className="space-y-2 text-gray-700">
            {product.idealApplications.map((app, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs">✓</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Available Colors */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Available Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {product.availableColors.map((c) => (
            <div key={c.code} className="rounded-xl border p-3 text-center bg-white shadow-sm">
              <div className="w-full h-28 rounded-md overflow-hidden mb-3">
                <Image src={c.img} alt={c.name} width={300} height={200} className="object-cover w-full h-full" />
              </div>
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-gray-500">{c.code}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Sustainability & Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {product.certifications.map((cert, i) => (
            <div key={i} className="rounded-md border px-4 py-3 bg-white text-sm text-gray-700 shadow-sm">
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Installation & Maintenance */}
      <section className="mt-12 bg-secondary-600 rounded-2xl p-8">
        <h3 className="text-xl font-semibold mb-4">Installation & Maintenance</h3>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Professional installation guidance and maintenance protocols to ensure optimal performance and longevity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.installationSteps.map((s) => (
            <div key={s.id} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary-100 mx-auto flex items-center justify-center font-semibold text-secondary mb-4">
                {s.id}
              </div>
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-sm text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-10 bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold">Ready to Specify This Product?</h4>
          <p className="text-gray-600 text-sm">Contact our specialists for samples, detailed specifications, and project consultation.</p>
        </div>

        <div className="flex gap-3">
          <a href={product.ctaLinks?.requestSamples || "#"} className="inline-flex items-center px-4 py-2 rounded-md bg-secondary text-white text-sm shadow">Request Samples</a>
          <a href={product.ctaLinks?.technicalSupport || "#"} className="inline-flex items-center px-4 py-2 rounded-md border text-sm">Technical Support</a>
          <a href={product.ctaLinks?.downloadSheet || "#"} className="inline-flex items-center px-4 py-2 rounded-md text-sm bg-white border">Download Data Sheet</a>
        </div>
      </section>
    </div>
    </>
  );
}

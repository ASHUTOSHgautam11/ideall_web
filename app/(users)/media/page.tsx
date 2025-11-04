'use client';

import HeroVideoSection from '../components/HeroVideoSection';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Media() {
  const news = [
    {
      title: "Belgotex India Expands Global Sourcing Network",
      date: "Aug 2025",
      description:
        "We are proud to announce the expansion of our sourcing partnerships across Europe and Asia, ensuring sustainable and premium solutions for our clients.",
    },
    {
      title: "Awarded Excellence in Interior Solutions",
      date: "Jul 2025",
      description:
        "Recognized for our innovative approach in flooring and wall solutions at the National Design Expo 2025.",
    },
    {
      title: "CSR Initiative: Eco-Friendly Fibers",
      date: "Jun 2025",
      description:
        "Our latest eco-friendly textile initiative reduces carbon footprint while ensuring world-class durability.",
    },
  ];

  const gallery = [
    { src: "/assets/media/media1.jpg", alt: "Showroom Launch" },
    { src: "/assets/media/media2.jpg", alt: "Team Event" },
    { src: "/assets/media/media3.jpg", alt: "Exhibition Booth" },
    { src: "/assets/media/media4.jpg", alt: "Product Showcase" },
  ];

  return (
    <>
      {/* Hero */}
      <HeroVideoSection
        heading="Our Media Section"
        description="The Media Page serves as a centralized hub for showcasing your company’s latest news, updates, and multimedia content. It’s designed to keep stakeholders, customers, and the public informed about brand activities, achievements, and industry presence."
        videoSrc="/assets/video/video3.mp4"
      />

      <main>
        {/* Intro */}
        <div className="max-w-6xl mx-auto text-center mb-16 mt-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Media Section
          </h1>
          <p className="text-lg text-gray-900 max-w-3xl mx-auto mb-14">
            Stay connected with our latest company updates, industry
            recognitions, and achievements. Explore stories, press releases,
            and galleries that highlight our journey in shaping interiors
            with excellence.
          </p>


        </div>



        {/* Latest News */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Latest News & Updates
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item, idx) => (
                <Card key={idx} className="shadow-md hover:shadow-xl transition rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Media Gallery
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-56 rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/90 to-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Featuring Us?
            </h2>
            <p className="mb-8 text-lg">
              For media inquiries, interviews, or press collaborations, feel
              free to reach out to our team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

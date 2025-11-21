"use client";

import Image from "next/image";

interface Review {
  name: string;
  role: string;
  initials: string;
  review: string;
  stars?: number;
  companyLogo: string; // path inside /public
}

const reviews: Review[] = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    initials: "SJ",
    review:
      "The support team is absolutely phenomenal. They responded within minutes and solved our complex issue with professionalism and expertise. Highly recommend!",
    stars: 5,
    companyLogo: "/logos/techstart.png",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    initials: "MC",
    review:
      "Outstanding service! The team went above and beyond to help us integrate their solution. Communication was clear and follow-up was excellent.",
    stars: 5,
    companyLogo: "/logos/innovateco.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Studios",
    initials: "ER",
    review:
      "I've worked with many companies, but this level of customer care is unmatched. They truly listen and provide tailored solutions. Game changer for our business!",
    stars: 5,
    companyLogo: "/logos/creative.png",
  },
  {
    name: "David Kim",
    role: "CTO, DataFlow Systems",
    initials: "DK",
    review:
      "Exceptional response time and technical knowledge. They helped us resolve critical issues during our launch. Couldn't have done it without them!",
    stars: 5,
    companyLogo: "/logos/dataflow.png",
  },
  {
    name: "Lisa Anderson",
    role: "Director, Global Solutions",
    initials: "LA",
    review:
      "Professional, knowledgeable, and incredibly responsive. They've set a new standard for customer support in our industry. Absolutely brilliant!",
    stars: 5,
    companyLogo: "/logos/globalsolutions.png",
  },
  {
    name: "James Wilson",
    role: "VP Operations, FastTrack",
    initials: "JW",
    review:
      "The best customer service we've ever had. Quick, efficient, and always friendly. They treat you like family, not just a customer.",
    stars: 5,
    companyLogo: "/logos/fasttrack.png",
  },
];

export default function ClientReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Don’t just take our word for it – hear from our satisfied customers
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow rounded-xl border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                {Array.from({ length: review.stars ?? 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-6">“{review.review}”</p>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>

                {/* Company Logo */}
                <Image
                  src={review.companyLogo}
                  alt={`${review.name} company logo`}
                  width={40}
                  height={40}
                  className="object-contain opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

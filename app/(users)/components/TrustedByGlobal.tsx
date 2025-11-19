"use client";
import Link from "next/link";
import React from "react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustedByGlobal: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2v20" />
        </svg>
      ),
      title: "Global Network",
      description: "Strategic offices in India, China, and Singapore",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Quality Assured",
      description: "Rigorous vetting and quality control processes",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5.86A1 1 0 0 1 5 17.86V14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.86A1 1 0 0 1 9.86 18H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Expert Team",
      description: "Deep expertise in lifestyle goods and logistics",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="22 12 18 16 15 13 9 17 6 14 2 18" />
        </svg>
      ),
      title: "Proven Results",
      description: "Track record of successful partnerships since 2002",
    },
  ];

  return (
    <section
      style={{
        padding: "45px 0",
        backgroundColor: "#f7f4f2ff",
        textAlign: "center",
      }}
      aria-labelledby="trusted-by-heading"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#926f4e] mb-3">
          TRUSTED BY GLOBAL BUSINESSES
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From Singapore to the world, connecting quality suppliers to growing
          businesses
        </p>
      </div>

      {/* Static Grid of Cards */}
      <div
        className="grid gap-6 px-4 sm:px-8 md:px-12"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          justifyContent: "center",
          alignItems: "stretch",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, index) => (
          <Link
            href="/our-story"
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              padding: "30px 20px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
            }
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                backgroundColor: "#9c86d8ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 15px",
                color: "#2d1c6bff",
              }}
            >
              {feature.icon}
            </div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#926f4e",
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.5",
                color: "#555",
              }}
            >
              {feature.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrustedByGlobal;

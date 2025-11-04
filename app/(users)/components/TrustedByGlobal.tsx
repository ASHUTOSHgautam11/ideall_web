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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: "Quality Assured",
            description: "Rigorous vetting and quality control processes",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5.86A1 1 0 0 1 5 17.86V14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.86A1 1 0 0 1 9.86 18H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            title: "Expert Team",
            description: "Deep expertise in lifestyle goods and logistics",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
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
                padding: "60px 0",
                textAlign: "center",
                backgroundColor: "#f7f4f2ff",
                overflow: "hidden",
                position: "relative",
            }}
            aria-labelledby="trusted-by-heading"
        >
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#926f4e] mb-3">
                    TRUSTED BY GLOBAL BUSINESSES
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    From Singapore to the world, connecting quality suppliers to growing businesses
                </p>
            </div>

            {/* Marquee Wrapper */}
            <div className="marquee">
                {/* Duplicate content twice for infinite loop */}
                <div className="marquee__content">
                    {[...features, ...features, ...features].map((feature, index) => (
                        <Link
                            href="/our-story"
                            key={index}
                            className="marquee__item"
                            style={{
                                flex: "0 0 260px",
                                background: "#fff",
                                borderRadius: "12px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                padding: "20px",
                                margin: "0 15px",
                                transition: "transform 0.3s ease",
                                textAlign: "center",
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
            </div>

            {/* Styles */}
            <style jsx>{`
        .marquee {
          display: flex;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee__content {
          display: flex;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .marquee:hover .marquee__content {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .marquee__content {
            animation-duration: 60s;
          }
        }
      `}</style>
        </section>
    );
};

export default TrustedByGlobal;

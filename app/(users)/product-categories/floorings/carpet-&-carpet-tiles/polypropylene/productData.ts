// productData.ts

export interface KeyValue {
  label: string;
  value: string;
}

export interface ColorSwatch {
  name: string;
  code: string;
  img: string;
}

export interface MaintenanceStep {
  id: number;
  title: string;
  description: string;
}

export interface ProductType {
  title: string;
  code: string;
  colors: string;
  img: string;
  thumbnail?: string;
  specPdf?: string;
  description: string;
  features: string[];
  applications: string;
  sustainability: string;
  slug: string;

  installationGallery: string[];
  technicalSpecs: KeyValue[];
  performanceRatings: KeyValue[];
  idealApplications: string[];
  availableColors: ColorSwatch[];
  certifications: string[];
  installationSteps: MaintenanceStep[];
  ctaLinks?: {
    requestSamples?: string;
    technicalSupport?: string;
    downloadSheet?: string;
  };
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const products: ProductType[] = [
  {
    title: "PolyTech Loop Series",
    slug: "polytech-loop-series",
    code: "PP-3101",
    colors: "6 Colors",
    img: "/assets/products/floorings/polyproplene/polytech/polytech1.avif",
    thumbnail: "/assets/products/floorings/polyproplene/polytech/polytech1.avif",
    specPdf: "/assets/pdf/floorings/polypropylene/polytech-loop-series.pdf",

    description:
      "Durable polypropylene carpet tiles designed for high-traffic commercial spaces requiring cost-effective flooring.",

    features: [
      "Stain-resistant polypropylene fibers",
      "Low-loop construction for durability",
      "Easy to maintain and replace",
      "Suitable for large commercial installations",
      "Lightweight tile structure",
      "Moisture-resistant backing"
    ],

    applications:
      "Retail stores, Schools, Corridors, Airports, Libraries, Learning centers",

    sustainability: "Eco-friendly backing with low VOC emissions",

    installationGallery: [
      "/assets/products/polypropylene/gallery/pp1.jpg",
      "/assets/products/polypropylene/gallery/pp2.jpg",
      "/assets/products/polypropylene/gallery/pp3.jpg",
      "/assets/products/polypropylene/gallery/pp4.jpg"
    ],

    technicalSpecs: [
      { label: "Construction", value: "Tufted low loop pile" },
      { label: "Fiber Content", value: "100% Polypropylene" },
      { label: "Pile Height", value: "5.0mm" },
      { label: "Tile Size", value: "50cm x 50cm" },
      { label: "Total Thickness", value: "8.5mm" },
      { label: "Primary Backing", value: "Non-woven" },
      { label: "Secondary Backing", value: "PVC with fiberglass" }
    ],

    performanceRatings: [
      { label: "Wear Rating", value: "Class 32 - General Commercial" },
      { label: "Light Fastness", value: "ISO 105-B02 Grade 5" },
      { label: "Static Generation", value: "< 2.5kV" },
      { label: "Flammability", value: "Pass (EN 13501-1)" },
      { label: "Impact Resistance", value: "Grade B" },
      { label: "Moisture Resistance", value: "High" }
    ],

    idealApplications: [
      "Educational institutions",
      "Retail stores",
      "Libraries",
      "Waiting areas",
      "Commercial corridors",
      "Public buildings"
    ],

    availableColors: [
      { name: "Slate Grey", code: "SG-01", img: "/assets/products/polypropylene/colors/pp-color1.jpg" },
      { name: "Urban Taupe", code: "UT-02", img: "/assets/products/polypropylene/colors/pp-color2.jpg" },
      { name: "Graphite Mix", code: "GM-03", img: "/assets/products/polypropylene/colors/pp-color3.jpg" },
      { name: "Stone Beige", code: "SB-04", img: "/assets/products/polypropylene/colors/pp-color4.jpg" },
      { name: "Carbon Charcoal", code: "CC-05", img: "/assets/products/polypropylene/colors/pp-color5.jpg" },
      { name: "Warm Dust", code: "WD-06", img: "/assets/products/polypropylene/colors/pp-color6.jpg" }
    ],

    certifications: [
      "/assets/products/polypropylene/certifications/icon1.jpg",
      "/assets/products/polypropylene/certifications/icon2.jpg",
      "/assets/products/polypropylene/certifications/icon3.jpg"
    ],

    installationSteps: [
      {
        id: 1,
        title: "Pre-Installation",
        description:
          "Ensure the floor is dry, level, and completely free from dust or debris before installation begins."
      },
      {
        id: 2,
        title: "Tile Installation",
        description:
          "Use monolithic or quarter-turn methods for best visual results; align tiles precisely for clean lines."
      },
      {
        id: 3,
        title: "Maintenance",
        description:
          "Routine vacuuming and periodic deep cleaning help maintain appearance and performance."
      }
    ],

    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },

  // Add more polypropylene products here
];

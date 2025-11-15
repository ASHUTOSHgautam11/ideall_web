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
  img: string; // hero image
  thumbnail?: string;
  description: string;
  features: string[];
  applications: string; // short text (comma separated)
  sustainability: string;
  slug: string;

  // New fields to match design
  installationGallery: string[]; // array of image paths
  technicalSpecs: KeyValue[];
  performanceRatings: KeyValue[];
  idealApplications: string[]; // list shown with check icons
  availableColors: ColorSwatch[]; // contains image & code for each color
  certifications: string[]; // badges/text
  installationSteps: MaintenanceStep[]; // 3 steps in the design
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
    title: "Urban Concrete Series",
    slug: "urban-concrete-series",
    code: "UC-2401",
    colors: "6 Colors",
    img: "/assets/products/nylon/naylon1.avif",
    thumbnail: "/assets/products/nylon/naylon1.avif",
    description:
      "Contemporary nylon carpet tiles featuring weathered concrete aesthetics perfect for modern office environments.",
    features: [
      "Solution-dyed nylon 6.6 fibers",
      "Textured concrete-inspired pattern",
      "Class 33 commercial rating",
      "Anti-static properties",
      "Stain-resistant treatment",
      "Easy installation system",
    ],
    applications: "Corporate offices, Meeting rooms, Reception areas, Co-working spaces",
    sustainability: "Cradle to Cradle Certified; Contains recycled content",
    installationGallery: [
      "/images/flooring/gallery/urban-1.jpg",
      "/images/flooring/gallery/urban-2.jpg",
      "/images/flooring/gallery/urban-3.jpg",
      "/images/flooring/gallery/urban-4.jpg",
    ],
    technicalSpecs: [
      { label: "Construction", value: "Tufted loop pile" },
      { label: "Fiber Content", value: "100% Solution-dyed Nylon 6.6" },
      { label: "Pile Height", value: "6.5mm" },
      { label: "Tile Size", value: "50cm x 50cm" },
      { label: "Total Thickness", value: "9.5mm" },
      { label: "Tufts Per Sqm", value: "200,000" },
      { label: "Backing", value: "Recycled bitumen with fiberglass" },
    ],
    performanceRatings: [
      { label: "Wear Rating", value: "Class 33 - Heavy Commercial" },
      { label: "Light Fastness", value: "ISO 105-B02 Grade 6" },
      { label: "Static Generation", value: "< 2kV (AATCC 134)" },
      { label: "Flammability", value: "Class 1 (BS EN 13501-1)" },
      { label: "Sound Absorption", value: "aw = 0.15 (ISO 354)" },
      { label: "Indentation Resistance", value: "Grade A (ISO 3416)" },
    ],
    idealApplications: [
      "Corporate offices",
      "Meeting rooms",
      "Reception areas",
      "Co-working spaces",
      "Professional services",
      "Open plan offices",
    ],
    availableColors: [
      { name: "Metropolitan Grey", code: "MG-01", img: "/images/flooring/colors/mg-01.jpg" },
      { name: "Urban Charcoal", code: "UC-02", img: "/images/flooring/colors/uc-02.jpg" },
      { name: "Industrial Concrete", code: "IC-03", img: "/images/flooring/colors/ic-03.jpg" },
      { name: "Modern Stone", code: "MS-04", img: "/images/flooring/colors/ms-04.jpg" },
      { name: "Business Grey", code: "BG-05", img: "/images/flooring/colors/bg-05.jpg" },
      { name: "Executive Slate", code: "ES-06", img: "/images/flooring/colors/es-06.jpg" },
    ],
    certifications: [
      "Cradle to Cradle Certified",
      "Green Label Plus certified",
      "Low VOC emissions",
      "Recyclable backing material",
      "Carbon neutral manufacturing",
    ],
    installationSteps: [
      {
        id: 1,
        title: "Pre-Installation",
        description:
          "Subfloor preparation, moisture testing, and acclimatization requirements for optimal installation results.",
      },
      {
        id: 2,
        title: "Professional Installation",
        description:
          "Quarter-turn or ashlar installation patterns with precision cutting and seamless edge alignment.",
      },
      {
        id: 3,
        title: "Maintenance Protocol",
        description:
          "Regular vacuuming, spot cleaning procedures, and professional deep cleaning schedules.",
      },
    ],
    ctaLinks: {
      requestSamples: "/contact/request-samples?product=urban-concrete-series",
      technicalSupport: "/contact/technical-support?product=urban-concrete-series",
      downloadSheet: "/downloads/uc-2401-datasheet.pdf",
    },
  },

  // --- add other products similarly, below are a couple more examples ---

  {
    title: "Professional Texture Series",
    slug: "professional-texture-series",
    code: "PT-2402",
    colors: "8 Colors",
    img: "/assets/products/nylon/naylon2.avif",
    thumbnail: "/assets/products/nylon/naylon2.avif",
    description:
      "High-performance nylon carpet tiles engineered for demanding commercial environments.",
    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic",
    ],
    applications: "Executive offices, Conference centers, Retail",
    sustainability: "GREENGUARD Gold certified",
    installationGallery: [
      "/images/flooring/gallery/professional-1.jpg",
      "/images/flooring/gallery/professional-2.jpg",
      "/images/flooring/gallery/professional-3.jpg",
    ],
    technicalSpecs: [
      { label: "Construction", value: "Tufted loop pile" },
      { label: "Fiber Content", value: "Solution-dyed Nylon 6.6" },
      { label: "Pile Height", value: "5.8mm" },
    ],
    performanceRatings: [{ label: "Wear Rating", value: "Class 33" }],
    idealApplications: ["Executive offices", "Conference centers"],
    availableColors: [
      { name: "Corporate Blue", code: "CB-01", img: "/images/flooring/colors/cb-01.jpg" },
      { name: "Office Taupe", code: "OT-02", img: "/images/flooring/colors/ot-02.jpg" },
    ],
    certifications: ["Green Label Plus certified"],
    installationSteps: [
      {
        id: 1,
        title: "Pre-Installation",
        description: "Check subfloor and moisture readings.",
      },
      {
        id: 2,
        title: "Installation",
        description: "Use quarter-turn pattern for best aesthetics.",
      },
      {
        id: 3,
        title: "Maintenance",
        description: "Regular vacuuming and annual deep clean.",
      },
    ],
    ctaLinks: {
      requestSamples: "/contact/request-samples?product=professional-texture-series",
    },
  },

  // add more products as needed...
];

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
  specPdf?: string;
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
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
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
      "/assets/products/floorings/nylon/urban/naylon1.avif",
      "/assets/products/floorings/nylon/urban/naylon2.avif",
      "/assets/products/floorings/nylon/urban/naylon3.avif",
      "/assets/products/floorings/nylon/urban/naylon4.png",
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
      { name: "Metropolitan Grey", code: "MG-01", img: "/assets/products/floorings/nylon/urban/nayloncolor1.jpg" },
      { name: "Urban Charcoal", code: "UC-02", img: "/assets/products/floorings/nylon/urban/nayloncolor2.jpg" },
      { name: "Industrial Concrete", code: "IC-03", img: "/assets/products/floorings/nylon/urban/nayloncolor3.jpg" },
      { name: "Modern Stone", code: "MS-04", img: "/assets/products/floorings/nylon/urban/nayloncolor4.jpg" },
      { name: "Business Grey", code: "BG-05", img: "/assets/products/floorings/nylon/urban/nayloncolor5.jpg" },
      { name: "Executive Slate", code: "ES-06", img: "/assets/products/floorings/nylon/urban/nayloncolor6.jpg" },
    ],
    certifications: [
      "/assets/products/floorings/nylon/urban/icon1.jpg",
      "/assets/products/floorings/nylon/urban/icon2.jpg",
      "/assets/products/floorings/nylon/urban/icon3.jpg",
      "/assets/products/floorings/nylon/urban/icon4.jpg",
      "/assets/products/floorings/nylon/urban/icon5.jpg",
      "/assets/products/floorings/nylon/urban/icon6.jpg",
      "/assets/products/floorings/nylon/urban/icon7.jpg",
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
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: "",
    },
  },

  
  {
    title: "Professional Texture Series",
    slug: "professional-texture-series",
    code: "PT-2402",
    colors: "8 Colors",

    img: "/assets/products/nylon/naylon2.avif",
    thumbnail: "/assets/products/nylon/naylon2.avif",

    // PDF path matching urban category format
    specPdf: "/assets/pdf/floorings/naylon/professional-texture-series-specifications.pdf",

    description:
      "High-performance nylon carpet tiles engineered for demanding commercial environments.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",

    // Updated to match folder structure like urban collection
    installationGallery: [
      "/assets/products/floorings/nylon/professional/pro1.jpg",
      "/assets/products/floorings/nylon/professional/pro2.jpg",
      "/assets/products/floorings/nylon/professional/pro3.jpg"
    ],

    technicalSpecs: [
      { label: "Construction", value: "Tufted loop pile" },
      { label: "Fiber Content", value: "100% Solution-dyed Nylon 6.6" },
      { label: "Pile Height", value: "5.8mm" },
      { label: "Tile Size", value: "50cm x 50cm" },
      { label: "Total Thickness", value: "9.0mm" },
      { label: "Tufts Per Sqm", value: "190,000" },
      { label: "Backing", value: "Recycled bitumen with fiberglass" }
    ],

    performanceRatings: [
      { label: "Wear Rating", value: "Class 33 - Heavy Commercial" },
      { label: "Light Fastness", value: "ISO 105-B02 Grade 6" },
      { label: "Static Generation", value: "< 2kV (AATCC 134)" },
      { label: "Flammability", value: "Class 1 (BS EN 13501-1)" },
      { label: "Sound Absorption", value: "aw = 0.17 (ISO 354)" },
      { label: "Indentation Resistance", value: "Grade A (ISO 3416)" }
    ],

    idealApplications: [
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],

    // Same folder pattern as urban colors
    availableColors: [
      { name: "Corporate Blue", code: "CB-01", img: "/assets/products/floorings/nylon/professional/color1.jpg" },
      { name: "Office Taupe", code: "OT-02", img: "/assets/products/floorings/nylon/professional/color2.jpg" },
      { name: "Graphite Grey", code: "GG-03", img: "/assets/products/floorings/nylon/professional/color3.jpg" },
      { name: "Steel Brown", code: "SB-04", img: "/assets/products/floorings/nylon/professional/color4.jpg" },
      { name: "Shadow Black", code: "SH-05", img: "/assets/products/floorings/nylon/professional/color5.jpg" },
      { name: "Urban Taupe", code: "UT-06", img: "/assets/products/floorings/nylon/professional/color6.jpg" },
      { name: "Mist Grey", code: "MG-07", img: "/assets/products/floorings/nylon/professional/color7.jpg" },
      { name: "Deep Slate", code: "DS-08", img: "/assets/products/floorings/nylon/professional/color8.jpg" }
    ],

    // Same certifications array format as urban
    certifications: [
      "/assets/products/floorings/nylon/urban/icon1.jpg",
      "/assets/products/floorings/nylon/urban/icon2.jpg",
      "/assets/products/floorings/nylon/urban/icon3.jpg",
      "/assets/products/floorings/nylon/urban/icon4.jpg",
      "/assets/products/floorings/nylon/urban/icon5.jpg",
      "/assets/products/floorings/nylon/urban/icon6.jpg",
      "/assets/products/floorings/nylon/urban/icon7.jpg"
    ],

    installationSteps: [
      {
        id: 1,
        title: "Pre-Installation",
        description:
          "Subfloor preparation, moisture testing, and acclimatization requirements for optimal installation results."
      },
      {
        id: 2,
        title: "Professional Installation",
        description:
          "Quarter-turn or ashlar installation patterns with precision cutting and seamless edge alignment."
      },
      {
        id: 3,
        title: "Maintenance Protocol",
        description:
          "Regular vacuuming, spot cleaning procedures, and professional deep cleaning schedules."
      }
    ],

    // Same CTA structure as Urban Concrete Series
    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  // {
  //   title: "Urban Concrete Series",
  //   slug: "urban-concrete-series",
  //   code: "UC-2401",
  //   colors: "6 Colors",
  //   img: "/assets/products/nylon/naylon2.avif",
  //   thumbnail: "/assets/products/nylon/naylon2.avif",
  //   specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
  //   description:
  //     "Contemporary nylon carpet tiles featuring weathered concrete aesthetics perfect for modern office environments.",
  //   features: [
  //     "Solution-dyed nylon 6.6 fibers",
  //     "Textured concrete-inspired pattern",
  //     "Class 33 commercial rating",
  //     "Anti-static properties",
  //     "Stain-resistant treatment",
  //     "Easy installation system",
  //   ],
  //   applications: "Corporate offices, Meeting rooms, Reception areas, Co-working spaces",
  //   sustainability: "Cradle to Cradle Certified; Contains recycled content",
  //   installationGallery: [
  //     "/assets/products/floorings/nylon/urban/naylon1.avif",
  //     "/assets/products/floorings/nylon/urban/naylon2.avif",
  //     "/assets/products/floorings/nylon/urban/naylon3.avif",
  //     "/assets/products/floorings/nylon/urban/naylon4.png",
  //   ],
  //   technicalSpecs: [
  //     { label: "Construction", value: "Tufted loop pile" },
  //     { label: "Fiber Content", value: "100% Solution-dyed Nylon 6.6" },
  //     { label: "Pile Height", value: "6.5mm" },
  //     { label: "Tile Size", value: "50cm x 50cm" },
  //     { label: "Total Thickness", value: "9.5mm" },
  //     { label: "Tufts Per Sqm", value: "200,000" },
  //     { label: "Backing", value: "Recycled bitumen with fiberglass" },
  //   ],
  //   performanceRatings: [
  //     { label: "Wear Rating", value: "Class 33 - Heavy Commercial" },
  //     { label: "Light Fastness", value: "ISO 105-B02 Grade 6" },
  //     { label: "Static Generation", value: "< 2kV (AATCC 134)" },
  //     { label: "Flammability", value: "Class 1 (BS EN 13501-1)" },
  //     { label: "Sound Absorption", value: "aw = 0.15 (ISO 354)" },
  //     { label: "Indentation Resistance", value: "Grade A (ISO 3416)" },
  //   ],
  //   idealApplications: [
  //     "Corporate offices",
  //     "Meeting rooms",
  //     "Reception areas",
  //     "Co-working spaces",
  //     "Professional services",
  //     "Open plan offices",
  //   ],
  //   availableColors: [
  //     { name: "Metropolitan Grey", code: "MG-01", img: "/assets/products/floorings/nylon/urban/nayloncolor1.jpg" },
  //     { name: "Urban Charcoal", code: "UC-02", img: "/assets/products/floorings/nylon/urban/nayloncolor2.jpg" },
  //     { name: "Industrial Concrete", code: "IC-03", img: "/assets/products/floorings/nylon/urban/nayloncolor3.jpg" },
  //     { name: "Modern Stone", code: "MS-04", img: "/assets/products/floorings/nylon/urban/nayloncolor4.jpg" },
  //     { name: "Business Grey", code: "BG-05", img: "/assets/products/floorings/nylon/urban/nayloncolor5.jpg" },
  //     { name: "Executive Slate", code: "ES-06", img: "/assets/products/floorings/nylon/urban/nayloncolor6.jpg" },
  //   ],
  //   certifications: [
  //     "/assets/products/floorings/nylon/urban/icon1.jpg",
  //     "/assets/products/floorings/nylon/urban/icon2.jpg",
  //     "/assets/products/floorings/nylon/urban/icon3.jpg",
  //     "/assets/products/floorings/nylon/urban/icon4.jpg",
  //     "/assets/products/floorings/nylon/urban/icon5.jpg",
  //     "/assets/products/floorings/nylon/urban/icon6.jpg",
  //     "/assets/products/floorings/nylon/urban/icon7.jpg",
  //   ],

  //   installationSteps: [
  //     {
  //       id: 1,
  //       title: "Pre-Installation",
  //       description:
  //         "Subfloor preparation, moisture testing, and acclimatization requirements for optimal installation results.",
  //     },
  //     {
  //       id: 2,
  //       title: "Professional Installation",
  //       description:
  //         "Quarter-turn or ashlar installation patterns with precision cutting and seamless edge alignment.",
  //     },
  //     {
  //       id: 3,
  //       title: "Maintenance Protocol",
  //       description:
  //         "Regular vacuuming, spot cleaning procedures, and professional deep cleaning schedules.",
  //     },
  //   ],
  //   ctaLinks: {
  //     requestSamples: "",
  //     technicalSupport: "",
  //     downloadSheet: "",
  //   },
  // },

  // --- add other products similarly, below are a couple more examples ---

  // {
  //   title: "Professional Texture Series",
  //   slug: "professional-texture-series",
  //   code: "PT-2402",
  //   colors: "8 Colors",
  //   img: "/assets/products/nylon/naylon2.avif",
  //   thumbnail: "/assets/products/nylon/naylon2.avif",
  //   description:
  //     "High-performance nylon carpet tiles engineered for demanding commercial environments.",
  //   features: [
  //     "Enhanced nylon 6.6 construction",
  //     "Multi-level loop construction",
  //     "High soil resistance",
  //     "Built for heavy foot traffic",
  //   ],
  //   applications: "Executive offices, Conference centers, Retail",
  //   sustainability: "GREENGUARD Gold certified",
  //   installationGallery: [
  //     "/images/flooring/gallery/professional-1.jpg",
  //     "/images/flooring/gallery/professional-2.jpg",
  //     "/images/flooring/gallery/professional-3.jpg",
  //   ],
  //   technicalSpecs: [
  //     { label: "Construction", value: "Tufted loop pile" },
  //     { label: "Fiber Content", value: "Solution-dyed Nylon 6.6" },
  //     { label: "Pile Height", value: "5.8mm" },
  //   ],
  //   performanceRatings: [{ label: "Wear Rating", value: "Class 33" }],
  //   idealApplications: ["Executive offices", "Conference centers"],
  //   availableColors: [
  //     { name: "Corporate Blue", code: "CB-01", img: "/images/flooring/colors/cb-01.jpg" },
  //     { name: "Office Taupe", code: "OT-02", img: "/images/flooring/colors/ot-02.jpg" },
  //   ],
  //   certifications: ["Green Label Plus certified"],
  //   installationSteps: [
  //     {
  //       id: 1,
  //       title: "Pre-Installation",
  //       description: "Check subfloor and moisture readings.",
  //     },
  //     {
  //       id: 2,
  //       title: "Installation",
  //       description: "Use quarter-turn pattern for best aesthetics.",
  //     },
  //     {
  //       id: 3,
  //       title: "Maintenance",
  //       description: "Regular vacuuming and annual deep clean.",
  //     },
  //   ],
  //   ctaLinks: {
  //     requestSamples: "",
  //   },
  // },

  // add more products as needed...
];

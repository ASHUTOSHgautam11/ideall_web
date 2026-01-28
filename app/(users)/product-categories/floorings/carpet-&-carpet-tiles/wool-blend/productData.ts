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
    title: "AXMINSTER BANQUET HALL",
    slug: "axm-banquethall",
    code: "IDL CD CQ872",
    colors: "15 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-1.png",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-1.png",
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
    description:
      "IDL CD Axminster Carpet is crafted to magnify resilience under heavy footfall and frequent layout changes. The wool-nylon Axminster structure and hank-dyed yarns deepen Color vibrancy across large open spaces. A robust 7 mm pile height with higher pile weights inflates impact absorption while preserving elegance.",
    features: [
      "Solution-dyed nylon 6.6 fibers",
      "Textured concrete-inspired pattern",
      "Class 33 commercial rating",
      "Anti-static properties",
      "Stain-resistant treatment",
      "Easy installation system",
    ],
    applications: "Luxury hotels, resorts, corporate offices, convention centers, lobbies, casinos",
    sustainability: "Eco-friendly materials, durable design for long life",
    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-7.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-8.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-9.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-10.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-11.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-12.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-13.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-14.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/axm- banquethall-15.png",


    ],
    technicalSpecs: [
      { label: "Construction", value: "Axminster carpet" },
      { label: "Yarn Content", value: "80% Wool & 20% Nylon" },
      { label: "Yarn Count", value: "3NM/2PLY" },
      { label: "Dyeing method", value: "Hank Dyed" },
      { label: "Pile of height", value: "7MM" },
      { label: "Width", value: "4 M" },
      { label: "Latex", value: "4 M" },
      { label: "Color Fastness", value: "3-4" },
      { label: "Backing", value: "PP or Jute BACKING" },

    ],
    performanceRatings: [
      { label: "Anti-static", value: "GB/T18044-2008II" },
      { label: "Fire retardant", value: "GB8624-2012 B1(C) / ASTM-E648/ASTM-D2859" },
      { label: "Air quality", value: "GB18587-2001 A" },
      { label: "Other", value: "GB/T 14252-2008" }

    ],
    idealApplications: [
      "Luxury hotels and resorts",
      "High-end corporate offices",
      "Convention centers",
      "Large lobbies",
      "Casinos",
      "Entertainment venues",
      "Cruise ships",
      "Premium transport interiors",
    ],
    availableColors: [
      { name: "IDL CD", code: "CD CQ863", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD CQ863.png" },
      { name: "IDL CD", code: "CD CQ872", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD CQ872.png" },
      { name: "IDL CD", code: "CD CQ989", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD CQ989.png" },
      { name: "IDL CD", code: "CD RA15169", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD RA15169.png" },
      { name: "IDL CD", code: "CD RA15250", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD RA15250.png" },
      { name: "IDL CD", code: "CD RA18882", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD RA18882.png" },
      { name: "IDL CD", code: "CD CQ694", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD CQ694.png" },
      { name: "IDL CD", code: "CD R14602", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD R14602.png" },
      { name: "IDL CD", code: "CD RA19123", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD RA19123.png" },
      { name: "IDL CD", code: "CD RA19124", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD RA19124.png" },
      { name: "IDL CD", code: "CD RA19127", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD RA19127.png" },
      { name: "IDL CD", code: "CD RA19128", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD RA19128.png" },
      { name: "IDL CD", code: "CD WX1180", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD WX1180.png" },
      { name: "IDL CD", code: "CD YN15797", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD YN15797.png" },
      { name: "IDL CD", code: "CD Z657", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/IDL CD Z657.png" },


    ],
    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-banquethall/icon7.png",


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
    title: "AXMINSTER CORRIDOR",
    slug: "axm-corridor",
    code: "IDL CD CQ872",
    colors: "15 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-1.png",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-1.png",
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
    description:
      "IDL CD Axminster Carpet is designed to magnify durability and appearance retention in high-traffic corridor areas. The 80% wool and 20% nylon blend, combined with dense Axminster construction, resists wear while hank-dyed yarns deepen color definition. A firm 7 mm pile height and higher pile weights inflate underfoot stability for long-term performance.",
    features: [
      "Solution-dyed nylon 6.6 fibers",
      "Textured concrete-inspired pattern",
      "Class 33 commercial rating",
      "Anti-static properties",
      "Stain-resistant treatment",
      "Easy installation system",
    ],
    applications: "Luxury hotels, resorts, corporate offices, convention centers, lobbies, casinos",
    sustainability: "Eco-friendly materials, durable design for long life",
    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-7.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-8.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-9.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-10.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-11.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-12.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-13.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-14.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/axm-corridor-15.png",


    ],
    technicalSpecs: [
      { label: "Construction", value: "Axminster carpet" },
      { label: "Yarn Content", value: "80% Wool & 20% Nylon" },
      { label: "Yarn Count", value: "3NM/2PLY" },
      { label: "Dyeing method", value: "Hank Dyed" },
      { label: "Pile of height", value: "7MM" },
      { label: "Width", value: "4 M" },
      { label: "Latex", value: "4 M" },
      { label: "Color Fastness", value: "3-4" },
      { label: "Backing", value: "PP or Jute BACKING" },

    ],
    performanceRatings: [
      { label: "Anti-static", value: "GB/T18044-2008II" },
      { label: "Fire retardant", value: "GB8624-2012 B1(C) / ASTM-E648/ASTM-D2859" },
      { label: "Air quality", value: "GB18587-2001 A" },
      { label: "Other", value: "GB/T 14252-2008" }

    ],
    idealApplications: [
      "Luxury hotels and resorts",
      "High-end corporate offices",
      "Convention centers",
      "Large lobbies",
      "Casinos",
      "Entertainment venues",
      "Cruise ships",
      "Premium transport interiors",
    ],
    availableColors: [
      { name: "IDL CD", code: "CD CM229", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD CM229.png" },
      { name: "IDL CD", code: "CD CQ516", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD CQ516.png" },
      { name: "IDL CD", code: "CD CQ750", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD CQ750.png" },
      { name: "IDL CD", code: "CD CQ851", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD CQ851.png" },
      { name: "IDL CD", code: "CD CQ919", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD CQ919.png" },
      { name: "IDL CD", code: "CD RA18980", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD RA18980.png" },
      { name: "IDL CD", code: "CD RA19044", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD RA19044.png" },
      { name: "IDL CD", code: "CD RA19338", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD RA19338.png" },
      { name: "IDL CD", code: "CD RA19340", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD RA19340.png" },
      { name: "IDL CD", code: "CD RA19341", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD RA19341.png" },
      { name: "IDL CD", code: "CD YN14540GY", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD YN14540GY.png" },
      { name: "IDL CD", code: "CD YN23347", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD YN23347.png" },
      { name: "IDL CD", code: "CD Z567", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD Z567.png" },
      { name: "IDL CD", code: "CD ZF224", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD ZF224.png" },
      { name: "IDL CD", code: "CD ZF22514", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/IDL CD ZF22514.png" },


    ],
    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-corridor/icon7.png",


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
    title: "AXMINSTER GUESTROOM",
    slug: "axm-guestroom",
    code: "IDL CD CM322",
    colors: "15 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-1.png",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-1.png",
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
    description:
      "In guest rooms, IDL CD Axminster Carpet helps magnify comfort and acoustic softness through its premium wool-nylon blend. Hank-dyed fibers deepen color richness, enhancing the room’s warmth and visual appeal. The plush 7 mm pile height and balanced construction inflate luxury underfoot while maintaining durability.",
    features: [
      "Solution-dyed nylon 6.6 fibers",
      "Textured concrete-inspired pattern",
      "Class 33 commercial rating",
      "Anti-static properties",
      "Stain-resistant treatment",
      "Easy installation system",
    ],
    applications: "Luxury hotels, resorts, corporate offices, convention centers, lobbies, casinos",
    sustainability: "Eco-friendly materials, durable design for long life",
    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-7.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-8.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-9.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-10.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-11.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-12.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-13.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-14.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/axm-guestroom-15.png",

    ],
    technicalSpecs: [
      { label: "Construction", value: "Axminster carpet" },
      { label: "Yarn Content", value: "80% Wool & 20% Nylon" },
      { label: "Yarn Count", value: "3NM/2PLY" },
      { label: "Dyeing method", value: "Hank Dyed" },
      { label: "Pile of height", value: "7MM" },
      { label: "Width", value: "4 M" },
      { label: "Latex", value: "4 M" },
      { label: "Color Fastness", value: "3-4" },
      { label: "Backing", value: "PP or Jute BACKING" },

    ],
    performanceRatings: [
      { label: "Anti-static", value: "GB/T18044-2008II" },
      { label: "Fire retardant", value: "GB8624-2012 B1(C) / ASTM-E648/ASTM-D2859" },
      { label: "Air quality", value: "GB18587-2001 A" },
      { label: "Other", value: "GB/T 14252-2008" }

    ],
    idealApplications: [
      "Luxury hotels and resorts",
      "High-end corporate offices",
      "Convention centers",
      "Large lobbies",
      "Casinos",
      "Entertainment venues",
      "Cruise ships",
      "Premium transport interiors",
    ],
    availableColors: [
      { name: "IDL CD", code: "CD CM322", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD CM322.png" },
      { name: "IDL CD", code: "CD CM341", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD CM341.png" },
      { name: "IDL CD", code: "CD CM365", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD CM365.png" },
      { name: "IDL CD", code: "CD RA18667", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD RA18667.png" },
      { name: "IDL CD", code: "CD RA15192", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD RA15192.png" },
      { name: "IDL CD", code: "CD RA18952", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD RA18952.png" },
      { name: "IDL CD", code: "CD RA19142", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD RA19142.png" },
      { name: "IDL CD", code: "CD RA19233", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD RA19233.png" },
      { name: "IDL CD", code: "CD RA19320", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD RA19320.png" },
      { name: "IDL CD", code: "CD WX1", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD WX1.png" },
      { name: "IDL CD", code: "CD YF005", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD YF005.png" },
      { name: "IDL CD", code: "CD Z519", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD Z519.png" },
      { name: "IDL CD", code: "CD Z677", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD Z677.png" },
      { name: "IDL CD", code: "CD Z786", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/IDL CD Z786.png" },

    ],
    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-guestroom/icon7.png",


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
    title: "AXMINSTER MEETINGROOM",
    slug: "axm-meetingroom",
    code: "IDL CD CQ872",
    colors: "15 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-1.png",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-1.png",
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
    description:
      "IDL CD Axminster Carpet is optimized to magnify acoustic control and professional aesthetics in meeting rooms. Hank-dyed yarns deepen tonal consistency, supporting a refined and focused environment. The dense 7 mm pile height and engineered weights inflate comfort and stability during prolonged use.",
    features: [
      "Solution-dyed nylon 6.6 fibers",
      "Textured concrete-inspired pattern",
      "Class 33 commercial rating",
      "Anti-static properties",
      "Stain-resistant treatment",
      "Easy installation system",
    ],
    applications: "Luxury hotels, resorts, corporate offices, convention centers, lobbies, casinos",
    sustainability: "Eco-friendly materials, durable design for long life",
    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-7.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-8.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-9.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-10.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/axm-meetingroom-11.png",
       
    ],
    technicalSpecs: [
      { label: "Construction", value: "Axminster carpet" },
      { label: "Yarn Content", value: "80% Wool & 20% Nylon" },
      { label: "Yarn Count", value: "3NM/2PLY" },
      { label: "Dyeing method", value: "Hank Dyed" },
      { label: "Pile of height", value: "7MM" },
      { label: "Width", value: "4 M" },
      { label: "Latex", value: "4 M" },
      { label: "Color Fastness", value: "3-4" },
      { label: "Backing", value: "PP or Jute BACKING" },

    ],
    performanceRatings: [
      { label: "Anti-static", value: "GB/T18044-2008II" },
      { label: "Fire retardant", value: "GB8624-2012 B1(C) / ASTM-E648/ASTM-D2859" },
      { label: "Air quality", value: "GB18587-2001 A" },
      { label: "Other", value: "GB/T 14252-2008" }

    ],
    idealApplications: [
      "Luxury hotels and resorts",
      "High-end corporate offices",
      "Convention centers",
      "Large lobbies",
      "Casinos",
      "Entertainment venues",
      "Cruise ships",
      "Premium transport interiors",
    ],
    availableColors: [
      { name: "IDL CD", code: "CD RA14890", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA14890.png" },
      { name: "IDL CD", code: "CD RA18536", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA18536.png" },
      { name: "IDL CD", code: "CD RA19220", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA19220.png" },
      { name: "IDL CD", code: "CD RA19221", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA19221.png" },
      { name: "IDL CD", code: "CD RA19222", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA19222.png" },
      { name: "IDL CD", code: "CD RA19223", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA19223.png" },
      { name: "IDL CD", code: "CD RA19224", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA19224.png" },
      { name: "IDL CD", code: "CD RA19226", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA19226.png" },
      { name: "IDL CD", code: "CD RA19228", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD RA19228.png" },
      { name: "IDL CD", code: "CD YN12572H", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD YN12572H.png" },
      { name: "IDL CD", code: "CD YN24587", img: "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/IDL CD YN24587.png" },
      

    ],
    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/woolblend/axm-meetingroom/icon7.png",


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


];

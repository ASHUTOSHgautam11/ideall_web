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
    title: "IDL AMBIANCE",
    slug: "idl-ambiance",
    code: "IDL AMBIANCE 01,03",
    colors: "6 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 01-03.jpeg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 01-03.jpeg",

    // PDF path matching urban category format
    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL AMBIANCE is designed to enhance the aura of interiors, bringing warmth and character to any space. IDL AMBIANCE textured surface adds depth and comfort, creating a refined environment that feels both inviting and contemporary. Crafted to support everyday use, IDL AMBIANCE helps shape a balanced, calming mood across modern commercial settings.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 01-03.jpeg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 01-04 ROOMSHOT.jpeg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE AM 01-04.jpeg",
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "MULTI-LEVEL LOOP PILE" },
      { label: "MATERIAL/YARN", value: "100% OLEFIN" },
      { label: "GAUGE", value: "1/10" },
      { label: "PILE WEIGHT", value: "850 g/m² (25 oz/yd²)" },
      { label: "PILE HEIGHT", value: "8.0mm (±0.5mm)" },
      { label: "TILE SIZE", value: "50CMx50CM" },
      { label: "BACKING", value: "ECO CUSHION BACK" },

    ],

    performanceRatings: [
      { label: "SMOKE DENSITY TEST", value: "ASTM E 662 (LESS THAN 450)" },
      { label: "STATIC CONTROL", value: "LIFETIME STATIC PROTECTION" },
      { label: "ENVIRONMENTAL STANDARD", value: "ASTM E 648-10 CLASS 1 (GB 8624-2012-B1)FLAMMABILITY: 16 CFR 1631 PASS (FOR 100% UNIVERSAL NYLON 6 TESTED IN SINGAPORE)" },
      { label: "FORMALDEHYDE PURIFICATION", value: "PASSES (JC/T 1074-2008) CLASS I" },

    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL AMBIANCE", code: "IA-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 01.jpeg" },
      { name: "IDL AMBIANCE", code: "IA-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 02.jpeg" },
      { name: "IDL AMBIANCE", code: "IA-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 03.jpeg" },
      { name: "IDL AMBIANCE", code: "IA-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 04.jpeg" },
      { name: "IDL AMBIANCE", code: "IA-05", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 05.jpeg" },
      { name: "IDL AMBIANCE", code: "IA-06", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/IDL AMBIANCE 06.jpeg" },


    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon7.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon8.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-ambiance/idl-showy/icon9.png"
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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL AMPLIFY",
    slug: "idl-amplify",
    code: "IDL AMPLIFY 05,07",
    colors: "8 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-05-07.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-05-07.jpg",

    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL AMPLIFY creates an intense visual statement with a refined linear pattern designed to stretch interiors and enhance spatial flow. IDL AMPLIFY durable loop pile surface delivers a sleek, modern feel while helping to lengthen the appearance of any space. Engineered for everyday performance, IDL AMPLIFY features a low-profile texture that strikes a balance between comfort and resilience. Ideal for contemporary commercial environments, it combines design impact with long-lasting functionality.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-07-08.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-05-07.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-04-05-06.jpg",
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "LOOP PILE" },
      { label: "MATERIAL/YARN", value: "POLYPROPYLENE (PP)" },
      { label: "GAUGE", value: "1/10G" },
      { label: "PILE WEIGHT", value: "480 GSM" },
      { label: "PILE HEIGHT", value: "3mm-3.5mm (+/-0.5mm)" },
      { label: "TILE SIZE", value: "50CMx50CM" },
      { label: "BACKING", value: "PVC" },

    ],

    performanceRatings: [
      { label: "FLAMMABILITY", value: "GB 8624 B1" },


    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL AMPLIFY", code: "IA-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-01.jpg" },
      { name: "IDL AMPLIFY", code: "IA-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-02.jpg" },
      { name: "IDL AMPLIFY", code: "IA-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-03.jpg" },
      { name: "IDL AMPLIFY", code: "IA-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-04.jpg" },
      { name: "IDL AMPLIFY", code: "IA-05", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-05.jpg" },
      { name: "IDL AMPLIFY", code: "IA-06", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-06.jpg" },
      { name: "IDL AMPLIFY", code: "IA-07", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-07.jpg" },
      { name: "IDL AMPLIFY", code: "IA-08", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/IDL AMPLIFY-08.jpg" },


    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-amplify/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL ARONA",
    slug: "idl-arona",
    code: "IDL ARONA 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14",
    colors: "14 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 08-13.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 08-13.jpg",

    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL ARONA delivers dependable strength and stability, making it a reliable choice for demanding commercial spaces. IDL ARONA clean, understated design enhances light and brightness, helping interiors feel open and well-balanced. Built for everyday performance, IDL ARONA offers a refined surface that supports long-term use while maintaining a modern, professional look.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 08-13.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 03-11-12.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 05-09.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 01-02-07-10.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 06-07.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA-10.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA-11.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA-04.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 03-14.jpg",
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "LOOP PILE" },
      { label: "MATERIAL/YARN", value: "POLYPROPYLENE (PP)" },
      { label: "GAUGE", value: "1/10G" },
      { label: "STITCHES", value: "50" },
      { label: "PILE WEIGHT", value: "400 g/m² ± 5%" },
      { label: "PILE HEIGHT", value: "3.5mm" },
      { label: "PRIMARY BACKING", value: "NON-WOVEN FABRIC" },
      { label: "SECONDARY BACKING", value: "PE 600g WITH GREY FELT BACKING " },
      { label: "TILE SIZE", value: "50CMx50CM, 25CMx100CM" },


    ],

    performanceRatings: [
      { label: "FLAMMABILITY", value: "GB 8624 B1" },
      { label: "SMOKE DENSITY TEST", value: "PASS" },
      { label: "FIRE CLASS", value: "B1 (B-S1, T0)" },
      { label: "STATIC CONTROL", value: "PASS" },


    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL ARONA", code: "IA-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 01.jpg" },
      { name: "IDL ARONA", code: "IA-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 02.jpg" },
      { name: "IDL ARONA", code: "IA-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 03.jpg" },
      { name: "IDL ARONA", code: "IA-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 04.jpg" },
      { name: "IDL ARONA", code: "IA-05", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 05.jpg" },
      { name: "IDL ARONA", code: "IA-06", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 06.jpg" },
      { name: "IDL ARONA", code: "IA-07", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 07.jpg" },
      { name: "IDL ARONA", code: "IA-08", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 08.jpg" },
      { name: "IDL ARONA", code: "IA-09", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 09.jpg" },
      { name: "IDL ARONA", code: "IA-10", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 10.jpg" },
      { name: "IDL ARONA", code: "IA-11", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 11.jpg" },
      { name: "IDL ARONA", code: "IA-12", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 12.jpg" },
      { name: "IDL ARONA", code: "IA-13", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 13.jpg" },
      { name: "IDL ARONA", code: "IA-14", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/IDL ARONA 14.jpg" },


    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-arona/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL AURORA",
    slug: "idl-aurora",
    code: "IDL AURORA 01, 02, 03, 04, 05, 06, 07, 08",
    colors: "8 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 01-04.png",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 01-04.png",

    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL AURORA draws inspiration from the first dawn, bringing a fresh sense of light and clarity to interior spaces. IDL AURORA subtle textures echo the beauty of the borealis, creating movement and visual depth without overwhelming the design. Crafted for modern environments, IDL AURORA reflects renewal and transformation, making it ideal for spaces that evolve with purpose and style.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 01-04.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 01-07.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 01-08.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 05-08.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 08-02.png",

    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "MULTI-LEVEL LOOP PILE" },
      { label: "MATERIAL/YARN", value: "100% POLYPROPYLENE (PP), UNICOLOR" },
      { label: "GAUGE", value: "1/12" },
      { label: "PILE WEIGHT", value: "19 oz/yd²" },
      { label: "PILE HEIGHT", value: "2.5mm-5.0mm (±0.5mm)" },
      { label: "TILE SIZE", value: "33.3CMx100CM" },
      { label: "BACKING", value: "PVC WITH FIBER GLASS" },


    ],

    performanceRatings: [
      { label: "FLAMMABILITY", value: "GB 8624 B1" },
      { label: "SMOKE DENSITY TEST", value: "PASS" },
      { label: "FIRE CLASS", value: "B1 (B-S1, T0)" },
      { label: "STATIC CONTROL", value: "PASS" },


    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL AURORA", code: "IA-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 01.jpg" },
      { name: "IDL AURORA", code: "IA-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 02.jpg" },
      { name: "IDL AURORA", code: "IA-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 03.jpg" },
      { name: "IDL AURORA", code: "IA-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 04.jpg" },
      { name: "IDL AURORA", code: "IA-05", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 05.jpg" },
      { name: "IDL AURORA", code: "IA-06", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 06.jpg" },
      { name: "IDL AURORA", code: "IA-07", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 07.jpg" },
      { name: "IDL AURORA", code: "IA-08", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/IDL AURORA 08.jpg" },


    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-aurora/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },

  {
    title: "IDL GEMINI",
    slug: "idl-gemini",
    code: "IDL GEMINI 01, 02, 03, 04, 05, 06, 07",
    colors: "7 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI-05.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI-05.jpg",

    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL GEMINI takes inspiration from a celestial constellation, translating cosmic balance into a contemporary flooring design. IDL GEMINI refined surface reflects duality, blending contrast and harmony within modern interiors. Designed for dynamic commercial spaces, IDL GEMINI encourages communication and curiosity, creating environments that feel connected, engaging, and adaptable.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI-05.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 04-05.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI-01.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 03-06.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI-03.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI-04.jpg",

    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "MULTI-LEVEL LOOP PILE" },
      { label: "MATERIAL/YARN", value: "100% POLYPROPYLENE (PP)" },
      { label: "COLOR SYSTEM", value: "100% SOLUTION DYED" },
      { label: "GAUGE", value: "1/10" },
      { label: "BACKING STRUCTURE", value: "PVC WITH FIBERGLASS" },
      { label: "PRIMARY BACKING", value: "NON-WOVEN" },
      { label: "PILE WEIGHT", value: "570 GSM/SQM" },
      { label: "PILE HEIGHT", value: "2.8mm – 5mm" },
      { label: "TOTAL WEIGHT", value: "435 kg/m² ±10%" },
      { label: "TOTAL THICKNESS", value: "7.5mm ±0.5mm" },
      { label: "TILE SIZE", value: "25CM × 100CM" },
      { label: "TUFT BIND", value: "PASS – 8 LBS (ASTM-D-1335)" },
      { label: "DIMENSIONAL STABILITY", value: "PASS – <0.1% CHANGE (AACHEN)" }


    ],

    performanceRatings: [
      { label: "STAIN RESISTANCE", value: "10 (AATCC-175-2003)" },
      { label: "STATIC CONTROL", value: "LESS <4 kV (AATCC-134-1996)" },
      { label: "FLAMMABILITY – RADIANT PANEL", value: "PASS – CLASS II (ASTM-E-648-10)" },
      { label: "FLAMMABILITY – PILL TEST", value: "PASS – 8 (ASTM-D-2859-06)" },
      { label: "SMOKE DENSITY", value: "PASS – MAX. 450 (ASTM-E-662-06)" },
      { label: "COLOR FASTNESS TO LIGHT", value: "EXCELLENT – 5 (AATCC-16E)" },
      { label: "COLOR FASTNESS TO WET & DRY CLEANING", value: "EXCELLENT – 5 (AATCC-165)" },
      { label: "COLOR FASTNESS TO OZONE", value: "EXCELLENT – 5 (AATCC-129)" }


    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL GEMINI", code: "IG-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 01.jpg" },
      { name: "IDL GEMINI", code: "IG-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 02.jpg" },
      { name: "IDL GEMINI", code: "IG-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 03.jpg" },
      { name: "IDL GEMINI", code: "IG-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 04.jpg" },
      { name: "IDL GEMINI", code: "IG-05", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 05.jpg" },
      { name: "IDL GEMINI", code: "IG-06", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 06.jpg" },
      { name: "IDL GEMINI", code: "IG-07", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 07.jpg" },
      { name: "IDL GEMINI", code: "IG-08", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/IDL GEMINI 08.jpg" },


    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-gemini/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL LOUIS",
    slug: "idl-louis",
    code: "IDL LOUIS 01, 02, 03, 04",
    colors: "4 Color",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS-04.JPG",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS-04.JPG",

    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL LOUIS channels the strength of a famed warrior, delivering a bold and confident presence within modern interiors. IDL LOUIS distinctive pattern features a broad-line aesthetic that adds structure and visual rhythm to the space. Designed for demanding commercial environments, it combines durability with a strong, contemporary design language.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS-04.JPG",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS-03.JPG",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS-01.JPG",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS 01-02.jpg",


    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "LOOP PILE" },
      { label: "MATERIAL/YARN", value: "POLYPROPYLENE (PP)" },
      { label: "GAUGE", value: "1/10 CP" },
      { label: "STITCHES", value: "44" },
      { label: "PILE WEIGHT", value: "550 GSM" },
      { label: "PILE HEIGHT", value: "3.3mm – 5.8mm" },
      { label: "PRIMARY BACKING", value: "NON-WOVEN FABRICS" },
      { label: "SECONDARY BACKING", value: "PVC" },
      { label: "TILE SIZE", value: "50CM × 50CM" },
      { label: "PACKING", value: "20 PCS / CTN" }


    ],

    performanceRatings: [
      { label: "FLAMMABILITY", value: "GB 8624 B1" },
      { label: "SMOKE DENSITY TEST", value: "PASS" },
      { label: "FIRE CLASS", value: "B1 (B-s1, t0)" },
      { label: "STATIC CONTROL", value: "PASS" }

    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL LOUIS", code: "IL-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS 01.jpg" },
      { name: "IDL LOUIS", code: "IL-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS 02.jpg" },
      { name: "IDL LOUIS", code: "IL-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS 03.jpg" },
      { name: "IDL LOUIS", code: "IL-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/IDL LOUIS 04.jpg" },



    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-louis/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL QUARTZ",
    slug: "idl-quartz",
    code: "IDL QUARTZ 01, 02, 03, 04",
    colors: "4 Color",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ-03.JPG",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ-03.JPG",
    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL QUARTZ is inspired by the raw elegance of natural gemstones, reflecting the depth and character of Flint, Jasper, and Onyx. IDL QUARTZ’s textured design brings an organic, stone-like presence to modern interiors. Designed for contemporary commercial spaces, it strikes a refined balance between visual richness, durability, and timeless style.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ-03.JPG",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ-04.JPG",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ 01-02.JPG",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ 04 ROOMSHOT.JPG",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ-02.JPG",

    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "LOOP PILE" },
      { label: "MATERIAL/YARN", value: "POLYPROPYLENE (PP)" },
      { label: "GAUGE", value: "6 + 6" },
      { label: "STITCHES", value: "38" },
      { label: "PILE WEIGHT", value: "560 GSM" },
      { label: "PILE HEIGHT", value: "3.7mm – 5.7mm" },
      { label: "PRIMARY BACKING", value: "NON-WOVEN FABRICS" },
      { label: "SECONDARY BACKING", value: "PVC" },
      { label: "TILE SIZE", value: "50CM × 50CM" },
      { label: "PACKING", value: "20 PCS / CTN" }


    ],

    performanceRatings: [
      { label: "FLAMMABILITY", value: "GB 8624 B1" },
      { label: "SMOKE DENSITY TEST", value: "PASS" },
      { label: "FIRE CLASS", value: "B1 (B-s1, t0)" },
      { label: "STATIC CONTROL", value: "PASS" }

    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL QUARTZ", code: "IQ-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ 01.png" },
      { name: "IDL QUARTZ", code: "IQ-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ 02.jpg" },
      { name: "IDL QUARTZ", code: "IQ-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ 03.jpg" },
      { name: "IDL QUARTZ", code: "IQ-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/IDL QUARTZ 04.jpg" },



    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-quartz/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL SHORELINE",
    slug: "idl-shoreline",
    code: "IDL SHORELINE 01, 02, 03, 04 ",
    colors: "4 Color",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE-01.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE-01.jpg",
    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL SHORELINE captures the serene beauty of the seashore, bringing the gentle rhythm of waves into interior spaces. IDL SHORELINE flowing patterns evoke the coastline, creating a sense of movement and calm throughout the environment. Inspired by the natural strand, it adds subtle texture and depth, making it perfect for contemporary commercial interiors that seek a refreshing, coastal ambiance.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE-01.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE 02-04.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE 03-01.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE 01-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE-04.jpg",
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "LOOP PILE" },
      { label: "MATERIAL/YARN", value: "POLYPROPYLENE (PP)" },
      { label: "GAUGE", value: "1/12 G" },
      { label: "STITCHES", value: "42" },
      { label: "PILE WEIGHT", value: "550 g/m² ±5%" },
      { label: "PILE HEIGHT", value: "3.5mm – 6mm" },
      { label: "PRIMARY BACKING", value: "NON-WOVEN FABRICS" },
      { label: "SECONDARY BACKING", value: "PVC" },
      { label: "TILE SIZE", value: "25CM × 100CM" },
      { label: "PACKING", value: "20 PCS / CTN" }


    ],

    performanceRatings: [
      { label: "SMOKE DENSITY TEST", value: "PASS" },
      { label: "FIRE CLASS", value: "B1 (B-s1, t0)" },
      { label: "STATIC CONTROL", value: "PASS" }

    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL SHORELINE", code: "IS-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE 01.jpg" },
      { name: "IDL SHORELINE", code: "IS-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE 02.jpg" },
      { name: "IDL SHORELINE", code: "IS-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE 03.jpg" },
      { name: "IDL SHORELINE", code: "IS-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/IDL SHORELINE 04.jpg" },


    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-shoreline/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL TUNDRA",
    slug: "idl-tundra",
    code: "IDL TUNDRA 01, 02, 03, 04",
    colors: "4 Color",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA-02.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA-02.jpg",
    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL TUNDRA evokes the serene beauty of a vast expanse, bringing a sense of openness and calm to interior spaces. Its understated texture mirrors the simplicity of flat land, creating a clean and balanced foundation for modern interiors. Inspired by the open country, IDL TUNDRA enhances commercial spaces with subtle depth and a timeless, natural appeal.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA-01-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA 01-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA-01.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA-04.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA-03.jpg",
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "LOOP PILE" },
      { label: "MATERIAL/YARN", value: "POLYPROPYLENE (PP)" },
      { label: "GAUGE", value: "1/12G" },
      { label: "STITCHES", value: "44" },
      { label: "PILE WEIGHT", value: "500 g/m² ±5%" },
      { label: "PILE HEIGHT", value: "3mm–6mm" },
      { label: "PRIMARY BACKING", value: "NON-WOVEN FABRICS" },
      { label: "SECONDARY BACKING", value: "PVC" },
      { label: "TILE SIZE", value: "25CM × 100CM" },
      { label: "PACKING", value: "20PCS/CTN" }


    ],

    performanceRatings: [
      { label: "FLAMMABILITY", value: "GB 8624 B1" },
      { label: "SMOKE DENSITY TEST", value: "PASS" },
      { label: "FIRE CLASS", value: "B1 (B-s1, t0)" },
      { label: "STATIC CONTROL", value: "PASS" }

    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL TUNDRA", code: "IT-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA 01.jpg" },
      { name: "IDL TUNDRA", code: "IT-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA 02.jpg" },
      { name: "IDL TUNDRA", code: "IT-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA 03.jpg" },
      { name: "IDL TUNDRA", code: "IT-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/IDL TUNDRA 04.jpg" },

    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-tundra/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL UNICORN",
    slug: "idl-unicorn",
    code: "IDL UNICORN 01, 02, 03, 04",
    colors: "4 Color",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN-01-03.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN-01-03.jpg",
    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      "IDL UNICORN captures the mythical elegance of the Monoceros, bringing a sense of refined grace to interiors. IDL UNICORN design embodies purity, creating a clean and uplifting atmosphere in any space. With subtle textures that convey power, IDL UNICORN adds presence and confidence to modern commercial environments.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN-01-03.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN-03.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN-04.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN-01.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN 04 ROOMSHOT.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN 02-04.jpg",
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "LOOP PILE" },
      { label: "MATERIAL/YARN", value: "POLYPROPYLENE (PP)" },
      { label: "GAUGE", value: "1/12G" },
      { label: "STITCHES", value: "44" },
      { label: "PILE WEIGHT", value: "500 g/m² ±5%" },
      { label: "PILE HEIGHT", value: "3mm–5.5mm" },
      { label: "PRIMARY BACKING", value: "NON-WOVEN FABRICS" },
      { label: "SECONDARY BACKING", value: "PVC" },
      { label: "TILE SIZE", value: "50CM × 50CM" },
      { label: "PACKING", value: "20PCS/CTN" }


    ],

    performanceRatings: [
      { label: "SMOKE DENSITY TEST", value: "PASS" },
      { label: "FIRE CLASS", value: "B1 (B-s1, t0)" },
      { label: "STATIC CONTROL", value: "PASS" }

    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL UNICORN", code: "IU-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN 01.jpg" },
      { name: "IDL UNICORN", code: "IU-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN 02.jpg" },
      { name: "IDL UNICORN", code: "IU-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN 03.jpg" },
      { name: "IDL UNICORN", code: "IU-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/IDL UNICORN 04.jpg" },

    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-unicorn/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },
  {
    title: "IDL XTREME, CIQUOA, KAILAS",
    slug: "idl-xtreme-cioua-kailas",
    code: "IDL XTREME 01, 02, 03, 04, 05, 06, 07, 08, 09, 10 IDL CIQUOA 01, 02, 03, 04, 05, 06, 07 IDL KAILAS 01, 02, 03, 04, 05, 06, 07",
    colors: "17 Color",
    img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME-01.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME-01.jpg",
    specPdf: "/assets/pdf/floorings/polypropylene/professional-texture-series-specifications.pdf",
    description:
      ": IDL XTREME + CIQUOA + KAILAS delivers a radical design that energizes interiors with bold, contemporary flair. Inspired by the crisp beauty of a snowy mountain, it brings freshness and clarity to any space. Its textured surface adds depth and dimension, creating a striking visual impact ideal for modern commercial environments.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "COMMERCIAL SPACE, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",


    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME-01.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME-06.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME-10.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 07-08.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 07-08 ROOMSHOT.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 03-10.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 03-06.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 07-IDL CIQUOA 07.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS-02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS-04.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 04 ROOMSHOT.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 06 ROOMSHOT.jpg",
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "LOOP PILE" },
      { label: "MATERIAL/YARN", value: "POLYPROPYLENE (PP)" },
      { label: "GAUGE", value: "1/10G" },
      { label: "PILE WEIGHT", value: "550–650 g/m²" },
      { label: "PILE HEIGHT", value: "3.5–4mm" },
      { label: "TILE SIZE", value: "50CM × 50CM / 25CM × 100CM" },
      { label: "BACKING", value: "PVC" }

    ],

    performanceRatings: [
      { label: "SMOKE DENSITY TEST", value: "PASS" },
      { label: "FIRE CLASS", value: "B1 (B-s1, t0)" },
      { label: "STATIC CONTROL", value: "PASS" }

    ],

    idealApplications: [
      "COMMERCIAL SPACE ",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],


    availableColors: [
      { name: "IDL XTREME", code: "IX-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 01.jpg" },
      { name: "IDL XTREME", code: "IX-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 02.jpg" },
      { name: "IDL XTREME", code: "IX-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 03.jpg" },
      { name: "IDL XTREME", code: "IX-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 04.jpg" },
      { name: "IDL XTREME", code: "IX-05", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 05.jpg" },
      { name: "IDL XTREME", code: "IX-06", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 06.jpg" },
      { name: "IDL XTREME", code: "IX-07", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 07.jpg" },
      { name: "IDL XTREME", code: "IX-08", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 08.jpg" },
      { name: "IDL XTREME", code: "IX-09", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 09.jpg" },
      { name: "IDL XTREME", code: "IX-10", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL XTREME 10.jpg" },
      { name: "IDL KAILAS", code: "IK-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 01.jpg" },
      { name: "IDL KAILAS", code: "IK-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 02.jpg" },
      { name: "IDL KAILAS", code: "IK-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 03.jpg" },
      { name: "IDL KAILAS", code: "IK-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 04.jpg" },
      { name: "IDL KAILAS", code: "IK-05", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 05.jpg" },
      { name: "IDL KAILAS", code: "IK-06", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 06.jpg" },
      { name: "IDL KAILAS", code: "IK-07", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL KAILAS 07.jpg" },
      { name: "IDL CIQUOA", code: "IC-01", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 01.jpg" },
      { name: "IDL CIQUOA", code: "IC-02", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 02.jpg" },
      { name: "IDL CIQUOA", code: "IC-03", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 03.jpg" },
      { name: "IDL CIQUOA", code: "IC-04", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 04.jpg" },
      { name: "IDL CIQUOA", code: "IC-05", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 05.jpg" },
      { name: "IDL CIQUOA", code: "IC-06", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 06.jpg" },
      { name: "IDL CIQUOA", code: "IC-07", img: "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/IDL CIQUOA 07.jpg" },
    ],


    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/polypropylene/idl-xtreme-cioua-kailas/icon7.png",

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


    ctaLinks: {
      requestSamples: "",
      technicalSupport: "",
      downloadSheet: ""
    }
  },


  // Add more polypropylene products here
];

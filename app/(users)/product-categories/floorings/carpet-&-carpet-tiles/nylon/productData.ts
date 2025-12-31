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
    title: "IDL ESPRIT",
    slug: "idl-cesprit",
    code: "IDL-ESPRIT 01",
    colors: "6 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-4-6.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-4-6.jpg",
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
    description:
      "It embodies sprightliness, bringing fresh energy and movement into contemporary interiors. Its dynamic surface expresses liveliness, creating spaces that feel active, engaging, and modern. With a vivacious character, it enhances commercial environments through a balanced blend of style, comfort, and everyday performance.",
    features: [
      "Solution-dyed nylon 6.6 fibers",
      "Textured concrete-inspired pattern",
      "Class 33 commercial rating",
      "Anti-static properties",
      "Stain-resistant treatment",
      "Easy installation system",
    ],
    applications: "High-Traffic Commercial Spaces",
    sustainability: "Cradle to Cradle Certified; Contains recycled content",
    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-4-6.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-2-3-4.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-3-4-5.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-2-2.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-2.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-1-3.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-1.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT-5.jpg",

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
      { label: "WEAR RATING", value: "BS EN ISO 9405 GRADE A" },
      { label: "LIGHT FASTNESS", value: "BS EN ISO 105-B02 GRADE 6" },
      { label: "FLAMMABILITY", value: "BS EN 13501-1 CLASS Cfl-S1" },
      { label: "SOUND ABSORPTION", value: "BS EN ISO 354 AW=0.20" }

    ],
    idealApplications: [
      "High-Traffic Commercial Spaces",
      "Corporate offices",
      "Meeting rooms",
      "Reception areas",
      "Co-working spaces",
      "Professional services",
      "Open plan offices",
    ],
    availableColors: [
      { name: "IDL ESPRIT 01", code: "IE-01", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT TILE-1.jpg" },
      { name: "IDL ESPRIT 02", code: "IE-02", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT TILE-2.jpg" },
      { name: "IDL ESPRIT 03", code: "IE-03", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT TILE-3.jpg" },
      { name: "IDL ESPRIT 04", code: "IE-04", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT TILE-4.jpg" },
      { name: "IDL ESPRIT 05", code: "IE-05", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT TILE-5.jpg" },
      { name: "IDL ESPRIT 06", code: "IE-06", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/IDL ESPRIT TILE-6.jpg" },


    ],
    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-esprit/icon7.png",

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
    title: "IDL CANTERBURY",
    slug: "idl-canterbury",
    code: "IDL-CANTERBURY",
    colors: "5 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY 01.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY 01.jpg",
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
    description:
      "IDL CANTERBURY reflects the timeless design inspired by Roman roots, blending heritage with contemporary refinement. Its structured texture echoes the architectural character found in historic cities like Ely and Exeter. Crafted for modern commercial spaces, Canterbury delivers a classic yet confident aesthetic that brings depth, order, and enduring style to interiors.",
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
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY 01.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY 02 & 06.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY 02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY 03.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY 04.jpg",
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
      { label: "AREA OF USE", value: "CLASS 33-HEAVY COMMERCIAL" },
      { label: "FIRE CLASS", value: "ASTM D2859-16" },
      { label: "FORMALDEHYDE", value: "CRI CERTIFIED" },
      { label: "DIMENSIONAL STABILITY", value: "ASTM D7570" },
      { label: "ELECTROSTATIC PROPENSITY", value: "AATCC 134-2019" },
       
    ],
    idealApplications: [
      "HIGH TRAFFIC COMMERCIAL SPACES",
      "Corporate offices",
      "Meeting rooms",
      "Reception areas",
      "Co-working spaces",
      "Professional services",
      "Open plan offices",
    ],
    availableColors: [
      { name: "IDL CANTERBURY", code: "IC-01", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY TILE-01.jpg" },
      { name: "IDL CANTERBURY", code: "IC-02", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY TILE-02.jpg" },
      { name: "IDL CANTERBURY", code: "IC-03", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY TILE-03.jpg" },
      { name: "IDL CANTERBURY", code: "IC-04", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY TILE-04.jpg" },
      { name: "IDL CANTERBURY", code: "IC-05", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/IDL CANTERBURY TILE-06.jpg" },
    ],
    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-canterbury/icon5.png",
       
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
    title: "IDL GALACTIC",
    slug: "idl-galactic",
    code: "IDL GALACTIC 01A,01B,01C",
    colors: "16 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01A+01B+01C.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01A+01B+01C.jpg",
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
    description:
      "IDL GALACTIC captures a cosmic sense of scale, bringing depth and movement inspired by the universe. IDL GALACTIC layered texture reflects Jovian strength and presence, adding bold character to modern interiors. With a refined, heavenly aesthetic, GALACTIC transforms commercial spaces into environments that feel expansive, dynamic, and forward-looking.",
    features: [
      "Solution-dyed nylon 6.6 fibers",
      "Textured concrete-inspired pattern",
      "Class 33 commercial rating",
      "Anti-static properties",
      "Stain-resistant treatment",
      "Easy installation system",
    ],
    applications: "HIGH-TRAFFIC COMMERCIAL AREAS, Corporate offices, Meeting rooms, Reception areas, Co-working spaces",
    sustainability: "Cradle to Cradle Certified; Contains recycled content",
    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01A+01B+01C.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 02A+02B+02C.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 03B+02C.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 04A+04B+03C+05A+05B.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 05A+05B+03C.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 06A+06B+04C.jpg",
    ],
    technicalSpecs: [
      { label: "CONSTRUCTION", value: "MULTI-LEVEL LOOP" },
      { label: "MATERIAL", value: "100% NYLON" },
      { label: "COLOUR SYSTEM", value: "100% SOLUTION DYED" },
      { label: "PILE WEIGHT", value: "600 GSM" },
      { label: "PILE HEIGHT", value: "3/4/5 mm" },
      { label: "GAUGE", value: "1/12" },
      { label: "BACKING", value: "PVC WITH FIBERGLASS" },
      { label: "TILE SIZE", value: "50cmx50cm" },
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
      "HIGH-TRAFFIC COMMERCIAL AREAS",
      "Corporate offices",
      "Meeting rooms",
      "Reception areas",
      "Co-working spaces",
      "Professional services",
      "Open plan offices",
    ],
    availableColors: [
      { name: "IDL GALACTIC", code: "IG-01A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01A.jpg" },
      { name: "IDL GALACTIC", code: "IG-01B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01B.jpg" },
      { name: "IDL GALACTIC", code: "IG-01C", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01C.jpg" },
      { name: "IDL GALACTIC", code: "IG-02A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 02A.jpg" },
      { name: "IDL GALACTIC", code: "IG-02B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 02B.jpg" },
      { name: "IDL GALACTIC", code: "IG-02C", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 02C.jpg" },
      { name: "IDL GALACTIC", code: "IG-03A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 03A.jpg" },
      { name: "IDL GALACTIC", code: "IG-04A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 03B.jpg" },
      { name: "IDL GALACTIC", code: "IG-04B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 03C.jpg" },
      { name: "IDL GALACTIC", code: "IG-05A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 04A.jpg" },
      { name: "IDL GALACTIC", code: "IG-05B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 04B.jpg" },
      { name: "IDL GALACTIC", code: "IG-06A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 05A.jpg" },
      { name: "IDL GALACTIC", code: "IG-06B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 05B.jpg" },
      { name: "IDL GALACTIC", code: "IG-06A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 06A.jpg" },
      { name: "IDL GALACTIC", code: "IG-06B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 06B.jpg" },
    ],
    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon7.png",
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
    title: "IDL GALAXY OF STAR",
    slug: "idl-galaxy-of-star",
    code: "IDL GALAXY OF STAR-04",
    colors: "4 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galaxy-of-star/IDL GALAXY OF STAR 04.png",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galaxy-of-star/IDL GALAXY OF STAR 04.png  ",
    specPdf: "/assets/pdf/floorings/naylon/urban-concrete-series-specifications.pdf",
    description:
      "IDL GALAXY OF STAR captures the brilliance of a star cluster, scattering points of light across a rich, contemporary surface. Its pattern evokes an island universe, creating a sense of depth, scale, and endless possibility within interiors. With a subtle twinkler effect, IDL GALAXY OF STAR brings energy and visual intrigue to modern commercial spaces while maintaining a refined, elegant character.",
    features: [
      "Solution-dyed nylon 6.6 fibers",
      "Textured concrete-inspired pattern",
      "Class 33 commercial rating",
      "Anti-static properties",
      "Stain-resistant treatment",
      "Easy installation system",
    ],
    applications: "HIGH-TRAFFIC COMMERCIAL AREAS, Corporate offices, Meeting rooms, Reception areas, Co-working spaces",
    sustainability: "Cradle to Cradle Certified; Contains recycled content",
    installationGallery: [
        "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galaxy-of-star/IDL GALAXY OF STAR 01.png",
        "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galaxy-of-star/IDL GALAXY OF STAR 02.png",
        "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galaxy-of-star/IDL GALAXY OF STAR 03.png",
        "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galaxy-of-star/IDL GALAXY OF STAR 04.png",
         
      ],
    technicalSpecs: [
      { label: "CONSTRUCTION", value: "TUFTED" },
      { label: "YARN", value: "100% NYLON 6" },
      { label: "COLOUR SYSTEM", value: "100% SOLUTION DYED" },
      { label: "GAUGE ", value: "1/10th" },
      { label: "TOTAL TUFTED PILE WEIGHT", value: "850 GSM" },
      { label: "TOTAL WEIGHT FOR PU BACKING", value: "4800 GSM" },
      { label: "TOTAL HEIGHT FOR PU CUSHION BACKING ", value: "9 mm" },
      // { label: "BACKING", value: "PVC & PU CUSHION BACK (THERMO PLASTIC) MADE TO ORDER (300 M2 MOQ), ETA 6-8 WEEKS " },
      //  { label: "PRIMARY BACKING ", value: "NON-WOVEN " },
      //  { label: "SECONDARY BACKING ", value: "HIGH PERFORMANCE PU REINFORCED WTH FIBERGLASS " },
      //  { label: "STYLE ", value: "COLOUR DOT TECH " },
      //  { label: "TILE SIZE ", value: "50cm X 100cm, (MADE TO ORDER 100cm X 100cm for 500m²/COL) " },
    ],
    performanceRatings: [
      { label: "SURFACE FLAMMABILITY", value: "ASTM D2859- PASS" },
      { label: "STAIN RESISTANCE", value: "AATCC 175- PASS" },
      { label: "COLOUR FASTNESS TO WATER ", value: "AATCC 107- PASS" },
      { label: "SMOKE DENSITY", value: "ASTM E662- PASS" },
      { label: "DIMENSIONAL STABILITY ", value: "ASTM D7570- PASS" },
       
    ],
    idealApplications: [
      "HIGH-TRAFFIC COMMERCIAL AREAS",
      "Corporate offices",
      "Meeting rooms",
      "Reception areas",
      "Co-working spaces",
      "Professional services",
      "Open plan offices",
    ],
    availableColors: [
      { name: "IDL GALACTIC", code: "IG-01A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01A.jpg" },
      { name: "IDL GALACTIC", code: "IG-01B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01B.jpg" },
      { name: "IDL GALACTIC", code: "IG-01C", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 01C.jpg" },
      { name: "IDL GALACTIC", code: "IG-02A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 02A.jpg" },
      { name: "IDL GALACTIC", code: "IG-02B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 02B.jpg" },
      { name: "IDL GALACTIC", code: "IG-02C", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 02C.jpg" },
      { name: "IDL GALACTIC", code: "IG-03A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 03A.jpg" },
      { name: "IDL GALACTIC", code: "IG-04A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 03B.jpg" },
      { name: "IDL GALACTIC", code: "IG-04B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 03C.jpg" },
      { name: "IDL GALACTIC", code: "IG-05A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 04A.jpg" },
      { name: "IDL GALACTIC", code: "IG-05B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 04B.jpg" },
      { name: "IDL GALACTIC", code: "IG-06A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 05A.jpg" },
      { name: "IDL GALACTIC", code: "IG-06B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 05B.jpg" },
      { name: "IDL GALACTIC", code: "IG-06A", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 06A.jpg" },
      { name: "IDL GALACTIC", code: "IG-06B", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/IDL GALACTIC 06B.jpg" },
    ],
    certifications: [
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon1.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon2.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon3.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon4.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon5.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon6.png",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-galactic/icon7.png",
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
    title: "IDL OBSIDIAN",
    slug: "idl-obsidian",
    code: "IDL OBSIDIAN-501,502,503,507",
    colors: "5 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 501+502+503+507.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 501+502+503+507.jpg",

    // PDF path matching urban category format
    specPdf: "/assets/pdf/floorings/naylon/professional-texture-series-specifications.pdf",

    description:
      "IDL OBSIDIAN draws inspiration from a clouded, shadowy, and starless night, delivering a deep, dramatic presence to modern interiors. Its layered texture creates subtle movement and depth, evoking quiet intensity and refined sophistication. Designed for demanding commercial environments, it brings a bold, immersive atmosphere while maintaining a sleek, contemporary aesthetic.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "HIGH-TRAFFIC COMMERCIAL AREAS, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",

    // Updated to match folder structure like urban collection
    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 501+502+503+507.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 501+502+505.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 501+502.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 502+503+507.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 502+511.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 502+505.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 503 ROOMSHOT.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 503.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 503+502 ROOMSHOT.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 503+502.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 503+511.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 505.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 507.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN 503+501+502.jpg",
      
      
      
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "MULTI-LEVEL LOOP" },
      { label: "YARN", value: "100% NYLON 6" },
      { label: "COLOUR SYSTEM", value: "100% SOLUTION DYED" },
      { label: "STITCHES & GAUGE ", value: "1/12" },
      { label: "TOTAL TUFTED PILE WEIGHT", value: "680 GSM (31 Oz/Yd²)" },
      { label: "TOTAL WEIGHT", value: "3000 gm/m² (+/- 100gm)" },
      { label: "PRIMARY BACKING", value: "NON-WOVEN " },
      { label: "SECONDARY BACKING", value: "HIGH PERFORMANCE PVC REINFORCED WTH FIBERGLASS " },
      { label: "TILE SIZE", value: "25cm X 100cm " },
      { label: "PACKING", value: "20 TILES/BOX (5.00 SQM)" }
    ],

    performanceRatings: [
      { label: "FIRE CLASS", value: "ASTM E662" },
      { label: "FORMALDEHYDE", value: "CRI CERTIFIED" },
      { label: "ENVIRONMENTAL STANDARD", value: "GB 18587-2001" },
      { label: "ANTISTATIC STANDARD", value: "GB/T 18044-2008" },
      
    ],

    idealApplications: [
      "HIGH-TRAFFIC COMMERCIAL AREAS",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],

    // Same folder pattern as urban colors
    availableColors: [
      { name: "IDL OBSIDIAN", code: "IO-501", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN TILE-501.jpg" },
      { name: "IDL OBSIDIAN", code: "IO-502", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN TILE-502.jpg" },
      { name: "IDL OBSIDIAN", code: "IO-503", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN TILE-503.jpg" },
      { name: "IDL OBSIDIAN", code: "IO-507", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN TILE-507.jpg" },
      { name: "IDL OBSIDIAN", code: "IO-511", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-obsidian/IDL OBSIDIAN TILE-511.jpg" },
      
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
  {
    title: "IDL SHOWY",
    slug: "idl-showy",
    code: "IDL SHOWY-02",
    colors: "9 Colors",
    img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 02.jpg",
    thumbnail: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 02.jpg",

    // PDF path matching urban category format
    specPdf: "/assets/pdf/floorings/naylon/professional-texture-series-specifications.pdf",

    description:
      "IDL SHOWY makes a bold statement with a flashy design that instantly captures attention. IDL SHOWY's layered texture creates a glaring visual impact, adding drama and depth to contemporary interiors. With a confident, dashing character, IDL SHOWY transforms commercial spaces into striking environments that celebrate expression and style.",

    features: [
      "Enhanced nylon 6.6 construction",
      "Multi-level loop construction",
      "High soil resistance",
      "Built for heavy foot traffic"
    ],

    applications: "HIGH-TRAFFIC COMMERCIAL AREAS, Executive offices, Conference centers, Retail",

    sustainability: "Cradle to Cradle Certified; Contains recycled content",

    // Updated to match folder structure like urban collection
    installationGallery: [
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 01 ROOMSHOT.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 01.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 01+02+03.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 01+03.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 02.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 04+05.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 04+07.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 04+08.jpg",
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 06.jpg", 
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 07 ROOMSHOT.jpg", 
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 07.JPG", 
      "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY 08+09.jpg", 
       
      
      
      
    ],

    technicalSpecs: [
      { label: "CONSTRUCTION", value: "MULTI LEVEL LOOP (ENDLESS DESIGN)" },
      { label: "YARN", value: "100% UNIVERSAL (USA) NYLON 6 " },
      { label: "COLOUR SYSTEM", value: "100% SOLUTION DYED" },
      { label: "GAUGE & STITCHES", value: "COLORSHIFT@8 STITCHES PER INCH" },
      { label: "TOTAL TUFTED PILE WEIGHT", value: "33 Oz/Yd²" },
      { label: "TOTAL WEIGHT", value: "6000 gm/m² (+/- 100 gm) (on PVC Back)" },
      { label: "PILE HEIGHT", value: "5.0~8.0mm (+/-0.5mm)" },
      // { label: "PRIMARY BACKING", value: "NON-WOVEN (UNITIKA-JAPAN)" },
      // { label: "SECONDARY BACKING", value: "HIGH PERFORMANCE PRECOAT PVC REINFORCED WTH FIBERGLASS" },
      // { label: "OPTIONAL BACKING", value: "ANTI-SLIP BACKING FOR GLUE FREE INSTALLATION (LEAD TIME 60 DAYS, MOQ 300 SQM/COLOUR)" },
      // { label: "TILE SIZE", value: "STOCKS IN SINGAPORE 60cm X 60cm [MADE TO ORDER- 50cm X 50cm or 100cm X 100cm (Lead time 60 days, MOQ 300 SQM/COLOUR)]" },
      // { label: "PACKING", value: "14 TILES/BOX (5.04 SQM) (60cm X 60cm)" }
    ],

    performanceRatings: [
      { label: "SMOKE DENSITY TEST", value: "ASTM E 662 (LESS THAN 450)" },
      { label: "STATIC CONTROL", value: "LIFETIME STATIC PROTECTION" },
      { label: "ENVIRONMENTAL STANDARD", value: "ASTM E 648-10 CLASS 1 (GB 8624-2012-B1)FLAMMABILITY: 16 CFR 1631 PASS (FOR 100% UNIVERSAL NYLON 6 TESTED IN SINGAPORE)" },
      { label: "FORMALDEHYDE PURIFICATION", value: "PASSES (JC/T 1074-2008) CLASS I" },
      
    ],

    idealApplications: [
      "HIGH-TRAFFIC COMMERCIAL AREAS",
      "Executive offices",
      "Conference centers",
      "Retail spaces",
      "Workstations",
      "Premium commercial spaces"
    ],

    // Same folder pattern as urban colors
    availableColors: [
      { name: "IDL SHOWY", code: "IS-01", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-01.jpg" },
      { name: "IDL SHOWY", code: "IS-02", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-02.jpg" },
      { name: "IDL SHOWY", code: "IS-03", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-03.jpg" },
      { name: "IDL SHOWY", code: "IS-04", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-04.jpg" },
      { name: "IDL SHOWY", code: "IS-05", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-05.jpg" },
      { name: "IDL SHOWY", code: "IS-06", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-06.jpg" },
      { name: "IDL SHOWY", code: "IS-07", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-07.jpg" },
      { name: "IDL SHOWY", code: "IS-08", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-08.jpg" },
      { name: "IDL SHOWY", code: "IS-09", img: "/assets/products/floorings/Carpet&CarpetTiles/nylon/idl-showy/IDL SHOWY TILE-09.jpg" },
      
    ],

    // Same certifications array format as urban
    certifications: [
      "/assets/products/floorings/nylon/urban/icon1.jpg",
      "/assets/products/floorings/nylon/urban/icon2.jpg",
      "/assets/products/floorings/nylon/urban/icon3.jpg",
      "/assets/products/floorings/nylon/urban/icon4.jpg",
      "/assets/products/floorings/nylon/urban/icon5.jpg",
      "/assets/products/floorings/nylon/urban/icon6.jpg",
      "/assets/products/floorings/nylon/urban/icon7.jpg",
      "/assets/products/floorings/nylon/urban/icon8.jpg",
      "/assets/products/floorings/nylon/urban/icon9.jpg"
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

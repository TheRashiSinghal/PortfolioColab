import { workImages, type WorkImage } from "./works-images.generated";

export const CATEGORIES = [
  "Brand Identity",
  "Visual Campaign",
  "Heritage Design",
  "Visual Storytelling",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Work = {
  slug: string;
  title: string;
  category: Category;
  year: number;
  client?: string;
  description: string;
  image: WorkImage;
  /** Featured works surface on the home page. */
  featured?: boolean;
};

// NOTE: titles/clients are an editorial first pass — these become editable in
// the CMS later. Images are pulled from the optimized generated map by slug.
const img = (slug: string): WorkImage => {
  const found = workImages[slug];
  if (!found) throw new Error(`Missing optimized image for slug: ${slug}`);
  return found;
};

export const works: Work[] = [
  {
    slug: "red-knott",
    title: "Red Knott",
    category: "Brand Identity",
    year: 2025,
    client: "Red Knott",
    description:
      "A concept-driven identity system built around a single confident mark — restrained palette, generous space, and a typographic voice that carries across print and screen.",
    image: img("red-knott"),
    featured: true,
  },
  {
    slug: "heritage-board",
    title: "Heritage Board",
    category: "Heritage Design",
    year: 2025,
    description:
      "A heritage board design translating archival reference into a clean, contemporary layout — balancing storytelling with hierarchy and breathing room.",
    image: img("heritage-board"),
    featured: true,
  },
  {
    slug: "festive-favourites",
    title: "Festive Favourites",
    category: "Visual Campaign",
    year: 2024,
    description:
      "A festive campaign keyline — warm, editorial, and built to scale from feed to print while holding a single consistent visual idea.",
    image: img("festive-favourites"),
    featured: true,
  },
  {
    slug: "identity-study",
    title: "Identity Study",
    category: "Brand Identity",
    year: 2025,
    description:
      "A square-format identity exploration — testing how a mark behaves in tight crops, motion, and repetition.",
    image: img("identity-study"),
    featured: true,
  },
  {
    slug: "snakes-and-ladders",
    title: "Snakes & Ladders",
    category: "Visual Storytelling",
    year: 2024,
    description:
      "An illustrated concept piece reimagining a familiar game as a narrative surface — playful structure, deliberate restraint.",
    image: img("snakes-and-ladders"),
    featured: true,
  },
  {
    slug: "hoodie-mockup",
    title: "Apparel Study",
    category: "Brand Identity",
    year: 2025,
    description:
      "Identity taken onto apparel — testing the mark in the physical world with considered placement and material.",
    image: img("hoodie-mockup"),
    featured: true,
  },
  {
    slug: "birthday-sale",
    title: "Birthday Sale",
    category: "Visual Campaign",
    year: 2024,
    description:
      "A promotional campaign frame — bold type, clear offer, and a layout that reads in a single glance.",
    image: img("birthday-sale"),
  },
  {
    slug: "peace",
    title: "Peace",
    category: "Visual Storytelling",
    year: 2024,
    description:
      "A poster concept — one word, one idea, composed for stillness and impact.",
    image: img("peace"),
  },
  {
    slug: "infographic",
    title: "Infographic",
    category: "Visual Storytelling",
    year: 2025,
    description:
      "Information design that prioritises clarity — sequencing data into a calm, legible visual narrative.",
    image: img("infographic"),
  },
  {
    slug: "campaign-ten",
    title: "Campaign No. 10",
    category: "Visual Campaign",
    year: 2025,
    description:
      "A wide-format campaign visual built for banners and hero placements — composed to hold attention at scale.",
    image: img("campaign-ten"),
  },
  {
    slug: "editorial-spread",
    title: "Editorial Spread",
    category: "Visual Campaign",
    year: 2025,
    description:
      "An editorial spread balancing image and type across a wide canvas — rhythm, margin, and a confident grid.",
    image: img("editorial-spread"),
  },
  {
    slug: "editorial-spread-two",
    title: "Editorial Spread II",
    category: "Visual Campaign",
    year: 2025,
    description:
      "A continuation of the editorial system — testing the layout language across a second composition.",
    image: img("editorial-spread-two"),
  },
  {
    slug: "identity-study-two",
    title: "Identity Study II",
    category: "Brand Identity",
    year: 2025,
    description:
      "A portrait-format identity exploration — extending the mark into a vertical, poster-led format.",
    image: img("identity-study-two"),
  },
];

export const featuredWorks = works.filter((w) => w.featured);

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

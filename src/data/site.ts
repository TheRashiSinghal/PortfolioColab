// Site-wide content. Becomes CMS-managed (siteSettings) later — kept here as
// typed local data so the whole site renders before any accounts exist.

export const site = {
  name: "Rashi Singhal",
  role: "Visual Designer",
  tagline: "Minimal, concept-driven digital aesthetics.",
  location: "India",
  email: "rashisinghal818@gmail.com",

  // Drafted from the existing site's details — edit freely.
  bio: [
    "Rashi Singhal is a visual designer working at the intersection of brand identity, creative direction, and visual storytelling.",
    "Her work is minimal and concept-led: a focus on clear ideas, considered typography, and the kind of restraint that lets a single strong image do the talking.",
    "She partners with brands and studios to shape identities and campaigns that feel intentional from the first sketch to the final print.",
  ],

  services: [
    "Brand Identity",
    "Creative Direction",
    "Visual Storytelling",
    "Typography",
    "Print Design",
    "Web Design",
  ],

  // Handles to be supplied later — left as placeholders so links render.
  socials: [
    { label: "Instagram", href: "https://instagram.com/", handle: "@rashi" },
    { label: "LinkedIn", href: "https://linkedin.com/", handle: "Rashi Singhal" },
  ],
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Info", href: "/info" },
  { label: "Moodboard", href: "/moodboard" },
  { label: "Contact", href: "/contact" },
] as const;

// Add new projects here. Copy an existing object and update its fields.
// Put images in public/images/projects/ and reference them as /images/projects/your-file.png.
// Leave image, technologies, github, or demo as "" to hide that part of the card.

export type Project = {
  title: string;
  status?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "contain" | "cover";
  year?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Awarely AI",
    description:
      "A private journaling app with an AI companion for grounding and self-reflection.",
    image: "/images/projects/awarely-logo.svg",
    imageAlt: "Awarely AI logo",
    imageFit: "contain",
    year: "2026",
    technologies: ["Next.js", "Supabase", "Vercel"],
    github: "https://github.com/ziluq1/awarely-ai",
    demo: "https://awarely-ai.vercel.app",
  },
  { title: "Project 02", status: "Coming soon" },
  { title: "Project 03", status: "Coming soon" },
];

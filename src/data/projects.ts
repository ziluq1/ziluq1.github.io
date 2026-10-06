// Add new projects here. Copy an existing object and update its fields.
// Put images in public/images/projects/ and reference them as /images/projects/your-file.png.
// Leave image, technologies, github, or demo as "" to hide that part of the card.
// The three entries below are placeholders, not real projects.

export type Project = {
  title: string;
  status?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  year?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  { title: "Project 01", status: "Coming soon" },
  { title: "Project 02", status: "Coming soon" },
  { title: "Project 03", status: "Coming soon" },
];

import { HoverEffect } from "./ui/card-hover-effect";

export function TechStackCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "NextJS",
    description:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static rendering.",
    link: "https://stripe.com",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is a free and open-source high-level programming language that adds static typing with optional type annotations to JavaScript. ",
    link: "https://netflix.com",
  },
  {
    title: "Aceternity UI / Magic UI / TailwindCSS",
    description:
      "UI Libraries for styling and components",
    link: "https://google.com",
  },
  {
    title: "Hugging Face",
    description:
      "Hugging Face develops computation tools for building applications using machine learning.",
    link: "https://meta.com",
  },
  {
    title: "Zephyr-7B-β",
    description:
      "Zephyr is a series of language models that are trained to act as helpful assistants. Zephyr-7B-β is the second model in the series, and is a fine-tuned version of mistralai/Mistral-7B-v0.1 that was trained on on a mix of publicly available, synthetic datasets using Direct Preference Optimization.",
    link: "https://amazon.com",
  },
  {
    title: "Flask",
    description:
      "Flask is a micro web framework written in Python.",
    link: "https://microsoft.com",
  },
];

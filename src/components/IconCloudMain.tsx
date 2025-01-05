import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "python",
  "flask",
  "django"
];

export function IconCloudMain() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="flex items-center justify-center overflow-hidden rounded-lg bg-background max-w-5xl max-h-5xl"> 
      <IconCloud images={images} />
    </div>
  );
}

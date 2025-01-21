import React from "react";
import { IconCloudMain } from "./IconCloudMain";
import { TechStackCard } from "./TechStackCard";
import { motion } from "framer-motion";

export function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4 pb-4">
        Tech Stack
      </h2>
      <div className="flex justify-between items-center max-w-7xl pl-2 mx-auto">
        <div className="w-full">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-sans ">
          Built with Next.js and TypeScript for scalable and high-performance development, enhanced by Magic UI and Aeternity UI for intuitive design, and styled with Tailwind CSS for flexibility. The backend is powered by Flask, utilizing the Zephyr-7B-β model via Hugging Face for advanced AI capabilities. Deployed seamlessly on Vercel, our stack ensures a cutting-edge, responsive, and efficient user experience.
          </p>
          <div>
            <TechStackCard />
          </div>
        </div>
        <div className="w-1/2 pl-4 max-w-full">
          <IconCloudMain />
        </div>
      </div>
    </div>
    </motion.div>
  );
}

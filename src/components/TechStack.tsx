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
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi blanditiis voluptate nihil quas exercitationem rem porro itaque nobis quam, non quaerat beatae, dolores corporis culpa ipsa eligendi dignissimos, facere odio!
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

import React from "react";
import { AnimatedGradientTextMain } from "./AnimatedGradientTextMain";
import { HoverButton } from "./HoverButton";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-4 md:py-8 lg:py-8 mb-64">
        <div className="text-center space-y-6 md:space-y-8 max-w-3xl">
          <div>
            <AnimatedGradientTextMain />
          </div>
          <div className="text-center font-bold tracking-tight space-y-2">
            <h1 className=" text-3xl sm:text-4xl md:text-6xl">
              Your Complete{" "}
              <span className="text-transparent bg-gradient-to-r from-[#9c40ff] to-[#ffaa40] bg-clip-text whitespace-nowrap">
                AI-powered Health Hub
              </span>{" "}
              for Better Living
            </h1>
            <div className="space-y-4 mt-4 pt-4">
              <p className="text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto px-4sm:text-xl">
                Empowering you with real-time health tracking, personalized
                insights, and comprehensive wellness management. Take control of
                your health journey today.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0 mb-10">
            <Link
              href="https://huggingface.co/spaces/Paulie-Aditya/MediMate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverButton />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

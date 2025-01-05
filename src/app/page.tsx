"use client";

import { NavbarMain } from "@/components/NavbarMain";
import {HeroSection} from "@/components/HeroSection"
import "./globals.css";
import { FeatureCard } from "@/components/FeatureCard";
import {Footer} from "@/components/Footer"
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <NavbarMain />

      <div className="mt-40 min-h-screen">
      <HeroSection />
      </div>

      <div className="w-full">
        <FeatureCard />
      </div>

      <div>
        <TechStack />
      </div>

      <div>
        <Footer />
      </div>
      
      
     
    </>
    
  );
}

"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export function NavbarMain() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-3" />
    </div>
    </motion.div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="#">
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        
        <Link href="https://huggingface.co/spaces/Paulie-Aditya/MediMate">
          <MenuItem setActive={setActive} active={active} item="Product">
          
          </MenuItem>
        </Link>
        
        <Link href="#features">
          <MenuItem setActive={setActive} active={active} item="Features">
          </MenuItem>
        </Link>
        
      </Menu>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

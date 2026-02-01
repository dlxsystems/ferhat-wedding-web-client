"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-center mb-16 ${className}`}>
      {/* Top Decoration */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="w-12 h-px bg-primary/30" />
        <div className="w-2 h-2 rounded-full border border-primary/30 rotate-45" />
        <div className="w-12 h-px bg-primary/30" />
      </motion.div>

      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-2 block"
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-script text-5xl md:text-7xl text-primary text-center px-4"
      >
        {title}
      </motion.h2>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="flex items-center gap-4 mt-6"
      >
        <div className="w-20 h-px bg-primary/40" />
        <div className="relative">
          <div className="w-3 h-3 border border-primary/40 rotate-45" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-primary/40 rounded-full" />
          </div>
        </div>
        <div className="w-20 h-px bg-primary/40" />
      </motion.div>
    </div>
  );
}

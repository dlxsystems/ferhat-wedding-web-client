"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export default function VideoSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-100"
          src="/journey.mov"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      {/* Content Overlay */}
      <motion.div
        className="z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.span
          className="font-sans text-xs md:text-sm tracking-[0.6em] uppercase text-white/70 mb-6 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {t.video.subtitle}
        </motion.span>

        <h2 className="font-script text-6xl md:text-8xl text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-tight">
          {t.video.title}
        </h2>

        {/* Decorative Divider */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <div className="w-16 h-px bg-white/20" />
          <div className="relative">
            <div className="w-3 h-3 border border-white/30 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 bg-white/40 rounded-full" />
            </div>
          </div>
          <div className="w-16 h-px bg-white/20" />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Layer with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        <Image
          src="/home-img.jpg"
          alt="Sahar & Ferhat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle dimming */}
      </motion.div>

      {/* Decorative Blush Overlay - Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-linear-to-t from-background via-background/50 to-transparent -z-10" />

      {/* Floating Sparkles/Texture */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none -z-10"
        style={{
          backgroundImage: 'url("/gold-foil.jpg")',
          backgroundSize: "200px",
        }}
      ></div>

      <motion.div
        className="z-10 p-8 flex flex-col items-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.span
          className="text-white/90 text-sm md:text-base tracking-[0.4em] uppercase font-sans font-light mb-6 mix-blend-luminosity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {t.hero.intro}
        </motion.span>

        <h1 className="relative font-script text-7xl md:text-9xl text-white mb-2 drop-shadow-lg leading-none">
          {t.hero.names}
          <span className="absolute -inset-4 bg-white/20 blur-[80px] -z-10 rounded-full"></span>
        </h1>

        <div className="mt-12 flex flex-col items-center gap-4 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <p className="font-serif text-3xl md:text-4xl text-white/95 italic tracking-wide drop-shadow-md">
            {t.hero.date}
          </p>
          <p className="font-sans text-sm tracking-[0.2em] text-white/80 uppercase">
            {t.hero.time}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 animate-bounce cursor-pointer mix-blend-screen"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <ChevronDown size={32} className="text-white/70" />
      </motion.div>
    </section>
  );
}

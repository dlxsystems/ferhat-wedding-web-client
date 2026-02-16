"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export default function Program() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-background flex flex-col items-center justify-center relative overflow-hidden min-h-[50vh]">
      {/* Watercolor Wash Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'url("/blush-wash.jpg")',
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative z-10 text-center flex flex-col items-center gap-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Top Element */}
          <div className="mb-6 flex items-center justify-center gap-4 opacity-60">
            <div className="w-12 h-px bg-primary" />
            <div className="w-2 h-2 rotate-45 border border-primary" />
            <div className="w-12 h-px bg-primary" />
          </div>

          <h2 className="font-script text-6xl md:text-7xl text-primary mb-4">
            {t.program.title}
          </h2>
          
          <p className="font-sans text-sm tracking-[0.4em] uppercase text-foreground/60 mb-12">
            {t.hero.date}
          </p>

          <div className="flex flex-col items-center">
             <span className="font-serif text-2xl text-foreground/70 italic">
               {t.program.timeLabel}
             </span>
             <span className="font-serif text-7xl md:text-9xl text-primary font-bold tracking-loose">
               {t.hero.time}
             </span>
          </div>

          {/* Decorative Bottom Element */}
          <div className="mt-12 flex items-center justify-center gap-4 opacity-60">
            <div className="w-12 h-px bg-primary" />
            <div className="w-2 h-2 rotate-45 border border-primary" />
            <div className="w-12 h-px bg-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

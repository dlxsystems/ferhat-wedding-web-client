"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Program() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-background flex flex-col items-center relative overflow-hidden">
      {/* Watercolor Wash Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'url("/blush-wash.jpg")',
          backgroundSize: "cover",
        }}
      ></div>

      <SectionHeading title={t.program.title} />

      <div className="relative flex flex-col gap-16 md:gap-24 max-w-5xl w-full z-10 mt-12">
        {/* Vertical Line - Centered on all screens */}
        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-primary/30 -translate-x-1/2" />

        {t.program.items.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-4 md:gap-16 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            {/* Dot on line - Centered on all screens */}
            <div className="absolute left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-auto border-4 border-white shadow-md z-20" />

            {/* Time Side */}
            <div
              className={`flex-1 w-full text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
            >
              <span className="font-serif text-3xl md:text-4xl text-primary font-bold block mb-1">
                {item.time}
              </span>
            </div>

            {/* Small vertical gap for mobile line feel */}
            <div className="md:hidden h-12 w-px" />

            {/* Event Side */}
            <div
              className={`flex-1 w-full text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
            >
              <span className="font-sans text-lg md:text-xl text-foreground font-light tracking-widest uppercase">
                {item.event}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

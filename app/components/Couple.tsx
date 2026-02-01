"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Couple() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-8 bg-background flex flex-col items-center relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-secondary to-transparent opacity-30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <SectionHeading title={t.couple.title} />

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center max-w-6xl w-full relative z-10">
        {/* Bride */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/bride.png"
              alt={t.couple.bride.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-3xl text-foreground">
              {t.couple.bride.name}
            </h3>
            <p className="font-sans text-xs tracking-[0.2em] text-primary uppercase">
              {t.couple.bride.role}
            </p>
            <div className="w-12 h-px bg-primary/30 mx-auto my-2" />
            <p className="font-sans text-sm text-gray-500 max-w-xs leading-relaxed">
              {t.couple.bride.bio}
            </p>
            <div className="flex gap-4 justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Instagram
                size={18}
                className="text-gray-400 hover:text-primary cursor-pointer"
              />
            </div>
          </div>
        </motion.div>

        {/* Center Divider / Amperstand */}
        <div className="font-script text-6xl text-primary/80 -mt-12">&</div>

        {/* Groom */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/groom.png"
              alt={t.couple.groom.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-3xl text-foreground">
              {t.couple.groom.name}
            </h3>
            <p className="font-sans text-xs tracking-[0.2em] text-primary uppercase">
              {t.couple.groom.role}
            </p>
            <div className="w-12 h-px bg-primary/30 mx-auto my-2" />
            <p className="font-sans text-sm text-gray-500 max-w-xs leading-relaxed">
              {t.couple.groom.bio}
            </p>
            <div className="flex gap-4 justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Instagram
                size={18}
                className="text-gray-400 hover:text-primary cursor-pointer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { src: "/home-img.png", alt: "Our Moments 1", large: true },
    { src: "/home-img.png", alt: "Our Moments 2", large: false },
    { src: "/home-img.png", alt: "Our Moments 3", large: false },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-background flex flex-col items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32" />

      <SectionHeading title={t.gallery.title} />

      <div className="max-w-7xl w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 auto-rows-[200px] md:auto-rows-[300px] mt-12">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden shadow-xl group cursor-pointer ${
              image.large
                ? "col-span-2 row-span-2 md:col-span-1 lg:col-span-1"
                : "col-span-1"
            } ${
              image.large && index === 4
                ? "md:row-span-2"
                : image.large
                  ? "md:row-span-2"
                  : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {/* Image Frame with Golden Glow */}
            <div className="absolute inset-0 z-10 border border-primary/10 group-hover:border-primary/30 transition-colors pointer-events-none" />

            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Glamorous Overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Subtle Golden Shimmer */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-primary/5 opacity-100 transition-opacity duration-700" />

            {/* Inner Border/Frame Effect */}
            <div className="absolute inset-3 border border-white/20 group-hover:inset-4 transition-all duration-500 opacity-100" />

            {/* Mobile-specific glamour tag - subtle */}
            <div className="absolute bottom-3 right-3 md:hidden">
              <div className="w-1 h-1 bg-primary/40 rounded-full animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="mt-20 flex items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-8 h-px bg-primary/20" />
        <div className="w-1.5 h-1.5 rounded-full border border-primary/20 rotate-45" />
        <div className="w-8 h-px bg-primary/20" />
      </motion.div>
    </section>
  );
}

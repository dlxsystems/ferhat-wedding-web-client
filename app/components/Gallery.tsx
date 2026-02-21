"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { src: "/g1.jpg", alt: "Our Moments 1", aspect: "aspect-[3/4]" },
    { src: "/g2.jpg", alt: "Our Moments 2", aspect: "aspect-[4/3]" },
    { src: "/g3.jpg", alt: "Our Moments 3", aspect: "aspect-[3/4]" },
    { src: "/g4.jpg", alt: "Our Moments 4", aspect: "aspect-square" },
    { src: "/g5.jpg", alt: "Our Moments 5", aspect: "aspect-[3/4]" },
    { src: "/g6.jpg", alt: "Our Moments 6", aspect: "aspect-[4/3]" },
    { src: "/g7.jpg", alt: "Our Moments 7", aspect: "aspect-square" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-background flex flex-col items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32" />

      <SectionHeading title={t.gallery.title} />

      <div className="max-w-7xl w-full columns-2 md:columns-3 gap-3 mt-12">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`break-inside-avoid relative mb-3 overflow-hidden shadow-sm group cursor-pointer rounded-xs ${image.aspect} block w-full bg-primary/5`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            {/* Image Frame with Golden Glow */}
            <div className="absolute inset-0 z-10 border border-primary/10 group-hover:border-primary/30 transition-colors pointer-events-none rounded-xs" />

            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
              priority={index < 3}
            />

            {/* Glamorous Overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Subtle Golden Shimmer */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-primary/5 opacity-100 transition-opacity duration-700" />
            
            {/* Inner Border/Frame Effect */}
            <div className="absolute inset-3 border border-white/20 group-hover:inset-4 transition-all duration-500 opacity-100 rounded-sm" />
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

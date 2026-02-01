"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { MapPin, Info } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-4 md:px-8 bg-secondary/30 flex flex-col items-center relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-20 mix-blend-multiply" />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 md:pr-12"
        >
          <div>
            <SectionHeading title={t.location.title} />
            <p className="font-sans text-center md:text-left text-gray-600 leading-relaxed text-lg mb-4">
              {t.location.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1 text-foreground">
                  {t.location.addressLabel}
                </h4>
                <p className="font-sans text-gray-600 opacity-80">
                  {t.location.address}
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center md:justify-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1 text-foreground">
                  {t.location.parkingLabel}
                </h4>
                <p className="font-sans text-gray-600 opacity-80">
                  {t.location.parkingInfo}
                </p>
              </div>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://maps.google.com?q=Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center md:self-start mt-4 bg-primary text-white px-8 py-3 font-sans text-sm uppercase tracking-widest hover:bg-foreground transition-colors shadow-lg"
          >
            {t.location.mapButton}
          </motion.a>
        </motion.div>

        {/* Map & Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="relative aspect-4/3 w-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/venue.png"
              alt={t.location.venue}
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full h-[250px] overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Amsterdam&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

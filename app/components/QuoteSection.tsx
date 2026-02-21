"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export default function QuoteSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-background flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl text-center z-10 px-6 relative">
        {/* Large Opening Quote Mark */}
        <motion.div 
            className="text-6xl md:text-8xl text-primary/20 font-serif absolute -top-8 -left-4 md:-left-12 opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
        >
            “
        </motion.div>

        <motion.blockquote
          className="font-serif text-3xl md:text-5xl text-primary leading-relaxed drop-shadow-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {t.quote.text}
        </motion.blockquote>

        <motion.div
            className="text-6xl md:text-8xl text-primary/20 font-serif absolute -bottom-12 -right-4 md:-right-12 opacity-50 rotate-180"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true }}
        >
            “
        </motion.div>
        
        {/* Decorative Divider */}
        <motion.div 
            className="mt-16 mx-auto w-24 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
             initial={{ width: 0 }}
             whileInView={{ width: 96 }}
             transition={{ delay: 0.8, duration: 0.8 }}
        />
      </div>
    </section>
  );
}

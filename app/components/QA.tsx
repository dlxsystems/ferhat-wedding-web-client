"use client";

import { useLanguage } from "./LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function QA() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-8 bg-white flex flex-col items-center mb-24">
      <SectionHeading title={t.qa.title} />

      <div className="max-w-3xl w-full flex flex-col gap-4 mt-8">
        {t.qa.items.map((item, index) => (
          <motion.div
            key={index}
            className="border-b border-primary/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-6 text-left hover:bg-black/5 px-4 rounded-lg transition-colors"
            >
              <h3 className="font-serif text-xl md:text-2xl text-foreground pr-8">
                {item.q}
              </h3>
              {openIndex === index ? (
                <Minus className="text-primary shrink-0" />
              ) : (
                <Plus className="text-primary shrink-0" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-sans text-base text-gray-600 pb-6 px-4 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

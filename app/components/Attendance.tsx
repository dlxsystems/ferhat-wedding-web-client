"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Attendance() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Background Texture */}
      <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-10 mix-blend-multiply" />
      
      <div className="max-w-4xl w-full z-10 text-center">
        <SectionHeading title={t.attendance.title} />
        
        <motion.div
           className="mt-12 p-8 md:p-12 relative group"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          {/* Subtle Decorative Corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/20 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/20 rounded-br-lg" />
          
          <p 
            className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8 [&>strong]:text-primary [&>strong]:font-semibold [&>strong]:not-italic"
            dangerouslySetInnerHTML={{ __html: `"${t.attendance.text}"` }}
          />
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-8 h-px bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-8 h-px bg-primary/30" />
          </div>
        </motion.div>
        
        {/* Decorative Floating Element */}
        <motion.div 
          className="mt-16 text-primary/40 text-4xl font-script opacity-50"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          With Love
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "./LanguageProvider";
import { Language } from "../data/locales";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "nl", label: "NL" },
    { code: "tr", label: "TR" },
    { code: "fa", label: "FA" },
  ];

  return (
    <div className="w-fit fixed top-6 left-0 right-0 items-center mx-auto z-50 flex gap-2 bg-white/60 backdrop-blur-xs p-1.5 rounded-full shadow-sm border border-white/40">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 text-xs font-sans font-medium rounded-full transition-colors ${language === lang.code ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { LanguageProvider } from "./components/LanguageProvider";
import { MusicProvider } from "./components/MusicProvider";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import VideoSection from "./components/VideoSection";
import QuoteSection from "./components/QuoteSection";
import Gallery from "./components/Gallery";
import Program from "./components/Program";
import Location from "./components/Location";
import QA from "./components/QA";
import Attendance from "./components/Attendance";
import MusicPlayer from "./components/MusicPlayer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import IntroVideo from "./components/IntroVideo";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <MusicProvider>
      <LanguageProvider>
        <main className="relative min-h-screen">
          <AnimatePresence>
            {!showContent && (
              <IntroVideo key="intro" onComplete={() => setShowContent(true)} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showContent && (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <LanguageSwitcher />
                <MusicPlayer />
                <Hero />
                <Countdown />
                <VideoSection />
                <QuoteSection />
                <Program />
                <Gallery />
                <Location />
                <QA />
                <Attendance />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </LanguageProvider>
    </MusicProvider>
  );
}

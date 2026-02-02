"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "./MusicProvider";
import { useLanguage } from "./LanguageProvider";

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { startPlaying } = useMusic();
  const { t } = useLanguage();

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // Start background music immediately at 0.8 volume
    startPlaying(0.8);

    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  const handleEnded = () => {
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-100 bg-black flex items-center justify-center cursor-pointer"
      onClick={handleStart}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      <video
        ref={videoRef}
        className="w-full h-full md:object-cover object-fill"
        playsInline
        onEnded={handleEnded}
        src="/video.mp4"
        poster="/intro-poster.png"
        preload="auto"
      />

      <AnimatePresence>
        {!hasStarted && (
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 gap-6">
            <div className="animate-bounce text-primary drop-shadow-md text-sm md:text-base tracking-[0.6em] uppercase font-serif font-light">
              {t.hero.open}
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

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

    // Call startPlaying first to ensure background audio gets priority in the user gesture
    startPlaying();

    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  const handleEnded = () => {
    // Ensure music is playing or resumes after video is done
    startPlaying();
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
        className="w-full h-full md:object-cover object-fill object"
        playsInline
        onEnded={handleEnded}
        src="/video.mp4"
        poster="/intro-poster.png"
        preload="auto"
      />

      <AnimatePresence>
        {!hasStarted && (
          <div className="absolute top-10 inset-0 flex flex-col items-center justify-top gap-6">
            <div className="animate-bounce text-primary drop-shadow-md text-sm md:text-base tracking-[0.6em] uppercase font-serif font-light">
              {t.hero.open}
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

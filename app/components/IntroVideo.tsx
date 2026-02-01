"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "./MusicProvider";

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { startPlaying } = useMusic();

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
    startPlaying();
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
        onEnded={onComplete}
        src="/video.mov"
        preload="auto"
      />

      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 
              No visible button as requested. 
              The cursor-pointer on the parent indicates it's clickable.
            */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

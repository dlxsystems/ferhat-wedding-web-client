"use client";

import { useRef, useState, useEffect } from "react";
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

  // Handle automatic reveal on scroll attempt
  useEffect(() => {
    const triggerStart = () => {
      if (!hasStarted) {
        handleStart();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 5) triggerStart();
    };

    const handleTouchMove = () => {
      triggerStart();
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [hasStarted]);

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);

    // Start background music immediately at 0.8 volume
    startPlaying(0.8);

    if (videoRef.current) {
      // Mute the video to ensure the background music (music.mp3) can start
      // without being blocked by iOS "one audio at a time" policy.
      videoRef.current.muted = true;
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
        muted
        onEnded={handleEnded}
        src="/video.mp4"
        poster="/intro-poster.png"
        preload="auto"
      />

      <AnimatePresence>
        {!hasStarted && (
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden bg-black/50 opacity-60">
            <motion.div 
              className="relative flex items-center justify-center cursor-pointer translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* Pulsing Center Icon/Point */}
              <div className="relative flex items-center justify-start flex-col group pb-30 md:pb-48">
                 {/* Decorative Rings */}
                <motion.div
                  className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/20"
                  animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                
                <motion.div
                  className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 backdrop-blur-md border border-primary/40 flex items-center justify-center shadow-[0_0_30px_rgba(176,141,85,0.2)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                      className="text-primary"
                    >
                      <path d="M12 19V5M12 5L5 12M12 5L19 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

"use client";

import { useMusic } from "./MusicProvider";
import { Music, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const { isPlaying, togglePlay } = useMusic();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Animated Sound Wave Effect */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border border-primary opacity-75"
          animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      <motion.button
        className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform relative z-10"
        onClick={togglePlay}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} />}
      </motion.button>
    </div>
  );
}

"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  startPlaying: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.loop = true;
      audioRef.current.load();
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(console.error);
    }
  };

  const startPlaying = () => {
    if (!audioRef.current) return;
    if (isPlaying) return; // Already playing

    console.log("MusicProvider: Attempting to start playback");

    audioRef.current
      .play()
      .then(() => {
        console.log("MusicProvider: Playback started successfully");
        setIsPlaying(true);
      })
      .catch((err) => {
        console.error("MusicProvider: Playback failed:", err);
      });
  };

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay, startPlaying }}>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        className="hidden"
      />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}

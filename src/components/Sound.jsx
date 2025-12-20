"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState, useEffect, useCallback } from "react";

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Don't access localStorage during render to avoid SSR/client mismatch
  const [volume, setVolume] = useState(null);
  const [mounted, setMounted] = useState(false);

  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    // run only on client
    let v = 0.5;
    try {
      const stored = localStorage.getItem("soundVolume");
      if (stored !== null) v = parseFloat(stored);
    } catch {}
    setVolume(v);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (audioRef.current && volume !== null) {
      audioRef.current.volume = volume;
    }
    try {
      if (volume !== null) localStorage.setItem("soundVolume", String(volume));
    } catch {}
  }, [volume]);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);

    if (!audioRef.current) return;

    if (newState) {
      audioRef.current
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    } else {
      audioRef.current.pause();
    }
  };

  const handleBlur = useCallback((e) => {
    const related = e.relatedTarget;
    if (!related || !e.currentTarget.contains(related)) {
      setPopoverOpen(false);
    }
  }, []);

  return (
    <div
      className="fixed top-4 right-2.5 xs:right-4 z-50"
      onMouseEnter={() => setPopoverOpen(true)}
      onMouseLeave={() => setPopoverOpen(false)}
      onFocus={() => setPopoverOpen(true)}
      onBlur={handleBlur}
    >
      <audio ref={audioRef} loop>
        <source src={"/audio/9am.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label="Sound control button"
        name="Sound control button"
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>

      {/* Volume slider popover (gap removed) */}
      <div
        tabIndex={-1}
        role="dialog"
        aria-label="Volume control"
        className={
          "absolute top-full right-0 mt-0 w-36 p-2 bg-black/70 backdrop-blur-sm rounded shadow-lg transition-all " +
          (popoverOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-1")
        }
      >
        <label className="flex items-center gap-2 text-xs text-foreground">
          <span className="min-w-0 truncate">Volume</span>
          <span className="ml-auto text-xs">
            {/* only render percent after client mount to avoid hydration mismatch */}
            {mounted && volume !== null ? `${Math.round(volume * 100)}%` : ""}
          </span>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume ?? 0.5}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full mt-2 accent-accent"
          aria-label="Volume"
        />
      </div>
    </div>
  );
};

export default Sound;

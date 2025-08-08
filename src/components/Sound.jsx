"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState } from "react";

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);

    if (newState) {
      audioRef.current
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
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
        aria-label={"Sound control button"}
        name={"Sound control button"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;

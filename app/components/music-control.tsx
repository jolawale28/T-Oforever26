"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicControl() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = new Audio("/audio/bg-audio.mp3");
        audio.loop = true;
        audio.volume = 0.25;
        audioRef.current = audio;

        return () => {
            audio.pause();
            audio.src = "";
            audioRef.current = null;
        };
    }, []);

    async function toggleMusic() {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        if (audio.paused) {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch {
                setIsPlaying(false);
            }
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    }

    return (
        <button
            className="music-control"
            type="button"
            title={isPlaying ? "Pause music" : "Play music"}
            aria-label={isPlaying ? "Pause background music" : "Play background music"}
            aria-pressed={isPlaying}
            onClick={toggleMusic}
        >
            {isPlaying ? "♫" : "♪"}
        </button>
    );
}
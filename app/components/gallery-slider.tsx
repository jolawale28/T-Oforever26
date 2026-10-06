"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
    { src: "/images/img3.jpeg", alt: "Photo 1" },
    { src: "/images/img6.jpeg", alt: "Photo 2" },
    { src: "/images/img7.jpg", alt: "Photo 3" },
    { src: "/images/img4.jpg", alt: "Photo 4" },
];

export default function GallerySlider() {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCurrentPhoto((photo) => (photo + 1) % photos.length);
        }, 5000);

        return () => window.clearInterval(interval);
    }, []);

    function showPreviousPhoto() {
        setCurrentPhoto((photo) => (photo - 1 + photos.length) % photos.length);
    }

    function showNextPhoto() {
        setCurrentPhoto((photo) => (photo + 1) % photos.length);
    }

    return (
        <>
            <div
                className="image-slider"
                role="region"
                aria-label="Photo gallery"
                aria-roledescription="carousel"
            >
                <div
                    className="slides"
                    style={{ transform: `translateX(-${currentPhoto * 100}%)` }}
                >
                    {photos.map((photo, index) => (
                        <Image
                            key={photo.src}
                            src={photo.src}
                            alt={photo.alt}
                            width={1600}
                            height={1200}
                            sizes="(max-width: 800px) 84vw, 1176px"
                            aria-hidden={index !== currentPhoto}
                        />
                    ))}
                </div>
            </div>
            <div className="slider-controls">
                <button
                    className="slider-control"
                    type="button"
                    aria-label="Previous photo"
                    onClick={showPreviousPhoto}
                >
                    ←
                </button>
                <span aria-live="polite">
                    {currentPhoto + 1} / {photos.length}
                </span>
                <button
                    className="slider-control"
                    type="button"
                    aria-label="Next photo"
                    onClick={showNextPhoto}
                >
                    →
                </button>
            </div>
        </>
    );
}

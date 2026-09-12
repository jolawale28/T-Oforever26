'use client'

import { useEffect, useState } from "react";
import { getCountdown } from "../utils";

export default function Header() {

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setCountdown(getCountdown());

        const timer = window.setInterval(() => {
            setCountdown(getCountdown());
        }, 1000);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <header className="hero" id="home">
            <nav className="nav">
                <a className="brand" href="#home">T'O <span>Forever '26</span></a>
                <button
                    className="menu-btn cursor-pointer"
                    id="menuBtn"
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="navLinks"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    ☰
                </button>
                <div className={`nav-links${isMenuOpen ? " open" : ""}`} id="navLinks">
                    <a href="#story" onClick={() => setIsMenuOpen(false)}>Our Story</a>
                    <a href="#journey" onClick={() => setIsMenuOpen(false)}>Journey</a>
                    <a href="#celebration" onClick={() => setIsMenuOpen(false)}>Celebration</a>
                    <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
                    <a href="#rsvp" onClick={() => setIsMenuOpen(false)}>RSVP</a>
                </div>
            </nav>

            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="eyebrow">TOGETHER WITH THEIR FAMILIES</p>
                <h1>Temitope <span>&</span> Oladele</h1>
                <p className="tagline">Two hearts. One journey. Forever begins.</p>
                <div className="date-pill" id="weddingDateDisplay">28 · 11 · 2026</div>
                <p className="location-placeholder">Abeokuta, Nigeria</p>
                <a className="btn btn-primary" href="#rsvp">RSVP WITH US</a>
                <div className="countdown" id="countdown">
                    <div><strong>{String(countdown.days).padStart(2, "0")}</strong><span>Days</span></div>
                    <div><strong>{String(countdown.hours).padStart(2, "0")}</strong><span>Hours</span></div>
                    <div><strong>{String(countdown.minutes).padStart(2, "0")}</strong><span>Minutes</span></div>
                    <div><strong>{String(countdown.seconds).padStart(2, "0")}</strong><span>Seconds</span></div>
                </div>
            </div>
            <a className="scroll-cue" href="#story">Scroll to discover ↓</a>
        </header>
    )
}
import { useState, useEffect } from "react";
import {
  CheckCircle,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Image Arrays
const autoRescueImages = [
  "/auto-rescue-1.jpg",
  "/auto-rescue-2.jpg",
  "/auto-rescue-3.jpg",
];

const panicImages = [
  "/panic-1.png",
  "/panic-2.png",
  "/panic-3.png",
];

const allImages = [...autoRescueImages, ...panicImages];

const SpecialAchievements = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i! + 1) % allImages.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i! - 1 + allImages.length) % allImages.length);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeIndex]);

  return (
    <>
      {/* ================= LIGHTBOX OVERLAY ================= */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center px-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Counter */}
            <div className="absolute -top-12 left-0 text-sm text-white/60 tracking-[0.2em] font-medium">
              {activeIndex + 1} / {allImages.length}
            </div>

            {/* Main Image */}
            <div className="relative w-full flex justify-center overflow-hidden rounded-sm shadow-2xl">
              <img
                src={allImages[activeIndex]}
                alt="Enlarged view"
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {/* Prev Button */}
            <button
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + allImages.length) % allImages.length
                )
              }
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4"
              aria-label="Previous"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                setActiveIndex((activeIndex + 1) % allImages.length)
              }
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4"
              aria-label="Next"
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </div>
      )}

      {/* ================= MAIN SECTION ================= */}
      <section
        id="special-achievements"
        className="bg-base-light dark:bg-base-dark py-24 md:py-32 transition-colors duration-300"
      >
        <div className="container px-6 mx-auto">

          {/* HEADER */}
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-2">
              <Award size={14} />
              Innovation Spotlight
            </div>

            <h2 className="font-serif text-3xl md:text-5xl text-text-light dark:text-text-dark">
              Special Achievements
            </h2>

            <div className="w-16 h-[2px] bg-accent mx-auto"></div>

            <p className="max-w-3xl mx-auto text-muted-light dark:text-muted-dark leading-relaxed text-lg">
              Pioneering indigenous innovations in emergency response systems,
              designed to save human lives through automation and rapid medical intervention.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-24">

            {/* ================= 1. AUTO RESCUE SYSTEM ================= */}
            <div className="space-y-10">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark mb-2">
                  Auto Rescue System
                </h3>
                <p className="text-accent font-bold tracking-widest text-sm uppercase">
                  Emergency Calling Device for 108 Service
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {autoRescueImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="group relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm"
                  >
                    <img
                      src={src}
                      alt={`Auto Rescue ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              {/* Feature List */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-light dark:text-muted-dark">
                {[
                  "First-of-its-kind two-way emergency communication",
                  "Automatic GPS-based location transmission",
                  "Cloud telephony integration with 108 infrastructure",
                  "Callback system for real-time victim status",
                  "Supports fire, SOS, industrial & railway emergencies",
                  "Cost-effective (₹1500–₹2000 production cost)",
                ].map((feat, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-accent mt-1 shrink-0" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-border-light dark:bg-border-dark opacity-50" />

            {/* ================= 2. PANIC BUTTON SYSTEM ================= */}
            <div className="space-y-10">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-serif text-3xl md:text-4xl text-text-light dark:text-text-dark mb-2">
                  Panic Button System
                </h3>
                <p className="text-accent font-bold tracking-widest text-sm uppercase">
                  Cloud-Enabled Elderly Care Safety
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {panicImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(autoRescueImages.length + idx)}
                    className="group relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm"
                  >
                    <img
                      src={src}
                      alt={`Panic Button ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>

              {/* Feature List (Added for Balance) */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-light dark:text-muted-dark">
                {[
                  "One-touch instant alert mechanism for elderly safety",
                  "Real-time Cloud Integration for data logging",
                  "Immediate SMS & Call notifications to caregivers",
                  "Wearable, compact, and user-friendly design",
                  "Low-latency response for critical medical situations",
                  "Seamless integration with mobile applications",
                ].map((feat, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-accent mt-1 shrink-0" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialAchievements;
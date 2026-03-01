"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/destinations/badrinath.jpg",
    alt: "Majestic Badrinath Temple",
  },
  {
    src: "/destinations/kedarnath.jpg",
    alt: "Holy Kedarnath Shrine",
  },
  {
    src: "/destinations/auli.jpg",
    alt: "Auli Snow Adventure",
  },
  {
    src: "/destinations/jim-corbett.jpg",
    alt: "Wildlife at Jim Corbett",
  },
  {
    src: "/destinations/valley-of-flowers.jpg",
    alt: "Valley of Flowers Bloom",
  },
  {
    src: "/destinations/haridwar.jpg",
    alt: "Haridwar Ganga Aarti",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="absolute inset-0 bg-slate-900 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.8, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100) prevSlide();
            else if (info.offset.x < -100) nextSlide();
          }}
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60 z-10" />

      {/* Navigation Controls - Hidden on touch devices, shown on hover for desktop */}
      <div className="hidden md:flex absolute inset-0 z-20 items-center justify-between px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full bg-black/20 backdrop-blur-xl text-white hover:bg-green-600 pointer-events-auto transition-all transform hover:scale-110 active:scale-95 border border-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-black/20 backdrop-blur-xl text-white hover:bg-green-600 pointer-events-auto transition-all transform hover:scale-110 active:scale-95 border border-white/10"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Progress Indicators - Adjusted for mobile touch targets */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4 pointer-events-auto px-4 py-2 rounded-full bg-black/10 backdrop-blur-sm">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === index ? "w-8 md:w-12 bg-green-500" : "w-2 md:w-3 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef } from "react";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface JourneyVideoProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
}

export default function JourneyVideo({ videoUrl, thumbnail, title }: JourneyVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleModal = () => setIsOpen(!isOpen);
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Horizontal Cinematic Thumbnail */}
      <div className="flex flex-col gap-2 mt-6">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
          Journey Video
        </span>
        <button
          onClick={toggleModal}
          className="relative group w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm cursor-pointer"
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
              <Play className="text-white fill-white ml-1" size={20} />
            </div>
          </div>
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg">
                  Watch Journey
              </span>
          </div>
        </button>
      </div>

      {/* Video Portal / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />

              {/* Controls Overlay */}
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-center pointer-events-auto">
                  <button
                    onClick={toggleModal}
                    className="w-10 h-10 md:w-12 md:h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-black/40"
                  >
                    <X size={20} />
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 md:w-12 md:h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-black/40"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>

                <div className="space-y-1 md:space-y-3 pointer-events-none">
                  <div className="inline-flex items-center gap-2 bg-green-600 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-[9px] font-black uppercase tracking-widest leading-none">
                      Journey Leg
                    </span>
                  </div>
                  <h3 className="text-white font-black italic uppercase tracking-tighter text-xl md:text-3xl leading-none drop-shadow-2xl">
                    {title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Eye, Shield, Landmark } from 'lucide-react';

interface TombHeaderProps {
  onExploreClick: () => void;
}

export default function TombHeader({ onExploreClick }: TombHeaderProps) {
  // Use the generated image path
  const headerImgUrl = "/src/assets/images/egyptian_tomb_sarcophagus_1781879398600.jpg";

  return (
    <header className="relative w-full h-[65vh] md:h-[85vh] bg-[#0a0908] overflow-hidden flex flex-col justify-between" id="tomb-hero-header">
      {/* Background Cinematic image + vignette shadow */}
      <div className="absolute inset-0 z-0">
        <img
          src={headerImgUrl}
          alt="Ancient Egyptian Tomb Sarcophagus"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-85 scale-102 filter brightness-[0.7] contrast-[1.05]"
        />
        {/* Subtle horizontal blur vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-transparent to-[#0a0908]/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      </div>

      {/* Top Navigation bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between">
        {/* Brand/Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <Landmark className="h-5 w-5 text-[#e5c158]" />
          <span className="font-cinzel text-sm font-bold tracking-[0.25em] text-[#f5f1ea]">
            CREED OF THE NILE
          </span>
        </motion.div>

        {/* Floating Menu links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em] text-[#f5f1ea]/60">
          <a href="#leap-of-faith-stage" className="hover:text-[#e5c158] transition-colors duration-200">HISTORIC OVERVIEW</a>
          <a href="#plot-role-stage" className="hover:text-[#e5c158] transition-colors duration-200">HERO DOSSIERS</a>
          <span className="text-[#f5f1ea]/15">|</span>
          <span className="text-[#e5c158] font-semibold bg-[#e5c158]/5 px-2.5 py-1 border border-[#e5c158]/15 rounded">
            ANIMUS ACTIVE
          </span>
        </nav>
      </div>

      {/* Hero Title details */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-24">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-[1px] w-12 bg-[#e5c158]/50" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#e5c158] uppercase">
              REVEALING THE PRECURSOR TOMBS
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-black text-[#f5f1ea] tracking-tight leading-[1.1] mb-6"
          >
            THE LOST SANCTUM <br />
            OF OLD MEMPHIS
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-playfair text-sm md:text-base text-[#f5f1ea]/75 italic leading-relaxed mb-8 max-w-lg"
          >
            Buried under centuries of burning desert sand lies the golden sarcophagus, holding silent secrets of ancient mummification rites and precursor technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <button
              onClick={onExploreClick}
              className="group flex items-center gap-3 bg-[#e5c158] hover:bg-[#ebd593] text-[#11100e] px-6 py-3.5 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-sm shadow-lg shadow-[#e5c158]/10 transition-all duration-300 transform hover:-translate-y-0.5"
              id="btn-hero-explore"
            >
              <Eye className="h-4 w-4" />
              <span>EXPLORE THE TOMB</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative torn edge / paper-crease styled border at bottom to separate Tomb from Leap of Faith */}
      <div className="relative z-10 w-full h-8 bg-gradient-to-t from-[#fcfbfa] to-transparent pointer-events-none" />
    </header>
  );
}

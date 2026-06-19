import React from 'react';
import { motion } from 'motion/react';
import { Download, Bookmark, ArrowRight, ShieldCheck, Compass, Info } from 'lucide-react';
import { CodexEntry } from '../types';
import { CODEX_ENTRIES } from '../data/codex';

interface LeapOfFaithProps {
  onOpenCodex: (entry: CodexEntry) => void;
}

export default function LeapOfFaithSection({ onOpenCodex }: LeapOfFaithProps) {
  const diverImgUrl = "/src/assets/images/leap_of_faith_diver_1781879415380.jpg";

  // Coordinates of our interactive gold buttons
  const mapHotspots = [
    {
      id: 'giza_pyramids',
      top: '25%',
      left: '42%',
      label: 'Giza Plateau Landmark',
      entry: CODEX_ENTRIES.find(e => e.id === 'giza_pyramids')!
    },
    {
      id: 'mummification',
      top: '55%',
      left: '58%',
      label: 'Sarcophagus embalming',
      entry: CODEX_ENTRIES.find(e => e.id === 'mummification')!
    },
    {
      id: 'brotherhood',
      top: '78%',
      left: '36%',
      label: 'Precursor Sanctum Seal',
      entry: CODEX_ENTRIES.find(e => e.id === 'brotherhood')!
    }
  ];

  return (
    <section 
      className="relative w-full py-16 md:py-24 bg-[#fbf9f5] text-[#1c1a17] overflow-hidden border-b border-[#1c1a17]/5" 
      id="leap-of-faith-stage"
    >
      {/* Visual background lines and geometric grids representing a combined parchment / digital map interface */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1c1a17]/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#1c1a17_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      {/* Parallax decorative floating bird icons */}
      <div className="absolute top-1/4 right-[8%] opacity-35 animate-bounce-slow">
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[#1c1a17]">
          <path d="M0 6C6 6 10 1 12 0C14 1 18 6 24 6C18 6 15 3 12 2C9 3 6 6 0 6Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-[6%] opacity-20 scale-75">
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[#1c1a17]">
          <path d="M0 6C6 6 10 1 12 0C14 1 18 6 24 6C18 6 15 3 12 2C9 3 6 6 0 6Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch relative">
        
        {/* ================= LEFT SIDE COLUMN (Editorial & Brand Info) ================= */}
        <div className="lg:col-span-4 flex flex-col justify-between py-2 border-r border-[#1c1a17]/5 lg:pr-8">
          <div>
            {/* Age Rating Badge exactly as requested in original style */}
            <div className="flex items-center gap-3 mb-10" id="age-rating-sticker">
              <div className="h-10 w-10 border border-[#1c1a17] flex flex-col items-center justify-center font-bold text-sm bg-transparent rounded-sm">
                <span className="leading-none text-base">18</span>
                <span className="text-[7px] leading-none uppercase tracking-tighter">RESTRICTED</span>
              </div>
              <div className="text-[10px] font-mono leading-tight tracking-[0.15em] text-[#1c1a17]/60">
                <p>LIMITED DISTRIBUTION</p>
                <p className="text-[#c09930]">CRITICAL PRECURSOR CONTENTS</p>
              </div>
            </div>

            {/* Main Header Stack */}
            <div className="space-y-4 mb-10">
              <span className="font-mono text-[9px] text-[#c09930] tracking-[0.3em] font-semibold block uppercase">
                CRITICAL ASSASSIN PROTOCOLS
              </span>
              <h2 className="font-cinzel text-3xl font-extrabold tracking-tight text-[#1c1a17] uppercase leading-[1.05]">
                EXPLORING MYSTERIOUS <br />
                <span className="text-[#c09930] font-black">ANCIENT EGYPT</span>
              </h2>
              <div className="h-px w-20 bg-[#c09930]/30" />
            </div>

            {/* Descriptive blocks - Replicating structured typography layout */}
            <div className="space-y-6 text-[#1c1a17]/75 font-sans font-light text-xs md:text-sm leading-relaxed mb-10 pr-2">
              <p className="font-playfair italic text-sm text-[#1c1a17]/95">
                "We walk in the dark to serve the light. From the high heights of Alexandria to the underground tombs of Giza, the Leap of Faith is our eternal vow."
              </p>
              <div className="border-l border-[#c09930]/45 pl-4 font-mono text-[11px] space-y-2 text-[#1c1a17]/60">
                <p>▸ EXTRACT MEMORY PHASES: RECONSTRUCT GIZA DIARIES</p>
                <p>▸ RITUAL SEQUENCES: HIGH PRECISION DIVE CORRECTION</p>
                <p>▸ SYNCHRONIZATION STATUS: 98.4% STABLE</p>
              </div>
            </div>
          </div>

          {/* Checkout / Store CTA section */}
          <div className="pt-6 border-t border-[#1c1a17]/5 space-y-4">
            <span className="font-mono text-[9px] tracking-widest text-[#1c1a17]/40 block uppercase">
              PRE-RELEASE LICENSE SECURED
            </span>
            <div className="bg-[#1c1a17] text-[#fbf9f5] p-5 rounded-sm flex items-center justify-between shadow-md">
              <div className="space-y-1">
                <p className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#e5c158]">
                  DOWNLOAD DEMO
                </p>
                <p className="text-[9px] font-mono text-[#fbf9f5]/50">
                  AVAILABLE ON PLAYSTATION® 5
                </p>
              </div>
              <button 
                onClick={() => alert("Simulating playstation live store acquisition...")}
                className="flex items-center justify-center h-10 px-4 bg-[#e5c158] hover:bg-[#ebd593] text-[#1c1a17] font-mono text-[10px] font-bold tracking-widest uppercase transition-colors rounded-sm"
                id="btn-store-dl"
              >
                <Download className="h-4 w-4 mr-1.5" />
                MORE
              </button>
            </div>
          </div>
        </div>

        {/* ================= CORES CENTER STAGE (Interactive Diving Asset) ================= */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[500px]">
          
          {/* Main Visual framed under aesthetic borders */}
          <div className="relative w-full max-w-[340px] aspect-[3/4] bg-[#f0ede6] border-2 border-[#1c1a17]/10 p-2 shadow-2xl relative group">
            
            {/* Visual crop lines (the corner widgets representing camera coordinates) */}
            <div className="absolute top-[-5px] left-[-5px] h-3 w-3 border-t-2 border-l-2 border-[#c09930]" />
            <div className="absolute top-[-5px] right-[-5px] h-3 w-3 border-t-2 border-r-2 border-[#c09930]" />
            <div className="absolute bottom-[-5px] left-[-5px] h-3 w-3 border-b-2 border-l-2 border-[#c09930]" />
            <div className="absolute bottom-[-5px] right-[-5px] h-3 w-3 border-b-2 border-r-2 border-[#c09930]" />

            <div className="w-full h-full overflow-hidden relative rounded-sm">
              <img
                src={diverImgUrl}
                alt="Assassin performing spectacular Leap of Faith"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle vignette layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1916]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* ================= CHECKPOINT HOTSPOTS ================= */}
            {mapHotspots.map((point) => (
              <button
                key={point.id}
                onClick={() => onOpenCodex(point.entry)}
                style={{ top: point.top, left: point.left }}
                className="absolute z-20 flex h-7 w-7 items-center justify-center transform -translate-x-1/2 -translate-y-1/2 group"
                id={`btn-hotspot-${point.id}`}
                title={point.label}
              >
                {/* Pulsing indicator ring */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#11100e] opacity-75 animate-ping" />
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#e5c158] opacity-35" />
                {/* Central Diamond node */}
                <div className="relative h-2.5 w-2.5 transform rotate-45 bg-[#1c1a17] border border-[#e5c158] shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-125" />
                
                {/* Hover indicator tooltip */}
                <span className="absolute whitespace-nowrap bg-[#1c1a17] text-[#fbf9f5] font-mono text-[9px] tracking-wider py-1 px-2.5 rounded top-full mt-1.5 opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow">
                  CODEX: {point.entry.title.toUpperCase()}
                </span>
              </button>
            ))}
          </div>

          {/* Informational Hint under image */}
          <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono text-[#1c1a17]/50 tracking-wider">
            <Info className="h-3 w-3 text-[#c09930]" />
            <span>CLICK ON GOLD DOTS FOR HISTORIC CODEX</span>
          </div>
        </div>

        {/* ================= RIGHT SIDE COLUMN (Calligraphy & Codex Index Selector) ================= */}
        <div className="lg:col-span-3 flex flex-col justify-between py-2 border-l border-[#1c1a17]/5 lg:pl-8">
          
          {/* Top aesthetic calligraphy in original image (Arabic / Multilingual Layout) */}
          <div className="space-y-6">
            <div className="text-right">
              {/* Arabic-styled watermark from original design */}
              <p className="font-serif text-[#1c1a17]/10 text-3xl select-none leading-none tracking-normal mb-1 font-cinzel">
                ديرك زناسا
              </p>
              <span className="text-[8px] font-mono tracking-widest text-[#1c1a17]/35 uppercase block">
                MEMORIA // ANUBIS MATRIX
              </span>
            </div>

            {/* Japanese aesthetic heading */}
            <div className="space-y-2 pt-4 border-t border-[#1c1a17]/5">
              <h4 className="font-serif font-black text-[#1c1a17]/80 tracking-widest text-lg font-cinzel">
                沌の廃都イザリス
              </h4>
              <p className="text-[10px] font-mono tracking-widest text-[#1c1a17]/50 uppercase">
                THE RUINED CAPITALS OF KA
              </p>
              <p className="text-[11px] font-light leading-relaxed text-[#1c1a17]/70 font-sans">
                A historical documentation regarding deep excavations in search of mummified pharaoh remnants. Secrets wait beneath the burning debris.
              </p>
            </div>
          </div>

          {/* Interactive codex index list mimicking the vertical scroll meter in the design */}
          <div className="pt-8 border-t border-[#1c1a17]/5">
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#c09930] block uppercase mb-4">
              HISTORIC CHRONOLOGY INDEX
            </span>
            
            <div className="space-y-3">
              {CODEX_ENTRIES.map((entry) => (
                <div 
                  key={entry.id}
                  onClick={() => onOpenCodex(entry)}
                  className="flex items-center justify-between p-3 rounded border border-[#1c1a17]/5 hover:border-[#c09930]/30 hover:bg-[#e5c158]/5 transition-all duration-300 cursor-pointer group"
                  id={`btn-sidebar-codex-${entry.id}`}
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-[#1c1a17]/40 block group-hover:text-[#c09930] transition-colors">
                      {entry.year}
                    </span>
                    <span className="font-sans text-xs font-semibold tracking-tight text-[#1c1a17]/85 block group-hover:text-[#1c1a17] transition-colors truncate max-w-[150px]">
                      {entry.title}
                    </span>
                  </div>
                  <Bookmark className="h-3.5 w-3.5 text-[#1c1a17]/20 group-hover:text-[#c09930] transition-all" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

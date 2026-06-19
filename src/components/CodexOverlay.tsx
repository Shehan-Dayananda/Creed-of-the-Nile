import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert, Compass, Calendar, Globe } from 'lucide-react';
import { CodexEntry } from '../types';

interface CodexOverlayProps {
  entry: CodexEntry | null;
  onClose: () => void;
}

export default function CodexOverlay({ entry, onClose }: CodexOverlayProps) {
  return (
    <AnimatePresence>
      {entry && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-md">
          {/* Backdrop Click Dismiss */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Sliding Content Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative z-10 flex h-full w-full max-w-xl flex-col bg-[#11100e] text-[#f5f1ea] border-l border-[#d4af37]/20 p-8 shadow-2xl md:p-12"
            id={`codex-drawer-${entry.id}`}
          >
            {/* Background Holographic lines and grid patterns (Animus vibe) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(212,175,55,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute bottom-10 right-10 pointer-events-none opacity-5 font-mono text-9xl select-none text-[#d4af37]">
              {entry.category.substring(0, 3)}
            </div>

            {/* Header Controls */}
            <div className="flex items-center justify-between border-b border-[#f5f1ea]/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#e5c158]/10 text-[#e5c158] border border-[#e5c158]/30 px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                  {entry.category}
                </span>
                <span className="font-mono text-[10px] text-[#f5f1ea]/40 tracking-widest hidden sm:inline">
                  ANIMUS DATABASE // SEC.08
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5f1ea]/10 hover:border-[#e5c158] hover:text-[#e5c158] transition-colors duration-300"
                id="btn-close-codex"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Content Areas */}
            <div className="flex-1 overflow-y-auto py-8 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <span className="font-mono text-xs text-[#e5c158] tracking-[0.2em] uppercase block mb-1">
                {entry.subtitle}
              </span>
              <h2 className="font-sans text-3xl font-black tracking-tight text-[#f5f1ea] leading-tight mb-6 font-cinzel">
                {entry.title}
              </h2>

              {/* Historic Specs Panel */}
              <div className="grid grid-cols-2 gap-4 border-y border-[#f5f1ea]/5 py-6 mb-8 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded bg-[#e5c158]/5 border border-[#e5c158]/10">
                    <Calendar className="h-4.5 w-4.5 text-[#e5c158]" />
                  </div>
                  <div>
                    <span className="text-[#f5f1ea]/30 block text-[9px] tracking-wider uppercase">HISTORIC PERIOD</span>
                    <span className="text-[#f5f1ea]/90 font-medium">{entry.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded bg-[#e5c158]/5 border border-[#e5c158]/10">
                    <Compass className="h-4.5 w-4.5 text-[#e5c158]" />
                  </div>
                  <div>
                    <span className="text-[#f5f1ea]/30 block text-[9px] tracking-wider uppercase">SECTOR LOCATION</span>
                    <span className="text-[#f5f1ea]/90 font-medium truncate max-w-[170px] block">{entry.location}</span>
                  </div>
                </div>
              </div>

              {/* Core Description Text */}
              <p className="text-sm font-sans text-[#f5f1ea]/70 leading-relaxed font-playfair italic pl-4 border-l-2 border-[#e5c158] mb-8">
                "{entry.shortDesc}"
              </p>

              {/* Historical Background */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-[10px] text-[#e5c158] tracking-widest uppercase mb-3">
                    HISTORICAL ASSESSMENT
                  </h3>
                  <div className="space-y-4 text-sm text-[#f5f1ea]/85 leading-relaxed font-sans font-light">
                    {entry.longDesc.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Geolocation coordinates */}
            <div className="border-t border-[#f5f1ea]/5 pt-6 flex items-center justify-between text-[11px] font-mono text-[#f5f1ea]/40">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Globe className="h-3.5 w-3.5 text-[#e5c158]/40 animate-spin-slow" />
                {entry.coordinates}
              </span>
              <span>SYNCHRONIZED // 100%</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

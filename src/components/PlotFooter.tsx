import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Users, Crosshair, Award } from 'lucide-react';
import { CharacterDossier } from '../types';
import { CHARACTER_DOSSIERS } from '../data/codex';

export default function PlotFooter() {
  const [selectedCharId, setSelectedCharId] = useState<string>('bayek');
  const footerImgUrl = "/src/assets/images/assassin_oasis_eagle_1781879427617.jpg";

  const selectedChar = CHARACTER_DOSSIERS.find(c => c.id === selectedCharId) || CHARACTER_DOSSIERS[0];

  return (
    <footer 
      className="relative w-full bg-[#11100e] text-[#f5f1ea] overflow-hidden border-t-2 border-[#1c1a17]/20 py-16 md:py-24" 
      id="plot-role-stage"
    >
      {/* Background Cave framing representation */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerImgUrl}
          alt="Assassin cave looking at river oasis"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 filter brightness-[0.55] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#11100e] via-[#11100e]/80 to-[#070605]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* ================= LEFT SIDE: Character Dossier Display Panel ================= */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Header / Caption */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-[#e5c158]" />
              <h3 className="font-cinzel text-xl md:text-2xl font-black tracking-[0.25em] text-[#e5c158] uppercase">
                PLOT AND ROLE
              </h3>
            </div>

            {/* Dossier Tabs */}
            <div className="flex gap-2.5 pb-4 mb-8 overflow-x-auto border-b border-[#f5f1ea]/15">
              {CHARACTER_DOSSIERS.map((char) => (
                <button
                  key={char.id}
                  onClick={() => setSelectedCharId(char.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 border-b-2 whitespace-nowrap ${
                    selectedCharId === char.id
                      ? 'border-[#e5c158] text-[#e5c158] bg-[#e5c158]/5'
                      : 'border-transparent text-[#f5f1ea]/45 hover:text-[#f5f1ea]/80'
                  }`}
                  id={`btn-dossier-tab-${char.id}`}
                >
                  {char.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Selected Character Animated Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedChar.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="font-mono text-[9px] text-[#e5c158]/60 tracking-wider block uppercase">
                    {selectedChar.role}
                  </span>
                  <h4 className="font-cinzel text-2xl font-bold tracking-wide text-[#f5f1ea]">
                    {selectedChar.name}
                  </h4>
                </div>

                <p className="font-playfair text-sm leading-relaxed text-[#f5f1ea]/80 pl-4 border-l-2 border-[#e5c158]/35 italic">
                  {selectedChar.quote}
                </p>

                <p className="text-xs md:text-sm font-sans font-light leading-relaxed text-[#f5f1ea]/70">
                  {selectedChar.bio}
                </p>

                {/* Tactical specifications list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#f5f1ea]/5 font-mono text-[11px] text-[#f5f1ea]/85">
                  <div className="space-y-2">
                    <span className="text-[#e5c158]/50 text-[10px] tracking-wider block uppercase">ALLEGIANCE FRACTURE</span>
                    <div className="flex items-center gap-2">
                      <Shield className="h-3.5 w-3.5 text-[#e5c158]" />
                      <span>{selectedChar.allegiance}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[#e5c158]/50 text-[10px] tracking-wider block uppercase">TACTICAL WEAPONRY</span>
                    <ul className="list-disc list-inside space-y-1 text-[#f5f1ea]/70">
                      {selectedChar.weapons.slice(0, 3).map((w, index) => (
                        <li key={index}>{w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-8 border-t border-[#f5f1ea]/5 text-[10px] font-mono text-[#f5f1ea]/30 tracking-widest flex justify-between">
            <span>SECURE DOSSIERS // SYSTEM_VERSION_3.02</span>
            <span>VOICED BY PROFESSIONAL CAST</span>
          </div>
        </div>

        {/* ================= RIGHT SIDE: Visual Card with subtle lines ================= */}
        <div className="lg:col-span-5 flex flex-col justify-between border-l border-[#f5f1ea]/10 lg:pl-10">
          <div className="space-y-6">
            <span className="font-mono text-[10px] text-[#e5c158] tracking-widest uppercase block">
              SYNOPSIS HISTORICA
            </span>
            <div className="space-y-4 text-xs md:text-sm font-sans font-light text-[#f5f1ea]/75 leading-relaxed">
              <p>
                Alexandria sits in a fragile status quo. Julius Caesar, Egypt's temporary guest, has formed an alliance with Cleopatra VII to secure control over the Mediterranean rim, while Rome's legions occupy deep oases.
              </p>
              <p>
                In the shadows, the Medjay Bayek fights to release his homeland from the puppet hands of Ptolemy XIII's advisors. By forming the Hidden Ones Bureau, they begin a silent war that will define the destiny of centuries.
              </p>
            </div>
          </div>

          {/* Dynamic interactive metric / stats visualization */}
          <div className="mt-8 bg-transparent border border-[#e5c158]/20 p-5 rounded font-mono text-[11px]">
            <span className="text-[#e5c158] text-[9px] tracking-widest block uppercase mb-4">
              BROTHERHOOD DISCIPLINE INDEX
            </span>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[#f5f1ea]/70 mb-1">
                  <span>DISCRETION TENET</span>
                  <span>100%</span>
                </div>
                <div className="h-1 bg-white/5 rounded">
                  <div className="h-1 bg-[#e5c158] rounded transition-all duration-1000" style={{ width: '100%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[#f5f1ea]/70 mb-1">
                  <span>PRESERVE FREEWILL</span>
                  <span>95%</span>
                </div>
                <div className="h-1 bg-white/5 rounded">
                  <div className="h-1 bg-[#e5c158] rounded transition-all duration-1000" style={{ width: '95%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[#f5f1ea]/70 mb-1">
                  <span>SYNCHRONIZED ARCHIVE STATUS</span>
                  <span>STABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import TombHeader from './components/TombHeader';
import LeapOfFaithSection from './components/LeapOfFaithSection';
import PlotFooter from './components/PlotFooter';
import AudioController from './components/AudioController';
import CodexOverlay from './components/CodexOverlay';
import { CodexEntry } from './types';
import { CODEX_ENTRIES } from './data/codex';

export default function App() {
  const [activeCodexEntry, setActiveCodexEntry] = useState<CodexEntry | null>(null);

  const handleOpenCodex = (entry: CodexEntry) => {
    setActiveCodexEntry(entry);
  };

  const handleExploreTomb = () => {
    // Automatically trigger the pyramid/tomb historical entry to show on click
    const GizaEntry = CODEX_ENTRIES.find(e => e.id === 'giza_pyramids');
    if (GizaEntry) {
      setActiveCodexEntry(GizaEntry);
    }
  };

  return (
    <div className="min-h-screen bg-[#11100e] text-[#f5f1ea] selection:bg-[#e5c158] selection:text-[#11100e]">
      {/* Immersive sound controllers and ambient synthesizers */}
      <AudioController />

      {/* Hero Section Banner */}
      <TombHeader onExploreClick={handleExploreTomb} />

      {/* Leap of Faith Main Visual and timelines */}
      <LeapOfFaithSection onOpenCodex={handleOpenCodex} />

      {/* Characters and historical plot summaries */}
      <PlotFooter />

      {/* Sliding full height details panel overlay */}
      <CodexOverlay 
        entry={activeCodexEntry} 
        onClose={() => setActiveCodexEntry(null)} 
      />
    </div>
  );
}

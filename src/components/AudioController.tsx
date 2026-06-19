import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Wind, Cpu } from 'lucide-react';

export default function AudioController() {
  const [isPlayingWind, setIsPlayingWind] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  
  // Wind synthesis nodes
  const windNodeRef = useRef<AudioWorkletNode | ScriptProcessorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  
  // Initialize standard audio context
  const getAudioContext = (): AudioContext => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtxRef.current;
  };

  // Synthesize dynamic desert wind using lowpass filtered White/Brown/Pink noise
  const startWind = () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Safe buffer size
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      
      // Generate Brownian/Pink-ish noise for high-fidelity wind
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brownian filter approximation
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        // Amplify slightly
        output[i] *= 3.5;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      // Filter to simulate howling wind resonances
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      // Dedicated gain node for the ambient wind
      const windGain = ctx.createGain();
      windGain.gain.setValueAtTime(isMuted ? 0 : 0.08, ctx.currentTime);

      noiseSource.connect(filter);
      filter.connect(windGain);
      windGain.connect(ctx.destination);

      noiseSource.start(0);

      // Retain references to animate frequency
      windNodeRef.current = noiseSource as any;
      filterRef.current = filter;
      gainNodeRef.current = windGain;
      setIsPlayingWind(true);

      // Slowly mutate the filter frequency to simulate gusty wind
      const windAnimateInterval = setInterval(() => {
        if (filterRef.current && ctx.state !== 'suspended' && !isMuted) {
          const targetFreq = 180 + Math.random() * 280;
          const targetQ = 1.5 + Math.random() * 3;
          const now = ctx.currentTime;
          filterRef.current.frequency.exponentialRampToValueAtTime(targetFreq, now + 1.8);
          filterRef.current.Q.exponentialRampToValueAtTime(targetQ, now + 1.8);
        }
      }, 2000);

      (noiseSource as any)._intervalId = windAnimateInterval;

    } catch (e) {
      console.error("Audio Context Failed to initialize:", e);
    }
  };

  const stopWind = () => {
    if (windNodeRef.current) {
      try {
        const source = windNodeRef.current as any;
        source.stop();
        if (source._intervalId) {
          clearInterval(source._intervalId);
        }
      } catch (e) {}
      windNodeRef.current = null;
    }
    setIsPlayingWind(false);
  };

  // Play synthetic "Animus Hologram" sound effects
  const playSoundEffect = (type: 'click' | 'hover' | 'sweep' | 'startup') => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended' || isMuted) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        // Crisp electronic tap
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'hover') {
        // Very soft, high tap
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, now);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'sweep') {
        // Animus sweep noise
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.25);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.linearRampToValueAtTime(0.03, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'startup') {
        // Epic Animus grid startup notification chord
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.6);
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(330, now);
        osc2.frequency.exponentialRampToValueAtTime(660, now + 0.6);

        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        gain2.gain.setValueAtTime(0.02, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

        osc.start(now);
        osc2.start(now);
        osc.stop(now + 0.6);
        osc2.stop(now + 0.6);
      }
    } catch (e) {}
  };

  // Attach global click sounds
  useEffect(() => {
    const handleGlobalClick = () => {
      playSoundEffect('click');
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [isMuted]);

  // Handle Mute toggle
  const toggleMute = () => {
    const newValue = !isMuted;
    setIsMuted(newValue);
    if (gainNodeRef.current) {
      const targetGain = newValue ? 0 : 0.08;
      if (audioCtxRef.current) {
        gainNodeRef.current.gain.setValueAtTime(targetGain, audioCtxRef.current.currentTime);
      }
    }
  };

  const handleWindToggle = () => {
    if (isPlayingWind) {
      stopWind();
    } else {
      startWind();
      playSoundEffect('startup');
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
      <button
        onClick={handleWindToggle}
        className={`flex h-11 items-center gap-2 rounded-full px-4 border text-xs font-mono tracking-widest transition-all duration-300 shadow-md ${
          isPlayingWind 
            ? 'bg-[#1c1a17] text-[#e5c158] border-[#e5c158]/50 shadow-[#e5c158]/10' 
            : 'bg-white/80 backdrop-blur-sm text-[#1c1a17]/75 border-[#1c1a17]/10 hover:border-[#1c1a17]/30'
        }`}
        id="btn-wind-ambient"
      >
        <Wind className={`h-4 w-4 ${isPlayingWind ? 'animate-pulse' : ''}`} />
        <span>{isPlayingWind ? 'DESERT AMBIENT ON' : 'PLAY AMBIENT'}</span>
      </button>

      {isPlayingWind && (
        <button
          onClick={toggleMute}
          className="flex h-11 w-11 items-center justify-center rounded-full border bg-white/80 backdrop-blur-sm text-[#1c1a17]/85 border-[#1c1a17]/10 hover:border-[#1c1a17]/30 shadow-md transition-all duration-300"
          id="btn-sound-mute"
        >
          {isMuted ? <VolumeX className="h-4 w-4 text-red-500" /> : <Volume2 className="h-4 w-4 text-[#e5c158]" />}
        </button>
      )}
    </div>
  );
}

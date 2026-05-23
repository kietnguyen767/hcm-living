"use client";

import * as React from "react";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";

interface AudioPlayerProps {
  textToNarrate: string;
  title: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ textToNarrate, title }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [pitch, setPitch] = React.useState(1);
  const [rate, setRate] = React.useState(0.9); // Speech speed slightly slower for clarity

  const utteranceRef = React.useRef<SpeechSynthesisUtterance | null>(null);
  const progressIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Stop speech synthesis when component unmounts
  React.useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const startProgressTracking = (estimatedDurationSec: number) => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    let elapsed = 0;
    const intervalTime = 200; // ms
    
    progressIntervalRef.current = setInterval(() => {
      elapsed += intervalTime / 1000;
      const calculatedProgress = Math.min((elapsed / estimatedDurationSec) * 100, 100);
      setProgress(calculatedProgress);
      
      if (calculatedProgress >= 100) {
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        setIsPlaying(false);
        setProgress(0);
      }
    }, intervalTime);
  };

  const handlePlayPause = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      alert("Trình duyệt của bạn không hỗ trợ đọc giọng nói.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
        // Estimate remaining time for progress tracking
        const estimatedTotalDuration = textToNarrate.split(" ").length * 0.45; // ~0.45 sec per word
        const remainingDuration = estimatedTotalDuration * (1 - progress / 100);
        startProgressTracking(remainingDuration);
      } else {
        window.speechSynthesis.cancel();

        // Create new utterance
        // Filter out markdown characters
        const cleanText = textToNarrate.replace(/[#*`_-]/g, "");
        const utterance = new SpeechSynthesisUtterance(cleanText);
        
        // Find a Vietnamese voice if available
        const voices = window.speechSynthesis.getVoices();
        const viVoice = voices.find((voice) => voice.lang.startsWith("vi"));
        if (viVoice) {
          utterance.voice = viVoice;
        }
        
        utterance.lang = "vi-VN";
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = isMuted ? 0 : 1;

        utterance.onend = () => {
          setIsPlaying(false);
          setProgress(0);
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
          setProgress(0);
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);

        const estimatedDuration = cleanText.split(" ").length * 0.45; 
        startProgressTracking(estimatedDuration);
      }
    }
  };

  const handleMuteToggle = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setIsMuted(!isMuted);
      // Modern speech synthesis handles volume on current utterance
      if (utteranceRef.current) {
        utteranceRef.current.volume = !isMuted ? 0 : 1;
      }
    }
  };

  const handleReset = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setProgress(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 rounded-xl border border-brand-outline/25 bg-brand-paper/5 backdrop-blur-md w-full max-w-lg mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">Giọng nói thuyết minh</span>
          <span className="text-sm font-bold text-brand-paper line-clamp-1">{title}</span>
        </div>
        {/* Animated wave visualizer when playing */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-6">
            <div className="w-1 bg-brand-gold animate-bounce h-3" style={{ animationDelay: "0.1s" }} />
            <div className="w-1 bg-brand-gold animate-bounce h-5" style={{ animationDelay: "0.3s" }} />
            <div className="w-1 bg-brand-gold animate-bounce h-2" style={{ animationDelay: "0.2s" }} />
            <div className="w-1 bg-brand-gold animate-bounce h-4" style={{ animationDelay: "0.4s" }} />
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-brand-paper/10 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-brand-gold h-full rounded-full transition-all duration-200" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Audio Controls */}
      <div className="flex items-center justify-between gap-4 mt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlayPause}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary hover:bg-[#80001f] text-white shadow-lg cursor-pointer"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </button>
          <button
            onClick={handleReset}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-paper/10 border border-brand-outline/25 text-brand-paper/85 hover:text-white cursor-pointer"
            title="Đọc lại từ đầu"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        {/* Speed Adjustment */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-brand-paper/50 font-bold uppercase tracking-wider">Tốc độ:</span>
          <select
            value={rate}
            onChange={(e) => {
              setRate(parseFloat(e.target.value));
              handleReset();
            }}
            className="bg-brand-ebony border border-brand-outline/25 rounded-lg text-xs text-brand-paper/85 py-1 px-1.5 outline-none cursor-pointer"
          >
            <option value="0.7">Chậm</option>
            <option value="0.9">Vừa phải</option>
            <option value="1.1">Nhanh</option>
          </select>
        </div>

        {/* Volume Mute */}
        <button
          onClick={handleMuteToggle}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-paper/10 border border-brand-outline/25 text-brand-paper/85 hover:text-white cursor-pointer"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

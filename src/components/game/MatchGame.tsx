"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { matchGamePairs, MatchPair } from "@/data/gamesData";
import { shuffleArray } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckCircle2, RotateCcw, AlertCircle, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export const MatchGame: React.FC = () => {
  const { toast } = useToast();
  const [pairs, setPairs] = React.useState<MatchPair[]>([]);
  const [leftItems, setLeftItems] = React.useState<string[]>([]);
  const [rightItems, setRightItems] = React.useState<string[]>([]);
  
  const [selectedLeft, setSelectedLeft] = React.useState<string | null>(null);
  const [selectedRight, setSelectedRight] = React.useState<string | null>(null);
  
  const [matchedLefts, setMatchedLefts] = React.useState<Set<string>>(new Set());
  const [matchedRights, setMatchedRights] = React.useState<Set<string>>(new Set());
  const [wrongLeft, setWrongLeft] = React.useState<string | null>(null);
  const [wrongRight, setWrongRight] = React.useState<string | null>(null);

  const [score, setScore] = React.useState(0);
  const [moves, setMoves] = React.useState(0);
  const [currentExplanation, setCurrentExplanation] = React.useState<string>("");

  const initGame = React.useCallback(() => {
    const selectedPairs = shuffleArray(matchGamePairs).slice(0, 5);
    setPairs(selectedPairs);
    setLeftItems(shuffleArray(selectedPairs.map(p => p.left)));
    setRightItems(shuffleArray(selectedPairs.map(p => p.right)));
    
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedLefts(new Set());
    setMatchedRights(new Set());
    setWrongLeft(null);
    setWrongRight(null);
    setScore(0);
    setMoves(0);
    setCurrentExplanation("");
  }, []);

  React.useEffect(() => {
    initGame();
  }, [initGame]);

  const handleLeftSelect = (item: string) => {
    if (matchedLefts.has(item) || wrongLeft) return;
    setSelectedLeft(item);
    
    if (selectedRight) {
      checkMatch(item, selectedRight);
    }
  };

  const handleRightSelect = (item: string) => {
    if (matchedRights.has(item) || wrongRight) return;
    setSelectedRight(item);

    if (selectedLeft) {
      checkMatch(selectedLeft, item);
    }
  };

  const checkMatch = (leftVal: string, rightVal: string) => {
    setMoves(prev => prev + 1);
    
    const correctPair = pairs.find(p => p.left === leftVal && p.right === rightVal);
    
    if (correctPair) {
      setMatchedLefts(prev => new Set(prev).add(leftVal));
      setMatchedRights(prev => new Set(prev).add(rightVal));
      setSelectedLeft(null);
      setSelectedRight(null);
      setScore(prev => prev + 10);
      setCurrentExplanation(correctPair.explanation);
      toast("Đã ghép đúng!", "success", 1500);
    } else {
      setWrongLeft(leftVal);
      setWrongRight(rightVal);
      toast("Chưa chính xác!", "error", 1500);

      setTimeout(() => {
        setWrongLeft(null);
        setWrongRight(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 1000);
    }
  };

  const isGameOver = pairs.length > 0 && matchedLefts.size === pairs.length;

  return (
    <div className="w-full max-w-4xl mx-auto bg-brand-paper border border-brand-outline/35 p-6 sm:p-8 rounded-2xl shadow-sm shadow-[#1a0f0a]/5">
      {/* Game Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-outline-variant/30 pb-4 mb-6">
        <div>
          <h3 className="text-xl font-bold font-serif text-brand-primary">Trò chơi Ghép cặp Lịch sử</h3>
          <p className="text-xs text-brand-on-surface-variant font-light mt-0.5">Ghép địa danh/nhân vật ở cột trái với sự kiện/ý nghĩa phù hợp ở cột phải.</p>
        </div>
        <div className="flex gap-6 text-sm font-bold uppercase tracking-wider text-brand-on-surface-variant">
          <div>Điểm: <span className="text-brand-primary">{score}</span></div>
          <div>Lượt ghép: <span className="text-brand-on-surface">{moves}</span></div>
        </div>
      </div>

      {isGameOver ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary/10 border border-brand-gold/20 text-brand-gold mb-6 shadow-lg">
            <Sparkles className="h-8 w-8 animate-pulse" />
          </div>
          <h4 className="text-2xl font-bold font-serif text-brand-primary mb-2">Chúc mừng bạn đã hoàn thành!</h4>
          <p className="text-brand-on-surface-variant text-sm max-w-sm mb-6 font-light">Bạn đã ghép chính xác tất cả các cặp lịch sử với tổng số {moves} lượt.</p>
          <Button onClick={initGame} className="flex items-center gap-1.5 cursor-pointer">
            <RotateCcw className="h-4 w-4" />
            Chơi lại
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Items Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary mb-1">Địa danh / Nhân vật</h4>
              {leftItems.map((item) => {
                const isSelected = selectedLeft === item;
                const isMatched = matchedLefts.has(item);
                const isWrong = wrongLeft === item;

                let btnClass = "bg-brand-surface border-brand-outline-variant/60 text-brand-on-surface-variant hover:border-brand-outline hover:bg-brand-container";
                if (isMatched) {
                  btnClass = "bg-brand-tertiary/10 border-brand-tertiary text-brand-tertiary cursor-default opacity-80 pointer-events-none font-semibold shadow-sm shadow-brand-tertiary/5";
                } else if (isWrong) {
                  btnClass = "bg-brand-error/10 border-brand-error text-brand-error font-semibold animate-shake";
                } else if (isSelected) {
                  btnClass = "bg-brand-secondary/15 border-brand-gold text-brand-secondary font-semibold shadow-md shadow-brand-secondary/5";
                }

                return (
                  <button
                    key={item}
                    disabled={isMatched || !!wrongLeft}
                    onClick={() => handleLeftSelect(item)}
                    className={`flex items-center justify-between p-4 rounded-xl border text-sm sm:text-base text-left transition-all select-none cursor-pointer ${btnClass}`}
                  >
                    <span>{item}</span>
                    {isMatched && <CheckCircle2 className="h-5 w-5 text-brand-tertiary shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Right Items Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary mb-1">Sự kiện / Niên đại / Ý nghĩa</h4>
              {rightItems.map((item) => {
                const isSelected = selectedRight === item;
                const isMatched = matchedRights.has(item);
                const isWrong = wrongRight === item;

                let btnClass = "bg-brand-surface border-brand-outline-variant/60 text-brand-on-surface-variant hover:border-brand-outline hover:bg-brand-container";
                if (isMatched) {
                  btnClass = "bg-brand-tertiary/10 border-brand-tertiary text-brand-tertiary cursor-default opacity-80 pointer-events-none font-semibold shadow-sm shadow-brand-tertiary/5";
                } else if (isWrong) {
                  btnClass = "bg-brand-error/10 border-brand-error text-brand-error font-semibold animate-shake";
                } else if (isSelected) {
                  btnClass = "bg-brand-secondary/15 border-brand-gold text-brand-secondary font-semibold shadow-md shadow-brand-secondary/5";
                }

                return (
                  <button
                    key={item}
                    disabled={isMatched || !!wrongRight}
                    onClick={() => handleRightSelect(item)}
                    className={`flex items-center justify-between p-4 rounded-xl border text-sm sm:text-base text-left transition-all select-none cursor-pointer ${btnClass}`}
                  >
                    <span>{item}</span>
                    {isMatched && <CheckCircle2 className="h-5 w-5 text-brand-tertiary shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation box */}
          {currentExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-surface border border-brand-outline-variant/75 rounded-xl p-4 flex gap-3 text-sm leading-relaxed"
            >
              <AlertCircle className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-brand-secondary text-xs uppercase tracking-widest mb-1">Giải nghĩa lịch sử:</h5>
                <p className="text-brand-on-surface-variant font-light">{currentExplanation}</p>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

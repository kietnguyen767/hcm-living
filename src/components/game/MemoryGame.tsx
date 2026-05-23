"use client";

import * as React from "react";
import { memoryCards } from "@/data/gamesData";
import { shuffleArray } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sparkles, HelpCircle, RotateCcw } from "lucide-react";
import { useToast } from "@/components/ui/toast";

interface GameCard {
  uniqueId: string;
  originalId: string;
  name: string;
  description: string;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const MemoryGame: React.FC = () => {
  const { toast } = useToast();
  const [cards, setCards] = React.useState<GameCard[]>([]);
  const [selectedIndices, setSelectedIndices] = React.useState<number[]>([]);
  const [flips, setFlips] = React.useState(0);
  const [matches, setMatches] = React.useState(0);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const initGame = React.useCallback(() => {
    const cardSet = [...memoryCards, ...memoryCards].map((card, idx) => ({
      uniqueId: `${card.id}-${idx}`,
      originalId: card.id,
      name: card.name,
      description: card.description,
      imageUrl: card.imageUrl,
      isFlipped: false,
      isMatched: false,
    }));
    
    setCards(shuffleArray(cardSet));
    setSelectedIndices([]);
    setFlips(0);
    setMatches(0);
    setIsProcessing(false);
  }, []);

  React.useEffect(() => {
    initGame();
  }, [initGame]);

  const handleCardClick = (idx: number) => {
    if (isProcessing || cards[idx].isFlipped || cards[idx].isMatched) return;

    const updatedCards = [...cards];
    updatedCards[idx].isFlipped = true;
    setCards(updatedCards);

    const newSelected = [...selectedIndices, idx];
    setSelectedIndices(newSelected);

    if (newSelected.length === 2) {
      setFlips((f) => f + 1);
      setIsProcessing(true);
      
      const firstIdx = newSelected[0];
      const secondIdx = newSelected[1];

      if (cards[firstIdx].originalId === cards[secondIdx].originalId) {
        setTimeout(() => {
          const finalCards = [...cards];
          finalCards[firstIdx].isMatched = true;
          finalCards[secondIdx].isMatched = true;
          setCards(finalCards);
          setSelectedIndices([]);
          setMatches((m) => m + 1);
          setIsProcessing(false);
          toast(`Đã tìm thấy cặp ${cards[firstIdx].name}!`, "success", 1500);
        }, 300);
      } else {
        setTimeout(() => {
          const finalCards = [...cards];
          finalCards[firstIdx].isFlipped = false;
          finalCards[secondIdx].isFlipped = false;
          setCards(finalCards);
          setSelectedIndices([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  const isGameOver = matches === memoryCards.length;

  return (
    <div className="w-full max-w-4xl mx-auto bg-brand-paper border border-brand-outline/35 p-6 sm:p-8 rounded-2xl shadow-sm shadow-[#1a0f0a]/5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-outline-variant/30 pb-4 mb-6">
        <div>
          <h3 className="text-xl font-bold font-serif text-brand-primary">Lật hình Ghi nhớ Di tích</h3>
          <p className="text-xs text-brand-on-surface-variant font-light mt-0.5">Lật và ghép các thẻ hình chứa địa danh di tích lịch sử gắn liền với Bác Hồ.</p>
        </div>
        <div className="flex gap-6 text-sm font-bold uppercase tracking-wider text-brand-on-surface-variant">
          <div>Cặp đã tìm thấy: <span className="text-brand-primary">{matches} / {memoryCards.length}</span></div>
          <div>Lượt lật: <span className="text-brand-on-surface">{flips}</span></div>
        </div>
      </div>

      {isGameOver ? (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary/10 border-2 border-brand-gold/25 text-brand-gold mb-6 shadow-lg">
            <Sparkles className="h-8 w-8 animate-bounce" />
          </div>
          <h4 className="text-2xl font-bold font-serif text-brand-primary mb-2">Tuyệt vời! Bạn có trí nhớ thật tốt.</h4>
          <p className="text-brand-on-surface-variant text-sm max-w-sm mb-8 font-light">Hoàn thành trò chơi sau {flips} lượt lật thẻ.</p>
          
          {/* Landmarks Knowledge Box */}
          <div className="w-full max-w-2xl bg-brand-surface border border-brand-outline-variant/70 rounded-xl p-5 text-left mb-8">
            <h5 className="text-brand-secondary font-bold text-xs uppercase tracking-widest mb-3">Tóm tắt kiến thức địa danh:</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {memoryCards.map((mc) => (
                <div key={mc.id} className="text-xs space-y-1 border-b border-brand-outline-variant/30 pb-2 sm:border-0 sm:pb-0">
                  <h6 className="font-bold font-serif text-brand-primary">{mc.name}</h6>
                  <p className="text-brand-on-surface-variant font-light leading-relaxed">{mc.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={initGame} className="flex items-center gap-1.5 cursor-pointer">
            <RotateCcw className="h-4 w-4" />
            Chơi lại
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {cards.map((card, idx) => {
            const isFlipped = card.isFlipped || card.isMatched;

            return (
              <div
                key={card.uniqueId}
                className="aspect-square relative cursor-pointer select-none"
                onClick={() => handleCardClick(idx)}
              >
                <div
                  className={`w-full h-full rounded-xl border transition-all duration-300 flex items-center justify-center ${
                    isFlipped 
                      ? "bg-brand-surface border-brand-gold text-brand-on-surface shadow-sm" 
                      : "bg-brand-paper border-brand-outline-variant/60 text-brand-outline hover:border-brand-gold hover:bg-brand-container"
                  }`}
                >
                  {isFlipped ? (
                    <div className="flex flex-col items-center justify-center p-2 text-center">
                      <span className="text-xs sm:text-sm font-bold font-serif text-brand-primary line-clamp-1">{card.name}</span>
                      <span className="text-[9px] text-brand-on-surface-variant mt-1 line-clamp-2 hidden sm:block leading-tight font-light">{card.description}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <HelpCircle className="h-6 w-6 text-brand-outline/40 hover:text-brand-gold transition-colors" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

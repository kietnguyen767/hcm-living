"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { sortingEvents, SortingEvent } from "@/data/gamesData";
import { shuffleArray } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RotateCcw, ArrowUp, ArrowDown, Check, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export const SortingGame: React.FC = () => {
  const { toast } = useToast();
  const [items, setItems] = React.useState<SortingEvent[]>([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [attempts, setAttempts] = React.useState(0);
  const [hasWon, setHasWon] = React.useState(false);

  const correctOrder = React.useMemo(() => {
    return [...sortingEvents].sort((a, b) => a.year - b.year);
  }, []);

  const initGame = React.useCallback(() => {
    let scrambled = shuffleArray(sortingEvents);
    while (JSON.stringify(scrambled.map(s => s.id)) === JSON.stringify(correctOrder.map(c => c.id))) {
      scrambled = shuffleArray(sortingEvents);
    }
    
    setItems(scrambled);
    setIsChecked(false);
    setAttempts(0);
    setHasWon(false);
  }, [correctOrder]);

  React.useEffect(() => {
    initGame();
  }, [initGame]);

  const moveItem = (index: number, direction: "up" | "down") => {
    if (isChecked) return;
    
    const newItems = [...items];
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    
    if (targetIdx < 0 || targetIdx >= items.length) return;

    [newItems[index], newItems[targetIdx]] = [newItems[targetIdx], newItems[index]];
    setItems(newItems);
  };

  const handleCheck = () => {
    setAttempts(prev => prev + 1);
    
    const isSortedCorrectly = items.every((item, idx) => item.id === correctOrder[idx].id);
    setIsChecked(true);

    if (isSortedCorrectly) {
      setHasWon(true);
      toast("Chính xác hoàn hảo!", "success");
    } else {
      setHasWon(false);
      toast("Một số sự kiện chưa đúng vị trí!", "warning");
    }
  };

  const handleRetry = () => {
    setIsChecked(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-brand-paper border border-brand-outline/35 p-6 sm:p-8 rounded-2xl shadow-sm shadow-[#1a0f0a]/5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-outline-variant/30 pb-4 mb-6">
        <div>
          <h3 className="text-xl font-bold font-serif text-brand-primary">Phân loại Niên đại Lịch sử</h3>
          <p className="text-xs text-brand-on-surface-variant font-light mt-0.5">Sắp xếp các sự kiện lịch sử theo thứ tự thời gian từ xưa tới nay bằng các nút di chuyển.</p>
        </div>
        <div className="flex gap-6 text-sm font-bold uppercase tracking-wider text-brand-on-surface-variant">
          <div>Lượt kiểm tra: <span className="text-brand-primary">{attempts}</span></div>
        </div>
      </div>

      {hasWon ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary/10 border border-brand-gold/20 text-brand-gold mb-6 shadow-lg">
            <Sparkles className="h-8 w-8 animate-pulse" />
          </div>
          <h4 className="text-2xl font-bold font-serif text-brand-primary mb-2">Trật tự thời gian chính xác!</h4>
          <p className="text-brand-on-surface-variant text-sm max-w-sm mb-6 font-light">Chúc mừng bạn đã sắp xếp hoàn hảo niên biểu lịch sử về cuộc đời và sự nghiệp Chủ tịch Hồ Chí Minh qua {attempts} lượt kiểm tra.</p>
          
          {/* Timeline Review */}
          <div className="w-full max-w-xl bg-brand-surface border border-brand-outline-variant/70 rounded-xl p-5 text-left mb-8 space-y-4">
            <h5 className="text-brand-secondary font-bold text-xs uppercase tracking-widest">Niên biểu lịch sử đã sắp xếp:</h5>
            <div className="space-y-3">
              {correctOrder.map((item) => (
                <div key={item.id} className="flex gap-3 text-xs leading-relaxed border-l-2 border-brand-gold pl-3">
                  <span className="font-bold text-brand-secondary shrink-0 font-serif">{item.year}</span>
                  <div>
                    <h6 className="font-bold text-brand-primary font-serif">{item.title}</h6>
                    <p className="text-brand-on-surface-variant mt-0.5 font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={initGame} className="flex items-center gap-1.5 cursor-pointer">
            <RotateCcw className="h-4 w-4" />
            Chơi lại từ đầu
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Sorting List */}
          <div className="flex flex-col gap-3">
            {items.map((item, idx) => {
              const isCorrectIdx = item.id === correctOrder[idx].id;
              
              let borderClass = "border-brand-outline-variant/60 bg-brand-surface text-brand-on-surface";
              let badge = null;

              if (isChecked) {
                if (isCorrectIdx) {
                  borderClass = "border-brand-tertiary/40 bg-brand-tertiary/5 text-brand-tertiary";
                  badge = <span className="text-[10px] bg-brand-tertiary/10 border border-brand-tertiary/20 text-brand-tertiary px-2.5 py-0.5 rounded-full font-bold uppercase tracking-widest shrink-0 select-none">Đúng vị trí</span>;
                } else {
                  borderClass = "border-brand-error/40 bg-brand-error/5 text-brand-error";
                  badge = <span className="text-[10px] bg-brand-error/10 border border-brand-error/20 text-brand-error px-2.5 py-0.5 rounded-full font-bold uppercase tracking-widest shrink-0 select-none">Sai vị trí</span>;
                }
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  className={`flex items-center gap-4 p-4 rounded-xl border text-sm transition-all ${borderClass}`}
                >
                  {/* Up/Down buttons */}
                  <div className="flex flex-col gap-1 shrink-0">
                    <button
                      disabled={idx === 0 || isChecked}
                      onClick={() => moveItem(idx, "up")}
                      className="p-1 hover:bg-brand-container rounded-full text-brand-outline disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                      title="Di chuyển lên"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </button>
                    <button
                      disabled={idx === items.length - 1 || isChecked}
                      onClick={() => moveItem(idx, "down")}
                      className="p-1 hover:bg-brand-container rounded-full text-brand-outline disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                      title="Di chuyển xuống"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Year Tag */}
                  <div className="px-2.5 py-1 rounded bg-brand-paper border border-brand-outline-variant text-brand-secondary font-bold font-serif shrink-0 text-center min-w-[54px] select-none">
                    {isChecked ? item.year : "?"}
                  </div>

                  {/* Text Description */}
                  <div className="flex-1">
                    <h4 className="font-bold font-serif text-brand-primary text-sm sm:text-base leading-snug">{item.title}</h4>
                    <p className="text-brand-on-surface-variant mt-0.5 text-xs font-light line-clamp-1 sm:line-clamp-none">{item.description}</p>
                  </div>

                  {badge}
                </motion.div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-3 mt-2">
            {isChecked && !hasWon ? (
              <Button onClick={handleRetry} variant="secondary" className="cursor-pointer">
                Sắp xếp lại
              </Button>
            ) : null}
            
            {!hasWon ? (
              <Button
                onClick={isChecked ? initGame : handleCheck}
                className="flex items-center gap-1.5 cursor-pointer"
              >
                {isChecked ? (
                  <>
                    <RotateCcw className="h-4 w-4" />
                    Chơi lại
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" />
                    Kiểm tra thứ tự
                  </>
                )}
              </Button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

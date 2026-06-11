import * as React from "react";
import { ArrowLeft, ArrowRight, BookOpen, Check, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/data/quizData";

interface QuizReviewProps {
  onBack: () => void;
}

export const QuizReview: React.FC<QuizReviewProps> = ({ onBack }) => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredQuestions = React.useMemo(() => {
    if (!searchQuery.trim()) return quizQuestions;
    const query = searchQuery.toLowerCase();
    return quizQuestions.filter(q => 
      q.question.toLowerCase().includes(query) || 
      q.options.some(opt => opt.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  React.useEffect(() => {
    if (!selectedId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const idx = filteredQuestions.findIndex(q => q.id === selectedId);
      if (idx === -1) return;

      if (e.key === "ArrowRight" || e.key === "Enter") {
        if (idx < filteredQuestions.length - 1) {
          setSelectedId(filteredQuestions[idx + 1].id);
        }
      } else if (e.key === "ArrowLeft") {
        if (idx > 0) {
          setSelectedId(filteredQuestions[idx - 1].id);
        }
      } else if (e.key === "Escape") {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, filteredQuestions]);

  return (
    <div className="w-full bg-brand-paper border border-brand-outline/35 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-sm shadow-[#1a0f0a]/5 flex flex-col h-full min-h-[600px] max-h-[85vh]">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 pb-4 border-b border-brand-outline/30 shrink-0 sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <Button onClick={onBack} variant="ghost" className="text-brand-primary hover:bg-brand-primary/10 rounded-full h-10 w-10 p-2 flex items-center justify-center shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary shrink-0">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-brand-primary whitespace-nowrap">
              Ôn tập tài liệu
            </h2>
          </div>
        </div>

        <div className="relative w-full sm:max-w-xs xl:max-w-md">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-brand-on-surface-variant/60" />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi, đáp án..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-brand-surface border border-brand-outline/40 rounded-xl text-sm focus:outline-none focus:border-brand-primary/60 focus:ring-1 focus:ring-brand-primary/60 transition-all text-brand-on-surface placeholder:text-brand-on-surface-variant/50"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-outline/50 scrollbar-track-transparent">
        {filteredQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-brand-on-surface-variant/60">
            <Search className="h-12 w-12 mb-4 opacity-20" />
            <p className="text-lg">Không tìm thấy câu hỏi nào phù hợp.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {filteredQuestions.map((q, idx) => {
              const originalIdx = quizQuestions.findIndex(orig => orig.id === q.id);
              
              return (
                <motion.div 
                  key={q.id} 
                  layoutId={`card-${q.id}`}
                  onClick={() => setSelectedId(q.id)}
                  className="bg-brand-surface border border-brand-outline/50 rounded-xl p-5 shadow-sm flex flex-col cursor-pointer hover:shadow-md hover:border-brand-primary/40 transition-all hover:-translate-y-1"
                >
                  <h3 className="text-brand-primary font-bold mb-3 flex gap-2">
                    <span className="shrink-0 text-brand-secondary">Câu {originalIdx + 1}:</span>
                    <span>{q.question}</span>
                  </h3>
                  <div className="pl-2 sm:pl-4 space-y-2 mb-4 border-l-2 border-brand-outline/30 flex-1">
                    {q.options.map((opt, oIdx) => {
                      const isCorrect = oIdx === q.correctAnswer;
                      return (
                        <div key={oIdx} className={`flex items-start gap-2 text-sm ${isCorrect ? 'text-brand-tertiary font-bold' : 'text-brand-on-surface-variant'}`}>
                          {isCorrect ? <Check className="h-4 w-4 shrink-0 mt-0.5 text-brand-tertiary" /> : <div className="w-4 shrink-0" />}
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-sm text-brand-on-surface-variant font-light bg-brand-surface/50 p-3 rounded-lg border border-brand-outline/20 mt-auto">
                    <span className="font-bold text-brand-secondary uppercase text-xs tracking-widest mr-2">Giải thích:</span>
                    <span className="line-clamp-2">{q.explanation}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-brand-paper w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 sm:p-12 shadow-2xl relative border border-brand-outline/30 scrollbar-thin scrollbar-thumb-brand-outline/50 scrollbar-track-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-brand-primary/10 text-brand-primary transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {(() => {
                const q = quizQuestions.find(q => q.id === selectedId);
                if (!q) return null;
                const idx = quizQuestions.findIndex(q => q.id === selectedId);
                
                return (
                  <div className="flex flex-col gap-8 mt-2">
                    <h3 className="text-2xl sm:text-3xl text-brand-primary font-bold font-serif leading-relaxed flex gap-3">
                      <span className="shrink-0 text-brand-secondary">Câu {quizQuestions.findIndex(orig => orig.id === q.id) + 1}:</span>
                      <span>{q.question}</span>
                    </h3>
                    
                    <div className="space-y-4 pl-4 sm:pl-6 border-l-4 border-brand-tertiary/30">
                      {q.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === q.correctAnswer;
                        return (
                          <div key={oIdx} className={`flex items-start gap-4 text-lg ${isCorrect ? 'text-brand-tertiary font-bold' : 'text-brand-on-surface-variant'}`}>
                            {isCorrect ? <Check className="h-6 w-6 shrink-0 mt-0.5 text-brand-tertiary" /> : <div className="w-6 shrink-0" />}
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="text-base sm:text-lg text-brand-on-surface-variant font-light bg-brand-surface border border-brand-outline/30 p-6 rounded-2xl">
                      <span className="font-bold text-brand-secondary uppercase tracking-widest mr-3">Giải thích chi tiết:</span>
                      <p className="mt-2 leading-relaxed">{q.explanation}</p>
                    </div>

                    <div className="flex justify-center items-center mt-2 pt-6 border-t border-brand-outline/20">
                      <div className="text-sm text-brand-on-surface-variant/70 italic flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Dùng phím mũi tên Trái/Phải để chuyển câu <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

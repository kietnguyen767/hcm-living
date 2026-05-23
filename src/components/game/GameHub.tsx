"use client";

import * as React from "react";
import { MatchGame } from "./MatchGame";
import { MemoryGame } from "./MemoryGame";
import { SortingGame } from "./SortingGame";
import { Gamepad2, Layers, Layers3, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";

export const GameHub: React.FC = () => {
  const [activeGame, setActiveGame] = React.useState<"match" | "memory" | "sorting">("match");

  const games = [
    {
      id: "match",
      name: "Ghép đôi lịch sử",
      desc: "Nối liền nhân vật và sự kiện lịch sử tương ứng.",
      icon: Shuffle,
      component: MatchGame,
    },
    {
      id: "memory",
      name: "Ghi nhớ địa danh",
      desc: "Lật và ghép các thẻ hình chứa địa danh biểu tượng.",
      icon: Layers,
      component: MemoryGame,
    },
    {
      id: "sorting",
      name: "Niên biểu thời gian",
      desc: "Sắp xếp các sự kiện lịch sử theo thứ tự đúng thời gian.",
      icon: Layers3,
      component: SortingGame,
    },
  ];

  const ActiveComponent = games.find((g) => g.id === activeGame)?.component || MatchGame;

  return (
    <div className="container mx-auto px-4 py-12 max-w-[1200px]">
      {/* Title */}
      <div className="text-center mb-12">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary mb-4 shadow-md">
          <Gamepad2 className="h-6 w-6" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-primary mb-4 tracking-tight">
          Học lịch sử qua Trò chơi Tương tác
        </h2>
        <p className="text-brand-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
          Trải nghiệm các trò chơi tư duy ngắn giúp bạn củng cố và ôn tập kiến thức về cuộc đời hoạt động cách mạng và tác phẩm của Chủ tịch Hồ Chí Minh.
        </p>
      </div>

      {/* Game Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
        {games.map((g) => {
          const Icon = g.icon;
          const isActive = activeGame === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setActiveGame(g.id as any)}
              className={cn(
                "flex flex-col items-center text-center p-4 rounded-xl border transition-all cursor-pointer select-none",
                isActive
                  ? "bg-brand-secondary/10 border-brand-gold text-brand-secondary shadow-md shadow-brand-secondary/5"
                  : "bg-brand-paper/40 border-brand-outline-variant/60 text-brand-on-surface-variant hover:text-brand-on-surface hover:bg-brand-paper/85"
              )}
            >
              <Icon className="h-5 w-5 mb-2" />
              <span className="font-bold text-sm block mb-1 font-serif">{g.name}</span>
              <span className="text-[10px] uppercase font-bold tracking-wider leading-snug text-brand-on-surface-variant/75">{g.desc}</span>
            </button>
          );
        })}
      </div>

      {/* Game Content wrapper */}
      <div className="mt-8">
        <ActiveComponent />
      </div>
    </div>
  );
};

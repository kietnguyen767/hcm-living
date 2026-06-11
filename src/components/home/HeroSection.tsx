"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, BookOpen, BrainCircuit, Gamepad2, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSectionChange }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  const features = [
    {
      id: "timeline",
      title: "Dòng Lịch Sử",
      desc: "Khám phá các cột mốc lịch sử vĩ đại trong cuộc đời cứu nước và kiến thiết của Bác.",
      icon: Calendar,
      color: "from-brand-primary/5 to-brand-secondary/5",
      iconColor: "text-brand-primary",
    },
    {
      id: "stories",
      title: "Tác Phẩm & Di Sản",
      desc: "Tìm hiểu các tác phẩm lý luận cách mạng và thơ văn tiêu biểu chứa đựng giá trị nghệ thuật.",
      icon: BookOpen,
      color: "from-brand-secondary/5 to-brand-primary/5",
      iconColor: "text-brand-secondary",
    },
    {
      id: "quiz",
      title: "Trắc Nghiệm Tìm Hiểu",
      desc: "Thử thách kiến thức về các sự kiện, mốc thời gian và di sản vĩ đại của Người.",
      icon: BrainCircuit,
      color: "from-brand-primary/5 to-brand-secondary/5",
      iconColor: "text-brand-secondary",
    },
    {
      id: "games",
      title: "Trò Chơi Tương Tác",
      desc: "Học tập thú vị qua trò chơi ghép cặp thông tin, lật hình ghi nhớ di tích và sắp xếp niên đại.",
      icon: Gamepad2,
      color: "from-brand-secondary/5 to-brand-primary/5",
      iconColor: "text-brand-primary",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 py-16 overflow-hidden"
    >
      {/* Decorative Gold Dividers and Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Badge - Pill-shaped */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-6"
      >
        <Landmark className="h-3.5 w-3.5" />
        Bảo tồn ký ức về Người

      </motion.div>

      {/* Main Heading - Playfair Display Serif */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-brand-on-surface tracking-tight leading-[1.15] mb-6 max-w-4xl"
      >
        Khám phá cuộc đời & sự nghiệp{" "}
        <span className="text-brand-primary block sm:inline">
          Chủ tịch Hồ Chí Minh
        </span>
      </motion.h1>

      {/* Subtitle - Nunito Sans */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg md:text-xl text-brand-on-surface-variant font-sans max-w-2xl leading-relaxed mb-10"
      >
        Không gian tương tác trực quan giới thiệu các mốc lịch sử, tác phẩm lý luận bất hủ và các bài trắc nghiệm, trò chơi về cuộc đời Bác Hồ kính yêu.
      </motion.p>

      {/* Primary Call To Action */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
        <Button
          onClick={() => onSectionChange("timeline")}
          size="lg"
          className="flex items-center gap-2 group cursor-pointer"
        >
          Khám phá Dòng lịch sử
          <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          onClick={() => onSectionChange("games")}
          variant="secondary"
          size="lg"
          className="cursor-pointer"
        >
          Chơi trò chơi Lịch sử
        </Button>
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] mt-8 px-4"
      >
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.id}
              onClick={() => onSectionChange(feat.id)}
              className="group relative flex flex-col items-start text-left p-6 rounded-xl border border-brand-outline/30 bg-brand-paper hover:border-brand-gold hover:shadow-[inset_0_0_12px_rgba(212,168,67,0.15)] shadow-sm shadow-[#1a0f0a]/5 transition-all duration-300 cursor-pointer"
            >
              {/* Feature Glow */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

              <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-brand-surface border border-brand-outline-variant/50 ${feat.iconColor} group-hover:border-brand-gold/30 group-hover:bg-brand-secondary/10 transition-all duration-300 mb-5`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-serif text-brand-primary group-hover:text-brand-primary transition-colors mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-brand-on-surface-variant font-light leading-relaxed">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

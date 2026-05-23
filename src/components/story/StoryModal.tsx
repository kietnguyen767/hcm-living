"use client";

import * as React from "react";
import { Story } from "@/data/storiesData";
import { Modal } from "@/components/ui/modal";
import { AudioPlayer } from "./AudioPlayer";
import { Calendar, User, Clock, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface StoryModalProps {
  story: Story | null;
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, isOpen, onClose }) => {
  if (!story) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex flex-col gap-1 pr-6">
          <span className="text-xs text-brand-gold font-bold uppercase tracking-widest">Hồi ký lịch sử</span>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-brand-paper leading-tight">
            {story.title}
          </h2>
        </div>
      }
      size="xl"
    >
      <div className="flex flex-col gap-6">
        {/* Story Metadata */}
        <div className="flex flex-wrap gap-4 items-center justify-start text-xs text-brand-paper/70 bg-brand-paper/5 p-3.5 rounded-xl border border-brand-outline/20">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4 text-brand-gold" />
            <span>Người kể: <strong className="text-brand-paper">{story.author}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-brand-gold" />
            <span>Ngày viết: {formatDate(story.date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand-gold" />
            <span>Độ dài: {story.readTime}</span>
          </div>
        </div>

        {/* Audio Narration Player */}
        <AudioPlayer textToNarrate={story.content} title={story.title} />

        {/* Story Content */}
        <div className="text-brand-paper/90 text-[17px] leading-8 font-serif whitespace-pre-wrap px-2">
          {story.content}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-outline/15">
          {story.tags.map((tag) => (
            <div
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-paper/5 border border-brand-outline/20 text-brand-paper/60 text-[10px] font-bold uppercase tracking-wider"
            >
              <Tag className="h-3 w-3 text-brand-gold" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

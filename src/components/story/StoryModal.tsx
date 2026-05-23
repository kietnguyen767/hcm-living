"use client";

import * as React from "react";
import { Story } from "@/data/storiesData";
import { Modal } from "@/components/ui/modal";
import { AudioPlayer } from "./AudioPlayer";
import { Calendar, User, Clock, Tag, ExternalLink, Link2 } from "lucide-react";
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
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Image & Metadata */}
        <div className="w-full md:w-2/5 shrink-0 flex flex-col gap-6">
          {/* Image */}
          {story.imageUrl && (
            <div className="w-full overflow-hidden rounded-xl border border-brand-outline/20 sticky top-0">
              <img src={story.imageUrl} alt={story.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          )}

          {/* Story Metadata */}
          <div className="flex flex-col gap-3 text-xs text-brand-paper/70 bg-brand-paper/5 p-4 rounded-xl border border-brand-outline/20">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-brand-gold" />
              <span>Người kể: <strong className="text-brand-paper">{story.author}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand-gold" />
              <span>Ngày viết: {formatDate(story.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-gold" />
              <span>Độ dài: {story.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
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

        {/* Right Column: Content */}
        <div className="w-full md:w-3/5 flex flex-col gap-6">
          {/* Audio Narration Player */}
          <AudioPlayer textToNarrate={story.content} title={story.title} />

          {/* Story Content */}
          <div className="text-brand-paper/90 text-[17px] leading-8 font-serif whitespace-pre-wrap px-2">
            {story.content}
          </div>

          {/* Reference Links Bubble */}
          {story.referenceLinks && story.referenceLinks.length > 0 && (
            <div className="mt-auto pt-4 flex justify-end">
              <div className="group relative">
                <button className="inline-flex items-center gap-2 cursor-pointer text-brand-gold hover:text-brand-primary transition-colors text-sm font-bold border border-brand-gold/50 rounded-full px-4 py-1.5 bg-brand-gold/10">
                  <Link2 className="h-4 w-4" />
                  <span>Nguồn tham khảo</span>
                </button>
                
                {/* Bubble */}
                <div className="absolute bottom-[calc(100%+0.5rem)] right-0 w-64 bg-brand-surface rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-brand-gold/30 p-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {/* Triangle pointer */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-brand-surface border-b border-r border-brand-gold/30 transform rotate-45"></div>
                  {/* Links */}
                  <div className="relative z-10 flex flex-col gap-2">
                    {story.referenceLinks.map((link, idx) => (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-on-surface hover:text-brand-primary text-xs font-sans transition-colors bg-brand-on-surface/5 px-2 py-1.5 rounded">
                        <ExternalLink className="h-3 w-3 shrink-0" />
                        <span className="truncate">{link.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

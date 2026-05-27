"use client";

import * as React from "react";
import { User, ArrowRight } from "lucide-react";
import { Story, stories } from "@/data/storiesData";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StoryModal } from "./StoryModal";
import { cn } from "@/lib/utils";

export const StoryGrid: React.FC = () => {
  const [selectedStory, setSelectedStory] = React.useState<Story | null>(null);
  const [storyList, setStoryList] = React.useState<Story[]>(stories);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadStories() {
      try {
        const res = await fetch("/api/stories");
        const json = await res.json();
        if (json.success && json.data) {
          setStoryList(json.data);
        }
      } catch (err) {
        console.error("Failed to load stories via API, using static fallback", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadStories();
  }, []);

  const achievements = storyList.filter(s => s.category === "achievement");
  const works = storyList.filter(s => s.category === "work");

  const renderCard = (story: Story) => (
    <Card 
      key={story.id} 
      className={cn(
        "flex flex-col h-full transition-all duration-300", 
        story.isImportant 
          ? "ring-2 ring-brand-gold animate-sparkle" 
          : "hover:border-brand-gold group"
      )}
    >
      <CardHeader className="p-6 pb-3">
        <div className="flex items-center gap-3 text-brand-on-surface-variant text-[10px] font-bold uppercase tracking-wider mb-2">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3 text-brand-gold" />
            {story.author}
          </span>
        </div>
        <CardTitle className="group-hover:text-brand-primary transition-colors duration-200">
          {story.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-6 pb-6 text-brand-on-surface-variant text-sm font-sans font-light leading-relaxed">
        <p className="line-clamp-3">{story.excerpt}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0 border-t border-brand-outline-variant/30 mt-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSelectedStory(story)}
          className="flex items-center gap-1.5 cursor-pointer"
        >
          Xem chi tiết
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-[1200px]">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-primary mb-4 tracking-tight">
          Thành tựu & Tác phẩm tiêu biểu
        </h2>
        <p className="text-brand-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
          Khám phá những thành tựu vĩ đại và các tác phẩm nổi bật đã kết tinh tư tưởng cách mạng, định hướng cho sự nghiệp đấu tranh và xây dựng đất nước của Chủ tịch Hồ Chí Minh.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-primary border-t-transparent" />
        </div>
      ) : (
        <div className="flex flex-col gap-16">
          {/* Section: Thành tựu vĩ đại */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold font-serif text-brand-gold">I. Những Thành Tựu Vĩ Đại</h3>
              <div className="flex-1 h-px bg-brand-outline-variant/50"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map(renderCard)}
            </div>
          </section>

          {/* Section: Tác phẩm tiêu biểu */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold font-serif text-brand-gold">II. Các Tác Phẩm Tiêu Biểu</h3>
              <div className="flex-1 h-px bg-brand-outline-variant/50"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map(renderCard)}
            </div>
          </section>
        </div>
      )}

      <StoryModal
        story={selectedStory}
        isOpen={selectedStory !== null}
        onClose={() => setSelectedStory(null)}
      />
    </div>
  );
};

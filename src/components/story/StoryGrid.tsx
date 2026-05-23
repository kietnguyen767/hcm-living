"use client";

import * as React from "react";
import { BookOpen, User, Clock, Calendar, ArrowRight } from "lucide-react";
import { Story, stories } from "@/data/storiesData";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StoryModal } from "./StoryModal";

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

  return (
    <div className="container mx-auto px-4 py-12 max-w-[1200px]">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-primary mb-4 tracking-tight">
          Tác phẩm & Di sản tiêu biểu
        </h2>
        <p className="text-brand-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
          Khám phá các tác phẩm chính trị lý luận và thơ ca nổi bật, kết tinh tư tưởng cách mạng và nghệ thuật vĩ đại của Chủ tịch Hồ Chí Minh.
        </p>
      </div>

      {/* Stories Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-primary border-t-transparent" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storyList.map((story) => (
            <Card key={story.id} className="flex flex-col h-full hover:border-brand-gold group">
              <CardHeader className="p-6 pb-3">
                {/* Meta details */}
                <div className="flex items-center gap-3 text-brand-on-surface-variant text-[10px] font-bold uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3 text-brand-gold" />
                    {story.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-brand-gold" />
                    {story.readTime}
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
                  Xem tác phẩm
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Narrative Reader Modal */}
      <StoryModal
        story={selectedStory}
        isOpen={selectedStory !== null}
        onClose={() => setSelectedStory(null)}
      />
    </div>
  );
};

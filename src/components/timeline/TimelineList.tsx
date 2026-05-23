"use client";

import * as React from "react";
import { timelineEvents, TimelineEvent } from "@/data/timelineData";
import { SearchFilter } from "./SearchFilter";
import { TimelineCard } from "./TimelineCard";
import { Modal } from "@/components/ui/modal";
import { Calendar, HelpCircle, CheckCircle, ExternalLink, Link2 } from "lucide-react";

export const TimelineList: React.FC = () => {
  const [events, setEvents] = React.useState<TimelineEvent[]>(timelineEvents);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [selectedEvent, setSelectedEvent] = React.useState<TimelineEvent | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/timeline");
        const json = await res.json();
        if (json.success && json.data) {
          setEvents(json.data);
        }
      } catch (err) {
        console.error("Failed to load timeline events via API, using static fallback", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-[1200px]">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-brand-primary mb-4 tracking-tight">
          Hành trình Lịch sử Chủ tịch Hồ Chí Minh
        </h2>
        <p className="text-brand-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
          Theo dấu chân lịch sử từ thuở niên thiếu yêu nước cho đến những chặng đường bôn ba cứu nước và lãnh đạo cách mạng vĩ đại.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Timeline List */}
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-primary border-t-transparent" />
        </div>
      ) : filteredEvents.length > 0 ? (
        <div className="relative mt-12">
          {/* Vertical central line (only shown on desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-brand-outline-variant/30" />

          {filteredEvents.map((event, idx) => (
            <TimelineCard
              key={event.id}
              event={event}
              index={idx}
              onOpenDetails={setSelectedEvent}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-brand-on-surface-variant bg-brand-paper/50 border border-brand-outline/25 rounded-xl p-8 max-w-lg mx-auto shadow-sm">
          <HelpCircle className="h-12 w-12 text-brand-outline mx-auto mb-4" />
          <p className="text-lg font-bold text-brand-primary">Không tìm thấy sự kiện nào</p>
          <p className="text-sm text-brand-on-surface-variant mt-1">Hãy thử tìm kiếm từ khóa khác hoặc đổi bộ lọc.</p>
        </div>
      )}

      {/* Details Modal */}
      <Modal
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        title={
          selectedEvent ? (
            <div className="flex items-center gap-2.5">
              <Calendar className="h-5 w-5 text-brand-gold" />
              <span className="text-brand-paper font-bold font-serif">
                {selectedEvent.title} ({selectedEvent.year})
              </span>
            </div>
          ) : undefined
        }
        size="xl"
      >
        {selectedEvent && (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column: Image */}
            {selectedEvent.imageUrl && (
              <div className="w-full md:w-2/5 shrink-0">
                <div className="w-full overflow-hidden rounded-xl border border-brand-outline/20 sticky top-0">
                  <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            )}

            {/* Right Column: Text Content */}
            <div className={selectedEvent.imageUrl ? "w-full md:w-3/5 flex flex-col gap-6" : "w-full flex flex-col gap-6"}>
              <div className="text-brand-paper/90 text-base leading-relaxed bg-[#ffffff]/5 border border-brand-outline/20 p-5 rounded-xl font-sans font-light">
                {selectedEvent.description}
              </div>

              {selectedEvent.details && selectedEvent.details.length > 0 && (
                <div>
                  <h4 className="text-brand-gold font-bold mb-4 text-xs uppercase tracking-widest border-b border-brand-outline/15 pb-2">
                    Chi tiết sự kiện & Bối cảnh lịch sử
                  </h4>
                  <ul className="space-y-3.5">
                    {selectedEvent.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-brand-paper/85 text-sm leading-relaxed font-sans font-light"
                      >
                        <CheckCircle className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reference Links Bubble */}
              {selectedEvent.referenceLinks && selectedEvent.referenceLinks.length > 0 && (
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
                        {selectedEvent.referenceLinks.map((link, idx) => (
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
        )}
      </Modal>
    </div>
  );
};

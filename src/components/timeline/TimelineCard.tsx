"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { TimelineEvent } from "@/data/timelineData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  onOpenDetails: (event: TimelineEvent) => void;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ event, index, onOpenDetails }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className={`relative flex flex-col md:flex-row items-center w-full my-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Visual Timeline Marker Line spacer for centering */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-outline-variant/30 pointer-events-none" />

      {/* Circle dot marker - Gold circle that gains Flag Red center on group hover */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-surface text-brand-gold group-hover:scale-125 transition-transform duration-200">
        <div className="h-2 w-2 rounded-full bg-brand-primary" />
      </div>

      {/* Content block */}
      <div className="w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 md:px-4">
        <Card className="overflow-hidden hover:border-brand-gold group">
          <CardContent className="p-6">
            {/* Year Tag */}
            <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs mb-3 select-none">
              {event.year}
            </div>

            <h3 className="text-xl font-bold font-serif text-brand-on-surface mb-2 group-hover:text-brand-primary transition-colors duration-200">
              {event.title}
            </h3>

            <p className="text-brand-on-surface-variant text-sm font-sans font-light leading-relaxed mb-4">
              {event.description}
            </p>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenDetails(event)}
              className="flex items-center gap-1.5 cursor-pointer"
            >
              Xem chi tiết
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Symmetrical empty space for desktop layout */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

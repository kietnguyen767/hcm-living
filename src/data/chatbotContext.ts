import { stories } from "./storiesData";
import { timelineEvents } from "./timelineData";

export interface Source {
  title: string;
  url: string;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

function buildSystemContext(): string {
  const timelineIntro =
    "Dưới đây là các mốc sự kiện chính trong cuộc đời Chủ tịch Hồ Chí Minh:";
  const timelineText = timelineEvents
    .sort((a, b) => a.year - b.year)
    .map(
      (e) =>
        `- [${e.date || e.year}] ${e.title}: ${e.description}${e.isImportant ? " (Quan trọng)" : ""}`
    )
    .join("\n");

  const storiesIntro =
    "\n\nDưới đây là những thành tựu và tác phẩm tiêu biểu:";
  const storiesText = stories
    .map(
      (s) =>
        `- [${s.category === "achievement" ? "Thành tựu" : "Tác phẩm"}] ${s.title}: ${s.content.substring(0, 500)}...`
    )
    .join("\n");

  return `${timelineIntro}\n${timelineText}\n${storiesIntro}\n${storiesText}`;
}

export function searchLocalData(
  query: string
): { content: string; sources: Source[] } | null {
  const q = query.toLowerCase();

  const matchedStories = stories.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.content.toLowerCase().includes(q) ||
      s.tags.some((t) => t.toLowerCase().includes(q))
  );

  if (matchedStories.length > 0) {
    return {
      content: matchedStories
        .map(
          (s) =>
            `**${s.title}**${s.isImportant ? " ⭐" : ""}\n${s.content.substring(0, 800)}\n*Thể loại: ${s.category === "achievement" ? "Thành tựu" : "Tác phẩm"}*`
        )
        .join("\n\n"),
      sources: matchedStories.flatMap((s) => s.referenceLinks || []),
    };
  }

  const matchedEvents = timelineEvents.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.details?.some((d) => d.toLowerCase().includes(q))
  );

  if (matchedEvents.length > 0) {
    return {
      content: matchedEvents
        .map(
          (e) =>
            `**[${e.date || e.year}] ${e.title}**${e.isImportant ? " ⭐" : ""}\n${e.description.substring(0, 600)}`
        )
        .join("\n\n"),
      sources: matchedEvents.flatMap((e) => e.referenceLinks || []),
    };
  }

  return null;
}

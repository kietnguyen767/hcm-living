"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Message } from "@/data/chatbotContext";

const SUGGESTIONS = [
  "Bác Hồ sinh ngày tháng nào?",
  "Tác phẩm nổi tiếng nhất của Bác là gì?",
  "Bác ra đi tìm đường cứu nước vào năm nào?",
  "Những thành tựu vĩ đại của Hồ Chí Minh?",
  "Bác viết Di chúc khi nào?",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || loading) return;

    const userMsg: Message = { role: "user", content };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const json = await res.json();
      if (json.success) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: json.data.message, sources: json.data.sources },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all cursor-pointer",
          isOpen
            ? "bg-brand-primary rotate-90 scale-110"
            : "bg-brand-primary hover:bg-brand-primary-container hover:scale-105 animate-sparkle"
        )}
        aria-label="Chatbot"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex w-[380px] max-w-[calc(100vw-48px)] flex-col rounded-2xl border border-brand-outline-variant/50 bg-brand-paper shadow-xl"
            style={{ maxHeight: "min(600px, calc(100vh - 160px))" }}
          >
            <div className="flex items-center gap-3 border-b border-brand-outline-variant/30 px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-primary-container shadow-sm">
                <Sparkles className="h-4.5 w-4.5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold font-serif text-brand-primary truncate">
                  Hỏi đáp về Bác Hồ
                </h3>
                <p className="text-[11px] text-brand-on-surface-variant">
                  Dựa trên dữ liệu lịch sử
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-container/50">
                    <MessageCircle className="h-8 w-8 text-brand-secondary" />
                  </div>
                  <p className="text-sm font-bold text-brand-primary mb-1">
                    Chào bạn!
                  </p>
                  <p className="text-xs text-brand-on-surface-variant mb-5 max-w-[240px]">
                    Tôi là trợ lý ảo về Chủ tịch Hồ Chí Minh. Hãy hỏi tôi bất kỳ điều gì về cuộc đời và sự nghiệp của Bác.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="rounded-full border border-brand-outline-variant/50 bg-brand-surface px-3 py-1.5 text-[11px] text-brand-on-surface-variant hover:border-brand-gold hover:text-brand-primary transition-colors cursor-pointer"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap",
                      msg.role === "user"
                        ? "bg-brand-primary text-white rounded-br-md"
                        : "bg-brand-container/60 text-brand-on-surface rounded-bl-md border border-brand-outline-variant/20"
                    )}
                  >
                    {msg.content}
                    {msg.role === "assistant" && msg.sources && msg.sources.length > 0 && (
                      <div className="mt-3 pt-2 border-t border-brand-outline-variant/30 space-y-1">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-on-surface-variant/60">
                          Nguồn tham khảo
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.sources.map((s, i) =>
                            s.url && s.url !== "#" ? (
                              <a
                                key={i}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md border border-brand-outline-variant/30 bg-brand-surface/50 px-2 py-1 text-[11px] text-brand-on-surface-variant hover:border-brand-gold hover:text-brand-primary transition-colors no-underline"
                              >
                                {s.title}
                              </a>
                            ) : (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 rounded-md border border-brand-outline-variant/30 bg-brand-surface/50 px-2 py-1 text-[11px] text-brand-on-surface-variant"
                              >
                                {s.title}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-brand-container/60 text-brand-on-surface rounded-bl-md border border-brand-outline-variant/20">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="border-t border-brand-outline-variant/30 p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập câu hỏi..."
                  disabled={loading}
                  className="flex-1 rounded-xl border border-brand-outline-variant/50 bg-brand-surface px-4 py-2.5 text-sm text-brand-on-surface placeholder:text-brand-on-surface-variant/50 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white hover:bg-brand-primary-container transition-colors disabled:opacity-40 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

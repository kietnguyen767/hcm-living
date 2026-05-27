import { NextRequest, NextResponse } from "next/server";
import { searchLocalData, type Message, type Source } from "@/data/chatbotContext";

const TAVILY_API = "https://api.tavily.com/search";

function deduplicateSources(sources: Source[]): Source[] {
  const seen = new Set<string>();
  return sources.filter((s) => {
    const key = s.url && s.url !== "#" ? s.url : s.title;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: Message[] };

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { success: false, message: "Messages are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.TAVILY_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Tavily API key not configured" },
        { status: 500 }
      );
    }

    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
    const query = lastUserMsg?.content || "";

    const localAnswer = searchLocalData(query);
    if (localAnswer) {
      return NextResponse.json({
        success: true,
        data: {
          message: localAnswer.content,
          sources: deduplicateSources(localAnswer.sources),
        },
      });
    }

    const res = await fetch(TAVILY_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        query: `hãy cung cấp thông tin bằng tiếng Việt về: ${query}`,
        search_depth: "basic",
        include_answer: true,
        include_raw_content: false,
        max_results: 4,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Tavily API Error:", err);
      return NextResponse.json(
        { success: false, message: "Search failed" },
        { status: 502 }
      );
    }

    const data = await res.json();

    let reply = "";
    if (data.answer) {
      reply = data.answer;
    } else if (data.results?.length > 0) {
      reply = data.results
        .map(
          (r: { title: string; content: string; url?: string }, i: number) =>
            `**${i + 1}. ${r.title}**\n${r.content}`
        )
        .join("\n\n");
    }

    if (!reply) {
      reply = "Xin lỗi, tôi không tìm thấy thông tin cho câu hỏi của bạn.";
    }

    const tavilySources: Source[] = (data.results || []).map(
      (r: { title: string; url?: string }) => ({
        title: r.title,
        url: r.url || "",
      })
    );

    return NextResponse.json({
      success: true,
      data: {
        message: reply,
        sources: deduplicateSources(tavilySources),
      },
    });
  } catch (error) {
    console.error("API Chat Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

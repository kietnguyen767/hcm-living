import { NextResponse } from "next/server";
import { timelineEvents } from "@/data/timelineData";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: timelineEvents,
    });
  } catch (error) {
    console.error("API Timeline Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { stories } from "@/data/storiesData";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: stories,
    });
  } catch (error) {
    console.error("API Stories Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

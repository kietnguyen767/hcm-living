import { NextResponse } from "next/server";
import { quizQuestions } from "@/data/quizData";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: quizQuestions,
    });
  } catch (error) {
    console.error("API Quiz Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

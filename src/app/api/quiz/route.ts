import { NextResponse } from "next/server";
import { getQuizByBank, QuizBank } from "@/data/quizData";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const bankParam = searchParams.get("bank");
    
    // Validate bank parameter
    const validBanks: QuizBank[] = ['hcm', 'mln', 'all'];
    const bank: QuizBank = validBanks.includes(bankParam as QuizBank) ? (bankParam as QuizBank) : 'all';

    return NextResponse.json({
      success: true,
      data: getQuizByBank(bank),
    });
  } catch (error) {
    console.error("API Quiz Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

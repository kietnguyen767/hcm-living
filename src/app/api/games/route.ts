import { NextResponse } from "next/server";
import { matchGamePairs, memoryCards, sortingEvents } from "@/data/gamesData";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: {
        matchGame: matchGamePairs,
        memoryGame: memoryCards,
        sortingGame: sortingEvents,
      },
    });
  } catch (error) {
    console.error("API Games Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

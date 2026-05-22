import { NextResponse } from "next/server";
import { addFeedback } from "@/lib/feedback-store";
import type { FeedbackInput } from "@/lib/types/feedback";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FeedbackInput;

    if (!body.trade?.trim() || !body.frustration?.trim() || !body.mustHave?.trim()) {
      return NextResponse.json(
        { error: "Trade, frustration, and must-have fields are required." },
        { status: 400 }
      );
    }

    const entry = await addFeedback(body);
    return NextResponse.json({ ok: true, id: entry.id });
  } catch (error) {
    console.error("Failed to save feedback:", error);
    return NextResponse.json(
      { error: "Unable to save feedback right now. Please try again." },
      { status: 500 }
    );
  }
}

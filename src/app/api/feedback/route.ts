import { NextResponse } from "next/server";
import {
  isSupportEmailConfigured,
  sendFeedbackNotification,
} from "@/lib/send-support-email";
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

    if (!isSupportEmailConfigured()) {
      console.error("Feedback rejected: SMTP is not configured.");
      return NextResponse.json(
        {
          error:
            "Feedback email is not configured yet. Please email support@toolbeltlogic.com directly.",
        },
        { status: 503 }
      );
    }

    await sendFeedbackNotification(body);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send feedback email:", error);
    return NextResponse.json(
      { error: "Unable to send feedback right now. Please try again." },
      { status: 500 }
    );
  }
}

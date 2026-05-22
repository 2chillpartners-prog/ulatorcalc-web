import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";
import { listFeedback } from "@/lib/feedback-store";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;

  if (!token || !(await verifyAdminSession(token))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const entries = await listFeedback();
  return NextResponse.json({ entries });
}

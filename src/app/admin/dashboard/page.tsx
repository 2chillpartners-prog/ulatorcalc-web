"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { FeedbackEntry } from "@/lib/types/feedback";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [entries, setEntries] = useState<FeedbackEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadFeedback() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/feedback");
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      if (!res.ok) {
        setError("Unable to load feedback.");
        return;
      }
      const data = (await res.json()) as { entries: FeedbackEntry[] };
      setEntries(data.entries);
    } catch {
      setError("Unable to load feedback.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFeedback();
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Feedback Admin</h1>
          <p className="text-[#8B9CB3] text-sm">
            Customer and potential customer feedback submissions.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={loadFeedback}
            className="px-4 py-2 rounded-xl bg-[#243447] hover:bg-[#2d3f52] text-[#C8D6E5] text-sm font-semibold transition-colors"
          >
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl border border-white/10 hover:border-white/25 text-[#8B9CB3] hover:text-[#C8D6E5] text-sm font-semibold transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>

      {loading && (
        <p className="text-[#8B9CB3] text-sm">Loading feedback…</p>
      )}

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      {!loading && !error && entries.length === 0 && (
        <div className="bg-[#1B2838] border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-[#C8D6E5] font-semibold mb-1">No feedback yet</p>
          <p className="text-[#8B9CB3] text-sm">
            Submissions from the /feedback page will appear here.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {entries.map((entry) => (
          <article
            key={entry.id}
            className="bg-[#1B2838] border border-white/10 rounded-2xl p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <p className="text-white font-semibold">
                  {entry.name || "Anonymous"}
                </p>
                <p className="text-[#F5A623] text-sm">{entry.trade}</p>
              </div>
              <p className="text-[#8B9CB3] text-xs">{formatDate(entry.createdAt)}</p>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[#8B9CB3] text-xs uppercase tracking-widest mb-1">
                  Biggest frustration
                </p>
                <p className="text-[#C8D6E5]">{entry.frustration}</p>
              </div>
              <div>
                <p className="text-[#8B9CB3] text-xs uppercase tracking-widest mb-1">
                  Must-have feature
                </p>
                <p className="text-[#C8D6E5] whitespace-pre-wrap">{entry.mustHave}</p>
              </div>
              {entry.email && (
                <div>
                  <p className="text-[#8B9CB3] text-xs uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${entry.email}`}
                    className="text-[#d97706] hover:underline"
                  >
                    {entry.email}
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

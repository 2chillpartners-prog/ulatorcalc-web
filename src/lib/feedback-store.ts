import { Redis } from "@upstash/redis";
import { promises as fs } from "fs";
import path from "path";
import type { FeedbackEntry, FeedbackInput } from "@/lib/types/feedback";

const FEEDBACK_KEY = "ulatorcalc:feedback";
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "feedback.json");

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

async function readLocalFeedback(): Promise<FeedbackEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as FeedbackEntry[];
  } catch {
    return [];
  }
}

async function writeLocalFeedback(entries: FeedbackEntry[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function listFeedback(): Promise<FeedbackEntry[]> {
  const redis = getRedis();
  if (redis) {
    const entries = await redis.get<FeedbackEntry[]>(FEEDBACK_KEY);
    return entries ?? [];
  }

  const entries = await readLocalFeedback();
  return entries.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function createFeedbackEntry(input: FeedbackInput): FeedbackEntry {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name: input.name?.trim() || undefined,
    trade: input.trade.trim(),
    frustration: input.frustration.trim(),
    mustHave: input.mustHave.trim(),
    email: input.email?.trim() || undefined,
  };
}

function canUseLocalStorage(): boolean {
  return !process.env.VERCEL && getRedis() === null;
}

export async function saveFeedbackEntry(entry: FeedbackEntry): Promise<void> {
  const redis = getRedis();
  if (redis) {
    const existing = (await redis.get<FeedbackEntry[]>(FEEDBACK_KEY)) ?? [];
    await redis.set(FEEDBACK_KEY, [entry, ...existing]);
    return;
  }

  if (!canUseLocalStorage()) return;

  const existing = await readLocalFeedback();
  existing.unshift(entry);
  await writeLocalFeedback(existing);
}

export async function addFeedback(input: FeedbackInput): Promise<FeedbackEntry> {
  const entry = createFeedbackEntry(input);
  await saveFeedbackEntry(entry);
  return entry;
}

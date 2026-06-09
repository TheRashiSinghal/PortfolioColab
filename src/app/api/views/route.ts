import { Redis } from "@upstash/redis";
import { type NextRequest } from "next/server";

const KEY = "rs:views";

function makeRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export const dynamic = "force-dynamic";

export async function GET() {
  const redis = makeRedis();
  if (!redis) return Response.json({ count: 0 }, { status: 200 });

  const count = (await redis.get<number>(KEY)) ?? 0;
  return Response.json({ count });
}

export async function POST(_req: NextRequest) {
  const redis = makeRedis();
  if (!redis) return Response.json({ count: 0 }, { status: 200 });

  const count = await redis.incr(KEY);
  return Response.json({ count });
}

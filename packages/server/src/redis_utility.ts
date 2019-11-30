import * as Redis from "ioredis";
export const redisInstance = (process.env.NODE_ENV === "production") ? new Redis(process.env.REDIS_URL) : new Redis();

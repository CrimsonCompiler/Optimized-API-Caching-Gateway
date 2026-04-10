import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config({ quiet: true });

const redisClient = createClient({
  url: String(process.env.REDIS_URL),
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));
redisClient.on("connect", () => console.log("Connected to Redis"));

export const connectRedis = async () => {
  await redisClient.connect();
};

export default redisClient;

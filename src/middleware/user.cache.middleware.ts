import { Request, Response, NextFunction } from "express";
import redisClient from "../config/redisClient.js";

export const checkCache = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const cacheKey = req.originalUrl; // cache key for redis to store user data
  try {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log(`[Cache Hit] Redis is delivering the data: ${cacheKey}`); // logging the cache hit
      return res.status(200).json(JSON.parse(cachedData));
    }

    console.log(`[Cache Miss] No cache found for: ${cacheKey}`);
    next();
  } catch (error) {
    console.error("Error checking cache:", error);
    res.status(500).json({ error: "Failed to check cache" });
    next();
  }
};

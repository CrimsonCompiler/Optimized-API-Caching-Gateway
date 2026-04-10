import { Request, Response } from "express";
import { fetchUserFromAPI } from "../models/userModel.js";
import redisClient from "../config/redisClient.js";

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const cacheKey = req.originalUrl; // cache key for redis to store user data

  try {
    const userData = await fetchUserFromAPI(String(userId));

    if (userData) {
      await redisClient.setEx(cacheKey, 3600, JSON.stringify(userData)); // 1 hour
      console.log(`[Cache Saved] New data saved to Redis: ${cacheKey}`);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

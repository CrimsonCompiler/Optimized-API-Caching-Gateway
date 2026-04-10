import express from "express";
import redisClient from "./config/redisClient.js";

const app = express();
const PORT = 5000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

redisClient.connect().catch((err) => {
  console.error("Failed to connect to Redis:", err);
  process.exit(1); // Exit the application if Redis connection fails
});

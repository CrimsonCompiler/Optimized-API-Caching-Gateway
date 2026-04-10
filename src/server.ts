import express, { Request, Response, Application } from "express";
import redisClient from "./config/redisClient.js";
import mainRouter from "./routes/index.js";

const app: Application = express();
const PORT = 5000;
app.use(express.json());

app.use("/api", mainRouter);

app.get("/health", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: "Redis API Caching Gateway is running smoothly.." });
});

const startServer = async () => {
  try {
    await redisClient.connect();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to Redis:", error);
  }
};

startServer();

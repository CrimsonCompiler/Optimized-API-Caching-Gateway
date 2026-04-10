import { Router } from "express";
import { getUser } from "../controller/user.controller.js";
import { checkCache } from "../middleware/user.cache.middleware.js";

const router = Router();
router.get("/:userId", checkCache, getUser);

export default router;

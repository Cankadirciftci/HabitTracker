import express from "express";
import authRouter from "./authRouter.js";
import habitRouter from "./habitRouter.js";
import habitLogRouter from "./habitLogRouter.js";

const router = express.Router();

router.use("/auth",authRouter);
router.use("/habit",habitRouter);
router.use("/log",habitLogRouter);

export default router;
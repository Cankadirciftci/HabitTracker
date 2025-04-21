import express from "express";
import authRouter from "./authRouter.js";
import habitRouter from "./habitRouter.js";

const router = express.Router();

router.use("/auth",authRouter);
router.use("/habit",habitRouter);

export default router;
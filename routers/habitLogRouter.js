import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import checkUser from "../middleware/checkUser.js";
import {
    logHabit,
    getHabitLogs,
    getUserLogs,
}from "../controllers/habitLog.js";

const router = express.Router();

router.post("/log", verifyToken, checkUser, logHabit);
router.get("/logs/:habitId", verifyToken, checkUser, getHabitLogs);
router.get("/logs", verifyToken, checkUser, getUserLogs);


export default router;

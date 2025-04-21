import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import checkUser from "../middleware/checkUser.js";
import{
    createHabit,
    updateHabit,
}from "../controllers/habit.js";

const router = express.Router();

router.post("/create", verifyToken , checkUser, createHabit);
router.put("/update/:title", verifyToken, checkUser, updateHabit);


export default router;

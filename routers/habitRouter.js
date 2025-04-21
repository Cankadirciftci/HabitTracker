import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import checkUser from "../middleware/checkUser.js";
import{
    createHabit,
    updateHabit,
    deletedHabit,
    getAllUserHabits
}from "../controllers/habit.js";

const router = express.Router();

router.post("/create", verifyToken , checkUser, createHabit);
router.put("/update/:title", verifyToken, checkUser, updateHabit);
router.delete("/delete/:title", verifyToken, checkUser, deletedHabit);
router.get("/habits", verifyToken, checkUser, getAllUserHabits);


export default router;

import HabitLog from "../models/HabitLog.js";

async function logHabit(req , res) {
    const userId = req.userId || req.user._id;
    const { habitId, date, status } = req.body;

    try {
        const log = await HabitLog.findOneAndUpdate(
            { habitId, date }, // Aynı gün ve aynı habit için kontrol
            { habitId, userId, date, status }, // Güncelle veya oluştur
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        res.status(200).json({ message: "Log eklendi/güncellendi", log });
    } catch (error) {
        res.status(400).json({ message: "Log eklenemedi", error: error.message });
    }
};

async function getHabitLogs(req , res) {
    const { habitId } = req.params;

    try {
        const logs = await HabitLog.find({ habitId }).sort({ date: 1 });

        res.status(200).json({ logs });
    } catch (error) {
        res.status(500).json({ message: "Loglar alınamadı", error: error.message });
    }
};

async function getUserLogs(req , res)  {
    const userId = req.userId || req.user._id;

    try {
        const logs = await HabitLog.find({ userId }).populate("habitId", "title");

        res.status(200).json({ logs });
    } catch (error) {
        res.status(500).json({ message: "Kullanıcının logları alınamadı", error: error.message });
    }
};

export {
    logHabit,
    getHabitLogs,
    getUserLogs
};

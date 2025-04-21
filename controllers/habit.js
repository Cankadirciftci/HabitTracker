import Habit from "../models/Habit.js";
import User from "../models/User.js";


async function createHabit(req , res) {

    try{
        const {title} = req.body;
        if(!title){
            return res.status(400).json({error : 'Başlık alanını doldurunuz.'});
        }

        const habit = new Habit({
            title,
        });
        await habit.save();
        res.status(201).json({message : 'Alışkanlık oluşturuldu.'});
    }catch(error){
        console.error('Hata:', error);
        res.status(400).json({ message: 'Veri doğrulama hatası. Lütfen tüm alanları kontrol edin.', error });
    }
}

async function updateHabit(req, res) {
    const habitTitle = req.params.title;
    const { title, description, frequency } = req.body;

    if (!title) {
        return res.status(400).json({ message: "Yeni başlık (title) belirtilmedi." });
    }

    const updateFields = { title };
    if (description !== undefined) updateFields.description = description;
    if (frequency !== undefined) updateFields.frequency = frequency;

    try {
        const updatedHabit = await Habit.findOneAndUpdate(
            { title: habitTitle },
            updateFields,
            { new: true }
        );

        if (!updatedHabit) {
            return res.status(400).json({ message: "Alışkanlık bulunamadı." });
        }

        res.status(200).json({ message: "Alışkanlık güncellendi.", habit: updatedHabit });
    } catch (err) {
        res.status(500).json({ message: "Sunucu hatası.", error: err.message });
    }
}





export {
    createHabit,
    updateHabit,
};
import mongoose from 'mongoose';

const habitLogSchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Habit',
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  status: {
    type: String,
    enum: ['completed', 'skipped', 'none'],
    default: 'none'
  }
});

habitLogSchema.index({ habitId: 1, date: 1 }, { unique: true }); // Aynı gün birden fazla log olmasın


const habitLogModel = mongoose.model("HabitLog" , habitLogSchema);
export default habitLogModel;
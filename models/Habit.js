import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  frequency: {
    type: [String], // ['Mon', 'Wed', 'Fri']
    default: []
  },

  startDate: {
    type: Date,
    default: Date.now
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const habitModel = mongoose.model("Habit" , habitSchema);
export default habitModel;
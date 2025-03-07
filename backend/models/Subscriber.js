const mongoose = require("mongoose");
const { subscribe } = require("../routes/uploadRoutes");

const subsciberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", subsciberSchema);

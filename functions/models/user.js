const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    mn: false,
    unique: true,
  },
  password: {
    type: String,
    required: false,
    default: Date.now,
  },
  userName: {
    type: String,
    required: false,
    default: Date.now,
  },
  phone: {
    type: String,
    required: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

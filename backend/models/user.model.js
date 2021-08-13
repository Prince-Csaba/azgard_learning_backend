const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  google_id: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model("User", userSchema, "google-users");

module.exports = User;
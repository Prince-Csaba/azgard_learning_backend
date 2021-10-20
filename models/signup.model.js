const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String
  }
})

const SignedUser = mongoose.model("User", userSchema, "formSubscribers");

module.exports = SignedUser;
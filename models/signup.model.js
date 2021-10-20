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

const SignedUser = mongoose.model("Signeduser", userSchema, "formSubscribers");

module.exports = SignedUser;
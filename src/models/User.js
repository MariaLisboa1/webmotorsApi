const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  passworld: String,
  avatar: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

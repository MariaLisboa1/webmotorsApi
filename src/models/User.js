const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001400/f4a6ca4e-cbfd-437b-89df-78a5b4c0c65d_axmusu.jpg",
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

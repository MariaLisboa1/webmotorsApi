const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  ID: Number,
  Make: String,
  Model: String,
  Version: String,
  Image: {
    type: String,
    default:
      "https://res.cloudinary.com/ddtdxeaxl/image/upload/v1588001402/1aa00d9f-7b95-44a2-9032-e08b4e55aeac_edzoyu.jpg",
  },
  KM: Number,
  Price: String,
  YearModel: String,
  YearFab: String,
  Color: String,
  UserId: String,
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;

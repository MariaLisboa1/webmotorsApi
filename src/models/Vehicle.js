const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  ID: String,
  Make: String,
  Model: String,
  Version: String,
  Image: String,
  KM: Number,
  Price: String,
  YearModel: String,
  YearFab: String,
  Color: String,
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;

const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect(
    "mongodb+srv://joao:jo123456@cluster0-i2lqa.gcp.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

module.exports = { connect };

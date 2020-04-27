const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = { connect };

require("dotenv-safe").config();
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const app = express();
const routes = require("./src/routes");
const database = require("./config/database");

// const httpProxy = require("express-http-proxy");
// const cookieParser = require("cookie-parser");

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.get("/", (req, res) => res.json("HELLO"));
app.use("/", routes);

database
  .connect()
  .then(() =>
    app.listen(3000, () => console.log("App is listening on port 3000"))
  );

require("dotenv-safe").config();
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const app = express();
const routes = require("./src/routes");
const database = require("./config/database");

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/hello", (req, res) => res.json("HELLO"));
app.use("/", routes);

database
  .connect()
  .then(() =>
    app.listen(3000, () => console.log("App is listening on port 3000"))
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

if (process.env.NODE_ENV === "development") {
  require("dotenv-safe").config();
}

const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const routes = require("./src/routes");
const database = require("./config/database");

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/hello", (req, res) => res.json("HELLO"));
app.use("/", routes);

database
  .connect()
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`App is listening on port: ${process.env.PORT}`)
    )
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = userModel.find({ email });

    if (!user) return res.sendStatus(401);

    var token = jwt.sign({ id: user._id }, process.env.SECRET);

    res.status(200).send({ auth: true, token: token });
  }

  res.sendStatus(401);
});

router.get("/logout", (req, res) => {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;

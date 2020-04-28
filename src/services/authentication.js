const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class Auth {
  constructor(userModel) {
    this.user = userModel;
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (email && password) {
      const user = await this.user.findOne({ email: email });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send({ error: "email or password is wrong" });
      }

      var token = jwt.sign({ id: user._id }, process.env.SECRET);

      return res.status(200).send({ auth: true, token: token });
    }

    return res.status(401).send({ error: "email or password is wrong" });
  }

  logout(req, res) {
    return res.status(200).send({ auth: false, token: null });
  }
}

module.exports = Auth;

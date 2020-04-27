const jwt = require("jsonwebtoken");
const { verifyPassword } = require("../services/cryptography");

class Auth {
  constructor(userModel) {
    this.user = userModel;
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (email && password) {
      const user = await this.user.findOne({ email: email });

      if (!user || !verifyPassword(password, user.password)) {
        return res.sendStatus(401);
      }

      var token = jwt.sign({ id: user._id }, process.env.SECRET);

      return res.status(200).send({ auth: true, token: token });
    }

    return res.sendStatus(401);
  }

  logout(req, res) {
    return res.status(200).send({ auth: false, token: null });
  }
}

module.exports = Auth;

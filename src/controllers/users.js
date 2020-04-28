const cloudinary = require("../../config/cloudinary");

class UserController {
  constructor(userModel) {
    this.user = userModel;
  }

  async create(req, res) {
    try {
      let user = await this.user.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).send({ error: "User already registered" });
      }

      user = new this.user(req.body);
      await user.save();

      res.status(201).send(user);
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  }

  async getById(req, res) {
    const user = await this.user.findById(req.params.id);
    if (!user) return res.sendStatus(404);

    res.send(user);
  }

  async saveAvatar(req, res) {
    try {
      const user = await this.user.findById(req.params.id);

      if (!user) return res.sendStatus(404);

      const avatar = await cloudinary.upload(req.file.path);

      user.avatar = avatar.url;
      await user.save();

      res.sendStatus(204);
    } catch (error) {
      res.status(422).send({ error });
    }
  }
}

module.exports = UserController;

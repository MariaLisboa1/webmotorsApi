const cloudinary = require("../../config/cloudinary");

class UserController {
  constructor(userModel) {
    this.user = userModel;
  }

  async create(req, res) {
    const user = await this.user.create(req.body);
    res.status(201).send(user);
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

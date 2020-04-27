const cloudinary = require("../../config/cloudinary");

class VehicleController {
  constructor(vehicleMode) {
    this.vehicle = vehicleMode;
  }

  async create(req, res) {
    const user = await this.vehicle.create(req.body);
    res.status(201).send(user);
  }

  async remove(req, res) {
    await this.vehicle.findByIdAndRemove({ _id: req.params.id });

    res.send(204);
  }

  async getAll(req, res) {
    const vehicles = await this.vehicle.find({});

    res.send(vehicles);
  }

  async getById(req, res) {
    const vehicle = await this.vehicle.findById(req.params.id);
    if (!vehicle) return res.sendStatus(404);

    res.send(vehicle);
  }

  async saveImage(req, res) {
    try {
      const vehicle = await this.vehicle.findById(req.params.id);

      if (!vehicle) return res.sendStatus(404);

      const image = await cloudinary.upload(req.file.path);
      vehicle.Image = image.url;

      await vehicle.save();

      res.sendStatus(204);
    } catch (error) {
      res.status(422).send({ error: error.message });
    }
  }
}

module.exports = VehicleController;

const router = require("express").Router();
const upload = require("../../config/multer");
const VehicleController = require("../controllers/vehicles");
const vehicleModel = require("../models/Vehicle");
const vehicleController = new VehicleController(vehicleModel);
const auth = require("../middlewares/auth");

router.post("/", auth, (req, res) => vehicleController.create(req, res));
router.get("/", (req, res) => vehicleController.getAll(req, res));
router.get("/:id", auth, (req, res) => vehicleController.getById(req, res));
router.delete("/:id", auth, (req, res) => vehicleController.remove(req, res));
router.put("/image/:id", auth, upload.single("image"), (req, res) =>
  vehicleController.saveImage(req, res)
);

module.exports = router;

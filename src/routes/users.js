const router = require("express").Router();
const upload = require("../../config/multer");
const UserController = require("../controllers/users");
const userModel = require("../models/User");
const userController = new UserController(userModel);
const auth = require("../middlewares/auth");

router.post("/", (req, res) => userController.create(req, res));
router.get("/:id", auth, (req, res) => userController.getById(req, res));
router.put("/avatar/:id", upload.single("avatar"), (req, res) =>
  userController.saveAvatar(req, res)
);

module.exports = router;

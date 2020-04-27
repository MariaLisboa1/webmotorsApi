const router = require("express").Router();
const usersRoutes = require("./users");
const vehiclesRoutes = require("./vehicles");
const autheticationRoutes = require("./authentication");

router.use("/", autheticationRoutes);
router.use("/users", usersRoutes);
router.use("/vehicles", vehiclesRoutes);

module.exports = router;

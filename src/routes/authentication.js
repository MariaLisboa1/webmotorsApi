const router = require("express").Router();
const AutheticationService = require("../services/authentication");
const userModel = require("../models/User");
const authenticationService = new AutheticationService(userModel);

router.post("/login", (req, res) => authenticationService.login(req, res));
router.get("/logout", (req, res) => authenticationService.logout(req, res));

module.exports = router;

const express = require("express");
const { signupController } = require("../Controllers/auth.controller");
const router = express.Router();

router.post("/register", signupController);

module.exports = router;

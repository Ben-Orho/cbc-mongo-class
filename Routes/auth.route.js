const express = require("express");
const { signupController } = require("../Controllers/auth.controller");
const router = express.Router();

router.post("/signup", signupController);
router.get("/login");

module.exports = router;

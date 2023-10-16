const express = require("express");
const { login, register } = require("../controllers/authentication");
const router = express.Router();
const {
  emailValidate,
  registerValidate,
  loginValidate,
} = require("../middleware/authValidate");

router.route("/").get((req, res) => {
  res.send("Hello Server");
});

router.route("/shop").get((req, res) => {
  res.send("Hello Shop");
});

router.route("/login").post(loginValidate, emailValidate, login);

router.route("/register").post(registerValidate, emailValidate, register);

module.exports = router;

const express = require("express");
const { login, register } = require("../controllers/authentication");
const router = express.Router();
const {
  emailValidate,
  registerValidate,
  loginValidate,
} = require("../middleware/authValidate");
const { getItems } = require("../controllers/shop");
const upload = require("../middleware/multer");
const cloudinary = require("../utils/cloudinary");

const image = "../../client/src/images/about.webp";

router.route("/").get((req, res) => {
  res.send("Hello Server");
});

router.route("/uploadImage").post(upload.single("image"), (req, res) => {
  cloudinary.uploader.upload(req.file.path, (err, res) => {
    if (err) {
      console.log(err);
    }else{
      console.log(res)
    }
  });
});

router.route("/shop").get(getItems);

router.route("/login").post(loginValidate, emailValidate, login);

router.route("/register").post(registerValidate, emailValidate, register);

module.exports = router;

const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const {
  itemValidate,
  categoryValidate,
} = require("../middleware/shopValidate");
const { addNewItem, addNewCategory } = require("../controllers/shop");

router
  .route("/addNewItem")
  .post(upload.array("images"), itemValidate, addNewItem);

router.route("/addNewCategory").post(
  upload.single("image"),
  categoryValidate,
  addNewCategory
);

module.exports = router;

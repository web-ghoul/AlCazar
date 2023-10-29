const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const {
  itemValidate,
  categoryValidate,
} = require("../middleware/shopValidate");
const {
  addNewItem,
  addNewCategory,
  deleteItem,
  editItem,
  deleteCategory,
  getUsers,
  deleteUser,
  editCategory,
  editUser,
  makeUserAdmin
} = require("../controllers/dashboard");
const { authorization, isAdmin } = require("../middleware/authorized");
const { userValidate } = require("../middleware/userValidate");


//Items
router
  .route("/addNewItem")
  .post(authorization, isAdmin, upload.array("images"), itemValidate, addNewItem);

router.route("/deleteItem/:itemId").delete(authorization, isAdmin, deleteItem);

router.route("/editItem/:itemId").patch(authorization, isAdmin, upload.array("images"), itemValidate, editItem);


//Categories
router
  .route("/addNewCategory")
  .post(authorization, isAdmin, upload.array("image"), categoryValidate, addNewCategory);

router.route("/deleteCategory/:categoryId").delete(authorization, isAdmin, deleteCategory);

router.route("/editCategory/:categoryId").patch(authorization, isAdmin, upload.array("image"), categoryValidate, editCategory);

//Users
router.route("/users").get(authorization, isAdmin, getUsers)

router.route("/deleteUser/:userId").delete(authorization, isAdmin, deleteUser)

router.route("/editUser/:userId").patch(authorization, isAdmin, upload.array("image"), userValidate, editUser)

//Admins
router.route("/addNewAdmin").patch(authorization, isAdmin, makeUserAdmin)

module.exports = router;

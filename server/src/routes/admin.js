const express = require("express")
const router = express.Router()

const { itemValidate } = require("../middleware/shopValidate")
const { addNewItem } = require("../controllers/shop")

router.route("/addItem").post(itemValidate,addNewItem)

module.exports = router
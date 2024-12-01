const express = require("express")
const OrderController = require("../controllers/OrderController")
const { authentication } = require("../middleware/authentication")
const router = express.Router()

router.post("/orders",authentication, OrderController.insert)
router.get("/getAll",OrderController.getAll)

module.exports = router
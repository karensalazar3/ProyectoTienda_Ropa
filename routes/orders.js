const express = require("express");
const OrderController = require("../controllers/OrderController");
const { authentication } = require("../middleware/authentication");
const router = express.Router();

router.post("/order", authentication, (req, res) => {
    OrderController.insert(req, res);
});

router.get("/getAll", (req, res) => {
    OrderController.getAll(req, res);
});

module.exports = router;

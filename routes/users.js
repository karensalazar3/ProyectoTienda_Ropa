const express = require("express")
const UserController = require("../Controllers/UserController")
const user = require("../models/user")
const router = express.Router()

router.post("/create",UserController.create)

module.exports = router
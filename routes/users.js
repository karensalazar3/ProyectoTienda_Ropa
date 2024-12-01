const express = require("express")
const UserController = require("../Controllers/UserController")
const {authentication} = require('../middleware/authentication');
const router = express.Router()

router.post("/create", UserController.create)
router.post("/login",UserController.login)
router.delete("/logout",authentication,UserController.logout)
router.get("/getInfo",authentication,UserController.getUserInfoLogged)


module.exports = router
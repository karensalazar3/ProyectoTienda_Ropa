const express = require("express");
const CategoryController = require("../Controllers/CategoryController");
const router = express.Router();

router.post("/create",CategoryController.create)
router.get("/id/:id", CategoryController.getById)
router.put("/id/:id",CategoryController.update)
router.delete("/id/:id",CategoryController.delete)
router.get("/name/:name",CategoryController.getByName)
router.get("/getAll",CategoryController.getAll)

module.exports = router
const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();

router.post("/categories",CategoryController.create)
router.get("/id/:id",CategoryController.getByID)
router.put("/id/:id",CategoryController.update)
router.delete("/id/:id",CategoryController.delete)
router.get("/name/:name",CategoryController.getOneByName)
router.get("/getAll",CategoryController.getAll)

module.exports = router
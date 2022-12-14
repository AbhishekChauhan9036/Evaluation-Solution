const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const commonMW = require("../middlewares/commonMiddlewares")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook)
router.get("/createUser", commonMW.demoLogger, UserController.basicCode)

module.exports = router;
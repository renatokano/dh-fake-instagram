const express = require("express");
const router = express.Router();

const indexController = require('../controller/indexController')

router.get("/", indexController.index)


router.get("/login", indexController.login)


router.get("/registro", indexController.create)
router.post('/registro', indexController.store)


router.get("/home", indexController.home)



module.exports = router;

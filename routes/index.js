const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');

router.get("/", usersController.index);
router.get("/registro", usersController.create);
router.post('/registro', usersController.store);
router.get("/home", usersController.home);
router.get("/login", authController.login);

module.exports = router;

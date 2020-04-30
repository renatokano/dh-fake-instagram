const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');
const authenticationMiddleware = require('../middlewares/authentication');

// sign up
router.get("/registro", usersController.create);
router.post('/registro', usersController.store);
// sign in
router.get("/", authController.create);
router.get("/login", authController.create);
router.post("/login", authController.store);
// user page
router.get("/home", authenticationMiddleware, usersController.home);

module.exports = router;

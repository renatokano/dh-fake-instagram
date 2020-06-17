const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');
const authenticationMiddleware = require('../middlewares/authentication');
const publicationsController = require('../controllers/publicationsController');
const commentsController = require('../controllers/commentsController');

const upload = require('../config/uploads');

// sign up
router.get("/registro", usersController.create);
router.post('/registro', usersController.store);
// sign in
router.get("/", authController.create);
router.get("/login", authController.create);
router.post("/login", authController.store);
// user page
router.get("/home", authenticationMiddleware, publicationsController.index);
// publication page
router.get('/publicar', authenticationMiddleware, publicationsController.create);
router.post('/publicar', upload.any(), publicationsController.store);
router.get('/publicacao/:id/like', authenticationMiddleware, publicationsController.like);
// comments
router.post('/comentar', authenticationMiddleware, commentsController.store);
module.exports = router;

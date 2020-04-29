const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("auth/login", { title: "Express" });
});

router.get("/login", function (req, res, next) {
  res.render("auth/login", { title: "Express" });
});

router.get("/registro", function (req, res, next) {
  res.render("auth/register", { title: "Express" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

const controller = {
  login:  (req, res, next) => {
      res.render("auth/login", { title: "Express" });
  }
}

module.exports = controller;
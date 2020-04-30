const controller = {
  create:  (req, res, next) => {
      res.render("auth/login", { title: "Express" });
  }
}

module.exports = controller;
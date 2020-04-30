const controller = {
  create:  (_req, res) => {
      res.render("auth/login", { title: "Express" });
  }
}

module.exports = controller;
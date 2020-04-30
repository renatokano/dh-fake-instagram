const Sequelize = require('sequelize');
const config = require('../config/database');
const db = new Sequelize(config);
const bcrypt = require('bcrypt');

const controller = {
  create:  (_req, res) => {
      res.render("auth/login", { title: "Express" });
  },

  store: (req, res) => {
    const {email, password} = req.body;
    db.query("SELECT * FROM users WHERE email=:email LIMIT 1", {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          email
        }
    }).then(([user]) => {
      // some error occurred
     if(!user || !bcrypt.compareSync(password, user.password)){
        res.render('auth/login', {
          msg: "E-mail ou senha incorretos!"
        });
      } else {
      // success case
      // store user data in the session
      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username
      };
      res.redirect('/home');
      }
    });
  }
}

module.exports = controller;
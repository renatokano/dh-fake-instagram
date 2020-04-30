const Sequelize = require('sequelize');
const config = require('../config/database');
const db = new Sequelize(config);
const bcrypt = require('bcrypt');

const controller = {
  // form to login
  create:  (_req, res) => {
      res.render("auth/login", { title: "Express" });
  },

  // verify user credentials
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
        // user not found or wrong password
        res.render('auth/login', {
          msg: "E-mail ou senha incorretos!"
        });
      } else {
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
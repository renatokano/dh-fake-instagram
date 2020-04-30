const Sequelize = require('sequelize')
const config = require('../config/database') 
const db = new Sequelize(config)

let controller = {
  home:(req, res, next) => {
    res.render("index", { title: "Express" });
  },

  index: (req, res, next) => {
      res.render("auth/login", { title: "Express" });
  },

  create:  (req, res, next) => {
    res.render("auth/register", { title: "Express" });
  },

  store: (req, res, next) =>{
      let {email, name, username, password} = req.body
      const users = db.query("INSERT INTO USERS (name, email, username, password) VALUES(:name, :email, :username, :password)", { 
        type: Sequelize.QueryTypes.INSERT, 
        replacements: {name, email, username, password} 
      }).then((resultado) =>{
          res.render('sucesso')
      })
  }
}

module.exports = controller;
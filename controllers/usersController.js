const Sequelize = require('sequelize')
const config = require('../config/database') 
const db = new Sequelize(config)

let controller = {
  home:(req, res, next) => {
    res.render("index", { title: "Express" });
  },

  create:  (_req, res) => res.render("auth/register", { title: "Express" }),

  store: (req, res, next) =>{
      let {email, name, username, password} = req.body
      const users = db.query("INSERT INTO users (name, email, username, password) VALUES(:name, :email, :username, :password)", { 
        type: Sequelize.QueryTypes.INSERT, 
        replacements: {name, email, username, password} 
      }).then((resultado) =>{
          res.render('sucesso')
      })
  }
}

module.exports = controller;
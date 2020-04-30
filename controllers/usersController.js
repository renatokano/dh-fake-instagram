const Sequelize = require('sequelize')
const config = require('../config/database') 
const db = new Sequelize(config)

let controller = {
  home:(_req, res) => res.render("index", { title: "Express" }),

  create:  (_req, res) => res.render("auth/register", { title: "Express" }),

  store: (req, res) =>{
      let {email, name, username, password} = req.body;
      db.query("INSERT INTO users (name, email, username, password, created_at, updated_at) VALUES(:name, :email, :username, :password, :created_at, :updated_at)", { 
        type: Sequelize.QueryTypes.INSERT, 
        replacements: {
          name, 
          email, 
          username, 
          password, 
          created_at: new Date(), 
          updated_at: new Date()
        } 
      }).then((user) =>{
          !user ? res.render("auth/register", {msg: "Erro ao cadastrar usuário"}) : res.redirect("/home");
      }).catch(err => {
        res.render("auth/register", {msg: "Erro ao cadastrar usuário"});
        console.log(err);
      });
  }
}

module.exports = controller;
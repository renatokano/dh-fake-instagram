const Sequelize = require('sequelize');
const config = require('../config/database');
const db = new Sequelize(config);
const bcrypt = require('bcrypt');
const SALT = 10;

let controller = {
  home: (req, res) => {
    const {name, email, username} = req.session.user; 
    console.log(name, email, username);
    res.render("index", { 
      title: "Express",
      name,
      username,
      email
    });
  },

  create:  (_req, res) => res.render("auth/register", { title: "Express" }),

  store: (req, res) =>{
    let {email, name, username, password} = req.body;
    bcrypt.hash(password, SALT).then(hashPassword => {
      db.query("INSERT INTO users (name, email, username, password, created_at, updated_at) VALUES(:name, :email, :username, :password, :created_at, :updated_at)", { 
        type: Sequelize.QueryTypes.INSERT, 
        replacements: {
          name, 
          email, 
          username, 
          password: hashPassword, 
          created_at: new Date(), 
          updated_at: new Date()
        } 
      }).then((user) =>{
          if(!user){
            res.render("auth/register", {
              msg: "Erro ao cadastrar usuário"
            });
          } else {
            req.session.user = {
              name,
              email,
              username
            };
            res.redirect("/home");
          }
      }).catch(err => {
        res.render("auth/register", {msg: "Erro ao cadastrar usuário"});
        console.log(err);
      })
    });
  }
}

module.exports = controller;
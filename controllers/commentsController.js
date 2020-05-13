const {Comment} = require('../models');

const controller = {
  store: async (req, res) => {
    const {id, comment} = req.body;
    const user_id = req.session.user.id;
    console.log(user_id + ':' + id + ' - ' + comment);
    const newComment = await Comment.create({
      description: comment,
      publications_id: id,
      user_id,
      created_at: new Date(),
      updated_at: new Date()
    });
    if(!newComment){
      console.log('Erro ao comentar!!!');
    }
    return res.redirect('/home');
  }
}

module.exports = controller;
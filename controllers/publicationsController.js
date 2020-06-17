const {Publication, User, Comment} = require('../models');
const moment = require('moment');

const controller = {
  index: async (req, res) => {
    const publications = await Publication.findAll({
      order: [
        ['created_at', 'DESC']
      ],
      include: [{
        model: User,
        required: true
      },
      {
        model: Comment,
        required: false,
        include: {
          model: User
        }      
      }]
    });
    return res.render('index', {
      publications,
      title: "Express",
      moment
    });
  },

  create: (_req, res) => {
    res.render('post');
  },
  store: (req, res) => {
    const [image] = req.files;
    const {user} = req.session;
    Publication.create({
      image: image.filename,
      like: 0,
      users_id: user.id,
      created_at: new Date(),
      updated_at: new Date()
    });
    res.redirect('/home');
  },
  like: async (req, res) => {
    const {id: idPost} = req.params;
    const result = await Publication.increment(
      'like', {
        by: 1,
        where: {id: idPost}
      }
    );
    // const publicationData = await Publication.findByPk(id);
    // publicationData.like++
    // await publicationDate.save();
    console.log(`Result: ${result}`);
    res.redirect('/home');
  }
}

module.exports = controller;
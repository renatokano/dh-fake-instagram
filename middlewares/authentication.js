module.exports = (req, res, next) => {
  // verify if a user session exists
  if(!req.session.user) res.redirect('/login');
  // if not
  next();
}
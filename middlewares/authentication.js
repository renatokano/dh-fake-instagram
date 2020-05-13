module.exports = (req, res, next) => {
  // user not logged in
  if(!req.session.user) res.redirect('/login');

  res.locals.user = req.session.user;
  // user has a session
  next();
}
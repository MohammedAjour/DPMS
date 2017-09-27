module.exports = (req, res) => {
  // modify this code (just example)
  const { username } = req.user;
  res.render('home', {username: username});
};

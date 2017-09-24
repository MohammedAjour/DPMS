
exports.post = (req, res) => {
  const {username, email, password} = req.user;
  // checke if the cridts is right
  res.send('login');
};
exports.get = (req, res) => {
  console.log('login form');
  res.render('login');
};

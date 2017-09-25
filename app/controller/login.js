
exports.post = (req, res) => {
  const {USER} = req;
  // checke if the cridts is right
  res.send('login');
};
exports.get = (req, res) => {
  console.log('login form');
  res.render('login');
};

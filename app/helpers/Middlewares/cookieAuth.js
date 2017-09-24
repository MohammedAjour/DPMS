const jwt = require('jsonwebtoken');
const router = require('../../controller/index.js');
module.exports = (req, res, next) => {
  const {cookies} = req;
  if (!cookies.token) {
    if (req.url === '/signup') {
      if (req.method === 'POST') {
        req.user = {
          username: req.body.username,
          password: req.body.pwd,
          email: req.body.email,
          address: req.body.address
        };
      }
      return next();
    }
    const routsList = router.stack.map(route => route.route.path);
    if (req.url === '/login' && req.method === 'POST') {
      const email = req.body.username;
      const password = req.body.password;
      req.user = {email: email, password: password};
      return next();
    }
    if (routsList.indexOf(req.url) !== -1) {
      res.redirect('/');
      return;
    }
    return next();
  } else {
    const token = cookies.token;
    const userId = cookies.user_id;
    jwt.verify(token, 'theSaltForSMDM', (err, email) => {
      if (err) return next(err);
      else {
        req.user = {email: email, userId: userId};
        return next();
      }
    });
  }
};

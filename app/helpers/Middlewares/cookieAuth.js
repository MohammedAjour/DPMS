const jwt = require('jsonwebtoken');
const router = require('../../controller/index.js');
module.exports = (req, res, next) => {
  const {cookie} = req;
  if (!cookie) {
    if (req.url === '/signup') {
      if (req.method === 'POST') {
        req.user = {
          username: req.body.username,
          password: req.body.pwd,
          email: req.body.email,
          address: req.body.address
        };
      }
      next();
    }
    const routsList = router.stack.map(route => route.route.path);
    console.log(JSON.stringify(routsList));
    if (req.url === '/login' && req.method === 'POST') {
      const email = req.body.username;
      const password = req.body.password;
      req.user = {email: email, password: password};
      next();
    }
    if (routsList.indexOf(req.url) !== -1) {
      req.url = '/login'; req.method = 'GET';
    }
    next();
  } else {
    const token = req.cookie.token;
    const userId = req.cookie.user_id;
    jwt.verify(token, 'theSaltForSMDM', (err, email) => {
      if (err) next(err);
      else {
        req.url = req.url === '/login' ? '/' : req.url;
        req.user = {email: email, userId: userId};
        next();
      }
    });
  }
};

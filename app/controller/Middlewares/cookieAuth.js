const jwt = require('jsonwebtoken');
const router = require('../index.js');
module.exports = (req, res, next) => {
  const {cookie} = req;
  if (!cookie) {
    const routsList = router.stack.map(route => route.route.path);
    console.log(JSON.stringify(routsList));
    if (req.url === '/login' && req.method === 'POST') {
      const email = req.body.username;
      const password = req.body.password;
      req.user = {email: email, password: password};
    }
    if (routsList.indexOf(req.url) !== -1) {
      req.url = '/login'; req.method = 'GET';
    }
    next();
  } else {
    const token = req.cookie.token;
    jwt.verify(token, 'theSaltForSMDM', (err, email) => {
      if (err) next(err);
      else {
        req.url = req.url === '/login' ? '/' : req.url;
        req.user = {email: email};
        next();
      }
    });
  }
};

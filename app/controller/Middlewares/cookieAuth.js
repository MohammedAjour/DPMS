const cookies = require('cookie');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const {cookie} = req;
  if (!cookie) {
    req.url = '/login';
    next();
  } else {
    const token = cookies.parse(req.cookie).token;
    jwt.verify(token, 'theSaltForSMDM', (err, user) => {
      if (err) next(err);
      else {
        req.user = {username: user};
        next();
      }
    });
  }
};

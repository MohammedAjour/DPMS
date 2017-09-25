const {loginFormValidator} = require('../helpers/validator.js');
const {checkUser} = require('../models/queries/db_queries.js');
const jwtMaker = require('../helpers/cookieEncrypt.js');
exports.post = (req, res, next) => {
  const {user} = req;
  // validat the reiceived users info
  // checke if the cridts is right
    //
  // redirecte the user to home
  console.log(user);
  if (!loginFormValidator(user).valid) return res.render('login', {errStatus: true, err: 'invalid email address'});
  checkUser(user, (err, result) => {
    if (err) return next(err);
    if (!result.rows.length > 0) return res.render('login', {errStatus: true, err: 'this user not exist'});
    const user = {username: result.rows[0].name, email: result.rows[0].email, userID: result.rows[0].id};
    jwtMaker(user, (err, token) => {
      if (err) return next(err);
      res.cookie('token', token, { httpOnly: true });
      return res.redirect('/');
    });
  });
};

exports.get = (req, res) => {
  res.render('login', {layout: 'formMain'});
};

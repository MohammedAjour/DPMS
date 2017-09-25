const { isUser, signUpNewUser } = require('../models/queries/db_queries.js');
const {regFormValidator} = require('../helpers/validator.js');
const cookieEncrypt = require('../helpers/cookieEncrypt.js');
const bcrypt = require('bcrypt');
exports.get = (req, res, next) => {
  res.render('signUp', {valid: true});
};
exports.post = (req, res, next) => {
  // validate the form
  // check if the user already exist
  // insert the new user
  const {user} = req;

  if (!regFormValidator(user).valid) return res.render('signUp', regFormValidator(user));
  isUser(user.email, (err, exist) => {
    if (err) return next(err);
    if (exist) return res.redirect('/login');
            // the user already exist ,redirect him home
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        signUpNewUser(user, (err, insertionState) => {
          if (err) return next(err);
          const user = {name: insertionState.username, email: insertionState.email};
          cookieEncrypt(user, (err, token) => {
            if (err) return next(err);
            res.cookie('token', token, { httpOnly: true });
            res.redirect('/');
          });
        });
      });
    });
  });
};

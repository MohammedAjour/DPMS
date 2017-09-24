const { isUser, signUpNewUser } = require('../models/queries/db_queries.js');
const {regFormValidator} = require('../helpers/validator.js');

exports.get = (req, res, next) => {
  res.render('sign_up', {valid: true});
};
exports.post = (req, res, next) => {
  // validate the form
  // check if the user already exist
  // insert the new user

  const user = req.user = {
    username: req.body.name,
    password: req.body.pwd,
    email: req.body.email,
    address: req.body.address
  };
  if (regFormValidator(user).valid) {
    isUser(user.email, (err, state) => {
      if (err) {
        next(err);
      } else {
        if (state) {
          // the user already exist ,redirect him home
        } else {
          // sign the user up
        }
      }
    });
  } else { // if the form have invalide data
    res.render('sign_up.hbs', {error: 'there is an error '});
  }
};

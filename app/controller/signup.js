const { isUser, signUpNewUser } = require('../models/queries/db_queries.js');
const {regFormValidator} = require('../helpers/validator.js');

exports.get = (req, res, next) => {
  console.log('login form mmmmmmmm');
  // res.send('login nnnnnnnn');
  res.render('signUp');
};
exports.post = (req, res, next) => {
  // validate the form
  // check if the user already exist
  // insert the new user
  console.log('asdasdasdasd', req.user);
  res.send(req.user);
  const user = req.user = {
    username: req.body.name,
    password: req.body.pwd,
    email: req.body.email,
    address: req.body.address
  };
  if (!regFormValidator(user).valid) {
    return res.render('sign_up.hbs', {error: 'there is an error '});
  }
  isUser(user.email, (err, exist) => {
    if (err) return next(err);
    if (exist) return res.redirect('/login');          // the user already exist ,redirect him home
    user.password = bcrypt.hashSync(user.password, 'theSaltForSMDM');
    signUpNewUser(user, (err, insertionState) => {
      if (err) return next(err);
      if (insertionState) {

      }
    });
  });
};

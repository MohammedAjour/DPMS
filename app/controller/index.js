const router = require('express').Router();
// delete the following when adding actual routes
  // example for requiring controllers
// const login = require('./login.js');
const home = require('./home.js');

  // example for routes
router.get('/', home);
// router.get('/login', login);

module.exports = router;

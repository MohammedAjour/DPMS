const router = require('express').Router();
// delete the following when adding actual routes
  // example for requiring controllers
const login = require('./login.js');
const home = require('./home.js');
  // example for routes
router.get('/', home);
router.get('/customer', (req, res) => {
  res.send('customer page');
});
router.get('/login', login.get);
router.post('/login', login.post);
router.get('*', (req, res) => {
  res.status(404);
  res.send('URL cannot found' + JSON.stringify({ url: req.protocol + '://' + req.get('host') + req.originalUrl }));
});
module.exports = router;

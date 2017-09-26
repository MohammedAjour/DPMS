const {findCustomer} = require('../models/queries/db_queries.js');
module.exports = (req, res, next) => {
  const searchKey = req.body.searchKey || 's';
  // let { userID } = req.user;
  const userID = 1;
  findCustomer(searchKey, userID, (err, result) => {
    if (err) return next(err);
    res.json(result.rows);
  });
};

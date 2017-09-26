const { addCustomer,
        getCustomerDebts,
        getCustomer } = require('../models/queries/db_queries.js');

exports.post = (req, res, next) => {
  // create new customer
  const { name, phone, address } = req.body;
  const { userID } = req.user;
  // validate
  if (!(name && phone && name.length > 3 && phone.length > 6)) return res.json({status: false, err: 'Not Valid customer details'});
  // create customer
  const customer = {name: name, phone: phone, address: address};
  addCustomer(customer, userID, (err, result) => {
    if (err) return next(err);
    return res.redirect('/customer/' + result.rows[0].id);
  });
};

exports.get = (req, res, next) => {
  // example route `/customer/41` customerId=req.params.id = 41
  const customerId = req.params.id;
  const { userID } = req.user;
  getCustomer(customerId, userID, (err, result) => {
    if (err) return next(err);
    if (result.rows.length < 1) return res.render('customerNotFound');
    const custmerPageDetails = {
      name: result.rows[0].name,
      phone: result.rows[0].phone,
      address: result.rows[0].address
    };
    getCustomerDebts(customerId, (err, debts) => {
      console.log(result.rows);
      if (err) return next(err);
      custmerPageDetails.debts = debts;
      res.render('customer', custmerPageDetails);
    });
  });
};

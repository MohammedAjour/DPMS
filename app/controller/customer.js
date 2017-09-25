module.exports = (req, res, next) => {
  req.params.id;
  res.render('customer', {customer: req.params.id});
};

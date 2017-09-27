exports.post = (req, res, nex) => {
// adding the debts
// const {debts } = req.body
  console.log(req.body);
};
exports.get = (req, res, nex) => {
  res.render('addDebts');
};

exports.post = (req, res, nex) => {
// adding the debts
// const {debts } = req.body
res.send('addDebtHandler')
};
exports.get = (req, res, nex) => {
  res.render('addDebts');
};

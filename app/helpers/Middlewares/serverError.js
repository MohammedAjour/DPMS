module.exports = (err, req, res, next) => {
  console.error('uytuytuytuyt', err.stack);
  res.status(500).send('Something broke!');
};

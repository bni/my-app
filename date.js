module.exports = (req, res) => {
  res.end(`The date is ${Date.now()} in ${process.env.NOW_REGION}`);
};

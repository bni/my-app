module.exports = (req, res) => {
  console.log("Do something!!!");

  res.end(`The date is ${Date.now()} in ${process.env.NOW_REGION}`);
};

module.exports = (req, res) => {
  console.log(`Log something ${Date.now()}!!!!`);

  res.end(`The date is ${Date.now()} in ${process.env.NOW_REGION}`);
};

const headsets = require("../data/headesets.json");

const { parse } = require("url");

module.exports = (req, res) => {
  const { query } = parse(req.url, true);
  const { id } = query;

  let result;
  if (!id) {
    result = headsets;
  } else {
    for (const headset of headsets) {
      if (headset.id.toString() === id) {
        result = headset;
      }
    }
  }

  res.writeHead(result ? 200 : 400, { "Content-Type": "application/json" });

  res.end(result ? JSON.stringify(result) : JSON.stringify({message: `Unknown headset id ${id}`}));
};

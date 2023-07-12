const data = require("../db/db");

const allProductController = (req, res) => {
  res.status(200).json({ data: data });
};

module.exports = allProductController;

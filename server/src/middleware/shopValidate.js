const { itemSchemaValidate } = require("../utils/shopSchemaValidate");

const itemValidate = async (req, res, next) => {
  try {
    await itemSchemaValidate.validateAsync(req.body);
    next();
  } catch (err) {
    err.message = err.message
      .split("")
      .filter((char) => char !== '"' && char !== "/")
      .join("");
    res.status(405).json({ error: err.message });
  }
};

module.exports = { itemValidate };

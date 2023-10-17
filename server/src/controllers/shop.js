const Item = require("../models/item");

const getItems = async (req, res, next) => {
  try {
    const items = await Item.find({});
    res.status(200).json({ items });
  } catch (err) {
    res.status(405).json({ error: err.message });
  }
};

const addNewItem = async (req, res, next) => {
  try {
    const { title } = req.body;
    const item = await Item.find({ title });
    if (item) {
      res.status(401).json({ error: "Choose Another Title" });
    } else {
        
    }
  } catch (error) {
    res.status(405).json({ error: err.message });
  }
};

module.exports = { getItems, addNewItem };

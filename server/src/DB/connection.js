const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.DB_URL);
const DB_Connect = mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = DB_Connect;

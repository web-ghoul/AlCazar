const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is Required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);

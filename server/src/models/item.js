const mongoose = require("mongoose");

const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is Required"],
    },
    price: {
      type: Number,
      required: [true, "price is Required"],
    },
    category: {
      type: String,
      enum: [],
      required: [true, "Category is Required"],
    },
    images: {
      type: Array,
      of: String,
      required: [true, "Images is Required"],
    },
    dimension: {
      type: Map,
      of: Number,
    },
    count: {
      type: Number,
      required: [true, "Count is Required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);

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
      required: [true, "Images is Required"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      min: [8, "Must Password will be 8 Characters at least"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);

const joi = require("joi");

const itemSchemaValidate = joi.object({
  title: joi.string().required().messages({
    "string.base": "Title should be a string.",
    "any.required": "Title is required.",
  }),
  price: joi.number().required().messages({
    "number.base": "Price should be a number.",
    "any.required": "Price is required.",
  }),
  category: joi.string().required().messages({
    "string.base": "Category should be a string.",
    "any.required": "Category is required.",
    "any.only": "Category must be one of Category1, Category2, or Category3.",
  }),
  images: joi.array().items(joi.string()).required().messages({
    "array.base": "Images should be an array of strings.",
    "any.required": "Images are required.",
  }),
  dimension: joi.object().pattern(/./, joi.number()).messages({
    "object.base": "Dimension should be an object with number values.",
  }),
  count: joi.number().required().messages({
    "number.base": "Count should be a number.",
    "any.required": "Count is required.",
  }),
});

module.exports = {
  itemSchemaValidate,
};

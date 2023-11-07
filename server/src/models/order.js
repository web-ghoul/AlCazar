const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        userId: {
            type: mongoose.ObjectId,
            required: [true, "UserId is Required"],
        },
        items: {
            type: Array,
            of: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
            required: [true, "Items is Required"],
        },
        itemsQuantities: {
            type: Array,
            of: Number,
            required: [true, "Items Quantities is Required"],
        },
        totalPrice: {
            type: Number,
            required: [true, "Total Price is Required"],
        },
        status: {
            type: String,
            enum: ["pending", "delivered"],
            required: [true, "Status is Required"],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);

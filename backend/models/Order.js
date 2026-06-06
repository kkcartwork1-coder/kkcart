

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
items: [
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: Number,
  },
],
  totalAmount: Number,
  address: String,
  paymentMethod: String, // COD / UPI
  paymentStatus: String, // Pending / Paid
  orderStatus: {
    type: String,
    default: "Pending",
  },

  paymentScreenshot: {
  type: String,
  default: "",
},

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
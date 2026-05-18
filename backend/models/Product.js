// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   image: String,
//   category: String,
//   stock: Number,
//   description: String,
// });

// module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,

    price: Number,

    image: String,

    category: String,

    type: String,

    stock: Number,

    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
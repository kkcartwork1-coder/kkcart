const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");

router.get("/dashboard", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalUsers = await User.countDocuments();

    const orders = await Order.find();

    const totalRevenue = orders.reduce((sum, order) => {
      return sum + Number(order.totalAmount || 0);
    }, 0);

    const liveOrders = await Order.countDocuments({
      orderStatus: {
        $in: ["Pending", "Confirmed", "Packed", "Out for Delivery"],
      },
    });

    const deliveredOrders = await Order.countDocuments({
      orderStatus: "Delivered",
    });

    res.json({
      totalProducts,
      totalOrders,
      totalUsers,
      totalRevenue,
      liveOrders,
      deliveredOrders,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Dashboard error" });
  }
});

module.exports = router;
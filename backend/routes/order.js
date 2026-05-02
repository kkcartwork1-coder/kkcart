const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Place order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: "Order failed", error: err.message });
  }
});

// Admin: all orders
router.get("/admin/all", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.productId")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: "Admin orders fetch failed", error: err.message });
  }
});

// Admin: update order status
router.put("/admin/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: "Status update failed", error: err.message });
  }
});

// User orders
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .populate("items.productId")
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: "Order fetch failed", error: err.message });
  }
});

module.exports = router;
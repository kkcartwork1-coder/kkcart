const multer = require("multer");
// const {
//   CloudinaryStorage,
// } = require(
//   "multer-storage-cloudinary"
// );
const { CloudinaryStorage } = require(
  "multer-storage-cloudinary-v2"
);
const cloudinary = require(
  "../config/cloudinary"
);
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

const storage =
  new CloudinaryStorage({
    cloudinary,
    params: {
      folder:
        "kkcart-payment-proof",
    },
  });

const upload =
  multer({ storage });

// Place order
// router.post(
//   "/",
//   upload.single(
//     "paymentScreenshot"
//   ),
//   async (req, res) => {
//   try {
//     const order = new Order(req.body);
//     await order.save();
//     res.json(order);
//   } catch (err) {
//     res.status(500).json({ msg: "Order failed", error: err.message });
//   }
// });
// const order = new Order({
//   ...req.body,

//   items: JSON.parse(
//     req.body.items
//   ),

//   paymentScreenshot:
//     req.file?.path || "",
// });
router.post(
  "/",
  upload.single("paymentScreenshot"),
  async (req, res) => {
    try {
      const order = new Order({
        ...req.body,

        items: JSON.parse(req.body.items),

        paymentScreenshot:
          req.file?.path || "",
      });

      await order.save();

      res.json(order);
    } catch (err) {
      res.status(500).json({
        msg: "Order failed",
        error: err.message,
      });
    }
  }
);

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
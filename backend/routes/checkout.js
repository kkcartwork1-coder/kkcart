const express = require("express");
const router = express.Router();

const getDistanceInKm = require("../utils/distance");
const getDeliveryFee = require("../utils/deliveryFee");

router.post("/calc-delivery", (req, res) => {
  try {
    const {
      customerLat,
      customerLng,
      restaurantLat,
      restaurantLng
    } = req.body;

    const distance = getDistanceInKm(
      restaurantLat,
      restaurantLng,
      customerLat,
      customerLng
    );

    const deliveryFee = getDeliveryFee(distance);

    if (deliveryFee === null) {
      return res.json({
        success: false,
        message: "Delivery not available beyond 10 km"
      });
    }

    return res.json({
      success: true,
      distance: distance.toFixed(2),
      deliveryFee
    });

  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
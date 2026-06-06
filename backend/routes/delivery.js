// const express = require("express");
// const router = express.Router();

// const getDistanceInKm = require("../utils/distance");
// const getDeliveryFee = require("../utils/deliveryFee");

// router.post("/calculate", (req, res) => {
//   try {
//     const {
//       customerLat,
//       customerLng,
//       restaurantLat,
//       restaurantLng
//     } = req.body;

//     const distance = getDistanceInKm(
//       restaurantLat,
//       restaurantLng,
//       customerLat,
//       customerLng
//     );

//     const fee = getDeliveryFee(distance);

//     if (fee === null) {
//       return res.json({
//         success: false,
//         message: "Delivery not available beyond 10 km"
//       });
//     }

//     res.json({
//       success: true,
//       distance: distance.toFixed(2),
//       deliveryFee: fee
//     });

//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Server error"
//     });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();

// const getDistanceInKm = require("../utils/distance");
// const getDeliveryFee = require("../utils/deliveryFee");

// router.post("/calculate", (req, res) => {
//   const { customerLat, customerLng } = req.body;

//   // ✅ OWNER LOCATION FROM ENV
//   const restaurantLat = process.env.RESTAURANT_LAT;
//   const restaurantLng = process.env.RESTAURANT_LNG;

//   const distance = getDistanceInKm(
//     restaurantLat,
//     restaurantLng,
//     customerLat,
//     customerLng
//   );

//   const fee = getDeliveryFee(distance);

//   // ❌ NOT DELIVERABLE ABOVE 10 KM
//   if (fee === null) {
//     return res.json({
//       success: false,
//       message: "Delivery not available beyond 10 km"
//     });
//   }

//   res.json({
//     success: true,
//     distance: distance.toFixed(2),
//     deliveryFee: fee
//   });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const calculateDistance = require("../utils/distance");
const getDeliveryFee = require("../utils/deliveryFee");

// const STORE_LAT = 19.920023;
// const STORE_LNG = 86.191796;

const STORE_LAT = 20.303876
const STORE_LNG = 85.847381

router.post("/check", async (req, res) => {
  try {
    const { lat, lng } = req.body;

    const distance = calculateDistance(
      STORE_LAT,
      STORE_LNG,
      lat,
      lng
    );

    const fee = getDeliveryFee(distance);

    if (fee === null) {
      return res.status(400).json({
        success: false,
        message: "Delivery not available beyond 7 km"
      });
    }

    res.json({
      success: true,
      distance,
      deliveryFee: fee
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
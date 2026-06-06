// // utils/deliveryFee.js

// function getDeliveryFee(distanceKm) {
//   if (distanceKm > 11) {
//     return null; // not deliverable
//   }

// function getDeliveryFee(distance) {
//   if (distance <= 1) return 0;

//   if (distance <= 5) return 20;

//   if (distance <= 10) return 50;

//   return null;
// }

// module.exports = getDeliveryFee;
// }

// module.exports = getDeliveryFee;

// utils/deliveryFee.js

function getDeliveryFee(distance) {
  // 0 - 1 KM = Free
  if (distance <= 1) {
    return 0;
  }

    // 1 - 2 KM = ₹10
  if (distance <= 2) {
    return 10;
  }

  // 2 - 5 KM = ₹20
  if (distance <= 5) {
    return 20;
  }

  // 5 - 7 KM = ₹30
  if (distance <= 7) {
    return 30;
  }

  // Beyond 7 KM = Not Deliverable
  return null;
}

module.exports = getDeliveryFee;
// utils/deliveryFee.js

function getDeliveryFee(distanceKm) {
  if (distanceKm > 11) {
    return null; // not deliverable
  }

function getDeliveryFee(distance) {
  if (distance <= 1) return 0;

  if (distance <= 5) return 20;

  if (distance <= 10) return 50;

  return null;
}

module.exports = getDeliveryFee;
}

module.exports = getDeliveryFee;
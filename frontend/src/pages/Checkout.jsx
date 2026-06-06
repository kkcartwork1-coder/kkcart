import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Clock3,
  Wallet,
  Truck,
  BadgePercent,
  ShieldCheck,
  CreditCard,
  Banknote,
  Smartphone,
  ChevronRight,
} from "lucide-react";
import toast from "react-hot-toast";
import API from "../api";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart,  increaseQty,
  decreaseQty } = useContext(CartContext);

  const [paymentScreenshot, setPaymentScreenshot] =
  useState(null);

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    house: "",
    area: "",
    landmark: "",
    city: "",
    pincode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [transactionId, setTransactionId] = useState("");
  const [coupon, setCoupon] = useState("");
  const [placing, setPlacing] = useState(false);

  const [distance, setDistance] = useState(0);
const [deliveryFee, setDeliveryFee] = useState(0);
const [deliveryAllowed, setDeliveryAllowed] = useState(true);
const [loadingLocation, setLoadingLocation] = useState(false);

  const itemTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  // const deliveryFee = itemTotal > 0 ? 20 : 0;
  const handlingFee = itemTotal > 0 ? 5 : 0;
  const discount = coupon.toUpperCase() === "KK50" ? 50 : 0;

  // const grandTotal = Math.max(
  //   itemTotal + deliveryFee + handlingFee - discount,
  //   0
  // );
  const grandTotal = Math.max(
  itemTotal +
    Number(deliveryFee || 0) +
    Number(handlingFee || 0) -
    Number(discount || 0),
  0
);

  // const getCurrentLocation = () => {
  //   setLoadingLocation(true);

  //   navigator.geolocation.getCurrentPosition(
  //     async (position) => {
  //       try {
  //         const lat = position.coords.latitude;
  //         const lng = position.coords.longitude;

  //         const res = await API.post("/delivery/check", {
  //           lat,
  //           lng,
  //         });

  //         setDistance(res.data.distance);
  //         // setDeliveryFee(res.data.deliveryFee);
  //         setDeliveryFee(Number(res.data.deliveryFee) || 0);
  //         setDeliveryAllowed(true);

  //         toast.success("Location detected");
  //       } catch (err) {
  //         setDeliveryAllowed(false);
  //         setDistance(0);
  //         setDeliveryFee(0);

  //         toast.error(
  //           err.response?.data?.message ||
  //             "Delivery unavailable beyond 7 km"
  //         );
  //       } finally {
  //         setLoadingLocation(false);
  //       }
  //     },
  //     () => {
  //       setLoadingLocation(false);
  //       toast.error("Location permission denied");
  //     }
  //   );
  // };

//   const getCurrentLocation = () => {
//   setLoadingLocation(true);

//   navigator.geolocation.getCurrentPosition(
//     async (position) => {
//       try {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

//         // Delivery Check
//         const deliveryRes = await API.post(
//           "/delivery/check",
//           { lat, lng }
//         );

//         setDistance(deliveryRes.data.distance || 0);
//         setDeliveryFee(
//           Number(deliveryRes.data.deliveryFee) || 0
//         );

//         // Reverse Geocoding
//         const geoRes = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//         );

//         const geoData = await geoRes.json();

//         const addr = geoData.address || {};

//         setAddress((prev) => ({
//           ...prev,
//           house:
//             geoData.display_name || "",

//           area:
//             addr.suburb ||
//             addr.neighbourhood ||
//             addr.village ||
//             "",

//           city:
//             addr.city ||
//             addr.town ||
//             addr.state_district ||
//             "",

//           pincode:
//             addr.postcode || "",
//         }));

//         toast.success("Location added");
//       } catch (err) {
//         console.log(err);

//         toast.error(
//           "Unable to fetch location"
//         );
//       } finally {
//         setLoadingLocation(false);
//       }
//     },
//     () => {
//       setLoadingLocation(false);
//       toast.error(
//         "Location permission denied"
//       );
//     }
//   );
// };

  const getCurrentLocation = () => {
  setLoadingLocation(true);

  if (!navigator.geolocation) {
    toast.error("Geolocation not supported in this browser");
    setLoadingLocation(false);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        console.log("Location:", lat, lng);

        // Delivery Check
        const deliveryRes = await API.post("/delivery/check", {
          lat,
          lng,
        });

        setDistance(deliveryRes.data.distance || 0);
        setDeliveryFee(Number(deliveryRes.data.deliveryFee) || 0);

        // Reverse Geocoding
        const geoRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );

        const geoData = await geoRes.json();

        const addr = geoData.address || {};

        setAddress((prev) => ({
          ...prev,
          house: geoData.display_name || "",
          area:
            addr.suburb ||
            addr.neighbourhood ||
            addr.village ||
            "",
          city:
            addr.city ||
            addr.town ||
            addr.state_district ||
            "",
          pincode: addr.postcode || "",
        }));

        useEffect(() => {
  const savedAddress =
    localStorage.getItem("deliveryAddress");

  if (savedAddress) {
    setAddress(JSON.parse(savedAddress));
  }
}, []);


useEffect(() => {
  localStorage.setItem(
    "deliveryAddress",
    JSON.stringify(address)
  );
}, [address]);

        toast.success("Location detected successfully");
      } catch (err) {
        console.log("LOCATION PROCESS ERROR:", err);
        toast.error("Failed to process location");
      } finally {
        setLoadingLocation(false);
      }
    },

    (error) => {
      console.log("GEOLOCATION ERROR:", error);

      setLoadingLocation(false);

      switch (error.code) {
        case error.PERMISSION_DENIED:
          toast.error("Permission denied. Enable location access.");
          break;

        case error.POSITION_UNAVAILABLE:
          toast.error("Location unavailable. Turn on GPS.");
          break;

        case error.TIMEOUT:
          toast.error("Location request timed out.");
          break;

        default:
          toast.error("Unable to find location.");
      }
    },

    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    }
  );
};

  const placeOrder = async () => {
    const userId = localStorage.getItem("userId");

    if (!deliveryAllowed) {
      toast.error("Delivery unavailable beyond 7 km");
      return;
    }

    if (distance === 0) {
      toast.error("Please verify delivery location");
      return;
    }

    if (!userId) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    if (!cart.length) {
      toast.error("Cart is empty");
      navigate("/cart");
      return;
    }

    if (
      !address.fullName ||
      !address.phone ||
      !address.house ||
      !address.area ||
      !address.city ||
      !address.pincode
    ) {
      toast.error("Please enter delivery address");
      return;
    }

    if (paymentMethod === "UPI" && !transactionId.trim()) {
      toast.error("Enter UPI transaction ID");
      return;
    }

    try {
      setPlacing(true);

      // await API.post("/orders", {
      //   userId,
      //   items: cart.map((item) => ({
      //     productId: item._id,
      //     quantity: item.qty,
      //   })),
      //   address: `${address.fullName}, ${address.phone}, ${address.house}, ${address.area}, ${address.landmark}, ${address.city} - ${address.pincode}`,
      //   paymentMethod,
      //   transactionId,
      //   totalAmount: grandTotal,
      //   paymentStatus:
      //     paymentMethod === "COD" ? "Pending" : "Paid",
      //   orderStatus: "Pending",
      // });
      const formData = new FormData();

formData.append("userId", userId);

formData.append(
  "items",
  JSON.stringify(
    cart.map((item) => ({
      productId: item._id,
      quantity: item.qty,
    }))
  )
);

formData.append(
  "address",
  `${address.fullName},
   ${address.phone},
   ${address.house},
   ${address.area},
   ${address.city}`
);

formData.append(
  "paymentMethod",
  paymentMethod
);

formData.append(
  "transactionId",
  transactionId
);

formData.append(
  "totalAmount",
  grandTotal
);

formData.append(
  "paymentStatus",
  paymentMethod === "COD"
    ? "Pending"
    : "Paid"
);

if (paymentScreenshot) {
  formData.append(
    "paymentScreenshot",
    paymentScreenshot
  );
}

await API.post(
  "/orders",
  formData,
  {
    headers: {
      "Content-Type":
        "multipart/form-data",
    },
  }
);

      clearCart();
      navigate("/order-success");
    } catch (err) {
      toast.error(
        err.response?.data?.msg || "Order failed"
      );
    } finally {
      setPlacing(false);
    }
  };

  if (!cart.length) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
        <div className="bg-white rounded-[28px] border shadow-sm p-8 text-center max-w-md w-full">
          <h1 className="text-2xl font-black">
            Your cart is empty
          </h1>
          <p className="text-gray-500 mt-2">
            Add products before checkout.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-2xl font-black"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-5">
          {/* Delivery card */}
          <div className="bg-white rounded-[28px] border shadow-sm p-5">
            {/* <div className="flex items-center gap-3 mb-5">
              <MapPin className="text-orange-500" />
              <h2 className="font-black text-xl">
                Delivery Address
              </h2>
            </div> */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" />
                <h2 className="font-black text-xl">
                  Delivery Address
                </h2>
              </div>

              <button
                onClick={getCurrentLocation}
                className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-bold"
              >
                {loadingLocation
                  ? "Locating..."
                  : "Use Current Location"}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Full Name"
                value={address.fullName}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    fullName: e.target.value,
                  })
                }
                className="border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                placeholder="Phone Number"
                value={address.phone}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    phone: e.target.value,
                  })
                }
                className="border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                placeholder="House / Flat / Floor"
                value={address.house}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    house: e.target.value,
                  })
                }
                className="border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-400 md:col-span-2"
              />

              <input
                placeholder="Area / Street / Colony"
                value={address.area}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    area: e.target.value,
                  })
                }
                className="border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-400 md:col-span-2"
              />

              <input
                placeholder="Landmark (Optional)"
                value={address.landmark}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    landmark: e.target.value,
                  })
                }
                className="border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-400 md:col-span-2"
              />

              <input
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    city: e.target.value,
                  })
                }
                className="border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                placeholder="Pincode"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    pincode: e.target.value,
                  })
                }
                className="border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-400"
              />
{/* 
              {distance > 0 && (
                <div className="mt-5 bg-orange-50 border border-orange-200 rounded-2xl p-4">
                  <p className="font-bold">
                    Distance: {distance.toFixed(2)} km
                  </p>

                  <p className="font-bold">
                    Delivery Fee: ₹{deliveryFee}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    0-1 km = Free, 1-2 km = ₹10, 2-5 km = ₹25, 5-7 km = ₹35,
                  </p>
                </div>
              )} */}
            </div>
          </div>

          {/* ETA */}
          <div className="bg-white rounded-[28px] border shadow-sm p-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <Clock3 />
              </div>

              <div>
                <h3 className="font-black">
                  Delivery in 10 minutes
                </h3>
                <p className="text-gray-500 text-sm">
                  Fast delivery from nearby store
                </p>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-[28px] border shadow-sm p-5">
            <div className="flex items-center gap-3 mb-5">
              <Wallet className="text-orange-500" />
              <h2 className="font-black text-xl">
                Payment Method
              </h2>
            </div>

            <div className="space-y-3">
              <PayOption
                active={paymentMethod === "COD"}
                onClick={() =>
                  setPaymentMethod("COD")
                }
                icon={<Banknote />}
                title="Cash on Delivery"
              />
              {/* {grandTotal >= 299 && (
  <PayOption
    active={paymentMethod === "COD"}
    onClick={() => setPaymentMethod("COD")}
    icon={<Banknote />}
    title="Cash on Delivery"
  />
)} */}

{/* {grandTotal < 299 && (
  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm">
    COD available only for orders above ₹299
  </div>
)} */}

              <PayOption
                active={paymentMethod === "UPI"}
                onClick={() =>
                  setPaymentMethod("UPI")
                }
                icon={<Smartphone />}
                title="UPI Payment"
              />
              <div className="bg-orange-50 p-4 rounded-2xl mt-4">
  <p className="font-bold">
    UPI ID
  </p>

  <p className="text-green-600 font-black">
    kkcute6253-5@okaxis
  </p>
</div>
<div className="mt-4 text-center">
  <img
    src="/upi.jpeg"
    alt="UPI QR"
    className="w-56 mx-auto rounded-2xl border"
  />

  <p className="text-sm mt-2 text-gray-500">
    Scan & Pay
  </p>
</div>

<input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setPaymentScreenshot(e.target.files[0])
  }
  className="w-full mt-4"
/>

            </div>

            {paymentMethod === "UPI" && (
              <input
                value={transactionId}
                onChange={(e) =>
                  setTransactionId(e.target.value)
                }
                placeholder="Enter UPI transaction ID"
                className="w-full mt-4 border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-400"
              />
              
            )}
          </div>

          {/* Coupon */}
          <div className="bg-white rounded-[28px] border shadow-sm p-5">
            <div className="flex items-center gap-3 mb-4">
              <BadgePercent className="text-orange-500" />
              <h2 className="font-black text-xl">
                Apply Coupon
              </h2>
            </div>

            <div className="flex gap-3">
              <input
                value={coupon}
                onChange={(e) =>
                  setCoupon(e.target.value)
                }
                placeholder="Enter code (Try KK50)"
                className="flex-1 border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button className="bg-orange-500 text-white px-5 rounded-2xl font-black">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5 sticky top-24 h-fit">
          <div className="bg-white rounded-[28px] border shadow-sm p-5">
            <h2 className="font-black text-xl mb-4">
              Order Summary
            </h2>

            <div className="space-y-4 max-h-64 overflow-auto pr-1">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-3"
                >
                  <img
                    src={
                      item.image ||
                      "/products/default.jpg"
                    }
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover bg-orange-50"
                  />

                  <div className="flex-1">
                    <h4 className="font-bold text-sm line-clamp-2">
                      {item.name}
                    </h4>

                    {/* <p className="text-xs text-gray-500">
                      Qty {item.qty}
                    </p> */}
                    <div className="flex items-center gap-2 mt-2">
  <button
    onClick={() => decreaseQty(item._id)}
    className="w-7 h-7 rounded-lg bg-gray-100 font-bold"
  >
    -
  </button>

  <span className="font-bold">
    {item.qty}
  </span>

  <button
    onClick={() => increaseQty(item._id)}
    className="w-7 h-7 rounded-lg bg-orange-500 text-white font-bold"
  >
    +
  </button>
</div>
                  </div>

                  <p className="font-black text-sm">
                    ₹{item.price * item.qty}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t mt-5 pt-5 space-y-3 text-sm">
              <Row
                label="Item Total"
                value={`₹${itemTotal}`}
              />
              {/* <Row
                label="Delivery Fee"
                value={`₹${deliveryFee}`}
              /> */}

              <Row
  label="Delivery Fee"
  value={`₹${Number(deliveryFee || 0)}`}
/>
              <Row
                label="Handling Fee"
                value={`₹${handlingFee}`}
              />

              {discount > 0 && (
                <Row
                  label="Discount"
                  value={`-₹${discount}`}
                  green
                />
              )}

              {!deliveryAllowed && (
                <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4">
                  Delivery unavailable beyond 7 km
                </div>
              )}

              <div className="border-t pt-4 flex justify-between text-lg font-black">
                <span>To Pay</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={placeOrder}
              disabled={
                placing ||
                !deliveryAllowed ||
                distance === 0
              }
              className="w-full mt-5 bg-orange-500 text-white py-4 rounded-2xl font-black hover:bg-orange-600 disabled:opacity-60"
            >
              {placing
                ? "Placing Order..."
                : `Place Order ₹${grandTotal}`}
            </button>
          </div>

          <div className="bg-white rounded-[28px] border shadow-sm p-5">
            <div className="flex gap-3">
              <Truck className="text-orange-500" />
              <div>
                <h3 className="font-black">
                  Quick Delivery
                </h3>
                <p className="text-sm text-gray-500">
                  Fastest delivery in your area
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <ShieldCheck className="text-green-600" />
              <div>
                <h3 className="font-black">
                  Secure Payments
                </h3>
                <p className="text-sm text-gray-500">
                  Safe & trusted checkout
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-5 text-orange-500 font-black">
              <span>Need help?</span>
              <ChevronRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function PayOption({
  active,
  onClick,
  icon,
  title,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full border rounded-2xl p-4 flex items-center gap-3 text-left transition ${active
        ? "border-orange-500 bg-orange-50"
        : "hover:bg-gray-50"
        }`}
    >
      <div className="text-orange-500">
        {icon}
      </div>

      <span className="font-black">{title}</span>
    </button>
  );
}

function Row({ label, value, green }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className={green ? "text-green-600 font-bold" : ""}>
        {value}
      </span>
    </div>
  );
}
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MapPin, CreditCard, Wallet } from "lucide-react";
// import API from "../api";
// import { CartContext } from "../context/CartContext";

// export default function Checkout() {
//   const navigate = useNavigate();
//   const { cart, clearCart } = useContext(CartContext);

//   const [address, setAddress] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [transactionId, setTransactionId] = useState("");
//   const [loading, setLoading] = useState(false);

//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
//   const deliveryFee = subtotal > 0 ? 20 : 0;
//   const total = subtotal + deliveryFee;

//   const placeOrder = async () => {
//     const userId = localStorage.getItem("userId");

//     if (!userId) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("Cart is empty");
//       navigate("/");
//       return;
//     }

//     if (!address.trim()) {
//       alert("Please enter delivery address");
//       return;
//     }

//     if (paymentMethod === "UPI" && !transactionId.trim()) {
//       alert("Please enter UPI transaction ID");
//       return;
//     }

//     const orderData = {
//       userId,
//       items: cart.map((item) => ({
//         productId: item._id,
//         quantity: item.qty,
//       })),
//       totalAmount: total,
//       address,
//       paymentMethod,
//       paymentStatus: paymentMethod === "COD" ? "Pending" : "Paid",
//       transactionId: paymentMethod === "UPI" ? transactionId : "",
//       orderStatus: "Pending",
//     };

//     try {
//       setLoading(true);

//       await API.post("/orders", orderData);

//       clearCart();
//       alert("Order placed successfully 🎉");
//       navigate("/");
//     } catch (err) {
//       console.log(err.response?.data || err.message);
//       alert("Error placing order");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-6">
//       <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 space-y-5">
//           <div className="bg-white rounded-2xl shadow p-5">
//             <div className="flex items-center gap-2 mb-4">
//               <MapPin className="text-green-600" />
//               <h1 className="text-2xl font-bold">Delivery Address</h1>
//             </div>

//             <textarea
//               rows="4"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter full delivery address"
//               className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           <div className="bg-white rounded-2xl shadow p-5">
//             <div className="flex items-center gap-2 mb-4">
//               <CreditCard className="text-green-600" />
//               <h2 className="text-2xl font-bold">Payment Method</h2>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <button
//                 onClick={() => setPaymentMethod("COD")}
//                 className={`border rounded-xl p-4 text-left ${
//                   paymentMethod === "COD"
//                     ? "border-green-600 bg-green-50"
//                     : "border-gray-200"
//                 }`}
//               >
//                 <h3 className="font-bold">Cash on Delivery</h3>
//                 <p className="text-sm text-gray-500">Pay after delivery</p>
//               </button>

//               <button
//                 onClick={() => setPaymentMethod("UPI")}
//                 className={`border rounded-xl p-4 text-left ${
//                   paymentMethod === "UPI"
//                     ? "border-green-600 bg-green-50"
//                     : "border-gray-200"
//                 }`}
//               >
//                 <h3 className="font-bold">UPI Payment</h3>
//                 <p className="text-sm text-gray-500">Pay manually by UPI</p>
//               </button>
//             </div>

//             {paymentMethod === "UPI" && (
//               <div className="mt-5">
//                 <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
//                   <div className="flex items-center gap-2 mb-1">
//                     <Wallet className="text-green-600" size={20} />
//                     <h3 className="font-bold">Pay to this UPI ID</h3>
//                   </div>
//                   <p className="text-gray-700 font-semibold">yourupi@upi</p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     After payment, enter transaction ID below.
//                   </p>
//                 </div>

//                 <input
//                   value={transactionId}
//                   onChange={(e) => setTransactionId(e.target.value)}
//                   placeholder="Enter UPI Transaction ID"
//                   className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl shadow p-5 h-fit sticky top-24">
//           <h2 className="text-xl font-bold mb-4">Order Summary</h2>

//           <div className="space-y-3 mb-4">
//             {cart.map((item) => (
//               <div key={item._id} className="flex justify-between text-sm">
//                 <span>
//                   {item.name} × {item.qty}
//                 </span>
//                 <span>₹{item.price * item.qty}</span>
//               </div>
//             ))}
//           </div>

//           <hr />

//           <div className="space-y-3 text-sm mt-4">
//             <div className="flex justify-between">
//               <span>Item total</span>
//               <span>₹{subtotal}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Delivery fee</span>
//               <span>₹{deliveryFee}</span>
//             </div>

//             <div className="flex justify-between text-lg font-bold border-t pt-3">
//               <span>Total</span>
//               <span>₹{total}</span>
//             </div>
//           </div>

//           <button
//             onClick={placeOrder}
//             disabled={loading}
//             className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 disabled:bg-gray-400"
//           >
//             {loading ? "Placing Order..." : `Place Order (${paymentMethod})`}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
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
  const { cart, clearCart } = useContext(CartContext);

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

  const itemTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const deliveryFee = itemTotal > 0 ? 20 : 0;
  const handlingFee = itemTotal > 0 ? 5 : 0;
  const discount = coupon.toUpperCase() === "KK50" ? 50 : 0;

  const grandTotal = Math.max(
    itemTotal + deliveryFee + handlingFee - discount,
    0
  );

  const placeOrder = async () => {
    const userId = localStorage.getItem("userId");

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

      await API.post("/orders", {
        userId,
        items: cart.map((item) => ({
          productId: item._id,
          quantity: item.qty,
        })),
        address: `${address.fullName}, ${address.phone}, ${address.house}, ${address.area}, ${address.landmark}, ${address.city} - ${address.pincode}`,
        paymentMethod,
        transactionId,
        totalAmount: grandTotal,
        paymentStatus:
          paymentMethod === "COD" ? "Pending" : "Paid",
        orderStatus: "Pending",
      });

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
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="text-orange-500" />
              <h2 className="font-black text-xl">
                Delivery Address
              </h2>
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

              <PayOption
                active={paymentMethod === "UPI"}
                onClick={() =>
                  setPaymentMethod("UPI")
                }
                icon={<Smartphone />}
                title="UPI Payment"
              />

              <PayOption
                active={paymentMethod === "CARD"}
                onClick={() =>
                  setPaymentMethod("CARD")
                }
                icon={<CreditCard />}
                title="Debit / Credit Card"
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

                    <p className="text-xs text-gray-500">
                      Qty {item.qty}
                    </p>
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
              <Row
                label="Delivery Fee"
                value={`₹${deliveryFee}`}
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

              <div className="border-t pt-4 flex justify-between text-lg font-black">
                <span>To Pay</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={placeOrder}
              disabled={placing}
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
      <span className="text-gray-600">
        {label}
      </span>

      <span
        className={
          green
            ? "text-green-600 font-black"
            : "font-bold"
        }
      >
        {value}
      </span>
    </div>
  );
}
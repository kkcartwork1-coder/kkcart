// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
// import { CartContext } from "../context/CartContext";

// export default function Cart() {
//   const { cart, increaseQty, decreaseQty, removeFromCart } =
//     useContext(CartContext);

//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
//   const deliveryFee = subtotal > 0 ? 20 : 0;
//   const total = subtotal + deliveryFee;

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//         <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
//           <ShoppingBag className="mx-auto text-green-600 mb-4" size={56} />

//           <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>

//           <p className="text-gray-500 mb-6">
//             Add groceries to continue shopping.
//           </p>

//           <Link
//             to="/"
//             className="block bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
//           >
//             Start Shopping
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Cart Items */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow p-5">
//           <h1 className="text-2xl font-bold mb-5">My Cart</h1>

//           <div className="space-y-4">
//             {cart.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex gap-4 border rounded-xl p-4 items-center"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-24 h-24 object-cover rounded-xl bg-gray-100"
//                 />

//                 <div className="flex-1">
//                   <h2 className="font-semibold text-lg">{item.name}</h2>
//                   <p className="text-gray-500 text-sm">{item.category}</p>
//                   <p className="font-bold text-green-600 mt-1">
//                     ₹{item.price}
//                   </p>

//                   <div className="flex items-center gap-3 mt-3">
//                     <button
//                       onClick={() => decreaseQty(item._id)}
//                       className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
//                     >
//                       <Minus size={16} />
//                     </button>

//                     <span className="font-semibold">{item.qty}</span>

//                     <button
//                       onClick={() => increaseQty(item._id)}
//                       className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700"
//                     >
//                       <Plus size={16} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="text-right">
//                   <p className="font-bold">₹{item.price * item.qty}</p>

//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="text-red-500 mt-4 flex items-center gap-1 hover:text-red-600"
//                   >
//                     <Trash2 size={16} />
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bill Details */}
//         <div className="bg-white rounded-2xl shadow p-5 h-fit sticky top-24">
//           <h2 className="text-xl font-bold mb-4">Bill Details</h2>

//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between">
//               <span>Item total</span>
//               <span>₹{subtotal}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Delivery fee</span>
//               <span>₹{deliveryFee}</span>
//             </div>

//             <hr />

//             <div className="flex justify-between text-lg font-bold">
//               <span>Total</span>
//               <span>₹{total}</span>
//             </div>
//           </div>

//           <Link
//             to="/checkout"
//             className="block mt-6 bg-green-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-700"
//           >
//             Proceed to Checkout
//           </Link>

//           <Link
//             to="/"
//             className="block mt-3 text-center text-green-600 font-semibold"
//           >
//             Add more items
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Clock,
  ShieldCheck,
  Tag,
  Bike,
  ChevronRight,
} from "lucide-react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function Cart() {
  const navigate = useNavigate();

  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const itemTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = itemTotal > 0 ? 20 : 0;
  const handlingFee = itemTotal > 0 ? 5 : 0;
  const discount = itemTotal >= 499 ? 50 : 0;
  const grandTotal = itemTotal + deliveryFee + handlingFee - discount;

  const goCheckout = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
        <div className="bg-white rounded-[28px] shadow-sm border p-8 text-center max-w-md w-full">
          <ShoppingBag className="mx-auto text-orange-500 mb-4" size={62} />

          <h1 className="text-2xl font-black mb-2">Your cart is empty</h1>

          <p className="text-gray-500 mb-6">
            Add groceries, snacks, dairy and daily essentials.
          </p>

          <Link
            to="/"
            className="block bg-orange-500 text-white py-3 rounded-xl font-black hover:bg-orange-600"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] px-4 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-[28px] shadow-sm border p-5">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl">
                <Clock size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-black">
                  Delivery in 10 minutes
                </h1>
                <p className="text-gray-500 text-sm">
                  Shipment of {cart.length} item{cart.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] shadow-sm border overflow-hidden">
            <div className="p-5 border-b">
              <h2 className="text-xl font-black">Items in your cart</h2>
            </div>

            {cart.map((item) => {
              const imageSrc =
                item.image && item.image.trim() !== ""
                  ? item.image
                  : "/products/default.jpg";

              return (
                <div
                  key={item._id}
                  className="flex gap-4 p-4 border-b last:border-none"
                >
                  <img
                    src={imageSrc}
                    alt={item.name}
                    className="w-24 h-24 rounded-2xl object-cover bg-orange-50"
                    onError={(e) => {
                      e.currentTarget.src = "/products/default.jpg";
                    }}
                  />

                  <div className="flex-1">
                    <h3 className="font-black text-gray-900 line-clamp-2">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.category}
                    </p>

                    <p className="font-black text-gray-900 mt-2">
                      ₹{item.price}
                    </p>

                    <button
                      onClick={() => {
                        removeFromCart(item._id);
                        toast.success("Item removed");
                      }}
                      className="text-red-500 text-sm font-bold mt-2 flex items-center gap-1"
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <div className="flex items-center border border-orange-500 rounded-xl overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="w-9 h-9 flex items-center justify-center text-orange-600"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="w-9 h-9 flex items-center justify-center bg-orange-500 text-white font-black">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item._id)}
                        className="w-9 h-9 flex items-center justify-center text-orange-600"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <p className="font-black">₹{item.price * item.qty}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-[28px] shadow-sm border p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Tag className="text-orange-500" />
                <div>
                  <h3 className="font-black">Apply Coupon</h3>
                  <p className="text-gray-500 text-sm">
                    Save more with available offers
                  </p>
                </div>
              </div>
              <ChevronRight className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="space-y-4 h-fit sticky top-24">
          <div className="bg-white rounded-[28px] shadow-sm border p-5">
            <h2 className="text-xl font-black mb-4">Bill Details</h2>

            <div className="space-y-3 text-sm">
              <Row label="Item total" value={`₹${itemTotal}`} />
              <Row label="Delivery fee" value={`₹${deliveryFee}`} />
              <Row label="Handling fee" value={`₹${handlingFee}`} />

              {discount > 0 && (
                <Row label="Discount" value={`-₹${discount}`} green />
              )}

              <div className="border-t pt-4 flex justify-between text-lg font-black">
                <span>To Pay</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            {itemTotal < 499 && (
              <div className="mt-4 bg-orange-50 border border-orange-100 rounded-2xl p-3 text-sm text-orange-700 font-bold">
                Add ₹{499 - itemTotal} more to get ₹50 off
              </div>
            )}

            <button
              onClick={goCheckout}
              className="w-full mt-5 bg-orange-500 text-white py-4 rounded-2xl font-black hover:bg-orange-600"
            >
              Proceed to Pay ₹{grandTotal}
            </button>
          </div>

          <div className="bg-white rounded-[28px] shadow-sm border p-5">
            <div className="flex gap-3 mb-4">
              <Bike className="text-orange-500" />
              <div>
                <h3 className="font-black">Fast delivery</h3>
                <p className="text-sm text-gray-500">
                  Your order will arrive fresh and quick.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="text-green-600" />
              <div>
                <h3 className="font-black">100% secure checkout</h3>
                <p className="text-sm text-gray-500">
                  COD and UPI supported.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="block text-center text-orange-500 font-black"
          >
            Add more items
          </Link>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, green }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span className={green ? "text-green-600 font-black" : "font-bold"}>
        {value}
      </span>
    </div>
  );
}
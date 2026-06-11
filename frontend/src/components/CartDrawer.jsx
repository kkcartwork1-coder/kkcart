import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartDrawer({ open, setOpen }) {
  const {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* DRAWER */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl p-4 animate-up">

        {/* HANDLE */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-3" />

        <h2 className="text-lg font-bold mb-3">
          Your Cart ({cart.length})
        </h2>

        {/* ITEMS */}
        <div className="max-h-64 overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between py-2 border-b"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ₹{item.price}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item._id)}>
                  -
                </button>

                <span>{item.qty}</span>

                <button onClick={() => addToCart(item)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="flex justify-between mt-4 font-bold">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>

        {/* CHECKOUT */}
        <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-2xl font-bold">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
}
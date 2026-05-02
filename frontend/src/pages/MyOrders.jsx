// import { useEffect, useState } from "react";
// import API from "../api";

// export default function MyOrders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (userId) {
//       API.get(`/orders/${userId}`)
//         .then((res) => setOrders(res.data))
//         .catch((err) => console.log(err));
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-2xl font-bold mb-5">My Orders</h1>

//         {orders.length === 0 ? (
//           <p>No orders found.</p>
//         ) : (
//           <div className="space-y-4">
//             {order.items.map((item) => (
//               <div key={item._id} className="flex items-center gap-3 mt-3">
//                 <img
//                   src={item.productId?.image || "/products/default.jpg"}
//                   className="w-14 h-14 rounded-xl object-cover"
//                 />

//                 <div className="flex-1">
//                   <p className="font-bold">{item.productId?.name}</p>
//                   <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//                 </div>

//                 <p className="font-bold">
//                   ₹{item.productId?.price * item.quantity}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../api";
import toast from "react-hot-toast";
import { PackageCheck, Truck } from "lucide-react";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await API.get(`/orders/${userId}`);
      setOrders(res.data);
    } catch (err) {
      toast.error("Orders load failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-black text-orange-500 mb-6">
        My Orders
      </h1>

      <div className="space-y-5">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-3xl shadow p-5"
          >
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h2 className="font-black">
                  Order #{order._id.slice(-6)}
                </h2>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold text-sm">
                {order.orderStatus}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {order.items?.map((item, index) => {
                const product = item.productId || item;
                const qty = item.quantity || item.qty || 1;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={
                        product?.image ||
                        "/products/default.jpg"
                      }
                      className="w-16 h-16 rounded-xl object-cover bg-orange-50"
                    />

                    <div className="flex-1">
                      <p className="font-black">
                        {product?.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty {qty}
                      </p>
                    </div>

                    <p className="font-black">
                      ₹{Number(product?.price || 0) * qty}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between">
              <p className="font-bold">
                Total ₹{order.totalAmount}
              </p>

              <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                <Truck size={16} />
                {order.orderStatus}
              </div>
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <div className="bg-white rounded-3xl p-8 text-center">
            <PackageCheck
              className="mx-auto text-orange-500 mb-3"
              size={50}
            />
            <h2 className="font-black text-xl">
              No orders yet
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
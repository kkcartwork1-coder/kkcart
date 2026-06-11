// import { useEffect, useState } from "react";
// import API from "../api";
// import toast from "react-hot-toast";
// import {
//   PackageCheck,
//   MapPin,
//   CreditCard,
//   Truck,
//   Phone,
//   User,
// } from "lucide-react";

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const res = await API.get("/orders/admin/all");
//       setOrders(res.data);
//     } catch (err) {
//       toast.error("Failed to load orders");
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const updateStatus = async (id, status) => {
//     try {
//       await API.put(`/orders/admin/${id}`, { orderStatus: status });
//       toast.success("Order status updated");
//       fetchOrders();
//     } catch (err) {
//       toast.error("Status update failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <h1 className="text-3xl font-black mb-6 text-orange-500">
//         Admin Orders
//       </h1>

//       <div className="space-y-5">
//         {orders.map((order) => (
//           <div key={order._id} className="bg-white rounded-3xl shadow p-5">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b pb-4">
//               <div>
//                 <h2 className="font-black text-lg">
//                   Order #{order._id.slice(-6)}
//                 </h2>

//                 <p className="text-sm text-gray-500">
//                   Status:{" "}
//                   <span className="font-bold text-orange-500">
//                     {order.orderStatus}
//                   </span>
//                 </p>
//               </div>

//               <select
//                 value={order.orderStatus}
//                 onChange={(e) => updateStatus(order._id, e.target.value)}
//                 className="border p-3 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-orange-400"
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="Confirmed">Confirmed</option>
//                 <option value="Packed">Packed</option>
//                 <option value="Out for Delivery">Out for Delivery</option>
//                 <option value="Delivered">Delivered</option>
//                 <option value="Cancelled">Cancelled</option>
//               </select>
//             </div>

//             {/* <div className="grid md:grid-cols-2 gap-4 mt-4">
//               <Info
//                 icon={<MapPin size={18} />}
//                 label="Delivery Address"
//                 value={order.address}
//               />

//               <Info
//                 icon={<CreditCard size={18} />}
//                 label="Payment"
//                 value={`${order.paymentMethod} / ${order.paymentStatus}`}
//               />

//               {order.transactionId && (
//                 <Info
//                   icon={<PackageCheck size={18} />}
//                   label="Transaction ID"
//                   value={order.transactionId}
//                 />
//               )}
//               {
//   order.paymentScreenshot && (
//     <img
//       src={
//         order.paymentScreenshot
//       }
//       alt="Payment Proof"
//       className="w-32 rounded-xl border mt-2"
//     />
//   )
// }

//               <Info
//                 icon={<Truck size={18} />}
//                 label="Total Amount"
//                 value={`₹${order.totalAmount}`}
//               />
//             </div> */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//   {/* Delivery Address */}
//   <Info
//     icon={<MapPin size={18} />}
//     label="Delivery Address"
//     value={order.address}
//   />

//   {/* Payment Info */}
//   <Info
//     icon={<CreditCard size={18} />}
//     label="Payment"
//     value={`${order.paymentMethod} / ${order.paymentStatus}`}
//   />

//   {/* FIXED: Transaction ID Render block with validation fallback */}
//   {order.paymentMethod === "UPI" && (
//     <Info
//       icon={<PackageCheck size={18} />}
//       label="Transaction ID"
//       value={order.transactionId && order.transactionId.trim() ? order.transactionId : "Not Entered By User"}
//     />
//   )}

//   {/* Total Amount */}
//   <Info
//     icon={<Truck size={18} />}
//     label="Total Amount"
//     value={`₹${order.totalAmount}`}
//   />

//   {/* FIXED: Properly Containerized Payment Screenshot Box */}
//   {order.paymentScreenshot && (
//     <div className="bg-gray-50 rounded-2xl p-4 md:col-span-2">
//       <div className="flex items-center gap-2 text-orange-500 mb-2">
//         <CreditCard size={18} />
//         <span className="text-xs font-black uppercase">Payment Proof Screenshot</span>
//       </div>
//       <a href={order.paymentScreenshot} target="_blank" rel="noreferrer">
//         <img
//           src={order.paymentScreenshot}
//           alt="Payment Proof"
//           className="w-44 rounded-xl border bg-white max-h-64 object-contain shadow-sm cursor-zoom-in hover:opacity-90 transition"
//         />
//       </a>
//       <p className="text-xs text-gray-400 mt-1.5">Click on the screenshot preview to view full screen.</p>
//     </div>
//   )}
// </div>

//             <div className="mt-5">
//               <h3 className="text-xl font-black mb-3">Items to Deliver</h3>

//               <div className="space-y-3">
//                 {order.items?.map((item, index) => {
//                   const product = item.productId || item;
//                   const qty = item.quantity || item.qty || 1;

//                   return (
//                     <div
//                       key={item._id || index}
//                       className="flex items-center gap-3 border rounded-2xl p-3"
//                     >
//                       <img
//                         src={product?.image || "/products/default.jpg"}
//                         alt={product?.name || "Product"}
//                         className="w-16 h-16 rounded-xl object-cover bg-orange-50"
//                         onError={(e) => {
//                           e.currentTarget.src = "/products/default.jpg";
//                         }}
//                       />

//                       <div className="flex-1">
//                         <p className="font-black">
//                           {product?.name || "Product removed"}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           Qty: {qty}
//                         </p>
//                         <p className="text-xs text-gray-400">
//                           {product?.category}
//                         </p>
//                       </div>

//                       <p className="font-black">
//                         ₹{Number(product?.price || 0) * qty}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         ))}

//         {orders.length === 0 && (
//           <div className="bg-white rounded-3xl p-8 text-center shadow">
//             <PackageCheck className="mx-auto text-orange-500 mb-3" size={50} />
//             <h2 className="font-black text-xl">No orders yet</h2>
//             <p className="text-gray-500">Customer orders will appear here.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function Info({ icon, label, value }) {
//   return (
//     <div className="bg-gray-50 rounded-2xl p-4">
//       <div className="flex items-center gap-2 text-orange-500 mb-1">
//         {icon}
//         <span className="text-xs font-black uppercase">{label}</span>
//       </div>
//       <p className="font-semibold text-gray-700">{value || "N/A"}</p>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. IMPORT NAVIGATE HOOK
import API from "../api";
import toast from "react-hot-toast";
import {
  PackageCheck,
  MapPin,
  CreditCard,
  Truck,
  ChevronLeft, // 2. IMPORT BACK ICON
} from "lucide-react";

export default function AdminOrders() {
  const navigate = useNavigate(); // 3. INITIALIZE NAVIGATE HOOK
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders/admin/all");
      setOrders(res.data);
    } catch (err) {
      toast.error("Failed to load orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/orders/admin/${id}`, { orderStatus: status });
      toast.success("Order status updated");
      fetchOrders();
    } catch (err) {
      toast.error("Status update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      
      {/* ========================================================================= */}
      {/* HEADER BLOCK WITH BACK BUTTON                                             */}
      {/* ========================================================================= */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)} // Takes user back to the previous page dynamically
          className="p-2 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-500 rounded-2xl border border-gray-100 shadow-sm transition-all"
          title="Go Back"
        >
          <ChevronLeft size={24} className="stroke-[3]" />
        </button>
        
        <h1 className="text-3xl font-black text-orange-500 select-none">
          Admin Orders
        </h1>
      </div>
      {/* ========================================================================= */}

      <div className="space-y-5">
        {orders.map((order) => (
          <div key={order._id} className="bg-white rounded-3xl shadow p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b pb-4">
              <div>
                <h2 className="font-black text-lg">
                  Order #{order._id.slice(-6)}
                </h2>

                <p className="text-sm text-gray-500">
                  Status:{" "}
                  <span className="font-bold text-orange-500">
                    {order.orderStatus}
                  </span>
                </p>
              </div>

              <select
                value={order.orderStatus}
                onChange={(e) => updateStatus(order._id, e.target.value)}
                className="border p-3 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-orange-400 bg-white"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Packed">Packed</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Info
                icon={<MapPin size={18} />}
                label="Delivery Address"
                value={order.address}
              />

              <Info
                icon={<CreditCard size={18} />}
                label="Payment"
                value={`${order.paymentMethod} / ${order.paymentStatus}`}
              />

              {order.paymentMethod === "UPI" && (
                <Info
                  icon={<PackageCheck size={18} />}
                  label="Transaction ID"
                  value={order.transactionId && order.transactionId.trim() ? order.transactionId : "Not Entered By User"}
                />
              )}

              <Info
                icon={<Truck size={18} />}
                label="Total Amount"
                value={`₹${order.totalAmount}`}
              />

              {order.paymentScreenshot && (
                <div className="bg-gray-50 rounded-2xl p-4 md:col-span-2">
                  <div className="flex items-center gap-2 text-orange-500 mb-2">
                    <CreditCard size={18} />
                    <span className="text-xs font-black uppercase">Payment Proof Screenshot</span>
                  </div>
                  <a href={order.paymentScreenshot} target="_blank" rel="noreferrer">
                    <img
                      src={order.paymentScreenshot}
                      alt="Payment Proof"
                      className="w-44 rounded-xl border bg-white max-h-64 object-contain shadow-sm cursor-zoom-in hover:opacity-90 transition"
                    />
                  </a>
                  <p className="text-xs text-gray-400 mt-1.5">Click on the screenshot preview to view full screen.</p>
                </div>
              )}
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-black mb-3">Items to Deliver</h3>

              <div className="space-y-3">
                {order.items?.map((item, index) => {
                  const product = item.productId || item;
                  const qty = item.quantity || item.qty || 1;

                  return (
                    <div
                      key={item._id || index}
                      className="flex items-center gap-3 border rounded-2xl p-3"
                    >
                      <img
                        src={product?.image || "/products/default.jpg"}
                        alt={product?.name || "Product"}
                        className="w-16 h-16 rounded-xl object-cover bg-orange-50"
                        onError={(e) => {
                          e.currentTarget.src = "/products/default.jpg";
                        }}
                      />

                      <div className="flex-1">
                        <p className="font-black">
                          {product?.name || "Product removed"}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {qty}
                        </p>
                        <p className="text-xs text-gray-400">
                          {product?.category}
                        </p>
                      </div>

                      <p className="font-black">
                        ₹{Number(product?.price || 0) * qty}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <div className="bg-white rounded-3xl p-8 text-center shadow">
            <PackageCheck className="mx-auto text-orange-500 mb-3" size={50} />
            <h2 className="font-black text-xl">No orders yet</h2>
            <p className="text-gray-500">Customer orders will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Info({ icon, label, value }) {
  // Checks if the incoming data payload block contains our specialized map string flag
  const hasMapLink = typeof value === "string" && value.includes("📍 GOOGLE MAPS LINK:");
  
  let textPart = value || "N/A";
  let linkPart = null;

  if (hasMapLink) {
    const parts = value.split("📍 GOOGLE MAPS LINK:\n");
    textPart = parts[0];
    linkPart = parts[1];
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 text-orange-500 mb-1">
          {icon}
          <span className="text-xs font-black uppercase">{label}</span>
        </div>
        
        {/* whitespace-pre-line honors new lines (\n) instead of flattening them */}
        <p className="font-semibold text-gray-700 whitespace-pre-line text-sm sm:text-base leading-relaxed">
          {textPart}
        </p>
      </div>

      {/* Render an active navigation link if it's present in the address data */}
      {linkPart && (
        <a
          href={linkPart.trim()}
          target="_blank"
          rel="noreferrer"
          className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wide uppercase py-3 px-4 rounded-xl text-center shadow-sm transition active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <span>🚀 Open Location in Google Maps</span>
        </a>
      )}
    </div>
  );
}
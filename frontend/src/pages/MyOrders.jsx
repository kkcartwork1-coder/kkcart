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

// import { useEffect, useState } from "react";
// import API from "../api";
// import toast from "react-hot-toast";
// import { PackageCheck, Truck } from "lucide-react";

// export default function MyOrders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const userId = localStorage.getItem("userId");

//       const res = await API.get(`/orders/${userId}`);
//       setOrders(res.data);
//     } catch (err) {
//       toast.error("Orders load failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <h1 className="text-3xl font-black text-orange-500 mb-6">
//         My Orders
//       </h1>

//       <div className="space-y-5">
//         {orders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white rounded-3xl shadow p-5"
//           >
//             <div className="flex justify-between items-center border-b pb-4">
//               <div>
//                 <h2 className="font-black">
//                   Order #{order._id.slice(-6)}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   {new Date(order.createdAt).toLocaleString()}
//                 </p>
//               </div>

//               <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold text-sm">
//                 {order.orderStatus}
//               </span>
//             </div>

//             <div className="mt-4 space-y-3">
//               {order.items?.map((item, index) => {
//                 const product = item.productId || item;
//                 const qty = item.quantity || item.qty || 1;

//                 return (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3"
//                   >
//                     <img
//                       src={
//                         product?.image ||
//                         "/products/default.jpg"
//                       }
//                       className="w-16 h-16 rounded-xl object-cover bg-orange-50"
//                     />

//                     <div className="flex-1">
//                       <p className="font-black">
//                         {product?.name}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         Qty {qty}
//                       </p>
//                     </div>

//                     <p className="font-black">
//                       ₹{Number(product?.price || 0) * qty}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="border-t mt-4 pt-4 flex justify-between">
//               <p className="font-bold">
//                 Total ₹{order.totalAmount}
//               </p>

//               <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
//                 <Truck size={16} />
//                 {order.orderStatus}
//               </div>
//             </div>
//           </div>
//         ))}

//         {orders.length === 0 && (
//           <div className="bg-white rounded-3xl p-8 text-center">
//             <PackageCheck
//               className="mx-auto text-orange-500 mb-3"
//               size={50}
//             />
//             <h2 className="font-black text-xl">
//               No orders yet
//             </h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Added for routing
// import API from "../api";
// import toast from "react-hot-toast";
// import { PackageCheck, Truck, ArrowLeft } from "lucide-react"; // Added ArrowLeft

// export default function MyOrders() {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate(); // Hook initialized

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const res = await API.get(`/orders/${userId}`);
//       setOrders(res.data);
//     } catch (err) {
//       toast.error("Orders load failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 font-sans antialiased">
//       {/* Swiggy Style Top Header Section */}
//       <div className="flex items-center gap-3 mb-6 bg-white p-3 -mx-4 -mt-4 shadow-sm border-b border-gray-100">
//         <button
//           onClick={() => navigate("/")}
//           className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-800"
//           aria-label="Back to Home"
//         >
//           <ArrowLeft size={24} strokeWidth={2.5} />
//         </button>
//         <h1 className="text-2xl font-extrabold text-gray-900">
//           My Orders
//         </h1>
//       </div>

//       <div className="space-y-5 max-w-md mx-auto">
//         {orders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
//           >
//             {/* Header section inside the order card */}
//             <div className="flex justify-between items-center border-b pb-4">
//               <div>
//                 <h2 className="font-black text-gray-900">
//                   Order #{order._id.slice(-6)}
//                 </h2>
//                 <p className="text-xs text-gray-500 mt-0.5">
//                   {new Date(order.createdAt).toLocaleString()}
//                 </p>
//               </div>

//               <span className="bg-orange-50 text-[#FC8019] px-3 py-1.5 rounded-lg font-extrabold text-xs uppercase tracking-wide border border-orange-100">
//                 {order.orderStatus}
//               </span>
//             </div>

//             {/* Order Items List */}
//             <div className="mt-4 space-y-3">
//               {order.items?.map((item, index) => {
//                 const product = item.productId || item;
//                 const qty = item.quantity || item.qty || 1;

//                 return (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3"
//                   >
//                     <img
//                       src={
//                         product?.image ||
//                         "/products/default.jpg"
//                       }
//                       alt={product?.name || "Product"}
//                       className="w-14 h-14 rounded-xl object-cover bg-gray-50 border border-gray-100"
//                     />

//                     <div className="flex-1">
//                       <p className="font-bold text-sm text-gray-800">
//                         {product?.name}
//                       </p>
//                       <p className="text-xs text-gray-400 font-medium">
//                         Qty {qty}
//                       </p>
//                     </div>

//                     <p className="font-bold text-sm text-gray-900">
//                       ₹{Number(product?.price || 0) * qty}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Bottom Card Summary Section */}
//             <div className="border-t border-dashed mt-4 pt-4 flex justify-between items-center">
//               <p className="font-extrabold text-gray-900">
//                 Total Amount: <span className="text-base">₹{order.totalAmount}</span>
//               </p>

//               <div className="flex items-center gap-1.5 text-emerald-600 font-extrabold text-xs uppercase tracking-wide bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
//                 <Truck size={14} />
//                 {order.orderStatus}
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Empty State Screen */}
//         {orders.length === 0 && (
//           <div className="bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm mt-10">
//             <PackageCheck
//               className="mx-auto text-gray-300 mb-4"
//               size={56}
//             />
//             <h2 className="font-extrabold text-gray-800 text-lg">
//               No orders placed yet
//             </h2>
//             <p className="text-gray-400 text-xs mt-1 mb-6">
//               Looks like you haven't made your choice yet.
//             </p>
//             <button
//               onClick={() => navigate("/")}
//               className="inline-flex bg-[#FC8019] hover:bg-[#e06f14] text-white font-extrabold text-xs py-3 px-6 rounded-xl tracking-wider uppercase transition"
//             >
//               Shop Groceries & Food
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import API from "../api";
import toast from "react-hot-toast";
import { PackageCheck, Truck, ArrowLeft, Calendar, ShieldAlert, ShoppingBag, MessageSquare } from "lucide-react"; 

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); 

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
    <div className="min-h-screen bg-[#F8F9FA] font-sans antialiased pb-16 select-none">
      
      {/* 1. TOP RESPONSIVE STICKY HEADER FIXED NAVIGATION BAR */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/profile")}
              className="p-2 bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-[#FC8019] rounded-xl border border-gray-100 transition-all active:scale-95"
              aria-label="Back"
            >
              <ArrowLeft size={18} className="stroke-[2.5]" />
            </button>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight">
                Order History
              </h1>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider hidden sm:block">
                Manage and track past invoices
              </p>
            </div>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1.5 rounded-xl border border-orange-500/10">
            {orders.length} Total Orders
          </span>
        </div>
      </div>

      {/* 2. RESPONSIVE HOUSING SECTION GRID */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        
        {/* EMPTY STATE BLOCK */}
        {orders.length === 0 ? (
          <div className="bg-white rounded-[32px] p-12 text-center border border-gray-100 shadow-sm max-w-md mx-auto mt-12">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 text-gray-300 flex items-center justify-center mx-auto mb-4">
              <PackageCheck size={32} />
            </div>
            <h2 className="font-black text-gray-800 text-lg tracking-tight">
              No orders placed yet
            </h2>
            <p className="text-gray-400 text-xs font-semibold mt-1.5 mb-6 leading-relaxed">
              Looks like your basket is waiting for its first item. Explore our top choices today!
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-[#FC8019] hover:bg-[#e06f14] text-white font-black text-xs py-3.5 rounded-xl tracking-widest uppercase transition-all shadow-sm active:scale-[0.99]"
            >
              Shop Groceries & Food
            </button>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* ========================================================================= */}
            {/* LEFT AREA CONTAINER: ORDERS LOG STREAM TRACKER (SPANS 8 COLS)            */}
            {/* ========================================================================= */}
            <div className="md:col-span-8 space-y-4">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 overflow-hidden"
                >
                  {/* Order Invoice Header Row */}
                  <div className="flex flex-wrap justify-between items-center gap-3 border-b border-gray-50 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FC8019] flex items-center justify-center shrink-0">
                        <ShoppingBag size={18} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <h2 className="font-black text-gray-900 text-sm sm:text-base tracking-tight">
                          ID: #{order._id.slice(-6).toUpperCase()}
                        </h2>
                        <div className="flex items-center gap-1 text-gray-400 text-[11px] font-semibold mt-0.5">
                          <Calendar size={12} />
                          <span>{new Date(order.createdAt).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <span className="bg-orange-50 text-[#FC8019] px-3 py-1 rounded-lg font-black text-[10px] sm:text-xs uppercase tracking-widest border border-orange-100/50">
                      {order.orderStatus || "Processing"}
                    </span>
                  </div>

                  {/* Order Line Nested Product Mapping Matrix List */}
                  <div className="py-4 divide-y divide-gray-50/70">
                    {order.items?.map((item, index) => {
                      const product = item.productId || item;
                      const qty = item.quantity || item.qty || 1;

                      // Handles clean fallback if price parameter saved directly as string value context
                      const priceString = product?.price || "0";
                      const basePrice = parseFloat(priceString.replace(/[^0-9.]/g, '')) || 0;

                      return (
                        <div
                          key={index}
                          className="flex items-center gap-4 py-3 first:pt-0 last:pb-0"
                        >
                          <img
                            src={product?.image || "/products/default.jpg"}
                            alt={product?.name || "Product"}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-contain bg-gray-50 border border-gray-100 p-1 shrink-0"
                          />

                          <div className="flex-1 min-w-0">
                            <p className="font-extrabold text-xs sm:text-sm text-gray-800 truncate">
                              {product?.name || "Premium Item"}
                            </p>
                            <p className="text-[11px] text-gray-400 font-bold mt-0.5">
                              Quantity: <span className="text-gray-600 font-black">{qty}</span>
                            </p>
                          </div>

                          <div className="text-right shrink-0">
                            <p className="font-black text-xs sm:text-sm text-gray-900">
                              ₹{basePrice * qty}
                            </p>
                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                              {priceString.includes("(") ? priceString.substring(priceString.indexOf("(")) : ""}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Bottom Summary Action Status Ribbon */}
                  <div className="border-t border-dashed border-gray-100 mt-1 pt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                    <p className="font-extrabold text-sm text-gray-400">
                      Total Checkout Amount:{" "}
                      <span className="text-base sm:text-lg font-black text-gray-900 block sm:inline mt-0.5 sm:mt-0">
                        ₹{order.totalAmount}
                      </span>
                    </p>

                    <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-black text-[10px] sm:text-xs uppercase tracking-widest bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-100/50">
                      <Truck size={14} className="stroke-[2.5]" />
                      <span>{order.orderStatus || "Dispatched Delivery"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ========================================================================= */}
            {/* RIGHT AREA CONTAINER: INTERACTIVE SIDEBAR SUMMARY (SPANS 4 COLS)          */}
            {/* ========================================================================= */}
            <div className="md:col-span-4 space-y-4 sticky top-24 hidden md:block">
              
              {/* HELP DESK ESCALATION MODULE CARD CARD */}
              <div className="bg-white rounded-[24px] border border-gray-100 p-5 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ShieldAlert size={16} className="stroke-[2.5]" />
                  </div>
                  <h3 className="font-black text-sm text-gray-900 tracking-tight">
                    Need Help with an Order?
                  </h3>
                </div>
                <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                  If you experience any delays, or need to request a cancellation or change your address, please drop a message to our hot desk support agent on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => window.open("https://wa.me/919777702735", "_blank")}
                  className="w-full h-10 bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 font-black text-xs uppercase tracking-wider rounded-xl border border-gray-100 hover:border-emerald-200 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} />
                  <span>Connect Live Chat</span>
                </button>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}
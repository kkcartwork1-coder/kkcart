// import { useContext, useMemo, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   MapPin,
//   Clock3,
//   Wallet,
//   Truck,
//   BadgePercent,
//   ShieldCheck,
//   Banknote,
//   Smartphone,
//   Loader2,
// } from "lucide-react";
// import toast from "react-hot-toast";
// import API from "../api";
// import { CartContext } from "../context/CartContext";

// export default function Checkout() {
//   const navigate = useNavigate();
//   const { cart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

//   const [paymentScreenshot, setPaymentScreenshot] = useState(null);

//   const [address, setAddress] = useState({
//     fullName: "",
//     phone: "",
//     house: "",
//     area: "",
//     landmark: "",
//     city: "",
//     pincode: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [transactionId, setTransactionId] = useState("");
//   const [coupon, setCoupon] = useState("");
//   const [placing, setPlacing] = useState(false);

//   const [distance, setDistance] = useState(0);
//   const [deliveryFee, setDeliveryFee] = useState(0);
//   const [deliveryAllowed, setDeliveryAllowed] = useState(true);
//   const [loadingLocation, setLoadingLocation] = useState(false);

//   const itemTotal = useMemo(
//     () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
//     [cart]
//   );

//   const handlingFee = itemTotal > 0 ? 7 : 0;
//   const isFirstOrder = localStorage.getItem("firstOrderUsed") !== "true";

//   const discount =
//     itemTotal >= 299 && (isFirstOrder || coupon.toUpperCase() === "KK50")
//       ? 50
//       : 0;

//   const grandTotal = Math.max(
//     itemTotal +
//     Number(deliveryFee || 0) +
//     Number(handlingFee || 0) -
//     Number(discount || 0),
//     0
//   );

//   // --- AUTO-FILL PROFILE LOGIC (FOR SECOND ORDER & ONWARD) ---
//   useEffect(() => {
//     const savedProfileAddress = localStorage.getItem("userProfileAddress");
//     if (savedProfileAddress) {
//       try {
//         const parsedAddress = JSON.parse(savedProfileAddress);
//         setAddress(parsedAddress);
        
//         if (parsedAddress.lat && parsedAddress.lng) {
//           API.post("/delivery/check", { lat: parsedAddress.lat, lng: parsedAddress.lng })
//             .then((res) => {
//               setDistance(res.data.distance || 0);
//               setDeliveryFee(Number(res.data.deliveryFee) || 0);
//             })
//             .catch((err) => console.log("Background distance check failed", err));
//         }
//       } catch (err) {
//         console.error("Error reading profile address");
//       }
//     } else {
//       const fallbackDraft = localStorage.getItem("deliveryAddressDraft");
//       if (fallbackDraft) {
//         try { setAddress(JSON.parse(fallbackDraft)); } catch(e){}
//       }
//     }
//   }, []);

//   // Sync draft working state changes 
//   useEffect(() => {
//     localStorage.setItem("deliveryAddressDraft", JSON.stringify(address));
//   }, [address]);

//   const getCurrentLocation = () => {
//     setLoadingLocation(true);

//     if (!navigator.geolocation) {
//       toast.error("Geolocation not supported in this browser");
//       setLoadingLocation(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           const lat = position.coords.latitude;
//           const lng = position.coords.longitude;

//           // Delivery radius check
//           const deliveryRes = await API.post("/delivery/check", { lat, lng });
//           setDistance(deliveryRes.data.distance || 0);
//           setDeliveryFee(Number(deliveryRes.data.deliveryFee) || 0);

//           // Reverse Geocoding
//           const geoRes = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//           );
//           const geoData = await geoRes.json();
//           const addr = geoData.address || {};

//           setAddress((prev) => ({
//             ...prev,
//             house: geoData.display_name || "",
//             area: addr.suburb || addr.neighbourhood || addr.village || "",
//             city: addr.city || addr.town || addr.state_district || "",
//             pincode: addr.postcode || "",
//             lat, 
//             lng
//           }));

//           toast.success("Location coordinates loaded!");
//         } catch (err) {
//           console.log("LOCATION PROCESS ERROR:", err);
//           toast.error("Failed to process location");
//         } finally {
//           setLoadingLocation(false);
//         }
//       },
//       (error) => {
//         setLoadingLocation(false);
//         toast.error("Unable to find location. Please type manually.");
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
//     );
//   };

// const placeOrder = async () => {
//     const userId = localStorage.getItem("userId");

//     if (!deliveryAllowed) {
//       toast.error("Delivery unavailable beyond 7 km");
//       return;
//     }
//     if (distance === 0) {
//       toast.error("Please verify delivery location coordinates");
//       return;
//     }
//     if (!userId) {
//       toast.error("Please login first");
//       navigate("/login");
//       return;
//     }
//     if (!cart.length) {
//       toast.error("Cart is empty");
//       navigate("/cart");
//       return;
//     }
//     if (!address.fullName || !address.phone || !address.house || !address.area || !address.city || !address.pincode) {
//       toast.error("Please fill out complete delivery details");
//       return;
//     }
//     if (paymentMethod === "UPI" && !transactionId.trim()) {
//       toast.error("Enter UPI transaction ID");
//       return;
//     }

//     try {
//       setPlacing(true);
//       const formData = new FormData();
      
//       // 1. Append standard text information
//       formData.append("userId", userId);
//       formData.append(
//         "items",
//         JSON.stringify(cart.map((item) => ({ productId: item._id, quantity: item.qty })))
//       );

//       // --- NEW NAVIGATION COORDINATES RESOLUTION LAYER ---
//       // This builds a direct dynamic query link using the coordinates fetched from the user's GPS
//       const mapLink = `${address.lat},${address.lng}`;
      
//       // Creates a neatly stacked layout text format that sends directly to your backend string database field
//       const computedAddressString = `Name: ${address.fullName}\nPhone: ${address.phone}\nAddress: ${address.house}, ${address.area}, ${address.city} - ${address.pincode}\nLandmark: ${address.landmark || "N/A"}\n\n📍 GOOGLE MAPS LINK:\n${mapLink}`;

//       formData.append("address", computedAddressString);
//       formData.append("paymentMethod", paymentMethod);
//       formData.append("totalAmount", grandTotal);
//       formData.append("paymentStatus", paymentMethod === "COD" ? "Pending" : "Paid");

//       // 2. Explicitly send transactionId ONLY if UPI is chosen
//       if (paymentMethod === "UPI") {
//         formData.append("transactionId", transactionId.trim());
//       } else {
//         formData.append("transactionId", ""); 
//       }

//       // 3. Append the file last (Many backend engines require files at the very end)
//       if (paymentScreenshot) {
//         formData.append("paymentScreenshot", paymentScreenshot);
//       }

//       await API.post("/orders", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       // --- SAVE COMPLETE BLOCK TO PROFILE ADDRESS SECTION FOR AUTO-FILL ---
//       localStorage.setItem("userProfileAddress", JSON.stringify(address));

//       const savedList = JSON.parse(localStorage.getItem("savedAddressesList") || "[]");
//       if (!savedList.includes(computedAddressString)) {
//         savedList.push(computedAddressString);
//         localStorage.setItem("savedAddressesList", JSON.stringify(savedList));
//       }

//       if (isFirstOrder && itemTotal >= 299) {
//         localStorage.setItem("firstOrderUsed", "true");
//       }
      
//       clearCart();
//       navigate("/order-success");
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Order configuration failed");
//     } finally {
//       setPlacing(false);
//     }
//   };
//   if (!cart.length) {
//     return (
//       <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
//         <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 sm:p-8 text-center max-w-md w-full">
//           <h1 className="text-xl sm:text-2xl font-black text-gray-900">Your cart is empty</h1>
//           <p className="text-gray-500 text-sm mt-2">Add delicious products before checking out.</p>
//           <button
//             onClick={() => navigate("/")}
//             className="w-full mt-6 bg-[#FC8019] hover:bg-[#e06f14] text-white py-3.5 px-6 rounded-xl font-extrabold text-sm uppercase tracking-wide transition shadow-md"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 font-sans antialiased">
//       <div className="max-w-3xl mx-auto space-y-6">
        
//         {/* ========================================================================= */}
//         {/* 1. FIRST SECTION: ORDER SUMMARY PANEL                                      */}
//         {/* ========================================================================= */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
//           <h2 className="font-black text-lg sm:text-xl text-gray-900 mb-4">Order Summary</h2>

//           <div className="space-y-3.5 max-h-60 overflow-y-auto pr-1 divide-y divide-gray-50">
//             {cart.map((item) => (
//               <div key={item._id} className="flex gap-3 pt-3 first:pt-0 items-start">
//                 <img
//                   src={item.image || "/products/default.jpg"}
//                   alt={item.name}
//                   className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border bg-gray-50 shrink-0"
//                 />
//                 <div className="flex-1 min-w-0">
//                   <h4 className="font-bold text-xs sm:text-sm text-gray-800 truncate">{item.name}</h4>
//                   <div className="flex items-center gap-2.5 mt-2">
//                     <button
//                       type="button"
//                       onClick={() => decreaseQty(item._id)}
//                       className="w-7 h-6 rounded-lg bg-gray-100 font-black text-xs hover:bg-gray-200 transition"
//                     >
//                       -
//                     </button>
//                     <span className="font-black text-xs text-gray-900">{item.qty}</span>
//                     <button
//                       type="button"
//                       onClick={() => increaseQty(item._id)}
//                       className="w-7 h-6 rounded-lg bg-[#FC8019] text-white font-black text-xs hover:bg-[#e06f14] transition"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//                 <p className="font-black text-xs sm:text-sm text-gray-900 whitespace-nowrap">₹{item.price * item.qty}</p>
//               </div>
//             ))}
//           </div>

//           {/* Receipt Rows */}
//           <div className="border-t border-gray-100 mt-5 pt-4 space-y-2.5 text-xs sm:text-sm text-gray-600 font-medium">
//             <Row label="Item Total" value={`₹${itemTotal}`} />
//             <Row label="Delivery Partner Fee" value={`₹${Number(deliveryFee || 0)}`} />
//             <Row label="Govt. Taxes & Handling" value={`₹${handlingFee}`} />
//             {itemTotal >= 299 && discount > 0 && <Row label="Discount Coupon" value={`-₹${discount}`} green />}
            
//             {!deliveryAllowed && (
//               <div className="bg-red-50 text-red-700 p-3 rounded-xl text-xs font-bold border border-red-100">
//                 Location metrics exceed 7 km delivery threshold limit.
//               </div>
//             )}

//             <div className="border-t border-gray-100 pt-3.5 flex justify-between text-base sm:text-lg font-black text-gray-900">
//               <span>To Pay</span>
//               <span>₹{grandTotal}</span>
//             </div>
//           </div>
//         </div>

//         {/* ========================================================================= */}
//         {/* 2. SECOND SECTION: DELIVERY ADDRESS                                       */}
//         {/* ========================================================================= */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
//             <div className="flex items-center gap-2.5">
//               <MapPin className="text-[#FC8019]" size={22} />
//               <h2 className="font-black text-lg sm:text-xl text-gray-900">Delivery Address</h2>
//             </div>

//             <button
//               type="button"
//               onClick={getCurrentLocation}
//               disabled={loadingLocation}
//               className="bg-orange-50 text-[#FC8019] hover:bg-orange-100 border border-orange-100 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5"
//             >
//               {loadingLocation ? (
//                 <>
//                   <Loader2 size={14} className="animate-spin" /> Locating...
//                 </>
//               ) : (
//                 "Use Current Location"
//               )}
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               placeholder="Full Name"
//               value={address.fullName}
//               onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
//             />
//             <input
//               placeholder="Phone Number"
//               value={address.phone}
//               onChange={(e) => setAddress({ ...address, phone: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
//             />
//             <input
//               placeholder="House / Flat / Floor"
//               value={address.house}
//               onChange={(e) => setAddress({ ...address, house: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
//             />
//             <input
//               placeholder="Area / Street / Colony"
//               value={address.area}
//               onChange={(e) => setAddress({ ...address, area: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
//             />
//             <input
//               placeholder="Landmark (Optional)"
//               value={address.landmark}
//               onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
//             />
//             <input
//               placeholder="City"
//               value={address.city}
//               onChange={(e) => setAddress({ ...address, city: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
//             />
//             <input
//               placeholder="Pincode"
//               value={address.pincode}
//               onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
//             />
//           </div>
//         </div>

//         {/* ETA Panel */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
//               <Clock3 size={24} />
//             </div>
//             <div>
//               <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">Delivery in 10 minutes</h3>
//               <p className="text-gray-400 text-xs sm:text-sm font-medium">Instant flash delivery from your closest KKCart dark store.</p>
//             </div>
//           </div>
//         </div>

//         {/* ========================================================================= */}
//         {/* 3. THIRD SECTION: PAYMENT METHOD & FINAL ORDER INITIATION                 */}
//         {/* ========================================================================= */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
//           <div className="flex items-center gap-2.5 mb-5">
//             <Wallet className="text-[#FC8019]" size={22} />
//             <h2 className="font-black text-lg sm:text-xl text-gray-900">Payment Method</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <PayOption
//               active={paymentMethod === "COD"}
//               onClick={() => setPaymentMethod("COD")}
//               icon={<Banknote size={20} />}
//               title="Cash on Delivery"
//             />
//             <PayOption
//               active={paymentMethod === "UPI"}
//               onClick={() => setPaymentMethod("UPI")}
//               icon={<Smartphone size={20} />}
//               title="UPI App Payment"
//             />
//           </div>

//           {paymentMethod === "UPI" && (
//             <div className="space-y-4 animate-fade-in mt-4">
//               <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//                 <div>
//                   <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Official Merchant UPI ID</p>
//                   <p className="text-emerald-600 font-black text-sm sm:text-base selection:bg-orange-200">kkcute6253-5@okaxis</p>
//                 </div>
//               </div>

//               <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 max-w-xs mx-auto">
//                 <img src="/upi.jpeg" alt="UPI QR Code" className="w-44 h-44 mx-auto rounded-xl shadow-sm border bg-white object-contain" />
//                 <p className="text-xs font-bold text-gray-500 mt-2">Scan QR Code via PhonePe/GPay</p>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Upload Transaction Screenshot</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setPaymentScreenshot(e.target.files[0])}
//                   className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-extrabold file:bg-orange-50 file:text-[#FC8019] hover:file:bg-orange-100 border border-gray-200 rounded-xl p-2 cursor-pointer bg-white"
//                 />
//               </div>

//               <input
//                 value={transactionId}
//                 onChange={(e) => setTransactionId(e.target.value)}
//                 placeholder="Enter 12-digit UPI Ref/Transaction ID"
//                 className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019]"
//               />
//             </div>
//           )}

//           {/* Action Button positioned right inside the payment section layout */}
//           <button
//             onClick={placeOrder}
//             disabled={placing || !deliveryAllowed || distance === 0}
//             className="w-full mt-6 bg-[#FC8019] text-white py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wide hover:bg-[#e06f14] disabled:opacity-50 disabled:pointer-events-none transition shadow-md shadow-orange-100"
//           >
//             {placing ? "Processing Order..." : `Place Order • ₹${grandTotal}`}
//           </button>
//         </div>

//         {/* First Order Marketing Perks */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
//           <div className="flex items-center gap-2.5 mb-3">
//             <BadgePercent className="text-[#FC8019]" size={22} />
//             <h2 className="font-black text-base sm:text-lg text-gray-900">First Order Offer</h2>
//           </div>
//           {isFirstOrder ? (
//             itemTotal >= 299 ? (
//               <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-sm font-semibold text-emerald-800">
//                 🎉 Welcome Discount Applied! You saved ₹50 flat on this bundle.
//               </div>
//             ) : (
//               <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-sm font-semibold text-orange-800">
//                 Add items worth ₹{299 - itemTotal} more to qualify for flat ₹50 Welcome Rewards.
//               </div>
//             )
//           ) : (
//             <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-500 font-medium">
//               Welcome coupon benchmark already redeemed on your registration.
//             </div>
//           )}
//         </div>

//         {/* Secure Badges Footer Panel */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
//           <div className="flex gap-3 items-start">
//             <Truck className="text-[#FC8019] shrink-0" size={18} />
//             <div>
//               <h4 className="font-bold text-gray-900">Contactless Rapid Drop</h4>
//               <p className="text-gray-400 text-xs mt-0.5">Riders follow complete standard hyper-local tracking protocols.</p>
//             </div>
//           </div>
//           <div className="flex gap-3 items-start">
//             <ShieldCheck className="text-emerald-600 shrink-0" size={18} />
//             <div>
//               <h4 className="font-bold text-gray-900">Secure AES Encryption</h4>
//               <p className="text-gray-400 text-xs mt-0.5">Payments and user state tracking loops are safely containerized.</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }

// function PayOption({ active, onClick, icon, title }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`w-full border rounded-xl p-4 flex items-center gap-3 text-left transition-all ${
//         active
//           ? "border-[#FC8019] bg-orange-50/50 shadow-sm ring-1 ring-[#FC8019]"
//           : "border-gray-200 hover:bg-gray-50/50"
//       }`}
//     >
//       <div className={active ? "text-[#FC8019]" : "text-gray-400"}>{icon}</div>
//       <span className={`text-sm font-extrabold ${active ? "text-gray-900" : "text-gray-700"}`}>{title}</span>
//     </button>
//   );
// }

// function Row({ label, value, green }) {
//   return (
//     <div className="flex justify-between items-center">
//       <span className="text-gray-500">{label}</span>
//       <span className={green ? "text-emerald-600 font-extrabold" : "text-gray-900 font-bold"}>{value}</span>
//     </div>
//   );
// }


// import { useContext, useMemo, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   MapPin,
//   Clock3,
//   Wallet,
//   Truck,
//   BadgePercent,
//   ShieldCheck,
//   Banknote,
//   Smartphone,
//   Loader2,
// } from "lucide-react";
// import toast from "react-hot-toast";
// import API from "../api";
// import { CartContext } from "../context/CartContext";

// export default function Checkout() {
//   const navigate = useNavigate();
//   const { cart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

//   const [paymentScreenshot, setPaymentScreenshot] = useState(null);
//   const [hasPastOrders, setHasPastOrders] = useState(false); // ⚡ Track database order status dynamically
//   const [checkingOrders, setCheckingOrders] = useState(true);

//   const [address, setAddress] = useState({
//     fullName: "",
//     phone: "",
//     house: "",
//     area: "",
//     landmark: "",
//     city: "",
//     pincode: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [transactionId, setTransactionId] = useState("");
//   const [coupon, setCoupon] = useState("");
//   const [placing, setPlacing] = useState(false);

//   const [distance, setDistance] = useState(0);
//   const [deliveryFee, setDeliveryFee] = useState(0);
//   const [deliveryAllowed, setDeliveryAllowed] = useState(true);
//   const [loadingLocation, setLoadingLocation] = useState(false);

//   // ⚡ FIX 1: STOPS "NaN" BY PARSING STRING AND INT PRICES SECURELY WITH REGEX
//   const itemTotal = useMemo(() => {
//     return cart.reduce((sum, item) => {
//       const priceRaw = item.price ? item.price.toString() : "0";
//       // Strips non-numeric characters like "(1 kg)" cleanly
//       const cleanPrice = parseFloat(priceRaw.replace(/[^0-9.]/g, "")) || 0;
//       const qty = parseInt(item.qty || item.quantity || 1, 10);
//       return sum + (cleanPrice * qty);
//     }, 0);
//   }, [cart]);

//   const handlingFee = itemTotal > 0 ? 7 : 0;

//   // ⚡ FIX 2: GLOBAL COMBINED CHECKOUT DISCOUNT (DB CHECK + LOCALSTORAGE BACKUP)
//   const isFirstOrder = !hasPastOrders && localStorage.getItem("firstOrderUsed") !== "true";

//   const discount =
//     itemTotal >= 299 && (isFirstOrder || coupon.toUpperCase() === "KK50")
//       ? 50
//       : 0;

//   const grandTotal = Math.max(
//     itemTotal +
//     Number(deliveryFee || 0) +
//     Number(handlingFee || 0) -
//     Number(discount || 0),
//     0
//   );

//   // --- CHECK LIVE MONGODB REAL-TIME USER ORDER COUNT ON MOUNT ---
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       API.get(`/orders/${userId}`)
//         .then((res) => {
//           // If orders array has elements, they are not a first-time user anymore!
//           if (res.data && res.data.length > 0) {
//             setHasPastOrders(true);
//           } else {
//             setHasPastOrders(false);
//           }
//         })
//         .catch((err) => console.error("Error verifying active order milestones:", err))
//         .finally(() => setCheckingOrders(false));
//     } else {
//       setCheckingOrders(false);
//     }
//   }, []);

//   // --- AUTO-FILL PROFILE LOGIC ---
//   useEffect(() => {
//     const savedProfileAddress = localStorage.getItem("userProfileAddress");
//     if (savedProfileAddress) {
//       try {
//         const parsedAddress = JSON.parse(savedProfileAddress);
//         setAddress(parsedAddress);
        
//         if (parsedAddress.lat && parsedAddress.lng) {
//           API.post("/delivery/check", { lat: parsedAddress.lat, lng: parsedAddress.lng })
//             .then((res) => {
//               setDistance(res.data.distance || 0);
//               setDeliveryFee(Number(res.data.deliveryFee) || 0);
//             })
//             .catch((err) => console.log("Background distance check failed", err));
//         }
//       } catch (err) {
//         console.error("Error reading profile address");
//       }
//     } else {
//       const fallbackDraft = localStorage.getItem("deliveryAddressDraft");
//       if (fallbackDraft) {
//         try { setAddress(JSON.parse(fallbackDraft)); } catch(e){}
//       }
//     }
//   }, []);

//   // Sync draft working state changes 
//   useEffect(() => {
//     localStorage.setItem("deliveryAddressDraft", JSON.stringify(address));
//   }, [address]);

//   const getCurrentLocation = () => {
//     setLoadingLocation(true);

//     if (!navigator.geolocation) {
//       toast.error("Geolocation not supported in this browser");
//       setLoadingLocation(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           const lat = position.coords.latitude;
//           const lng = position.coords.longitude;

//           const deliveryRes = await API.post("/delivery/check", { lat, lng });
//           setDistance(deliveryRes.data.distance || 0);
//           setDeliveryFee(Number(deliveryRes.data.deliveryFee) || 0);

//           const geoRes = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
//           );
//           const geoData = await geoRes.json();
//           const addr = geoData.address || {};

//           setAddress((prev) => ({
//             ...prev,
//             house: geoData.display_name || "",
//             area: addr.suburb || addr.neighbourhood || addr.village || "",
//             city: addr.city || addr.town || addr.state_district || "",
//             pincode: addr.postcode || "",
//             lat, 
//             lng
//           }));

//           toast.success("Location coordinates loaded!");
//         } catch (err) {
//           console.log("LOCATION PROCESS ERROR:", err);
//           toast.error("Failed to process location");
//         } finally {
//           setLoadingLocation(false);
//         }
//       },
//       (error) => {
//         setLoadingLocation(false);
//         toast.error("Unable to find location. Please type manually.");
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
//     );
//   };

//   const placeOrder = async () => {
//     const userId = localStorage.getItem("userId");

//     if (!deliveryAllowed) {
//       toast.error("Delivery unavailable beyond 7 km");
//       return;
//     }
//     if (distance === 0) {
//       toast.error("Please verify delivery location coordinates");
//       return;
//     }
//     if (!userId) {
//       toast.error("Please login first");
//       navigate("/login");
//       return;
//     }
//     if (!cart.length) {
//       toast.error("Cart is empty");
//       navigate("/cart");
//       return;
//     }
//     if (!address.fullName || !address.phone || !address.house || !address.area || !address.city || !address.pincode) {
//       toast.error("Please fill out complete delivery details");
//       return;
//     }
//     if (paymentMethod === "UPI" && !transactionId.trim()) {
//       toast.error("Enter UPI transaction ID");
//       return;
//     }

//     try {
//       setPlacing(true);
//       const formData = new FormData();
      
//       formData.append("userId", userId);
//       formData.append(
//         "items",
//         JSON.stringify(cart.map((item) => ({ productId: item._id, quantity: item.qty })))
//       );

//       const mapLink = `${address.lat},${address.lng}`;
//       const computedAddressString = `Name: ${address.fullName}\nPhone: ${address.phone}\nAddress: ${address.house}, ${address.area}, ${address.city} - ${address.pincode}\nLandmark: ${address.landmark || "N/A"}\n\n📍 GOOGLE MAPS LINK:\n${mapLink}`;

//       formData.append("address", computedAddressString);
//       formData.append("paymentMethod", paymentMethod);
//       formData.append("totalAmount", grandTotal);
//       formData.append("paymentStatus", paymentMethod === "COD" ? "Pending" : "Paid");

//       if (paymentMethod === "UPI") {
//         formData.append("transactionId", transactionId.trim());
//       } else {
//         formData.append("transactionId", ""); 
//       }

//       if (paymentScreenshot) {
//         formData.append("paymentScreenshot", paymentScreenshot);
//       }

//       await API.post("/orders", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       localStorage.setItem("userProfileAddress", JSON.stringify(address));

//       const savedList = JSON.parse(localStorage.getItem("savedAddressesList") || "[]");
//       if (!savedList.includes(computedAddressString)) {
//         savedList.push(computedAddressString);
//         localStorage.setItem("savedAddressesList", JSON.stringify(savedList));
//       }

//       // Mark first order used immediately upon success
//       if (isFirstOrder && itemTotal >= 299) {
//         localStorage.setItem("firstOrderUsed", "true");
//       }
      
//       clearCart();
//       navigate("/order-success");
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Order configuration failed");
//     } finally {
//       setPlacing(false);
//     }
//   };

//   if (!cart.length) {
//     return (
//       <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
//         <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 sm:p-8 text-center max-w-md w-full">
//           <h1 className="text-xl sm:text-2xl font-black text-gray-900">Your cart is empty</h1>
//           <p className="text-gray-500 text-sm mt-2">Add delicious products before checking out.</p>
//           <button
//             onClick={() => navigate("/")}
//             className="w-full mt-6 bg-[#FC8019] hover:bg-[#e06f14] text-white py-3.5 px-6 rounded-xl font-extrabold text-sm uppercase tracking-wide transition shadow-md"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 font-sans antialiased">
//       <div className="max-w-3xl mx-auto space-y-6">
        
//         {/* ========================================================================= */}
//         {/* 1. FIRST SECTION: ORDER SUMMARY PANEL                                     */}
//         {/* ========================================================================= */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
//           <h2 className="font-black text-lg sm:text-xl text-gray-900 mb-4">Order Summary</h2>

//           <div className="space-y-3.5 max-h-60 overflow-y-auto pr-1 divide-y divide-gray-50">
//             {cart.map((item) => {
//               // Internal mapping tracker rendering prices on the table row safely
//               const cleanPriceNum = parseFloat(item.price?.toString().replace(/[^0-9.]/g, "")) || 0;
//               return (
//                 <div key={item._id} className="flex gap-3 pt-3 first:pt-0 items-start">
//                   <img
//                     src={item.image || "/products/default.jpg"}
//                     alt={item.name}
//                     className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border bg-gray-50 shrink-0"
//                   />
//                   <div className="flex-1 min-w-0">
//                     <h4 className="font-bold text-xs sm:text-sm text-gray-800 truncate">{item.name}</h4>
//                     <div className="flex items-center gap-2.5 mt-2">
//                       <button
//                         type="button"
//                         onClick={() => decreaseQty(item._id)}
//                         className="w-7 h-6 rounded-lg bg-gray-100 font-black text-xs hover:bg-gray-200 transition"
//                       >
//                         -
//                       </button>
//                       <span className="font-black text-xs text-gray-900">{item.qty}</span>
//                       <button
//                         type="button"
//                         onClick={() => increaseQty(item._id)}
//                         className="w-7 h-6 rounded-lg bg-gray-100 text-gray-800 font-black text-xs hover:bg-gray-200 transition"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <p className="font-black text-xs sm:text-sm text-gray-900 whitespace-nowrap">₹{cleanPriceNum * item.qty}</p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Receipt Rows */}
//           <div className="border-t border-gray-100 mt-5 pt-4 space-y-2.5 text-xs sm:text-sm text-gray-600 font-medium">
//             <Row label="Item Total" value={`₹${itemTotal}`} />
//             <Row label="Delivery Partner Fee" value={`₹${Number(deliveryFee || 0)}`} />
//             <Row label="Govt. Taxes & Handling" value={`₹${handlingFee}`} />
//             {itemTotal >= 299 && discount > 0 && <Row label="Discount Coupon" value={`-₹${discount}`} green />}
            
//             {!deliveryAllowed && (
//               <div className="bg-red-50 text-red-700 p-3 rounded-xl text-xs font-bold border border-red-100">
//                 Location metrics exceed 7 km delivery threshold limit.
//               </div>
//             )}

//             <div className="border-t border-gray-100 pt-3.5 flex justify-between text-base sm:text-lg font-black text-gray-900">
//               <span>To Pay</span>
//               <span>₹{grandTotal}</span>
//             </div>
//           </div>
//         </div>

//         {/* ========================================================================= */}
//         {/* 2. SECOND SECTION: DELIVERY ADDRESS                                       */}
//         {/* ========================================================================= */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
//             <div className="flex items-center gap-2.5">
//               <MapPin className="text-[#FC8019]" size={22} />
//               <h2 className="font-black text-lg sm:text-xl text-gray-900">Delivery Address</h2>
//             </div>

//             <button
//               type="button"
//               onClick={getCurrentLocation}
//               disabled={loadingLocation}
//               className="bg-orange-50 text-[#FC8019] hover:bg-orange-100 border border-orange-100 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5"
//             >
//               {loadingLocation ? (
//                 <>
//                   <Loader2 size={14} className="animate-spin" /> Locating...
//                 </>
//               ) : (
//                 "Use Current Location"
//               )}
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               placeholder="Full Name"
//               value={address.fullName}
//               onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
//             />
//             <input
//               placeholder="Phone Number"
//               value={address.phone}
//               onChange={(e) => setAddress({ ...address, phone: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
//             />
//             <input
//               placeholder="House / Flat / Floor"
//               value={address.house}
//               onChange={(e) => setAddress({ ...address, house: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
//             />
//             <input
//               placeholder="Area / Street / Colony"
//               value={address.area}
//               onChange={(e) => setAddress({ ...address, area: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
//             />
//             <input
//               placeholder="Landmark (Optional)"
//               value={address.landmark}
//               onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
//             />
//             <input
//               placeholder="City"
//               value={address.city}
//               onChange={(e) => setAddress({ ...address, city: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
//             />
//             <input
//               placeholder="Pincode"
//               value={address.pincode}
//               onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
//               className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
//             />
//           </div>
//         </div>

//         {/* ETA Panel */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
//               <Clock3 size={24} />
//             </div>
//             <div>
//               <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">Delivery in 10 minutes</h3>
//               <p className="text-gray-400 text-xs sm:text-sm font-medium">Instant flash delivery from your closest KKCart dark store.</p>
//             </div>
//           </div>
//         </div>

//         {/* ========================================================================= */}
//         {/* 3. THIRD SECTION: PAYMENT METHOD & FINAL ORDER INITIATION                 */}
//         {/* ========================================================================= */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
//           <div className="flex items-center gap-2.5 mb-5">
//             <Wallet className="text-[#FC8019]" size={22} />
//             <h2 className="font-black text-lg sm:text-xl text-gray-900">Payment Method</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <PayOption
//               active={paymentMethod === "COD"}
//               onClick={() => setPaymentMethod("COD")}
//               icon={<Banknote size={20} />}
//               title="Cash on Delivery"
//             />
//             <PayOption
//               active={paymentMethod === "UPI"}
//               onClick={() => setPaymentMethod("UPI")}
//               icon={<Smartphone size={20} />}
//               title="UPI App Payment"
//             />
//           </div>

//           {paymentMethod === "UPI" && (
//             <div className="space-y-4 animate-fade-in mt-4">
//               <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//                 <div>
//                   <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Official Merchant UPI ID</p>
//                   <p className="text-emerald-600 font-black text-sm sm:text-base selection:bg-orange-200">kkcute6253-5@okaxis</p>
//                 </div>
//               </div>

//               <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 max-w-xs mx-auto">
//                 <img src="/upi.jpeg" alt="UPI QR Code" className="w-44 h-44 mx-auto rounded-xl shadow-sm border bg-white object-contain" />
//                 <p className="text-xs font-bold text-gray-500 mt-2">Scan QR Code via PhonePe/GPay</p>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Upload Transaction Screenshot</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setPaymentScreenshot(e.target.files[0])}
//                   className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-extrabold file:bg-orange-50 file:text-[#FC8019] hover:file:bg-orange-100 border border-gray-200 rounded-xl p-2 cursor-pointer bg-white"
//                 />
//               </div>

//               <input
//                 value={transactionId}
//                 onChange={(e) => setTransactionId(e.target.value)}
//                 placeholder="Enter 12-digit UPI Ref/Transaction ID"
//                 className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019]"
//               />
//             </div>
//           )}

//           <button
//             onClick={placeOrder}
//             disabled={placing || !deliveryAllowed || distance === 0 || checkingOrders}
//             className="w-full mt-6 bg-[#FC8019] text-white py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wide hover:bg-[#e06f14] disabled:opacity-50 disabled:pointer-events-none transition shadow-md shadow-orange-100"
//           >
//             {placing ? "Processing Order..." : `Place Order • ₹${grandTotal}`}
//           </button>
//         </div>

//         {/* First Order Marketing Perks */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
//           <div className="flex items-center gap-2.5 mb-3">
//             <BadgePercent className="text-[#FC8019]" size={22} />
//             <h2 className="font-black text-base sm:text-lg text-gray-900">First Order Offer</h2>
//           </div>
//           {checkingOrders ? (
//             <p className="text-xs text-gray-400 animate-pulse font-medium">Verifying offer qualification metrics...</p>
//           ) : isFirstOrder ? (
//             itemTotal >= 299 ? (
//               <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-sm font-semibold text-emerald-800">
//                 🎉 Welcome Discount Applied! You saved ₹50 flat on this bundle.
//               </div>
//             ) : (
//               <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-sm font-semibold text-orange-800">
//                 Add items worth ₹{299 - itemTotal} more to qualify for flat ₹50 Welcome Rewards.
//               </div>
//             )
//           ) : (
//             <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-500 font-medium">
//               Welcome coupon benchmark already redeemed on your registration.
//             </div>
//           )}
//         </div>

//         {/* Secure Badges Footer Panel */}
//         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
//           <div className="flex gap-3 items-start">
//             <Truck className="text-[#FC8019] shrink-0" size={18} />
//             <div>
//               <h4 className="font-bold text-gray-900">Contactless Rapid Drop</h4>
//               <p className="text-gray-400 text-xs mt-0.5">Riders follow complete standard hyper-local tracking protocols.</p>
//             </div>
//           </div>
//           <div className="flex gap-3 items-start">
//             <ShieldCheck className="text-emerald-600 shrink-0" size={18} />
//             <div>
//               <h4 className="font-bold text-gray-900">Secure AES Encryption</h4>
//               <p className="text-gray-400 text-xs mt-0.5">Payments and user state tracking loops are safely containerized.</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }

// function PayOption({ active, onClick, icon, title }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`w-full border rounded-xl p-4 flex items-center gap-3 text-left transition-all ${
//         active
//           ? "border-[#FC8019] bg-orange-50/50 shadow-sm ring-1 ring-[#FC8019]"
//           : "border-gray-200 hover:bg-gray-50/50"
//       }`}
//     >
//       <div className={active ? "text-[#FC8019]" : "text-gray-400"}>{icon}</div>
//       <span className={`text-sm font-extrabold ${active ? "text-gray-900" : "text-gray-700"}`}>{title}</span>
//     </button>
//   );
// }

// function Row({ label, value, green }) {
//   return (
//     <div className="flex justify-between items-center">
//       <span className="text-gray-500">{label}</span>
//       <span className={green ? "text-emerald-600 font-extrabold" : "text-gray-900 font-bold"}>{value}</span>
//     </div>
//   );
// }

import { useContext, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Clock3,
  Wallet,
  Truck,
  BadgePercent,
  ShieldCheck,
  Banknote,
  Smartphone,
  Loader2,
  ShieldAlert, // Added for policy highlight banner iconography
} from "lucide-react";
import toast from "react-hot-toast";
import API from "../api";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [hasPastOrders, setHasPastOrders] = useState(false); 
  const [checkingOrders, setCheckingOrders] = useState(true);

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

  const itemTotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      const priceRaw = item.price ? item.price.toString() : "0";
      const cleanPrice = parseFloat(priceRaw.replace(/[^0-9.]/g, "")) || 0;
      const qty = parseInt(item.qty || item.quantity || 1, 10);
      return sum + (cleanPrice * qty);
    }, 0);
  }, [cart]);

  const handlingFee = itemTotal > 0 ? 7 : 0;

  const isFirstOrder = !hasPastOrders && localStorage.getItem("firstOrderUsed") !== "true";

  const discount =
    itemTotal >= 299 && (isFirstOrder || coupon.toUpperCase() === "KK50")
      ? 50
      : 0;

  const grandTotal = Math.max(
    itemTotal +
    Number(deliveryFee || 0) +
    Number(handlingFee || 0) -
    Number(discount || 0),
    0
  );

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      API.get(`/orders/${userId}`)
        .then((res) => {
          if (res.data && res.data.length > 0) {
            setHasPastOrders(true);
          } else {
            setHasPastOrders(false);
          }
        })
        .catch((err) => console.error("Error verifying active order milestones:", err))
        .finally(() => setCheckingOrders(false));
    } else {
      setCheckingOrders(false);
    }
  }, []);

  useEffect(() => {
    const savedProfileAddress = localStorage.getItem("userProfileAddress");
    if (savedProfileAddress) {
      try {
        const parsedAddress = JSON.parse(savedProfileAddress);
        setAddress(parsedAddress);
        
        if (parsedAddress.lat && parsedAddress.lng) {
          API.post("/delivery/check", { lat: parsedAddress.lat, lng: parsedAddress.lng })
            .then((res) => {
              setDistance(res.data.distance || 0);
              setDeliveryFee(Number(res.data.deliveryFee) || 0);
            })
            .catch((err) => console.log("Background distance check failed", err));
        }
      } catch (err) {
        console.error("Error reading profile address");
      }
    } else {
      const fallbackDraft = localStorage.getItem("deliveryAddressDraft");
      if (fallbackDraft) {
        try { setAddress(JSON.parse(fallbackDraft)); } catch(e){}
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("deliveryAddressDraft", JSON.stringify(address));
  }, [address]);

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

          const deliveryRes = await API.post("/delivery/check", { lat, lng });
          setDistance(deliveryRes.data.distance || 0);
          setDeliveryFee(Number(deliveryRes.data.deliveryFee) || 0);

          const geoRes = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
          );
          const geoData = await geoRes.json();
          const addr = geoData.address || {};

          setAddress((prev) => ({
            ...prev,
            house: geoData.display_name || "",
            area: addr.suburb || addr.neighbourhood || addr.village || "",
            city: addr.city || addr.town || addr.state_district || "",
            pincode: addr.postcode || "",
            lat, 
            lng
          }));

          toast.success("Location coordinates loaded!");
        } catch (err) {
          console.log("LOCATION PROCESS ERROR:", err);
          
          toast.error("Delivery requires location verification (Max 7 km)");
        } finally {
          setLoadingLocation(false);
        }
      },
      (error) => {
        setLoadingLocation(false);
        toast.error("Unable to find location. Please type manually.");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  const placeOrder = async () => {
    const userId = localStorage.getItem("userId");

    if (!deliveryAllowed) {
      toast.error("Delivery unavailable beyond 7 km");
      return;
    }
    if (distance === 0) {
      toast.error("Please verify delivery location coordinates");
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
    if (!address.fullName || !address.phone || !address.house || !address.area || !address.city || !address.pincode) {
      toast.error("Please fill out complete delivery details");
      return;
    }
    if (paymentMethod === "UPI" && !transactionId.trim()) {
      toast.error("Enter UPI transaction ID");
      return;
    }

    try {
      setPlacing(true);
      const formData = new FormData();
      
      formData.append("userId", userId);
      formData.append(
        "items",
        JSON.stringify(cart.map((item) => ({ productId: item._id, quantity: item.qty })))
      );

      const mapLink = `${address.lat},${address.lng}`;
      const computedAddressString = `Name: ${address.fullName}\nPhone: ${address.phone}\nAddress: ${address.house}, ${address.area}, ${address.city} - ${address.pincode}\nLandmark: ${address.landmark || "N/A"}\n\n📍 GOOGLE MAPS LINK:\n${mapLink}`;

      formData.append("address", computedAddressString);
      formData.append("paymentMethod", paymentMethod);
      formData.append("totalAmount", grandTotal);
      formData.append("paymentStatus", paymentMethod === "COD" ? "Pending" : "Paid");

      if (paymentMethod === "UPI") {
        formData.append("transactionId", transactionId.trim());
      } else {
        formData.append("transactionId", ""); 
      }

      if (paymentScreenshot) {
        formData.append("paymentScreenshot", paymentScreenshot);
      }

      await API.post("/orders", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      localStorage.setItem("userProfileAddress", JSON.stringify(address));

      const savedList = JSON.parse(localStorage.getItem("savedAddressesList") || "[]");
      if (!savedList.includes(computedAddressString)) {
        savedList.push(computedAddressString);
        localStorage.setItem("savedAddressesList", JSON.stringify(savedList));
      }

      if (isFirstOrder && itemTotal >= 299) {
        localStorage.setItem("firstOrderUsed", "true");
      }
      
      clearCart();
      navigate("/order-success");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Order configuration failed");
    } finally {
      setPlacing(false);
    }
  };

  if (!cart.length) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
        <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 sm:p-8 text-center max-w-md w-full">
          <h1 className="text-xl sm:text-2xl font-black text-gray-900">Your cart is empty</h1>
          <p className="text-gray-500 text-sm mt-2">Add delicious products before checking out.</p>
          <button
            onClick={() => navigate("/")}
            className="w-full mt-6 bg-[#FC8019] hover:bg-[#e06f14] text-white py-3.5 px-6 rounded-xl font-extrabold text-sm uppercase tracking-wide transition shadow-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 font-sans antialiased">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* ========================================================================= */}
        {/* 1. ORDER SUMMARY PANEL                                                    */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
          <h2 className="font-black text-lg sm:text-xl text-gray-900 mb-4">Order Summary</h2>

          <div className="space-y-3.5 max-h-60 overflow-y-auto pr-1 divide-y divide-gray-50">
            {cart.map((item) => {
              const cleanPriceNum = parseFloat(item.price?.toString().replace(/[^0-9.]/g, "")) || 0;
              return (
                <div key={item._id} className="flex gap-3 pt-3 first:pt-0 items-start">
                  <img
                    src={item.image || "/products/default.jpg"}
                    alt={item.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border bg-gray-50 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-800 truncate">{item.name}</h4>
                    <div className="flex items-center gap-2.5 mt-2">
                      <button
                        type="button"
                        onClick={() => decreaseQty(item._id)}
                        className="w-7 h-6 rounded-lg bg-gray-100 font-black text-xs hover:bg-gray-200 transition"
                      >
                        -
                      </button>
                      <span className="font-black text-xs text-gray-900">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => increaseQty(item._id)}
                        className="w-7 h-6 rounded-lg bg-gray-100 text-gray-800 font-black text-xs hover:bg-gray-200 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="font-black text-xs sm:text-sm text-gray-900 whitespace-nowrap">₹{cleanPriceNum * item.qty}</p>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-100 mt-5 pt-4 space-y-2.5 text-xs sm:text-sm text-gray-600 font-medium">
            <Row label="Item Total" value={`₹${itemTotal}`} />
            <Row label="Delivery Partner Fee" value={`₹${Number(deliveryFee || 0)}`} />
            <Row label="Govt. Taxes & Handling" value={`₹${handlingFee}`} />
            {itemTotal >= 299 && discount > 0 && <Row label="Discount Coupon" value={`-₹${discount}`} green />}
            
            {!deliveryAllowed && (
              <div className="bg-red-50 text-red-700 p-3 rounded-xl text-xs font-bold border border-red-100">
                Location metrics exceed 7 km delivery threshold limit.
              </div>
            )}

            <div className="border-t border-gray-100 pt-3.5 flex justify-between text-base sm:text-lg font-black text-gray-900">
              <span>To Pay</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. DELIVERY ADDRESS                                                       */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2.5">
              <MapPin className="text-[#FC8019]" size={22} />
              <h2 className="font-black text-lg sm:text-xl text-gray-900">Delivery Address</h2>
            </div>

            <button
              type="button"
              onClick={getCurrentLocation}
              disabled={loadingLocation}
              className="bg-orange-50 text-[#FC8019] hover:bg-orange-100 border border-orange-100 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5"
            >
              {loadingLocation ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Locating...
                </>
              ) : (
                "Use Current Location"
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              placeholder="Full Name"
              value={address.fullName}
              onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
              className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
            />
            <input
              placeholder="Phone Number"
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
            />
            <input
              placeholder="House / Flat / Floor"
              value={address.house}
              onChange={(e) => setAddress({ ...address, house: e.target.value })}
              className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
            />
            <input
              placeholder="Area / Street / Colony"
              value={address.area}
              onChange={(e) => setAddress({ ...address, area: e.target.value })}
              className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
            />
            <input
              placeholder="Landmark (Optional)"
              value={address.landmark}
              onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
              className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition sm:col-span-2"
            />
            <input
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
            />
            <input
              placeholder="Pincode"
              value={address.pincode}
              onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
              className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019] transition"
            />
          </div>
        </div>

        {/* ETA Panel */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock3 size={24} />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">Delivery in 10 minutes</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">Instant flash delivery from your closest KKCart dark store.</p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. PAYMENT METHOD & ORDER INITIATION                                      */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
          <div className="flex items-center gap-2.5 mb-5">
            <Wallet className="text-[#FC8019]" size={22} />
            <h2 className="font-black text-lg sm:text-xl text-gray-900">Payment Method</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <PayOption
              active={paymentMethod === "COD"}
              onClick={() => setPaymentMethod("COD")}
              icon={<Banknote size={20} />}
              title="Cash on Delivery"
            />
            <PayOption
              active={paymentMethod === "UPI"}
              onClick={() => setPaymentMethod("UPI")}
              icon={<Smartphone size={20} />}
              title="UPI App Payment"
            />
          </div>

          {paymentMethod === "UPI" && (
            <div className="space-y-4 animate-fade-in mt-4">
              <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Official Merchant UPI ID</p>
                  <p className="text-emerald-600 font-black text-sm sm:text-base selection:bg-orange-200">kkcute6253-5@okaxis</p>
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 max-w-xs mx-auto">
                <img src="/upi.jpeg" alt="UPI QR Code" className="w-44 h-44 mx-auto rounded-xl shadow-sm border bg-white object-contain" />
                <p className="text-xs font-bold text-gray-500 mt-2">Scan QR Code via PhonePe/GPay</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Upload Transaction Screenshot</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPaymentScreenshot(e.target.files[0])}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-extrabold file:bg-orange-50 file:text-[#FC8019] hover:file:bg-orange-100 border border-gray-200 rounded-xl p-2 cursor-pointer bg-white"
                />
              </div>

              <input
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="Enter 12-digit UPI Ref/Transaction ID"
                className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-[#FC8019]"
              />
            </div>
          )}

          {/* ========================================================================= */}
          {/* 🔥 NEW ATTENTION HIGH-ALERT POLICY BANNER FOR REFUNDS & OPEN-BOX          */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200 rounded-2xl p-4 mt-6 space-y-3">
            <div className="flex items-center gap-2 text-orange-800">
              <ShieldAlert size={16} className="stroke-[2.5]" />
              <h3 className="font-black text-xs sm:text-sm tracking-tight uppercase">Important Order Policies</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] sm:text-xs">
              <div className="bg-white/80 p-2.5 rounded-xl border border-orange-100">
                <p className="font-black text-red-600 uppercase tracking-wider">No Cancellations or Refunds</p>
                <p className="text-gray-500 font-semibold mt-0.5 leading-relaxed">
                  Due to the perishable nature of fresh food & groceries, **all sales are absolute final**. No refunds will be generated after payment confirmation.
                </p>
              </div>
              <div className="bg-white/80 p-2.5 rounded-xl border border-orange-100">
                <p className="font-black text-emerald-600 uppercase tracking-wider">Mandatory Open-Box Delivery</p>
                <p className="text-gray-500 font-semibold mt-0.5 leading-relaxed">
                  Please verify items with the rider during checkout handover. **Claims regarding missing or damaged items are strictly not entertained after delivery.**
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={placeOrder}
            disabled={placing || !deliveryAllowed || distance === 0 || checkingOrders}
            className="w-full mt-4 bg-[#FC8019] text-white py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wide hover:bg-[#e06f14] disabled:opacity-50 disabled:pointer-events-none transition shadow-md shadow-orange-100"
          >
            {placing ? "Processing Order..." : `Place Order • ₹${grandTotal}`}
          </button>
        </div>

        {/* First Order Marketing Perks */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <BadgePercent className="text-[#FC8019]" size={22} />
            <h2 className="font-black text-base sm:text-lg text-gray-900">First Order Offer</h2>
          </div>
          {checkingOrders ? (
            <p className="text-xs text-gray-400 animate-pulse font-medium">Verifying offer qualification metrics...</p>
          ) : isFirstOrder ? (
            itemTotal >= 299 ? (
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-sm font-semibold text-emerald-800">
                🎉 Welcome Discount Applied! You saved ₹50 flat on this bundle.
              </div>
            ) : (
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-sm font-semibold text-orange-800">
                Add items worth ₹{299 - itemTotal} more to qualify for flat ₹50 Welcome Rewards.
              </div>
            )
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-500 font-medium">
              Welcome coupon benchmark already redeemed on your registration.
            </div>
          )}
        </div>

        {/* Secure Badges Footer Panel */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="flex gap-3 items-start">
            <Truck className="text-[#FC8019] shrink-0" size={18} />
            <div>
              <h4 className="font-bold text-gray-900">Contactless Rapid Drop</h4>
              <p className="text-gray-400 text-xs mt-0.5">Riders follow complete standard hyper-local tracking protocols.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <ShieldCheck className="text-emerald-600 shrink-0" size={18} />
            <div>
              <h4 className="font-bold text-gray-900">Secure AES Encryption</h4>
              <p className="text-gray-400 text-xs mt-0.5">Payments and user state tracking loops are safely containerized.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

function PayOption({ active, onClick, icon, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full border rounded-xl p-4 flex items-center gap-3 text-left transition-all ${
        active
          ? "border-[#FC8019] bg-orange-50/50 shadow-sm ring-1 ring-[#FC8019]"
          : "border-gray-200 hover:bg-gray-50/50"
      }`}
    >
      <div className={active ? "text-[#FC8019]" : "text-gray-400"}>{icon}</div>
      <span className={`text-sm font-extrabold ${active ? "text-gray-900" : "text-gray-700"}`}>{title}</span>
    </button>
  );
}

function Row({ label, value, green }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-500">{label}</span>
      <span className={green ? "text-emerald-600 font-extrabold" : "text-gray-900 font-bold"}>{value}</span>
    </div>
  );
}
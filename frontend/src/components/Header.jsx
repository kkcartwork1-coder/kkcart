// import { Link } from "react-router-dom";
// import {
//   Search,
//   ShoppingCart,
//   MapPin,
//   User,
// } from "lucide-react";
// import { SearchContext } from "../context/SearchContext";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import logo from "/fav.png";

// export default function Header() {
//   const { cart } = useContext(CartContext);
//   const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

//   const { search, setSearch } =
//   useContext(SearchContext);
//   const [location, setLocation] = useState("Allow Location");
//   const [distance, setDistance] = useState(null);
//   const [deliveryCharge, setDeliveryCharge] = useState(0);

//   const user = JSON.parse(localStorage.getItem("user")) || {};
//   const userName = user.name ? user.name.split(" ")[0] : "Profile";

//   // 🔥 YOUR STORE LOCATION (CHANGE THIS)
//   const STORE_LAT = 20.303900;
//   const STORE_LON = 85.847385;



//   // const STORE_LAT = 19.9200040;
//   // const STORE_LON = 86.1917933;
  
//   // const [search, setSearch] = useState("");
//   useEffect(() => {
//     getUserLocation();
//   }, []);

//   // 📍 Distance Calculator (Haversine Formula)
//   const getDistanceKm = (lat1, lon1, lat2, lon2) => {
//     const R = 6371;
//     const dLat = ((lat2 - lat1) * Math.PI) / 180;
//     const dLon = ((lon2 - lon1) * Math.PI) / 180;

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((lat1 * Math.PI) / 180) *
//         Math.cos((lat2 * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
//   };

//   const getUserLocation = () => {
//     if (!navigator.geolocation) {
//       setLocation("Location not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;

//         try {
//           const res = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
//           );

//           const data = await res.json();

//           // const area =
//           //   data.address.city ||
//           //   data.address.town ||
//           //   data.address.village ||
//           //   data.address.state_district ||
//           //   "Your Area";

// // const area =
// //   data.address.suburb ||
// //   data.address.hamlet ||
// //   data.address.village ||
// //   data.address.neighbourhood ||
// //   data.address.town ||
// //   data.address.city ||
// //   "Your Location";

// // const state = data.address.state || "";

// // // ✅ create full address properly
// // const fullAddress = `${area}${state ? ", " + state : ""}`;

// // setLocation(fullAddress);
// // localStorage.setItem("deliveryAddress", fullAddress);

// const fullAddress = data.display_name || "Your Location";
// const shortAddress = fullAddress.length > 60
//   ? fullAddress.slice(0, 60) + "..."
//   : fullAddress;

// setLocation(shortAddress);
// localStorage.setItem("deliveryAddress", fullAddress);

// //           const state = data.address.state || "";
// //           // const fullAddress = `${area}, ${state}`;
// //           setLocation(area);
// // localStorage.setItem("deliveryAddress", area);


//           // // 📏 Distance calculation
//           // const dist = getDistanceKm(
//           //   STORE_LAT,
//           //   STORE_LON,
//           //   lat,
//           //   lon
//           // );

//           // const km = dist.toFixed(2);
//           // setDistance(km);

//           // // 💰 Delivery charge logic
//           // if (dist <= 5) {
//           //   setDeliveryCharge(20);
//           // } else {
//           //   setDeliveryCharge(50 + Math.round(dist * 5));
//           // }

//           // setLocation(fullAddress);

//           // localStorage.setItem("deliveryAddress", fullAddress);
//           // localStorage.setItem("distance", km);
//           // localStorage.setItem(
//           //   "deliveryCharge",
//           //   dist <= 5 ? 20 : 50 + Math.round(dist * 5)
//           // );
//         } 
//         // catch (err) {
//         //   setLocation("Location found");
//         // }
//         catch (err) {
//   console.log(err);

//   setLocation(
//     localStorage.getItem("deliveryAddress") ||
//       "Allow Location"
//   );
// }
//       },
//       () => {
//         setLocation("Permission Denied");
//       }
//     );
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
//       <div className="max-w-7xl mx-auto px-3 md:px-4 py-3">

//         {/* TOP */}
//         <div className="flex items-center gap-3">

//          {/* MOBILE HEADER */}
// <div className="md:hidden">
//   <div className="flex items-center gap-2">

//     {/* LOGO LEFT */}
//     <Link to="/" className="flex items-center gap-1 shrink-0">
//       <img
//         src={logo}
//         alt="KKCart"
//         className="h-10 w-10 object-contain"
//       />

//       <div>
//         <h1 className="text-lg font-extrabold text-orange-500 leading-none">
//           KK<span className="text-green-600">Cart</span>
//         </h1>

//         <p className="text-[9px] text-gray-500">
//           Fast Delivery
//         </p>
//       </div>
//     </Link>

//     {/* SEARCH CENTER */}
//     <div className="flex-1 relative">
//       <Search
//         size={16}
//         className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//       />

//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search..."
//         className="w-full bg-gray-100 rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none"
//       />
//     </div>

//     {/* PROFILE RIGHT */}
//     <Link
//       to="/profile"
//       className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0"
//     >
//       <User size={18} />
//     </Link>

//        <Link
//             to="/checkout"
//             className="relative bg-green-600 text-white px-3 md:px-4 py-3 rounded-xl flex items-center gap-2 font-semibold hover:bg-green-700 ml-auto md:ml-0"
//           >
//             <ShoppingCart size={20} />
//             <span className="hidden sm:inline">Cart</span>

//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 rounded-full flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </Link>
//   </div>

//   {/* LOCATION BOX */}
//   <div
//     onClick={getUserLocation}
//     className="mt-3 bg-green-50 rounded-xl p-3"
//   >
//     <div className="flex items-start gap-2">
//       <MapPin size={16} className="text-green-600 mt-0.5" />

//       <div>
//         <p className="font-bold text-xs">
//           Delivery in 30-60 minutes
//         </p>

//         <p className="text-[11px] text-gray-500 truncate">
//           {location}
//         </p>
// {/* 
//         {distance && (
//           <p className="text-[11px] text-green-600 font-bold">
//             📍 {distance} km away
//           </p>
//         )}

//         {distance && (
//           <p className="text-[11px] text-orange-600 font-bold">
//             🚚 ₹{deliveryCharge} delivery
//           </p>
//         )} */}
//       </div>
//     </div>
//   </div>
// </div>

//           {/* LOGO */}
//           {/* <Link to="/" className="flex items-center gap-2 shrink-0">
//             <img
//               src={logo}
//               alt="KKCart Logo"
//               className="h-10 md:h-12 w-auto object-contain"
//             />

//             <div className="leading-tight">
//               <h1 className="text-xl md:text-2xl font-extrabold text-orange-500">
//                 KK<span className="text-green-600">Cart</span>
//               </h1> 
            
//             </div>
//           </Link> */}

         

//           {/* LOCATION */}
//           {/* <div
//             onClick={getUserLocation}
//             className="hidden lg:flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
//           >
//             <MapPin size={18} className="text-green-600" />
//             <div>
//               <p className="font-bold">Delivery in 10 minutes</p>
//               <p className="text-xs text-gray-500">{location}</p>

//               {distance && (
//                 <p className="text-[11px] text-green-600 font-bold">
//                   📍 {distance} km away
//                 </p>
//               )}

//               {distance && (
//                 <p className="text-[11px] text-orange-600 font-bold">
//                   🚚 ₹{deliveryCharge} delivery{" "}
//                   {distance <= 5 ? "(Low cost)" : "(Extra charge)"}
//                 </p>
//               )}
//             </div>
//           </div> */}
// <Link
//   to="/"
//   className="hidden md:flex items-center gap-2 shrink-0"
// >
//   <img
//     src={logo}
//     alt="KKCart Logo"
//     className="h-14 w-14 object-contain"
//   />

//   <div>
//     <h1 className="text-xl font-extrabold text-orange-500">
//       KK<span className="text-green-600">Cart</span>
//     </h1>

//     <p className="text-[10px] text-gray-500">
//       Fast Delivery
//     </p>
//   </div>
// </Link>
//           {/* SEARCH */}
//           <div className="hidden md:block flex-1 relative">
//             <Search
//               className="absolute left-3 top-3 text-gray-400"
//               size={18}
//             />
//             {/* <input
//               type="text"
//               placeholder="Search"
//               className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
//             /> */}
//             <input
//   type="text"
//   value={search}
//   onChange={(e) => setSearch(e.target.value)}
//   placeholder="Search products..."
//   className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
// />
//           </div>

//           {/* PROFILE */}
//           <Link
//             to="/profile"
//             className="hidden md:flex items-center gap-2 font-semibold text-gray-700 hover:text-green-600 ml-auto"
//           >
//             <User size={18} />
//             {userName}
//           </Link>

//           {/* ORDERS */}
//           {/* <Link
//             to="/my-orders"
//             className="hidden md:block font-semibold text-gray-700 hover:text-green-600"
//           >
//             Orders
//           </Link> */}

//           {/* CART */}
//           {/* <Link
//             to="/checkout"
//             className="relative bg-green-600 text-white px-3 md:px-4 py-3 rounded-xl flex items-center gap-2 font-semibold hover:bg-green-700 ml-auto md:ml-0"
//           >
//             <ShoppingCart size={20} />
//             <span className="hidden sm:inline">Cart</span>

//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 rounded-full flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </Link> */}
//           <Link
//   to="/checkout"
//   className="hidden md:flex relative bg-green-600 text-white px-4 py-3 rounded-xl items-center gap-2 font-semibold hover:bg-green-700 ml-auto"
// >
//   <ShoppingCart size={20} />
//   <span>Cart</span>

//   {totalItems > 0 && (
//     <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 rounded-full flex items-center justify-center">
//       {totalItems}
//     </span>
//   )}
// </Link>
//         </div>

//         {/* MOBILE LOCATION */}
//         {/* <div
//           onClick={getUserLocation}
//           className="md:hidden mt-3 flex items-center gap-2 text-sm text-gray-700 bg-green-50 px-3 py-2 rounded-xl"
//         >
//           <MapPin size={17} className="text-green-600" />
//           <div> */}
//             {/* <p className="font-bold text-xs">
//               Delivery in 10 minutes
//             </p>
//           <p className="text-[11px] text-gray-500 truncate max-w-[220px]">
//   {location}
// </p> */}

//             {/* {distance && (
//               <p className="text-[11px] text-green-600 font-bold">
//                 📍 {distance} km away
//               </p>
//             )}

//             {distance && (
//               <p className="text-[11px] text-orange-600 font-bold">
//                 🚚 ₹{deliveryCharge} delivery
//               </p>
//             )} */}
//           {/* </div>
//         </div> */}

//         {/* MOBILE SEARCH */}
//         {/* <div className="md:hidden mt-3 relative">
//           <Search
//             className="absolute left-3 top-3 text-gray-400"
//             size={18}
//           />
//         <input
//   type="text"
//   value={search}
//   onChange={(e) => setSearch(e.target.value)}
//   placeholder="Search products..."
//   className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
// />
//         </div> */}
//       </div>
//     </header>
//   );
// }

import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  MapPin,
  User,
} from "lucide-react";
import { SearchContext } from "../context/SearchContext";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import logo from "/fav.png";

export default function Header() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const { search, setSearch } = useContext(SearchContext);
  const [location, setLocation] = useState("Allow Location");

  // ⚡ FIXED: DEFINITIONS INCLUDED TO RESOLVE 'userName is not defined' ERROR
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name ? user.name.split(" ")[0] : "Profile";

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );
          const data = await res.json();

          const fullAddress = data.display_name || "Your Location";
          const shortAddress = fullAddress.length > 50
            ? fullAddress.slice(0, 50) + "..."
            : fullAddress;

          setLocation(shortAddress);
          localStorage.setItem("deliveryAddress", fullAddress);
        } catch (err) {
          console.log(err);
          setLocation(localStorage.getItem("deliveryAddress") || "Allow Location");
        }
      },
      () => {
        setLocation("Permission Denied");
      }
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm antialiased">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">

        {/* ========================================================================= */}
        {/* 📱 1. MOBILE LAYOUT: CENTERED SEARCH BAR IN A SINGLE SLEEK ROW            */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:hidden space-y-2">
          
          {/* Main Action Line Row */}
          <div className="flex items-center gap-2.5 w-full">
            
            {/* LEFT: Mini Brand Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src={logo} alt="KKCart" className="h-8 w-8 object-contain" />
            </Link>

            {/* CENTER: Fluid Core Search Bar Element */}
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search food, groceries..."
                className="w-full bg-gray-50 border border-gray-100 focus:bg-white rounded-xl pl-8 pr-3 py-2 text-xs font-semibold outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-all"
              />
            </div>

            {/* RIGHT: Combined Utility Shortcut Icons Tray */}
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Profile Portal Option */}
              <Link
                to="/profile"
                className="w-8 h-8 rounded-lg bg-orange-50 text-[#FC8019] flex items-center justify-center border border-orange-100/60 active:scale-95 transition-transform"
              >
                <User size={14} className="stroke-[2.5]" />
              </Link>

              {/* Secure Checkout Cart Link */}
              <Link
                to="/checkout"
                className="relative w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center border border-green-100/60 active:scale-95 transition-transform"
              >
                <ShoppingCart size={14} className="stroke-[2.5]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Dynamic Geographic Reverse Geocoding Address Banner Line */}
          <div
            onClick={getUserLocation}
            className="flex items-center gap-1.5 text-[10px] text-gray-500 bg-gray-50/60 px-2 py-1 rounded-lg border border-gray-100/40 cursor-pointer active:opacity-80 mt-0.5"
          >
            <MapPin size={11} className="text-green-600 shrink-0" />
            <p className="truncate flex-1">
              <span className="font-extrabold text-gray-800 mr-0.5">Drop at:</span> {location}
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 💻 2. DESKTOP LAYOUT                                                      */}
        {/* ========================================================================= */}
        <div className="hidden md:flex items-center justify-between gap-6 w-full">
          
          {/* Logo Cluster */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img src={logo} alt="KKCart Logo" className="h-11 w-11 object-contain transition-transform group-hover:scale-105 duration-300" />
            <div>
              <h1 className="text-xl font-black text-orange-500 tracking-tight leading-none">
                KK<span className="text-green-600">Cart</span>
              </h1>
              <p className="text-[10px] font-bold text-gray-400 tracking-wide mt-1">Fast Delivery Store</p>
            </div>
          </Link>

          {/* Centered Desktop Search Matrix Container */}
          <div className="flex-1 max-w-lg relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search across thousands of fresh products..."
              className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-all"
            />
          </div>

          {/* Right Action Utilities Links Group */}
          <div className="flex items-center gap-6 shrink-0">
            <div 
              onClick={getUserLocation} 
              className="hidden lg:flex items-center gap-2 text-left cursor-pointer hover:opacity-80 transition-opacity"
            >
              <MapPin size={18} className="text-green-600 shrink-0" />
              <div className="max-w-[180px]">
                <p className="text-xs font-black text-gray-900 leading-tight">Instant Dark Store Drop</p>
                <p className="text-[11px] text-gray-400 font-bold truncate mt-0.5" title={location}>{location}</p>
              </div>
            </div>

            <Link
              to="/profile"
              className="flex items-center gap-1.5 text-sm font-extrabold text-gray-700 hover:text-green-600 transition-colors"
            >
              <User size={16} className="text-gray-400" />
              <span>{userName}</span>
            </Link>

            <Link
              to="/checkout"
              className="relative bg-green-600 hover:bg-green-700 text-white px-5 h-11 rounded-xl flex items-center gap-2 font-extrabold text-sm tracking-wide transition-all shadow-md shadow-green-100 active:scale-95"
            >
              <ShoppingCart size={16} className="stroke-[2.5]" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="bg-white text-green-700 text-xs font-black min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center border border-green-600/10">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

        </div>

      </div>
    </header>
  );
}
// Full Header.jsx
// import { Link } from "react-router-dom";
// import {
//   Search,
//   ShoppingCart,
//   MapPin,
//   User,
// } from "lucide-react";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import logo from "/fav.png";



// export default function Header() {
//   const { cart } = useContext(CartContext);
//   const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

//   const [location, setLocation] = useState("Allow Location");

//   const user = JSON.parse(localStorage.getItem("user")) || {};
//   const userName = user.name ? user.name.split(" ")[0] : "Profile";

//   useEffect(() => {
//     getUserLocation();
//   }, []);

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

//           const area =
//             data.address.city ||
//             data.address.town ||
//             data.address.village ||
//             data.address.state_district ||
//             "Your Area";

//           const state = data.address.state || "";
//           const fullAddress = `${area}, ${state}`;

//           setLocation(fullAddress);
//           localStorage.setItem("deliveryAddress", fullAddress);
//         } catch {
//           setLocation("Location found");
//         }
//       },
//       () => {
//         setLocation("Permission Denied");
//       }
//     );
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
//       <div className="max-w-7xl mx-auto px-3 md:px-4 py-3">

//         {/* Top Header */}
//         <div className="flex items-center gap-3">

//           {/* Mobile Profile */}
//           <Link
//             to="/profile"
//             className="md:hidden order-last w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white flex items-center justify-center shadow-md"
//           >
//             <User size={19} />
//           </Link>

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 shrink-0">
//             <img
//               src={logo}
//               alt="KKCart Logo"
//               className="h-10 md:h-12 w-auto object-contain"
//             />

//             <div className="leading-tight ">
//               <h1 className="text-xl md:text-2xl font-extrabold text-orange-500">
//                 KK<span className="text-green-600">Cart</span>
//               </h1>
//               <p className="text-[10px] md:text-xs text-gray-500 font-medium -mt-1">
//                 Fast Delivery
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Location */}
//           <div
//             onClick={getUserLocation}
//             className="hidden lg:flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
//           >
//             <MapPin size={18} className="text-green-600" />
//             <div>
//               <p className="font-bold">Delivery in 10 minutes</p>
//               <p className="text-xs text-gray-500">{location}</p>
//             </div>
//           </div>

//           {/* Search Desktop */}
//           <div className="hidden md:block flex-1 relative">
//             <Search
//               className="absolute left-3 top-3 text-gray-400"
//               size={18}
//             />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Desktop Profile */}
//           <Link
//             to="/profile"
//             className="hidden md:flex items-center gap-2 font-semibold text-gray-700 hover:text-green-600 ml-auto"
//           >
//             <User size={18} />
//             {userName}
//           </Link>

//           {/* Orders */}
//           <Link
//             to="/my-orders"
//             className="hidden md:block font-semibold text-gray-700 hover:text-green-600"
//           >
//             Orders
//           </Link>

//           {/* Cart */}
//           <Link
//             to="/cart"
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
//         </div>

//         {/* Mobile Location */}
//         <div
//           onClick={getUserLocation}
//           className="md:hidden mt-3 flex items-center gap-2 text-sm text-gray-700 bg-green-50 px-3 py-2 rounded-xl"
//         >
//           <MapPin size={17} className="text-green-600" />
//           <div>
//             <p className="font-bold text-xs">Delivery in 10 minutes</p>
//             <p className="text-[11px] text-gray-500">{location}</p>
//           </div>
//         </div>

//         {/* Mobile Search */}
//         <div className="md:hidden mt-3 relative">
//           <Search
//             className="absolute left-3 top-3 text-gray-400"
//             size={18}
//           />
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
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

  const { search, setSearch } =
  useContext(SearchContext);
  const [location, setLocation] = useState("Allow Location");
  const [distance, setDistance] = useState(null);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name ? user.name.split(" ")[0] : "Profile";

  // 🔥 YOUR STORE LOCATION (CHANGE THIS)
  const STORE_LAT = 20.303900;
  const STORE_LON = 85.847385;



  // const STORE_LAT = 19.9200040;
  // const STORE_LON = 86.1917933;
  
  // const [search, setSearch] = useState("");
  useEffect(() => {
    getUserLocation();
  }, []);

  // 📍 Distance Calculator (Haversine Formula)
  const getDistanceKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

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

          // const area =
          //   data.address.city ||
          //   data.address.town ||
          //   data.address.village ||
          //   data.address.state_district ||
          //   "Your Area";

// const area =
//   data.address.suburb ||
//   data.address.hamlet ||
//   data.address.village ||
//   data.address.neighbourhood ||
//   data.address.town ||
//   data.address.city ||
//   "Your Location";

// const state = data.address.state || "";

// // ✅ create full address properly
// const fullAddress = `${area}${state ? ", " + state : ""}`;

// setLocation(fullAddress);
// localStorage.setItem("deliveryAddress", fullAddress);

const fullAddress = data.display_name || "Your Location";
const shortAddress = fullAddress.length > 60
  ? fullAddress.slice(0, 60) + "..."
  : fullAddress;

setLocation(shortAddress);
localStorage.setItem("deliveryAddress", fullAddress);

//           const state = data.address.state || "";
//           // const fullAddress = `${area}, ${state}`;
//           setLocation(area);
// localStorage.setItem("deliveryAddress", area);


          // // 📏 Distance calculation
          // const dist = getDistanceKm(
          //   STORE_LAT,
          //   STORE_LON,
          //   lat,
          //   lon
          // );

          // const km = dist.toFixed(2);
          // setDistance(km);

          // // 💰 Delivery charge logic
          // if (dist <= 5) {
          //   setDeliveryCharge(20);
          // } else {
          //   setDeliveryCharge(50 + Math.round(dist * 5));
          // }

          // setLocation(fullAddress);

          // localStorage.setItem("deliveryAddress", fullAddress);
          // localStorage.setItem("distance", km);
          // localStorage.setItem(
          //   "deliveryCharge",
          //   dist <= 5 ? 20 : 50 + Math.round(dist * 5)
          // );
        } 
        // catch (err) {
        //   setLocation("Location found");
        // }
        catch (err) {
  console.log(err);

  setLocation(
    localStorage.getItem("deliveryAddress") ||
      "Allow Location"
  );
}
      },
      () => {
        setLocation("Permission Denied");
      }
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-3">

        {/* TOP */}
        <div className="flex items-center gap-3">

         {/* MOBILE HEADER */}
<div className="md:hidden">
  <div className="flex items-center gap-2">

    {/* LOGO LEFT */}
    <Link to="/" className="flex items-center gap-1 shrink-0">
      <img
        src={logo}
        alt="KKCart"
        className="h-10 w-10 object-contain"
      />

      <div>
        <h1 className="text-lg font-extrabold text-orange-500 leading-none">
          KK<span className="text-green-600">Cart</span>
        </h1>

        <p className="text-[9px] text-gray-500">
          Fast Delivery
        </p>
      </div>
    </Link>

    {/* SEARCH CENTER */}
    <div className="flex-1 relative">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full bg-gray-100 rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none"
      />
    </div>

    {/* PROFILE RIGHT */}
    <Link
      to="/profile"
      className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0"
    >
      <User size={18} />
    </Link>

       <Link
            to="/checkout"
            className="relative bg-green-600 text-white px-3 md:px-4 py-3 rounded-xl flex items-center gap-2 font-semibold hover:bg-green-700 ml-auto md:ml-0"
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
  </div>

  {/* LOCATION BOX */}
  <div
    onClick={getUserLocation}
    className="mt-3 bg-green-50 rounded-xl p-3"
  >
    <div className="flex items-start gap-2">
      <MapPin size={16} className="text-green-600 mt-0.5" />

      <div>
        <p className="font-bold text-xs">
          Delivery in 30-60 minutes
        </p>

        <p className="text-[11px] text-gray-500 truncate">
          {location}
        </p>
{/* 
        {distance && (
          <p className="text-[11px] text-green-600 font-bold">
            📍 {distance} km away
          </p>
        )}

        {distance && (
          <p className="text-[11px] text-orange-600 font-bold">
            🚚 ₹{deliveryCharge} delivery
          </p>
        )} */}
      </div>
    </div>
  </div>
</div>

          {/* LOGO */}
          {/* <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="KKCart Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-extrabold text-orange-500">
                KK<span className="text-green-600">Cart</span>
              </h1> 
            
            </div>
          </Link> */}

         

          {/* LOCATION */}
          {/* <div
            onClick={getUserLocation}
            className="hidden lg:flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
          >
            <MapPin size={18} className="text-green-600" />
            <div>
              <p className="font-bold">Delivery in 10 minutes</p>
              <p className="text-xs text-gray-500">{location}</p>

              {distance && (
                <p className="text-[11px] text-green-600 font-bold">
                  📍 {distance} km away
                </p>
              )}

              {distance && (
                <p className="text-[11px] text-orange-600 font-bold">
                  🚚 ₹{deliveryCharge} delivery{" "}
                  {distance <= 5 ? "(Low cost)" : "(Extra charge)"}
                </p>
              )}
            </div>
          </div> */}
<Link
  to="/"
  className="hidden md:flex items-center gap-2 shrink-0"
>
  <img
    src={logo}
    alt="KKCart Logo"
    className="h-14 w-14 object-contain"
  />

  <div>
    <h1 className="text-xl font-extrabold text-orange-500">
      KK<span className="text-green-600">Cart</span>
    </h1>

    <p className="text-[10px] text-gray-500">
      Fast Delivery
    </p>
  </div>
</Link>
          {/* SEARCH */}
          <div className="hidden md:block flex-1 relative">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />
            {/* <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            /> */}
            <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search products..."
  className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
/>
          </div>

          {/* PROFILE */}
          <Link
            to="/profile"
            className="hidden md:flex items-center gap-2 font-semibold text-gray-700 hover:text-green-600 ml-auto"
          >
            <User size={18} />
            {userName}
          </Link>

          {/* ORDERS */}
          {/* <Link
            to="/my-orders"
            className="hidden md:block font-semibold text-gray-700 hover:text-green-600"
          >
            Orders
          </Link> */}

          {/* CART */}
          {/* <Link
            to="/checkout"
            className="relative bg-green-600 text-white px-3 md:px-4 py-3 rounded-xl flex items-center gap-2 font-semibold hover:bg-green-700 ml-auto md:ml-0"
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link> */}
          <Link
  to="/checkout"
  className="hidden md:flex relative bg-green-600 text-white px-4 py-3 rounded-xl items-center gap-2 font-semibold hover:bg-green-700 ml-auto"
>
  <ShoppingCart size={20} />
  <span>Cart</span>

  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-5 h-5 rounded-full flex items-center justify-center">
      {totalItems}
    </span>
  )}
</Link>
        </div>

        {/* MOBILE LOCATION */}
        {/* <div
          onClick={getUserLocation}
          className="md:hidden mt-3 flex items-center gap-2 text-sm text-gray-700 bg-green-50 px-3 py-2 rounded-xl"
        >
          <MapPin size={17} className="text-green-600" />
          <div> */}
            {/* <p className="font-bold text-xs">
              Delivery in 10 minutes
            </p>
          <p className="text-[11px] text-gray-500 truncate max-w-[220px]">
  {location}
</p> */}

            {/* {distance && (
              <p className="text-[11px] text-green-600 font-bold">
                📍 {distance} km away
              </p>
            )}

            {distance && (
              <p className="text-[11px] text-orange-600 font-bold">
                🚚 ₹{deliveryCharge} delivery
              </p>
            )} */}
          {/* </div>
        </div> */}

        {/* MOBILE SEARCH */}
        {/* <div className="md:hidden mt-3 relative">
          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />
        <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search products..."
  className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
/>
        </div> */}
      </div>
    </header>
  );
}
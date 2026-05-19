// Full Header.jsx
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  MapPin,
  User,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import logo from "/fav.png";



export default function Header() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const [location, setLocation] = useState("Allow Location");

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

          const area =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state_district ||
            "Your Area";

          const state = data.address.state || "";
          const fullAddress = `${area}, ${state}`;

          setLocation(fullAddress);
          localStorage.setItem("deliveryAddress", fullAddress);
        } catch {
          setLocation("Location found");
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

        {/* Top Header */}
        <div className="flex items-center gap-3">

          {/* Mobile Profile */}
          <Link
            to="/profile"
            className="md:hidden order-last w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white flex items-center justify-center shadow-md"
          >
            <User size={19} />
          </Link>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="KKCart Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />

            <div className="leading-tight ">
              <h1 className="text-xl md:text-2xl font-extrabold text-orange-500">
                KK<span className="text-green-600">Cart</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium -mt-1">
                Fast Delivery
              </p>
            </div>
          </Link>

          {/* Desktop Location */}
          <div
            onClick={getUserLocation}
            className="hidden lg:flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
          >
            <MapPin size={18} className="text-green-600" />
            <div>
              <p className="font-bold">Delivery in 10 minutes</p>
              <p className="text-xs text-gray-500">{location}</p>
            </div>
          </div>

          {/* Search Desktop */}
          <div className="hidden md:block flex-1 relative">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Desktop Profile */}
          <Link
            to="/profile"
            className="hidden md:flex items-center gap-2 font-semibold text-gray-700 hover:text-green-600 ml-auto"
          >
            <User size={18} />
            {userName}
          </Link>

          {/* Orders */}
          <Link
            to="/my-orders"
            className="hidden md:block font-semibold text-gray-700 hover:text-green-600"
          >
            Orders
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
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

        {/* Mobile Location */}
        <div
          onClick={getUserLocation}
          className="md:hidden mt-3 flex items-center gap-2 text-sm text-gray-700 bg-green-50 px-3 py-2 rounded-xl"
        >
          <MapPin size={17} className="text-green-600" />
          <div>
            <p className="font-bold text-xs">Delivery in 10 minutes</p>
            <p className="text-[11px] text-gray-500">{location}</p>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3 relative">
          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </header>
  );
}
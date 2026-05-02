import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Users,
  IndianRupee,
  Truck,
  ShoppingBag,
  Settings,
  LogOut,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import API from "../api";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    liveOrders: 0,
    deliveredOrders: 0,
  });

  const userName = localStorage.getItem("userName") || "Admin";
  const userEmail = localStorage.getItem("userEmail") || "";
  const userPhoto = localStorage.getItem("userPhoto") || "";

  useEffect(() => {
    API.get("/admin/dashboard")
      .then((res) => setStats(res.data))
      .catch((err) => console.log("Dashboard error:", err));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-5 py-6 rounded-b-[35px] shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {userPhoto ? (
              <img
                src={userPhoto}
                alt="Admin"
                className="w-14 h-14 rounded-full border-4 border-white object-cover"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-white text-orange-500 flex items-center justify-center text-2xl font-bold border-4 border-white">
                {userName.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <h1 className="text-2xl font-extrabold">Welcome, {userName}</h1>
              <p className="text-white/90 text-sm">{userEmail}</p>
            </div>
          </div>

          <ShieldCheck size={38} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Stat icon={<Package />} title="Products" value={stats.totalProducts} />
          <Stat icon={<ClipboardList />} title="Orders" value={stats.totalOrders} />
          <Stat icon={<Users />} title="Customers" value={stats.totalUsers} />
          <Stat icon={<IndianRupee />} title="Revenue" value={`₹${stats.totalRevenue}`} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
          <Stat icon={<Truck />} title="Live Orders" value={stats.liveOrders} />
          <Stat icon={<Truck />} title="Delivered Orders" value={stats.deliveredOrders} />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <CardLink
            to="/admin/products"
            icon={<ShoppingBag size={36} />}
            title="Manage Products"
            desc="Add, edit, delete all grocery items."
          />

          <CardLink
            to="/admin/orders"
            icon={<Truck size={36} />}
            title="Manage Orders"
            desc="Track and update delivery status."
          />
        </div>

        <div className="bg-white rounded-3xl shadow overflow-hidden">
          <MenuItem icon={<LayoutDashboard />} text="Dashboard Overview" to="/admin" />
          <MenuItem icon={<Package />} text="Inventory Control" to="/admin/products" />
          <MenuItem icon={<ClipboardList />} text="Recent Orders" to="/admin/orders" />
          <MenuItem icon={<Users />} text="Customer Management" to="/admin" />
          <MenuItem icon={<Settings />} text="Settings" to="/admin" />

          <div className="p-5">
            <button
              onClick={logout}
              className="w-full bg-red-500 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, title, value }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow">
      <div className="text-orange-500 mb-3">{icon}</div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-xl font-extrabold">{value}</h2>
    </div>
  );
}

function CardLink({ to, icon, title, desc }) {
  return (
    <Link
      to={to}
      className="bg-white rounded-3xl p-6 shadow hover:shadow-xl transition"
    >
      <div className="text-orange-500 mb-4">{icon}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500 mt-2">{desc}</p>
    </Link>
  );
}

function MenuItem({ icon, text, to }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-between px-5 py-5 border-b last:border-none hover:bg-orange-50"
    >
      <div className="flex items-center gap-4 text-gray-700">
        {icon}
        <span className="font-medium">{text}</span>
      </div>
      <ChevronRight size={20} className="text-gray-400" />
    </Link>
  );
}
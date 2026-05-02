import {
    ArrowLeft,
    MoreVertical,
    MapPin,
    Wallet,
    RefreshCcw,
    CreditCard,
    ChevronRight,
    Heart,
    Bookmark,
    Gift,
    GraduationCap,
    Briefcase,
    FileText,
    HelpCircle,
    Phone,
    LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();

    const savedUser = localStorage.getItem("user");
    const user = savedUser ? JSON.parse(savedUser) : {};

    const userName =
        user.name || localStorage.getItem("userName") || "Guest User";

    const userEmail =
        user.email || localStorage.getItem("userEmail") || "Please login to continue";

    const userPhoto =
        user.photo || localStorage.getItem("userPhoto") || "";

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPhoto");

        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 pb-10">
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-b-[35px] px-5 pt-6 pb-8 relative">
                <div className="flex items-center justify-between mb-8">
                    <Link to="/">
                        <ArrowLeft size={28} />
                    </Link>

                    <div className="flex items-center gap-3">
                        <button className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                            Help
                        </button>
                        <MoreVertical size={24} />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {userPhoto ? (
                        <img
                            src={userPhoto}
                            alt={userName}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white"
                        />
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-white text-orange-500 flex items-center justify-center text-3xl font-bold border-4 border-white">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                    )}

                    <div>
                        <h1 className="text-3xl font-bold">{userName}</h1>
                        <p className="text-white/90 mt-2">{userEmail}</p>
                    </div>
                </div>
            </div>

            <div className="px-4 -mt-3">
                <div className="bg-white rounded-3xl border p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-4xl font-bold text-orange-500">one</span>
                        <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                            ACTIVE
                        </span>
                    </div>

                    <p className="text-xl font-bold text-gray-800 leading-snug">
                        Unlimited free deliveries, extra discounts & more!
                    </p>

                    <p className="text-gray-500 mt-2">Explore all KKCart One benefits</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                    <Quick icon={<MapPin size={22} />} text="Saved Address" />
                    <Quick icon={<Wallet size={22} />} text="Payment Modes" />
                    <Quick icon={<RefreshCcw size={22} />} text="My Refunds" />
                    <Quick icon={<CreditCard size={22} />} text="KKCart Money" />
                </div>

                <div className="bg-white rounded-3xl mt-5 overflow-hidden border">
                    <Item icon={<Gift size={21} />} text="My Vouchers" />
                    <Item icon={<FileText size={21} />} text="Account Statement" />
                    <Item icon={<Briefcase size={21} />} text="Corporate Rewards" />
                    <Item icon={<GraduationCap size={21} />} text="Student Rewards" />
                    <Item icon={<Bookmark size={21} />} text="My KKCart Wishlist" />
                    <Item icon={<Heart size={21} />} text="Favourites" />
                    <Item icon={<FileText size={21} />} text="Terms & Conditions" />
                    <Item icon={<Phone size={21} />} text="Contact Us" />
                    <Item icon={<HelpCircle size={21} />} text="FAQs" />

                    <div className="p-5">
                        <button
                            onClick={logout}
                            className="w-full bg-red-500 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
                        >
                            <LogOut size={20} />
                            Logout
                        </button>

                        {localStorage.getItem("isAdmin") === "true" && (
                            <button
                                onClick={() => navigate("/admin")}
                                className="w-full mt-3 bg-black text-white py-3 rounded-2xl font-bold"
                            >
                                Admin Dashboard
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Quick({ icon, text }) {
    return (
        <div className="bg-white rounded-3xl border p-4 h-28 flex flex-col justify-between">
            <div>{icon}</div>
            <p className="font-semibold text-gray-700 leading-tight">{text}</p>
        </div>
    );
}

function Item({ icon, text }) {
    return (
        <div className="flex items-center justify-between px-5 py-5 border-b last:border-none">
            <div className="flex items-center gap-4 text-gray-700">
                {icon}
                <span className="font-medium">{text}</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
        </div>
    );
}
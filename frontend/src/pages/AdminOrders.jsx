import { useEffect, useState } from "react";
import API from "../api";
import toast from "react-hot-toast";
import {
  PackageCheck,
  MapPin,
  CreditCard,
  Truck,
  Phone,
  User,
} from "lucide-react";

export default function AdminOrders() {
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
      <h1 className="text-3xl font-black mb-6 text-orange-500">
        Admin Orders
      </h1>

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
                className="border p-3 rounded-2xl font-bold outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Packed">Packed</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
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

              {order.transactionId && (
                <Info
                  icon={<PackageCheck size={18} />}
                  label="Transaction ID"
                  value={order.transactionId}
                />
              )}
              {
  order.paymentScreenshot && (
    <img
      src={
        order.paymentScreenshot
      }
      alt="Payment Proof"
      className="w-32 rounded-xl border mt-2"
    />
  )
}

              <Info
                icon={<Truck size={18} />}
                label="Total Amount"
                value={`₹${order.totalAmount}`}
              />
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
  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      <div className="flex items-center gap-2 text-orange-500 mb-1">
        {icon}
        <span className="text-xs font-black uppercase">{label}</span>
      </div>
      <p className="font-semibold text-gray-700">{value || "N/A"}</p>
    </div>
  );
}
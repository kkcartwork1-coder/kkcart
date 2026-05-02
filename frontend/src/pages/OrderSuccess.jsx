import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Bike, PackageCheck } from "lucide-react";

export default function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/my-orders");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center px-4 overflow-hidden">
      <div className="bg-white rounded-[36px] p-8 max-w-md w-full text-center shadow-2xl relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 w-24 h-24 rounded-full flex items-center justify-center shadow-xl animate-bounce">
          <CheckCircle2 size={56} className="text-white" />
        </div>

        <div className="pt-14">
          <h1 className="text-3xl font-black text-gray-900">
            Order Confirmed!
          </h1>

          <p className="text-gray-500 mt-3">
            Your groceries are being packed.
          </p>

          <div className="mt-8 bg-orange-50 rounded-3xl p-5">
            <div className="flex items-center justify-center gap-4">
              <PackageCheck className="text-orange-500 animate-pulse" size={42} />
              <div className="w-20 h-1 bg-orange-300 rounded-full"></div>
              <Bike className="text-orange-500 animate-bounce" size={46} />
            </div>

            <p className="font-black text-orange-600 mt-5">
              Delivery partner will arrive soon
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Redirecting to My Orders...
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500 animate-bounce"></span>
            <span className="w-3 h-3 rounded-full bg-orange-500 animate-bounce delay-150"></span>
            <span className="w-3 h-3 rounded-full bg-orange-500 animate-bounce delay-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
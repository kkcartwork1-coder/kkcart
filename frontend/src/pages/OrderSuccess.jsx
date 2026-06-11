// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { CheckCircle2, Bike, PackageCheck } from "lucide-react";

// export default function OrderSuccess() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/my-orders");
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-orange-500 flex items-center justify-center px-4 overflow-hidden">
//       <div className="bg-white rounded-[36px] p-8 max-w-md w-full text-center shadow-2xl relative">
//         <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 w-24 h-24 rounded-full flex items-center justify-center shadow-xl animate-bounce">
//           <CheckCircle2 size={56} className="text-white" />
//         </div>

//         <div className="pt-14">
//           <h1 className="text-3xl font-black text-gray-900">
//             Order Confirmed!
//           </h1>

//           <p className="text-gray-500 mt-3">
//             Your groceries are being packed.
//           </p>

//           <div className="mt-8 bg-orange-50 rounded-3xl p-5">
//             <div className="flex items-center justify-center gap-4">
//               <PackageCheck className="text-orange-500 animate-pulse" size={42} />
//               <div className="w-20 h-1 bg-orange-300 rounded-full"></div>
//               <Bike className="text-orange-500 animate-bounce" size={46} />
//             </div>

//             <p className="font-black text-orange-600 mt-5">
//               Delivery partner will arrive soon
//             </p>

//             <p className="text-sm text-gray-500 mt-1">
//               Redirecting to My Orders...
//             </p>
//           </div>

//           <div className="mt-6 flex justify-center gap-2">
//             <span className="w-3 h-3 rounded-full bg-orange-500 animate-bounce"></span>
//             <span className="w-3 h-3 rounded-full bg-orange-500 animate-bounce delay-150"></span>
//             <span className="w-3 h-3 rounded-full bg-orange-500 animate-bounce delay-300"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Bike, ChefHat, MapPin, Sparkles } from "lucide-react";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Simulating progress steps like Swiggy's real-time updates
    const stepTimer = setTimeout(() => setCurrentStep(2), 2000);
    
    // Auto-redirecting to my-orders overview tab after 6 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/my-orders");
    }, 6000);

    return () => {
      clearTimeout(stepTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start md:items-center font-sans antialiased">
      {/* Mobile-first viewport container container */}
      <div className="w-full max-w-md bg-white min-h-screen md:min-h-[850px] md:my-6 md:rounded-[40px] md:shadow-2xl overflow-hidden flex flex-col justify-between border border-gray-100 relative">
        
        {/* Top Celebration / Banner Section */}
        <div className="bg-gradient-to-b from-orange-50 to-white px-6 pt-10 pb-6 text-center border-b border-gray-100">
          <div className="inline-flex items-center justify-center bg-orange-500 w-16 h-16 rounded-full text-white shadow-lg shadow-orange-200 mb-4 animate-scale-up">
            <Check size={32} strokeWidth={3} />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight flex items-center justify-center gap-2">
            Order Confirmed <Sparkles className="text-orange-500 fill-orange-500" size={20} />
          </h1>
          <p className="text-sm text-gray-500 font-medium mt-1">
            Thank you! Your order has been received.
          </p>
        </div>

        {/* Estimated Time Slot Card */}
        <div className="px-6 py-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Estimated Delivery</p>
              <h2 className="text-3xl font-black text-gray-900 mt-0.5">25-35 mins</h2>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <Bike className="text-orange-600 animate-bounce" size={28} />
            </div>
          </div>
        </div>

        {/* Live Tracking Checklist Flow */}
        <div className="px-8 py-4 flex-grow flex flex-col justify-start">
          <p className="text-sm font-bold text-gray-900 mb-6">Track Status</p>
          
          <div className="relative pl-8 border-l-2 border-gray-100 flex flex-col gap-10">
            
            {/* Step 1: Order Placed */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0.5 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Order Confirmed</h4>
                <p className="text-xs text-gray-500 mt-0.5">Payment received successfully</p>
              </div>
            </div>

            {/* Step 2: Packing / Preparing */}
            <div className="relative">
              <div className={`absolute -left-[41px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentStep >= 2 ? 'bg-orange-500 text-white shadow-md' : 'bg-gray-200 text-gray-400'
              }`}>
                {currentStep > 2 ? <Check size={14} strokeWidth={3} /> : <ChefHat size={14} />}
              </div>
              <div>
                <h4 className={`text-sm font-bold transition-colors duration-300 ${currentStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>
                  Preparing your order
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">Items are being picked and packed cleanly</p>
              </div>
            </div>

            {/* Step 3: Out for Delivery */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0.5 bg-gray-200 text-gray-400 w-6 h-6 rounded-full flex items-center justify-center">
                <MapPin size={14} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400">Out for delivery</h4>
                <p className="text-xs text-gray-400 mt-0.5">Delivery Executive will assign shortly</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Redirection Info Area */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col items-center gap-3">
          <div className="flex justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse delay-75"></span>
            <span className="w-2 h-2 rounded-full bg-orange-300 animate-pulse delay-150"></span>
          </div>
          <button 
            onClick={() => navigate("/my-orders")}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 transition"
          >
            Redirecting to history track view window...
          </button>
        </div>

      </div>
    </div>
  );
}
// import { useEffect, useState } from "react";

// export default function SplashScreen() {
//   const [closing, setClosing] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setClosing(true);
//     }, 4200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 overflow-hidden ${closing ? "animate-exit" : "animate-enter"
//         }`}
//     >
//       {/* Glow Effect */}
//       <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>

//       {/* Main Content */}
//       <div className="relative flex flex-col items-center justify-center text-center">

//         {/* Logo */}
//         <img
//           src="/images/CART_LOGO-BG_REMOVE.png"
//           alt="KKCart"
//           className="w-72 md:w-80 h-auto object-contain drop-shadow-2xl animate-float"
//         />

//         {/* Text */}

//       </div>

//       <style>{`
//         @keyframes enter {
//           from {
//             opacity: 0;
//             transform: scale(1.08);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes exit {
//           0% {
//             opacity: 1;
//             transform: scale(1);
//             filter: blur(0px);
//           }
//           100% {
//             opacity: 0;
//             transform: scale(0.65);
//             filter: blur(8px);
//           }
//         }

//         @keyframes float {
//           0%,100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }

//         .animate-enter {
//           animation: enter 1s ease-out forwards;
//         }

//         .animate-exit {
//           animation: exit 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
//         }

//         .animate-float {
//           animation: float 2.5s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// export default function SplashScreen() {
//   const [closing, setClosing] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setClosing(true);
//     }, 3500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={`fixed inset-0 z-[99999] flex items-center justify-center ${
//         closing ? "animate-fadeOut" : "animate-fadeIn"
//       }`}
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6">
//         <img
//           src="/images/CART_LOGO-BG_REMOVE.png"
//           alt="KKCart"
//           className="w-40 md:w-52 mx-auto animate-bounce-slow"
//         />

//         <h1 className="text-white text-5xl md:text-7xl font-black mt-6">
//           KKCart
//         </h1>

//         <p className="text-orange-300 text-xl mt-3 font-semibold">
//           Everything You Need, Delivered Fast
//         </p>

//         <p className="text-gray-300 mt-2">
//           Grocery • Food • Daily Essentials
//         </p>

//         {/* Loading Line */}
//         <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto mt-10">
//           <div className="h-full bg-orange-500 animate-loading" />
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes fadeOut {
//           from {
//             opacity: 1;
//           }
//           to {
//             opacity: 0;
//           }
//         }

//         @keyframes loading {
//           from {
//             width: 0%;
//           }
//           to {
//             width: 100%;
//           }
//         }

//         @keyframes bounceSlow {
//           0%,100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease;
//         }

//         .animate-fadeOut {
//           animation: fadeOut 0.8s ease forwards;
//         }

//         .animate-loading {
//           animation: loading 3s linear forwards;
//           width: 100%;
//         }

//         .animate-bounce-slow {
//           animation: bounceSlow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden ${
        closing ? "animate-fadeOut" : "animate-fadeIn"
      }`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Orange Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Logo */}
        <img
          src="/images/CART_LOGO-BG_REMOVE.png"
          alt="KKCart"
          className="w-40 md:w-52 animate-float drop-shadow-2xl"
        />

        {/* Brand Name */}
        <h1 className="mt-6 text-6xl md:text-7xl font-black text-white tracking-wide">
          KKCart
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl md:text-2xl font-bold text-orange-300">
          One App For Everything
        </p>

        <p className="mt-3 text-gray-200 text-lg">
          Fresh Groceries • Fast Food • Cloud Kitchen
        </p>

        {/* Service Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm border border-white/20">
            🛒 Grocery
          </span>

          <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm border border-white/20">
            💼 All Essential
          </span>

          <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm border border-white/20">
            🍗 Cloud Kitchen
          </span>
        </div>

        {/* Loading Bar */}
        <div className="w-72 md:w-96 h-2 bg-white/20 rounded-full overflow-hidden mt-12">
          <div className="h-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-loading" />
        </div>

        <p className="mt-4 text-white/80 text-sm tracking-wider uppercase">
          Delivering Happiness To Your Doorstep
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        @keyframes loading {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%,100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-fadeOut {
          animation: fadeOut 0.8s ease forwards;
        }

        .animate-loading {
          width: 100%;
          animation: loading 3s linear forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
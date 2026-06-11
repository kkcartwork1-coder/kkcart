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
//       className={`fixed inset-0 z-[99999] overflow-hidden ${
//         closing ? "animate-fadeOut" : "animate-fadeIn"
//       }`}
//     >
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center scale-110"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=80')",
//         }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* Orange Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[120px]" />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
//         {/* Logo */}
//         <img
//           src="/images/CART_LOGO-BG_REMOVE.png"
//           alt="KKCart"
//           className="w-40 md:w-52 animate-float drop-shadow-2xl"
//         />

//         {/* Brand Name */}
//         <h1 className="mt-6 text-6xl md:text-7xl font-black text-white tracking-wide">
//           KKCart
//         </h1>

//         {/* Tagline */}
//         <p className="mt-4 text-xl md:text-2xl font-bold text-orange-300">
//           One App For Everything
//         </p>

//         <p className="mt-3 text-gray-200 text-lg">
//           Fresh Groceries • Fast Food • Cloud Kitchen
//         </p>

//         {/* Service Badges */}
//         <div className="flex flex-wrap justify-center gap-3 mt-8">
//           <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm border border-white/20">
//             🛒 Grocery
//           </span>

//           <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm border border-white/20">
//             💼 All Essential
//           </span>

//           <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white text-sm border border-white/20">
//             🍗 Cloud Kitchen
//           </span>
//         </div>

//         {/* Loading Bar */}
//         <div className="w-72 md:w-96 h-2 bg-white/20 rounded-full overflow-hidden mt-12">
//           <div className="h-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-loading" />
//         </div>

//         <p className="mt-4 text-white/80 text-sm tracking-wider uppercase">
//           Delivering Happiness To Your Doorstep
//         </p>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(1.05);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes fadeOut {
//           from {
//             opacity: 1;
//           }
//           to {
//             opacity: 0;
//             transform: scale(0.95);
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

//         @keyframes float {
//           0%,100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-12px);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease forwards;
//         }

//         .animate-fadeOut {
//           animation: fadeOut 0.8s ease forwards;
//         }

//         .animate-loading {
//           width: 100%;
//           animation: loading 3s linear forwards;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Sparkles, Trophy, Leaf } from "lucide-react";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // ⚡ Precision incremental progress loader sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    // ⚡ Trigger premium blur-fade out transition layer right before state unmounts
    const exitTimer = setTimeout(() => {
      setClosing(true);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[#080605] overflow-hidden select-none flex items-center justify-center font-sans antialiased ${
        closing ? "animate-luxuryExit" : "animate-luxuryEntrance"
      }`}
    >
      
      {/* 🖼️ LAYER 1: ULTRA-PREMIUM HIGH-CONTRAST RETAIL BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 opacity-45 mix-blend-luminosity transform transition-transform duration-[4000ms] ease-out animate-slowZoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      {/* 🎨 LAYER 2: CINEMATIC ADVANCED COLOR SHADING & VIGNETTE GRADIENTS */}
      {/* Matte black uniform dampening shroud */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080605]/95 via-[#080605]/80 to-[#080605]/95" />
      
      {/* Top Center Amber Premium Light Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-orange-500/20 via-amber-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      
      {/* Bottom Right Emerald Flash Drop Accent Shade */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Geometric Background Dot Grid Matrix Mesh */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />


      {/* ⚙️ LAYER 3: CORE CONTENT CONFIGURATION ARCHITECTURE */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-6 flex flex-col items-center justify-between h-[75vh]">
        
        {/* TOP BLOCK: ENTRY MICRO-TAGS */}
        {/* <div className="space-y-1.5 opacity-0 animate-slideDown flex flex-col items-center">
          <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full backdrop-blur-md shadow-2xl">
            <Sparkles size={11} className="text-amber-400 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest text-amber-400/90 whitespace-nowrap">
              The Premium Standard
            </span>
          </div>
        </div> */}

        {/* CENTER BLOCK: BRAND SYMBOL AND CORE WORDMARK */}
        <div className="flex flex-col items-center space-y-6 w-full">
          {/* Logo Container featuring Floating Physics and Soft Shaded Under-Glow */}
          <div className="relative p-5 rounded-[36px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] animate-float">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-orange-500/25 to-transparent opacity-40 blur-xl" />
            <img
              src="/images/CART_LOGO-BG_REMOVE.png"
              alt="KKCart Premium Identity Key"
              className="w-28 md:w-36 object-contain relative z-10 filter drop-shadow-[0_12px_24px_rgba(252,128,19,0.2)]"
            />
          </div>

          {/* Core App Headers Workspace */}
          <div className="text-center space-y-3 px-2">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none">
              KK<span className="bg-gradient-to-r from-orange-500 via-amber-400 to-[#10B981] bg-clip-text text-transparent">Cart</span>
            </h1>
            
            <p className="text-xs sm:text-sm font-bold text-gray-400 max-w-xs mx-auto tracking-wide leading-relaxed">
              Hyperlocal Retail Engine. Bringing Cloud Kitchen Dishes & Dark-Store Fresh Groceries.
            </p>
          </div>

          {/* Horizontal Decorative Segment Badges (Fades in dynamically) */}
          <div className="flex items-center justify-center gap-2.5 pt-1.5 opacity-0 animate-delayedFade w-full">
            <Badge icon={<Trophy size={10} />} label="Cloud Kitchen" />
            <div className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
            <Badge icon={<Leaf size={10} />} label="30-49-Min Flash Drop" />
          </div>
        </div>

        {/* BOTTOM BLOCK: THE LOGARITHMIC SYSTEM BOOT DATA RAIL */}
        <div className="w-full max-w-xs space-y-3.5 flex flex-col items-center">
          <div className="flex justify-between items-baseline w-full px-1 text-gray-500 font-black tracking-widest uppercase text-[9px]">
            <span>System Buffering Nodes</span>
            <span className="text-white font-black font-mono tracking-normal text-xs bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-md">
              {progress}%
            </span>
          </div>

          {/* Hairline Responsive Vector Mapping Tracker Bar */}
          <div className="w-full h-[4px] bg-white/[0.05] rounded-full overflow-hidden relative p-[1px]">
            <div 
              className="h-full bg-gradient-to-r from-[#FC8019] via-amber-400 to-[#10B981] rounded-full transition-all duration-200 ease-out shadow-[0_0_8px_rgba(252,128,19,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest animate-pulse text-center mt-1">
            Securing Open-Box Handover Protocol
          </p>
        </div>

      </div>

      {/* 🎨 LAYER 4: EMBEDDED SYSTEM ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes luxuryEntrance {
          from { opacity: 0; background-color: #000000; }
          to { opacity: 1; background-color: #080605; }
        }

        @keyframes luxuryExit {
          from { opacity: 1; transform: scale(1); filter: blur(0px); }
          to { opacity: 0; transform: scale(1.02); filter: blur(12px); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes delayedFade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }

        @keyframes slowZoom {
          from { transform: scale(1.1) rotate(0deg); }
          to { transform: scale(1.03) rotate(0.5deg); }
        }

        .animate-luxuryEntrance { animation: luxuryEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-luxuryExit { animation: luxuryExit 0.75s cubic-bezier(0.7, 0, 0.84, 0) forwards; }
        .animate-slideDown { animation: slideDown 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards; }
        .animate-delayedFade { animation: delayedFade 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-slowZoom { animation: slowZoom 5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.06] px-3 py-1.5 rounded-xl shadow-sm backdrop-blur-sm truncate">
      <div className="text-orange-400 shrink-0">{icon}</div>
      <span className="text-[10px] font-black text-gray-300 tracking-wide uppercase whitespace-nowrap">{label}</span>
    </div>
  );
}
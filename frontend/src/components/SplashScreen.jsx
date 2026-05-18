import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 overflow-hidden ${closing ? "animate-exit" : "animate-enter"
        }`}
    >
      {/* Glow Effect */}
      <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center text-center">

        {/* Logo */}
        <img
          src="/images/CART_LOGO-BG_REMOVE.png"
          alt="KKCart"
          className="w-72 md:w-80 h-auto object-contain drop-shadow-2xl animate-float"
        />

        {/* Text */}

      </div>

      <style>{`
        @keyframes enter {
          from {
            opacity: 0;
            transform: scale(1.08);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes exit {
          0% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: scale(0.65);
            filter: blur(8px);
          }
        }

        @keyframes float {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-enter {
          animation: enter 1s ease-out forwards;
        }

        .animate-exit {
          animation: exit 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
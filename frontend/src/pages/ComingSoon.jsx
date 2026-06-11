import { useState, useEffect } from "react";
import { Clock, ShieldCheck, Rocket, ArrowRight } from "lucide-react";

// ⚡ IMPORT YOUR ACTUAL HOME PAGE HERE
// import MainWebsiteHomePage from "./MainWebsiteHomePage"; 

export default function LaunchWrapper() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // 🎯 TARGET LAUNCH TIME: Tomorrow at 10:00 AM IST
    const LAUNCH_DATE = new Date("2026-06-12T10:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = LAUNCH_DATE - now;

      if (difference <= 0) {
        setIsLaunched(true);
        return true; // Launch time reached!
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
      return false;
    };

    // Run immediately on mount
    const launched = calculateTimeLeft();
    if (launched) return;

    // Set up real-time tick interval matrix tracking loops
    const timer = setInterval(() => {
      const launched = calculateTimeLeft();
      if (launched) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // =========================================================================
  // 💻 CONDITION 1: IF LAUNCHED, RENDER YOUR ORIGINAL WEBSITE INSTANTLY
  // =========================================================================
  if (isLaunched) {
    return (
      <div>
        {/* Replace this placeholder with your real component like <MainWebsiteHomePage /> */}
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-black text-green-600">KKCart is Now LIVE!</h1>
          <p className="text-gray-500 font-semibold mt-2">Welcome to the original homepage stream view.</p>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 📱 CONDITION 2: BEFORE LAUNCH, SHOW THE LUXURY COUNTDOWN WRAPPER
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#070504] text-white flex flex-col justify-between p-6 font-sans antialiased relative overflow-hidden select-none">
      
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-[-10%] left-[-15%] w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[450px] h-[450px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER SECTION */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between py-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center font-black text-sm">KK</div>
          <h1 className="text-base font-black tracking-tight">
            KK<span className="text-green-500">Cart</span>
          </h1>
        </div>
        <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
          System Preparing
        </span>
      </header>

      {/* CORE COUNTDOWN BOARD DISPLAY */}
      <main className="max-w-3xl mx-auto w-full text-center my-auto py-12 relative z-10 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl text-xs font-bold text-gray-300">
            <Rocket size={14} className="text-orange-400 animate-bounce" />
            Grand Launching Tomorrow at 10:00 AM
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-2xl mx-auto">
            SOMETHING BIG IS <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 bg-clip-text text-transparent">
              COOKING INSIDE
            </span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto font-medium leading-relaxed">
            We are wrapping up final adjustments on our dark store supply parameters. Fresh items and cloud meals are arriving soon!
          </p>
        </div>

        {/* TIME CELLS COUNTDOWN DISPLAY GRID */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto pt-4">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Mins" />
          <TimeBox value={timeLeft.seconds} label="Secs" highlight />
        </div>
      </main>

      {/* COMPLIANCE SECURITY TRUST BADGES FOOTER */}
      <footer className="max-w-4xl mx-auto w-full border-t border-white/5 pt-6 relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="flex gap-3 items-center justify-center sm:justify-start">
          <Clock size={16} className="text-orange-400" />
          <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">
            No delivery beyond 7 km framework active
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center sm:justify-end text-gray-500 font-semibold">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span>Open-Box Handover Verification Standard Enforced</span>
        </div>
      </footer>
    </div>
  );
}

// Sub-Component Card rendering individual time units
function TimeBox({ value, label, highlight }) {
  return (
    <div className={`rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center border transition-all duration-300 ${
      highlight 
        ? "bg-gradient-to-b from-orange-500/10 to-transparent border-orange-500/30 shadow-[0_0_20px_rgba(252,128,25,0.05)]" 
        : "bg-white/[0.02] border-white/5"
    }`}>
      <span className={`text-2xl sm:text-4xl font-black tracking-tight tabular-nums ${
        highlight ? "text-orange-400" : "text-white"
      }`}>
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] sm:text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}
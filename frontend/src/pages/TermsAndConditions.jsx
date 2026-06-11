import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldAlert, CheckCircle2, FileText, Scale, HelpCircle } from "lucide-react";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans antialiased pb-16 select-none">
      
      {/* 1. TOP STICKY NAVIGATION HEADER */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm px-4 sm:px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="p-2 bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-[#FC8019] rounded-xl border border-gray-100 transition-all active:scale-95"
            aria-label="Back"
          >
            <ArrowLeft size={18} className="stroke-[2.5]" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
              Legal Usage Guidelines & Operations Framework
            </p>
          </div>
        </div>
      </div>

      {/* 2. MAIN DOCUMENT HOUSING WRAPPER */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        
        {/* ========================================================================= */}
        {/* 🔥 CRITICAL HIGH-ALERT BANNER: NO REFUND & OPEN-BOX DELIVERY             */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-orange-200 rounded-[28px] p-5 sm:p-6 shadow-sm mb-6 space-y-4 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 text-orange-500/5 pointer-events-none">
            <ShieldAlert size={140} className="stroke-[2]" />
          </div>

          <div className="flex items-center gap-3 text-orange-700">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-200">
              <ShieldAlert size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h2 className="font-black text-base sm:text-lg tracking-tight text-gray-900">
                Critical Fulfilment Notice
              </h2>
              <p className="text-xs text-orange-700 font-bold uppercase tracking-wide">
                Please verify items instantly upon handover
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 relative z-10">
            {/* POLICY NODE 1: STRICT NO REFUNDS */}
            <div className="bg-white border border-orange-100 p-4 rounded-2xl shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-2 py-1 rounded-md border border-red-100/50">
                Strict Policy
              </span>
              <h3 className="font-black text-sm text-gray-900 mt-2.5">
                Absolute No-Refund Policy
              </h3>
              <p className="text-xs text-gray-500 font-semibold mt-1 leading-relaxed">
                KKCart deals in fresh groceries and cooked cloud-kitchen items. Once an order is processed, dispatched, or confirmed via payment proof, **no monetary refunds or cancellations are permitted under any circumstances**.
              </p>
            </div>

            {/* POLICY NODE 2: MANDATORY OPEN-BOX */}
            <div className="bg-white border border-orange-100 p-4 rounded-2xl shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100/50">
                Mandatory Step
              </span>
              <h3 className="font-black text-sm text-gray-900 mt-2.5">
                Open-Box Delivery Verification
              </h3>
              <p className="text-xs text-gray-500 font-semibold mt-1 leading-relaxed">
                All order drop-offs operate strictly under **Open-Box Verification**. You must open the package in front of our delivery executive to verify accurate quantity and item condition. **Claims regarding missing items or visible damage will not be entertained after the rider leaves.**
              </p>
            </div>
          </div>
        </div>

        {/* STANDARD LEGAL TERMS CONTINUATION */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 sm:p-8 space-y-6">
          
          <Section 
            icon={<Scale size={18} className="text-[#FC8019]" />}
            title="1. Agreement of Service Terms"
            content="By downloading, accessing, or placing a grocery or food request order on the KKCart platform, you explicitly agree to register into our legally structural compliance guidelines. If you do not agree with any structural clause written inside this metadata sheet, please stop using our digital store routes immediately."
          />

          <Section 
            icon={<FileText size={18} className="text-blue-500" />}
            title="2. Digital Payment Proof Verifications"
            content="For all transactions initialized via our online UPI modules, users are required to supply an accurate 12-digit transaction index ID and map a clean screenshot upload matching the banking confirmation ledger. Orders will remain held under 'Pending Verification' states until our merchant ledger updates securely."
          />

          <Section 
            icon={<CheckCircle2 size={18} className="text-emerald-500" />}
            title="3. Dynamic Hyperlocal Delivery Radius Bounds"
            content="KKCart maintains rapid flash dark-store shipping parameters optimized for operations sitting inside a maximum radius threshold limit of 7 kilometers. If geographic reverse geocoding metrics exceed these coordinates, the submission terminal blocks automated processing loops automatically to preserve meal freshness."
          />

          <Section 
            icon={<HelpCircle size={18} className="text-purple-500" />}
            title="4. User Registration Account Security"
            content="Users are strictly responsible for maintaining containerized locking guards over their local storage authentication states and credentials. KKCart holds absolute operational rights to flag, limit, or safely terminate pipeline transactions matching suspicious bulk coupon exploits or repeating transaction forgery patterns."
          />

        </div>

        {/* BOTTOM METADATA LOG STAMP */}
        <div className="text-center mt-8 space-y-1">
          <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest">
            Document Version: 1.0.4 • Active Governance Enforced
          </p>
          <p className="text-gray-400 font-semibold text-[9px]">
            Last Systematic Update: June 2026
          </p>
        </div>

      </div>
    </div>
  );
}

// Sub-Component Card Wrapper for standard terms
function Section({ icon, title, content }) {
  return (
    <div className="flex gap-4 items-start border-b border-gray-50 pb-5 last:border-b-0 last:pb-0">
      <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="font-extrabold text-sm sm:text-base text-gray-900 tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}
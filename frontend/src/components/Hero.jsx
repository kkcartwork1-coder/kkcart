export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 rounded-[28px] bg-gradient-to-r from-orange-500 to-yellow-400 p-6 md:p-10 text-white relative overflow-hidden shadow">
          <div className="relative z-10 max-w-xl">
            <p className="bg-white/25 inline-block px-4 py-1 rounded-full text-sm font-bold mb-4">
              KKCart Instamart Style
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Groceries delivered in minutes
            </h1>

            <p className="mt-4 text-white/95">
              Fresh fruits, dairy, snacks, drinks and daily essentials.
            </p>

            <button className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-xl font-extrabold">
              Shop Now
            </button>
          </div>

          <div className="absolute right-4 bottom-2 text-8xl md:text-[150px] opacity-25">
            🛵
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <Offer title="Flat ₹50 OFF" desc="On first order" emoji="🎁" />
          <Offer title="10 Min Delivery" desc="Fresh & fast" emoji="⚡" />
        </div>
      </div>
    </section>
  );
}

function Offer({ title, desc, emoji }) {
  return (
    <div className="bg-white rounded-[24px] p-5 shadow border flex items-center justify-between">
      <div>
        <h3 className="font-black text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
      <div className="text-5xl">{emoji}</div>
    </div>
  );
}
import { ShoppingBag, Clock3,  MapPin, Truck, ShieldCheck, Sparkles } from "lucide-react";

export default function OpeningSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fed7aa,transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-bold">
              <Clock3 size={18} />
              Opening Soon
            </div>

            <div className="mt-8 flex justify-center">
              <div className="w-28 h-28 rounded-3xl bg-orange-500 text-white flex items-center justify-center shadow-xl animate-bounce">
                <ShoppingBag size={50} />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mt-8 text-gray-900">
              KKCart
            </h1>

            <p className="text-2xl md:text-3xl font-bold mt-4 text-orange-500">
              Fast Grocery & Food Delivery
            </p>

            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
              We are preparing something amazing for Kania, Bangurigaon and nearby areas.
              Fresh groceries, delicious food, fruits, vegetables and daily essentials delivered quickly to your doorstep.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-lg transition">
                Notify Me
              </button> */}

              <a
                href="https://instagram.com/kkcart.store"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-2 hover:bg-orange-50 transition"
              >
                <span>📷</span>
                Follow Us
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* Service Area */}
      <section className="max-w-6xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-3xl p-8 shadow-sm border">

          <div className="flex items-center gap-3 justify-center">
            <MapPin className="text-orange-500" />
            <h2 className="font-black text-2xl">
              Serving Soon
            </h2>
          </div>

          <p className="text-center mt-4 text-gray-600 text-lg">
            Kania • Bangurigaon • Nearby Areas
          </p>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-center text-4xl font-black mb-12">
          Why Choose KKCart?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 border shadow-sm">
            <Truck className="text-orange-500 mb-4" size={40} />
            <h3 className="font-black text-xl">
              Fast Delivery
            </h3>
            <p className="text-gray-600 mt-3">
              Get groceries and food delivered quickly from nearby stores.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border shadow-sm">
            <ShieldCheck className="text-green-600 mb-4" size={40} />
            <h3 className="font-black text-xl">
              Quality Products
            </h3>
            <p className="text-gray-600 mt-3">
              Fresh vegetables, fruits and daily essentials at affordable prices.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border shadow-sm">
            <Sparkles className="text-purple-500 mb-4" size={40} />
            <h3 className="font-black text-xl">
              Local Convenience
            </h3>
            <p className="text-gray-600 mt-3">
              Designed specifically for local customers and nearby communities.
            </p>
          </div>

        </div>

      </section>

      {/* Launch Message */}
      <section className="max-w-4xl mx-auto px-6 pb-16">

        <div className="bg-orange-500 rounded-3xl p-10 text-center text-white shadow-xl">

          <h2 className="text-4xl font-black">
            🚀 Launching Very Soon
          </h2>

          <p className="mt-5 text-lg text-orange-100">
            We're working behind the scenes to bring you the best grocery and food delivery experience.
            Thank you for your patience and support.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="font-black text-xl">
            KKCart
          </h3>

          <p className="text-gray-500 mt-2">
            Grocery • Food • Daily Essentials
          </p>

          <p className="text-orange-500 font-bold mt-4">
            @kkcart.store
          </p>

        </div>
      </footer>

    </div>
  );
}
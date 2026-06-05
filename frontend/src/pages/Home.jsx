// import { useState } from "react";
// import Hero from "../components/Hero";
// import CategoryCard from "../components/CategoryCard";
// import ProductCard from "../components/ProductCard";
// import Header from "../components/Header";
// // import Footer from "../components/Footer";

// export default function Home() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   return (
//     <main className="min-h-screen bg-[#f7f7f7]">
//       <Header />
//       <Hero />
//      {/* <Footer /> */}
//       {/* <CategoryCard
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       /> */}

//       {/* <ProductCard selectedCategory={selectedCategory} /> */}
//     </main>
//   );
// }


import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
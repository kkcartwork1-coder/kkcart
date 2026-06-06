// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const exist = cart.find((item) => item._id === product._id);

//     if (exist) {
//       setCart(
//         cart.map((item) =>
//           item._id === product._id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   const increaseQty = (id) => {
//     setCart(
//       cart.map((item) =>
//         item._id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCart(
//       cart
//         .map((item) =>
//           item._id === id ? { ...item, qty: item.qty - 1 } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item._id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         increaseQty,
//         decreaseQty,
//         removeFromCart,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item._id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
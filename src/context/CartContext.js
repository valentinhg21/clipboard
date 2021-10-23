import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cart];
      updateQty.map((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
        }
        return setCart(updateQty);
      });
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const isInCart = (id) => cart.find((element) => element.item.id === id);
  // Clear products
  const clear = () => setCart([]);
  // RemoveItem
  const removeItem = (id) => {
    const cartFilter = cart.filter((element) => element.item.id !== id);
    setCart(cartFilter);
  };
  // Price for quantity
  const iconCart = () => {
    return cart.reduce((acum, valor) => acum + valor.quantity, 0);
  };

  //SubTotalPrice
  let totalPrice = 0;
  let subTotalPrice = 0;
  for (let index = 0; index < cart.length; index++) {
    const productosTotales = cart[index].item.price * cart[index].quantity;
    subTotalPrice += productosTotales;
    totalPrice = subTotalPrice * 0.27 + subTotalPrice;
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, iconCart, subTotalPrice , totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

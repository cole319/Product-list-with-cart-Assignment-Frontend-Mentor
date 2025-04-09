"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CartItemType } from "@/app/types/CartItemType";

type CartContextType = {
  cart: CartItemType[];
  addToCart: (item: Omit<CartItemType, "quantity">) => void;
  removeFromCart: (item: Omit<CartItemType, "quantity">) => void;
  removeOrder: (item: Omit<CartItemType, "quantity">) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse stored cart", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItemType, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  function removeFromCart(item: Omit<CartItemType, "quantity">) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (!existingItem) return prevCart;

      if (existingItem.quantity <= 1) {
        return prevCart.filter((i) => i.id !== item.id);
      }

      return prevCart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  }

  function removeOrder(item: Omit<CartItemType, "quantity">) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (!existingItem) return prevCart;
      return prevCart.filter((i) => i.id !== item.id);
    });
  }

  function clearCart() {
    setCart(() => []);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeOrder, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

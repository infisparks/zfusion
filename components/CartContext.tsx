"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { featuredProducts } from "@/app/data";

export type CartItem = {
  id: string;
  name: string;
  desc: string;
  quantity: number;
  image: string;
};

type CartContextValue = {
  items: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (payload: { name: string; desc: string }) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const getImageForProduct = (name: string) => {
  const inFeatured = featuredProducts.some((p) => p.name === name);

  if (inFeatured) {
    const slug = name.toLowerCase().replace(/ /g, "-");
    return `/products/${slug}.png`;
  }

  // Fallback image (UV Wand) when a dedicated product image does not exist
  return "/products/uv-wand.png";
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addItem: ({ name, desc }) => {
        setItems((prev) => {
          const existing = prev.find((item) => item.name === name);
          if (existing) {
            return prev.map((item) =>
              item.id === existing.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }

          const image = getImageForProduct(name);

          return [
            ...prev,
            {
              id: name,
              name,
              desc,
              quantity: 1,
              image,
            },
          ];
        });
      },
      increment: (id: string) => {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      },
      decrement: (id: string) => {
        setItems((prev) =>
          prev
            .map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
            )
            .filter((item) => item.quantity > 0)
        );
      },
      remove: (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
      },
      clear: () => {
        setItems([]);
      },
    }),
    [items, isCartOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}


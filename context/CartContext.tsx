"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItemSpecs {
  size?: string;
  material?: string;
  thickness?: string;
  finishing?: string;
  printing?: string;
  lamination?: string;
  orientation?: string;
  comments?: string;
}

export interface CartItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
  specs: CartItemSpecs;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  isCartOpen: boolean;
  addToCart: (item: Omit<CartItem, "id">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "sbf_print_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Failed to load cart from localStorage", e);
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
      } catch (e) {
        console.warn("Failed to persist cart to localStorage", e);
      }
    }
  }, [cart, isHydrated]);

  const addToCart = (item: Omit<CartItem, "id">) => {
    const newItem: CartItem = {
      ...item,
      id: `${item.slug}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    };
    setCart((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newTotal = parseFloat((item.unitPrice * quantity).toFixed(2));
          return { ...item, quantity, totalPrice: newTotal };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cartCount = cart.reduce((sum, item) => sum + 1, 0);
  const subtotal = parseFloat(
    cart.reduce((sum, item) => sum + (item.totalPrice || item.unitPrice * item.quantity), 0).toFixed(2)
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

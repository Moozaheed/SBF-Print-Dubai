"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  MessageSquare,
  Mail,
  ArrowRight,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState("");

  if (!isCartOpen) return null;

  const buildWhatsAppCartMessage = () => {
    let itemsText = "";
    cart.forEach((item, index) => {
      itemsText += `\n*Item ${index + 1}: ${item.title}*\n`;
      itemsText += `- Quantity: ${item.quantity} units\n`;
      itemsText += `- Item Total: AED ${item.totalPrice.toFixed(2)}\n`;
      if (item.specs.size) itemsText += `- Size: ${item.specs.size}\n`;
      if (item.specs.material) itemsText += `- Material: ${item.specs.material}\n`;
      if (item.specs.finishing && item.specs.finishing !== "None") itemsText += `- Finishing: ${item.specs.finishing}\n`;
      if (item.specs.lamination && item.specs.lamination !== "None") itemsText += `- Lamination: ${item.specs.lamination}\n`;
      if (item.specs.printing) itemsText += `- Print: ${item.specs.printing}\n`;
      if (item.specs.comments) itemsText += `- Custom Note: ${item.specs.comments}\n`;
    });

    const lines = [
      "*OFFICIAL ORDER CHECKOUT — SBF PRINT DUBAI*",
      "----------------------------------------",
      `*Client Name:* ${customerName || "Not provided"}`,
      `*Client Phone / WhatsApp:* ${customerPhone || "Not provided"}`,
      `*Delivery Notes / Address:* ${deliveryNotes || "Downtown / Dubai UAE"}`,
      "----------------------------------------",
      "*ORDER SUMMARY:*",
      itemsText,
      "----------------------------------------",
      `*Total Items:* ${cart.length}`,
      `*Grand Total (incl. 5% VAT):* AED ${subtotal.toFixed(2)}`,
      "----------------------------------------",
      "Please confirm artwork submission, production schedule & invoice.",
    ];

    return lines.join("\n");
  };

  const handleWhatsAppCheckout = () => {
    const message = encodeURIComponent(buildWhatsAppCartMessage());
    window.open(`https://wa.me/971568167269?text=${message}`, "_blank");
  };

  const handleEmailCheckout = () => {
    const subject = encodeURIComponent(`New Printing Order — SBF Print (${customerName || "Website Client"})`);
    const body = encodeURIComponent(buildWhatsAppCartMessage().replace(/\*/g, ""));
    window.open(`mailto:sbfprintdesign@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      {/* Slide-over Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col justify-between">
          
          {/* DRAWER HEADER */}
          <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#C68FE6] flex items-center justify-center">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-zinc-900">Your Shopping Cart</h2>
                <p className="text-xs text-zinc-500 font-medium">
                  {cart.length} {cart.length === 1 ? "item" : "items"} configured
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-semibold text-zinc-400 hover:text-red-500 transition-colors mr-2 cursor-pointer"
                >
                  Clear All
                </button>
              )}
              <button
                type="button"
                onClick={closeCart}
                className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* DRAWER BODY (ITEMS LIST) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-zinc-100">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-50 text-[#C68FE6] flex items-center justify-center mx-auto">
                  <ShoppingCart className="w-8 h-8 opacity-60" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-900">Your Cart is Empty</h3>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                    Browse our catalog, configure your specifications, and click Add to Cart to begin your order.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/all-products"
                    onClick={closeCart}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#C68FE6] text-white text-xs font-bold shadow-sm hover:bg-[#b078d6] transition-all"
                  >
                    <span>Browse All Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 space-y-3">
                  <div className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 rounded-xl bg-zinc-50 border border-zinc-200 p-1 flex-shrink-0 overflow-hidden flex items-center justify-center">
                      <Image
                        src={item.image || "/logo.png"}
                        alt={item.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Title & Specs */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/services/${item.slug}`}
                          onClick={closeCart}
                          className="text-xs font-bold text-zinc-900 hover:text-[#C68FE6] transition-colors line-clamp-1"
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors p-0.5 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Specs pills */}
                      <div className="flex flex-wrap gap-1 text-[10px] text-zinc-600">
                        {item.specs.size && (
                          <span className="px-1.5 py-0.5 bg-zinc-100 rounded text-zinc-700 font-medium">
                            {item.specs.size}
                          </span>
                        )}
                        {item.specs.material && (
                          <span className="px-1.5 py-0.5 bg-zinc-100 rounded text-zinc-700 font-medium truncate max-w-[140px]">
                            {item.specs.material}
                          </span>
                        )}
                        {item.specs.finishing && item.specs.finishing !== "None" && (
                          <span className="px-1.5 py-0.5 bg-purple-50 text-[#C68FE6] font-bold rounded">
                            {item.specs.finishing}
                          </span>
                        )}
                      </div>

                      {/* Pricing & Quantity Controls */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-zinc-200 rounded-lg bg-white overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, Math.max(10, item.quantity - 10))}
                            className="p-1 text-zinc-500 hover:bg-zinc-100 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-zinc-800 min-w-[36px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 10)}
                            className="p-1 text-zinc-500 hover:bg-zinc-100 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-xs font-black text-[#C68FE6]">
                            AED {item.totalPrice.toFixed(2)}
                          </div>
                          <div className="text-[10px] text-zinc-400">
                            AED {(item.totalPrice / item.quantity).toFixed(2)} / unit
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* DRAWER FOOTER & CHECKOUT */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-zinc-200 bg-zinc-50 space-y-4">
              
              {/* Optional Contact Inputs for WhatsApp message personalization */}
              <div className="space-y-2">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your Name (Optional)"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                />
                <input
                  type="text"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Phone / WhatsApp Number (Optional)"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#C68FE6]"
                />
              </div>

              {/* Subtotal & VAT Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-600 font-medium">
                  <span>Subtotal:</span>
                  <span>AED {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-500 text-[11px]">
                  <span>VAT (5% Included):</span>
                  <span>AED {(subtotal * (0.05 / 1.05)).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-black text-zinc-900 pt-1 border-t border-zinc-200">
                  <span>Grand Total:</span>
                  <span className="text-[#C68FE6]">AED {subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Checkout on WhatsApp (+971 56 816 7269)</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailCheckout}
                  className="w-full py-2.5 px-4 rounded-xl border border-zinc-300 hover:bg-white text-zinc-700 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C68FE6]" />
                  <span>Email Order to sbfprintdesign@gmail.com</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-500 font-semibold pt-1 border-t border-zinc-200/60 text-center">
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C68FE6]" />
                  <span>Free Artwork Proof</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#C68FE6]" />
                  <span>Same-Day UAE Delivery</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

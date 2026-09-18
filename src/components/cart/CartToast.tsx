"use client";

import { Check, ShoppingCart, Undo2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CART_UPDATED_EVENT, restoreCartItem, type CartItem } from "@/lib/cart";

interface ToastState {
  type: "added" | "removed";
  itemName: string;
  item?: CartItem;
}

export default function CartToast() {
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    let dismissTimer: number | undefined;

    const handleCartUpdate = (event: Event) => {
      const detail = (event as CustomEvent<{
        type?: "removed";
        itemName?: string;
        item?: CartItem;
      }>).detail;
      if (detail?.type === "removed" && detail.item) {
        setToast({ type: "removed", itemName: detail.item.name, item: detail.item });
      } else if (detail?.itemName) {
        setToast({ type: "added", itemName: detail.itemName });
      } else {
        return;
      }
      window.clearTimeout(dismissTimer);
      dismissTimer = window.setTimeout(() => setToast(null), detail?.type === "removed" ? 4000 : 2600);
    };

    window.addEventListener(CART_UPDATED_EVENT, handleCartUpdate);
    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, handleCartUpdate);
      window.clearTimeout(dismissTimer);
    };
  }, []);

  if (!toast) return null;

  const undoRemoval = () => {
    if (toast.item) restoreCartItem(toast.item);
    setToast(null);
  };

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed right-4 bottom-4 z-70 flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-xl bg-brand-navy px-4 py-3 text-sm font-semibold text-white shadow-xl sm:right-6 sm:bottom-6"
      role="status"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
        <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
      </span>
      <span className="min-w-0 truncate">{toast.itemName} {toast.type === "removed" ? "removed" : "added to cart"}</span>
      {toast.type === "removed" ? (
        <button type="button" onClick={undoRemoval} className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-brand-yellow transition-colors hover:bg-white/10" aria-label={`Undo removing ${toast.itemName}`}>
          <Undo2 className="h-4 w-4" aria-hidden="true" />
          Undo
        </button>
      ) : <ShoppingCart className="h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />}
      <button
        type="button"
        onClick={() => setToast(null)}
        aria-label="Dismiss cart confirmation"
        className="ml-1 rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
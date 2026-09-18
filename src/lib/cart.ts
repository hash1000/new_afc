import type { MenuItem } from "@/lib/menu-items";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const CART_STORAGE_KEY = "afc_cart";
export const VOUCHER_STORAGE_KEY = "afc_voucher_code";
export const CART_UPDATED_EVENT = "afc-cart-updated";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const value = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) ?? "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function addToCart(item: MenuItem): CartItem[] {
  const cart = readCart();
  const existing = cart.find((cartItem) => cartItem.id === item.id);
  const nextCart = existing
    ? cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      )
    : [...cart, { id: item.id, name: item.name, price: item.price ?? 0, quantity: 1 }];

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCart));
  window.dispatchEvent(
    new CustomEvent(CART_UPDATED_EVENT, { detail: { itemName: item.name } }),
  );
  return nextCart;
}

export function writeCart(items: CartItem[]): void {
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function removeFromCart(id: string): CartItem | null {
  const cart = readCart();
  const removedItem = cart.find((item) => item.id === id) ?? null;
  if (!removedItem) return null;

  writeCart(cart.filter((item) => item.id !== id));
  window.dispatchEvent(
    new CustomEvent(CART_UPDATED_EVENT, {
      detail: { type: "removed", item: removedItem },
    }),
  );
  return removedItem;
}

export function restoreCartItem(item: CartItem): CartItem[] {
  const cart = readCart();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  const nextCart = existingItem
    ? cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem,
      )
    : [...cart, item];

  writeCart(nextCart);
  return nextCart;
}

export function calculateSubtotal(items: CartItem[]): number {
  return Number(items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2));
}

export function calculateDiscount(subtotal: number, discountPercent: number): number {
  return Number((subtotal * (discountPercent / 100)).toFixed(2));
}
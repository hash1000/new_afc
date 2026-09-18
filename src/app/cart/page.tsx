"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { API_BASE_URL, readApiResponse } from "@/lib/api";
import {
  calculateDiscount,
  calculateSubtotal,
  removeFromCart,
  readCart,
  VOUCHER_STORAGE_KEY,
  writeCart,
  type CartItem,
} from "@/lib/cart";

interface VoucherVerification {
  status: "valid" | "used" | "not_found";
  discountPercent?: number;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [code, setCode] = useState(() =>
    typeof window === "undefined"
      ? ""
      : window.localStorage.getItem(VOUCHER_STORAGE_KEY) ?? "",
  );
  const [appliedCode, setAppliedCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [voucherError, setVoucherError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
    const sync = () => setItems(readCart());
    sync();
    window.addEventListener("afc-cart-updated", sync);
    return () => window.removeEventListener("afc-cart-updated", sync);
  }, []);

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);
  const discount = calculateDiscount(subtotal, discountPercent);
  const total = Number((subtotal - discount).toFixed(2));

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      setItems(readCart());
      return;
    }

    const nextItems = items.map((item) => (item.id === id ? { ...item, quantity } : item));
    setItems(nextItems);
    writeCart(nextItems);
  };

  const removeItem = (id: string) => {
    removeFromCart(id);
    setItems(readCart());
  };

  const applyVoucher = async () => {
    const normalizedCode = code.trim().toUpperCase();
    if (!normalizedCode) {
      setVoucherError("Enter a voucher code first.");
      return;
    }
    setLoading(true);
    setVoucherError("");
    setMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/vouchers/verify/${encodeURIComponent(normalizedCode)}`);
      const voucher = await readApiResponse<VoucherVerification>(response);
      if (voucher.status !== "valid" || !voucher.discountPercent) {
        throw new Error(voucher.status === "used" ? "This voucher has already been redeemed." : "Voucher code not found.");
      }
      setAppliedCode(normalizedCode);
      setDiscountPercent(voucher.discountPercent);
      setMessage(`${voucher.discountPercent}% welcome discount applied.`);
    } catch (error) {
      setAppliedCode("");
      setDiscountPercent(0);
      setVoucherError(error instanceof Error ? error.message : "We could not verify that code.");
    } finally {
      setLoading(false);
    }
  };

  const removeVoucher = () => {
    setCode("");
    setAppliedCode("");
    setDiscountPercent(0);
    setVoucherError("");
    setMessage("");
  };

  const placeOrder = () => {
    if (appliedCode) {
      window.localStorage.setItem("afc_voucher_pending_confirmation", appliedCode);
      window.localStorage.removeItem(VOUCHER_STORAGE_KEY);
    }
    setPlaced(true);
  };

  if (placed) {
    return (
      <main className="bg-cream min-h-screen py-12 sm:py-20">
        <div className="container-page mx-auto max-w-2xl">
          <section className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
            <p className="text-brand-red text-xs font-bold uppercase tracking-[0.18em]">Order ready</p>
            <h1 className="font-display text-brand-navy mt-3 text-4xl uppercase sm:text-5xl">Show this at the counter</h1>
            <p className="mt-4 text-black/70">Show this screen at the counter to pay and redeem your discount.</p>
            <OrderSummary items={items} subtotal={subtotal} discount={discount} total={total} appliedCode={appliedCode} discountPercent={discountPercent} />
            <Link href="/food-menu" className="bg-brand-red mt-8 inline-flex w-full justify-center rounded-full py-3.5 text-sm font-bold text-white">Back to menu</Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-cream min-h-screen py-12 sm:py-20">
      <div className="container-page mx-auto max-w-5xl">
        <div className="mb-8"><p className="text-brand-red text-xs font-bold uppercase tracking-[0.18em]">Your order</p><h1 className="font-display text-brand-navy mt-2 text-4xl uppercase">View Cart</h1></div>
        {items.length === 0 ? (
          <section className="rounded-2xl bg-white p-8 text-center shadow-sm"><p className="text-brand-navy font-semibold">Your cart is empty.</p><Link href="/food-menu" className="bg-brand-red mt-5 inline-flex rounded-full px-6 py-3 text-sm font-bold text-white">Browse Menu</Link></section>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7"><div className="flex flex-col gap-4">{items.map((item) => <div key={item.id} className="flex items-center justify-between gap-4 border-b border-black/10 pb-4"><div className="min-w-0"><p className="truncate font-semibold text-brand-navy">{item.name}</p><p className="text-sm text-black/55">${item.price.toFixed(2)} each</p></div><div className="flex shrink-0 items-center gap-2"><button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`} className="h-8 w-8 rounded-full border text-brand-navy">-</button><span className="w-5 text-center text-sm">{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`} className="h-8 w-8 rounded-full border text-brand-navy">+</button><button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name} from cart`} className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-brand-red transition-colors hover:bg-red-50"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 6h18M9 6V4h6v2m-9 0 1 15h10l1-15M10 11v6m4-6v6" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div></div>)}</div></section>
            <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7"><h2 className="text-brand-navy text-xl font-bold">Order summary</h2><div className="mt-5 flex gap-2"><input value={code} onChange={(event) => setCode(event.target.value.toUpperCase())} placeholder="WELCOME10-XXXXXX" aria-label="Voucher code" className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-3 text-sm" /><button type="button" onClick={applyVoucher} disabled={loading} className="bg-brand-navy rounded-xl px-4 py-3 text-sm font-bold text-white disabled:opacity-60">{loading ? "Checking" : "Apply"}</button></div>{voucherError && <p role="alert" className="mt-2 text-sm font-medium text-brand-red">{voucherError}</p>}{message && <p role="status" className="mt-2 text-sm font-medium text-green-700">{message}</p>}{appliedCode && <button type="button" onClick={removeVoucher} className="mt-2 text-xs font-semibold text-brand-navy underline">Remove applied code</button>}<div className="mt-7"><OrderSummary items={items} subtotal={subtotal} discount={discount} total={total} appliedCode={appliedCode} discountPercent={discountPercent} showItems={false} /></div><button type="button" onClick={placeOrder} className="bg-brand-red mt-6 w-full rounded-full py-3.5 text-sm font-bold text-white">Place Order</button><p className="mt-3 text-center text-xs text-black/50">Payment is completed at the counter for now.</p></section>
          </div>
        )}
      </div>
    </main>
  );
}

function OrderSummary({ items, subtotal, discount, total, appliedCode, discountPercent, showItems = true }: { items: CartItem[]; subtotal: number; discount: number; total: number; appliedCode: string; discountPercent: number; showItems?: boolean }) {
  return <div className="mt-7 border-t border-black/10 pt-5">{showItems && items.map((item) => <div key={item.id} className="flex justify-between text-sm"><span>{item.quantity} × {item.name}</span><span>${(item.price * item.quantity).toFixed(2)}</span></div>)}<div className="mt-3 flex justify-between text-sm"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>{appliedCode && <div className="mt-2 flex justify-between text-sm font-semibold text-green-700"><span>{discountPercent}% Welcome Discount</span><span>-${discount.toFixed(2)}</span></div>}<div className="mt-4 flex justify-between border-t border-black/10 pt-4 text-lg font-bold text-brand-navy"><span>Total</span><span>${total.toFixed(2)}</span></div>{appliedCode && <p className="mt-4 rounded-xl bg-cream px-3 py-2 text-center text-xs font-semibold text-brand-navy">Voucher: {appliedCode}</p>}</div>;
}
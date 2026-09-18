"use client";

import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { API_BASE_URL, readApiResponse } from "@/lib/api";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface ClaimResult {
  voucherCode: string;
  discountPercent: number;
}

const EMPTY_FORM: FormData = { name: "", email: "", phone: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const US_PHONE_PATTERN = /^[2-9]\d{2}[2-9]\d{6}$/;
const inputClassName =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder:text-[#929292] focus:border-transparent focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none";

export default function Welcome10Form() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ClaimResult | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    const phone = form.phone.replace(/\D/g, "");

    if (!name || !email || !phone) {
      setError("Please complete your name, email, and phone number.");
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!US_PHONE_PATTERN.test(phone)) {
      setError("Please enter a valid 10-digit US phone number.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/vouchers/claim`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      const claim = await readApiResponse<ClaimResult>(response);
      window.localStorage.setItem("afc_voucher_code", claim.voucherCode);
      window.localStorage.setItem("afc_voucher_discount", String(claim.discountPercent));
      setResult(claim);
      setConfirmation("Your voucher is ready. Save this code for your order.");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "We could not claim your offer. Please try again.",
      );
      setLoading(false);
    }
  };

  if (result) {
    return (
      <section className="rounded-2xl border border-brand-red/20 bg-cream p-6 text-center shadow-sm sm:p-8">
        <p role="status" className="text-sm font-semibold text-green-700">{confirmation}</p>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Your voucher code</p>
        <p className="mt-3 rounded-xl border-2 border-dashed border-brand-red bg-white px-4 py-5 text-2xl font-bold tracking-[0.12em] text-brand-navy sm:text-3xl">{result.voucherCode}</p>
        <button type="button" onClick={async () => { await navigator.clipboard.writeText(result.voucherCode); setCopied(true); window.setTimeout(() => setCopied(false), 1600); }} className="border-brand-navy text-brand-navy mt-4 rounded-full border-2 px-5 py-2.5 text-sm font-semibold">{copied ? "Copied!" : "Copy code"}</button>
        <button type="button" onClick={() => router.push("/food-menu")} className="bg-brand-red mt-5 block w-full rounded-full py-3.5 text-sm font-bold text-white">Browse Menu</button>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="relative">
        <input id="offer-name" type="text" required maxLength={100} value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} placeholder=" " className={`${inputClassName} peer pt-5`} />
        <label htmlFor="offer-name" className="pointer-events-none absolute top-2 left-4 text-xs font-semibold text-black/55 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Name</label>
      </div>

      <div className="relative">
        <input id="offer-email" type="email" required maxLength={254} value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} placeholder=" " className={`${inputClassName} peer pt-5`} />
        <label htmlFor="offer-email" className="pointer-events-none absolute top-2 left-4 text-xs font-semibold text-black/55 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">Email</label>
      </div>

      <div>
        <label htmlFor="offer-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/55">Phone Number</label>
        <div className="flex overflow-hidden rounded-xl border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-brand-red">
          <span className="flex items-center border-r border-gray-200 bg-gray-50 px-4 text-sm font-semibold text-brand-navy">+1</span>
          <input id="offer-phone" type="tel" required value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} placeholder="312 555 0123" inputMode="tel" className="min-w-0 flex-1 px-4 py-3 text-sm text-black outline-none placeholder:text-[#929292]" />
        </div>
      </div>

      <button type="submit" disabled={loading} aria-busy={loading} className="bg-brand-red mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold text-white transition-colors hover:bg-brand-red/90 disabled:opacity-60">
        {loading && <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {loading ? "Claiming your offer..." : "Claim 10% Off"}
      </button>
      {confirmation && <p role="status" className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">{confirmation}</p>}
      {error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-brand-red">{error}</p>}
      <p className="text-center text-xs leading-relaxed text-black/50">Resubmitting with the same details refreshes your code until it is used.</p>
    </form>
  );
}

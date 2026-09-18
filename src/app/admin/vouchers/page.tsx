"use client";

import { useState, type FormEvent } from "react";
import { API_BASE_URL, readApiResponse } from "@/lib/api";

interface VoucherStatus {
  status: "valid" | "used" | "not_found";
  customerName?: string;
  discountPercent?: number;
}

interface LoginResult {
  accessToken: string;
}

export default function AdminVouchersPage() {
  const [token, setToken] = useState(() =>
    typeof window === "undefined"
      ? ""
      : sessionStorage.getItem("afc_admin_token") ?? "",
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [voucher, setVoucher] = useState<VoucherStatus | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (path: string, options: RequestInit = {}) => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`, ...options.headers },
    });
    return readApiResponse<VoucherStatus>(response);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const result = await readApiResponse<LoginResult>(response);
      sessionStorage.setItem("afc_admin_token", result.accessToken);
      setToken(result.accessToken);
      setMessage("Signed in. You can now check vouchers.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not sign in.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheck = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setMessage("");
    try {
      setVoucher(await request(`/vouchers/verify/${encodeURIComponent(code.trim())}`));
    } catch (error) {
      setVoucher(null);
      setMessage(error instanceof Error ? error.message : "Could not check voucher.");
    } finally {
      setLoading(false);
    }
  };

  const handleRedeem = async () => {
    setLoading(true);
    setMessage("");
    try {
      const redeemed = await request(`/vouchers/redeem/${encodeURIComponent(code.trim())}`, { method: "POST" });
      setVoucher(redeemed);
      setMessage(`Voucher redeemed for ${redeemed.customerName}.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not redeem voucher.");
    } finally {
      setLoading(false);
    }
  };

  const inputClassName = "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black focus:border-transparent focus:ring-2 focus:ring-brand-red focus:outline-none";

  return (
    <main className="bg-cream flex min-h-screen items-center py-12">
      <div className="container-page mx-auto max-w-xl">
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.18em]">Staff tools</p>
          <h1 className="font-display text-brand-navy mt-2 text-4xl uppercase">Redeem voucher</h1>
          {!token ? (
            <form onSubmit={handleLogin} className="mt-7 flex flex-col gap-4">
              <input className={inputClassName} type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Admin email" aria-label="Admin email" />
              <input className={inputClassName} type="password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" aria-label="Password" />
              <button type="submit" disabled={loading} className="bg-brand-red rounded-full py-3 text-sm font-bold text-white disabled:opacity-60">{loading ? "Signing in..." : "Sign in"}</button>
            </form>
          ) : (
            <div className="mt-7 flex flex-col gap-4">
              <div className="flex gap-3">
                <input className={inputClassName} value={code} onChange={(event) => setCode(event.target.value.toUpperCase())} placeholder="W10-ABC123" aria-label="Voucher code" />
                <button type="button" onClick={handleCheck} disabled={loading || !code.trim()} className="bg-brand-navy shrink-0 rounded-full px-5 py-3 text-sm font-bold text-white disabled:opacity-50">Check</button>
              </div>
              {voucher && voucher.status !== "not_found" && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm">
                  <p className="font-bold text-black">Customer: {voucher.customerName}</p>
                  <p className="mt-1 text-black/70">Status: {voucher.status}</p>
                  {voucher.discountPercent && <p className="mt-1 text-black/70">Discount: {voucher.discountPercent}%</p>}
                  <button type="button" onClick={handleRedeem} disabled={loading || voucher.status !== "valid"} className="bg-brand-red mt-4 w-full rounded-full py-3 text-sm font-bold text-white disabled:opacity-50">Redeem voucher</button>
                </div>
              )}
              {voucher?.status === "not_found" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-brand-red">Voucher code not found.</p>}
            </div>
          )}
          {message && <p role="status" className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">{message}</p>}
        </div>
      </div>
    </main>
  );
}
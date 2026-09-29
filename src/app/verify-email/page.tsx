"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { authPost } from "@/lib/auth";

export default function VerifyEmailPage() {
  const hash = useSyncExternalStore(
    (notify) => {
      window.addEventListener("hashchange", notify);
      return () => window.removeEventListener("hashchange", notify);
    },
    () => window.location.hash,
    () => "",
  );
  const token = new URLSearchParams(hash.slice(1)).get("token") ?? "";
  const [busy, setBusy] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  async function verify() {
    setBusy(true);
    setError("");
    try {
      await authPost("verify-email", { token });
      setVerified(true);
      window.history.replaceState(null, "", window.location.pathname);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="bg-cream min-h-screen py-16">
      <section className="container-page mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="font-display text-brand-navy text-4xl uppercase">
          Verify email
        </h1>
        {verified ? (
          <p role="status" className="mt-5 text-green-700">
            Email verified. You can now sign in.
          </p>
        ) : token ? (
          <>
            <p className="mt-5 text-sm">
              Confirm your email address to finish creating your account.
            </p>
            <button
              onClick={verify}
              disabled={busy}
              className="bg-brand-red mt-5 rounded-full px-6 py-3 font-bold text-white disabled:opacity-60"
            >
              {busy ? "Verifying…" : "Verify my email"}
            </button>
          </>
        ) : (
          <p className="mt-5 text-sm">
            Open the link from your verification email, or request a new link on
            the sign-in page.
          </p>
        )}
        {error && (
          <p role="alert" className="mt-4 text-brand-red">
            {error}
          </p>
        )}
        <Link
          href="/login"
          className="text-brand-navy mt-6 inline-block underline"
        >
          Continue to sign in
        </Link>
      </section>
    </main>
  );
}

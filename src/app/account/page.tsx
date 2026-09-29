"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authenticatedRequest, signOut, type AuthUser } from "@/lib/auth";

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let active = true;
    authenticatedRequest<AuthUser>("/auth/me")
      .then((value) => {
        if (active) setUser(value);
      })
      .catch((err) => {
        if (active)
          setError(err instanceof Error ? err.message : "Please sign in.");
      });
    return () => {
      active = false;
    };
  }, []);
  async function logout() {
    setBusy(true);
    setError("");
    try {
      await signOut();
      router.replace("/login");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not sign out. Please retry.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="bg-cream min-h-screen py-16">
      <section className="container-page mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="font-display text-brand-navy text-4xl uppercase">
          Your account
        </h1>
        {user ? (
          <>
            <p className="mt-5">Signed in as {user.email}</p>
            <Link
              href="/locations"
              className="bg-brand-red mt-6 inline-flex rounded-full px-6 py-3 font-bold text-white"
            >
              Select location
            </Link>
            <button
              onClick={logout}
              disabled={busy}
              className="text-brand-navy ml-5 underline disabled:opacity-60"
            >
              {busy ? "Signing out…" : "Sign out"}
            </button>
          </>
        ) : (
          !error && <p className="mt-5">Loading your account…</p>
        )}
        {error && (
          <p role="alert" className="mt-5 text-brand-red">
            {error}{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </p>
        )}
      </section>
    </main>
  );
}

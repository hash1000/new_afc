"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { authPost, signIn } from "@/lib/auth";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const signup = mode === "signup";
  const inputClass =
    "w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-brand-red";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    try {
      if (signup) {
        if (new TextEncoder().encode(password).length > 72)
          throw new Error(
            "Password must be at most 72 bytes. Use fewer characters.",
          );
        const result = await authPost<{ message: string }>("signup", {
          email,
          password,
        });
        setMessage(result.message);
      } else {
        await signIn(email, password);
        router.push("/account");
      }
      setPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function resend() {
    if (!email.trim()) {
      setError("Enter your email address first.");
      return;
    }
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const result = await authPost<{ message: string }>(
        "resend-verification",
        { email },
      );
      setMessage(result.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="bg-cream min-h-screen py-12 sm:py-20">
      <section className="container-page mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <h1 className="font-display text-brand-navy text-4xl uppercase">
          {signup ? "Create account" : "Sign in"}
        </h1>
        <p className="mt-3 text-sm text-black/70">
          {signup
            ? "Verify your email to finish creating your account."
            : "Welcome back to America’s Food Court."}
        </p>
        <form onSubmit={submit} className="mt-7 flex flex-col gap-4">
          <label className="text-sm font-semibold">
            Email
            <input
              className={`${inputClass} mt-1`}
              type="email"
              required
              maxLength={255}
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="text-sm font-semibold">
            Password
            <input
              className={`${inputClass} mt-1`}
              type="password"
              required
              minLength={signup ? 12 : undefined}
              maxLength={72}
              autoComplete={signup ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {signup && (
            <p className="text-xs text-black/60">
              Use at least 12 characters (maximum 72 bytes).
            </p>
          )}
          <button
            disabled={busy}
            className="bg-brand-red rounded-full py-3 font-bold text-white disabled:opacity-60"
          >
            {busy ? "Please wait…" : signup ? "Create account" : "Sign in"}
          </button>
        </form>
        {message && (
          <p role="status" className="mt-4 text-sm text-green-700">
            {message}
          </p>
        )}
        {error && (
          <p role="alert" className="mt-4 text-sm text-brand-red">
            {error}
          </p>
        )}
        <button
          type="button"
          disabled={busy}
          onClick={resend}
          className="text-brand-navy mt-5 text-sm underline disabled:opacity-60"
        >
          Resend verification email
        </button>
        <p className="mt-5 text-sm">
          {signup ? "Already registered? " : "New here? "}
          <Link
            className="text-brand-red font-semibold underline"
            href={signup ? "/login" : "/signup"}
          >
            {signup ? "Sign in" : "Create an account"}
          </Link>
        </p>
      </section>
    </main>
  );
}

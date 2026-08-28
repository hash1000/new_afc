"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

interface ApplyFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  location: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: ApplyFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  location: "",
  message: "",
};

const POSITIONS = [
  "Crew Member",
  "Shift Leader",
  "Assistant General Manager",
  "General Manager",
  "Franchise Operations Coordinator",
  "Other",
];

const inputClassName =
  "w-full rounded-xl border border-gray-300 bg-[#dfdfdf] px-4 py-3 text-sm text-black placeholder:text-[#929292] focus:border-transparent focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none";

export default function CareerApplyForm() {
  const [form, setForm] = useState<ApplyFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");

  const updateField =
    (field: keyof ApplyFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input
        type="text"
        required
        value={form.firstName}
        onChange={updateField("firstName")}
        placeholder="First Name"
        aria-label="First Name"
        className={inputClassName}
      />
      <input
        type="text"
        required
        value={form.lastName}
        onChange={updateField("lastName")}
        placeholder="Last Name"
        aria-label="Last Name"
        className={inputClassName}
      />

      <input
        type="email"
        required
        value={form.email}
        onChange={updateField("email")}
        placeholder="Email"
        aria-label="Email"
        className={inputClassName}
      />
      <input
        type="tel"
        required
        value={form.phone}
        onChange={updateField("phone")}
        placeholder="Phone"
        aria-label="Phone"
        className={inputClassName}
      />

      <select
        required
        value={form.position}
        onChange={updateField("position")}
        aria-label="Position"
        className={`${inputClassName} appearance-none`}
      >
        <option value="">Position You&apos;re Applying For</option>
        {POSITIONS.map((position) => (
          <option key={position} value={position}>
            {position}
          </option>
        ))}
      </select>
      <input
        type="text"
        required
        value={form.location}
        onChange={updateField("location")}
        placeholder="Preferred Location / City"
        aria-label="Preferred Location"
        className={inputClassName}
      />

      <textarea
        value={form.message}
        onChange={updateField("message")}
        placeholder="Tell us a bit about yourself (optional)"
        aria-label="Message"
        rows={4}
        className={`${inputClassName} col-span-full resize-none`}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-red col-span-full mt-2 w-full rounded-2xl py-4 text-sm font-bold text-white transition-colors hover:bg-brand-red/90 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>

      {status === "success" && (
        <p className="col-span-full rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          Thank you! Our hiring team will review your application and reach
          out soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-brand-red col-span-full rounded-xl bg-red-50 px-4 py-3 text-sm font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

"use client";

import { useState, type FormEvent } from "react";

interface FranchiseFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  postalCode: string;
  investmentRange: string;
  preferredFormat: string;
}

type Status = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: FranchiseFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  postalCode: "",
  investmentRange: "",
  preferredFormat: "",
};

const INVESTMENT_RANGES = ["Under $100K", "$100K - $250K", "$250K - $500K", "$500K+"];

const PREFERRED_FORMATS = [
  "Drive-Thru",
  "Traditional Restaurant",
  "Travel Plaza",
  "Convenience Store",
  "Retail",
  "Mall",
  "Airport",
  "Kiosk",
];

const inputClassName =
  "w-full rounded-xl border border-gray-300 bg-[#dfdfdf] px-4 py-3 text-sm text-black placeholder:text-[#929292] focus:border-transparent focus:bg-white focus:ring-2 focus:ring-brand-red focus:outline-none";

export default function FranchiseForm() {
  const [form, setForm] = useState<FranchiseFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");

  const updateField = (field: keyof FranchiseFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
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
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={form.city}
          onChange={updateField("city")}
          placeholder="City"
          aria-label="City"
          className={inputClassName}
        />
        <input
          type="text"
          required
          value={form.state}
          onChange={updateField("state")}
          placeholder="State"
          aria-label="State"
          className={inputClassName}
        />
      </div>

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
        type="text"
        required
        value={form.postalCode}
        onChange={updateField("postalCode")}
        placeholder="Postal Code"
        aria-label="Postal Code"
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
      <select
        required
        value={form.investmentRange}
        onChange={updateField("investmentRange")}
        aria-label="Investment Range"
        className={`${inputClassName} appearance-none`}
      >
        <option value="">Investment Range</option>
        {INVESTMENT_RANGES.map((range) => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>

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
        value={form.preferredFormat}
        onChange={updateField("preferredFormat")}
        aria-label="Preferred Format"
        className={`${inputClassName} appearance-none`}
      >
        <option value="">Preferred Format</option>
        {PREFERRED_FORMATS.map((format) => (
          <option key={format} value={format}>
            {format}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-red col-span-full mt-2 w-full rounded-2xl py-4 text-sm font-bold text-white transition-colors hover:bg-brand-red/90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Request Franchise Information"}
      </button>

      {status === "success" && (
        <p className="col-span-full rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          Thank you! Our franchise development team will be in touch soon.
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

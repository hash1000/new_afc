"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const inputClassName =
  "w-full rounded-lg border border-[#c7c7c7] bg-white px-3.5 py-2.5 text-sm text-black placeholder:text-[#a9a9a9] focus:border-transparent focus:ring-2 focus:ring-brand-red focus:outline-none";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");

  const updateField = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="firstName" className="mb-1.5 block text-sm text-black">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          required
          value={formData.firstName}
          onChange={updateField("firstName")}
          placeholder="John"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="lastName" className="mb-1.5 block text-sm text-black">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          required
          value={formData.lastName}
          onChange={updateField("lastName")}
          placeholder="Doe"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-black">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={updateField("email")}
          placeholder="johndoe@example.com"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-black">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={updateField("message")}
          placeholder="How can we help?"
          className={`${inputClassName} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-red w-full rounded-lg py-3 text-sm font-bold text-white transition-colors hover:bg-brand-red/90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Submit"}
      </button>

      {status === "success" && (
        <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-brand-red">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

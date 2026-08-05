"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Franchising", href: "/franchising" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky -top-[50px] z-50">
      {/* Announcement bar */}
      <div className="flex h-[50px] items-center bg-brand-navy px-4 lg:px-[30px]">
        <p className="mx-auto text-sm text-white sm:text-base">
          Get an Exclusive <strong>10% off</strong> on your first order
        </p>
        <div className="hidden h-9 w-[394px] shrink-0 items-center rounded-[10px] bg-brand-blue px-3 lg:flex">
          <input
            type="search"
            placeholder="Type your Search"
            className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/30"
          />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9.5 16a6.5 6.5 0 1 1 4.55-1.87l5.4 5.4-1.4 1.4-5.4-5.4A6.47 6.47 0 0 1 9.5 16Zm0-2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      {/* Main nav — floats over the hero */}
      <div className="pointer-events-none absolute inset-x-0 top-[25px] flex items-start justify-between px-4 lg:px-[30px]">
        <Link href="/" className="pointer-events-auto">
          <Image
            src="/images/logo-afc.svg"
            alt="Americas Food Court"
            width={204}
            height={138}
            priority
            className="h-[90px] w-auto lg:h-[138px]"
          />
        </Link>

        <div className="pointer-events-auto mt-[19px] flex items-center gap-3">
          {/* Desktop links */}
          <nav className="hidden h-[50px] items-center gap-10 rounded-[15px] bg-white/50 px-[27px] backdrop-blur-[15px] lg:flex">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-base font-medium text-black ${
                    active
                      ? "underline decoration-brand-red decoration-2 underline-offset-8"
                      : "hover:text-brand-red"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/menu"
            className="hidden h-[50px] items-center gap-2 rounded-[14px] bg-brand-red px-[22px] text-base font-medium text-white transition-colors hover:bg-brand-red/90 sm:flex"
          >
            Explore Menu
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
              <path d="M0 6h14M10 1l5 5-5 5" stroke="#fff" strokeWidth="1.5" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-white/70 backdrop-blur-[15px] lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="#22305f" strokeWidth="2" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="#22305f" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className="absolute inset-x-4 top-[120px] z-50 flex flex-col gap-1 rounded-[15px] bg-white p-4 shadow-xl lg:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-2 text-base font-medium ${
                pathname === href ? "bg-brand-red text-white" : "text-brand-navy hover:bg-brand-navy/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

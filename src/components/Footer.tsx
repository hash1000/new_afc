import Image from "next/image";
import Link from "next/link";

const COMPANY_LINKS = [
  { label: "Franchising", href: "/franchising" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SUPPORT_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const BOTTOM_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex h-[69px] w-[95px] items-center justify-center rounded-xl bg-white">
              <Image
                src="/images/home/afc-logo.svg"
                alt="Americas Food Court"
                width={62}
                height={42}
              />
            </div>
            <p className="text-sm text-white/70">All the foods you love.</p>
            <Image
              src="/images/home/afc-logo.svg"
              alt="Americas Food Court"
              width={84}
              height={57}
            />
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 sm:h-9 sm:w-9 transition-colors hover:bg-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 sm:h-9 sm:w-9 transition-colors hover:bg-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.5 2h-3v13.5a3 3 0 1 1-2.2-2.9V9.4A6 6 0 1 0 16.5 15V9c1.1.8 2.4 1.3 3.8 1.3V7.2c-2.1 0-3.8-1.7-3.8-3.7V2Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white/50 uppercase">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white/50 uppercase">
              Support
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 America&apos;s Food Court. All rights reserved.</p>
          <div className="flex gap-5">
            {BOTTOM_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

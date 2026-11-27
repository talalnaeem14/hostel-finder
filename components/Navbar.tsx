"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

const items: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/hostels", label: "Hostels" },
  { href: "/shortlist", label: "Shortlist" },
  { href: "/visit-request", label: "Request a Visit" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `block rounded-md px-3 py-2 text-sm font-medium transition ${
      pathname === href
        ? "bg-indigo-600 text-white"
        : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          HostelHub
        </Link>

        <button
          className="rounded-md border px-3 py-1 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className="hidden gap-1 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="space-y-1 border-t px-4 py-2 md:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={linkClass(item.href)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
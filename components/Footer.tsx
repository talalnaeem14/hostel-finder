import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row">
        <p>© 2026 HostelHub. CS4032 Web Programming, Assignment 3.</p>
        <ul className="flex gap-4">
          <li>
            <Link href="/hostels" className="hover:text-indigo-600">
              Hostels
            </Link>
          </li>
          <li>
            <Link href="/shortlist" className="hover:text-indigo-600">
              Shortlist
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-600">
              About
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
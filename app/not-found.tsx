import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="mt-4 text-lg text-slate-600">
        We couldn&apos;t find that page or hostel.
      </p>
      <Link
        href="/hostels"
        className="mt-6 inline-block rounded-md bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
      >
        Browse hostels
      </Link>
    </div>
  );
}
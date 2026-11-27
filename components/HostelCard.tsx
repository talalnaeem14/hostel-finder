import Image from "next/image";
import Link from "next/link";
import type { Hostel } from "@/types/hostel";

interface HostelCardProps {
  hostel: Hostel;
}

export default function HostelCard({ hostel }: HostelCardProps) {
  return (
    <Link
      href={`/hostels/${hostel.id}`}
      className="block overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md"
    >
      <Image
        src={hostel.image}
        alt={hostel.name}
        width={400}
        height={250}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{hostel.name}</h3>
        <p className="text-sm text-slate-600">
          {hostel.area}, {hostel.city}
        </p>
        <p className="mt-2 font-bold text-indigo-600">
          Rs {hostel.rent.toLocaleString()}/month
        </p>
      </div>
    </Link>
  );
}
import Image from "next/image";
import Link from "next/link";
import type { Hostel } from "@/types/hostel";
import RatingBadge from "@/components/RatingBadge";
import AmenityList from "@/components/AmenityList";

interface HostelCardProps {
  hostel: Hostel;
  showAmenities?: boolean;
  actions?: React.ReactNode;
}

export default function HostelCard({
  hostel,
  showAmenities = false,
  actions,
}: HostelCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/hostels/${hostel.id}`} className="block">
        <Image
          src={hostel.image}
          alt={hostel.name}
          width={400}
          height={250}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold">{hostel.name}</h3>
            <RatingBadge rating={hostel.rating} />
          </div>
          <p className="text-sm text-slate-600">
            {hostel.area}, {hostel.city}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {hostel.gender} · {hostel.roomType} · {hostel.distanceKm} km from campus
          </p>
          <p className="mt-2 font-bold text-indigo-600">
            Rs {hostel.rent.toLocaleString()}/month
          </p>
        </div>
      </Link>

      {showAmenities && (
        <div className="px-4 pb-4">
          <AmenityList amenities={hostel.amenities.slice(0, 3)} />
        </div>
      )}

      {actions && <div className="mt-auto border-t px-4 py-3">{actions}</div>}
    </article>
  );
}
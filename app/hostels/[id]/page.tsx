import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AmenityList from "@/components/AmenityList";
import RatingBadge from "@/components/RatingBadge";
import Button from "@/components/Button";
import { hostels } from "@/data/hostels";

interface HostelPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: HostelPageProps): Promise<Metadata> {
  const { id } = await params;
  const hostel = hostels.find((h) => h.id === id);

  if (!hostel) {
    return { title: "Hostel not found" };
  }
  return { title: hostel.name, description: hostel.description };
}

export default async function HostelDetailPage({ params }: HostelPageProps) {
  const { id } = await params;
  const hostel = hostels.find((h) => h.id === id);

  if (!hostel) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/hostels" className="text-sm text-indigo-600 hover:underline">
        ← Back to hostels
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Image
          src={hostel.image}
          alt={hostel.name}
          width={800}
          height={500}
          priority
          className="w-full rounded-lg object-cover"
        />

        <div>
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-3xl font-bold">{hostel.name}</h1>
            <RatingBadge rating={hostel.rating} />
          </div>
          <p className="mt-1 text-slate-600">
            {hostel.area}, {hostel.city}
          </p>
          <p className="mt-4 text-2xl font-bold text-indigo-600">
            Rs {hostel.rent.toLocaleString()}
            <span className="text-base font-normal text-slate-500"> / month</span>
          </p>

          <dl className="mt-6 grid grid-cols-3 gap-4 rounded-lg border bg-white p-4 text-center text-sm">
            <div>
              <dt className="text-slate-500">Gender</dt>
              <dd className="font-medium">{hostel.gender}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Room</dt>
              <dd className="font-medium">{hostel.roomType}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Distance</dt>
              <dd className="font-medium">{hostel.distanceKm} km</dd>
            </div>
          </dl>

          <p className="mt-6 text-slate-700">{hostel.description}</p>

          <h2 className="mt-6 mb-2 font-semibold">Amenities</h2>
          <AmenityList amenities={hostel.amenities} />

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/visit-request?hostel=${hostel.id}`}>
              Request a visit
            </Button>
            <Button href="/hostels" variant="outline">
              Browse more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
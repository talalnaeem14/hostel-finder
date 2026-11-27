"use client";

import HostelCard from "@/components/HostelCard";
import Button from "@/components/Button";
import { useShortlist } from "@/components/ShortlistProvider";
import { hostels } from "@/data/hostels";

export default function ShortlistView() {
  const { ids } = useShortlist();
  const saved = hostels.filter((h) => ids.includes(h.id));

  if (saved.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-10 text-center">
        <p className="text-slate-600">You haven&apos;t shortlisted any hostels yet.</p>
        <div className="mt-4">
          <Button href="/hostels">Browse hostels</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {saved.map((hostel) => (
        <HostelCard
          key={hostel.id}
          hostel={hostel}
          showAmenities
          actions={
            <Button
              href={`/visit-request?hostel=${hostel.id}`}
              variant="outline"
              className="w-full text-center"
            >
              Request a visit
            </Button>
          }
        />
      ))}
    </div>
  );
}
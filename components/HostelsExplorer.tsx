"use client";

import { useMemo, useState } from "react";
import type { Hostel } from "@/types/hostel";
import type { HostelFilters } from "@/types/filters";
import HostelCard from "@/components/HostelCard";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";

const MAX_RENT = 30000;

const defaultFilters: HostelFilters = {
  area: "All",
  gender: "All",
  roomType: "All",
  maxRent: MAX_RENT,
  sort: "default",
};

interface HostelsExplorerProps {
  hostels: Hostel[];
}

export default function HostelsExplorer({ hostels }: HostelsExplorerProps) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<HostelFilters>(defaultFilters);

  const areas = useMemo(
    () => Array.from(new Set(hostels.map((h) => h.area))).sort(),
    [hostels]
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    const result = hostels.filter((h) => {
      const matchesQuery =
        q === "" ||
        h.name.toLowerCase().includes(q) ||
        h.area.toLowerCase().includes(q) ||
        h.city.toLowerCase().includes(q);

      return (
        matchesQuery &&
        (filters.area === "All" || h.area === filters.area) &&
        (filters.gender === "All" || h.gender === filters.gender) &&
        (filters.roomType === "All" || h.roomType === filters.roomType) &&
        h.rent <= filters.maxRent
      );
    });

    switch (filters.sort) {
      case "rent-asc":
        result.sort((a, b) => a.rent - b.rent);
        break;
      case "rent-desc":
        result.sort((a, b) => b.rent - a.rent);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "distance-asc":
        result.sort((a, b) => a.distanceKm - b.distanceKm);
        break;
    }
    return result;
  }, [hostels, query, filters]);

  const resetAll = () => {
    setQuery("");
    setFilters(defaultFilters);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <aside className="lg:col-span-1">
        <FilterPanel
          filters={filters}
          areas={areas}
          maxRentLimit={MAX_RENT}
          onChange={setFilters}
          onReset={resetAll}
        />
      </aside>

      <div className="lg:col-span-3">
        <SearchBar value={query} onChange={setQuery} />
        <p className="mt-3 text-sm text-slate-600">
          Showing {visible.length} of {hostels.length} hostels
        </p>

        {visible.length === 0 ? (
          <div className="mt-6 rounded-lg border bg-white p-8 text-center text-slate-600">
            No hostels match your search. Try changing the filters.
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((hostel) => (
              <HostelCard key={hostel.id} hostel={hostel} showAmenities />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
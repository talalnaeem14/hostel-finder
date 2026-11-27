import type { HostelFilters, SortOption } from "@/types/filters";

interface FilterPanelProps {
  filters: HostelFilters;
  areas: string[];
  maxRentLimit: number;
  onChange: (filters: HostelFilters) => void;
  onReset: () => void;
}

const selectClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

export default function FilterPanel({
  filters,
  areas,
  maxRentLimit,
  onChange,
  onReset,
}: FilterPanelProps) {
  const update = <K extends keyof HostelFilters>(
    key: K,
    value: HostelFilters[K]
  ) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-4 rounded-lg border bg-white p-4">
      <div>
        <label htmlFor="area" className="mb-1 block text-sm font-medium">
          Area
        </label>
        <select
          id="area"
          value={filters.area}
          onChange={(e) => update("area", e.target.value)}
          className={selectClass}
        >
          <option value="All">All areas</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="gender" className="mb-1 block text-sm font-medium">
          Gender
        </label>
        <select
          id="gender"
          value={filters.gender}
          onChange={(e) => update("gender", e.target.value)}
          className={selectClass}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div>
        <label htmlFor="roomType" className="mb-1 block text-sm font-medium">
          Room type
        </label>
        <select
          id="roomType"
          value={filters.roomType}
          onChange={(e) => update("roomType", e.target.value)}
          className={selectClass}
        >
          <option value="All">All</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Shared">Shared</option>
        </select>
      </div>

      <div>
        <label htmlFor="maxRent" className="mb-1 block text-sm font-medium">
          Max rent: Rs {filters.maxRent.toLocaleString()}
        </label>
        <input
          id="maxRent"
          type="range"
          min={5000}
          max={maxRentLimit}
          step={500}
          value={filters.maxRent}
          onChange={(e) => update("maxRent", Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
      </div>

      <div>
        <label htmlFor="sort" className="mb-1 block text-sm font-medium">
          Sort by
        </label>
        <select
          id="sort"
          value={filters.sort}
          onChange={(e) => update("sort", e.target.value as SortOption)}
          className={selectClass}
        >
          <option value="default">Default</option>
          <option value="rent-asc">Rent: low to high</option>
          <option value="rent-desc">Rent: high to low</option>
          <option value="rating-desc">Rating: high to low</option>
          <option value="distance-asc">Distance: nearest first</option>
        </select>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-100"
      >
        Reset filters
      </button>
    </div>
  );
}
export type SortOption =
  | "default"
  | "rent-asc"
  | "rent-desc"
  | "rating-desc"
  | "distance-asc";

export interface HostelFilters {
  area: string;
  gender: string;
  roomType: string;
  maxRent: number;
  sort: SortOption;
}
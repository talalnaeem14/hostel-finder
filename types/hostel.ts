export interface Hostel {
  id: string;
  name: string;
  area: string;
  city: string;
  rent: number; // per month, in Rs
  gender: "Male" | "Female";
  roomType: "Single" | "Double" | "Shared";
  rating: number; // 0 to 5
  distanceKm: number; // distance to campus
  amenities: string[];
  image: string;
  description: string;
}
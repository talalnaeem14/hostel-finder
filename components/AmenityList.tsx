interface AmenityListProps {
  amenities: string[];
}

export default function AmenityList({ amenities }: AmenityListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {amenities.map((amenity) => (
        <li
          key={amenity}
          className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
        >
          {amenity}
        </li>
      ))}
    </ul>
  );
}
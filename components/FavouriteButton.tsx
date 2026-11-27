"use client";

import { useShortlist } from "@/components/ShortlistProvider";

interface FavouriteButtonProps {
  hostelId: string;
  className?: string;
}

export default function FavouriteButton({
  hostelId,
  className = "",
}: FavouriteButtonProps) {
  const { isShortlisted, toggle } = useShortlist();
  const saved = isShortlisted(hostelId);

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? "Remove from shortlist" : "Add to shortlist"}
      onClick={(e) => {
        e.preventDefault(); // stops the card's Link from navigating
        e.stopPropagation();
        toggle(hostelId);
      }}
      className={`rounded-full bg-white/90 px-3 py-1 text-lg shadow transition hover:bg-white ${
        saved ? "text-red-500" : "text-slate-400"
      } ${className}`}
    >
      {saved ? "♥" : "♡"}
    </button>
  );
}
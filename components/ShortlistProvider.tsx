"use client";

import { createContext, useContext, useState } from "react";

interface ShortlistContextValue {
  ids: string[];
  count: number;
  isShortlisted: (id: string) => boolean;
  toggle: (id: string) => void;
}

const ShortlistContext = createContext<ShortlistContextValue | null>(null);

export function ShortlistProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);

  const toggle = (id: string) =>
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const value: ShortlistContextValue = {
    ids,
    count: ids.length,
    isShortlisted: (id) => ids.includes(id),
    toggle,
  };

  return (
    <ShortlistContext.Provider value={value}>
      {children}
    </ShortlistContext.Provider>
  );
}

export function useShortlist() {
  const ctx = useContext(ShortlistContext);
  if (!ctx) throw new Error("useShortlist must be used inside ShortlistProvider");
  return ctx;
}
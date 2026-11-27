import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ShortlistView from "@/components/ShortlistView";

export const metadata: Metadata = {
  title: "Shortlist",
  description: "Your saved student hostels in one place.",
};

export default function ShortlistPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Your shortlist"
        subtitle="Hostels you saved. Request a visit for the ones you like."
      />
      <div className="mt-8">
        <ShortlistView />
      </div>
    </div>
  );
}
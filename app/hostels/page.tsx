import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import HostelsExplorer from "@/components/HostelsExplorer";
import { hostels } from "@/data/hostels";

export const metadata: Metadata = {
  title: "Hostels",
  description: "Search, filter and sort student hostels near your campus.",
};

export default function HostelsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Find a hostel"
        subtitle="Search and filter to find the right place for you"
      />
      <div className="mt-8">
        <HostelsExplorer hostels={hostels} />
      </div>
    </div>
  );
}
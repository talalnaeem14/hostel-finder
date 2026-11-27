import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import HostelCard from "@/components/HostelCard";
import Button from "@/components/Button";
import { hostels } from "@/data/hostels";

export const metadata: Metadata = {
  title: { absolute: "HostelHub | Student Hostel Finder" },
  description: "Search, compare and shortlist student hostels near your campus.",
};

const steps = [
  { title: "Search", text: "Filter hostels by area, rent and room type." },
  { title: "Shortlist", text: "Save the hostels you like and compare later." },
  { title: "Request a visit", text: "Send a visit request in a few clicks." },
];

export default function HomePage() {
  const featured = hostels.slice(0, 3);

  return (
    <>
      <Hero
        title="Find your perfect student hostel"
        subtitle="Browse hostels near your university, compare rents and amenities, and request a visit."
        ctaLabel="Browse hostels"
        ctaHref="/hostels"
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading
          title="Featured hostels"
          subtitle="Popular picks among students"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((hostel) => (
            <HostelCard key={hostel.id} hostel={hostel} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/hostels" variant="outline">
            View all hostels
          </Button>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="How it works" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-lg border p-6 text-center"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
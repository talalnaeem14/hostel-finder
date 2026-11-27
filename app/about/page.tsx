import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about HostelHub and the team behind it.",
};

const team = [
  { name: "Talal Naeem", role: "Layout, Home and About" },
  { name: "Hassam Ali", role: "Listing, Search and Detail pages" },
  { name: "Ahsan Arshad", role: "Visit request form and Shortlist" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeading
        title="About HostelHub"
        subtitle="A frontend project for CS4032 Web Programming"
      />
      <p className="mt-8 text-slate-700">
        HostelHub helps students find accommodation near their campus. It uses
        mock data only, with no backend, so actions such as shortlisting and
        visit requests are handled with React state.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Our team</h2>
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {team.map((member) => (
          <li key={member.name} className="rounded-lg border bg-white p-4">
            <p className="font-medium">{member.name}</p>
            <p className="text-sm text-slate-600">{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import VisitRequestForm from "@/components/VisitRequestForm";

export const metadata: Metadata = {
  title: "Request a Visit",
  description: "Send a visit request to a student hostel.",
};

export default async function VisitRequestPage({
  searchParams,
}: {
  searchParams: Promise<{ hostel?: string }>;
}) {
  const { hostel } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <SectionHeading
        title="Request a visit"
        subtitle="Fill in your details and pick a date. We'll pass it on to the hostel."
      />
      <div className="mt-8">
        <VisitRequestForm initialHostelId={hostel} />
      </div>
    </div>
  );
}
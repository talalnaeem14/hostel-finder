import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShortlistProvider } from "@/components/ShortlistProvider";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HostelHub | Student Hostel Finder",
    template: "%s | HostelHub",
  },
  description: "Find, compare and shortlist student hostels near your campus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} flex min-h-screen flex-col bg-slate-50 text-slate-900`}
      >
        <ShortlistProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ShortlistProvider>
      </body>
    </html>
  );
}
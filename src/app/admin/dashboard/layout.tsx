import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback Admin",
  robots: { index: false, follow: false },
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

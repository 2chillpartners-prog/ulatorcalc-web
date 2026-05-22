import type { Metadata } from "next";
import { Suspense } from "react";
import AdminLoginForm from "./AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[70vh]" />}>
      <AdminLoginForm />
    </Suspense>
  );
}

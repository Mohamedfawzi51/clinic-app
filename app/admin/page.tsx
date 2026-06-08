import type { Metadata } from "next";
import { DemoBanner } from "../components/shared/DemoBanner";
import { AdminSideNav } from "../components/admin/AdminSideNav";
import { AdminHeader } from "../components/admin/AdminHeader";
import { AlertsSection } from "../components/admin/AlertsSection";
import { MetricsGrid } from "../components/admin/MetricsGrid";
import { ChartsSection } from "../components/admin/ChartsSection";
import { PerformanceSection } from "../components/admin/PerformanceSection";
import { AdminFooter } from "../components/admin/AdminFooter";

export const metadata: Metadata = {
  title: "شفا | لوحة تحكم المدير التحليلية",
  description: "مراجعة شاملة لأداء العيادة والمؤشرات المالية",
};

export default function AdminPage() {
  return (
    <>
      <DemoBanner />
      <AdminSideNav />
      <main className="min-h-screen bg-surface p-margin-mobile lg:mr-64 lg:p-margin-desktop">
        <AdminHeader />
        <AlertsSection />
        <MetricsGrid />
        <ChartsSection />
        <PerformanceSection />
      </main>
      <AdminFooter />
    </>
  );
}

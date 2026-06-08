import type { Metadata } from "next";
import { Info, Pill } from "lucide-react";
import { DemoBanner } from "../../components/shared/DemoBanner";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { SideNav } from "../../components/dashboard/SideNav";
import { DashboardFooter } from "../../components/dashboard/DashboardFooter";
import { MobileBottomNav } from "../../components/dashboard/MobileBottomNav";
import { prescriptions } from "../../lib/dashboard-data";

export const metadata: Metadata = {
  title: "وصفاتي الطبية | شفاء",
  description: "عرض الأدوية والوصفات الطبية النشطة",
};

export default function PrescriptionsPage() {
  return (
    <>
      <DemoBanner />
      <DashboardHeader />
      <div className="flex min-h-screen">
        <SideNav />
        <main className="w-full bg-background p-margin-mobile pb-24 md:pr-64 md:p-margin-desktop md:pb-stack-lg">
          <div className="mb-stack-lg text-right">
            <h1 className="font-headline text-headline-lg text-on-surface">
              وصفاتي الطبية
            </h1>
            <p className="text-body-md text-on-surface-variant">
              الأدوية النشطة والوصفات الصادرة من أطبائك
            </p>
          </div>
          <div className="clinical-shadow rounded-xl bg-white p-6">
            <h2 className="mb-6 flex items-center gap-2 text-headline-md">
              <Pill className="h-6 w-6 text-primary" />
              الأدوية النشطة
            </h2>
            <div className="space-y-3">
              {prescriptions.map((rx, i) => (
                <div
                  key={rx.name}
                  className={`group flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-surface-container-low ${
                    i < prescriptions.length - 1
                      ? "border-b border-outline-variant"
                      : ""
                  }`}
                >
                  <div>
                    <p className="font-bold text-on-background">{rx.name}</p>
                    <p className="text-sm text-on-surface-variant">{rx.dosage}</p>
                  </div>
                  <Info className="h-5 w-5 text-outline-variant group-hover:text-primary" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <DashboardFooter />
      <MobileBottomNav />
    </>
  );
}

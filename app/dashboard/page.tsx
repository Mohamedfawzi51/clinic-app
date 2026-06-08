import type { Metadata } from "next";
import { DemoBanner } from "../components/shared/DemoBanner";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { SideNav } from "../components/dashboard/SideNav";
import { WelcomeBanner } from "../components/dashboard/WelcomeBanner";
import { UpcomingAppointment } from "../components/dashboard/UpcomingAppointment";
import { PrescriptionsCard } from "../components/dashboard/PrescriptionsCard";
import { QuickLinks } from "../components/dashboard/QuickLinks";
import { DashboardFooter } from "../components/dashboard/DashboardFooter";
import { MobileBottomNav } from "../components/dashboard/MobileBottomNav";

export const metadata: Metadata = {
  title: "لوحة تحكم شفاء - شاشة المريض",
  description: "لوحة تحكم المريض في منصة شفاء للرعاية الصحية",
};

export default function DashboardPage() {
  return (
    <>
      <DemoBanner />
      <DashboardHeader />
      <div className="flex min-h-screen">
        <SideNav />
        <main className="flex w-full flex-col gap-stack-lg bg-background p-margin-mobile pb-24 md:pr-64 md:p-margin-desktop md:pb-stack-lg">
          <WelcomeBanner />
          <div className="grid grid-cols-1 gap-stack-lg lg:grid-cols-3">
            <UpcomingAppointment />
            <PrescriptionsCard />
          </div>
          <QuickLinks />
        </main>
      </div>
      <DashboardFooter />
      <MobileBottomNav />
    </>
  );
}

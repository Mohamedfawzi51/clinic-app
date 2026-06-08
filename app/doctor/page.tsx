import type { Metadata } from "next";
import { DemoBanner } from "../components/shared/DemoBanner";
import { DoctorSideNav } from "../components/doctor/DoctorSideNav";
import { DoctorHeader } from "../components/doctor/DoctorHeader";
import { StatsGrid } from "../components/doctor/StatsGrid";
import { ScheduleTimeline } from "../components/doctor/ScheduleTimeline";
import { SideWidgets } from "../components/doctor/SideWidgets";
import { DoctorFooter } from "../components/doctor/DoctorFooter";

export const metadata: Metadata = {
  title: "لوحة تحكم الطبيب | شفا",
  description: "لوحة تحكم الطبيب في منصة شفا للرعاية الصحية",
};

export default function DoctorPage() {
  return (
    <>
      <DemoBanner />
      <DoctorSideNav />
      <main className="min-h-screen p-margin-mobile lg:mr-64 lg:p-margin-desktop">
        <DoctorHeader />
        <StatsGrid />
        <div className="grid grid-cols-12 gap-gutter">
          <ScheduleTimeline />
          <SideWidgets />
        </div>
      </main>
      <DoctorFooter />
    </>
  );
}

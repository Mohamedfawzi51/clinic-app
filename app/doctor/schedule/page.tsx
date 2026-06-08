import type { Metadata } from "next";
import { DemoBanner } from "../../components/shared/DemoBanner";
import { DoctorSideNav } from "../../components/doctor/DoctorSideNav";
import { ScheduleTimeline } from "../../components/doctor/ScheduleTimeline";
import { DoctorFooter } from "../../components/doctor/DoctorFooter";

export const metadata: Metadata = {
  title: "جدول المواعيد | الطبيب",
  description: "جدول مواعيد اليوم",
};

export default function DoctorSchedulePage() {
  return (
    <>
      <DemoBanner />
      <DoctorSideNav />
      <main className="min-h-screen bg-background p-margin-mobile lg:mr-64 lg:p-margin-desktop">
        <div className="mb-stack-lg text-right">
          <h1 className="font-headline text-headline-lg text-on-surface">
            جدول المواعيد
          </h1>
          <p className="text-body-md text-on-surface-variant">
            إدارة مواعيد اليوم والمرضى
          </p>
        </div>
        <ScheduleTimeline />
      </main>
      <DoctorFooter />
    </>
  );
}

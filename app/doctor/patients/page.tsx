import type { Metadata } from "next";
import Image from "next/image";
import { Search, User } from "lucide-react";
import { DemoBanner } from "../../components/shared/DemoBanner";
import { DoctorSideNav } from "../../components/doctor/DoctorSideNav";
import { DoctorFooter } from "../../components/doctor/DoctorFooter";
import { appointments } from "../../lib/doctor-data";

export const metadata: Metadata = {
  title: "المرضى | الطبيب",
  description: "قائمة المرضى المسجلين",
};

export default function DoctorPatientsPage() {
  return (
    <>
      <DemoBanner />
      <DoctorSideNav />
      <main className="min-h-screen bg-background p-margin-mobile lg:mr-64 lg:p-margin-desktop">
        <div className="mb-stack-lg flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-right">
            <h1 className="font-headline text-headline-lg text-on-surface">
              المرضى
            </h1>
            <p className="text-body-md text-on-surface-variant">
              {appointments.length} مريض مسجل اليوم
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="البحث عن مريض..."
              className="w-full rounded-full border-none bg-surface-container py-2 pr-4 pl-10 text-right focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        <div className="bento-card space-y-3 p-6">
          {appointments.map((appt) => (
            <div
              key={appt.patientName}
              className="flex flex-row-reverse items-center gap-4 rounded-xl p-4 transition-colors hover:bg-surface-container-low"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-variant">
                {appt.image ? (
                  <Image
                    src={appt.image}
                    alt={appt.patientName}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-5 w-5 text-outline" />
                )}
              </div>
              <div className="flex-1 text-right">
                <h3 className="text-label-md font-bold">{appt.patientName}</h3>
                <p className="text-label-sm text-on-surface-variant">
                  {appt.reason}
                </p>
              </div>
              <span className="text-label-sm text-on-surface-variant">
                {appt.time}
              </span>
              <button
                type="button"
                className="rounded-lg bg-primary px-4 py-2 text-label-sm text-on-primary hover:opacity-90"
              >
                عرض الملف
              </button>
            </div>
          ))}
        </div>
      </main>
      <DoctorFooter />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { DemoBanner } from "../../components/shared/DemoBanner";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { SideNav } from "../../components/dashboard/SideNav";
import { DashboardFooter } from "../../components/dashboard/DashboardFooter";
import { MobileBottomNav } from "../../components/dashboard/MobileBottomNav";

export const metadata: Metadata = {
  title: "مواعيدي | شفاء",
  description: "عرض وإدارة مواعيدك الطبية",
};

const appointments = [
  {
    doctor: "د. أحمد علي",
    specialty: "استشاري جراحة العظام",
    date: "الاثنين، 24 مايو",
    time: "10:30 صباحاً",
    status: "مؤكد",
    statusClass: "bg-secondary-container text-on-secondary-container",
  },
  {
    doctor: "د. سارة محمود",
    specialty: "أخصائي طب الأطفال",
    date: "الخميس، 2 يونيو",
    time: "02:00 مساءً",
    status: "قادم",
    statusClass: "bg-primary-container text-on-primary-container",
  },
  {
    doctor: "د. خالد عيسى",
    specialty: "استشاري جراحة العظام",
    date: "15 أبريل 2024",
    time: "11:00 صباحاً",
    status: "مكتمل",
    statusClass: "bg-surface-variant text-on-surface-variant",
  },
];

export default function AppointmentsPage() {
  return (
    <>
      <DemoBanner />
      <DashboardHeader />
      <div className="flex min-h-screen">
        <SideNav />
        <main className="w-full bg-background p-margin-mobile pb-24 md:pr-64 md:p-margin-desktop md:pb-stack-lg">
          <div className="mb-stack-lg text-right">
            <h1 className="font-headline text-headline-lg text-on-surface">
              مواعيدي
            </h1>
            <p className="text-body-md text-on-surface-variant">
              عرض وإدارة جميع مواعيدك الطبية
            </p>
          </div>
          <div className="space-y-4">
            {appointments.map((appt) => (
              <div
                key={`${appt.doctor}-${appt.date}`}
                className="clinical-shadow flex flex-col gap-4 rounded-xl border border-outline-variant/30 bg-white p-6 md:flex-row md:items-center md:justify-between"
              >
                <div className="text-right">
                  <div
                    className={`mb-2 inline-block rounded-full px-3 py-1 text-label-sm ${appt.statusClass}`}
                  >
                    {appt.status}
                  </div>
                  <h3 className="font-headline text-headline-md text-primary">
                    {appt.doctor}
                  </h3>
                  <p className="text-label-md text-on-surface-variant">
                    {appt.specialty}
                  </p>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-label-md">{appt.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-label-md">{appt.time}</span>
                  </div>
                </div>
                {appt.status !== "مكتمل" && (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded-lg bg-primary px-4 py-2 text-label-md text-on-primary hover:opacity-90"
                    >
                      تعديل
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-outline px-4 py-2 text-label-md text-on-surface-variant hover:bg-surface-container"
                    >
                      إلغاء
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link
            href="/doctors"
            className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-label-md text-on-primary hover:opacity-90"
          >
            حجز موعد جديد
          </Link>
        </main>
      </div>
      <DashboardFooter />
      <MobileBottomNav />
    </>
  );
}

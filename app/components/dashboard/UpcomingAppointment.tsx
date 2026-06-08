import Image from "next/image";
import Link from "next/link";
import { BriefcaseMedical, Calendar, Clock } from "lucide-react";
import { DOCTOR_IMAGE } from "../../lib/dashboard-data";
import { routes } from "../../lib/routes";

export function UpcomingAppointment() {
  return (
    <div className="relative flex flex-col gap-6 rounded-xl border-r-4 border-primary bg-white p-6 shadow-soft lg:col-span-2">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="h-fit rounded-xl bg-secondary-container p-3 text-on-secondary-container">
            <BriefcaseMedical className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-headline text-headline-md text-on-background">
              موعدك القادم
            </h3>
            <p className="text-body-md text-on-surface-variant">
              مع الدكتور المختص
            </p>
          </div>
        </div>
        <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
          مؤكد
        </span>
      </div>
      <div className="flex flex-col items-center gap-8 rounded-xl bg-surface-container-low p-6 md:flex-row">
        <Image
          src={DOCTOR_IMAGE}
          alt="صورة الطبيب"
          width={96}
          height={96}
          className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-sm"
        />
        <div className="flex-grow space-y-1 text-center md:text-right">
          <h4 className="font-headline text-headline-md text-primary">
            د. أحمد علي
          </h4>
          <p className="text-label-md text-on-surface-variant">
            استشاري جراحة العظام والمفاصل
          </p>
          <div className="mt-4 flex justify-center gap-6 md:justify-start">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-label-sm">الاثنين، 24 مايو</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-label-sm">10:30 صباحاً</span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-auto">
          <Link
            href={routes.patient.appointments}
            className="rounded-lg bg-primary px-8 py-3 text-center text-label-md text-white shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
          >
            إدارة الموعد
          </Link>
          <button
            type="button"
            className="rounded-lg border border-outline bg-transparent px-8 py-3 text-label-md text-on-surface-variant transition-all hover:bg-surface-container active:scale-[0.98]"
          >
            إلغاء الموعد
          </button>
        </div>
      </div>
    </div>
  );
}

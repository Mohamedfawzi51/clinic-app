import Link from "next/link";
import { Info, Pill } from "lucide-react";
import { prescriptions } from "../../lib/dashboard-data";
import { routes } from "../../lib/routes";

export function PrescriptionsCard() {
  return (
    <div className="flex h-full flex-col gap-4 rounded-xl bg-white p-6 shadow-soft">
      <h3 className="font-headline flex items-center gap-2 text-headline-md">
        <Pill className="h-6 w-6 text-primary" />
        الأدوية النشطة
      </h3>
      <div className="mt-2 space-y-3">
        {prescriptions.map((rx, index) => (
          <div
            key={rx.name}
            className={`group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-surface-container-low ${
              index < prescriptions.length - 1
                ? "border-b border-outline-variant"
                : ""
            }`}
          >
            <div className="flex flex-col">
              <span className="font-bold text-on-background">{rx.name}</span>
              <span className="text-xs text-on-surface-variant">{rx.dosage}</span>
            </div>
            <Info className="h-5 w-5 text-outline-variant transition-colors group-hover:text-primary" />
          </div>
        ))}
      </div>
      <Link
        href={routes.patient.prescriptions}
        className="mt-auto self-end text-sm font-bold text-primary hover:underline"
      >
        عرض كافة الوصفات
      </Link>
    </div>
  );
}

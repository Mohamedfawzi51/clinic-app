"use client";

import Image from "next/image";
import { Play, User } from "lucide-react";
import { useState } from "react";
import { appointments, type AppointmentStatus } from "../../lib/doctor-data";

const statusStyles: Record<
  AppointmentStatus,
  { label: string; className: string } | null
> = {
  active: null,
  new: {
    label: "موعد جديد",
    className: "bg-secondary-container text-on-secondary-container",
  },
  review: {
    label: "مراجعة",
    className: "bg-surface-container-highest text-on-surface-variant",
  },
  urgent: {
    label: "عاجل",
    className: "bg-error-container text-on-error-container",
  },
  default: null,
};

export function ScheduleTimeline() {
  const [filter, setFilter] = useState<"all" | "waiting">("all");
  const [highlighted, setHighlighted] = useState<string | null>(null);

  return (
    <div className="bento-card col-span-12 p-6 lg:col-span-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-headline text-headline-md text-on-surface">
          جدول المواعيد اليوم
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-label-sm transition-all ${
              filter === "all"
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            الكل
          </button>
          <button
            type="button"
            onClick={() => setFilter("waiting")}
            className={`rounded-full px-4 py-1.5 text-label-sm transition-all ${
              filter === "waiting"
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            قيد الانتظار
          </button>
        </div>
      </div>
      <div className="custom-scrollbar max-h-[600px] space-y-4 overflow-y-auto pr-2">
        {appointments.map((appt) => {
          const status = statusStyles[appt.status];
          const isActive = appt.status === "active";
          const rowKey = `${appt.time}-${appt.patientName}`;

          return (
            <div
              key={rowKey}
              role="button"
              tabIndex={0}
              onClick={() => {
                setHighlighted(rowKey);
                setTimeout(() => setHighlighted(null), 300);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setHighlighted(rowKey);
                  setTimeout(() => setHighlighted(null), 300);
                }
              }}
              className={`group flex flex-row-reverse items-center gap-6 rounded-xl p-4 transition-all ${
                isActive
                  ? "relative border border-primary/20 bg-surface-container-low"
                  : "border border-transparent hover:bg-surface-container-low"
              } ${highlighted === rowKey ? "bg-primary-container/10" : ""}`}
            >
              {isActive && (
                <div className="absolute top-0 right-0 bottom-0 w-1 rounded-r-xl bg-primary" />
              )}
              <div className="w-16 shrink-0 text-left">
                <span
                  className={`text-label-md font-bold ${isActive ? "text-primary" : "text-on-surface-variant"}`}
                >
                  {appt.time}
                </span>
                {appt.now && (
                  <p className="text-[10px] text-on-surface-variant">الآن</p>
                )}
              </div>
              <div className="flex flex-1 flex-row-reverse items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-variant">
                  {appt.image ? (
                    <Image
                      src={appt.image}
                      alt={appt.patientName}
                      width={48}
                      height={48}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5 text-outline" />
                  )}
                </div>
                <div className="text-right">
                  <h4 className="text-label-md text-on-surface">
                    {appt.patientName}
                  </h4>
                  <p className="text-label-sm text-on-surface-variant">
                    {appt.reason}
                  </p>
                </div>
              </div>
              {isActive ? (
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-label-sm text-on-primary transition-all hover:opacity-90"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    بدء الاستشارة
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-outline-variant px-4 py-2 text-label-sm text-on-surface-variant transition-all hover:bg-surface-container-highest"
                  >
                    التاريخ الطبي
                  </button>
                </div>
              ) : (
                status && (
                  <div
                    className={`rounded-full px-3 py-1 text-[10px] font-bold ${status.className}`}
                  >
                    {status.label}
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

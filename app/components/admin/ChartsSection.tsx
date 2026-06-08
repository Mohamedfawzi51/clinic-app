"use client";

import { useState } from "react";
import { RevenueChart, SpecialtyChart } from "./AdminCharts";
import { specialtyChartData } from "../../lib/admin-data";

export function ChartsSection() {
  const [period, setPeriod] = useState("7");

  return (
    <section className="mb-stack-lg grid grid-cols-1 gap-stack-lg lg:grid-cols-3">
      <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm lg:col-span-2">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-headline text-headline-md text-on-surface">
            اتجاهات الإيرادات الأسبوعية
          </h3>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-lg border-none bg-surface-container-low text-label-sm outline-none"
          >
            <option value="7">آخر 7 أيام</option>
            <option value="30">آخر 30 يوم</option>
          </select>
        </div>
        <RevenueChart />
      </div>
      <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
        <h3 className="font-headline mb-6 text-headline-md text-on-surface">
          المواعيد حسب التخصص
        </h3>
        <SpecialtyChart />
        <div className="mt-4 grid grid-cols-2 gap-2 text-label-sm">
          {specialtyChartData.labels.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: specialtyChartData.colors[i] }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

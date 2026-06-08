"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { revenueChartData, specialtyChartData } from "../../lib/admin-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
);

export function RevenueChart() {
  return (
    <div className="h-[300px]">
      <Line
        data={{
          labels: revenueChartData.labels,
          datasets: [
            {
              label: "الإيرادات اليومية",
              data: revenueChartData.data,
              borderColor: "#003fa3",
              backgroundColor: "rgba(0, 63, 163, 0.1)",
              fill: true,
              tension: 0.4,
              borderWidth: 3,
              pointBackgroundColor: "#003fa3",
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: "#f1f5f9" },
            },
            x: { grid: { display: false } },
          },
        }}
      />
    </div>
  );
}

export function SpecialtyChart() {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <Doughnut
        data={{
          labels: specialtyChartData.labels,
          datasets: [
            {
              data: specialtyChartData.data,
              backgroundColor: specialtyChartData.colors,
              borderWidth: 0,
              hoverOffset: 10,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: "70%",
          plugins: { legend: { display: false } },
        }}
      />
    </div>
  );
}

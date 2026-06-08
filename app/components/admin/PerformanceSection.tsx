import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { operationRooms, topDoctors } from "../../lib/admin-data";

export function PerformanceSection() {
  return (
    <section className="grid grid-cols-1 gap-stack-lg lg:grid-cols-2">
      <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
        <h3 className="font-headline mb-6 text-headline-md text-on-surface">
          الأطباء الأكثر أداءً
        </h3>
        <div className="space-y-4">
          {topDoctors.map((doctor) => (
            <div
              key={doctor.name}
              className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-surface-container-low"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-label-md font-bold text-on-surface">
                    {doctor.name}
                  </p>
                  <p className="text-label-sm text-on-surface-variant">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-label-md font-bold text-primary">
                  {doctor.satisfaction}
                </p>
                <p className="text-label-sm text-on-surface-variant">
                  رضا المرضى
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-headline text-headline-md text-on-surface">
            حالة غرف العمليات
          </h3>
          <MoreVertical className="h-5 w-5 text-on-surface-variant" />
        </div>
        <table className="w-full text-right">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-container-low text-label-sm text-outline">
              <th className="px-2 py-3">رقم الغرفة</th>
              <th className="px-2 py-3">الحالة</th>
              <th className="px-2 py-3">الإجراء الحالي</th>
              <th className="px-2 py-3">الوقت المتبقي</th>
            </tr>
          </thead>
          <tbody className="text-label-md text-on-surface">
            {operationRooms.map((room) => (
              <tr
                key={room.room}
                className="border-b border-slate-100 transition-colors hover:bg-surface-container-lowest"
              >
                <td className="px-2 py-4 font-bold">{room.room}</td>
                <td className="px-2 py-4">
                  <span
                    className={`rounded px-2 py-1 text-[10px] ${room.statusClass}`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="px-2 py-4">{room.procedure}</td>
                <td className="px-2 py-4">{room.remaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

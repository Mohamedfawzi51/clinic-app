import { quickActions, recentReports, recoveryChartData } from "../../lib/doctor-data";

export function SideWidgets() {
  return (
    <div className="col-span-12 space-y-gutter lg:col-span-4">
      <div className="bento-card relative overflow-hidden bg-primary p-6 text-on-primary">
        <div className="relative z-10">
          <h3 className="font-headline mb-4 text-headline-md">روابط سريعة</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  type="button"
                  className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 transition-all hover:bg-white/20"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-label-sm">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="bento-card p-6">
        <h3 className="mb-4 text-label-md text-on-surface">
          آخر التقارير المستلمة
        </h3>
        <div className="space-y-4">
          {recentReports.map((report) => {
            const Icon = report.icon;
            return (
              <div
                key={report.title}
                className="flex cursor-pointer flex-row-reverse items-center justify-between rounded-lg p-3 transition-all hover:bg-surface-container"
              >
                <div className="flex flex-row-reverse items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-high">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="text-label-sm text-on-surface">{report.title}</p>
                    <p className="text-[10px] text-on-surface-variant">
                      مريض: {report.patient}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-on-surface-variant">
                  {report.time}
                </span>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="mt-4 w-full py-2 text-label-sm text-primary hover:underline"
        >
          عرض جميع التقارير
        </button>
      </div>

      <div className="bento-card flex h-48 flex-col p-6">
        <h3 className="mb-4 text-label-md text-on-surface">
          معدل شفاء المرضى هذا الأسبوع
        </h3>
        <div className="flex flex-1 items-end justify-center gap-2">
          {recoveryChartData.map((height, i) => (
            <div
              key={i}
              className={`w-4 rounded-t-sm ${height === 85 ? "bg-primary" : "bg-primary-fixed"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

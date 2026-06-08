import { Clock, TrendingUp } from "lucide-react";
import { stats } from "../../lib/doctor-data";

export function StatsGrid() {
  return (
    <div className="mb-stack-lg grid grid-cols-1 gap-gutter md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bento-card flex flex-col gap-2 border-r-4 p-6 ${stat.borderColor}`}
        >
          <span className="text-label-md text-on-surface-variant">
            {stat.label}
          </span>
          <div className="flex items-end justify-between">
            <span className="font-headline text-headline-lg text-on-surface">
              {stat.value}
            </span>
            {stat.progress !== undefined ? (
              <div className="h-2 w-16 overflow-hidden rounded-full bg-surface-container">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            ) : (
              <span
                className={`flex items-center gap-1 text-label-sm ${stat.metaColor}`}
              >
                {stat.metaIcon === "trending" && (
                  <TrendingUp className="h-4 w-4" />
                )}
                {stat.metaIcon === "clock" && <Clock className="h-4 w-4" />}
                {stat.meta}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

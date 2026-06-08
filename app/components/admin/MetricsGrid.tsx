import { Bed, CreditCard, Gauge, UserPlus } from "lucide-react";
import { metrics } from "../../lib/admin-data";

const metricIcons = {
  payments: CreditCard,
  bed: Bed,
  userAdd: UserPlus,
  pace: Gauge,
};

export function MetricsGrid() {
  return (
    <section className="mb-stack-lg grid grid-cols-1 gap-stack-md md:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metricIcons[metric.icon];
        return (
          <div
            key={metric.label}
            className={`group rounded-xl border-b-2 bg-white p-6 shadow-sm transition-all hover:shadow-md ${metric.borderColor}`}
          >
            <div className="mb-4 flex items-start justify-between">
              <div className={`rounded-lg p-2 ${metric.iconBg}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className={`text-label-md ${metric.changeColor}`}>
                {metric.change}
              </span>
            </div>
            <h4 className="text-label-md text-on-surface-variant">
              {metric.label}
            </h4>
            <p className="font-headline text-3xl font-bold text-on-surface">
              {metric.value}
            </p>
          </div>
        );
      })}
    </section>
  );
}

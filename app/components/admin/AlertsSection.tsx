import { Package, Users } from "lucide-react";
import { alerts } from "../../lib/admin-data";

const alertIcons = {
  error: Package,
  secondary: Users,
};

export function AlertsSection() {
  return (
    <section className="mb-stack-lg grid grid-cols-1 gap-stack-md md:grid-cols-2">
      {alerts.map((alert) => {
        const Icon = alertIcons[alert.type];
        const bgClass =
          alert.type === "error"
            ? "bg-error-container text-on-error-container border-error/10"
            : "bg-secondary-container text-on-secondary-container border-secondary/10";
        const btnClass =
          alert.type === "error"
            ? "bg-on-error-container text-white"
            : "bg-secondary text-on-secondary";

        return (
          <div
            key={alert.title}
            className={`flex items-center gap-4 rounded-xl border p-4 ${bgClass} ${alert.pulse ? "animate-pulse" : ""}`}
          >
            <Icon
              className={`h-8 w-8 shrink-0 ${alert.type === "error" ? "text-error" : "text-secondary"}`}
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{alert.title}</h3>
              <p className="text-body-md">{alert.description}</p>
            </div>
            <button
              type="button"
              className={`rounded-lg px-4 py-1 text-label-sm transition-opacity hover:opacity-90 ${btnClass}`}
            >
              {alert.action}
            </button>
          </div>
        );
      })}
    </section>
  );
}

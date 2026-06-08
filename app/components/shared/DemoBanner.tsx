import Link from "next/link";
import { routes } from "../../lib/routes";

const demoLinks = [
  { label: "الموقع", href: routes.home },
  { label: "مريض", href: routes.patient.dashboard },
  { label: "طبيب", href: routes.doctor.dashboard },
  { label: "مدير", href: routes.admin.analytics },
  { label: "تسجيل الدخول", href: routes.login },
];

export function DemoBanner() {
  return (
    <div className="flex flex-row-reverse items-center justify-between gap-4 bg-on-surface px-4 py-2 text-on-primary">
      <span className="text-label-sm font-bold">عرض تجريبي — منصة شفا</span>
      <div className="flex flex-wrap items-center gap-2">
        {demoLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full bg-white/10 px-3 py-1 text-[11px] transition-colors hover:bg-white/20"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

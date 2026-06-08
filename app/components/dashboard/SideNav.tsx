import Link from "next/link";
import { LogOut, Plus } from "lucide-react";
import { sidebarLinks } from "../../lib/dashboard-data";
import { routes } from "../../lib/routes";
import { ActiveLink } from "../shared/ActiveLink";

export function SideNav() {
  return (
    <aside className="fixed top-16 right-0 z-40 hidden h-[calc(100vh-64px)] w-64 flex-col border-l border-outline-variant bg-surface-container px-4 py-6 md:flex">
      <div className="flex grow flex-col gap-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <ActiveLink
              key={link.href}
              href={link.href}
              exact={link.href === routes.patient.dashboard}
              className="flex flex-row-reverse items-center gap-4 rounded-lg p-3 text-on-surface-variant transition-all hover:bg-surface-container-highest active:scale-[0.98]"
              activeClassName="bg-primary-container text-on-primary-container shadow-sm"
            >
              <Icon className="h-5 w-5" />
              <span className="text-label-md">{link.label}</span>
            </ActiveLink>
          );
        })}
      </div>
      <Link
        href={routes.doctors}
        className="mt-auto flex flex-row-reverse items-center justify-center gap-2 rounded-lg bg-primary p-3 text-label-md text-white transition-all hover:opacity-90 active:scale-[0.98]"
      >
        <Plus className="h-5 w-5" />
        <span>حجز موعد جديد</span>
      </Link>
      <div className="mt-6 border-t border-outline-variant pt-4">
        <Link
          href={routes.login}
          className="flex flex-row-reverse items-center gap-4 rounded-lg p-3 text-error transition-all hover:bg-error-container/20 active:scale-[0.98]"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-label-md">تسجيل الخروج</span>
        </Link>
      </div>
    </aside>
  );
}

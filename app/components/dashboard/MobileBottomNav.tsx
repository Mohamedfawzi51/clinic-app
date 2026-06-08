"use client";

import { Calendar, Home, Pill, UserCircle } from "lucide-react";
import { routes } from "../../lib/routes";
import { ActiveLink } from "../shared/ActiveLink";

const mobileNavItems = [
  { label: "الرئيسية", href: routes.patient.dashboard, icon: Home, exact: true },
  { label: "مواعيدي", href: routes.patient.appointments, icon: Calendar },
  { label: "الأدوية", href: routes.patient.prescriptions, icon: Pill },
  { label: "حسابي", href: routes.login, icon: UserCircle, exact: true },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 flex h-16 items-center justify-around border-t border-outline-variant bg-white md:hidden">
      {mobileNavItems.map((item) => {
        const Icon = item.icon;
        return (
          <ActiveLink
            key={item.href}
            href={item.href}
            exact={item.exact}
            className="flex flex-col items-center gap-1 text-on-surface-variant"
            activeClassName="text-primary font-bold"
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px]">{item.label}</span>
          </ActiveLink>
        );
      })}
    </nav>
  );
}

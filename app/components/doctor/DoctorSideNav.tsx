import Image from "next/image";
import Link from "next/link";
import { LogOut, Plus } from "lucide-react";
import {
  DOCTOR_AVATAR,
  DOCTOR_NAME,
  DOCTOR_TITLE,
  sidebarLinks,
} from "../../lib/doctor-data";
import { routes } from "../../lib/routes";
import { ActiveLink } from "../shared/ActiveLink";

export function DoctorSideNav() {
  return (
    <aside className="fixed top-10 right-0 z-40 hidden h-[calc(100vh-2.5rem)] w-64 flex-col border-l border-outline-variant bg-surface-container transition-all lg:flex">
      <div className="flex flex-col items-center gap-4 p-6">
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-primary p-1">
          <Image
            src={DOCTOR_AVATAR}
            alt={DOCTOR_NAME}
            width={80}
            height={80}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="font-headline text-headline-md text-primary">
            {DOCTOR_NAME}
          </h2>
          <p className="text-label-md text-on-surface-variant">{DOCTOR_TITLE}</p>
        </div>
      </div>
      <nav className="flex-1 space-y-2 px-4">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <ActiveLink
              key={link.href}
              href={link.href}
              exact={link.href === routes.doctor.dashboard}
              className="flex flex-row-reverse items-center gap-4 rounded-lg p-3 text-on-surface-variant transition-all hover:bg-surface-container-highest active:scale-95"
              activeClassName="bg-primary-container text-on-primary-container"
            >
              <Icon className="h-5 w-5" />
              <span className="text-label-md">{link.label}</span>
            </ActiveLink>
          );
        })}
      </nav>
      <div className="border-t border-outline-variant p-4">
        <Link
          href={routes.doctors}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-label-md text-on-primary shadow-sm transition-opacity hover:opacity-90"
        >
          <Plus className="h-5 w-5" />
          حجز موعد جديد
        </Link>
        <Link
          href={routes.login}
          className="mt-4 flex flex-row-reverse items-center gap-4 rounded-lg p-3 text-on-surface-variant transition-all hover:bg-surface-container-highest"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-label-md">تسجيل الخروج</span>
        </Link>
      </div>
    </aside>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import { headerNavLinks, PATIENT_AVATAR, PATIENT_NAME } from "../../lib/dashboard-data";
import { routes } from "../../lib/routes";
import { ActiveLink } from "../shared/ActiveLink";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full flex-row-reverse items-center justify-between bg-surface px-margin-mobile shadow-sm md:px-margin-desktop">
      <div className="flex items-center gap-4">
        <Link href={routes.home} className="font-headline text-xl font-bold text-primary">
          شفاء
        </Link>
      </div>
      <nav className="hidden flex-row-reverse items-center gap-8 md:flex">
        {headerNavLinks.map((link) => (
          <ActiveLink
            key={link.label}
            href={link.href}
            exact={link.href === routes.home}
            className="text-label-md text-on-surface-variant transition-all hover:text-primary"
            activeClassName="border-b-2 border-primary font-bold text-primary"
          >
            {link.label}
          </ActiveLink>
        ))}
      </nav>
      <div className="flex flex-row-reverse items-center gap-4">
        <button
          type="button"
          aria-label="الإشعارات"
          className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
        >
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 border-r border-outline-variant pr-4">
          <Image
            src={PATIENT_AVATAR}
            alt="ملف المستخدم"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-primary-container object-cover"
          />
          <span className="hidden text-label-md font-bold md:block">
            {PATIENT_NAME}
          </span>
        </div>
      </div>
    </header>
  );
}

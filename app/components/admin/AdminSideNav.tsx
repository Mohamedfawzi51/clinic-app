import Image from "next/image";
import Link from "next/link";
import { LogOut, Plus } from "lucide-react";
import { ADMIN_AVATAR, sidebarLinks } from "../../lib/admin-data";
import { routes } from "../../lib/routes";
import { ActiveLink } from "../shared/ActiveLink";

export function AdminSideNav() {
  return (
    <aside className="fixed top-10 right-0 z-40 hidden h-[calc(100vh-2.5rem)] w-64 flex-col border-l border-outline-variant bg-surface-container-low shadow-md lg:flex">
      <div className="flex flex-col items-center gap-stack-md border-b border-outline-variant p-stack-lg">
        <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary shadow-sm">
          <Image
            src={ADMIN_AVATAR}
            alt="د. أحمد علي"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="font-headline text-headline-md text-primary">د. أحمد علي</h2>
          <p className="text-label-md text-on-surface-variant opacity-80">
            مدير العيادة
          </p>
        </div>
      </div>
      <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <ActiveLink
              key={link.href}
              href={link.href}
              exact={link.href === routes.admin.analytics}
              className="flex flex-row-reverse items-center gap-4 rounded-lg p-3 text-on-surface-variant transition-all hover:bg-surface-container-highest"
              activeClassName="bg-primary-container text-on-primary-container shadow-sm font-bold"
            >
              <Icon className="h-5 w-5" />
              <span className="text-label-md">{link.label}</span>
            </ActiveLink>
          );
        })}
      </nav>
      <div className="mt-auto p-4">
        <Link
          href={routes.doctors}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-label-md text-on-primary transition-opacity hover:opacity-90 active:scale-95"
        >
          <Plus className="h-5 w-5" />
          <span>حجز موعد جديد</span>
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

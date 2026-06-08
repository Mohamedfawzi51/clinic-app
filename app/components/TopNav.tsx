import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import { navLinks, PROFILE_IMAGE } from "../lib/data";
import { routes } from "../lib/routes";
import { ActiveLink } from "./shared/ActiveLink";

export function TopNav() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full flex-row-reverse items-center justify-between bg-surface px-margin-mobile shadow-sm md:px-margin-desktop">
      <div className="flex items-center gap-6">
        <Link
          href={routes.home}
          className="font-headline text-xl font-bold text-primary md:text-headline-lg"
        >
          شفا
        </Link>
        <div className="hidden flex-row-reverse items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <ActiveLink
              key={link.label}
              href={link.href}
              exact={link.href === routes.home}
              className="text-label-md text-on-surface-variant transition-colors hover:text-primary"
              activeClassName="border-b-2 border-primary font-bold text-primary"
            >
              {link.label}
            </ActiveLink>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={routes.login}
          className="hidden rounded-lg bg-primary px-4 py-2 text-label-sm text-on-primary hover:opacity-90 md:block"
        >
          دخول
        </Link>
        <button
          type="button"
          aria-label="الإشعارات"
          className="rounded-full p-2 text-on-surface-variant transition-all hover:text-primary"
        >
          <Bell className="h-5 w-5" />
        </button>
        <Link href={routes.patient.dashboard}>
          <div className="h-10 w-10 overflow-hidden rounded-full border border-outline-variant bg-surface-container">
            <Image
              src={PROFILE_IMAGE}
              alt="ملف المستخدم"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}

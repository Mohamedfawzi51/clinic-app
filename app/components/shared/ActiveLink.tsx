"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
};

export function ActiveLink({
  href,
  children,
  className = "",
  activeClassName = "",
  exact = false,
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`.trim()}
    >
      {children}
    </Link>
  );
}

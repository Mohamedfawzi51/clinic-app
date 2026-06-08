import Link from "next/link";
import { Search } from "lucide-react";
import { routes } from "../lib/routes";

export function FabSearch() {
  return (
    <Link
      href={routes.doctors}
      aria-label="بحث سريع"
      className="fixed bottom-8 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg transition-all hover:scale-105 active:scale-95 md:hidden"
    >
      <Search className="h-6 w-6" />
    </Link>
  );
}

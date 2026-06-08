import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { quickLinks } from "../../lib/dashboard-data";

export function QuickLinks() {
  return (
    <section className="grid grid-cols-1 gap-stack-lg md:grid-cols-2 lg:grid-cols-3">
      {quickLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`group relative flex items-center justify-between rounded-xl border-b-4 border-transparent bg-white p-6 shadow-soft transition-all hover:shadow-md active:scale-[0.98] ${link.hoverBorder}`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`rounded-full p-3 transition-colors group-hover:text-white ${link.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="font-headline text-headline-md">{link.label}</span>
            </div>
            <ChevronLeft className="h-5 w-5 text-outline-variant transition-transform group-hover:translate-x-2" />
          </Link>
        );
      })}
    </section>
  );
}

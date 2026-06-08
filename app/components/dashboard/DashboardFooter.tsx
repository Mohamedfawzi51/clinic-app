import Link from "next/link";
import { footerLinks } from "../../lib/dashboard-data";

export function DashboardFooter() {
  return (
    <footer className="flex w-full flex-col items-center gap-stack-md border-t border-outline-variant bg-surface-container-highest px-margin-mobile py-stack-lg text-right md:px-margin-desktop">
      <div className="mb-4 flex flex-wrap justify-center gap-8">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-body-md text-on-surface-variant underline transition-colors duration-200 hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="text-body-md text-on-surface-variant">
        جميع الحقوق محفوظة لمنصة شفاء © 2024
      </p>
    </footer>
  );
}

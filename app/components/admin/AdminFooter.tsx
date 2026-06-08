import Link from "next/link";
import { footerLinks } from "../../lib/admin-data";

export function AdminFooter() {
  return (
    <footer className="flex flex-col items-center gap-stack-md border-t border-outline-variant bg-surface-container-highest px-margin-mobile py-stack-lg text-right md:px-margin-desktop lg:mr-64">
      <h2 className="font-headline text-headline-md font-bold text-primary">شفا</h2>
      <div className="flex flex-wrap justify-center gap-gutter">
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
      <p className="text-body-md text-on-surface-variant opacity-70">
        جميع الحقوق محفوظة لمنصة شفا © 2024
      </p>
    </footer>
  );
}

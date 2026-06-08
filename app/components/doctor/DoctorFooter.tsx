import Link from "next/link";
import { footerLinks } from "../../lib/doctor-data";

export function DoctorFooter() {
  return (
    <footer className="flex flex-col items-center gap-stack-md border-t border-outline-variant bg-surface-container-highest px-margin-mobile py-stack-lg text-right md:px-margin-desktop lg:mr-64">
      <div className="mb-4 flex flex-row-reverse flex-wrap justify-center gap-8">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-body-md text-on-surface-variant transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="text-body-md text-on-surface-variant">
        جميع الحقوق محفوظة لمنصة شفا © 2024
      </p>
      <div className="font-headline text-headline-md font-bold text-primary">
        Shifa
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Mail, Phone, Share2 } from "lucide-react";
import { routes } from "../lib/routes";

const quickLinks = [
  { label: "عن المنصة", href: routes.about },
  { label: "ابحث عن طبيب", href: routes.doctors },
  { label: "انضم كطبيب", href: routes.doctor.dashboard },
];

const supportLinks = [
  { label: "سياسة الخصوصية", href: routes.about },
  { label: "شروط الاستخدام", href: routes.about },
  { label: "الأسئلة الشائعة", href: `${routes.about}#faq` },
];

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-stack-md border-t border-outline-variant bg-surface-container-highest px-margin-mobile py-stack-lg text-right md:px-margin-desktop">
      <div className="mb-stack-lg grid w-full grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4 text-right">
          <span className="font-headline text-headline-md font-bold text-primary">
            شفا
          </span>
          <p className="text-body-md text-on-surface-variant">
            منصة شفا هي شريكك الموثوق في رحلة البحث عن أفضل رعاية صحية في
            منطقتك.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <h4 className="text-label-md font-bold text-on-surface">روابط سريعة</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-body-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <h4 className="text-label-md font-bold text-on-surface">الدعم</h4>
          <ul className="flex flex-col gap-2">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-body-md text-on-surface-variant transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <h4 className="text-label-md font-bold text-on-surface">تواصل معنا</h4>
          <div className="flex flex-row-reverse gap-4">
            <a
              href="mailto:hello@shifa.app"
              aria-label="البريد الإلكتروني"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+966110000000"
              aria-label="الهاتف"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Link
              href={routes.login}
              aria-label="مشاركة"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
            >
              <Share2 className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-outline-variant pt-stack-md text-center">
        <p className="text-body-md text-on-surface-variant">
          جميع الحقوق محفوظة لمنصة شفا © 2024
        </p>
      </div>
    </footer>
  );
}

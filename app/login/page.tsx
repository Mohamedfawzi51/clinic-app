import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Stethoscope } from "lucide-react";
import { demoRoles } from "../lib/routes";

export const metadata: Metadata = {
  title: "تسجيل الدخول | شفا",
  description: "اختر نوع الحساب للدخول إلى منصة شفا",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-bl from-surface-container-high to-background">
      <header className="flex flex-row-reverse items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
        <Link href="/" className="font-headline text-2xl font-bold text-primary">
          شفا
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-label-md text-on-surface-variant hover:text-primary"
        >
          العودة للموقع
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-margin-mobile pb-16">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary">
            <Stethoscope className="h-8 w-8" />
          </div>
          <h1 className="font-headline mb-3 text-headline-lg text-on-surface">
            مرحباً بك في شفا
          </h1>
          <p className="max-w-md text-body-md text-on-surface-variant">
            اختر نوع الحساب لاستكشاف لوحة التحكم المناسبة. هذا عرض تجريبي لمنصة
            حجز المواعيد الطبية.
          </p>
        </div>
        <div className="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
          {demoRoles.map((role) => (
            <Link
              key={role.id}
              href={role.href}
              className="group clinical-shadow flex flex-col items-center rounded-xl border border-outline-variant/30 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:border-primary"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white ${role.color}`}
              >
                <Stethoscope className="h-7 w-7" />
              </div>
              <h2 className="font-headline mb-2 text-headline-md text-on-surface">
                {role.title}
              </h2>
              <p className="mb-6 text-body-md text-on-surface-variant">
                {role.description}
              </p>
              <span className="rounded-lg bg-primary px-6 py-2 text-label-md text-on-primary transition-opacity group-hover:opacity-90">
                دخول
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

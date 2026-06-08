import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Shield, Users } from "lucide-react";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { faqs } from "../lib/data";
import { routes } from "../lib/routes";

export const metadata: Metadata = {
  title: "عن شفا | منصة الرعاية الصحية",
  description: "تعرف على منصة شفا لحجز المواعيد الطبية",
};

const values = [
  {
    icon: Heart,
    title: "رعاية إنسانية",
    description: "نضع صحة المريض في مقدمة أولوياتنا دائماً",
  },
  {
    icon: Shield,
    title: "موثوقية طبية",
    description: "جميع الأطباء مرخصون ومُراجعون بعناية",
  },
  {
    icon: Users,
    title: "تجربة سلسة",
    description: "حجز ومتابعة المواعيد بخطوات بسيطة",
  },
];

export default function AboutPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-bl from-surface-container-high to-background px-margin-mobile py-16 text-center md:px-margin-desktop">
          <h1 className="font-headline mb-4 text-display-lg text-on-surface">
            عن <span className="text-primary">شفا</span>
          </h1>
          <p className="mx-auto max-w-2xl text-body-lg text-on-surface-variant">
            منصة شفا هي شريكك الموثوق في رحلة البحث عن أفضل رعاية صحية. نربط
            المرضى بأفضل الأطباء ونوفر أدوات إدارية متكاملة للعيادات.
          </p>
          <Link
            href={routes.login}
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-label-md text-on-primary hover:opacity-90"
          >
            جرّب العرض التجريبي
          </Link>
        </section>
        <section className="px-margin-mobile py-stack-lg md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="clinical-shadow rounded-xl bg-white p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container/20 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-headline mb-2 text-headline-md">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        <section
          id="faq"
          className="bg-surface-container-low px-margin-mobile py-stack-lg md:px-margin-desktop"
        >
          <h2 className="font-headline mb-8 text-center text-headline-lg">
            الأسئلة الشائعة
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="clinical-shadow rounded-xl border border-slate-100 bg-white open:border-primary"
              >
                <summary className="cursor-pointer p-5 text-label-md font-medium">
                  {faq.question}
                </summary>
                <p className="px-5 pb-5 text-body-md text-on-surface-variant">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

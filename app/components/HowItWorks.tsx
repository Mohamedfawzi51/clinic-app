import { BriefcaseMedical, CalendarCheck, Search } from "lucide-react";
import { howItWorksSteps } from "../lib/data";

const stepIcons = {
  search: Search,
  calendar: CalendarCheck,
  medical: BriefcaseMedical,
};

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-stack-lg">
      <div className="container mx-auto px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="font-headline mb-16 text-headline-lg-mobile text-on-surface md:text-headline-lg">
          كيف يعمل شفا؟
        </h2>
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="absolute top-1/2 left-0 z-0 hidden h-1 w-full -translate-y-1/2 bg-slate-100 md:block" />
          {howItWorksSteps.map((step) => {
            const Icon = stepIcons[step.icon];
            return (
              <div
                key={step.title}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-lg ${step.color} ${step.shadow} ${step.textColor ?? "text-on-primary"}`}
                >
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="font-headline mb-3 text-headline-md">
                  {step.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

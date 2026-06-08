import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { specialties } from "../lib/data";
import { routes } from "../lib/routes";

export function PopularSpecialties() {
  return (
    <section className="bg-surface py-stack-lg">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-stack-lg flex flex-row-reverse items-center justify-between">
          <h2 className="font-headline text-headline-lg-mobile text-on-surface md:text-headline-lg">
            أشهر التخصصات
          </h2>
          <Link
            href={routes.doctors}
            className="flex items-center gap-1 text-label-md text-primary hover:underline"
          >
            عرض الكل
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <Link
                key={specialty.name}
                href={routes.doctors}
                className="group clinical-shadow block cursor-pointer rounded-xl border border-transparent bg-surface-container-low p-6 text-center transition-all hover:border-primary hover:bg-white"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-label-md text-on-surface">{specialty.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

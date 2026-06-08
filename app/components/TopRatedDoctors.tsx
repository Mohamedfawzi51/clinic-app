import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { doctors } from "../lib/data";
import { routes } from "../lib/routes";

export function TopRatedDoctors() {
  return (
    <section className="bg-surface-container-low py-stack-lg">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-stack-lg text-right">
          <h2 className="font-headline text-headline-lg-mobile text-on-surface md:text-headline-lg">
            أفضل الأطباء تقييماً
          </h2>
          <p className="text-body-md text-on-surface-variant">
            اختر من بين نخبة الأطباء بناءً على تقييمات المرضى
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group clinical-shadow flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-white transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-row-reverse gap-6 p-6">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-primary-container">
                  <Image
                    src={doctor.image}
                    alt="صورة الطبيب"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 text-right">
                  <div className="mb-2 inline-block rounded-full bg-secondary-container px-3 py-1 text-label-sm text-on-secondary-container">
                    {doctor.availability}
                  </div>
                  <h3 className="font-headline mb-1 text-headline-md text-on-surface">
                    {doctor.name}
                  </h3>
                  <p className="mb-2 text-label-md text-primary">
                    {doctor.specialty}
                  </p>
                  <div className="flex flex-row-reverse items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-label-md">
                      {doctor.rating} ({doctor.reviews} تقييم)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 px-6 pt-4 pb-6">
                <span className="text-label-md text-on-surface-variant">
                  الكشف: {doctor.price} ج.م
                </span>
                <Link
                  href={routes.patient.dashboard}
                  className="rounded-lg bg-primary px-6 py-2 text-label-md text-on-primary transition-colors hover:bg-primary-container"
                >
                  احجز الآن
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

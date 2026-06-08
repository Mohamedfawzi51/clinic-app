import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search, Star } from "lucide-react";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { doctors, specialties } from "../lib/data";
import { routes } from "../lib/routes";

export const metadata: Metadata = {
  title: "الأطباء | شفا",
  description: "ابحث عن أفضل الأطباء واحجز موعدك",
};

export default function DoctorsPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-background px-margin-mobile py-stack-lg md:px-margin-desktop">
        <div className="mb-stack-lg text-right">
          <h1 className="font-headline mb-2 text-headline-lg text-on-surface">
            دليل الأطباء
          </h1>
          <p className="text-body-md text-on-surface-variant">
            تصفح الأطباء حسب التخصص واحجز موعدك مباشرة
          </p>
        </div>
        <div className="mb-stack-lg flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="ابحث عن طبيب أو تخصص..."
              className="w-full rounded-lg border border-outline-variant bg-white py-3 pr-12 pl-4 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <select className="rounded-lg border border-outline-variant bg-white px-4 py-3 text-label-md md:w-48">
            <option>كل التخصصات</option>
            {specialties.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="clinical-shadow flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-white transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-row-reverse gap-4 p-6">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full border-2 border-primary-container object-cover"
                />
                <div className="flex-1 text-right">
                  <h3 className="font-headline text-headline-md">{doctor.name}</h3>
                  <p className="text-label-md text-primary">{doctor.specialty}</p>
                  <div className="mt-2 flex flex-row-reverse items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-label-md">
                      {doctor.rating} ({doctor.reviews} تقييم)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
                <span className="text-label-md text-on-surface-variant">
                  الكشف: {doctor.price} ج.م
                </span>
                <Link
                  href={routes.patient.dashboard}
                  className="rounded-lg bg-primary px-5 py-2 text-label-md text-on-primary hover:opacity-90"
                >
                  احجز الآن
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

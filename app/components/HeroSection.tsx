import Link from "next/link";
import { MapPin, Search, Stethoscope, UserSearch } from "lucide-react";
import { routes } from "../lib/routes";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden pt-16 pb-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-bl from-surface-container-high to-background" />
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #003fa3 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 container mx-auto px-margin-mobile text-center md:px-margin-desktop">
        <h1 className="font-headline mx-auto mb-6 max-w-3xl text-display-lg text-on-surface">
          رعايتك الصحية تبدأ <span className="text-primary">ببحث بسيط</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-body-lg text-on-surface-variant">
          احجز موعدك الآن مع أفضل الأطباء في مختلف التخصصات. منصة شفا توفر لك
          تجربة سلسة للبحث والحجز والمتابعة.
        </p>
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-4 rounded-xl border border-outline-variant/30 bg-surface p-4 shadow-md md:flex-row">
          <SearchField
            label="التخصص"
            placeholder="ابحث عن التخصص..."
            icon={<Stethoscope className="h-5 w-5 text-outline" />}
          />
          <SearchField
            label="اسم الطبيب"
            placeholder="اسم الطبيب..."
            icon={<UserSearch className="h-5 w-5 text-outline" />}
          />
          <SearchField
            label="الموقع"
            placeholder="المدينة أو الحي..."
            icon={<MapPin className="h-5 w-5 text-outline" />}
          />
          <div className="flex items-end md:w-48">
            <Link
              href={routes.doctors}
              className="flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-primary text-label-md text-on-primary transition-all hover:opacity-90"
            >
              <span>ابحث الآن</span>
              <Search className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchField({
  label,
  placeholder,
  icon,
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex-1 text-right">
      <label className="mb-2 block text-label-sm text-outline">{label}</label>
      <div className="relative">
        <span className="absolute top-1/2 right-3 -translate-y-1/2">{icon}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-lg border border-slate-200 bg-surface-container-low py-3 pr-12 pl-4 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
}

import { PATIENT_NAME } from "../../lib/dashboard-data";

export function WelcomeBanner() {
  return (
    <section className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-l from-primary to-primary-container p-8 text-white md:flex-row md:p-10">
      <div className="relative z-10 space-y-2 text-center md:text-right">
        <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg">
          مرحباً، {PATIENT_NAME}
        </h2>
        <p className="text-body-md text-white/90">
          نتمنى لك يوماً مليئاً بالصحة والعافية. لديك موعد واحد اليوم.
        </p>
      </div>
      <div className="relative z-10 flex gap-4">
        <StatCard value="12" label="إجمالي الزيارات" />
        <StatCard value="3" label="أدوية فعالة" />
      </div>
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[120px] rounded-lg bg-white/10 p-4 text-center backdrop-blur-md">
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm opacity-80">{label}</p>
    </div>
  );
}

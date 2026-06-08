import { Bell } from "lucide-react";
import { SearchBar } from "./SearchBar";

export function DoctorHeader() {
  return (
    <header className="mb-stack-lg flex flex-row-reverse items-center justify-between">
      <div className="flex flex-row-reverse items-center gap-4">
        <div className="relative">
          <button
            type="button"
            aria-label="الإشعارات"
            className="p-2 text-on-surface-variant transition-colors hover:text-primary"
          >
            <Bell className="h-5 w-5" />
          </button>
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-error" />
        </div>
        <div className="mx-2 h-8 w-px bg-outline-variant" />
        <div className="text-right">
          <h1 className="font-headline text-headline-md text-on-surface">
            مرحباً بك مجدداً، د. أحمد
          </h1>
          <p className="text-body-md text-on-surface-variant">
            اليوم هو الثلاثاء، 24 أكتوبر 2024
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <SearchBar />
      </div>
    </header>
  );
}

import { Bell, Calendar } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="mb-stack-lg flex flex-row-reverse items-center justify-between">
      <div>
        <h1 className="font-headline text-headline-lg text-on-surface">
          التحليلات والأداء
        </h1>
        <p className="text-body-md text-on-surface-variant">
          مراجعة شاملة لأداء العيادة والمؤشرات المالية
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="الإشعارات"
          className="relative rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full border-2 border-surface bg-error" />
        </button>
        <div className="flex items-center gap-stack-md rounded-full border border-outline-variant bg-surface-container-high px-4 py-2">
          <span className="text-label-md text-primary">نوفمبر 2024</span>
          <Calendar className="h-5 w-5 text-primary" />
        </div>
      </div>
    </header>
  );
}

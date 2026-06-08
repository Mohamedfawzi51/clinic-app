import type { Metadata } from "next";
import { DemoBanner } from "../../components/shared/DemoBanner";
import { AdminSideNav } from "../../components/admin/AdminSideNav";
import { AdminFooter } from "../../components/admin/AdminFooter";

export const metadata: Metadata = {
  title: "الإعدادات | شفا",
  description: "إعدادات العيادة والنظام",
};

export default function AdminSettingsPage() {
  return (
    <>
      <DemoBanner />
      <AdminSideNav />
      <main className="min-h-screen bg-surface p-margin-mobile lg:mr-64 lg:p-margin-desktop">
        <div className="mb-stack-lg text-right">
          <h1 className="font-headline text-headline-lg text-on-surface">
            الإعدادات
          </h1>
          <p className="text-body-md text-on-surface-variant">
            إدارة إعدادات العيادة والتنبيهات
          </p>
        </div>
        <div className="max-w-2xl space-y-6">
          <SettingsSection title="معلومات العيادة">
            <Field label="اسم العيادة" defaultValue="عيادة شفا الطبية" />
            <Field label="العنوان" defaultValue="الرياض، المملكة العربية السعودية" />
            <Field label="رقم التواصل" defaultValue="+966 11 000 0000" />
          </SettingsSection>
          <SettingsSection title="التنبيهات">
            <Toggle label="تنبيهات المخزون المنخفض" defaultChecked />
            <Toggle label="تنبيهات نقص الموظفين" defaultChecked />
            <Toggle label="تقارير الإيرادات الأسبوعية" />
          </SettingsSection>
          <button
            type="button"
            className="rounded-lg bg-primary px-8 py-3 text-label-md text-on-primary hover:opacity-90"
          >
            حفظ التغييرات
          </button>
        </div>
      </main>
      <AdminFooter />
    </>
  );
}

function SettingsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-sm">
      <h2 className="font-headline mb-4 text-headline-md">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <div className="text-right">
      <label className="mb-1 block text-label-sm text-on-surface-variant">
        {label}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-right focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function Toggle({
  label,
  defaultChecked,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex flex-row-reverse items-center justify-between gap-4">
      <span className="text-label-md">{label}</span>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
      />
    </label>
  );
}

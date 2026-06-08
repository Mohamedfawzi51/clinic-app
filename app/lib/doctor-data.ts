import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Calendar,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  ScrollText,
  FlaskConical,
  ClipboardList,
  Video,
  FileText,
  ImageIcon,
} from "lucide-react";
import { routes } from "./routes";

export const DOCTOR_NAME = "د. أحمد علي";
export const DOCTOR_TITLE = "استشاري جراحة";
export const DOCTOR_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvy2K5dVB0nZVlP5802VIhHmyToYoJSVai5H7b3WU07vNlTscp5awJJ2WLukiKuEJqTGsoNb4ddhFlxFwr0aM-aoiknqELUF_3Q2q3EGmZsEiQEuKoUCV7PCWJA1OQ0UwPs-0yrPK1dnt9p7i_4-CH_5utmNtmK01gJJ-qGUml6dPjEHkGZejY8G5yns5TuJvSHqMUSdMPDVrrhQJfVVNwzaUSEzs2jk0iwezYCZBORcgwj_sfRxZBRk3mEHfhX5b_qPFZAcro9vi4";

export const sidebarLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: "لوحة التحكم", href: routes.doctor.dashboard, icon: LayoutDashboard },
  { label: "جدول المواعيد", href: routes.doctor.schedule, icon: Calendar },
  { label: "المرضى", href: routes.doctor.patients, icon: Users },
  { label: "التقارير", href: routes.admin.analytics, icon: BarChart3 },
  { label: "الإعدادات", href: routes.admin.settings, icon: Settings },
  { label: "المساعدة", href: routes.about, icon: HelpCircle },
];

export const stats = [
  {
    label: "مرضى اليوم",
    value: "24",
    meta: "12%+",
    metaIcon: "trending" as const,
    metaColor: "text-secondary",
    borderColor: "border-primary",
  },
  {
    label: "متوسط الانتظار",
    value: "15 د",
    meta: "مستقر",
    metaIcon: "clock" as const,
    metaColor: "text-error",
    borderColor: "border-secondary",
  },
  {
    label: "الموعد القادم",
    value: "10:30 ص",
    meta: "خلال 12 د",
    metaColor: "text-primary",
    borderColor: "border-tertiary",
  },
  {
    label: "العمليات المنجزة",
    value: "18 / 24",
    progress: 75,
    borderColor: "border-outline",
  },
];

export type AppointmentStatus =
  | "active"
  | "new"
  | "review"
  | "urgent"
  | "default";

export const appointments: {
  time: string;
  now?: boolean;
  patientName: string;
  reason: string;
  status: AppointmentStatus;
  image?: string;
}[] = [
  {
    time: "10:30 ص",
    now: true,
    patientName: "سارة محمد الخالدي",
    reason: "مراجعة دورية - جراحة عامة",
    status: "active",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDirv28r-kPnjXnj1j0szpKNGYb9KJTeVpy6InhjG5tdYNi--B0iDTgTDTXIaffrPQfujz17H2LmnJvbl_mgkiC5l3nfFPSYpFN3O6PXf1JS6bxMU7YwH5pXgsgu358HKxPioQ6LCBut9WxtiR3UmOZ_jtEriut_4cAS9b9e26d1vcXQVT_dtjQ4tFZa_3OryY2xxlQ5BAycZowssqrMJK6CiHkGTQu9Ac_1QK2H0ZXDFc0a25cmfUCJzwnsORDCkI1ybEKScFt72lq",
  },
  {
    time: "11:00 ص",
    patientName: "عبد الله ناصر الشمري",
    reason: "ألم مزمن في المعدة",
    status: "new",
  },
  {
    time: "11:30 ص",
    patientName: "فاطمة علي سعيد",
    reason: "تغيير ضماد الجرح",
    status: "review",
  },
  {
    time: "12:15 م",
    patientName: "ياسر فهد القحطاني",
    reason: "استشارة طارئة",
    status: "urgent",
  },
];

export const quickActions: { label: string; icon: LucideIcon }[] = [
  { label: "الوصفات", icon: ScrollText },
  { label: "التحاليل", icon: FlaskConical },
  { label: "التقارير", icon: ClipboardList },
  { label: "عن بعد", icon: Video },
];

export const recentReports = [
  {
    title: "نتائج مختبر الدم",
    patient: "فهد راشد",
    time: "منذ 10د",
    icon: FileText,
  },
  {
    title: "أشعة سينية (X-Ray)",
    patient: "ليلى حسن",
    time: "منذ ساعة",
    icon: ImageIcon,
  },
];

export const recoveryChartData = [40, 60, 45, 85, 55, 70, 65];

export const footerLinks = [
  { label: "سياسة الخصوصية", href: routes.about },
  { label: "شروط الاستخدام", href: routes.about },
  { label: "اتصل بنا", href: routes.about },
  { label: "الأسئلة الشائعة", href: `${routes.about}#faq` },
];

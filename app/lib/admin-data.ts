import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Calendar,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
} from "lucide-react";
import { routes } from "./routes";

export const ADMIN_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDe5-aI3h0mUMJqVkr3gsbix-2eDzcJrSK-U50NYKdllUWjDqggh2_HRz7X5hUANTcJbVPR7ccz9dW85nd3P3F-5iL_PJQrhJJ-EnISPChke1Ev1OqTsuSGVYSCIOfJa9S2GOWYRcS-LUPQyzzcMyMm00Kr5sWt0rd1yKYtU-b4u-NKHF5SfD_mnLeX7DubCNIEGpsS_I8Z5ntJ7QsrQtOdEBHxflL61zRZlkUiz7ai6fihCe-sR6Oma0L4obQlG6SCJuY9zxlJfTpB";

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

export const alerts = [
  {
    type: "error" as const,
    title: "تنبيه: مخزون منخفض",
    description: "الأدوات المعقمة والمستهلكات الجراحية تحت مستوى الحد الأدنى.",
    action: "طلب الآن",
    pulse: true,
  },
  {
    type: "secondary" as const,
    title: "تنبيه: نقص في طاقم التمريض",
    description: "نقص في الموارد البشرية لنوبة المساء في قسم الطوارئ.",
    action: "تعديل الجدول",
    pulse: false,
  },
];

export const metrics = [
  {
    label: "إجمالي الإيرادات",
    value: "245,800 ر.س",
    change: "+12.5%",
    changeColor: "text-secondary",
    borderColor: "border-primary",
    iconBg: "bg-primary-fixed text-primary",
    icon: "payments" as const,
  },
  {
    label: "معدل الإشغال",
    value: "88%",
    change: "-2.1%",
    changeColor: "text-error",
    borderColor: "border-secondary",
    iconBg: "bg-secondary-container text-on-secondary-container",
    icon: "bed" as const,
  },
  {
    label: "مرضى جدد",
    value: "142",
    change: "+8.3%",
    changeColor: "text-secondary",
    borderColor: "border-tertiary-container",
    iconBg: "bg-tertiary-fixed text-tertiary",
    icon: "userAdd" as const,
  },
  {
    label: "متوسط الانتظار",
    value: "18 د",
    change: "+1.4%",
    changeColor: "text-secondary",
    borderColor: "border-outline-variant",
    iconBg: "bg-surface-variant text-on-surface-variant",
    icon: "pace" as const,
  },
];

export const revenueChartData = {
  labels: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
  data: [12000, 19000, 15000, 22000, 24000, 21000, 18000],
};

export const specialtyChartData = {
  labels: ["الباطنية", "الجراحة", "الأطفال", "أخرى"],
  data: [35, 25, 20, 20],
  colors: ["#003fa3", "#006a6a", "#aa3700", "#737686"],
};

export const topDoctors = [
  {
    name: "د. سارة خالد",
    specialty: "استشاري باطنية",
    satisfaction: "98%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJri6PM_qQSg2Ij3V2c3L39hcqkEtni89wBnb0xzyHDzHCLqUXjPOJ4-nCODsrN1TKqqjcpT1EB1uPqQpcqSC7sZyIgTBpcWl2spLkFsiaf1bFAmWyCYG7dRmVYY_WIjssKQq1s6MdKY_aWKuToNsHbtrAQIZ2lO-Mr7aPRR4DGjhxctw9ULLuGMk0K_IvgFcSdim2ToqOQ5Xz5FQnMuB6mmFpsysuAMhHbjeoJj2DgN62mlwQv0eaF6dA-7Ya7DON19PfS3CsGasU",
  },
  {
    name: "د. فهد الجاسر",
    specialty: "استشاري أطفال",
    satisfaction: "94%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbCLKbM5dlmWF3nvqwdRt-3alZZ3TqE7DPbDu65CTLeTSO07Ut5NYBsupA3d2wKjpm8908UQI0jQQgm8qphE9UwXyOasicvFQP07BJYSxkSt6rCpqAcUtKTVnTFsT3Y690TVknB77h38fX-EXxpDD_mF3QLggdIuWTky8DmvhsmKHGPPoBR0XFyLU5QNKErPEi7cIZyzVORv0fciLmOBDmrhKv-gWKx7FZaVKZm1moekLKi6SX03ei4UTiPSdxNAMpVNi5FcCRTOQd",
  },
  {
    name: "د. ليلى محمود",
    specialty: "طبيب عام",
    satisfaction: "92%",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfmgqqfACUr2YMkuhEe_ppGoNq-W3LeNOdcCm07AUNjkm_kREpFcMMhhEQqks0vyG0PY9e20Yr8P83QIj2lSqBhmUtf4GoEEixygzBtR3lZYYY8MfZM963q7QrdgxIxjB5i37xkCFEAkip2BVj28bGORR69JPkogX-vN3W9CzcoV2aEEctD4yczgPinwJqV6m1Bfcncb9aQTYCqqusVhH3Ith7TywffQB5MpPTsnNErBCkY1FgI5nUJbt1fgS3865elB-EYiUVUMSh",
  },
];

export const operationRooms = [
  {
    room: "OR-01",
    status: "نشط",
    statusClass: "bg-secondary-container text-on-secondary-container",
    procedure: "جراحة عظام",
    remaining: "45 دقيقة",
  },
  {
    room: "OR-02",
    status: "تنظيف",
    statusClass: "bg-surface-variant text-on-surface-variant",
    procedure: "-",
    remaining: "12 دقيقة",
  },
  {
    room: "OR-03",
    status: "جاهز",
    statusClass: "bg-primary-container text-on-primary-container",
    procedure: "فحص عام",
    remaining: "-",
  },
];

export const footerLinks = [
  { label: "سياسة الخصوصية", href: routes.about },
  { label: "شروط الاستخدام", href: routes.about },
  { label: "اتصل بنا", href: routes.about },
  { label: "الأسئلة الشائعة", href: `${routes.about}#faq` },
];

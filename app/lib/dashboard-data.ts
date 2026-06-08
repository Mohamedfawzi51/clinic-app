import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Calendar,
  Pill,
  FolderOpen,
  HelpCircle,
  CirclePlus,
  BellRing,
} from "lucide-react";
import { routes } from "./routes";

export const PATIENT_NAME = "سارة أحمد";

export const PATIENT_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAoP7BnsC5tfyHeVkHwl3zsj8inXbsAyj72_L5qLC2IPkdcw57u46CJT5ohNRCHZZhEL8tLqL6EtTa3QF5CQ59G4idCJfsXdTeFWgJ_WOq1EaKQ6RCdFUmwmCwyYYXp_tGf4bbuS93rd3IjbYYbuBRI4H_XPccoB7_MeSqKrUyW7-rdirr2uwU25ntwpDw6-d8aqfz2yQzwjyeC1ZI0chQPgizJb0MmhjeiIG0vvIXZS2IEyc4ZL6oGC0GNIVxlrYeoEmqlc3m1AimT";

export const DOCTOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-dHDsefdYXFi-u0RGEhcGcMIrUF3GwJkKWpbIceyM7qPhLnqIJIj-thiU6D_VR9BmG0a0tOECqe3xxPa8XDpkG9oCQlKTs-lulClEDYQy1QCSHJb4cYpngX1erLBlFGfaNC2ypHB9QXe17U2L6J0gXapbW_5NpSrkD671mn3xpWmlyIZbro9_cnqFcyMeXzlfqxP4w3C9rNcrIFhQ-Ic2bK3MIdrBkcDtAn-gnaEiT_tFYiFqeO56SQoWYSO6trnEUrqw6SllB1OD";

export const headerNavLinks = [
  { label: "الرئيسية", href: routes.home },
  { label: "الأطباء", href: routes.doctors },
  { label: "المواعيد", href: routes.patient.appointments },
  { label: "عن شفاء", href: routes.about },
];

export const sidebarLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: "لوحة التحكم", href: routes.patient.dashboard, icon: LayoutDashboard },
  { label: "جدول المواعيد", href: routes.patient.appointments, icon: Calendar },
  { label: "الأدوية", href: routes.patient.prescriptions, icon: Pill },
  { label: "سجلاتي الطبية", href: routes.about, icon: FolderOpen },
  { label: "المساعدة", href: routes.about, icon: HelpCircle },
];

export const prescriptions = [
  {
    name: "بانادول نايت",
    dosage: "قرص واحد قبل النوم",
  },
  {
    name: "أموكسيسيلين 500ملغ",
    dosage: "مرتين يومياً بعد الأكل",
  },
  {
    name: "فيتامين د",
    dosage: "مرة أسبوعياً",
  },
];

export const quickLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
  color: string;
  hoverBorder: string;
}[] = [
  {
    label: "حجز موعد جديد",
    href: routes.doctors,
    icon: CirclePlus,
    color: "bg-primary-container/20 group-hover:bg-primary",
    hoverBorder: "hover:border-primary",
  },
  {
    label: "سجلاتي الطبية",
    href: routes.about,
    icon: FolderOpen,
    color: "bg-secondary-container/20 group-hover:bg-secondary",
    hoverBorder: "hover:border-secondary",
  },
  {
    label: "التنبيهات",
    href: routes.patient.appointments,
    icon: BellRing,
    color: "bg-tertiary-container/20 group-hover:bg-tertiary",
    hoverBorder: "hover:border-tertiary",
  },
];

export const footerLinks = [
  { label: "سياسة الخصوصية", href: routes.about },
  { label: "شروط الاستخدام", href: routes.about },
  { label: "اتصل بنا", href: routes.about },
  { label: "الأسئلة الشائعة", href: `${routes.about}#faq` },
];

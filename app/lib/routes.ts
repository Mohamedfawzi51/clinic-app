export const routes = {
  home: "/",
  doctors: "/doctors",
  about: "/about",
  login: "/login",
  patient: {
    dashboard: "/dashboard",
    appointments: "/dashboard/appointments",
    prescriptions: "/dashboard/prescriptions",
  },
  doctor: {
    dashboard: "/doctor",
    schedule: "/doctor/schedule",
    patients: "/doctor/patients",
  },
  admin: {
    analytics: "/admin",
    settings: "/admin/settings",
  },
} as const;

export const demoRoles = [
  {
    id: "patient",
    title: "مريض",
    description: "حجز المواعيد ومتابعة الوصفات والسجلات الطبية",
    href: routes.patient.dashboard,
    color: "bg-primary",
  },
  {
    id: "doctor",
    title: "طبيب",
    description: "إدارة جدول المواعيد والمرضى والاستشارات",
    href: routes.doctor.dashboard,
    color: "bg-secondary",
  },
  {
    id: "admin",
    title: "مدير",
    description: "تحليلات الأداء والإيرادات وعمليات العيادة",
    href: routes.admin.analytics,
    color: "bg-tertiary-container",
  },
] as const;

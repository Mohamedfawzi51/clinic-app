import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  Brain,
  Smile,
  Baby,
  ScanFace,
  Eye,
} from "lucide-react";

import { routes } from "./routes";

export const navLinks = [
  { label: "الرئيسية", href: routes.home },
  { label: "الأطباء", href: routes.doctors },
  { label: "المواعيد", href: routes.patient.appointments },
  { label: "عن شفا", href: routes.about },
];

export const specialties: { name: string; icon: LucideIcon }[] = [
  { name: "القلب والأوعية", icon: HeartPulse },
  { name: "الطب النفسي", icon: Brain },
  { name: "طب الأسنان", icon: Smile },
  { name: "الأطفال", icon: Baby },
  { name: "الجلدية", icon: ScanFace },
  { name: "العيون", icon: Eye },
];

export const doctors = [
  {
    name: "د. أحمد سمير",
    specialty: "استشاري جراحة القلب",
    rating: 4.9,
    reviews: 120,
    price: 300,
    availability: "متاح اليوم",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeuMVe4Vn1nEkNPbYkIOBcPMul6bX1c5hPJnkT-LwIEzIn11NnewKKT9J82SBxEJuf_QYb-Ky8YcxbNFrBt_zgM7hYMvyy4A8dOGyLYqPtxHHi_cAqvfVZR-dnY_T5Aq-A8-FS09rbLN4wH84TlMe6QyinNz-QgIKMtYDNMbJkUnWFMKJ-7RSOcYlRQVDQfxVEIJlsIQOCBY4msvI-fNmm5mbYIoYoReac-vc11Nl19AipIBYBUoKZ4Nd9H1NpgTzsJuxA2jikeAp6",
  },
  {
    name: "د. سارة محمود",
    specialty: "أخصائي طب الأطفال",
    rating: 4.8,
    reviews: 85,
    price: 250,
    availability: "متاح اليوم",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfZ8okMDK-Ep46OLF-pt5oCQ2IlgVo-ZUEhuLYFJjFa8rVakxgtxRSzkyh1yHyA6FdrWNIGsP76nM74WfGBaJeNJH4-wQr4nHcczCc8H_8ok7gayx-dyQEBJn3rR3H2DcgyHzPldInBNyYimiBuaYL9LwWdeCCfMHYJaIv1qRqkFiPI0D5x_uvkpda6eXsqXTQm8xJjwW0Zhjl8BApytqogOFaMxk1vn0tAt4cpai7B4hj8aTRw_E06UhsSady1aI3EJ3F71JqoCAn",
  },
  {
    name: "د. خالد عيسى",
    specialty: "استشاري جراحة العظام",
    rating: 4.7,
    reviews: 210,
    price: 400,
    availability: "متاح غداً",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs5mnMwtWrzOclHKQLRGZh0jDKz8gy3ArAdsLVgiDHVwp6k2TN5KVk7haWNEGPEfTYVqy0Oj-rfExLTJLnCr11MkY9wX_xQFcELwby2RAoNmAEFyPPwkPkGsmo7znmhYoX_oxpUbZUXHVmajTxZpY6voL7jXF49qSFHhXNjfRqIbLAw6KD8IrmZb0mwOkI4Eu0iViYToYVTOe094RuGfnRuepS2MjyMpOGKg-mnLAGszBUn8pgbW1me6W3K4T1zhatU_aPdOHbJEFV",
  },
];

export const howItWorksSteps = [
  {
    title: "ابحث عن طبيب",
    description: "اختر التخصص والمنطقة واطلع على ملفات الأطباء",
    icon: "search" as const,
    color: "bg-primary",
    shadow: "shadow-primary/20",
  },
  {
    title: "احجز موعدك",
    description: "اختر الوقت المناسب لك وأكد حجزك بلمسة واحدة",
    icon: "calendar" as const,
    color: "bg-secondary",
    shadow: "shadow-secondary/20",
  },
  {
    title: "قم بالزيارة",
    description: "توجه للعيادة في موعدك واحصل على الرعاية التي تستحقها",
    icon: "medical" as const,
    color: "bg-primary-container",
    shadow: "shadow-primary-container/20",
    textColor: "text-on-primary-container",
  },
];

export const faqs = [
  {
    question: "هل الحجز من خلال شفا مجاني؟",
    answer:
      "نعم، منصة شفا تقدم خدمة الحجز مجاناً للمرضى، ويتم دفع رسوم الكشف داخل العيادة كالمعتاد.",
  },
  {
    question: "كيف يمكنني إلغاء موعدي؟",
    answer:
      'يمكنك إلغاء أو تعديل موعدك بسهولة من خلال قسم "مواعيدي" في حسابك الشخصي قبل الموعد بـ 24 ساعة على الأقل.',
  },
  {
    question: "كيف أعرف أن الطبيب موثوق؟",
    answer:
      "نحن نقوم بمراجعة كافة التراخيص الطبية للأطباء المسجلين، بالإضافة إلى توفير تقييمات حقيقية من مرضى قاموا بزيارة الطبيب بالفعل.",
  },
];

export const testimonials = [
  {
    name: "محمد كمال",
    text: "تجربة رائعة جداً، وفرت عليّ الكثير من الوقت في البحث عن طبيب متخصص والانتظار في العيادة. التطبيق سهل الاستخدام والمواعيد دقيقة.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-fpXahkIPCifMBOH2Dmvw9Sm8SNQTaZsrEFkvOLLlc27wstx9iUOcmEWwcFxWBmCxS5YsPDaCHKuKSUMPIorjRxG3NZIgmo_mMD7n6cPSLmNui7c3bjvKQQYwKrzsMZmEEj8h5wE6A4sPTiiDesHjY1kIdiR8sYHlnMaAtgydirapAqxb_ahc3ElQpY5ihtYyXH5k4AWeugcCpaQVIETZ0kTNYjgfKsMVw-SVoVn_AZ69WkvyL5lROuTeyKv8iwL40ZuRPpfia2Fn",
  },
  {
    name: "ليلى مراد",
    text: "أفضل ما في شفا هو إمكانية قراءة تقييمات المرضى الآخرين قبل الحجز. هذا أعطاني ثقة كبيرة في اختيار الطبيب المناسب لحالتي.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4iRxtq45vYsP7X1x-7Y1Afss9H2aa29J2sJNmWQpt_2To3AxOSUKFXn0fbmaKPkETBSaFDXz1i8hzIGQGueyYuNKIIhmlfbQVFcYXzpfmrA8mVT1br7MTam6skagIGZiBLQKEyvgmZFbDh960MmG4TyTf8CJCzIRjDK6QoekLArCNd2dgT1V68EvKD6XMCJHc5sz8maV-JB_8R2UCDKkMJNmVKGP4XT7JGLMgy2Kf5hrlHiYID_JAjM6gh5tc1GQXcSTqEEROiioM",
  },
];

export const PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ci1G75894D5vM85cjt3fbKUCv6YpMsjpbx9qfavqzsIJge9qS4ZKLIatW8rgbiX0YNLqCo2E4uI2zuSqDG5YC4P5WZkXXTB3_-BdwsZLUbAOVy1BNL0ty_xb9t14pvlJJj8Rk9mJSlCgBwnIyFcurd6nVRFAASNEAHmCxfei30pFXeUX8-s_z97wepkMzBEtGvk9A1FJZy7NMn-rXI9JiysCvmtnPU4qAhUm9sxsPxgTrr1cAeeteWaJyATkdSJ50qgjeAiasuwi";

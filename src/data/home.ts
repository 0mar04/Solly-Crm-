import type { Locale } from "@/i18n/config";

export type HomeCopy = {
  nav: {
    work: string;
    services: string;
    process: string;
    industries: string;
    contact: string;
    cta: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primary: string;
    secondary: string;
  };
  stats: readonly { value: string; label: string }[];
  work: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    items: readonly {
      title: string;
      category: string;
      description: string;
      image: string;
      tone: "light" | "sage" | "dark";
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { step: string; title: string; description: string }[];
  };
  promise: {
    eyebrow: string;
    title: string;
    description: string;
    points: readonly string[];
  };
  industries: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    name: string;
    phone: string;
    project: string;
    submit: string;
    note: string;
  };
  footer: {
    line: string;
    rights: string;
  };
};

const ar: HomeCopy = {
  nav: {
    work: "نظرة على النظام",
    services: "المميزات",
    process: "كيف تبدأ",
    industries: "لمن النظام؟",
    contact: "تواصل معنا",
    cta: "اطلب عرضًا توضيحي",
    menu: "القائمة",
  },
  hero: {
    eyebrow: "Real Estate CRM · Built for property teams",
    title: "كل عقاراتك وعملاءك",
    highlight: "في مكان واحد.",
    description:
      "من أول استفسار العميل لحد متابعة الصفقة: نظّم العملاء المحتملين والوحدات العقارية وفريق المبيعات في منصة CRM واحدة مصممة للمطورين والوسطاء العقاريين.",
    primary: "اطلب عرضًا توضيحي",
    secondary: "استكشف المميزات",
  },
  stats: [
    { value: "CRM", label: "إدارة العملاء المحتملين" },
    { value: "360°", label: "نظرة موحدة على المبيعات" },
    { value: "One", label: "منصة لفريقك" },
  ],
  work: {
    eyebrow: "Platform overview",
    title: "كل أدوات فريقك في نظام واحد.",
    description:
      "مش مجرد جدول للعملاء؛ تابع رحلة البيع، نظّم مخزون العقارات وخلّي كل عضو في الفريق عارف خطوته الجاية.",
    viewAll: "احجز Demo للنظام",
    items: [
      {
        title: "إدارة العملاء المحتملين",
        category: "Leads & Pipeline",
        description: "اجمع الاستفسارات ونظّم المتابعات وحدد مسؤول كل عميل مع رؤية واضحة لمراحل البيع.",
        image: "/assets/mockups/dashboard-devices-mockup.png",
        tone: "sage",
      },
      {
        title: "إدارة الوحدات والمشروعات",
        category: "Inventory Management",
        description: "نظّم المشروعات والوحدات والأسعار والتوافر عشان فريقك يوصل للمعلومة المناسبة بسرعة.",
        image: "/assets/mockups/dashboard-devices-mockup.png",
        tone: "light",
      },
      {
        title: "متابعة فريق المبيعات",
        category: "Team Workspace",
        description: "وزّع العملاء والمهام وراجع نشاط فريقك من لوحة تحكم واحدة.",
        image: "/assets/mockups/phone-mockup-property-app.png",
        tone: "dark",
      },
    ],
  },
  services: {
    eyebrow: "Core CRM features",
    title: "الـ CRM اللي يفهم شغل العقارات.",
    description:
      "أدوات مصممة عشان تقلل تشتت البيانات، وتنظّم المتابعة، وتديك رؤية أوضح لحركة المبيعات.",
    items: [
      { title: "إدارة الـ Leads", description: "سجّل الاستفسارات وتابع كل عميل من أول تواصل لحد إغلاق الفرصة.", icon: "web" },
      { title: "إدارة العقارات", description: "اعرض الوحدات والمشروعات وبياناتها وتوافرها في مكان واحد.", icon: "ecommerce" },
      { title: "مراحل المبيعات", description: "نظّم رحلة العميل بمراحل واضحة وسهّل متابعة كل فرصة.", icon: "systems" },
      { title: "تعاون الفريق", description: "وزّع المسؤوليات والمهام وخلي المبيعات والإدارة على نفس الصفحة.", icon: "mobile" },
      { title: "تقارير ومؤشرات", description: "افهم حالة العملاء والفرص وأداء الفريق من بيانات منظّمة.", icon: "integrations" },
      { title: "صلاحيات وإدارة", description: "نظّم الوصول للبيانات حسب أدوار أعضاء فريقك.", icon: "support" },
    ],
  },
  process: {
    eyebrow: "Getting started",
    title: "ابدأ في خطوات بسيطة.",
    description: "من التعرف على النظام لتجهيز فريقك للعمل: خطوات مباشرة تناسب طريقة إدارة شركتك.",
    items: [
      { step: "01", title: "احجز عرضًا", description: "خلينا نعرف حجم فريقك وطريقة شغلك والتحديات اللي بتواجهك." },
      { step: "02", title: "شوف النظام", description: "استكشف إدارة العملاء والوحدات والمبيعات في عرض توضيحي." },
      { step: "03", title: "اختار الباقة", description: "قارن الباقات واختار اللي تناسب احتياجات شركتك." },
      { step: "04", title: "جهّز بياناتك", description: "جهّز قائمة العقارات والعملاء وأعضاء الفريق للبدء." },
      { step: "05", title: "ابدأ المتابعة", description: "تابع الفرص ونشاط الفريق بصورة أوضح من مكان واحد." },
    ],
  },
  promise: {
    eyebrow: "Why Solly CRM",
    title: "شغلك العقاري محتاج وضوح أكتر.",
    description:
      "بدل ما بيانات العملاء والوحدات تتوزع بين ملفات ومحادثات، خلّي المعلومات الأساسية والتحديثات في مساحة عمل واحدة.",
    points: [
      "بيانات العملاء في مكان واحد",
      "رؤية واضحة لمراحل البيع",
      "تعاون بين أعضاء فريق المبيعات",
      "إدارة أنسب للمشروعات والوحدات",
    ],
  },
  industries: {
    eyebrow: "Who it's for",
    title: "مصمم لشركات العقارات.",
    description: "سواء شركتك مطور عقاري أو وسيط أو شركة تسويق عقاري، نظّم يومك ومتابعاتك في نظام واحد.",
    items: ["التطوير العقاري", "الوساطة العقارية", "التسويق العقاري", "فرق المبيعات", "إدارة المشروعات", "إدارة الوحدات", "متابعة العملاء", "الإدارة"],
  },
  contact: {
    eyebrow: "Request a demo",
    title: "شوف نظامك العقاري في عرض مباشر.",
    description: "سيب بياناتك وهنرتب عرض توضيحي نوريك فيه إزاي Solly CRM ممكن يساعد فريقك ينظم البيع والمتابعة.",
    name: "الاسم",
    phone: "رقم الهاتف أو واتساب",
    project: "اسم الشركة واحتياجات فريقك",
    submit: "اطلب عرضًا توضيحي",
    note: "طلب العرض التوضيحي لا يعني الاشتراك أو الدفع.",
  },
  footer: {
    line: "Real estate relationships. One organized workspace.",
    rights: "جميع الحقوق محفوظة.",
  },
};

const en: HomeCopy = {
  nav: {
    work: "Platform",
    services: "Features",
    process: "How it works",
    industries: "Who it's for",
    contact: "Contact",
    cta: "Request a demo",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Real Estate CRM · Built for property teams",
    title: "Your real estate business,",
    highlight: "all in one CRM.",
    description:
      "From the first property inquiry to the next sales follow-up, organize leads, listings and your team in one CRM built for developers, brokers and real estate sales companies.",
    primary: "Request a demo",
    secondary: "Explore features",
  },
  stats: [
    { value: "CRM", label: "Lead management" },
    { value: "360°", label: "Connected sales view" },
    { value: "One", label: "Workspace for your team" },
  ],
  work: {
    eyebrow: "Platform overview",
    title: "One workspace for your sales operation.",
    description:
      "Bring lead tracking, property inventory and team activity into a more organized sales workflow.",
    viewAll: "Request a live demo",
    items: [
      {
        title: "Lead Management",
        category: "Leads & Pipeline",
        description: "Keep track of inquiries, assign owners and follow each opportunity through your pipeline.",
        image: "/assets/mockups/dashboard-devices-mockup.png",
        tone: "sage",
      },
      {
        title: "Properties & Projects",
        category: "Inventory Management",
        description: "Organize projects, listings, prices and availability for your sales team.",
        image: "/assets/mockups/dashboard-devices-mockup.png",
        tone: "light",
      },
      {
        title: "Sales Team Workspace",
        category: "Team Management",
        description: "Assign leads and tasks, and keep your team aligned on the next action.",
        image: "/assets/mockups/phone-mockup-property-app.png",
        tone: "dark",
      },
    ],
  },
  services: {
    eyebrow: "Core CRM features",
    title: "Built around real estate sales.",
    description:
      "Less scattered information, clearer follow-ups and a more organized property sales workflow.",
    items: [
      { title: "Lead Management", description: "Capture inquiries and track every lead from first contact to decision.", icon: "web" },
      { title: "Property Inventory", description: "Keep listings, project details and availability organized.", icon: "ecommerce" },
      { title: "Sales Pipeline", description: "Make each sales stage and next action easy to follow.", icon: "systems" },
      { title: "Team Collaboration", description: "Assign responsibilities and keep your sales team coordinated.", icon: "mobile" },
      { title: "Sales Reporting", description: "Review opportunities and team activity with organized data.", icon: "integrations" },
      { title: "Roles & Permissions", description: "Give team members access suited to their responsibilities.", icon: "support" },
    ],
  },
  process: {
    eyebrow: "Getting started",
    title: "From demo to daily workflow.",
    description: "See how the platform fits your team, choose a plan and start organizing your operation.",
    items: [
      { step: "01", title: "Book a demo", description: "Tell us about your company, team and current sales process." },
      { step: "02", title: "Explore the CRM", description: "See how leads, inventory and sales follow-ups work together." },
      { step: "03", title: "Choose a plan", description: "Pick the subscription that fits your company." },
      { step: "04", title: "Prepare your data", description: "Organize your listings, leads and team details." },
      { step: "05", title: "Start tracking", description: "Keep your opportunities and team activity visible." },
    ],
  },
  promise: {
    eyebrow: "Why Solly CRM",
    title: "Give your sales process more clarity.",
    description:
      "Move away from disconnected spreadsheets and scattered conversations into a shared workspace for your property business.",
    points: [
      "Organized lead information",
      "Clearer sales pipeline",
      "Team collaboration",
      "Project and unit visibility",
    ],
  },
  industries: {
    eyebrow: "Who it’s for",
    title: "Made for real estate companies.",
    description: "For property developers, brokers and real estate marketers who need a clearer way to work.",
    items: ["Developers", "Brokerages", "Property Marketing", "Sales Teams", "Project Teams", "Inventory Managers", "Lead Managers", "Company Owners"],
  },
  contact: {
    eyebrow: "Request a demo",
    title: "See your real estate CRM in action.",
    description: "Share your details to arrange a demonstration of how Solly CRM can support your team.",
    name: "Name",
    phone: "Phone or WhatsApp",
    project: "Company name and team needs",
    submit: "Request a demo",
    note: "A demo request does not commit you to a subscription.",
  },
  footer: {
    line: "Real estate relationships. One organized workspace.",
    rights: "All rights reserved.",
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return locale === "ar" ? ar : en;
}

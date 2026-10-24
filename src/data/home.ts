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
    work: "أعمالنا",
    services: "خدماتنا",
    process: "طريقتنا",
    industries: "القطاعات",
    contact: "تواصل معنا",
    cta: "ابدأ مشروعك",
    menu: "القائمة",
  },
  hero: {
    eyebrow: "Software House · Cairo, Egypt",
    title: "نبني البرمجيات اللي",
    highlight: "تحرك شغلك للأمام.",
    description:
      "مواقع، متاجر، أنظمة أعمال، تطبيقات ومنتجات رقمية — من الفكرة والتصميم لحد الإطلاق والدعم.",
    primary: "ابدأ مشروعك",
    secondary: "شوف شغلنا",
  },
  stats: [
    { value: "16+", label: "منتج ومشروع تم إطلاقه" },
    { value: "8", label: "قطاعات مختلفة" },
    { value: "4", label: "منصات وتقنيات" },
  ],
  work: {
    eyebrow: "Selected work",
    title: "شغل حقيقي لبيزنس حقيقي.",
    description:
      "نصمم ونبني منتجات واضحة، سريعة، وقابلة للنمو — ونخلي كل مشروع يتكلم عن نفسه.",
    viewAll: "استكشف كل المشاريع",
    items: [
      {
        title: "AmTalek",
        category: "Real Estate Platform",
        description: "منظومة عقارية متكاملة تجمع الموقع، إدارة العقارات، CRM والعمليات اليومية.",
        image: "/assets/mockups/dashboard-devices-mockup.png",
        tone: "sage",
      },
      {
        title: "iTashteeb",
        category: "Marketplace",
        description: "تجربة رقمية تربط العملاء بمقدمي الخدمات وتدير العروض والمناقصات من البداية للنهاية.",
        image: "/assets/mockups/laptop-mockup-dark-ui.png",
        tone: "light",
      },
      {
        title: "Mobile Products",
        category: "iOS & Android",
        description: "تطبيقات موبايل مبنية حول رحلة مستخدم واضحة وتجربة سريعة وبسيطة.",
        image: "/assets/mockups/phone-mockup-property-app.png",
        tone: "dark",
      },
    ],
  },
  services: {
    eyebrow: "What we build",
    title: "أيًا كان المنتج الرقمي اللي محتاجه، نقدر نبنيه.",
    description:
      "مش بنقفل نفسنا في نوع مشروع واحد. بنختار التكنولوجيا المناسبة ونبني الحل على احتياج البيزنس.",
    items: [
      { title: "مواقع ومنصات", description: "مواقع تسويقية ومنصات ويب سريعة وقابلة للتوسع.", icon: "web" },
      { title: "متاجر إلكترونية", description: "تجارب شراء متكاملة من المنتج للدفع وإدارة الطلبات.", icon: "ecommerce" },
      { title: "أنظمة أعمال", description: "Dashboards وCRM وERP وأدوات داخلية تنظم التشغيل.", icon: "systems" },
      { title: "تطبيقات موبايل", description: "تطبيقات iOS وAndroid بتجربة استخدام عملية ومميزة.", icon: "mobile" },
      { title: "ربط وتكامل", description: "APIs ومدفوعات وخدمات خارجية تعمل مع بعض بسلاسة.", icon: "integrations" },
      { title: "دعم وتطوير", description: "تحسينات وصيانة وتطوير مستمر بعد الإطلاق.", icon: "support" },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "من الفكرة لمنتج شغال.",
    description: "عملية واضحة تقلل المفاجآت وتخلي كل مرحلة لها هدف ومخرج واضح.",
    items: [
      { step: "01", title: "نفهم", description: "نفهم البيزنس، المستخدم، المشكلة والمتطلبات الحقيقية." },
      { step: "02", title: "نصمم", description: "نحدد تجربة المستخدم والشكل والـarchitecture قبل التنفيذ." },
      { step: "03", title: "نبني", description: "نطور المنتج بمكونات منظمة واختبارات ومراجعات مستمرة." },
      { step: "04", title: "نطلق", description: "نراجع الجودة والأداء ثم نطلق المنتج بشكل آمن." },
      { step: "05", title: "نكمل معاك", description: "دعم وتحسينات ومراحل تطوير حسب نمو المنتج." },
    ],
  },
  promise: {
    eyebrow: "Why NINJA",
    title: "مش مجرد تنفيذ. بنفكر كأن المنتج بتاعنا.",
    description:
      "نهتم بالتفاصيل اللي بتفرق بعد الإطلاق: السرعة، سهولة الاستخدام، قابلية التوسع، ونظافة الكود.",
    points: [
      "Product mindset قبل كتابة الكود",
      "Responsive من أول يوم",
      "RTL وLTR باحترام كامل للتجربة",
      "Architecture قابلة للتوسع والصيانة",
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "بنشتغل مع بيزنسات مختلفة.",
    description: "التكنولوجيا بتتغير، لكن هدفنا واحد: منتج يخدم شغلك فعلًا.",
    items: ["العقارات", "التشطيبات والمقاولات", "التجارة الإلكترونية", "التعليم", "الضيافة", "الخدمات", "SaaS", "منتجات مخصصة"],
  },
  contact: {
    eyebrow: "Start a project",
    title: "عندك فكرة؟ خلينا نبنيها.",
    description: "مش لازم تكون محدد كل التفاصيل. ابعتلنا اللي عندك ونبدأ من هناك.",
    name: "الاسم",
    phone: "رقم الهاتف أو واتساب",
    project: "بتفكر تبني إيه؟",
    submit: "إرسال الطلب",
    note: "رقمك يكفي. هنكلمك ونفهم التفاصيل معاك.",
  },
  footer: {
    line: "Software built around your business.",
    rights: "جميع الحقوق محفوظة.",
  },
};

const en: HomeCopy = {
  nav: {
    work: "Work",
    services: "Services",
    process: "Process",
    industries: "Industries",
    contact: "Contact",
    cta: "Start a project",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Software House · Cairo, Egypt",
    title: "We build software that",
    highlight: "moves your business forward.",
    description:
      "Websites, commerce, business systems, mobile apps and digital products — from idea and design to launch and support.",
    primary: "Start a project",
    secondary: "See our work",
  },
  stats: [
    { value: "16+", label: "products & projects shipped" },
    { value: "8", label: "different industries" },
    { value: "4", label: "platforms & technologies" },
  ],
  work: {
    eyebrow: "Selected work",
    title: "Real work for real businesses.",
    description:
      "We design and build focused, fast, scalable products — and let the work speak for itself.",
    viewAll: "Explore all projects",
    items: [
      {
        title: "AmTalek",
        category: "Real Estate Platform",
        description: "A connected real-estate ecosystem spanning web, inventory, CRM and daily operations.",
        image: "/assets/mockups/dashboard-devices-mockup.png",
        tone: "sage",
      },
      {
        title: "iTashteeb",
        category: "Marketplace",
        description: "A digital marketplace that connects customers and providers and manages offers end to end.",
        image: "/assets/mockups/laptop-mockup-dark-ui.png",
        tone: "light",
      },
      {
        title: "Mobile Products",
        category: "iOS & Android",
        description: "Mobile products built around a clear user journey, speed and simplicity.",
        image: "/assets/mockups/phone-mockup-property-app.png",
        tone: "dark",
      },
    ],
  },
  services: {
    eyebrow: "What we build",
    title: "Whatever the digital product, we can build it.",
    description:
      "We do not force every project into one mold. We choose the right technology around the business need.",
    items: [
      { title: "Websites & Platforms", description: "Marketing sites and web platforms built for speed and scale.", icon: "web" },
      { title: "Ecommerce", description: "Complete buying journeys from product discovery to checkout and orders.", icon: "ecommerce" },
      { title: "Business Systems", description: "Dashboards, CRM, ERP and internal tools that organize operations.", icon: "systems" },
      { title: "Mobile Apps", description: "iOS and Android products with practical, polished user experiences.", icon: "mobile" },
      { title: "Integrations", description: "APIs, payments and external services working together seamlessly.", icon: "integrations" },
      { title: "Support & Growth", description: "Maintenance, improvements and continuous product evolution.", icon: "support" },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "From idea to working product.",
    description: "A clear process where every phase has a purpose, output and decision.",
    items: [
      { step: "01", title: "Understand", description: "We understand the business, users, problem and real requirements." },
      { step: "02", title: "Design", description: "We shape the experience, visual language and architecture before build." },
      { step: "03", title: "Build", description: "We develop with reusable components, reviews and quality checks." },
      { step: "04", title: "Launch", description: "We validate quality and performance, then ship safely." },
      { step: "05", title: "Grow", description: "We support, improve and expand the product as it grows." },
    ],
  },
  promise: {
    eyebrow: "Why NINJA",
    title: "Not just execution. We think like product owners.",
    description:
      "We care about what matters after launch: performance, usability, scalability and maintainable code.",
    points: [
      "Product mindset before code",
      "Responsive from day one",
      "Proper RTL and LTR support",
      "Architecture built to scale and evolve",
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Built for different kinds of business.",
    description: "The technology changes. The goal stays the same: software that genuinely serves the business.",
    items: ["Real Estate", "Construction & Fit-out", "Ecommerce", "Education", "Hospitality", "Services", "SaaS", "Custom Products"],
  },
  contact: {
    eyebrow: "Start a project",
    title: "Got an idea? Let’s build it.",
    description: "You do not need every detail figured out. Send what you have and we will start from there.",
    name: "Name",
    phone: "Phone or WhatsApp",
    project: "What are you looking to build?",
    submit: "Send request",
    note: "Your number is enough. We’ll contact you and understand the details together.",
  },
  footer: {
    line: "Software built around your business.",
    rights: "All rights reserved.",
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return locale === "ar" ? ar : en;
}

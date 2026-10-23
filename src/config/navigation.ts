import type { NavigationItem } from "@/types";

export const mainNavigation = [
  { labelKey: "projects", href: "#projects" },
  { labelKey: "services", href: "#services" },
  { labelKey: "process", href: "#process" },
  { labelKey: "industries", href: "#industries" },
  { labelKey: "contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];

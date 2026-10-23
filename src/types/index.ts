export type NavigationLabelKey =
  | "projects"
  | "services"
  | "process"
  | "industries"
  | "contact";

export type NavigationItem = Readonly<{
  labelKey: NavigationLabelKey;
  href: `#${string}`;
}>;

export type ContentItem = Readonly<{
  id: string;
  titleKey: string;
  descriptionKey: string;
}>;

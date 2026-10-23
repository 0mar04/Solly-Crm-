"use client";

import { TooltipProvider } from "@/components/ui/tooltip";

type AppProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export function AppProviders({ children }: AppProvidersProps) {
  return <TooltipProvider>{children}</TooltipProvider>;
}

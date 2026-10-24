import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";
import { getHomeCopy } from "@/data/home";
import { hasLocale } from "@/i18n/dictionaries";

type HomePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const copy = getHomeCopy(locale);

  return (
    <>
      <SiteHeader locale={locale} copy={copy.nav} />
      <main>
        <HeroSection locale={locale} hero={copy.hero} stats={copy.stats} />
        <WorkSection locale={locale} copy={copy.work} />
        <ServicesSection copy={copy.services} />
        <ProcessSection process={copy.process} promise={copy.promise} />
        <IndustriesSection copy={copy.industries} />
        <ContactSection copy={copy.contact} />
      </main>
      <SiteFooter locale={locale} copy={copy.footer} />
    </>
  );
}

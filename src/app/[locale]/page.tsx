import { notFound } from "next/navigation";
import { FiCheckCircle } from "react-icons/fi";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";

type HomePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <main className="site-container flex min-h-dvh items-center py-12 sm:py-16">
      <section aria-labelledby="foundation-title" className="w-full">
        <Card className="mx-auto max-w-2xl border-border bg-card shadow-sm">
          <CardHeader className="gap-4">
            <Badge variant="secondary" className="w-fit">
              {dictionary.foundation.badge}
            </Badge>
            <div className="space-y-2">
              <CardTitle id="foundation-title" className="text-2xl sm:text-3xl">
                {dictionary.foundation.title}
              </CardTitle>
              <CardDescription className="text-base leading-7">
                {dictionary.foundation.description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Button type="button">
              <FiCheckCircle aria-hidden="true" />
              {dictionary.foundation.status}
            </Button>
            <span className="text-sm text-muted-foreground">
              {dictionary.foundation.nextStep}
            </span>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

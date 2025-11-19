import { Award, Briefcase } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const brandLogos = [
  { name: "Adesina Assets", imageUrl: "https://picsum.photos/seed/adesina/140/70" },
  { name: "Ambience Reality", imageUrl: "https://picsum.photos/seed/ambience/140/70" },
  { name: "Folda", imageUrl: "https://picsum.photos/seed/folda/140/70" },
  { name: "Evimero", imageUrl: "https://picsum.photos/seed/evimero/140/70" },
  { name: "Property Evangelist", imageUrl: "https://picsum.photos/seed/property/140/70" },
  { name: "Graycourt Attorney", imageUrl: "https://picsum.photos/seed/graycourt/140/70" },
  { name: "Motlead Projects", imageUrl: "https://picsum.photos/seed/motlead/140/70" },
  { name: "Creativity Niche Studios", imageUrl: "https://picsum.photos/seed/creativity/140/70" }
];

export default function CredibilitySection() {
  return (
    <section id="credibility" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center gap-4 p-4 sm:p-6">
                <div className="bg-primary p-3 rounded-md">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-headline text-xl">
                  Creative Director at Adesina Assets
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                <p className="text-muted-foreground">
                  Leading creative strategy and design execution for a portfolio of high-growth brands and innovative projects.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center gap-4 p-4 sm:p-6">
                <div className="bg-primary p-3 rounded-md">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-headline text-xl">
                  Multi-Million Naira Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                <p className="text-muted-foreground">
                  Worked with top brands, crafting campaigns and brand identities that have generated multi-millions in revenue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold tracking-wider text-primary uppercase font-headline">
            Trusted by Industry Leaders
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="relative h-12 w-32 grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100">
                <Image
                  src={brand.imageUrl}
                  alt={`${brand.name} logo`}
                  layout="fill"
                  objectFit="contain"
                  data-ai-hint="brand logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

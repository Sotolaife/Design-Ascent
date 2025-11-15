import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, BarChart, Gem } from "lucide-react";

const proofItems = [
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: "Trusted by High-Growth Brands",
    description: "Our methods are applied in branding for companies scaling to new heights."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Used in Million-Naira Campaigns",
    description: "The design principles taught have been central to major successful campaigns."
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "A Network of High-Achievers",
    description: "Join a community of creatives who are serious about building premium careers."
  },
];

export default function SocialProofSection() {
  return (
    <section id="proof" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {proofItems.map((item, index) => (
            <Card key={index} className="bg-card text-center transition-transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                </div>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

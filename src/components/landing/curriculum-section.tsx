import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PenTool, Target, Laptop, DollarSign, Lightbulb, Users } from "lucide-react";

const curriculumItems = [
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "Fundamentals of Premium Design",
    description: "Master the core principles that separate amateur work from professional, high-value designs.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-primary" />,
    title: "How to Design Like a Professional",
    description: "Learn workflows, tools, and techniques used by creative directors in top agencies.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "How Real Businesses Use Design",
    description: "Go behind the scenes to see how design drives business goals and revenue.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "The Skills Clients Actually Pay For",
    description: "Focus on the practical, in-demand skills that clients are willing to pay premium rates for.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "What Modern Brands Look For",
    description: "Understand the current trends and expectations of today's leading brands.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "From Skill to High-Income Career",
    description: "Get the roadmap to turn your new design abilities into a sustainable, profitable venture.",
  },
];

export default function CurriculumSection() {
  return (
    <section id="learn" className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What You Will Learn
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            This isn't just another design class. It's a direct look into the skills that build careers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curriculumItems.map((item, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 border-transparent shadow-none hover:bg-background hover:shadow-lg transition-all duration-300">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {item.icon}
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

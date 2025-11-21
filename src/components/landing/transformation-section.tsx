import { CheckCircle } from "lucide-react";

const transformations = [
    {
        title: "Learn from a Creative Director",
        description: "Get direct mentorship and insights usually reserved for internal agency teams."
    },
    {
        title: "Gain Financial Clarity",
        description: "Understand exactly how to package and sell your design skills for high-ticket projects."
    },
    {
        title: "Real-World Experience",
        description: "Learn from strategies used in actual client work, not just textbook theory."
    },
    {
        title: "Join a Serious Community",
        description: "Connect with other aspiring designers who are focused on growth and excellence."
    },
    {
        title: "Meet Brand-Level Expectations",
        description: "Discover what it takes to deliver work that top brands will approve and admire."
    },
    {
        title: "Access to job offers from all over the world",
        description: "Get updates on open jobs in and outside of Nigeria"
    },
]

export default function TransformationSection() {
    return (
        <section id="transformation" className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Why This Free Class Is a Game-Changer
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
                        This is more than a class. It’s an exclusive opportunity to access industry secrets and accelerate your creative career.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {transformations.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">{item.title}</h4>
                                    <p className="text-primary-foreground/80">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

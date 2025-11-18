import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, Laptop, BarChart3 } from "lucide-react";

const details = [
    {
        icon: <Calendar className="w-6 h-6 text-primary" />,
        label: "Date & Time",
        value: "Saturday, August 24th, 2024 at 7 PM (WAT)",
    },
    {
        icon: <Video className="w-6 h-6 text-primary" />,
        label: "Platform",
        value: "Live on Google Meet",
    },
    {
        icon: <Laptop className="w-6 h-6 text-primary" />,
        label: "What You'll Need",
        value: "Just your smartphone or laptop. No special software required.",
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-primary" />,
        label: "Difficulty Level",
        value: "Beginner-Friendly, with Professional-Ready Insights",
    },
]

export default function DetailsSection() {
    return (
        <section id="details" className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Class Details
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Everything you need to know to join us live.
                        </p>
                    </div>
                    <Card className="shadow-lg">
                        <CardContent className="p-6 sm:p-8">
                            <ul className="space-y-6">
                                {details.map((detail, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                                            {detail.icon}
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-semibold text-lg">{detail.label}</p>
                                            <p className="text-muted-foreground">{detail.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

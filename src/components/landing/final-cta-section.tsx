import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-16 sm:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Learn a High-Income Creative Skill Today
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Don’t miss this opportunity to learn directly from an industry expert and change the course of your creative career.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-10">
            <Link href="#register">Register Free Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

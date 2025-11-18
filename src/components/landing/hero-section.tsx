import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-portrait');

  return (
    <section id="hero" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Learn the High-Income Skill Big Brands Pay For
            </h1>
            <p className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 text-muted-foreground sm:text-xl">
              Join our exclusive, 100% free graphics design class and discover the secrets to creating premium visuals that attract high-paying clients.
            </p>

            <div className="mt-8 mx-auto lg:mx-0 max-w-xl aspect-video relative rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.cloudinary.com/embed/?cloud_name=dwdbq6pt7&public_id=VID-20251111-WA0017_fsq1nc&profile=cld-default"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-lg py-7 px-10">
                <Link href="#register">Register For the Free Class Now</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center row-start-1 lg:row-start-auto">
            {instructorImage && (
              <Card className="rounded-xl shadow-2xl overflow-hidden max-w-sm w-full mx-auto group">
                <div className="relative">
                  <Image
                    src={instructorImage.imageUrl}
                    alt={instructorImage.description}
                    width={600}
                    height={600}
                    data-ai-hint={instructorImage.imageHint}
                    className="aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-headline text-2xl font-bold text-white">Adesina</h3>
                    <p className="text-white/90">Creative Director & Mentor</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

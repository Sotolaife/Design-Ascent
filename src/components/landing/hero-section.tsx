import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  const instructorImage = PlaceHolderImages.find(p => p.id === 'instructor-portrait');

  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-primary/5 via-white to-white"
    >
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT AREA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primary drop-shadow-sm">
              Learn the High-Income Skill Big Brands Pay For
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              Join our exclusive, <span className="font-semibold text-primary">100% free graphics design class</span> and discover the secrets to creating premium visuals that attract high-paying clients.
            </p>

            {/* FIXED VIDEO FRAME */}
            <div className="mt-6 w-full max-w-xl aspect-video relative rounded-2xl overflow-hidden shadow-xl border border-primary/10 bg-black">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
                src="https://res.cloudinary.com/dwdbq6pt7/video/upload/q_auto:good,f_auto/VID-20251111-WA0017_fsq1nc.mp4"
                autoPlay
                muted
                playsInline
                loop
              />
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-lg py-7 px-10 rounded-xl shadow-lg shadow-accent/20"
              >
                <Link href="#register">Register For the Free Class Now</Link>
              </Button>
            </div>
          </div>

          {/* IMAGE CARD */}
          <div className="flex justify-center">
            {instructorImage && (
              <Card className="rounded-2xl shadow-2xl overflow-hidden max-w-xs w-full mx-auto group border-0">
                <div className="relative">
                  <Image
                    src={instructorImage.imageUrl}
                    alt={instructorImage.description}
                    width={600}
                    height={600}
                    data-ai-hint={instructorImage.imageHint}
                    className="aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-headline text-2xl font-bold text-white drop-shadow-sm">
                      Olutola Ebenezer
                    </h3>
                    <p className="text-white/90 text-sm drop-shadow-sm">
                      Creative Director of Adesina Assets
                    </p>
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

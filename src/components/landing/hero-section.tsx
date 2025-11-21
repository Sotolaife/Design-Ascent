import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-white to-white"
    >
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT SECTION */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary drop-shadow-sm">
              Learn the High-Income Skill Big Brands Pay For
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Join my exclusive, 100% free creative masterclass to discover the secret of creating premium visual stories that attracts high-paying clients
            </p>



            <div className="pt-4 w-full flex justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-lg py-7 px-10 rounded-xl shadow-lg shadow-accent/20"
              >
                <Link href="#register">Register For the Free Class Now</Link>
              </Button>
            </div>
          </div>
                      {/* VIDEO */}
                      <div className="mt-4 w-full aspect-video relative rounded-2xl overflow-hidden shadow-xl border border-primary/10 bg-black">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://res.cloudinary.com/dwdbq6pt7/video/upload/q_auto:good,f_auto/VID-20251111-WA0017_fsq1nc.mp4"
                autoPlay
                muted={false}
                playsInline
                loop
                controls
              />
            </div>
        </div>
      </div>
    </section>
  );
}

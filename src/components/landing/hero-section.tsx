"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force play with multiple attempts
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log("Autoplay prevented, retrying with muted...");
          // If autoplay fails, try with muted first
          video.muted = true;
          try {
            await video.play();
            // Once playing, unmute after a short delay
            setTimeout(() => {
              video.muted = false;
            }, 100);
          } catch (e) {
            console.error("Video autoplay failed:", e);
          }
        }
      };

      playVideo();

      // Retry play on user interaction if autoplay failed
      const handleInteraction = () => {
        if (video.paused) {
          video.play().catch(e => console.error("Play on interaction failed:", e));
        }
      };

      document.addEventListener("click", handleInteraction, { once: true });
      document.addEventListener("touchstart", handleInteraction, { once: true });

      return () => {
        document.removeEventListener("click", handleInteraction);
        document.removeEventListener("touchstart", handleInteraction);
      };
    }
  }, []);
  
  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-primary/5 via-white to-white"
    >
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT TEXT SECTION */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 max-w-xl mx-auto lg:mx-0">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-primary drop-shadow-sm">
              Learn the High-Income Skill Big Brands Pay For
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Join my exclusive, 100% free creative masterclass to discover the secret of creating premium visual stories that attracts high-paying clients
            </p>

            <div className="pt-2 sm:pt-4 w-full flex justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-base sm:text-lg py-6 sm:py-7 px-8 sm:px-10 rounded-xl shadow-lg shadow-accent/20"
              >
                <Link href="#register">Register For the Free Class Now</Link>
              </Button>
            </div>
          </div>

          {/* VIDEO */}
          <div className="mt-6 sm:mt-8 lg:mt-4 w-full aspect-video relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-primary/10 bg-black">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://res.cloudinary.com/dwdbq6pt7/video/upload/q_auto:good,f_auto/VID-20251111-WA0017_fsq1nc.mp4"
              autoPlay={true}
              muted={false}
              playsInline={true}
              loop
              controls
              preload="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
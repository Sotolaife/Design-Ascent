import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://i.ibb.co/DDwd0dLh/IMG-20251121-WA0006.jpg"
            alt="Olutola Studios Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            unoptimized
          />
          <span className="font-headline text-lg sm:text-xl font-bold">Olutola Studios</span>
        </Link>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2">
          <Link href="#register">Register Free</Link>
        </Button>
      </div>
    </header>
  );
}

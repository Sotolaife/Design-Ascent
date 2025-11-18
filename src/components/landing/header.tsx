import Link from "next/link";
import { PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <PenTool className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg sm:text-xl font-bold">Design Ascent</span>
        </Link>
        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 sm:size-auto sm:px-4 sm:py-2">
          <Link href="#register">Register Free</Link>
        </Button>
      </div>
    </header>
  );
}

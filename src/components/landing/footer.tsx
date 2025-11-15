import { PenTool } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 bg-card border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <PenTool className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">Design Ascent</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Design Ascent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

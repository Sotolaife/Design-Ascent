import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 bg-card border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co/DDwd0dLh/IMG-20251121-WA0006.jpg"
              alt="Olutola Studios Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="font-headline text-xl font-bold">Olutola Studios</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Olutola Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Logo } from "@/components/logo";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="border-t bg-primary/5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8 px-4 py-8 text-center md:text-left md:px-6">
        <div className="flex justify-center md:justify-start">
          <Logo />
        </div>
        
        <div className="flex flex-col items-center gap-2">
            <h4 className="font-headline text-lg font-semibold">Contact Us</h4>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@shift.com" className="hover:underline">contact@shift.com</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Phone className="h-4 w-4" />
                <a href="tel:2407898543" className="hover:underline">(240) 789-8543</a>
            </div>
        </div>

        <nav className="flex justify-center md:justify-end gap-4 sm:gap-6">
          <Link href="/stories" className="text-sm hover:underline underline-offset-4">
            Stories
          </Link>
          <Link href="/recipes" className="text-sm hover:underline underline-offset-4">
            Recipes
          </Link>
          <Link href="/events" className="text-sm hover:underline underline-offset-4">
            Events
          </Link>
        </nav>

        <div className="md:col-span-3 text-center mt-6 text-sm text-foreground/60">
            <p>© {new Date().getFullYear()} SHIFT Movement. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

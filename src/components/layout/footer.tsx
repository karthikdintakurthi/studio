import { Logo } from "@/components/logo";
import Link from "next/link";
import { Mail, Phone, Building2 } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="border-t bg-primary/5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 items-start justify-between gap-8 px-4 py-8 text-center md:text-left md:px-6">
        <div className="flex justify-center md:justify-start">
          <Logo />
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-headline text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col items-center md:items-start gap-1">
              <Link href="/about" className="text-sm text-foreground/80 hover:underline underline-offset-4">
                About
              </Link>
              <Link href="/stories" className="text-sm text-foreground/80 hover:underline underline-offset-4">
                Stories
              </Link>
              <Link href="/recipes" className="text-sm text-foreground/80 hover:underline underline-offset-4">
                Recipes
              </Link>
              <Link href="/events" className="text-sm text-foreground/80 hover:underline underline-offset-4">
                Events
              </Link>
               <Link href="/join" className="text-sm text-foreground/80 hover:underline underline-offset-4">
                Join SHIFT Club
              </Link>
            </nav>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-headline text-lg font-semibold">School Chapters</h4>
             <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Building2 className="h-4 w-4" />
                <span>Clarksburg High School</span>
            </div>
            <p className="text-sm text-foreground/70">Learn about our club's impact and activities.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-headline text-lg font-semibold">Contact Us</h4>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:shiftchoices@gmail.com" className="hover:underline">shiftchoices@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Phone className="h-4 w-4" />
                <a href="tel:2407898543" className="hover:underline">(240) 789-8543</a>
            </div>
        </div>


        <div className="md:col-span-4 text-center mt-6 text-sm text-foreground/60">
            <p>© {new Date().getFullYear()} SHIFT Movement. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

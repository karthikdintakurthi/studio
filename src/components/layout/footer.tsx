import { Logo } from "@/components/logo";
import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="border-t bg-primary/5">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row md:px-6">
        <Logo />
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} SHIFT Movement. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
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
      </div>
    </footer>
  );
}

import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md", className)}>
      <Leaf className="h-7 w-7 text-primary" />
      <span className="font-headline text-2xl font-bold text-foreground">SHIFT</span>
    </Link>
  );
}

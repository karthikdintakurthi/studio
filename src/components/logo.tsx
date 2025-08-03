import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md", className)}>
      <Image
        src="https://storage.googleapis.com/stabl-media/SHIFT/SHIFT-logo-full-transparent.png"
        alt="SHIFT Logo"
        width={180}
        height={60}
        priority
      />
    </Link>
  );
}

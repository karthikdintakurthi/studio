import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md", className)}>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/stabl-media/o/SHIFT%2FSHIFT-logo-full-transparent.png?alt=media&token=a557b681-7782-45a3-b1d5-a3f7f84693cb"
        alt="SHIFT Logo"
        width={180}
        height={60}
        priority
      />
    </Link>
  );
}

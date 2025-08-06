import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md", className)}>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/shift-qj44z.firebasestorage.app/o/shift_logo.png?alt=media&token=a3a6904c-8fd2-4d7d-b80c-1ce92fac3328"
        alt="SHIFT Logo"
        width={150}
        height={50}
        priority
      />
    </Link>
  );
}

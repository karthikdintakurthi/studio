import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md", className)}>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/shift-qj44z.appspot.com/o/shift_logo_new.png?alt=media&token=5b06f5e2-9594-4a58-8488-8d9a2ac5117d"
        alt="SHIFT Logo"
        width={120}
        height={40}
        priority
      />
    </Link>
  );
}

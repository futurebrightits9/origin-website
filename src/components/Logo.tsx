import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <span className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors">
        FutureBright IT Solutions Pvt. Ltd.
      </span>
    </Link>
  );
}

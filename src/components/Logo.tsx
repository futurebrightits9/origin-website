import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <GraduationCap className="h-7 w-7 text-primary group-hover:animate-bounce" />
      <span className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors">
        FutureBright IT
      </span>
    </Link>
  );
}

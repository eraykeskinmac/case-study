import * as React from 'react';
import Image from 'next/image';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        linkedin:
          'border-transparent bg-[#EDF6FF] text-[#006ADC] rounded py-0 px-1 border-[0.5px] border-[#B7D9F8]',
        mail: 'border-transparent bg-[#F3F3F3] text-[#6F6F6F] rounded py-0 px-1 border-[0.5px] border-[#E2E2E2]',
        company:
          'border-transparent bg-[#F0F4FF] text-[#3451B2] rounded py-0 px-1 border-[0.5px] border-[#C6D4F9]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {variant === 'linkedin' && (
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={10}
          height={10}
          className="mr-0.5"
        />
      )}
      {icon && <span className="mr-0.5">{icon}</span>}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };

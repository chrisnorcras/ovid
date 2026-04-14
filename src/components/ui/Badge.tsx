import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-700',
        brand: 'bg-brand-100 text-brand-700',
        hazard: 'bg-hazard-muted text-hazard-dark',
        safe: 'bg-safe-muted text-safe-dark',
        info: 'bg-info-muted text-info-dark',
        accent: 'bg-accent-muted text-accent-dark',
        outline: 'border border-current bg-transparent',
        platform: 'bg-gray-900 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

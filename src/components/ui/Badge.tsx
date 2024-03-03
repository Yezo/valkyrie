import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

type BadgeProps = {
  className?: string
  children: React.ReactNode
}

const badgeVariants = cva(
  "flex select-none items-center gap-1 rounded-md px-2 font-bricolage text-xs font-medium leading-6 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-slate-500/20 text-slate-400",
        bugfix: "bg-red-500/20 text-red-400",
        improvement: "bg-sky-500/20 text-sky-400",
        update: "bg-amber-500/20 text-amber-400",
        release: "bg-indigo-500/20 text-indigo-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface BadgeCVAProps extends VariantProps<typeof badgeVariants>, BadgeProps {
  className?: string
  children: React.ReactNode
}

export const Badge = ({ className, children, variant }: BadgeCVAProps) => {
  return (
    <div className={cn(badgeVariants({ variant, className }))}>{children}</div>
  )
}

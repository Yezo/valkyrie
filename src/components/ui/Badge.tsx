import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

type BadgeProps = {
  className?: string
  children: React.ReactNode
}

const BadgeVariants = cva(
  "flex select-none items-center gap-1 rounded-md px-2 font-bricolage text-xs font-medium leading-6 shadow-sm max-w-fit",
  {
    variants: {
      variant: {
        default:
          "bg-slate-700/20 text-slate-600 border border-slate-500/10 dark:bg-slate-500/20 dark:text-slate-400",
        bugfix:
          "bg-red-600/20 text-red-500 border border-red-500/10 dark:bg-red-500/20 dark:text-red-400",
        improvement:
          "bg-sky-500/20 text-sky-600 border border-sky-500/10 dark:bg-sky-500/20 dark:text-sky-400 dark:border-none",
        update:
          "bg-amber-600/20 text-amber-500 border border-amber-600/10 dark:bg-amber-500/20 dark:text-amber-400",
        release:
          "bg-indigo-600/20 text-indigo-500 border border-indigo-600/10 dark:bg-indigo-500/20 dark:text-indigo-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface BadgeCVAProps extends VariantProps<typeof BadgeVariants>, BadgeProps {
  className?: string
  children: React.ReactNode
}

export const Badge = ({ className, children, variant }: BadgeCVAProps) => {
  return (
    <div className={cn(BadgeVariants({ variant, className }))}>{children}</div>
  )
}

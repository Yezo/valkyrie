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
        red: "bg-red-600/20 text-red-500 border border-red-500/10 dark:bg-red-500/20 dark:text-red-400",
        sky: "bg-sky-500/20 text-sky-600 border border-sky-500/10 dark:bg-sky-500/20 dark:text-sky-400 dark:border-none",
        amber:
          "bg-amber-600/20 text-amber-500 border border-amber-600/10 dark:bg-amber-500/20 dark:text-amber-400",
        indigo:
          "bg-indigo-600/20 text-indigo-500 border border-indigo-600/10 dark:bg-indigo-500/20 dark:text-indigo-400",
        purple:
          "bg-purple-600/20 text-purple-500 border border-purple-600/10 dark:bg-purple-500/20 dark:text-purple-400",
        pink: "bg-pink-600/20 text-pink-500 border border-pink-600/10 dark:bg-pink-500/20 dark:text-pink-400",
        green:
          "bg-green-600/20 text-green-500 border border-green-600/10 dark:bg-green-500/20 dark:text-green-400",
        teal: "bg-teal-600/20 text-teal-500 border border-teal-600/10 dark:bg-teal-500/20 dark:text-teal-400",
        yellow:
          "bg-yellow-600/20 text-yellow-500 border border-yellow-600/10 dark:bg-yellow-500/20 dark:text-yellow-400",
      },
      size: {
        default: "h-6",
        small: "h-4",
        large: "h-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface BadgeCVAProps extends VariantProps<typeof BadgeVariants>, BadgeProps {
  className?: string
  children: React.ReactNode
}

export const Badge = ({
  className,
  children,
  variant,
  size,
}: BadgeCVAProps) => {
  return (
    <div className={cn(BadgeVariants({ variant, size, className }))}>
      {children}
    </div>
  )
}

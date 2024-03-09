import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

type IconProps = {
  className?: string
  children: React.ReactNode
}

const IconVariants = cva("p-2 rounded shadow select-none", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      transparent: "bg-transparent text-white",
    },
    size: {
      default: "p-2",
      small: "p-1",
      large: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface IconCVAProps extends VariantProps<typeof IconVariants>, IconProps {
  className?: string
  children: React.ReactNode
}

export const Icon = ({ className, children, variant }: IconCVAProps) => {
  return (
    <div className={cn(IconVariants({ variant, className }))}>{children}</div>
  )
}

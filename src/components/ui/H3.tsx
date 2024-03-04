import { cn } from "@/lib/utils"

type H3Props = {
  className?: string
  children: React.ReactNode
}

export const H3 = ({ className, children }: H3Props) => {
  return (
    <h3 className={cn("font-bricolage sm:text-lg", className)}>{children}</h3>
  )
}

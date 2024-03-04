import { cn } from "@/lib/utils"

type H2Props = {
  className?: string
  children: React.ReactNode
}

export const H2 = ({ className, children }: H2Props) => {
  return (
    <h2 className={cn("text-lg font-bricolage sm:text-xl", className)}>
      {children}
    </h2>
  )
}

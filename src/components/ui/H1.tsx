import { cn } from "@/lib/utils"

type H1Props = {
  className?: string
  children: React.ReactNode
}

export const H1 = ({ className, children }: H1Props) => {
  return (
    <h1
      className={cn(
        "text-4xl font-semibold sm:text-5xl tracking-tight font-bricolage",
        className,
      )}
    >
      {children}
    </h1>
  )
}

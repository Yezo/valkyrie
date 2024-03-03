import { cn } from "@/lib/utils"

type BodyProps = {
  className?: string
  children: React.ReactNode
}

export const Body = ({ className, children }: BodyProps) => {
  return <body className={cn("", className)}>{children}</body>
}

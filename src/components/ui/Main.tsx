import { cn } from "@/lib/utils"

type MainProps = {
  className?: string
  children: React.ReactNode
}

export const Main = ({ className, children }: MainProps) => {
  return <main className={cn("", className)}>{children}</main>
}

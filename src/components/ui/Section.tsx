import { cn } from "@/lib/utils"

type SectionProps = {
  className?: string
  children: React.ReactNode
}

export const Section = ({ className, children }: SectionProps) => {
  return <section className={cn("", className)}>{children}</section>
}

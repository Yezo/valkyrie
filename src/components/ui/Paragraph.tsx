import { cn } from "@/lib/utils"

type ParagraphProps = {
  className?: string
  children: React.ReactNode
}

export const Paragraph = ({ className, children }: ParagraphProps) => {
  return (
    <p className={cn("text-muted-foreground leading-relaxed", className)}>
      {children}
    </p>
  )
}

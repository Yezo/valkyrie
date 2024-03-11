import { cn } from "@/lib/utils"

type AvatarPlaceholderProps = {
  className?: string
  children: React.ReactNode
}

export const AvatarPlaceholder = ({
  className,
  children,
}: AvatarPlaceholderProps) => {
  function getFirstTwoLetters(str: string | null | undefined) {
    if (typeof str === "string" && str.length >= 2) {
      return str.substring(0, 2)
    } else {
      return null
    }
  }
  return <div className={cn("", className)}>{children}</div>
}

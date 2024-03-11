import { cn } from "@/lib/utils"
import Link from "next/link"

type LinkItemProps = {
  className?: string
  children: React.ReactNode
  url: string
  newTab?: boolean
}

export const LinkItem = ({
  className,
  children,
  url,
  newTab,
}: LinkItemProps) => {
  return (
    <Link
      href={url}
      target={newTab ? "_blank" : "_self"}
      className={cn("", className)}
    >
      {children}
    </Link>
  )
}

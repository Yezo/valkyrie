import { cn } from "@/lib/utils"
import Link from "next/link"

type WordLinkProps = {
  className?: string
  children: React.ReactNode
  url: string
}

export const WordLink = ({ url, className, children }: WordLinkProps) => {
  return (
    <Link
      href={url}
      className={cn(
        "text-white font-medium transition-colors duration-300 hover:text-amber-400",
        className,
      )}
    >
      {children}
    </Link>
  )
}

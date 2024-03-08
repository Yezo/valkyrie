import { Button } from "@/components/shadcn/button"
import { DEFAULT_SIGNUP_PATH } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"

type SignUpButtonProps = {
  className?: string
  children: React.ReactNode
}

export const SignUpButton = ({ className, children }: SignUpButtonProps) => {
  return (
    <Button asChild className={cn("", className)}>
      <Link href={DEFAULT_SIGNUP_PATH}>{children}</Link>
    </Button>
  )
}

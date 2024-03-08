import { Button } from "@/components/shadcn/button"
import { DEFAULT_LOGIN_PATH } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"

type SignInButtonProps = {
  className?: string
  children: React.ReactNode
}

export const SignInButton = ({ className, children }: SignInButtonProps) => {
  return (
    <Button asChild className={cn("", className)}>
      <Link href={DEFAULT_LOGIN_PATH}>{children}</Link>
    </Button>
  )
}

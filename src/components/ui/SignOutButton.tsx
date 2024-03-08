"use client"

import { Button } from "@/components/shadcn/button"
import { signOut } from "@/config/auth"
import { DEFAULT_SIGNOUT_REDIRECT } from "@/config/site"
import { cn } from "@/lib/utils"

type SignOutButtonProps = {
  className?: string
  children: React.ReactNode
}

export const SignOutButton = ({ className, children }: SignOutButtonProps) => {
  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        signOut({ redirect: true, redirectTo: DEFAULT_SIGNOUT_REDIRECT })
      }}
      className={cn("", className)}
    >
      {children}
    </Button>
  )
}

"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/shadcn/button"
import { UpdateIcon } from "@radix-ui/react-icons"

type FormSubmitButtonProps = {
  className?: string
  children: React.ReactNode
  pending: boolean
}

export const FormSubmitButton = ({
  className,
  children,
  pending,
}: FormSubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className={cn(
        "flex h-11 items-center justify-center gap-2 font-bricolage text-sm transition-colors duration-300",
        className,
      )}
    >
      {pending ? (
        <>
          <UpdateIcon className="animate-spin" />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </Button>
  )
}

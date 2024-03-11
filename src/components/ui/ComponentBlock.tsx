"use client"

import { SyntaxCodeBlock } from "@/components/ui/SyntaxCodeBlock"
import { cn } from "@/lib/utils"
import { CaretRightIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { H1 } from "@/components/ui/H1"
import { Paragraph } from "@/components/ui/Paragraph"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible"

type ComponentBlockProps = {
  className?: string
  children: React.ReactNode
}

export const ComponentBlock = ({
  className,
  children,
}: ComponentBlockProps) => {
  return (
    <div className={cn("overflow-hidden rounded-xl border", className)}>
      {children}
    </div>
  )
}

type ComponentDisplayProps = {
  className?: string
  children: React.ReactNode
}

export const ComponentDisplay = ({
  className,
  children,
}: ComponentDisplayProps) => {
  return (
    <div className={cn("flex flex-col gap-2 p-4", className)}>{children}</div>
  )
}

type ComponentCollapsibleProps = {
  className?: string
  children: React.ReactNode
}

export const ComponentCollapsible = ({
  className,
  children,
}: ComponentCollapsibleProps) => {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible className="overflow-hidden" open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger
        className={cn(
          `flex min-w-full items-center gap-2 px-4 py-4 font-bricolage text-sm text-muted-foreground ${open && "border-b"}`,
          className,
        )}
      >
        <CaretRightIcon /> Show code
      </CollapsibleTrigger>
      <CollapsibleContent className="min-h-full text-sm text-muted-foreground">
        {/* @ts-ignore */}
        <SyntaxCodeBlock>{children}</SyntaxCodeBlock>
      </CollapsibleContent>
    </Collapsible>
  )
}

type ComponentHeaderProps = {
  className?: string
  title: string
  description: string
}

export const ComponentHeader = ({
  className,
  title,
  description,
}: ComponentHeaderProps) => {
  return (
    <section className={cn("mb-12 h-[125px] space-y-4", className)}>
      <H1>{title}</H1>
      <Paragraph>{description}</Paragraph>
    </section>
  )
}

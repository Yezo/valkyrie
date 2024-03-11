"use client"

import { cn } from "@/lib/utils"
import { CheckIcon, CopyIcon, DrawingPinIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

type SyntaxCodeBlockProps = {
  className?: string
  children: string | string[]
}

export const SyntaxCodeBlock = ({
  className,
  children,
}: SyntaxCodeBlockProps) => {
  const [open, setOpen] = useState(false)
  let timeoutId: NodeJS.Timeout | null = null

  const customStyle = {
    margin: "0px",
    backgroundColor: "#020817",
    fontSize: "1rem",
  }
  function handleClick() {
    navigator.clipboard.writeText(children as string) // Replace 'Text to copy' with your actual text
    setOpen(true)

    if (timeoutId) {
      clearTimeout(timeoutId!) // Use the non-null assertion operator
    }

    timeoutId = setTimeout(() => {
      setOpen(false)
    }, 1500)
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId!) // Clear the timeout if the component unmounts before the 3 seconds
    }
  }, [timeoutId])

  return (
    <div className={cn("relative", className)}>
      <button
        className={`absolute right-0 mr-4 mt-4 rounded-md p-2 font-bricolage text-sm tracking-tight transition-all duration-300 hover:bg-muted-foreground/[.15] hover:text-slate-200 ${open && "text-slate-200"}`}
        onClick={handleClick}
      >
        {open ? <CheckIcon /> : <CopyIcon />}
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={customStyle}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

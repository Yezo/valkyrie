"use client"

import { cn } from "@/lib/utils"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/shadcn/input"

type SearchInputProps = {
  className?: string
  param?: string
}

export const SearchInput = ({ className, param }: SearchInputProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedPlaceholder = searchParams.get(param || "")
  const [value, setValue] = useState(selectedPlaceholder)

  const debounced = useDebouncedCallback((value) => {
    setValue(value)
  }, 1000)

  useEffect(() => {
    if (value) {
      router.replace(`/?q=${value}`)
    }
  }, [router, value])

  return (
    <div className={cn("flex w-[180px] items-center py-4 pt-8", className)}>
      <Input
        placeholder={value ? value : "Search..."}
        type="text"
        className="capitalize placeholder:capitalize"
        defaultValue={""}
        onChange={(e) => debounced(e.target.value)}
      />
      <MagnifyingGlassIcon className="-m-7 text-muted-foreground" />
    </div>
  )
}

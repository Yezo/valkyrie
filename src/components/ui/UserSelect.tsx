"use client"

import { capitalizePlaceholder, cn } from "@/lib/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select"

type UserSelectProps = {
  className?: string
}

export const UserSelect = ({ className }: UserSelectProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const fruit = searchParams.get("fruit")

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  function onChange(item: string) {
    router.replace(
      `${pathname + "?" + createQueryString("fruit", `${item.toLowerCase()}`)}`,
    )
  }

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue
          placeholder={fruit ? capitalizePlaceholder(fruit) : "Select a fruit"}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Apple">Apple</SelectItem>
          <SelectItem value="Banana">Banana</SelectItem>
          <SelectItem value="Blueberry">Blueberry</SelectItem>
          <SelectItem value="Grapes">Grapes</SelectItem>
          <SelectItem value="Pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

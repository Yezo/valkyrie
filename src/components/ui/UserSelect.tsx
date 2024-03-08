"use client"

import { capitalizeStr, cn } from "@/lib/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { ItemsType } from "@/types"
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
  placeholder: string
  items: ItemsType
  param?: string
}

export const UserSelect = ({
  className,
  placeholder,
  items,
  param,
}: UserSelectProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const selectedPlaceholder = searchParams.get(param || "")

  // Merge pre-existing params with a provided key/value pair
  const createQueryString = useCallback(
    (name: string | undefined, value: string) => {
      if (name) {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
        return params.toString()
      }
      return null
    },
    [searchParams],
  )

  function onChange(item: string) {
    const paramVal = item.toLowerCase()
    const newURL = `${pathname + "?" + createQueryString(param, paramVal)}`
    if (param) router.replace(newURL)
    //If param wasn't passed as props, then onChange logic goes here
    else console.log(item)
  }

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue
          placeholder={
            selectedPlaceholder
              ? capitalizeStr(selectedPlaceholder)
              : placeholder
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map(({ value, label }) => (
            <SelectItem value={value} key={label}>
              {capitalizeStr(label)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

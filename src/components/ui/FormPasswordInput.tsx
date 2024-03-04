import { cn } from "@/lib/utils"
import { Input } from "@/components/shadcn/input"
import { useFormContext } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/shadcn/form"
import { useState } from "react"
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons"

type FormPasswordInputProps = {
  value: string
  className?: string
  description?: string
  label?: string
}

export const FormPasswordInput = ({
  value,
  className,
  description,
  label,
}: FormPasswordInputProps) => {
  const { control } = useFormContext()
  const [passwordVisiblity, setPasswordVisiblity] = useState(false)

  return (
    <FormField
      control={control}
      name={value}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="capitalize font-bricolage">{label}</FormLabel>
          )}
          <FormControl>
            <div className="flex items-center">
              <Input
                placeholder="**********"
                type={passwordVisiblity ? "text" : "password"}
                className=" flex h-11 items-center justify-center border p-4 font-bricolage text-sm transition-colors duration-300"
                {...field}
              />
              {passwordVisiblity ? (
                <EyeNoneIcon
                  className="-m-8 cursor-pointer text-muted-foreground"
                  onClick={() => setPasswordVisiblity(!passwordVisiblity)}
                />
              ) : (
                <EyeOpenIcon
                  className="-m-8 cursor-pointer text-muted-foreground"
                  onClick={() => setPasswordVisiblity(!passwordVisiblity)}
                />
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

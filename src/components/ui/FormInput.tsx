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

type FormInputProps = {
  value: string
  placeholder: string
  className?: string
  description?: string
  label?: string
}

export const FormInput = ({
  value,
  placeholder,
  className,
  description,
  label,
}: FormInputProps) => {
  const { control } = useFormContext()

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
            <Input
              placeholder={placeholder}
              {...field}
              className={cn(
                "flex h-11 items-center justify-center border p-4 font-bricolage text-sm transition-colors duration-300",
                className,
              )}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

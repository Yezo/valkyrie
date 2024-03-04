import { cn } from "@/lib/utils"
import { useFormContext } from "react-hook-form"
import { Textarea } from "@/components/shadcn/textarea"
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/shadcn/form"

type FormTextAreaProps = {
  value: string
  placeholder: string
  className?: string
  description?: string
  label?: string
}

export const FormTextArea = ({
  value,
  placeholder,
  className,
  description,
  label,
}: FormTextAreaProps) => {
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
            <Textarea
              placeholder={placeholder}
              className={cn(
                "flex items-center justify-center border p-4 font-bricolage text-sm transition-colors duration-300 min-h-28 resize-none",
                className,
              )}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

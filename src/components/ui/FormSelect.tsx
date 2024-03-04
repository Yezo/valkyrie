import { cn } from "@/lib/utils"
import { useFormContext } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/shadcn/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select"

type FormSelectProps = {
  value: string
  placeholder: string
  className?: string
  description?: string
  label?: string
  items: {
    value: string
    label: string
  }[]
}

export const FormSelect = ({
  value,
  placeholder,
  className,
  description,
  label,
  items,
}: FormSelectProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={value}
      render={({ field }) => (
        <FormItem>
          {label ? (
            <FormLabel className="capitalize font-bricolage">{label}</FormLabel>
          ) : null}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger
                className={cn(
                  "data-[placeholder]:text-muted-foreground data-[placeholder]:font-bricolage text-sm",
                  className,
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="font-bricolage">
              {items.map(({ value, label }) => (
                <SelectItem value={value} key={value} className="text-sm">
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

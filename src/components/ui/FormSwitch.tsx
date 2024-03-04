import { cn } from "@/lib/utils"
import { Switch } from "@/components/shadcn/switch"
import { useFormContext } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  FormLabel,
} from "@/components/shadcn/form"

type FormSwitchProps = {
  value: string
  description: string
  label: string
  className?: string
  disabled?: boolean
}

export const FormSwitch = ({
  value,
  description,
  label,
  className,
  disabled,
}: FormSwitchProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={value}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm h-20">
              <div className="space-y-0.5">
                <FormLabel className="capitalize font-bricolage text-sm">
                  {label}
                </FormLabel>

                <FormDescription className="text-xs pr-4 sm:pr-8 md:pr-12">
                  {description}
                </FormDescription>
              </div>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                className={cn("", className)}
                disabled={disabled ?? false}
              />
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

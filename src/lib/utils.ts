import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateToast({
  type,
  value,
  description,
}: {
  type: "success" | "warning" | "error" | "info"
  value?: string
  description?: string
}) {
  switch (type) {
    case "success":
      return toast.success(value, { description })
    case "warning":
      return toast.warning(value, { description })
    case "info":
      return toast.info(value, { description })
    case "error":
      return toast.error(value, { description })
    default:
      return typeof type === "undefined" ? toast(value) : null
  }
}

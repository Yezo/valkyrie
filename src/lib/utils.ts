import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ApiError = {
  invalidInput: "This input is invalid.",
  duplicateUser: "This username/email already exists.",
  duplicateEmail: "This username/email already exists.",
  error: "There was an error processing your request.",
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

export const getErrorMessage = (error: unknown): string => {
  // Check if the error is an instance of Error class
  if (error instanceof Error) return error.message
  // Check if the error is an object and contains a 'message' property
  else if (typeof error === "object" && error && "message" in error) {
    return String((error as any).message)
  }
  // Check if the error is a string
  else if (typeof error === "string") return error
  // If none of the above conditions met, return a default error message
  else return ApiError.error
}

export function capitalizeStr(input: string | undefined): string | undefined {
  // Return undefined or an empty string if input is undefined or an empty string
  if (!input || input.length === 0) return input

  const words = input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  return words.join(" ")
}

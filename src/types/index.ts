// Reusable types
// All types should end with only Type or Props (componentType or componentProps)

export type DatabasePromiseType =
  | "success"
  | "error"
  | "user-duplicate"
  | "email-duplicate"
  | "not-found"
  | "invalid-input"
  | null

export type ActionPromiseType = { error: string } | { success: string }

export type ItemsType = {
  label: string
  value: string
}[]
